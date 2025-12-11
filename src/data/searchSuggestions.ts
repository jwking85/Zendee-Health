// src/data/searchSuggestions.ts

export interface SearchSuggestion {
  label: string;
  // optional route if you ever want to navigate instead of just filling the box
  route?: string;
}

export const SEARCH_SUGGESTIONS: SearchSuggestion[] = [
  // Core conditions
  { label: 'joint pain' },
  { label: 'chronic knee pain' },
  { label: 'headaches and migraines' },
  { label: 'tension headache' },
  { label: 'acid reflux' },
  { label: 'burning in chest after eating' },
  { label: 'heartburn at night' },
  { label: 'bloating after every meal' },
  { label: 'constipation' },
  { label: 'IBS symptoms' },
  { label: 'anxiety' },
  { label: 'health anxiety' },
  { label: 'trouble sleeping' },
  { label: 'insomnia' },
  { label: 'high blood pressure' },
  { label: 'fatty liver' },
  { label: 'hormone imbalance' },

  // Symptom phrases (new pages you added)
  { label: 'sharp left side stomach pain' },
  { label: 'constant head pressure but no pain' },
  { label: 'why am I tired all the time' },
  { label: 'morning stiff joints' },
  { label: 'lower back pain that comes and goes' },
  { label: 'throat tightness or lump feeling' },
  { label: 'shortness of breath after eating' },
  { label: 'dizzy when standing up' },

  // Holistic-style phrases
  { label: 'natural remedies for joint pain' },
  { label: 'natural remedies for heartburn' },
  { label: 'supplements for anxiety' },
  { label: 'natural sleep aids' },
  { label: 'herbal remedies for stress' },
];
