import React from 'react';
import { ArrowLeft, Link as LinkIcon, Shield, Network } from 'lucide-react';

export const BlockchainPage: React.FC = () => {
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
            <LinkIcon size={64} className="text-gold" />
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-silver">
            elliott blockchain
          </h1>
          <h2 className="text-gold tracking-[0.3em] text-lg md:text-xl font-bold mb-6 uppercase">
            Decentralizing Trust. Empowering Nations.
          </h2>
          <p className="text-silver-dim text-xl max-w-2xl mx-auto mb-12">
            Enterprise-grade decentralized ledger solutions for global enterprises and emerging markets.
          </p>
          <button className="inline-block px-12 py-4 border border-gold text-gold font-bold uppercase tracking-[0.2em] hover:bg-gold hover:text-navy transition-all duration-300">
            Explore Solutions
          </button>
        </div>
      </section>

      {/* About Division */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-6">
          <h2 className="text-gold font-bold tracking-widest uppercase mb-6 text-sm">About Division</h2>
          <h3 className="font-serif text-4xl text-silver mb-8 leading-tight">
            Proprietary <span className="text-gold italic">Blockchain</span> Ecosystem
          </h3>
          <p className="text-silver-dim text-lg mb-8 max-w-3xl">
            elliott blockchain develops secure, scalable, and interoperable distributed ledger solutions designed for enterprises, governments, and fintech companies. Our focus extends to bridging the digital gap in developing nations.
          </p>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-24 bg-navy-light">
        <div className="container mx-auto px-6">
          <h3 className="font-serif text-4xl text-silver mb-16 text-center">Our Objectives</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-navy p-6 rounded-lg border border-navy-lighter hover:border-gold transition-colors">
              <Shield className="w-12 h-12 text-gold mb-4" />
              <h4 className="font-bold text-gold mb-4">Secure & Scalable</h4>
              <p className="text-silver-dim">Enterprise-grade security with horizontal scalability for billions of transactions.</p>
            </div>
            <div className="bg-navy p-6 rounded-lg border border-navy-lighter hover:border-gold transition-colors">
              <Network className="w-12 h-12 text-gold mb-4" />
              <h4 className="font-bold text-gold mb-4">Enterprise Solutions</h4>
              <p className="text-silver-dim">Purpose-built systems for supply chain, governance, and data integrity.</p>
            </div>
            <div className="bg-navy p-6 rounded-lg border border-navy-lighter hover:border-gold transition-colors">
              <Shield className="w-12 h-12 text-gold mb-4" />
              <h4 className="font-bold text-gold mb-4">Emerging Markets Focus</h4>
              <p className="text-silver-dim">Enabling financial inclusion and governance in developing nations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-6">
          <h3 className="font-serif text-4xl text-silver mb-16 text-center">Key Applications</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <LinkIcon className="w-12 h-12 text-gold" />
              </div>
              <div>
                <h4 className="font-bold text-silver text-xl mb-2">Smart Contracts</h4>
                <p className="text-silver-dim">Automated, trustless contract execution with immutable audit trails.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <Shield className="w-12 h-12 text-gold" />
              </div>
              <div>
                <h4 className="font-bold text-silver text-xl mb-2">Digital Assets</h4>
                <p className="text-silver-dim">Tokenization of real-world and digital assets for global trading.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <Network className="w-12 h-12 text-gold" />
              </div>
              <div>
                <h4 className="font-bold text-silver text-xl mb-2">Governance Systems</h4>
                <p className="text-silver-dim">Decentralized voting and decision-making frameworks for organizations.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <Shield className="w-12 h-12 text-gold" />
              </div>
              <div>
                <h4 className="font-bold text-silver text-xl mb-2">Enterprise Data</h4>
                <p className="text-silver-dim">Secure, verifiable data management across organizational boundaries.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-navy-light">
        <div className="container mx-auto px-6">
          <h3 className="font-serif text-4xl text-silver mb-16 text-center">Our Technology</h3>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-navy p-6 rounded-lg border border-navy-lighter">
                <h4 className="font-bold text-gold text-lg mb-2">Layer Architecture</h4>
                <p className="text-silver-dim">Modular, composable design for deployment flexibility and upgradability.</p>
              </div>
              <div className="bg-navy p-6 rounded-lg border border-navy-lighter">
                <h4 className="font-bold text-gold text-lg mb-2">Security Protocol</h4>
                <p className="text-silver-dim">Cryptographic standards and consensus mechanisms ensuring network integrity.</p>
              </div>
              <div className="bg-navy p-6 rounded-lg border border-navy-lighter">
                <h4 className="font-bold text-gold text-lg mb-2">Interoperability</h4>
                <p className="text-silver-dim">Cross-chain communication for seamless integration with existing systems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gold">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl text-navy mb-8">Transform Your Business</h2>
          <button className="inline-block px-12 py-4 border border-navy text-navy font-bold uppercase tracking-[0.2em] hover:bg-navy hover:text-gold transition-all duration-300">
            Request Demo
          </button>
        </div>
      </section>
    </div>
  );
};
