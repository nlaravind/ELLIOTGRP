import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VerticalsGrid } from './components/VerticalsGrid';
import { GeminiAssistant } from './components/GeminiAssistant';
import { Footer } from './components/Footer';
import { EVBusinessPage } from './pages/EVBusinessPage';
import { RealEstatePage } from './pages/RealEstatePage';
import { FintechPage } from './pages/FintechPage';
import { BlockchainPage } from './pages/BlockchainPage';
import { AviationPage } from './pages/AviationPage';
import { CafePage } from './pages/CafePage';
import { CryptoPage } from './pages/CryptoPage';
// @ts-ignore: module may not be recognized by TS yet, but file exists
import SustainableEnergyPage from './pages/SustainableEnergyPage'; // new vertical page

import { VERTICALS } from './constants';

function HomePage() {
  return (
    <div className="min-h-screen bg-navy text-silver font-sans selection:bg-gold selection:text-navy">
      <Navbar />
      <main>
        {/* Enhanced Hero - Global Enterprise */}
        <section className="pt-32 pb-24 bg-gradient-to-b from-navy via-navy to-navy-light relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-1/4 w-96 h-96 bg-gold blur-3xl rounded-full"></div>
            <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gold blur-3xl rounded-full opacity-5"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <span className="inline-block text-gold font-bold tracking-widest uppercase text-xs mb-6 px-4 py-2 border border-gold/30 rounded-full">Global Enterprise</span>
            <h1 className="font-serif text-6xl md:text-8xl font-bold mb-8 text-silver leading-tight">
              ELLIOT <span className="text-gold">GROUP</span>
            </h1>
            <p className="text-silver-dim text-xl md:text-2xl max-w-3xl mx-auto mb-4 font-light">
              A Diversified Global Enterprise
            </p>
            <p className="text-silver-dim text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
              Building globally respected enterprises across clean mobility, sustainable energy, infrastructure, financial governance, blockchain innovation, and aviation excellence.
            </p>
            <div className="flex justify-center gap-6">
              <a href="#sectors" className="inline-block px-10 py-4 border border-gold text-gold font-bold uppercase tracking-[0.2em] text-sm hover:bg-gold hover:text-navy transition-all duration-300">
                Explore Verticals
              </a>
              <a href="#vision" className="inline-block px-10 py-4 bg-gold/10 border border-gold/50 text-gold font-bold uppercase tracking-[0.2em] text-sm hover:bg-gold/20 transition-all duration-300">
                Our Vision
              </a>
            </div>
          </div>
        </section>

        {/* About Founder */}
        <section id="founder" className="py-24 bg-navy scroll-mt-20 border-b border-navy-lighter">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-gold font-bold tracking-widest uppercase mb-6 text-sm">Leadership</h2>
                <h3 className="font-serif text-4xl md:text-5xl text-silver leading-tight mb-8">
                  Sasendra <span className="text-gold">Sivaji V</span>
                </h3>
                <p className="text-silver-dim text-lg leading-relaxed mb-6">
                  Founder and Visionary of Elliot Group. With a strategic focus on building diversified, globally competitive enterprises, Sasendra has architected a holding structure that bridges innovation, sustainability, and institutional excellence across {VERTICALS.length} distinct verticals.
                </p>
                <p className="text-silver-dim text-lg leading-relaxed">
                  His philosophy centers on creating businesses of lasting value—not through trends, but through disciplined execution, regulatory compliance, and an unwavering commitment to stakeholder prosperity.
                </p>
              </div>
              <div className="relative group mx-auto max-w-xs">
                <div className="absolute -inset-1 bg-gradient-to-r from-gold to-gold/20 blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <img 
                  src="/images/founder.jpg" 
                  alt="Sasendra Sivaji V" 
                  className="relative w-full h-auto border border-gold/30 transition-all duration-700 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Vision, Mission, Values */}
        <section id="vision" className="py-24 bg-navy-light scroll-mt-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl text-silver mb-4">Strategic Foundation</h2>
              <p className="text-silver-dim text-lg max-w-2xl mx-auto">Guiding principles that define our global enterprise</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Vision */}
              <div className="bg-navy p-10 rounded-lg border border-navy-lighter hover:border-gold transition-all duration-300">
                <h4 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Vision</h4>
                <p className="text-silver text-lg font-serif italic mb-4">Build globally respected enterprises</p>
                <p className="text-silver-dim text-sm leading-relaxed">
                  Establishing Elliot Group as a benchmark for excellence, innovation, and responsible capitalism across emerging and developed markets.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-navy p-10 rounded-lg border border-navy-lighter hover:border-gold transition-all duration-300">
                <h4 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Mission</h4>
                <p className="text-silver text-lg font-serif italic mb-4">Transform industries with purpose</p>
                <ul className="text-silver-dim text-sm space-y-3">
                  <li>• Clean mobility solutions</li>
                  <li>• Strategic infrastructure</li>
                  <li>• Financial governance</li>
                  <li>• Blockchain innovation</li>
                  <li>• Aviation excellence</li>
                </ul>
              </div>

              {/* Values */}
              <div className="bg-navy p-10 rounded-lg border border-navy-lighter hover:border-gold transition-all duration-300">
                <h4 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Core Values</h4>
                <ul className="text-silver-dim text-sm space-y-4">
                  <li className="flex gap-3">
                    <span className="text-gold">→</span>
                    <span><strong className="text-silver">Innovation with Purpose</strong></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold">→</span>
                    <span><strong className="text-silver">Sustainability</strong></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold">→</span>
                    <span><strong className="text-silver">Integrity</strong></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold">→</span>
                    <span><strong className="text-silver">Excellence</strong></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Global Expansion */}
        <section className="py-20 bg-navy border-y border-navy-lighter">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <h3 className="font-serif text-3xl text-silver mb-4">Strategic Outlook</h3>
              <div className="flex justify-center gap-8 items-center flex-wrap">
                <div className="text-center">
                  <p className="text-gold font-bold text-2xl mb-2">📍 India</p>
                  <p className="text-silver-dim text-sm">Primary Growth Market</p>
                </div>
                <span className="text-gold text-2xl">→</span>
                <div className="text-center">
                  <p className="text-gold font-bold text-2xl mb-2">🌍 Global</p>
                  <p className="text-silver-dim text-sm">International Expansion</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <VerticalsGrid />

        {/* individual sector routes */}

        {/* Philosophy / About Section */}
        <section id="innovation" className="py-24 relative overflow-hidden bg-navy scroll-mt-20">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-navy-light blur-3xl rounded-full pointer-events-none opacity-50"></div>
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-gold font-bold tracking-widest uppercase mb-6 text-sm">Operational Excellence</h2>
              <h3 className="font-serif text-4xl md:text-5xl text-silver leading-tight mb-8">
                Where Purpose Drives <span className="text-gold italic">Performance</span>
              </h3>
              <p className="text-silver-dim text-lg leading-relaxed mb-6">
                Each vertical operates with institutional discipline while maintaining strategic alignment with group objectives. We prioritize sustainable value creation over short-term gains.
              </p>
              <p className="text-silver-dim text-lg leading-relaxed">
                From clean mobility and sustainable energy to decentralized finance, every enterprise within Elliot Group meets the highest standards of governance, compliance, and impact.
              </p>
            </div>
            <div className="relative group">
               <img 
                src="/images/philosophy.jpg" 
                alt="Global Enterprise" 
                className="relative z-10 w-full h-auto border border-navy-lighter group-hover:border-gold transition-all duration-700 shadow-2xl"
               />
            </div>
          </div>
        </section>

        {/* Contact Strip */}
        <section id="contact" className="py-20 bg-navy-light border-y border-navy-lighter scroll-mt-20">
           <div className="container mx-auto px-6 text-center">
              <h2 className="font-serif text-3xl text-silver mb-8">Ready to engage with a globally competitive enterprise?</h2>
              <a href="mailto:contact@elliotgroup.com" className="inline-block px-12 py-4 border border-gold text-gold font-bold uppercase tracking-[0.2em] hover:bg-gold hover:text-navy transition-all duration-300 text-sm">
                Investor Relations
              </a>
           </div>
        </section>
      </main>

      <GeminiAssistant />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ev-business" element={<EVBusinessPage />} />
        <Route path="/real-estate" element={<RealEstatePage />} />
        <Route path="/fintech" element={<FintechPage />} />
        <Route path="/blockchain" element={<BlockchainPage />} />
        <Route path="/aviation" element={<AviationPage />} />
        <Route path="/cafe" element={<CafePage />} />
        <Route path="/crypto" element={<CryptoPage />} />
        <Route path="/sustainable-energy" element={<SustainableEnergyPage />} />
      </Routes>
    </Router>
  );
}

export default App;