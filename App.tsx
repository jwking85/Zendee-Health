import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components (eagerly loaded)
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Home page (eagerly loaded for fast initial render)
import Home from './src/pages/Home';

// Lazy-loaded pages
const PrivacyPolicy = lazy(() => import('./src/pages/PrivacyPolicy'));
const TermsOfUse = lazy(() => import('./src/pages/TermsOfUse'));
const About = lazy(() => import('./src/pages/About'));
const Contact = lazy(() => import('./src/pages/Contact'));
const JointPainPage = lazy(() => import('./src/pages/JointPainPage'));

// Lazy-loaded Health Guides
const GuidesIndex = lazy(() => import('./src/pages/guides/index'));
const JointPainGuide = lazy(() => import('./src/pages/guides/JointPainGuide'));
const AcidRefluxGuide = lazy(() => import('./src/pages/guides/AcidRefluxGuide'));
const AnxietyGuide = lazy(() => import('./src/pages/guides/AnxietyGuide'));
const InsomniaGuide = lazy(() => import('./src/pages/guides/InsomniaGuide'));
const ConstipationGuide = lazy(() => import('./src/pages/guides/ConstipationGuide'));
const BloatingGuide = lazy(() => import('./src/pages/guides/BloatingGuide'));
const HeadachesGuide = lazy(() => import('./src/pages/guides/HeadachesGuide'));
const HighBloodPressureGuide = lazy(() => import('./src/pages/guides/HighBloodPressureGuide'));
const FattyLiverGuide = lazy(() => import('./src/pages/guides/FattyLiverGuide'));
const HormoneImbalanceGuide = lazy(() => import('./src/pages/guides/HormoneImbalanceGuide'));

// Lazy-loaded Symptom Pages
const SymptomPage = lazy(() => import('./src/pages/symptoms/SymptomPage'));

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600"></div>
  </div>
);

const App: React.FC = () => {
  const [isPro, setIsPro] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-gradient-to-b from-[#F9FBFB] via-white to-[#FAFAF9] selection:bg-teal-100 selection:text-teal-900 overflow-x-hidden">
        <Header isPro={isPro} onToggle={() => setIsPro(!isPro)} />

        <Suspense fallback={<PageLoader />}>
          <Routes>
          <Route path="/" element={<Home />} />

          {/* Health Guides */}
          <Route path="/guides" element={<GuidesIndex />} />
          <Route path="/guides/joint-pain" element={<JointPainGuide />} />
          <Route path="/guides/acid-reflux" element={<AcidRefluxGuide />} />
          <Route path="/guides/anxiety" element={<AnxietyGuide />} />
          <Route path="/guides/insomnia" element={<InsomniaGuide />} />
          <Route path="/guides/constipation" element={<ConstipationGuide />} />
          <Route path="/guides/bloating" element={<BloatingGuide />} />
          <Route path="/guides/headaches" element={<HeadachesGuide />} />
          <Route path="/guides/high-blood-pressure" element={<HighBloodPressureGuide />} />
          <Route path="/guides/fatty-liver" element={<FattyLiverGuide />} />
          <Route path="/guides/hormone-imbalance" element={<HormoneImbalanceGuide />} />

          {/* Symptom Pages */}
          <Route path="/symptoms/:slug" element={<SymptomPage />} />

          {/* Legacy route - redirect old joint-pain to new location */}
          <Route path="/joint-pain" element={<JointPainPage />} />

          {/* Other Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
