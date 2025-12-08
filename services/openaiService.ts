// services/openaiService.ts
import type { RecommendationResponse, UserProfile } from "../types";
import { buildHealthPrompt } from "./healthPrompt";

const openaiKey = import.meta.env.VITE_OPENAI_API_KEY;
const OPENAI_MODEL_ID = "gpt-4o-mini"; // or "gpt-4o"

export const fetchHealthAdviceOpenAI = async (
  symptom: string,
  profile?: UserProfile | null
): Promise<RecommendationResponse> => {
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

    let parsed: RecommendationResponse;
    try {
      const content = data?.choices?.[0]?.message?.content;
      if (!content) {
        throw new Error("No content in OpenAI response");
      }
      parsed = JSON.parse(content);
    } catch (e) {
      console.error("Failed to parse OpenAI JSON:", data);
      throw new Error("Invalid JSON from OpenAI");
    }

    // Ensure all required fields are present with safe defaults
    const safe: RecommendationResponse = {
      symptom: parsed?.symptom || symptom,
      summary: parsed?.summary || "",
      disclaimer: parsed?.disclaimer || "This is general educational information, not medical advice. Consult a healthcare professional for personalized care.",

      standardDiagnosis: parsed?.standardDiagnosis || "",
      standardExplanation: parsed?.standardExplanation || "",
      standardTreatments: Array.isArray(parsed?.standardTreatments) ? parsed.standardTreatments : [],

      holisticRootCause: parsed?.holisticRootCause || "",
      holisticExplanation: parsed?.holisticExplanation || "",
      holisticProtocols: Array.isArray(parsed?.holisticProtocols) ? parsed.holisticProtocols : [],

      products: Array.isArray(parsed?.products) ? parsed.products : []
    };

    return safe;
  } catch (error) {
    console.error("OpenAI API Error:", error);
    throw new Error("We couldn't complete the analysis. Please try again.");
  }
};
