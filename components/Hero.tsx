import React from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-navy">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
            src="https://picsum.photos/seed/luxury_city/1920/1080" 
            alt="Background" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light/50 to-navy"></div>
        {/* Animated grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(28,36,90,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(28,36,90,0.2)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h2 className="text-gold tracking-[0.3em] text-sm md:text-base font-bold mb-6 uppercase animate-pulse">
          Welcome to the Future
        </h2>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl font-bold mb-8 text-silver leading-tight">
          ELLIOT <br />
          <span className="gold-gradient-text">GROUP</span>
        </h1>
        <p className="text-silver-dim text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light tracking-wide leading-relaxed">
          A global conglomerate defining the cutting edge of <span className="text-silver font-medium">Crypto, Aviation, Real Estate,</span> and <span className="text-silver font-medium">Technology</span>.
          We don't just predict the future; we engineer it.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a 
            href="#sectors" 
            onClick={(e) => handleScroll(e, '#sectors')}
            className="px-10 py-4 bg-gold text-navy font-bold uppercase tracking-widest hover:bg-silver hover:text-navy transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(212,175,55,0.3)] cursor-pointer"
          >
            Explore Our World
          </a>
          <button className="px-10 py-4 border border-navy-lighter hover:border-gold text-silver font-bold uppercase tracking-widest hover:text-gold transition-all duration-300 backdrop-blur-sm">
            Watch Showreel
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-navy-lighter animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};