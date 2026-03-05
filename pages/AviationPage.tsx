import React from 'react';
import { ArrowLeft, Plane, Star, Heart } from 'lucide-react';

export const AviationPage: React.FC = () => {
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
            <Plane size={64} className="text-gold" />
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-silver">
            Elliot Aviation
          </h1>
          <h2 className="text-gold tracking-[0.3em] text-lg md:text-xl font-bold mb-6 uppercase">
            Where Privacy Meets Prestige
          </h2>
          <p className="text-silver-dim text-xl max-w-2xl mx-auto mb-12">
            Exclusive private aviation services for the world's most discerning travelers.
          </p>
          <button className="inline-block px-12 py-4 border border-gold text-gold font-bold uppercase tracking-[0.2em] hover:bg-gold hover:text-navy transition-all duration-300">
            Request Flight
          </button>
        </div>
      </section>

      {/* About Division */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-6">
          <h2 className="text-gold font-bold tracking-widest uppercase mb-6 text-sm">About Division</h2>
          <h3 className="font-serif text-4xl text-silver mb-8 leading-tight">
            Discretion. Comfort. <span className="text-gold italic">Elite Standards</span>
          </h3>
          <p className="text-silver-dim text-lg mb-8 max-w-3xl">
            Elliot Aviation delivers unparalleled luxury and privacy to high-net-worth individuals, corporate executives, and elite travelers. Every journey is crafted with meticulous attention to confidentiality and comfort.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-navy-light p-6 rounded-lg border border-navy-lighter hover:border-gold transition-colors">
              <Star className="w-8 h-8 text-gold mb-4" />
              <h4 className="font-bold text-gold mb-4">Premium Fleet</h4>
              <p className="text-silver-dim">Modern, well-maintained aircraft with luxury cabin configurations.</p>
            </div>
            <div className="bg-navy-light p-6 rounded-lg border border-navy-lighter hover:border-gold transition-colors">
              <Heart className="w-8 h-8 text-gold mb-4" />
              <h4 className="font-bold text-gold mb-4">Dedicated Service</h4>
              <p className="text-silver-dim">Expert crew trained in hospitality and discretionary service.</p>
            </div>
            <div className="bg-navy-light p-6 rounded-lg border border-navy-lighter hover:border-gold transition-colors">
              <Plane className="w-8 h-8 text-gold mb-4" />
              <h4 className="font-bold text-gold mb-4">Flexible Scheduling</h4>
              <p className="text-silver-dim">On-demand availability to suit your busy schedule and preferences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-navy-light">
        <div className="container mx-auto px-6">
          <h3 className="font-serif text-4xl text-silver mb-16 text-center">Our Services</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <Plane className="w-12 h-12 text-gold" />
              </div>
              <div>
                <h4 className="font-bold text-silver text-xl mb-2">Private Aviation</h4>
                <p className="text-silver-dim">Exclusive charter flights with personalized itineraries and premium amenities.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <Star className="w-12 h-12 text-gold" />
              </div>
              <div>
                <h4 className="font-bold text-silver text-xl mb-2">Charter Solutions</h4>
                <p className="text-silver-dim">Fractional ownership and flexible charter membership programs.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <Heart className="w-12 h-12 text-gold" />
              </div>
              <div>
                <h4 className="font-bold text-silver text-xl mb-2">Luxury Holidays</h4>
                <p className="text-silver-dim">Concierge-curated travel experiences to exclusive destinations worldwide.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <Plane className="w-12 h-12 text-gold" />
              </div>
              <div>
                <h4 className="font-bold text-silver text-xl mb-2">Executive Mobility</h4>
                <p className="text-silver-dim">Seamless corporate travel solutions with maximum confidentiality.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Experience */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-6">
          <h3 className="font-serif text-4xl text-silver mb-16 text-center">The Elliot Experience</h3>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="bg-navy-light p-8 rounded-lg border border-navy-lighter hover:border-gold transition-colors">
              <h4 className="font-bold text-gold text-lg mb-2">Concierge Services</h4>
              <p className="text-silver-dim">24/7 dedicated concierge for all your travel and logistical needs.</p>
            </div>
            <div className="bg-navy-light p-8 rounded-lg border border-navy-lighter hover:border-gold transition-colors">
              <h4 className="font-bold text-gold text-lg mb-2">Secure Meeting Rooms</h4>
              <p className="text-silver-dim">Private, confidential spaces for business meetings and discussions.</p>
            </div>
            <div className="bg-navy-light p-8 rounded-lg border border-navy-lighter hover:border-gold transition-colors">
              <h4 className="font-bold text-gold text-lg mb-2">Bespoke Experiences</h4>
              <p className="text-silver-dim">Custom-tailored journeys designed to your exact specifications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-light border-t border-navy-lighter">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl text-silver mb-8">Ready to Experience Luxury?</h2>
          <button className="inline-block px-12 py-4 border border-gold text-gold font-bold uppercase tracking-[0.2em] hover:bg-gold hover:text-navy transition-all duration-300">
            Request Confidential Consultation
          </button>
        </div>
      </section>
    </div>
  );
};
