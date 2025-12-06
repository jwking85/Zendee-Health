import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from './src/pages/Home';
import PrivacyPolicy from './src/pages/PrivacyPolicy';
import TermsOfUse from './src/pages/TermsOfUse';
import About from './src/pages/About';
import Contact from './src/pages/Contact';

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
