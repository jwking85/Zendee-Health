
export interface UserProfile {
  ageRange: string;
  conditions: string[];
  diet: string;
}

export interface MedicalPath {
  diagnosis: string;
  rationale: string;
  redFlags: string[];
  whatToAskDoctor: string[];
}

export interface HolisticProtocol {
  focusArea: string;
  title: string;
  approach: string;
  details?: string;
  reasoning?: string;
  shoppingList?: string[];
}

export interface HolisticPath {
  protocols: HolisticProtocol[];
  lifestyle: string[];
  supplements: string[];
  cautions: string[];
}

export interface HealthResponse {
  standard: MedicalPath;
  holistic: HolisticPath;
}

export type LoadingStage = 'idle' | 'analyzing' | 'researching' | 'comparing' | 'finalizing';
