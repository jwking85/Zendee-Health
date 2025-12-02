import type { HealthResponse, UserProfile } from "../types";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

// You can swap this to "gemini-flash-latest" or "gemini-2.5-pro" later if you want
const MODEL_ID = "gemini-2.5-flash";
const API_BASE = "https://generativelanguage.googleapis.com/v1beta";

// 🔹 CHANGE #1: make Gemini stick to a strict JSON shape
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
Conditions: ${profile.conditions?.join(", ") || "None"}
Diet: ${profile.diet}
Adjust protocols for this profile. Flag contraindications.` : ""}

Return ONLY valid JSON (no markdown, no code blocks) with this exact structure:

{
  "standard": {
    "diagnosis": "Short, plain-language name for what might be going on",
    "rationale": "1–2 short paragraphs explaining the reasoning",
    "redFlags": [
      "One warning sign that needs urgent in-person care",
      "Another warning sign"
    ],
    "whatToAskDoctor": [
      "A specific question to ask a licensed clinician",
      "Another concrete question"
    ]
  },
  "holistic": {
    "philosophy": "A brief 1-2 sentence philosophy or approach statement",
    "rootCause": "What the root cause might be from a holistic perspective",
    "timeline": "Expected timeline for natural approaches",
    "researchNote": "Brief note about research or evidence base",
    "protocols": [
      {
        "focusArea": "Category like 'Gut Health' or 'Sleep'",
        "title": "Short title for this protocol",
        "approach": "Brief explanation of the approach",
        "details": "Specific actionable details",
        "reasoning": "Why this protocol helps",
        "shoppingList": ["Specific product 1", "Specific product 2"]
      }
    ]
  }
}
`;

export const fetchHealthAdvice = async (
  symptom: string,
  profile?: UserProfile | null
): Promise<HealthResponse> => {
  if (!apiKey) {
    console.error("VITE_GEMINI_API_KEY is missing");
    throw new Error("AI configuration missing");
  }

  try {
    const response = await fetch(
      `${API_BASE}/models/${MODEL_ID}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: generatePrompt(symptom, profile) }] }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 4096,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error("API Response:", errorData);
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();

    const rawText =
      data?.candidates?.[0]?.content?.parts?.[0]?.text
        ?.replace(/```json\n?/g, "")
        ?.replace(/```\n?/g, "")
        ?.trim() ?? "";

    if (!rawText) {
      throw new Error("Invalid response from API");
    }

    const parsed = JSON.parse(rawText);

    // 🔹 CHANGE #2: normalize so UI never sees undefined
    const safe: HealthResponse = {
      standard: {
        diagnosis:
          parsed?.standard?.diagnosis ??
          "No diagnosis summary is available yet.",
        rationale: parsed?.standard?.rationale ?? "",
        redFlags: parsed?.standard?.redFlags ?? [],
        whatToAskDoctor: parsed?.standard?.whatToAskDoctor ?? [],
      },
      holistic: {
        protocols: parsed?.holistic?.protocols ?? [],
        lifestyle: parsed?.holistic?.lifestyle ?? [],
        supplements: parsed?.holistic?.supplements ?? [],
        cautions: parsed?.holistic?.cautions ?? [],
      },
    };

    return safe;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("We couldn't complete the analysis. Please try again.");
  }
};
