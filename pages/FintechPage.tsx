import React from 'react';
import { ArrowLeft, TrendingUp, Lock, Scale } from 'lucide-react';

export const FintechPage: React.FC = () => {
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
            <TrendingUp size={64} className="text-gold" />
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-silver">
            Elliot Fintech
          </h1>
          <h2 className="text-gold tracking-[0.3em] text-lg md:text-xl font-bold mb-6 uppercase">
            Structured Capital. Sustainable Growth.
          </h2>
          <p className="text-silver-dim text-xl max-w-2xl mx-auto mb-12">
            The financial and investment governance backbone of the Elliot Group ecosystem.
          </p>
          <button className="inline-block px-12 py-4 border border-gold text-gold font-bold uppercase tracking-[0.2em] hover:bg-gold hover:text-navy transition-all duration-300">
            Partner With Us
          </button>
        </div>
      </section>

      {/* About Division */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-6">
          <h2 className="text-gold font-bold tracking-widest uppercase mb-6 text-sm">About Division</h2>
          <h3 className="font-serif text-4xl text-silver mb-8 leading-tight">
            Financial <span className="text-gold italic">Intelligence</span> for Growth
          </h3>
          <p className="text-silver-dim text-lg mb-8 max-w-3xl">
            Elliot Fintech serves as the umbrella investment and governance arm of the Elliot Group, providing strategic capital structuring, institutional partnerships, and transparent financial management across all verticals.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-navy-light p-6 rounded-lg border border-navy-lighter hover:border-gold transition-colors">
              <h4 className="font-bold text-gold mb-4">Capital Structuring</h4>
              <p className="text-silver-dim">Expert financial engineering for optimal resource allocation and investor returns.</p>
            </div>
            <div className="bg-navy-light p-6 rounded-lg border border-navy-lighter hover:border-gold transition-colors">
              <h4 className="font-bold text-gold mb-4">Institutional Investment</h4>
              <p className="text-silver-dim">Building relationships with global institutional investors and capital providers.</p>
            </div>
            <div className="bg-navy-light p-6 rounded-lg border border-navy-lighter hover:border-gold transition-colors">
              <h4 className="font-bold text-gold mb-4">Governance & Compliance</h4>
              <p className="text-silver-dim">Industry-leading standards in regulatory compliance and ethical governance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise */}
      <section className="py-24 bg-navy-light">
        <div className="container mx-auto px-6">
          <h3 className="font-serif text-4xl text-silver mb-16 text-center">Core Capabilities</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <TrendingUp className="w-12 h-12 text-gold" />
              </div>
              <div>
                <h4 className="font-bold text-silver text-xl mb-2">Capital Raising</h4>
                <p className="text-silver-dim">Strategic fundraising and investor relations for all group verticals.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <Scale className="w-12 h-12 text-gold" />
              </div>
              <div>
                <h4 className="font-bold text-silver text-xl mb-2">Structuring Vehicles</h4>
                <p className="text-silver-dim">Designing optimal financial instruments and corporate structures.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <Lock className="w-12 h-12 text-gold" />
              </div>
              <div>
                <h4 className="font-bold text-silver text-xl mb-2">Risk Management</h4>
                <p className="text-silver-dim">Comprehensive frameworks for financial and operational risk mitigation.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <TrendingUp className="w-12 h-12 text-gold" />
              </div>
              <div>
                <h4 className="font-bold text-silver text-xl mb-2">Portfolio Management</h4>
                <p className="text-silver-dim">Strategic oversight of diversified investments across group entities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-6">
          <h3 className="font-serif text-4xl text-silver mb-16 text-center">Investment Philosophy</h3>
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h4 className="font-bold text-gold text-lg mb-4">Long-term Capital</h4>
                <p className="text-silver-dim">Focus on sustainable growth rather than short-term returns.</p>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-gold text-lg mb-4">Discipline</h4>
                <p className="text-silver-dim">Rigorous methodology and proven frameworks guide all decisions.</p>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-gold text-lg mb-4">Transparency</h4>
                <p className="text-silver-dim">Stakeholder alignment through clear communication and reporting.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-light border-t border-navy-lighter">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl text-silver mb-8">Looking to Partner?</h2>
          <button className="inline-block px-12 py-4 border border-gold text-gold font-bold uppercase tracking-[0.2em] hover:bg-gold hover:text-navy transition-all duration-300">
            Contact Our Team
          </button>
        </div>
      </section>
    </div>
  );
};
