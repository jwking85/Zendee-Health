// services/openaiService.ts
import type { HealthResponse, UserProfile } from "../types";
import { buildHealthPrompt } from "./healthPrompt";

const openaiKey = import.meta.env.VITE_OPENAI_API_KEY;
const OPENAI_MODEL_ID = "gpt-4o-mini"; // or "gpt-4o"

export const fetchHealthAdviceOpenAI = async (
  symptom: string,
  profile?: UserProfile | null
): Promise<HealthResponse> => {
  if (!openaiKey) {
    console.error("VITE_OPENAI_API_KEY is missing");
    throw new Error("AI configuration missing");
  }

  try {
    const prompt = buildHealthPrompt(symptom, profile);

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${openaiKey}`
      },
      body: JSON.stringify({
        model: OPENAI_MODEL_ID,
        messages: [
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.6,
        response_format: { type: "json_object" } // forces JSON in newer models
      })
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("OpenAI API Response:", errorData);
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    const parsed = data?.choices?.[0]?.message?.content
      ? JSON.parse(data.choices[0].message.content)
      : null;

    if (!parsed) {
      throw new Error("Invalid response from OpenAI");
    }

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
    console.error("OpenAI API Error:", error);
    throw new Error("We couldn't complete the analysis. Please try again.");
  }
};
