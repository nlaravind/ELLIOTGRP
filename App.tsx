import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ArrowRight, Gem, Globe2, MapPin, Sparkles, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { VerticalsGrid } from './components/VerticalsGrid';
import { Footer } from './components/Footer';

import { VERTICALS } from './constants';

const GeminiAssistant = lazy(() =>
  import('./components/GeminiAssistant').then((module) => ({ default: module.GeminiAssistant }))
);
const EVBusinessPage = lazy(() =>
  import('./pages/EVBusinessPage').then((module) => ({ default: module.EVBusinessPage }))
);
const RealEstatePage = lazy(() =>
  import('./pages/RealEstatePage').then((module) => ({ default: module.RealEstatePage }))
);
const FintechPage = lazy(() =>
  import('./pages/FintechPage').then((module) => ({ default: module.FintechPage }))
);
const BlockchainPage = lazy(() =>
  import('./pages/BlockchainPage').then((module) => ({ default: module.BlockchainPage }))
);
const AviationPage = lazy(() =>
  import('./pages/AviationPage').then((module) => ({ default: module.AviationPage }))
);
const CafePage = lazy(() =>
  import('./pages/CafePage').then((module) => ({ default: module.CafePage }))
);
const CryptoPage = lazy(() =>
  import('./pages/CryptoPage').then((module) => ({ default: module.CryptoPage }))
);
const AcademyPage = lazy(() =>
  import('./pages/AcademyPage').then((module) => ({ default: module.AcademyPage }))
);
const SustainableEnergyPage = lazy(() => import('./pages/SustainableEnergyPage'));

const PageLoader: React.FC = () => (
  <div className="min-h-screen bg-navy text-silver flex items-center justify-center">
    <div className="text-center">
      <p className="text-gold text-xs uppercase tracking-[0.3em] mb-4">ELLIOT GROUP</p>
      <p className="text-silver-dim">Loading experience...</p>
    </div>
  </div>
);

function HomePage() {
  return (
    <div className="min-h-screen bg-navy text-silver font-sans selection:bg-gold selection:text-navy">
      <Navbar />
      <main>
        <section className="pt-32 pb-24 bg-gradient-to-b from-navy via-navy to-navy-light relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-1/4 w-96 h-96 bg-gold blur-3xl rounded-full"></div>
            <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gold blur-3xl rounded-full opacity-5"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <span className="inline-block text-gold font-bold tracking-widest uppercase text-xs mb-6 px-4 py-2 border border-gold/30 rounded-full">
              Global Enterprise
            </span>
            <h1 className="font-serif text-6xl md:text-8xl font-bold mb-8 text-silver leading-tight">
              ELLIOT <span className="text-gold">GROUP</span>
            </h1>
            <p className="text-silver-dim text-xl md:text-2xl max-w-3xl mx-auto mb-4 font-light">
              A Diversified Global Enterprise
            </p>
            <p className="text-silver-dim text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
              Building globally respected enterprises across clean mobility, sustainable energy, infrastructure, financial governance, blockchain innovation, aviation excellence, and future-ready education.
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="#sectors"
                className="inline-block px-10 py-4 border border-gold text-gold font-bold uppercase tracking-[0.2em] text-sm hover:bg-gold hover:text-navy transition-all duration-300"
              >
                Explore Verticals
              </a>
              <a
                href="#vision"
                className="inline-block px-10 py-4 bg-gold/10 border border-gold/50 text-gold font-bold uppercase tracking-[0.2em] text-sm hover:bg-gold/20 transition-all duration-300"
              >
                Our Vision
              </a>
            </div>
          </div>
        </section>

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
                  His philosophy centers on creating businesses of lasting value not through trends, but through disciplined execution, regulatory compliance, and an unwavering commitment to stakeholder prosperity.
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

        <section id="vision" className="py-24 bg-[linear-gradient(180deg,#09111f_0%,#0d1c37_48%,#09111f_100%)] scroll-mt-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-80 h-80 bg-gold/10 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-96 h-72 bg-gold/5 blur-3xl rounded-full"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <p className="text-gold font-bold tracking-widest uppercase mb-4 text-sm">Strategic Foundation</p>
              <h2 className="font-serif text-4xl md:text-5xl text-silver mb-4">
                Guiding principles that define our global enterprise
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[1.75rem] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.22)] hover:border-gold/35 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/25 flex items-center justify-center mb-6">
                  <Target className="text-gold" size={28} />
                </div>
                <p className="text-gold font-bold uppercase tracking-[0.22em] text-xs mb-4">Vision</p>
                <h3 className="font-serif text-2xl text-silver mb-4">Build globally respected enterprises</h3>
                <p className="text-silver-dim leading-relaxed">
                  Establishing Elliot Group as a benchmark for excellence, innovation, and responsible capitalism across emerging and developed markets.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[1.75rem] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.22)] hover:border-gold/35 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/25 flex items-center justify-center mb-6">
                  <Sparkles className="text-gold" size={28} />
                </div>
                <p className="text-gold font-bold uppercase tracking-[0.22em] text-xs mb-4">Mission</p>
                <h3 className="font-serif text-2xl text-silver mb-5">Transform industries with purpose</h3>
                <div className="space-y-3">
                  {[
                    'Clean mobility solutions',
                    'Strategic infrastructure',
                    'Financial governance',
                    'Blockchain innovation',
                    'Aviation excellence',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-silver-dim">
                      <div className="w-2 h-2 rounded-full bg-gold shrink-0"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: 0.16 }}
                whileHover={{ y: -6 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[1.75rem] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.22)] hover:border-gold/35 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/25 flex items-center justify-center mb-6">
                  <Gem className="text-gold" size={28} />
                </div>
                <p className="text-gold font-bold uppercase tracking-[0.22em] text-xs mb-4">Core Values</p>
                <div className="space-y-4">
                  {[
                    'Innovation with Purpose',
                    'Sustainability',
                    'Integrity',
                    'Excellence',
                  ].map((item) => (
                    <motion.div
                      key={item}
                      whileHover={{ x: 4 }}
                      className="flex items-center justify-between rounded-xl border border-white/10 bg-navy/40 px-5 py-4"
                    >
                      <span className="text-silver font-medium">{item}</span>
                      <ArrowRight className="text-gold" size={18} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-navy border-y border-navy-lighter relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34rem] h-[34rem] rounded-full border border-gold/10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[22rem] h-[22rem] rounded-full border border-gold/10"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <p className="text-gold font-bold tracking-widest uppercase mb-4 text-sm">Strategic Outlook</p>
              <h3 className="font-serif text-3xl md:text-5xl text-silver">India to Global</h3>
            </motion.div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[1.75rem] p-10 text-center shadow-[0_20px_60px_rgba(0,0,0,0.22)] hover:border-gold/35 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-gold/10 border border-gold/25 flex items-center justify-center mx-auto mb-5">
                  <MapPin className="text-gold" size={30} />
                </div>
                <p className="text-gold font-bold text-xl mb-2">India</p>
                <p className="text-silver-dim uppercase tracking-[0.18em] text-xs">Primary Growth Market</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: 0.1 }}
                animate={{ x: [0, 8, 0] }}
                className="flex items-center justify-center"
              >
                <div className="w-20 h-20 rounded-full border border-gold/30 bg-gold/10 flex items-center justify-center shadow-[0_0_35px_rgba(212,175,55,0.18)]">
                  <ArrowRight className="text-gold" size={30} />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: 0.16 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[1.75rem] p-10 text-center shadow-[0_20px_60px_rgba(0,0,0,0.22)] hover:border-gold/35 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-gold/10 border border-gold/25 flex items-center justify-center mx-auto mb-5">
                  <Globe2 className="text-gold" size={30} />
                </div>
                <p className="text-gold font-bold text-xl mb-2">Global</p>
                <p className="text-silver-dim uppercase tracking-[0.18em] text-xs">International Expansion</p>
              </motion.div>
            </div>
          </div>
        </section>

        <VerticalsGrid />

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

        <section id="contact" className="py-20 bg-navy-light border-y border-navy-lighter scroll-mt-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl text-silver mb-8">Ready to engage with a globally competitive enterprise?</h2>
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-5 py-2 mb-4 rounded-full border border-gold/50 bg-navy/50 text-gold uppercase tracking-widest text-xs font-bold">
                <MapPin size={14} />
                <span>Location</span>
              </div>
              <p className="text-gold font-bold tracking-widest uppercase text-sm mb-2">Via Moka</p>
              <p className="text-silver-dim text-base">
                222, Shankarpalli Rd, Janwada, Hyderabad, Telangana 500075
              </p>
              <a
                href="https://maps.app.goo.gl/iEA81kEJowzsyT9T6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-gold hover:text-silver transition-colors text-sm uppercase tracking-widest"
              >
                View on Google Maps
              </a>
            </div>
            <a
              href="mailto:contact@elliotgroup.com"
              className="inline-block px-12 py-4 border border-gold text-gold font-bold uppercase tracking-[0.2em] hover:bg-gold hover:text-navy transition-all duration-300 text-sm"
            >
              Investor Relations
            </a>
          </div>
        </section>
      </main>

      <Suspense fallback={null}>
        <GeminiAssistant />
      </Suspense>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
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
          <Route path="/academy" element={<AcademyPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
