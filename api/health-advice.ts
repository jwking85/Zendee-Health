// api/health-advice.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';

// Gemini API
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_MODEL = 'gemini-2.5-flash';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta';

// OpenAI API
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_MODEL = 'gpt-4o-mini';

interface UserProfile {
  age?: number;
  gender?: string;
  lifestyle?: string;
  dietPreference?: string;
  medicalConditions?: string[];
}

interface HealthRequest {
  symptom: string;
  profile?: UserProfile | null;
}

// Build the health prompt
function buildHealthPrompt(symptom: string, profile?: UserProfile | null): string {
  let prompt = `You are a health education assistant comparing standard medical care with holistic/functional medicine approaches.

User symptom or concern: "${symptom}"`;

  if (profile) {
    prompt += `\n\nUser profile:`;
    if (profile.age) prompt += `\n- Age: ${profile.age}`;
    if (profile.gender) prompt += `\n- Gender: ${profile.gender}`;
    if (profile.lifestyle) prompt += `\n- Lifestyle: ${profile.lifestyle}`;
    if (profile.dietPreference) prompt += `\n- Diet: ${profile.dietPreference}`;
    if (profile.medicalConditions?.length) {
      prompt += `\n- Medical conditions: ${profile.medicalConditions.join(', ')}`;
    }
  }

  prompt += `

Please provide a balanced, educational comparison between standard medical approaches and holistic/functional medicine approaches for this symptom.

Return a JSON object with this exact structure:
{
  "symptom": "string (the symptom name)",
  "summary": "string (1-2 sentence overview)",
  "disclaimer": "string (medical disclaimer)",
  "keyDifference": "string (main philosophical difference between approaches)",
  "standardDiagnosis": "string (what standard medicine calls this)",
  "standardExplanation": "string (how standard medicine explains it)",
  "standardTreatments": ["array of strings (typical treatments)"],
  "holisticRootCause": "string (what holistic practitioners call this)",
  "holisticExplanation": "string (root cause explanation)",
  "holisticProtocols": ["array of strings (holistic approaches)"],
  "products": [
    {
      "name": "string",
      "category": "string (supplement/herb/lifestyle/food)",
      "description": "string",
      "availability": "string (e.g., 'Widely Available')",
      "recommendedFor": "string (standard/holistic/both)"
    }
  ]
}

Now generate a complete RecommendationResponse in JSON for this user.`;

  return prompt;
}

// Call Gemini API
async function callGemini(symptom: string, profile?: UserProfile | null) {
  if (!GEMINI_API_KEY) {
    throw new Error('Gemini API key not configured');
  }

  const prompt = buildHealthPrompt(symptom, profile);

  const response = await fetch(
    `${GEMINI_API_URL}/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.6,
          maxOutputTokens: 4096,
        },
      }),
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Gemini API error:', errorText);
    throw new Error(`Gemini API error: ${response.status}`);
  }

  const data = await response.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text
    ?.replace(/```json\n?/gi, '')
    ?.replace(/```\n?/gi, '')
    ?.trim();

  if (!text) {
    throw new Error('Invalid response from Gemini');
  }

  return JSON.parse(text);
}

// Call OpenAI API
async function callOpenAI(symptom: string, profile?: UserProfile | null) {
  if (!OPENAI_API_KEY) {
    throw new Error('OpenAI API key not configured');
  }

  const prompt = buildHealthPrompt(symptom, profile);

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: OPENAI_MODEL,
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.6,
      response_format: { type: 'json_object' },
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('OpenAI API error:', errorText);
    throw new Error(`OpenAI API error: ${response.status}`);
  }

  const data = await response.json();
  const content = data?.choices?.[0]?.message?.content;

  if (!content) {
    throw new Error('No content in OpenAI response');
  }

  return JSON.parse(content);
}

// Main handler
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { symptom, profile } = req.body as HealthRequest;

    if (!symptom || typeof symptom !== 'string') {
      return res.status(400).json({ error: 'Symptom is required' });
    }

    // Try Gemini first, fallback to OpenAI
    let result;
    let usedProvider = 'gemini';
    try {
      result = await callGemini(symptom, profile);
    } catch (geminiError) {
      console.warn('Gemini failed, trying OpenAI:', geminiError);
      usedProvider = 'openai';
      try {
        result = await callOpenAI(symptom, profile);
      } catch (openaiError) {
        console.error('Both AI providers failed:', { geminiError, openaiError });
        throw new Error('Unable to generate health advice at this time. Please try again later.');
      }
    }

    // Ensure safe defaults
    const safeResult = {
      symptom: result?.symptom || symptom,
      summary: result?.summary || '',
      disclaimer:
        result?.disclaimer ||
        'This is general educational information, not medical advice. Consult a healthcare professional for personalized care.',
      keyDifference: result?.keyDifference || '',
      standardDiagnosis: result?.standardDiagnosis || '',
      standardExplanation: result?.standardExplanation || '',
      standardTreatments: Array.isArray(result?.standardTreatments)
        ? result.standardTreatments
        : [],
      holisticRootCause: result?.holisticRootCause || '',
      holisticExplanation: result?.holisticExplanation || '',
      holisticProtocols: Array.isArray(result?.holisticProtocols)
        ? result.holisticProtocols
        : [],
      products: Array.isArray(result?.products)
        ? result.products.map((p: unknown) => {
            const product = p as Record<string, unknown>;
            return {
              ...product,
              recommendedFor: product.recommendedFor || 'both',
            };
          })
        : [],
    };

    return res.status(200).json(safeResult);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('API error:', error);
    return res.status(500).json({
      error: 'Failed to generate health advice',
      message: errorMessage,
    });
  }
}
