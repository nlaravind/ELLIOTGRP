import React from 'react';
import { ArrowLeft, Coffee, Users, Lightbulb } from 'lucide-react';

export const CafePage: React.FC = () => {
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
            <Coffee size={64} className="text-gold" />
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-silver">
            Elliot Café
          </h1>
          <h2 className="text-gold tracking-[0.3em] text-lg md:text-xl font-bold mb-6 uppercase">
            Where Vision Meets Conversation
          </h2>
          <p className="text-silver-dim text-xl max-w-2xl mx-auto mb-12">
            A premium lifestyle brand blending artisanal coffee, business excellence, and creative innovation.
          </p>
          <button className="inline-block px-12 py-4 border border-gold text-gold font-bold uppercase tracking-[0.2em] hover:bg-gold hover:text-navy transition-all duration-300">
            Reserve a Table
          </button>
        </div>
      </section>

      {/* About Division */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-6">
          <h2 className="text-gold font-bold tracking-widest uppercase mb-6 text-sm">About Elliot Café</h2>
          <h3 className="font-serif text-4xl text-silver mb-8 leading-tight">
            Boutique Café Brand <span className="text-gold italic">Under Elliot Group</span>
          </h3>
          <p className="text-silver-dim text-lg mb-8 max-w-3xl">
            Elliot Café is more than a coffee shop—it's a vibrant ecosystem where urban professionals, entrepreneurs, and creative minds converge. We craft premium beverage experiences while fostering innovation and meaningful connections.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section className="py-24 bg-navy-light">
        <div className="container mx-auto px-6">
          <h3 className="font-serif text-4xl text-silver mb-16 text-center">The Experience</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-navy p-8 rounded-lg border border-navy-lighter hover:border-gold transition-colors">
              <Coffee className="w-12 h-12 text-gold mb-4" />
              <h4 className="font-bold text-gold text-lg mb-4">Specialty Coffee</h4>
              <p className="text-silver-dim">Curated blends from finest global sources, expertly crafted by our barista artisans.</p>
            </div>
            <div className="bg-navy p-8 rounded-lg border border-navy-lighter hover:border-gold transition-colors">
              <Users className="w-12 h-12 text-gold mb-4" />
              <h4 className="font-bold text-gold text-lg mb-4">Business Lounge</h4>
              <p className="text-silver-dim">Professional spaces with high-speed internet, private zones for meetings and cooperation.</p>
            </div>
            <div className="bg-navy p-8 rounded-lg border border-navy-lighter hover:border-gold transition-colors">
              <Lightbulb className="w-12 h-12 text-gold mb-4" />
              <h4 className="font-bold text-gold text-lg mb-4">Startup Networking</h4>
              <p className="text-silver-dim">Curated events and spaces connecting entrepreneurs, investors, and innovators.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Position */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-6">
          <h3 className="font-serif text-4xl text-silver mb-16 text-center">Our Brand Promise</h3>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gold text-navy font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-silver text-lg mb-2">Luxury + Creativity</h4>
                  <p className="text-silver-dim">Premium quality meeting contemporary creative expression.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gold text-navy font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-silver text-lg mb-2">Community & Connection</h4>
                  <p className="text-silver-dim">Fostering meaningful relationships and collaborative opportunities.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gold text-navy font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-silver text-lg mb-2">Innovation Forward</h4>
                  <p className="text-silver-dim">Embracing technology and modern design in every aspect.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expansion Plans */}
      <section className="py-24 bg-navy-light">
        <div className="container mx-auto px-6">
          <h3 className="font-serif text-4xl text-silver mb-16 text-center">Expansion Strategy</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="font-bold text-gold text-lg mb-4">Launch Phase</h4>
              <p className="text-silver-dim">Hyderabad flagship location establishing the premium brand presence.</p>
            </div>
            <div className="text-center">
              <h4 className="font-bold text-gold text-lg mb-4">Franchise Model</h4>
              <p className="text-silver-dim">Scalable partnerships bringing Elliot Café to major Indian cities.</p>
            </div>
            <div className="text-center">
              <h4 className="font-bold text-gold text-lg mb-4">Smart Café Tech</h4>
              <p className="text-silver-dim">AI-powered ordering, IoT optimization, and digital experience integration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gold">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl text-navy mb-8">Join the Community</h2>
          <button className="inline-block px-12 py-4 border border-navy text-navy font-bold uppercase tracking-[0.2em] hover:bg-navy hover:text-gold transition-all duration-300">
            Visit Elliot Café
          </button>
        </div>
      </section>
    </div>
  );
};
