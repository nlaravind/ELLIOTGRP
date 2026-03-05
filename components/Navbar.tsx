import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Sectors', href: '#sectors' },
    { name: 'Innovation', href: '#innovation' },
    { name: 'Contact', href: '#contact' },
  ];

  const isHomePage = location.pathname === '/';

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy/90 backdrop-blur-md py-4 border-b border-navy-lighter' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="/" 
          onClick={(e) => {
            e.preventDefault();
            if (location.pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
              window.location.href = '/';
            }
          }}
          className="flex items-center gap-3 group cursor-pointer"
        >
            <Logo size={48} className="transition-transform group-hover:scale-105 duration-500" />
            <span className="font-serif font-bold text-xl tracking-widest text-silver group-hover:text-gold transition-colors">
              ELLIOT <span className="text-gold">GROUP</span>
            </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {isHomePage ? (
            navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm uppercase tracking-widest font-medium text-silver-dim hover:text-gold transition-colors relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-gold after:bottom-[-4px] after:left-0 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))
          ) : (
            <a 
              href="/" 
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/';
              }}
              className="text-sm uppercase tracking-widest font-medium text-silver-dim hover:text-gold transition-colors cursor-pointer"
            >
              Home
            </a>
          )}
          {isHomePage && (
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-navy transition-all duration-300 text-xs uppercase tracking-widest font-bold cursor-pointer"
            >
              Investor Relations
            </a>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-silver"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-navy/95 backdrop-blur-xl border-b border-navy-lighter p-8 flex flex-col space-y-6 h-screen">
           {isHomePage ? (
             <>
               {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-lg uppercase tracking-widest font-medium text-silver hover:text-gold"
                >
                  {link.name}
                </a>
              ))}
               <a 
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="text-lg uppercase tracking-widest font-medium text-gold hover:text-white"
                >
                  Investor Relations
                </a>
             </>
           ) : (
             <a 
               href="/" 
               onClick={(e) => {
                 e.preventDefault();
                 window.location.href = '/';
               }}
               className="text-lg uppercase tracking-widest font-medium text-silver hover:text-gold cursor-pointer"
             >
               Home
             </a>
           )}
        </div>
      )}
    </nav>
  );
};