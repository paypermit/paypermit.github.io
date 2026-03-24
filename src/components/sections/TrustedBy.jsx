import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Star, Quote, Shield, Award, Users, TrendingUp } from 'lucide-react';
import Container from '../ui/Container';
import FadeIn from '../animations/FadeIn';

const TrustedBy = () => {
  const logos = [
    { name: 'TechCrunch', gradient: 'from-gray-600 to-gray-400' },
    { name: 'ProductHunt', gradient: 'from-[#ffc439] to-[#ffb347]' },
    { name: 'Forbes', gradient: 'from-[#0070ba] to-[#003087]' },
    { name: 'VentureBeat', gradient: 'from-[#00a86b] to-[#008f5a]' },
    { name: 'The Verge', gradient: 'from-[#ff5e3a] to-[#ff3a1a]' },
    { name: 'Wired', gradient: 'from-[#1a1a1a] to-[#333333]' },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Creator, 50K+ subscribers',
      text: 'PayPermit transformed how I monetize my community. Setup was instant!',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Alex Chen',
      role: 'Business Owner',
      text: 'The automation is incredible. My revenue increased by 300% in 3 months.',
      rating: 5,
      avatar: 'AC'
    },
    {
      name: 'Maria Garcia',
      role: 'Community Manager',
      text: 'Finally, a payment solution that actually works with Telegram. Highly recommended!',
      rating: 5,
      avatar: 'MG'
    },
  ];

  return (
    <section className="py-24 bg-white">
      <Container>
        <FadeIn direction="up">
          {/* Header - PayPal Style */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 mb-6">
              <Award size={16} className="text-[#0070ba]" />
              <span className="text-sm font-medium text-gray-700">Trusted Worldwide</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Join thousands of creators
              <span className="block text-[#0070ba] mt-2">
                already using PayPermit
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Trusted by innovative creators and businesses worldwide to monetize their Telegram communities
            </p>
          </div>

       

      

          {/* CTA Banner - PayPal Style with Enhanced Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="relative overflow-hidden bg-gradient-to-r from-[#0070ba] to-[#003087] rounded-2xl p-12 text-center"
          >
            {/* Background Pattern */}
            {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" /> */}
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                <Users size={16} className="text-[#ffc439]" />
                <span className="text-sm font-medium text-white">Join 2,500+ creators</span>
              </div>
              <h4 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Ready to monetize your community?
              </h4>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of creators already using PayPermit to generate recurring revenue from their Telegram communities
              </p>
              <button 
                onClick={() => window.open('https://t.me/paypermit_bot', '_blank')}
                className="group px-8 py-4 bg-[#fff] hover:bg-[#fff] text-[#0070ba] font-semibold rounded-full transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2 text-lg"
              >
                Get Started Free
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-white/60 text-sm mt-4">
                No credit card required.
              </p>
            </div>
          </motion.div>

          {/* Trust Badges Footer */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { text: 'PCI DSS Compliant', icon: Shield },
              { text: '256-bit Encryption', icon: Shield },
              { text: '24/7 Support', icon: Users },
              { text: 'GDPR Ready', icon: Shield },
            ].map((badge, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + idx * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200"
              >
                <badge.icon size={14} className="text-[#0070ba]" />
                <span className="text-xs text-gray-600 font-medium">{badge.text}</span>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};

export default TrustedBy;