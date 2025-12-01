
import { UserProfile } from '../types';

const KEYS = {
  HISTORY: 'zendee_search_history',
  PROFILE: 'zendee_user_profile',
  FEEDBACK: 'zendee_feedback',
  WAITLIST: 'zendee_waitlist'
};

export const getHistory = (): string[] => {
  try {
    return JSON.parse(localStorage.getItem(KEYS.HISTORY) || '[]');
  } catch {
    return [];
  }
};

export const addToHistory = (query: string) => {
  const history = getHistory();
  const newHistory = [query, ...history.filter(h => h !== query)].slice(0, 5);
  localStorage.setItem(KEYS.HISTORY, JSON.stringify(newHistory));
};

export const clearHistory = () => {
  localStorage.removeItem(KEYS.HISTORY);
};

export const getUserProfile = (): UserProfile | null => {
  try {
    const data = localStorage.getItem(KEYS.PROFILE);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
};

export const saveUserProfile = (profile: UserProfile) => {
  localStorage.setItem(KEYS.PROFILE, JSON.stringify(profile));
};

export const saveFeedback = (symptom: string, helpful: string) => {
  const feedback = JSON.parse(localStorage.getItem(KEYS.FEEDBACK) || '[]');
  feedback.push({ symptom, helpful, date: new Date().toISOString() });
  localStorage.setItem(KEYS.FEEDBACK, JSON.stringify(feedback));
};

export const joinWaitlist = (email: string) => {
  const list = JSON.parse(localStorage.getItem(KEYS.WAITLIST) || '[]');
  if (!list.includes(email)) {
    list.push(email);
    localStorage.setItem(KEYS.WAITLIST, JSON.stringify(list));
  }
};
