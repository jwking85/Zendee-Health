// services/geminiService.ts
import type { HealthResponse, UserProfile } from "../types";
import { buildHealthPrompt } from "./healthPrompt";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const MODEL_ID = "gemini-2.5-flash";
const API_BASE = "https://generativelanguage.googleapis.com/v1beta";

export const fetchHealthAdviceGemini = async (
  symptom: string,
  profile?: UserProfile | null
): Promise<HealthResponse> => {
  if (!apiKey) {
    console.error("VITE_GEMINI_API_KEY is missing");
    throw new Error("AI configuration missing");
  }

  try {
    const prompt = buildHealthPrompt(symptom, profile);

    const response = await fetch(
      `${API_BASE}/models/${MODEL_ID}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.6,
            maxOutputTokens: 4096
          }
        })
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Gemini API Response:", errorData);
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const data = await response.json();

    const rawText =
      data?.candidates?.[0]?.content?.parts?.[0]?.text
        ?.replace(/```json\n?/gi, "")
        ?.replace(/```\n?/gi, "")
        ?.trim() ?? "";

    if (!rawText) {
      throw new Error("Invalid response from Gemini");
    }

    const parsed = JSON.parse(rawText);

    const safe: HealthResponse = {
      standard: {
        diagnosis:
          parsed?.standard?.diagnosis ??
          "No diagnosis summary is available yet.",
        rationale: parsed?.standard?.rationale ?? "",
        redFlags: parsed?.standard?.redFlags ?? [],
        whatToAskDoctor: parsed?.standard?.whatToAskDoctor ?? []
      },
      holistic: {
        protocols: parsed?.holistic?.protocols ?? [],
        lifestyle: parsed?.holistic?.lifestyle ?? [],
        supplements: parsed?.holistic?.supplements ?? [],
        cautions: parsed?.holistic?.cautions ?? []
      }
    };

    return safe;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("We couldn't complete the analysis. Please try again.");
  }
};
