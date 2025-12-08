// Updated types for side-by-side comparison structure

export type DietType = 'none' | 'keto' | 'vegan' | 'vegetarian' | 'gluten-free' | 'low-carb' | 'paleo';
export type BudgetLevel = 'low' | 'medium' | 'high';

export interface UserInput {
  symptom: string;
  dietType: DietType;
  budget: BudgetLevel;
}

export interface UserProfile {
  ageRange: string;
  conditions: string[];
  diet: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  inspiredBy?: string[];
  benefitSummary: string;
  usageNotes: string;
  amazonSearchQuery: string;
  priority: number;
}

/**
 * Core shape that Gemini should return.
 * This powers the side-by-side comparison.
 */
export interface RecommendationResponse {
  // What the user searched for
  symptom: string;

  // One-sentence overall summary, neutral
  summary: string;

  // Global safety disclaimer
  disclaimer: string;

  // 🔹 Standard medical view
  standardDiagnosis: string;           // e.g. "Gastroesophageal reflux (heartburn)"
  standardExplanation: string;         // clear MD-style explanation
  standardTreatments: string[];        // bullet points: meds + lifestyle

  // 🔹 Holistic / natural view
  holisticRootCause: string;          // e.g. "Some holistic practitioners view this as low stomach acid"
  holisticExplanation: string;        // narrative holistic explanation
  holisticProtocols: string[];        // bullet points: natural remedies / habits

  // Products to show in shopping list etc.
  products: Product[];
}

// Legacy types for backward compatibility during migration
export interface HolisticProtocol {
  focusArea: string;
  title: string;
  approach: string;
  details: string;
  reasoning: string;
  shoppingList: string[];
}

export interface HealthResponse {
  standard: {
    diagnosis: string;
    rationale: string;
    redFlags: string[];
    whatToAskDoctor: string[];
  };
  holistic: {
    protocols: HolisticProtocol[];
    lifestyle: string[];
    supplements: string[];
    cautions: string[];
  };
}

export type LoadingStage = 'idle' | 'analyzing' | 'researching' | 'comparing' | 'finalizing';
