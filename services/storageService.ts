import { UserProfile } from '../types';

// SSR-safe: check if we're in a browser environment
const isBrowser = typeof window !== 'undefined';

const KEYS = {
  HISTORY: 'zendee_search_history',
  PROFILE: 'zendee_user_profile',
  FEEDBACK: 'zendee_feedback',
  WAITLIST: 'zendee_waitlist'
};

export const getHistory = (): string[] => {
  if (!isBrowser) return [];
  try {
    return JSON.parse(localStorage.getItem(KEYS.HISTORY) || '[]');
  } catch {
    return [];
  }
};

export const addToHistory = (query: string) => {
  if (!isBrowser) return;
  try {
    const history = getHistory();
    // Case-insensitive deduplication: remove any existing entries that match (ignoring case)
    const newHistory = [query, ...history.filter(h => h.toLowerCase() !== query.toLowerCase())].slice(0, 5);
    localStorage.setItem(KEYS.HISTORY, JSON.stringify(newHistory));
  } catch {
    // fail silently on storage errors
  }
};

export const clearHistory = () => {
  if (!isBrowser) return;
  try {
    localStorage.removeItem(KEYS.HISTORY);
  } catch {
    // fail silently
  }
};

export const getUserProfile = (): UserProfile | null => {
  if (!isBrowser) return null;
  try {
    const data = localStorage.getItem(KEYS.PROFILE);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
};

export const saveUserProfile = (profile: UserProfile) => {
  if (!isBrowser) return;
  try {
    localStorage.setItem(KEYS.PROFILE, JSON.stringify(profile));
  } catch {
    // fail silently
  }
};

export const saveFeedback = (symptom: string, helpful: string) => {
  if (!isBrowser) return;
  try {
    const feedback = JSON.parse(localStorage.getItem(KEYS.FEEDBACK) || '[]');
    feedback.push({ symptom, helpful, date: new Date().toISOString() });
    localStorage.setItem(KEYS.FEEDBACK, JSON.stringify(feedback));
  } catch {
    // fail silently
  }
};

export const joinWaitlist = (email: string) => {
  if (!isBrowser) return;
  try {
    const list = JSON.parse(localStorage.getItem(KEYS.WAITLIST) || '[]');
    if (!list.includes(email)) {
      list.push(email);
      localStorage.setItem(KEYS.WAITLIST, JSON.stringify(list));
    }
  } catch {
    // fail silently
  }
};
