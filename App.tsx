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
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-[#FAFAF9] selection:bg-teal-100 selection:text-teal-900 overflow-x-hidden">
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
        <ShareCard onClose={() => setShowShare(false)} symptom={query || "Health Query"} rootCause={data.holistic.rootCause} />
      )}
      {showProfilePrompt && (
        <ProfilePrompt onSave={handleProfileSave} onSkip={handleProfileSkip} />
      )}

      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-24">
        
        {/* Hero Section */}
        <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ease-in-out ${data || isLoading ? 'mb-12' : 'min-h-[60vh] flex flex-col justify-center mb-0'}`}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-[1.1] drop-shadow-sm font-serif">
            Two Paths. <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">One Health.</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            Compare standard medicine with root-cause protocols. Decide what works for you.
          </p>

          <SearchInput 
            value={query} 
            onChange={(e) => setQuery(e.target.value)} 
            onSubmit={handleSearch}
            isLoading={isLoading}
          />
          
          <QuickSearchChips 
            suggestions={SAMPLE_QUERIES} 
            history={history}
            onSelect={handleQuickSelect}
            onClearHistory={() => { clearHistory(); setHistory([]); }}
          />

          {!data && !isLoading && <TestimonialTicker />}
        </div>

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