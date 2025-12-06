import React, { useState, useEffect, useRef } from 'react';
import { getHealthAdvice } from './services/aiRouter';
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
        getHealthAdvice(searchTerm, userProfile),
        new Promise(resolve => setTimeout(resolve, 4000))
      ]);

      console.log("AI Raw Response:", result);
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
        <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50/30">
          <div className="mx-auto max-w-6xl px-4 py-6 md:py-10">
            <div className="mx-auto max-w-3xl">
              {/* Headline */}
              <div className="mb-6 text-center md:mb-8">
                <h1 className="text-[32px] font-extrabold leading-[1.15] tracking-tight text-brand-dark md:text-[52px] md:leading-[1.1]">
                  Real answers.<br />
                  <span className="text-brand-teal font-serif italic">Real relief.</span>
                </h1>
                <p className="mt-4 text-[16px] leading-relaxed text-slate-600 md:text-[18px]">
                  Compare standard medicine with root-cause care—side by side.
                </p>
              </div>

              {/* Search Card - Centered */}
              <div className="relative">
                <div className="mx-auto w-full max-w-xl rounded-2xl bg-white p-5 shadow-2xl shadow-emerald-500/20 ring-2 ring-emerald-100 md:p-7">
                  <form onSubmit={handleSearch}>
                    <div className="space-y-3">
                      <label className="block text-sm font-semibold text-slate-700">
                        What are you experiencing?
                      </label>

                      <input
                        type="text"
                        className="block w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3.5 text-[16px] font-medium text-slate-900 placeholder-slate-400 shadow-sm transition focus:border-emerald-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-emerald-400/10 md:py-4 md:text-[17px]"
                        placeholder="e.g., constant heartburn, fatty liver, chronic headaches"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        disabled={isLoading}
                      />

                      <button
                        type="submit"
                        disabled={isLoading || !query.trim()}
                        className="flex h-[48px] w-full items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 text-base font-bold text-white shadow-lg shadow-emerald-500/30 transition hover:from-emerald-600 hover:to-teal-600 hover:shadow-xl hover:shadow-emerald-500/40 focus:outline-none focus:ring-4 focus:ring-emerald-400/50 disabled:opacity-50 disabled:cursor-not-allowed md:h-[52px] md:text-lg"
                      >
                        {isLoading ? 'Analyzing...' : 'Find Relief'}
                      </button>
                    </div>
                  </form>

                  {/* Quick Suggestions */}
                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500">
                      Popular Searches:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {history.length > 0 ? (
                        <>
                          {history.map((q, idx) => (
                            <button
                              type="button"
                              key={`hist-${idx}`}
                              onClick={() => handleQuickSelect(q)}
                              className="inline-flex items-center rounded-full bg-emerald-50 px-3.5 py-2 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200 transition hover:bg-emerald-100 hover:ring-emerald-300 md:text-sm"
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
                              className="inline-flex items-center rounded-full bg-slate-100 px-3.5 py-2 text-xs font-semibold text-slate-700 ring-1 ring-slate-200 transition hover:bg-slate-200 hover:ring-slate-300 md:text-sm"
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
                <div className="mt-8">
                  <TestimonialTicker />
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="py-10 bg-white">
          <div className="mx-auto max-w-2xl px-4 text-center">
            <h2 className="text-lg font-semibold text-slate-800 mb-2">
              How this tool works
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              This tool compares standard medical guidance with natural wellness insights
              so you can understand both perspectives more clearly.
            </p>
            <p className="mt-2 text-[12px] text-slate-400 italic">
              For educational use only.
            </p>
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
              resultsRef={resultsRef}
              symptom={query}
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