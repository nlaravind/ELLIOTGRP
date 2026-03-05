import React from 'react';
import { ArrowLeft, Zap, Lock, Globe } from 'lucide-react';

export const CryptoPage: React.FC = () => {
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
            <Zap size={64} className="text-gold" />
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-silver">
            Elliott Crypto
          </h1>
          <h2 className="text-gold tracking-[0.3em] text-lg md:text-xl font-bold mb-6 uppercase">
            Digital Capital for the Decentralized Future
          </h2>
          <p className="text-silver-dim text-xl max-w-2xl mx-auto mb-12">
            Web5 identity-driven decentralized internet
          </p>
          <p className="text-silver-dim text-lg max-w-3xl mx-auto mb-12">
            Digital assets, blockchain ecosystems, and innovation across Web3 and emerging Web5 technologies.
          </p>
          <div className="flex justify-center gap-4">
            <button className="inline-block px-8 py-4 border border-gold text-gold font-bold uppercase tracking-[0.1em] hover:bg-gold hover:text-navy transition-all duration-300 text-sm">
              Explore Ecosystem
            </button>
            <button className="inline-block px-8 py-4 bg-gold text-navy font-bold uppercase tracking-[0.1em] hover:bg-silver transition-all duration-300 text-sm">
              Partner With Us
            </button>
          </div>
        </div>
      </section>

      {/* About Division */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-6">
          <h2 className="text-gold font-bold tracking-widest uppercase mb-6 text-sm">About Division</h2>
          <h3 className="font-serif text-4xl text-silver mb-8 leading-tight">
            Not Hype. <span className="text-gold italic">Pure Structure.</span>
          </h3>
          <p className="text-silver-dim text-lg mb-8 max-w-3xl">
            Elliott Crypto is the digital asset and cryptocurrency division of Elliott Group, focused on building secure, compliant, and scalable crypto financial infrastructure. We develop institutional-grade solutions for retail and institutional investors, Web3 startups, and emerging market users seeking financial inclusion.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-navy-light p-6 rounded-lg border border-navy-lighter hover:border-gold transition-colors">
              <h4 className="font-bold text-gold mb-4">Structured & Regulated</h4>
              <p className="text-silver-dim">Enterprise-grade compliance with AML frameworks and governance standards.</p>
            </div>
            <div className="bg-navy-light p-6 rounded-lg border border-navy-lighter hover:border-gold transition-colors">
              <h4 className="font-bold text-gold mb-4">Transparent & Audited</h4>
              <p className="text-silver-dim">Regular third-party audits and clear reporting for all ecosystem participants.</p>
            </div>
            <div className="bg-navy-light p-6 rounded-lg border border-navy-lighter hover:border-gold transition-colors">
              <h4 className="font-bold text-gold mb-4">Scalable Infrastructure</h4>
              <p className="text-silver-dim">High-performance systems supporting millions of daily transactions globally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-24 bg-navy-light">
        <div className="container mx-auto px-6">
          <h3 className="font-serif text-4xl text-silver mb-16 text-center">Core Pillars</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <Lock className="w-12 h-12 text-gold" />
              </div>
              <div>
                <h4 className="font-bold text-silver text-xl mb-2">Digital Asset Management</h4>
                <p className="text-silver-dim mb-4">Institutional custody, risk management, and portfolio structuring services.</p>
                <ul className="text-silver-dim text-sm space-y-1">
                  <li>• Secure multi-signature custody</li>
                  <li>• Professional asset allocation</li>
                  <li>• Institutional reporting</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <Zap className="w-12 h-12 text-gold" />
              </div>
              <div>
                <h4 className="font-bold text-silver text-xl mb-2">Token Ecosystem</h4>
                <p className="text-silver-dim mb-4">Native utility tokens with governance and staking mechanisms.</p>
                <ul className="text-silver-dim text-sm space-y-1">
                  <li>• Utility token models</li>
                  <li>• DAO governance framework</li>
                  <li>• Staking & yield protocols</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <Globe className="w-12 h-12 text-gold" />
              </div>
              <div>
                <h4 className="font-bold text-silver text-xl mb-2">Crypto Infrastructure</h4>
                <p className="text-silver-dim mb-4">Secure wallets, exchange integrations, and payment gateways.</p>
                <ul className="text-silver-dim text-sm space-y-1">
                  <li>• Hardware-grade security</li>
                  <li>• Multi-chain compatibility</li>
                  <li>• DEX & CEX integrations</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <Lock className="w-12 h-12 text-gold" />
              </div>
              <div>
                <h4 className="font-bold text-silver text-xl mb-2">Compliance & Security</h4>
                <p className="text-silver-dim mb-4">Institutional-grade frameworks and continuous security audits.</p>
                <ul className="text-silver-dim text-sm space-y-1">
                  <li>• AML/KYC compliance</li>
                  <li>• Smart contract audits</li>
                  <li>• Transparent governance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products & Services */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-6">
          <h3 className="font-serif text-4xl text-silver mb-16 text-center">Products & Services</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-navy-light p-8 rounded-lg border border-navy-lighter hover:border-gold transition-colors">
              <Zap className="w-12 h-12 text-gold mb-4" />
              <h4 className="font-bold text-gold text-lg mb-2">Elliott Wallet</h4>
              <p className="text-silver-dim">Secure, user-friendly custody solution for retail and institutional users.</p>
            </div>
            <div className="bg-navy-light p-8 rounded-lg border border-navy-lighter hover:border-gold transition-colors">
              <Globe className="w-12 h-12 text-gold mb-4" />
              <h4 className="font-bold text-gold text-lg mb-2">Elliott Exchange</h4>
              <p className="text-silver-dim">High-liquidity trading platform with institutional-grade order matching.</p>
            </div>
            <div className="bg-navy-light p-8 rounded-lg border border-navy-lighter hover:border-gold transition-colors">
              <Zap className="w-12 h-12 text-gold mb-4" />
              <h4 className="font-bold text-gold text-lg mb-2">Elliott Token</h4>
              <p className="text-silver-dim">Native governance token powering the ecosystem with staking rewards.</p>
            </div>
            <div className="bg-navy-light p-8 rounded-lg border border-navy-lighter hover:border-gold transition-colors">
              <Lock className="w-12 h-12 text-gold mb-4" />
              <h4 className="font-bold text-gold text-lg mb-2">Web3 & Web5 Fund</h4>
              <p className="text-silver-dim">Managed investment vehicle for institutional capital across crypto assets and Web5 identity-driven infrastructure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Vision */}
      <section className="py-24 bg-navy-light">
        <div className="container mx-auto px-6">
          <h3 className="font-serif text-4xl text-silver mb-16 text-center">Strategic Vision</h3>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gold text-navy font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-silver text-lg mb-2">Emerging Markets Focus</h4>
                  <p className="text-silver-dim">Enabling financial inclusion and cross-border payments in developing nations.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gold text-navy font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-silver text-lg mb-2">Web3 + Web5 Integration</h4>
                  <p className="text-silver-dim">Building bridges between traditional finance, decentralized protocols, and identity-driven Web5 systems.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gold text-navy font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-silver text-lg mb-2">Innovation Leadership</h4>
                  <p className="text-silver-dim">Pioneering new financial instruments and blockchain applications globally.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gold">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl text-navy mb-8">Ready to Enter Web3?</h2>
          <button className="inline-block px-12 py-4 border border-navy text-navy font-bold uppercase tracking-[0.2em] hover:bg-navy hover:text-gold transition-all duration-300">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};
