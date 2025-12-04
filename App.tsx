import React, { useState, useEffect, useRef } from 'react';
import { fetchHealthAdvice } from './services/geminiService';
import { getUserProfile, saveUserProfile, saveFeedback, addToHistory, getHistory, clearHistory } from './services/storageService';
import { EMERGENCY_KEYWORDS, SAMPLE_QUERIES } from './constants';
import { HealthResponse, UserProfile } from './types';

// Components
import { EmergencyWarning } from './components/EmergencyWarning';
import { Header } from './components/Header';
import { SearchInput } from './components/SearchInput';
import { QuickSearchChips } from './components/QuickSearchChips';
import { ResultsSection } from './components/ResultsSection';
import { Footer } from './components/Footer';
import { WaitlistModal } from './components/WaitlistModal';
import { LoadingSequence } from './components/LoadingSequence';
import { TestimonialTicker } from './components/TestimonialTicker';
import { ShareCard } from './components/ShareCard';
import { ProfilePrompt } from './components/ProfilePrompt';
import { FeedbackPrompt } from './components/FeedbackPrompt';
import { Users } from 'lucide-react';

const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<HealthResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPro, setIsPro] = useState(false);
  
  // Modals & Prompts
  const [showEmergency, setShowEmergency] = useState(false);
  const [detectedKeyword, setDetectedKeyword] = useState('');
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [showProfilePrompt, setShowProfilePrompt] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  const [history, setHistory] = useState<string[]>([]);
  const [resultCount, setResultCount] = useState(0);

  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHistory(getHistory());
    setUserProfile(getUserProfile());
  }, []);

  const checkEmergency = (text: string): boolean => {
    const lowerText = text.toLowerCase();
    const found = EMERGENCY_KEYWORDS.find(k => lowerText.includes(k));
    if (found) {
      setDetectedKeyword(found);
      setShowEmergency(true);
      return true;
    }
    return false;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.length > 3) checkEmergency(query);
    }, 500);
    return () => clearTimeout(timer);
  }, [query]);

  const performSearch = async (searchTerm: string) => {
    if (!searchTerm.trim()) return;
    if (checkEmergency(searchTerm)) return;

    // Check if we should prompt for profile before first search
    if (!userProfile && !sessionStorage.getItem('profile_skipped')) {
      setShowProfilePrompt(true);
      return; // Stop here, wait for profile prompt callback
    }

    startAnalysis(searchTerm);
  };

  const startAnalysis = async (searchTerm: string) => {
    setIsLoading(true);
    setError(null);
    setData(null);
    addToHistory(searchTerm);
    setHistory(getHistory());
    setResultCount(Math.floor(Math.random() * (200 - 50 + 1) + 50));
    setShowProfilePrompt(false);

    try {
      // 4s delay for the "Aha Moment"
      const [result] = await Promise.all([
        fetchHealthAdvice(searchTerm, userProfile),
        new Promise(resolve => setTimeout(resolve, 4000)) 
      ]);
      
      setData(result);
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } catch (err: any) {
      setError(err.message || "Failed to fetch health insights. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleProfileSave = (profile: UserProfile) => {
    saveUserProfile(profile);
    setUserProfile(profile);
    startAnalysis(query); // Continue search
  };

  const handleProfileSkip = () => {
    sessionStorage.setItem('profile_skipped', 'true');
    startAnalysis(query); // Continue search
  };

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    performSearch(query);
  };

  const handleQuickSelect = (q: string) => {
    setQuery(q);
    performSearch(q);
  };

  const handleFeedback = (response: string) => {
    saveFeedback(query, response);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-gradient-to-b from-[#F9FBFB] via-white to-[#FAFAF9] selection:bg-teal-100 selection:text-teal-900 overflow-x-hidden">
      <Header isPro={isPro} onToggle={() => setIsPro(!isPro)} />

      {/* Overlays */}
      {showEmergency && (
        <EmergencyWarning 
          keywordDetected={detectedKeyword} 
          onDismiss={() => { setShowEmergency(false); setQuery(''); }} 
        />
      )}
      {showWaitlist && <WaitlistModal onClose={() => setShowWaitlist(false)} />}
      {showShare && data && (
        <ShareCard
          onClose={() => setShowShare(false)}
          symptom={query || "Health Query"}
          rootCause={data.holistic.protocols?.[0]?.approach || "Natural wellness approach"}
        />
      )}
      {showProfilePrompt && (
        <ProfilePrompt onSave={handleProfileSave} onSkip={handleProfileSkip} />
      )}

      <main className="flex-grow w-full">

        {/* Hero Section */}
        <section className="bg-slate-50">
          <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-10 sm:px-6 sm:py-14">
            {/* Top Block - Heading + Subtext */}
            <div className="text-center sm:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight text-brand-dark sm:text-5xl">
                Real answers.<br />
                <span className="text-brand-teal font-serif italic">Real relief.</span>
              </h1>

              <p className="mt-3 text-base text-slate-700 sm:text-lg">
                Tell us a symptom or diagnosis and we'll show you how standard medicine and root-cause care stack up—side by side.
              </p>
            </div>

            {/* Card Block - Main Tool */}
            <div className="mx-auto w-full max-w-xl">
              <div className="rounded-3xl bg-white p-5 shadow-lg shadow-teal-100/60 ring-1 ring-slate-100 sm:p-6">
                <label className="block text-sm font-medium text-slate-600">
                  Describe a symptom or diagnosis
                </label>

                <div className="mt-2">
                  <input
                    type="text"
                    className="block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-base placeholder-gray-400 shadow-inner focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20 sm:py-3.5 sm:text-lg"
                    placeholder="e.g., constant heartburn, fatty liver, chronic headaches"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    disabled={isLoading}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !isLoading && query.trim()) {
                        handleSearch();
                      }
                    }}
                  />
                </div>

                <button
                  type="button"
                  onClick={handleSearch}
                  disabled={isLoading || !query.trim()}
                  className="mt-3 flex w-full items-center justify-center rounded-xl bg-brand-teal px-4 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-brand-teal/90 focus:outline-none focus:ring-2 focus:ring-brand-teal/30 disabled:opacity-50 sm:py-3.5 sm:text-lg"
                >
                  {isLoading ? 'Analyzing...' : 'Find Relief'}
                </button>

                <div className="mt-4">
                  <p className="text-xs font-semibold tracking-wide text-slate-500">
                    QUICK SUGGESTIONS:
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {history.length > 0 ? (
                      <>
                        {history.map((q, idx) => (
                          <button
                            type="button"
                            key={`hist-${idx}`}
                            onClick={() => handleQuickSelect(q)}
                            className="cursor-pointer rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700 hover:bg-slate-200 sm:text-sm"
                          >
                            {q}
                          </button>
                        ))}
                      </>
                    ) : (
                      <>
                        {SAMPLE_QUERIES.slice(0, 6).map((q) => (
                          <button
                            type="button"
                            key={q}
                            onClick={() => handleQuickSelect(q)}
                            className="cursor-pointer rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700 hover:bg-slate-200 sm:text-sm"
                          >
                            {q}
                          </button>
                        ))}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Ticker */}
            {!data && !isLoading && (
              <div className="mx-auto w-full max-w-xl">
                <TestimonialTicker />
              </div>
            )}
          </div>
        </section>

        {/* Loading State */}
        {isLoading && (
          <div className="max-w-2xl mx-auto">
            <LoadingSequence />
          </div>
        )}

        {/* Error Message */}
        {error && !isLoading && (
          <div className="max-w-md mx-auto mb-10 p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 text-red-700 animate-fade-in shadow-sm">
             <div className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
            <p className="font-medium">{error}</p>
          </div>
        )}

        {/* Results */}
        {data && !isLoading && (
          <div className="animate-fade-in">
             <div className="flex items-center justify-center gap-2 mb-6 text-sm text-gray-400 font-medium animate-slide-up">
                <Users className="w-4 h-4" />
                {resultCount} people looked this up this week
             </div>

             <ResultsSection 
              data={data} 
              isPro={isPro} 
              onUnlockAttempt={() => setShowWaitlist(true)}
              resultsRef={resultsRef} 
            />
            
            <div className="mt-12 flex flex-col items-center gap-6">
              <button
                type="button"
                onClick={() => setShowShare(true)}
                className="px-8 py-3 bg-white border border-teal-100 text-teal-700 font-bold rounded-xl shadow-lg shadow-teal-50 hover:shadow-xl hover:scale-105 transition-all duration-300 active:scale-95"
              >
                📤 Share Results
              </button>
              
              <div className="w-full max-w-md">
                <FeedbackPrompt onFeedback={handleFeedback} />
              </div>
            </div>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
};

export default App;