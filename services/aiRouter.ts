// services/aiRouter.ts
import type { RecommendationResponse, UserProfile } from "../types";

export const getHealthAdvice = async (
  symptom: string,
  profile?: UserProfile | null
): Promise<RecommendationResponse> => {
  try {
    const response = await fetch('/api/health-advice', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        symptom,
        profile,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `API error: ${response.status}`);
    }

    const data = await response.json();
    return data as RecommendationResponse;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to get health advice. Please try again.';
    console.error('Health advice API error:', error);
    throw new Error(errorMessage);
  }
};
