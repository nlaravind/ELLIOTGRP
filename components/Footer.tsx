import React from 'react';
import { Logo } from './Logo';
import { Twitter, Linkedin, Instagram, Facebook } from 'lucide-react';
import { VERTICALS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-deep border-t border-navy-lighter pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
             <div className="flex items-center gap-2 mb-6">
                <Logo size={40} />
                <span className="font-serif font-bold text-lg tracking-widest text-silver">
                  ELLIOT
                </span>
             </div>
             <p className="text-silver-dim text-sm leading-relaxed mb-6">
               Redefining the boundaries of possibility through {VERTICALS.length} verticals of absolute excellence. The future is now.
             </p>
             <div className="flex gap-4">
                {[Twitter, Linkedin, Instagram, Facebook].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full border border-navy-lighter flex items-center justify-center text-silver-dim hover:text-gold hover:border-gold transition-all duration-300">
                    <Icon size={18} />
                  </a>
                ))}
             </div>
          </div>

          <div>
            <h5 className="text-silver font-bold uppercase tracking-widest mb-6 text-sm">Sectors</h5>
            <ul className="space-y-3 text-sm text-silver-dim">
              {VERTICALS.map((v) => {
                // derive human label from title
                let label = v.title.replace(/^ELLIOT\s+/i, '');
                label = label.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
                if (v.id === 'ev') {
                  label = 'EV Business';
                }
                return (
                  <li key={v.id} className="hover:text-gold cursor-pointer transition-colors">
                    {label}
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h5 className="text-silver font-bold uppercase tracking-widest mb-6 text-sm">Company</h5>
            <ul className="space-y-3 text-sm text-silver-dim">
              <li className="hover:text-gold cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-gold cursor-pointer transition-colors">Leadership</li>
              <li className="hover:text-gold cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-gold cursor-pointer transition-colors">Press</li>
              <li className="hover:text-gold cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>

          <div>
            <h5 className="text-silver font-bold uppercase tracking-widest mb-6 text-sm">Newsletter</h5>
            <p className="text-silver-dim text-sm mb-4">Subscribe for exclusive updates on our latest ventures.</p>
            <div className="flex flex-col gap-2">
              <input type="email" placeholder="Email Address" className="bg-navy border border-navy-lighter px-4 py-3 text-sm text-silver focus:outline-none focus:border-gold transition-colors" />
              <button className="bg-gold text-navy font-bold uppercase tracking-widest text-xs py-3 hover:bg-silver hover:text-navy transition-colors">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-lighter pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-silver-dim uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} ELLIOT GROUP. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};