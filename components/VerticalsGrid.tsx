import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { VERTICALS } from '../constants';

const routeMap: { [key: string]: string } = {
  'crypto': '/crypto',
  'ev': '/ev-business',
  'realestate': '/real-estate',
  'blockchain': '/blockchain',
  'cafe': '/cafe',
  'fintech': '/fintech',
  'aviation': '/aviation',
  'sustainable-energy': '/sustainable-energy'
};

export const VerticalsGrid: React.FC = () => {
  return (
    <section id="sectors" className="sectors-section py-32 bg-navy relative scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-gold font-bold tracking-widest uppercase mb-4 text-sm">Our Ecosystem</h2>
          <h3 className="font-serif text-4xl md:text-5xl text-silver">The {VERTICALS.length} Pillars of <span className="italic text-gold">Excellence</span></h3>
          <div className="w-24 h-1 bg-gradient-to-r from-navy-lighter to-gold mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VERTICALS.map((vertical, index) => (
            <motion.div
              key={vertical.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
              className={`${
                // Let sustainable energy fill the right-side empty space on large screens.
                vertical.id === 'sustainable-energy' ? 'lg:col-span-2' : ''
              }`}
            >
            <Link
              to={routeMap[vertical.id]}
              className="sector-card group relative overflow-hidden glass-panel p-1 transition-all duration-500 hover:border-gold/50 block h-full"
            >
              {/* Image Background on Hover */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700">
                <img src={vertical.image} alt={vertical.title} className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000" />
              </div>
              
              <div className="relative z-10 p-8 h-full flex flex-col min-h-[300px] justify-between bg-navy-light/60 group-hover:bg-navy/40 transition-colors">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-navy rounded border border-navy-lighter group-hover:bg-gold group-hover:text-navy transition-all duration-300 text-gold shadow-lg">
                    <vertical.icon size={32} strokeWidth={1.5} />
                  </div>
                  <span className="text-5xl font-serif text-navy-lighter font-bold group-hover:text-gold/20 transition-colors">0{index + 1}</span>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-silver mb-3 tracking-widest uppercase border-l-2 border-transparent group-hover:border-gold pl-0 group-hover:pl-4 transition-all duration-300">
                    {vertical.title}
                  </h4>
                  <p className="text-silver-dim text-sm leading-relaxed group-hover:text-silver transition-colors">
                    {vertical.description}
                  </p>
                </div>

                <div className="mt-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <span className="text-xs uppercase tracking-widest text-gold group-hover:text-silver flex items-center gap-2">
                        Discover More <span className="text-lg">→</span>
                    </span>
                </div>
              </div>
            </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
