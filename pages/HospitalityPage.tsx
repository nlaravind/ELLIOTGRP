import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, BedDouble, ConciergeBell, MapPinned, UtensilsCrossed } from 'lucide-react';
import { ScrollProgress } from '../components/ScrollProgress';

export const HospitalityPage: React.FC = () => {
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
            <BedDouble size={64} className="text-gold" />
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-silver">
            Elliot Hospitality
          </h1>
          <h2 className="text-gold tracking-[0.3em] text-lg md:text-xl font-bold mb-6 uppercase">
            Curating Premium Stays and Guest Experiences
          </h2>
          <p className="text-silver-dim text-xl max-w-3xl mx-auto mb-12">
            Luxury hospitality concepts spanning boutique stays, destination-led experiences, and service-first lifestyle spaces.
          </p>
          <button className="inline-block px-12 py-4 border border-gold text-gold font-bold uppercase tracking-[0.2em] hover:bg-gold hover:text-navy transition-all duration-300">
            Explore Hospitality
          </button>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} viewport={{ once: true, amount: 0.15 }} className="py-24 bg-navy">
        <div className="container mx-auto px-6">
          <h2 className="text-gold font-bold tracking-widest uppercase mb-6 text-sm">About Division</h2>
          <h3 className="font-serif text-4xl text-silver mb-8 leading-tight">
            Elevated stays with <span className="text-gold italic">institutional execution</span>
          </h3>
          <p className="text-silver-dim text-lg mb-8 max-w-3xl">
            Elliot Hospitality is focused on creating premium destinations and guest experiences that combine refined design, operational excellence, and modern service standards for business and leisure travelers.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-navy-light p-6 rounded-lg border border-navy-lighter hover:border-gold transition-colors">
              <BedDouble className="w-10 h-10 text-gold mb-4" />
              <h4 className="font-bold text-gold mb-3">Boutique Stays</h4>
              <p className="text-silver-dim">Distinctive stay experiences designed around comfort, privacy, and design-led environments.</p>
            </div>
            <div className="bg-navy-light p-6 rounded-lg border border-navy-lighter hover:border-gold transition-colors">
              <UtensilsCrossed className="w-10 h-10 text-gold mb-4" />
              <h4 className="font-bold text-gold mb-3">Lifestyle Dining</h4>
              <p className="text-silver-dim">Integrated hospitality concepts blending food, lounge culture, and premium customer engagement.</p>
            </div>
            <div className="bg-navy-light p-6 rounded-lg border border-navy-lighter hover:border-gold transition-colors">
              <ConciergeBell className="w-10 h-10 text-gold mb-4" />
              <h4 className="font-bold text-gold mb-3">Service Excellence</h4>
              <p className="text-silver-dim">Guest-first operations built around consistency, responsiveness, and memorable service delivery.</p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} viewport={{ once: true, amount: 0.15 }} className="py-24 bg-navy-light">
        <div className="container mx-auto px-6">
          <h3 className="font-serif text-4xl text-silver mb-16 text-center">Core Focus</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-navy p-8 rounded-2xl border border-navy-lighter">
              <MapPinned className="w-12 h-12 text-gold mb-5" />
              <h4 className="font-bold text-silver text-xl mb-3">Destination Development</h4>
              <p className="text-silver-dim">Building location-driven concepts that create strong brand recall and guest loyalty.</p>
            </div>
            <div className="bg-navy p-8 rounded-2xl border border-navy-lighter">
              <ConciergeBell className="w-12 h-12 text-gold mb-5" />
              <h4 className="font-bold text-silver text-xl mb-3">Operational Standards</h4>
              <p className="text-silver-dim">Delivering repeatable quality through disciplined hospitality systems and training.</p>
            </div>
            <div className="bg-navy p-8 rounded-2xl border border-navy-lighter">
              <UtensilsCrossed className="w-12 h-12 text-gold mb-5" />
              <h4 className="font-bold text-silver text-xl mb-3">Experience Design</h4>
              <p className="text-silver-dim">Crafting premium spaces where ambience, food, service, and brand story work together.</p>
            </div>
            <div className="bg-navy p-8 rounded-2xl border border-navy-lighter">
              <BedDouble className="w-12 h-12 text-gold mb-5" />
              <h4 className="font-bold text-silver text-xl mb-3">Scalable Hospitality Ventures</h4>
              <p className="text-silver-dim">Creating concepts that can expand across high-growth urban and destination markets.</p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} viewport={{ once: true, amount: 0.15 }} className="py-20 bg-gold">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl text-navy mb-8">Build the Next Hospitality Experience</h2>
          <button className="inline-block px-12 py-4 border border-navy text-navy font-bold uppercase tracking-[0.2em] hover:bg-navy hover:text-gold transition-all duration-300">
            Partner With Us
          </button>
        </div>
      </motion.section>
    </div>
  );
};
