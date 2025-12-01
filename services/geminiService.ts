import { GoogleGenAI } from "@google/genai";
import { HealthResponse, UserProfile } from '../types';

const generateSystemInstruction = (profile?: UserProfile | null) => `
You are Zendee Health. Compare "Standard Medical" and "Natural Wellness" perspectives.

TONE RULES:
- Write like a smart friend. Direct. Clear.
- Short sentences.
- No "journey", "empower", "comprehensive", "utilize", "leverage".
- No em-dashes (—). Use periods or commas.
- No "Furthermore" or "Moreover".
- Max one exclamation point.

${profile ? `USER PROFILE:
Age: ${profile.ageRange}
Conditions: ${profile.conditions.join(', ') || 'None'}
Diet: ${profile.diet}
Adjust protocols for this profile. Flag contraindications.` : ''}

OUTPUT FORMAT: Return ONLY valid JSON.
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
`;

export const fetchHealthAdvice = async (symptom: string, profile?: UserProfile | null): Promise<HealthResponse> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Analyze symptom: "${symptom}"`,
      config: {
        systemInstruction: generateSystemInstruction(profile),
        responseMimeType: "application/json"
      }
    });

    const text = response.text;
    
    if (!text) {
      throw new Error("Unable to analyze this query.");
    }

    const jsonString = text.replace(/```json/g, '').replace(/```/g, '').trim();
    
    return JSON.parse(jsonString) as HealthResponse;

  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("We couldn't complete the analysis. Please try again.");
  }
};