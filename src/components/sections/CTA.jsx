import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket, Send, Shield, CreditCard, Zap, CheckCircle } from 'lucide-react';
import Container from '../ui/Container';
import FadeIn from '../animations/FadeIn';

const CTA = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-r from-[#0070ba] to-[#003087]">
      {/* Background Pattern - PayPal Style */}
      {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" /> */}
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffc439]/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ffc439]/5 rounded-full blur-3xl" />
      
      <Container>
        <FadeIn direction="up">
          <div className="relative text-center max-w-4xl mx-auto">
            {/* Badge - PayPal Style */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6 border border-white/20"
            >
              <Rocket size={16} className="text-[#ffc439]" />
              <span className="text-white text-sm font-medium">Start earning today</span>
            </motion.div>
            
            {/* Main Heading */}
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4"
            >
              Ready to monetize your
              <span className="block text-[#ffc439] mt-2">
                community?
              </span>
            </motion.h2>
            
            {/* Description */}
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
            >
              Join thousands of creators already using PayPermit to generate recurring revenue from their Telegram communities.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
              <button
                onClick={() => window.open('https://t.me/paypermit_bot', '_blank')}
                className="group px-8 py-4 bg-[#ffc439] hover:bg-[#ffb33c] text-[#00112c] rounded-full font-semibold text-lg transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                Get Started Free
              </button>
              <button
                onClick={() => {
                  document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full font-semibold text-lg transition-all flex items-center justify-center gap-2"
              >
                Learn More
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
            
            {/* Trust Indicators - PayPal Style */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-6 text-white/70 text-sm"
            >
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-[#ffc439]" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-[#ffc439]" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-[#ffc439]" />
                <span>Cancel anytime</span>
              </div>
            </motion.div>

            {/* Additional Trust Badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-12 pt-8 border-t border-white/10"
            >
              <div className="flex flex-wrap justify-center gap-8">
                {[
                  { icon: Shield, text: 'Bank-level security' },
                  { icon: CreditCard, text: 'Instant payouts' },
                  { icon: Zap, text: '5-min setup' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-white/60 text-xs">
                    <item.icon size={14} className="text-[#ffc439]" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Social Proof */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8"
            >
              <div className="flex justify-center items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#ffc439] fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-white/70 text-sm ml-2">Trusted by 2,500+ creators</span>
              </div>
            </motion.div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};

export default CTA;