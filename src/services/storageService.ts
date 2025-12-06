// src/services/storageService.ts
// Safe, lightweight wrapper around localStorage for RemedyClear

const isBrowser = typeof window !== "undefined";

const STORAGE_KEYS = {
  LAST_SYMPTOM: "remedyclear:lastSymptom",
  LAST_RESULTS: "remedyclear:lastResults",
};

export function saveLastSymptom(symptom: string) {
  if (!isBrowser) return;
  try {
    localStorage.setItem(STORAGE_KEYS.LAST_SYMPTOM, symptom);
  } catch {
    // fail silently on storage errors
  }
}

export function getLastSymptom(): string | null {
  if (!isBrowser) return null;
  try {
    return localStorage.getItem(STORAGE_KEYS.LAST_SYMPTOM);
  } catch {
    return null;
  }
}

export function saveLastResults<T = unknown>(results: T) {
  if (!isBrowser) return;
  try {
    localStorage.setItem(
      STORAGE_KEYS.LAST_RESULTS,
      JSON.stringify(results ?? null)
    );
  } catch {
    // fail silently
  }
}

export function getLastResults<T = unknown>(): T | null {
  if (!isBrowser) return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.LAST_RESULTS);
    if (!raw) return null;
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

export function clearSavedState() {
  if (!isBrowser) return;
  try {
    localStorage.removeItem(STORAGE_KEYS.LAST_SYMPTOM);
    localStorage.removeItem(STORAGE_KEYS.LAST_RESULTS);
  } catch {
    // ignore
  }
}
