import React from 'react';
import { ArrowLeft, Zap, TrendingUp, Leaf, Smartphone } from 'lucide-react';

export const EVBusinessPage: React.FC = () => {
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
            Elliot EV
          </h1>
          <h2 className="text-gold tracking-[0.3em] text-lg md:text-xl font-bold mb-6 uppercase">
            Driving the Future of Clean Mobility
          </h2>
          <p className="text-silver-dim text-xl max-w-2xl mx-auto mb-12">
            Pioneering sustainable, efficient, and affordable electric vehicles for the modern world.
          </p>
          <button className="inline-block px-12 py-4 border border-gold text-gold font-bold uppercase tracking-[0.2em] hover:bg-gold hover:text-navy transition-all duration-300">
            Explore Models
          </button>
        </div>
      </section>

      {/* About Division */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-6">
          <h2 className="text-gold font-bold tracking-widest uppercase mb-6 text-sm">About Division</h2>
          <h3 className="font-serif text-4xl text-silver mb-8 leading-tight">
            Sustainable Mobility for <span className="text-gold italic">Everyone</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-navy-light p-6 rounded-lg border border-navy-lighter hover:border-gold transition-colors">
              <h4 className="font-bold text-gold mb-4">Affordable</h4>
              <p className="text-silver-dim">Democratizing electric mobility with cost-effective solutions for urban commuters and professionals.</p>
            </div>
            <div className="bg-navy-light p-6 rounded-lg border border-navy-lighter hover:border-gold transition-colors">
              <h4 className="font-bold text-gold mb-4">Efficient</h4>
              <p className="text-silver-dim">Advanced battery technology and smart EV dashboards for optimal performance and range.</p>
            </div>
            <div className="bg-navy-light p-6 rounded-lg border border-navy-lighter hover:border-gold transition-colors">
              <h4 className="font-bold text-gold mb-4">Sustainable</h4>
              <p className="text-silver-dim">Zero-emission vehicles contributing to a cleaner environment and sustainable future.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-24 bg-navy-light">
        <div className="container mx-auto px-6">
          <h3 className="font-serif text-4xl text-silver mb-16 text-center">Core Focus Areas</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <Leaf className="w-12 h-12 text-gold" />
              </div>
              <div>
                <h4 className="font-bold text-silver text-xl mb-2">Clean Mobility Innovation</h4>
                <p className="text-silver-dim">Developing cutting-edge electric vehicle technology that sets industry standards.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <TrendingUp className="w-12 h-12 text-gold" />
              </div>
              <div>
                <h4 className="font-bold text-silver text-xl mb-2">Battery Technology</h4>
                <p className="text-silver-dim">Next-generation battery systems for extended range and faster charging.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <Smartphone className="w-12 h-12 text-gold" />
              </div>
              <div>
                <h4 className="font-bold text-silver text-xl mb-2">Smart EV Dashboard</h4>
                <p className="text-silver-dim">Intuitive in-vehicle systems for navigation, diagnostics, and energy management.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <Zap className="w-12 h-12 text-gold" />
              </div>
              <div>
                <h4 className="font-bold text-silver text-xl mb-2">Charging Infrastructure</h4>
                <p className="text-silver-dim">Building comprehensive charging networks across cities and highways.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Elliot EV */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-6">
          <h3 className="font-serif text-4xl text-silver mb-16 text-center">Why Choose Elliot EV</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-navy font-bold text-xl">$</span>
              </div>
              <h4 className="font-bold text-silver text-xl mb-4">Cost Savings</h4>
              <p className="text-silver-dim">Significantly lower fuel and maintenance costs compared to traditional vehicles.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-navy font-bold text-xl">⚙</span>
              </div>
              <h4 className="font-bold text-silver text-xl mb-4">Low Maintenance</h4>
              <p className="text-silver-dim">Fewer moving parts mean reduced repairs and extended vehicle lifespan.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-navy font-bold text-xl">🌱</span>
              </div>
              <h4 className="font-bold text-silver text-xl mb-4">Environmental Impact</h4>
              <p className="text-silver-dim">Zero emissions contributing to cleaner air and a healthier planet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-light border-t border-navy-lighter">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl text-silver mb-8">Ready to Go Electric?</h2>
          <button className="inline-block px-12 py-4 border border-gold text-gold font-bold uppercase tracking-[0.2em] hover:bg-gold hover:text-navy transition-all duration-300">
            Inquire Now
          </button>
        </div>
      </section>
    </div>
  );
};
