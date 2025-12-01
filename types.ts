
export interface UserProfile {
  ageRange: string;
  conditions: string[];
  diet: string;
}

export interface MedicalPath {
  diagnosis: string;
  treatments: string[];
  timeline: string;
  considerations: string[];
}

export interface HolisticProtocol {
  focusArea: string;
  title: string;
  approach: string;
  details: string; // Pro specific details
  reasoning: string;
  shoppingList: string[]; // Pro specific products
}

export interface HolisticPath {
  philosophy: string;
  rootCause: string;
  timeline: string;
  researchNote: string;
  protocols: HolisticProtocol[];
}

export interface HealthResponse {
  medical: MedicalPath;
  holistic: HolisticPath;
}

export type LoadingStage = 'idle' | 'analyzing' | 'researching' | 'comparing' | 'finalizing';
