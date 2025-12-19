import React, { useState, useEffect, useRef } from 'react';
import { getHealthAdvice } from '../../services/aiRouter';
import { getUserProfile, saveUserProfile, saveFeedback, addToHistory, getHistory } from '../../services/storageService';
import { EMERGENCY_KEYWORDS, SAMPLE_QUERIES } from '../../constants';
import { RecommendationResponse, UserProfile } from '../../types';
import { trackEvent } from '../lib/analytics';

// Components
import { EmergencyWarning } from '../../components/EmergencyWarning';
import { ResultsSection } from '../../components/ResultsSection';
import { WaitlistModal } from '../../components/WaitlistModal';
import { LoadingSequence } from '../../components/LoadingSequence';
import { TestimonialTicker } from '../../components/TestimonialTicker';
import { ShareCard } from '../../components/ShareCard';
import { ProfilePrompt } from '../../components/ProfilePrompt';
import { FeedbackPrompt } from '../../components/FeedbackPrompt';
import { SearchAutocomplete } from '../components/SearchAutocomplete';
import { Users } from 'lucide-react';

const Home: React.FC = () => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<RecommendationResponse | null>(null);
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

    // Track symptom search event
    trackEvent('symptom_search', {
      symptom: searchTerm,
      has_profile: !!userProfile,
    });

    try {
      // 4s delay for the "Aha Moment"
      const [result] = await Promise.all([
        getHealthAdvice(searchTerm, userProfile),
        new Promise(resolve => setTimeout(resolve, 4000))
      ]);

      console.log("AI Raw Response:", result);
      setData(result);

      // Track successful result
      trackEvent('search_completed', {
        symptom: searchTerm,
      });

      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } catch (err: any) {
      setError(err.message || "Failed to fetch health insights. Please try again.");

      // Track error
      trackEvent('search_error', {
        symptom: searchTerm,
        error: err.message,
      });
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

    // Track feedback event
    trackEvent('feedback_submitted', {
      symptom: query,
      feedback: response,
    });
  };

  return (
    <>
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
          rootCause={data.holisticRootCause || "Natural wellness approach"}
        />
      )}
      {showProfilePrompt && (
        <ProfilePrompt onSave={handleProfileSave} onSkip={handleProfileSkip} />
      )}

      <main className="flex-grow w-full">

        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50/30">
          <div className="mx-auto max-w-6xl px-4 py-4 md:py-6">
            <div className="mx-auto max-w-3xl">
              {/* Headline */}
              <div className="mb-8 text-center md:mb-12">
                <h1 className="text-[32px] font-bold leading-[1.2] tracking-tight text-slate-900 md:text-[48px] md:leading-[1.15]">
                  When health information feels overwhelming, start here
                </h1>
                <p className="mt-6 text-[16px] leading-relaxed text-slate-600 md:text-[18px] max-w-2xl mx-auto">
                  You've been searching for answers about your symptoms. You've found conflicting advice from doctors, holistic practitioners, and a dozen different websites. Remedy Clear helps you see both perspectives clearly, so you can make sense of what you're reading and decide on a reasonable next step.
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

                      <SearchAutocomplete
                        value={query}
                        onChange={setQuery}
                        onSubmit={handleSearch}
                        placeholder="e.g., chronic headaches, acid reflux, joint pain"
                      />

                      <button
                        type="submit"
                        disabled={isLoading || !query.trim()}
                        className="flex h-[48px] w-full items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 text-base font-bold text-white shadow-lg shadow-emerald-500/30 transition hover:from-emerald-600 hover:to-teal-600 hover:shadow-xl hover:shadow-emerald-500/40 focus:outline-none focus:ring-4 focus:ring-emerald-400/50 disabled:opacity-50 disabled:cursor-not-allowed md:h-[52px] md:text-lg"
                      >
                        {isLoading ? 'Analyzing...' : 'Get a clear starting path'}
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

              {/* Popular guides */}
              <section
                aria-label="Popular symptom guides"
                className="mt-4 flex justify-center"
              >
                <div className="inline-flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-slate-600">
                  <span className="font-semibold text-slate-700">
                    Popular guides:
                  </span>

                  <a
                    href="/guides/joint-pain"
                    className="rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700 hover:border-teal-200 hover:bg-teal-100 transition-colors"
                  >
                    Joint Pain
                  </a>

                  <a
                    href="/guides/acid-reflux"
                    className="rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700 hover:border-teal-200 hover:bg-teal-100 transition-colors"
                  >
                    Acid Reflux
                  </a>

                  <a
                    href="/guides/anxiety"
                    className="rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700 hover:border-teal-200 hover:bg-teal-100 transition-colors"
                  >
                    Anxiety
                  </a>

                  <a
                    href="/guides/insomnia"
                    className="rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700 hover:border-teal-200 hover:bg-teal-100 transition-colors"
                  >
                    Insomnia
                  </a>

                  <a
                    href="/guides/headaches"
                    className="rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700 hover:border-teal-200 hover:bg-teal-100 transition-colors"
                  >
                    Headaches
                  </a>
                </div>
              </section>

              {/* Testimonial Ticker */}
              {!data && !isLoading && (
                <div className="mt-8">
                  <TestimonialTicker />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Hide homepage explainer sections once results exist */}
        {!data && (
          <section className="py-16 md:py-24 bg-white">
            <div className="mx-auto max-w-3xl px-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-8 text-center">
                How Remedy Clear Helps
              </h2>

              <div className="space-y-6 text-base md:text-lg leading-relaxed text-slate-700 max-w-2xl mx-auto">
                <p>
                  Most health searches create more confusion than clarity. One article says your symptom is serious. Another says it's nothing. Some recommend natural remedies. Others insist you need medication. You're left wondering what's true and what to do.
                </p>

                <p>
                  Remedy Clear shows you what standard medicine looks at and what holistic practitioners consider—side by side, without bias. You'll see common medical explanations, typical treatments, root-cause perspectives, and natural approaches people try. This isn't medical advice. It's a way to organize the information you're already trying to make sense of.
                </p>

                <p>
                  When you understand both viewpoints, you can think more clearly about what feels right for you.
                </p>
              </div>

              <div className="mt-16 pt-12 border-t border-slate-200">
                <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-6 text-center">
                  Balance Between Medical and Holistic Perspectives
                </h3>

                <div className="space-y-6 text-base md:text-lg leading-relaxed text-slate-700 max-w-2xl mx-auto">
                  <p>
                    Standard medical care saves lives. Holistic approaches help many people address underlying patterns. Both have value. Both have limits.
                  </p>

                  <p>
                    Remedy Clear doesn't push one direction over the other. We give you context for both so you can have better conversations with the practitioners you trust—whether that's your family doctor, a functional medicine provider, or someone who blends the two.
                  </p>
                </div>
              </div>

              <p className="mt-12 text-xs text-slate-500 text-center max-w-xl mx-auto leading-relaxed">
                Remedy Clear is educational and does not replace professional medical advice. Always consult a qualified healthcare provider about your specific situation.
              </p>
            </div>
          </section>
        )}

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
             <div className="flex items-center justify-center gap-2 mb-2 text-sm text-gray-400 font-medium animate-slide-up">
                <Users className="w-4 h-4" />
                {resultCount} people looked this up this week
             </div>

             <p className="text-center text-sm text-slate-600 mb-6">
               This page is meant to help you think more clearly, not tell you what to do.
             </p>

             <ResultsSection
              data={data}
              isPro={isPro}
              resultsRef={resultsRef}
              symptom={query}
            />

            <div className="mt-12 flex flex-col items-center gap-6">
              <button
                type="button"
                onClick={() => {
                  setShowShare(true);
                  trackEvent('share_clicked', { symptom: query });
                }}
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
    </>
  );
};

export default Home;
