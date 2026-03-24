import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Send } from 'lucide-react';
import { navigationLinks } from '../../utils/constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white shadow-md border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo - Changes based on scroll state */}
          <a 
            href="#" 
            className="flex items-center gap-2 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            {/* Logo for scrolled state (white background) */}
            {scrolled ? (
              <div className="text-xl font-bold text-[#0070ba] group-hover:text-[#003087] transition-colors">
                <img 
                  src="/images/logo2.png" 
                  alt="PayPermit Logo" 
                  className="w-36 h-36 object-contain p-1"
                />
              </div>
            ) : (
              /* Logo for transparent navbar (with white text or light version) */
              <div className="text-xl font-bold transition-colors">
                <img 
                  src="/images/logo3.png" 
                  alt="PayPermit Logo" 
                  className="w-36 h-36 object-contain p-1 brightness-0 invert"
                />
              </div>
            )}
          </a>

          {/* Desktop Navigation - PayPermit Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navigationLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-medium transition-colors ${
                  scrolled
                    ? 'text-gray-700 hover:text-[#0070ba]'
                    : 'text-white hover:text-gray-200'
                }`}
              >
                {link.name}
              </button>
            ))}
            
            <div className={`h-5 w-px ${scrolled ? 'bg-gray-300' : 'bg-white/30'} mx-2`} />
            
           
            <button
              onClick={() => window.open('https://t.me/paypermit_bot', '_blank')}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                scrolled
                  ? 'bg-[#0070ba] text-white hover:bg-[#003087] shadow-md'
                  : 'bg-white text-[#0070ba] hover:bg-gray-100 shadow-lg'
              }`}
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-all ${
                scrolled
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-xl"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile menu logo */}
              <div className="mb-4 pb-4 border-b border-gray-100">
                <img 
                  src="/images/logo2.png" 
                  alt="PayPermit Logo" 
                  className="w-32 h-32 object-contain"
                />
              </div>
              {navigationLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left py-2 text-gray-700 hover:text-[#0070ba] font-medium"
                >
                  {link.name}
                </button>
              ))}
              <div className="border-t border-gray-100 pt-4">
                <button
                  onClick={() => {
                    window.open('https://t.me/paypermit_bot', '_blank');
                    setIsOpen(false);
                  }}
                  className="block w-full text-left py-2 text-gray-700 hover:text-[#0070ba] font-medium"
                >
                  Log In
                </button>
                <button
                  onClick={() => {
                    window.open('https://t.me/paypermit_bot', '_blank');
                    setIsOpen(false);
                  }}
                  className="w-full mt-2 px-5 py-3 bg-[#0070ba] text-white rounded-full font-semibold hover:bg-[#003087] transition-colors"
                >
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;