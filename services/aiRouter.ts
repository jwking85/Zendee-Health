// services/aiRouter.ts
import type { RecommendationResponse, UserProfile } from "../types";
import { fetchHealthAdviceGemini } from "./geminiService";
import { fetchHealthAdviceOpenAI } from "./openaiService";

export const getHealthAdvice = async (
  symptom: string,
  profile?: UserProfile | null
): Promise<RecommendationResponse> => {
  try {
    return await fetchHealthAdviceGemini(symptom, profile);
  } catch (err) {
    console.warn("Gemini failed, falling back to OpenAI:", err);
    return await fetchHealthAdviceOpenAI(symptom, profile);
  }
};
