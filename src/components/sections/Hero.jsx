






import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lock, Globe, Sparkles, Phone, Shield, CheckCircle, Send } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative md:mx-10 md:rounded-3xl min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#019be0] via-[#019be0] to-[#019be0]">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#019be0] rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#019be0] rounded-full blur-3xl opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#019be0] rounded-full blur-3xl opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Trust Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles size={16} className="text-[#019be0]" />
            <span className="text-sm text-[#042e72] font-medium">Launch Your Premium Community Today</span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#fff] leading-tight mb-6">
            Monetize Your{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#fff] to-[#fff] bg-clip-text text-transparent">
                Telegram Community
              </span>
              <motion.div 
                className="absolute -bottom-2 left-0 right-0 h-3 bg-blue-200 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
            <br />
            <span className="text-white">Seamlessly</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-[#042e72] mb-10 max-w-2xl mx-auto leading-relaxed">
            PayPermit helps creators and businesses accept subscription payments on Telegram automatically. 
            Set up in minutes, get paid instantly.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.button 
              onClick={() => window.open('https://t.me/paypermit_bot', '_blank')}
              className="group px-8 py-4 bg-[#042e72] hover:bg-[#042e72] text-white rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Connect on Telegram
              <Send size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button 
              onClick={() => {
                const howItWorks = document.querySelector('#how-it-works');
                if (howItWorks) {
                  howItWorks.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 hover:bg-gray-50 rounded-xl font-semibold text-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              How It Works
            </motion.button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
            {[
              { value: '10K+', label: 'Active Communities' },
              { value: '$2.5M+', label: 'Processed' },
              { value: '99.9%', label: 'Uptime' }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-[#fff]">{stat.value}</div>
                <div className="text-sm text-white">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-6 justify-center pt-4 border-t border-gray-100 max-w-2xl mx-auto">
            {[
              { icon: Shield, text: 'Bank-level security' },
              { icon: Lock, text: 'Secure payments' },
              { icon: Globe, text: 'Global coverage' }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                className="flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 + idx * 0.1 }}
              >
                <div className="p-1.5 rounded-full bg-blue-50">
                  <item.icon size={14} className="text-[#fff]" />
                </div>
                <span className="text-sm text-white">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        onClick={() => {
          const howItWorks = document.querySelector('#how-it-works');
          if (howItWorks) {
            howItWorks.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        <div className="w-7 h-11 border-2 border-gray-300 rounded-full flex justify-center hover:border-[#019be0] transition-colors">
          <motion.div 
            className="w-1.5 h-2.5 bg-[#019be0] rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;