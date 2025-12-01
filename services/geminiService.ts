import { HealthResponse, UserProfile } from '../types';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const generatePrompt = (symptom: string, profile?: UserProfile | null) => `
You are Zendee Health. Compare "Standard Medical" and "Natural Wellness" perspectives.

Analyze this symptom: "${symptom}"

TONE RULES:
- Write like a smart friend. Direct. Clear.
- Short sentences.
- No "journey", "empower", "comprehensive", "utilize", "leverage".
- No em-dashes. Use periods or commas.
- No "Furthermore" or "Moreover".
- Max one exclamation point.

${profile ? `USER PROFILE:
Age: ${profile.ageRange}
Conditions: ${profile.conditions.join(', ') || 'None'}
Diet: ${profile.diet}
Adjust protocols for this profile. Flag contraindications.` : ''}

Return ONLY valid JSON (no markdown, no code blocks):

{
  "medical": {
    "diagnosis": "What a doctor would typically investigate",
    "treatments": ["Treatment 1", "Treatment 2", "Treatment 3"],
    "timeline": "e.g. Symptom relief: 20-60 minutes",
    "considerations": ["Honest side effect 1", "Consideration 2"]
  },
  "holistic": {
    "philosophy": "2-3 clear sentences on the natural view. Start 'Natural wellness views...'",
    "rootCause": "Root cause analysis (gut, metabolic, etc.)",
    "timeline": "e.g. Initial improvements: 1-3 weeks. Root cause resolution: 4-12 weeks",
    "researchNote": "Citation: 'A 2019 study in [Journal] found...'",
    "protocols": [
      {
        "focusArea": "Category (e.g. Metabolic)",
        "title": "Protocol Name",
        "approach": "Brief summary",
        "details": "Specifics: Amount (400mg), Timing (morning), Frequency (daily), Products (Magnesium Glycinate)",
        "reasoning": "Why this helps",
        "shoppingList": ["Specific Product 1", "Specific Product 2"]
      }
    ]
  }
}

Include 4-6 protocols covering metabolic, gut, nutritional, and lifestyle approaches.
`;

export const fetchHealthAdvice = async (symptom: string, profile?: UserProfile | null): Promise<HealthResponse> => {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: generatePrompt(symptom, profile) }] }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 4096
          }
        })
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error("API Response:", errorData);
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.candidates || !data.candidates[0]?.content?.parts?.[0]?.text) {
      throw new Error("Invalid response from API");
    }
    
    let text = data.candidates[0].content.parts[0].text;
    
    // Clean up response if it has markdown code blocks
    text = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    
    return JSON.parse(text) as HealthResponse;
    
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("We couldn't complete the analysis. Please try again.");
  }
};
