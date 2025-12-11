import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from './src/pages/Home';
import PrivacyPolicy from './src/pages/PrivacyPolicy';
import TermsOfUse from './src/pages/TermsOfUse';
import About from './src/pages/About';
import Contact from './src/pages/Contact';
import JointPainPage from './src/pages/JointPainPage';

// Health Guides
import GuidesIndex from './src/pages/guides/index';
import JointPainGuide from './src/pages/guides/JointPainGuide';
import AcidRefluxGuide from './src/pages/guides/AcidRefluxGuide';
import AnxietyGuide from './src/pages/guides/AnxietyGuide';
import InsomniaGuide from './src/pages/guides/InsomniaGuide';
import ConstipationGuide from './src/pages/guides/ConstipationGuide';
import BloatingGuide from './src/pages/guides/BloatingGuide';
import HeadachesGuide from './src/pages/guides/HeadachesGuide';
import HighBloodPressureGuide from './src/pages/guides/HighBloodPressureGuide';
import FattyLiverGuide from './src/pages/guides/FattyLiverGuide';
import HormoneImbalanceGuide from './src/pages/guides/HormoneImbalanceGuide';

// Symptom Pages
import SymptomPage from './src/pages/symptoms/SymptomPage';

// Components
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [isPro, setIsPro] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-gradient-to-b from-[#F9FBFB] via-white to-[#FAFAF9] selection:bg-teal-100 selection:text-teal-900 overflow-x-hidden">
        <Header isPro={isPro} onToggle={() => setIsPro(!isPro)} />

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

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
