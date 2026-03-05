import React from 'react';
import { ArrowLeft, Building2, Globe, Leaf } from 'lucide-react';

export const RealEstatePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-navy text-silver font-sans">
      {/* Back Button */}
      <div className="container mx-auto px-6 pt-8">
        <a href="/#sectors" className="flex items-center gap-2 text-gold hover:text-silver transition-colors w-fit">
          <ArrowLeft size={20} />
          Back to Our Ecosystem
        </a>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-navy to-navy-light">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <Building2 size={64} className="text-gold" />
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-silver">
            Elliot Infra
          </h1>
          <h2 className="text-gold tracking-[0.3em] text-lg md:text-xl font-bold mb-6 uppercase">
            Building Landmarks. Creating Legacy.
          </h2>
          <p className="text-silver-dim text-xl max-w-2xl mx-auto mb-12">
            Ultra-luxury residential and commercial developments redefining skylines globally.
          </p>
          <button className="inline-block px-12 py-4 border border-gold text-gold font-bold uppercase tracking-[0.2em] hover:bg-gold hover:text-navy transition-all duration-300">
            Explore Projects
          </button>
        </div>
      </section>

      {/* About Division */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-6">
          <h2 className="text-gold font-bold tracking-widest uppercase mb-6 text-sm">About Division</h2>
          <h3 className="font-serif text-4xl text-silver mb-8 leading-tight">
            Crafting <span className="text-gold italic">Iconic</span> Spaces
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-navy-light p-6 rounded-lg border border-navy-lighter hover:border-gold transition-colors">
              <h4 className="font-bold text-gold mb-4">Premium Residential</h4>
              <p className="text-silver-dim">Luxury apartments and villas designed for discerning homeowners seeking excellence.</p>
            </div>
            <div className="bg-navy-light p-6 rounded-lg border border-navy-lighter hover:border-gold transition-colors">
              <h4 className="font-bold text-gold mb-4">Commercial Spaces</h4>
              <p className="text-silver-dim">State-of-the-art office complexes and retail spaces for global enterprises.</p>
            </div>
            <div className="bg-navy-light p-6 rounded-lg border border-navy-lighter hover:border-gold transition-colors">
              <h4 className="font-bold text-gold mb-4">Mixed-Use Development</h4>
              <p className="text-silver-dim">Integrated urban communities combining living, working, and entertainment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise */}
      <section className="py-24 bg-navy-light">
        <div className="container mx-auto px-6">
          <h3 className="font-serif text-4xl text-silver mb-16 text-center">Core Expertise</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <Globe className="w-12 h-12 text-gold" />
              </div>
              <div>
                <h4 className="font-bold text-silver text-xl mb-2">End-to-End Execution</h4>
                <p className="text-silver-dim">From conceptualization to delivery, we manage every aspect of project development.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <Leaf className="w-12 h-12 text-gold" />
              </div>
              <div>
                <h4 className="font-bold text-silver text-xl mb-2">Sustainable Development</h4>
                <p className="text-silver-dim">Eco-friendly designs with renewable energy and green building practices.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <Building2 className="w-12 h-12 text-gold" />
              </div>
              <div>
                <h4 className="font-bold text-silver text-xl mb-2">Smart Green Buildings</h4>
                <p className="text-silver-dim">IoT-enabled infrastructure for energy efficiency and resident comfort.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <Globe className="w-12 h-12 text-gold" />
              </div>
              <div>
                <h4 className="font-bold text-silver text-xl mb-2">Global Standards</h4>
                <p className="text-silver-dim">World-class construction and design meeting international benchmarks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Initial Focus */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-6">
          <h3 className="font-serif text-4xl text-silver mb-16 text-center">Our Focus Markets</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="font-bold text-gold text-xl mb-4">India</h4>
              <p className="text-silver-dim mb-4">Primary focus on Hyderabad, with expansion across major Indian cities.</p>
              <p className="text-silver-dim text-sm">Hyderabad • Delhi • Mumbai • Bangalore</p>
            </div>
            <div className="text-center">
              <h4 className="font-bold text-gold text-xl mb-4">Asia Pacific</h4>
              <p className="text-silver-dim mb-4">Strategic expansion to emerging markets in Southeast Asia.</p>
              <p className="text-silver-dim text-sm">Singapore • Bangkok • Kuala Lumpur</p>
            </div>
            <div className="text-center">
              <h4 className="font-bold text-gold text-xl mb-4">Global</h4>
              <p className="text-silver-dim mb-4">Long-term vision for presence in major global markets.</p>
              <p className="text-silver-dim text-sm">Dubai • London • New York</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Section */}
      <section className="py-24 bg-navy-light">
        <div className="container mx-auto px-6">
          <h3 className="font-serif text-4xl text-silver mb-16 text-center">For Investors</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-navy p-8 rounded-lg border border-navy-lighter hover:border-gold transition-colors">
              <h4 className="font-bold text-gold text-lg mb-4">Project Transparency</h4>
              <p className="text-silver-dim">Real-time updates and detailed reporting on all project developments.</p>
            </div>
            <div className="bg-navy p-8 rounded-lg border border-navy-lighter hover:border-gold transition-colors">
              <h4 className="font-bold text-gold text-lg mb-4">Regulatory Compliance</h4>
              <p className="text-silver-dim">Full adherence to all legal and regulatory requirements across jurisdictions.</p>
            </div>
            <div className="bg-navy p-8 rounded-lg border border-navy-lighter hover:border-gold transition-colors">
              <h4 className="font-bold text-gold text-lg mb-4">Timeline Discipline</h4>
              <p className="text-silver-dim">Consistent on-time delivery with respect to project milestones.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gold">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl text-navy mb-8">Invest in Excellence</h2>
          <button className="inline-block px-12 py-4 border border-navy text-navy font-bold uppercase tracking-[0.2em] hover:bg-navy hover:text-gold transition-all duration-300">
            Investment Inquiry
          </button>
        </div>
      </section>
    </div>
  );
};
