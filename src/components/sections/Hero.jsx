import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Lock, Globe, CheckCircle, Sparkles, Send, Zap, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image - Full Screen */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="PayPermit Hero Background"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Trust Badge */}
              <div className="mt-32 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6 border border-white/20">
                <Sparkles size={16} className="text-[#0070ba]" />
                <span className="text-sm text-white font-medium">Launch Your Premium Community Today</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Monetize Your{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-[#0070ba] to-[#0070ba] bg-clip-text text-transparent">
                    Telegram Community
                  </span>
                  <div className="absolute bottom-2 left-0 right-0 h-3 bg-[#0070ba]/20 blur-sm rounded-full -z-0" />
                </span>
                {' '}Seamlessly
              </h1>

              {/* Subheading */}
              <p className="text-xl text-white/90 mb-8 max-w-lg">
                PayPermit helps creators and businesses accept subscription payments on Telegram automatically. Set up in minutes, get paid instantly.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={() => window.open('https://t.me/paypermit_bot', '_blank')}
                  className="group px-8 py-4 bg-[#0070ba] hover:bg-[#0070ba] text-[#fff] rounded-full font-semibold text-lg transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Get Started Free
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => {
                    document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full font-semibold text-lg transition-all"
                >
                  How It Works
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 my-5">
                {[
                  { icon: Lock, text: 'Bank-level security' },
                  { icon: Globe, text: 'Global payments' },
                  { icon: Phone, text: 'Local wallets' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <item.icon size={18} className="text-white/80" />
                    <span className="text-sm text-white/80">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;