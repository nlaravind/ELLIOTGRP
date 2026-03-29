import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Building2, Globe, Leaf } from 'lucide-react';
import { ScrollProgress } from '../components/ScrollProgress';

export const VenturesPage: React.FC = () => {
  return (
    <div className="sectors-page min-h-screen bg-navy text-silver font-sans">
      <ScrollProgress />
      <div className="container mx-auto px-6 pt-8">
        <a href="/#sectors" className="flex items-center gap-2 text-gold hover:text-silver transition-colors w-fit">
          <ArrowLeft size={20} />
          Back to Our Ecosystem
        </a>
      </div>

      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} viewport={{ once: true, amount: 0.15 }} className="py-20 bg-gradient-to-b from-navy to-navy-light">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <Building2 size={64} className="text-gold" />
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-silver">
            Elliot Ventures
          </h1>
          <h2 className="text-gold tracking-[0.3em] text-lg md:text-xl font-bold mb-6 uppercase">
            Building Ventures. Creating Long-Term Value.
          </h2>
          <p className="text-silver-dim text-xl max-w-2xl mx-auto mb-12">
            Strategic venture creation, capital partnerships, and scalable business building across high-growth sectors.
          </p>
          <button className="inline-block px-12 py-4 border border-gold text-gold font-bold uppercase tracking-[0.2em] hover:bg-gold hover:text-navy transition-all duration-300">
            Explore Ventures
          </button>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} viewport={{ once: true, amount: 0.15 }} className="py-24 bg-navy">
        <div className="container mx-auto px-6">
          <h2 className="text-gold font-bold tracking-widest uppercase mb-6 text-sm">About Division</h2>
          <h3 className="font-serif text-4xl text-silver mb-8 leading-tight">
            Building <span className="text-gold italic">High-Potential</span> Businesses
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-navy-light p-6 rounded-lg border border-navy-lighter hover:border-gold transition-colors">
              <h4 className="font-bold text-gold mb-4">Venture Incubation</h4>
              <p className="text-silver-dim">Developing new business concepts with strong market relevance and scalable operating models.</p>
            </div>
            <div className="bg-navy-light p-6 rounded-lg border border-navy-lighter hover:border-gold transition-colors">
              <h4 className="font-bold text-gold mb-4">Strategic Partnerships</h4>
              <p className="text-silver-dim">Working with operators, investors, and founders to unlock disciplined expansion opportunities.</p>
            </div>
            <div className="bg-navy-light p-6 rounded-lg border border-navy-lighter hover:border-gold transition-colors">
              <h4 className="font-bold text-gold mb-4">Growth Platforms</h4>
              <p className="text-silver-dim">Creating ventures designed for resilient growth, strong governance, and long-term enterprise value.</p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} viewport={{ once: true, amount: 0.15 }} className="py-24 bg-navy-light">
        <div className="container mx-auto px-6">
          <h3 className="font-serif text-4xl text-silver mb-16 text-center">Core Expertise</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-navy p-8 rounded-2xl border border-navy-lighter">
              <Globe className="w-12 h-12 text-gold mb-5" />
              <h4 className="font-bold text-silver text-xl mb-3">Venture Building</h4>
              <p className="text-silver-dim">From concept validation to launch execution, we structure ventures for clarity, speed, and control.</p>
            </div>
            <div className="bg-navy p-8 rounded-2xl border border-navy-lighter">
              <Leaf className="w-12 h-12 text-gold mb-5" />
              <h4 className="font-bold text-silver text-xl mb-3">Sustainable Growth Models</h4>
              <p className="text-silver-dim">Building business foundations that balance expansion, discipline, and long-term resilience.</p>
            </div>
            <div className="bg-navy p-8 rounded-2xl border border-navy-lighter">
              <Building2 className="w-12 h-12 text-gold mb-5" />
              <h4 className="font-bold text-silver text-xl mb-3">Operational Frameworks</h4>
              <p className="text-silver-dim">Designing structures, systems, and governance that support enterprise-grade execution.</p>
            </div>
            <div className="bg-navy p-8 rounded-2xl border border-navy-lighter">
              <Globe className="w-12 h-12 text-gold mb-5" />
              <h4 className="font-bold text-silver text-xl mb-3">Global Opportunity Mapping</h4>
              <p className="text-silver-dim">Identifying expansion opportunities across emerging and developed markets with strategic fit.</p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} viewport={{ once: true, amount: 0.15 }} className="py-24 bg-navy">
        <div className="container mx-auto px-6">
          <h3 className="font-serif text-4xl text-silver mb-16 text-center">Our Focus Markets</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="font-bold text-gold text-xl mb-4">India</h4>
              <p className="text-silver-dim mb-4">Primary market for venture incubation, strategic partnerships, and scalable operating models.</p>
              <p className="text-silver-dim text-sm">Hyderabad | Bengaluru | Mumbai | Delhi</p>
            </div>
            <div className="text-center">
              <h4 className="font-bold text-gold text-xl mb-4">Asia Pacific</h4>
              <p className="text-silver-dim mb-4">Cross-border expansion into innovation-driven markets and partnership ecosystems.</p>
              <p className="text-silver-dim text-sm">Singapore | Bangkok | Kuala Lumpur</p>
            </div>
            <div className="text-center">
              <h4 className="font-bold text-gold text-xl mb-4">Global</h4>
              <p className="text-silver-dim mb-4">Long-term positioning for globally competitive ventures and institutional growth opportunities.</p>
              <p className="text-silver-dim text-sm">Dubai | London | New York</p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} viewport={{ once: true, amount: 0.15 }} className="py-24 bg-navy-light">
        <div className="container mx-auto px-6">
          <h3 className="font-serif text-4xl text-silver mb-16 text-center">For Partners and Investors</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-navy p-8 rounded-lg border border-navy-lighter hover:border-gold transition-colors">
              <h4 className="font-bold text-gold text-lg mb-4">Portfolio Transparency</h4>
              <p className="text-silver-dim">Clear operating visibility, milestone reporting, and disciplined communication frameworks.</p>
            </div>
            <div className="bg-navy p-8 rounded-lg border border-navy-lighter hover:border-gold transition-colors">
              <h4 className="font-bold text-gold text-lg mb-4">Capital Discipline</h4>
              <p className="text-silver-dim">Strategic allocation models focused on durable growth, governance, and measurable outcomes.</p>
            </div>
            <div className="bg-navy p-8 rounded-lg border border-navy-lighter hover:border-gold transition-colors">
              <h4 className="font-bold text-gold text-lg mb-4">Execution Focus</h4>
              <p className="text-silver-dim">Operator-led ventures supported by structured planning, accountability, and scalable systems.</p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} viewport={{ once: true, amount: 0.15 }} className="py-20 bg-gold">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl text-navy mb-8">Build the Next Growth Platform</h2>
          <button className="inline-block px-12 py-4 border border-navy text-navy font-bold uppercase tracking-[0.2em] hover:bg-navy hover:text-gold transition-all duration-300">
            Investment Inquiry
          </button>
        </div>
      </motion.section>
    </div>
  );
};
