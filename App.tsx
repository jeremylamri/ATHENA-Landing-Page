import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Problem } from './components/sections/Problem';
import { Model } from './components/sections/Model';
import { AthenaAI } from './components/sections/AthenaAI';
import { Capabilities } from './components/sections/Capabilities';
import { SocialProof } from './components/sections/SocialProof';
import { V2Offer } from './components/sections/V2Offer';
import { IPRights } from './components/sections/IPRights';
import { Contact } from './components/sections/Contact';
import { About } from './components/sections/About';
import { Footer } from './components/layout/Footer';
import { OnePager } from './components/documents/OnePager';
import { LegalNotice } from './components/documents/LegalNotice';

function App() {
  const [view, setView] = useState('landing');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('view') === 'one-pager') {
      setView('one-pager');
    }
  }, []);

  if (view === 'one-pager') {
    return <OnePager />;
  }

  if (view === 'legal') {
    return <LegalNotice onBack={() => setView('landing')} />;
  }

  return (
    <div className="min-h-screen text-white selection:bg-accent/30 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <Problem />
        <Model />
        <AthenaAI />
        <Capabilities />
        <SocialProof />
        <V2Offer />
        <IPRights />
        <About />
        <Contact />
      </main>

      <Footer onLegalClick={() => setView('legal')} />
    </div>
  );
}

export default App;