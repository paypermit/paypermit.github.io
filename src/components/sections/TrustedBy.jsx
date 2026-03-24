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

          {/* Logo Cloud - PayPal Style with hover effects */}
          <div className="mb-24">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 items-center justify-items-center">
              {logos.map((logo, index) => (
                <motion.div
                  key={logo.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className={`text-xl font-bold bg-gradient-to-r ${logo.gradient} bg-clip-text text-transparent transition-all duration-300 group-hover:scale-110 group-hover:opacity-100`}>
                    {logo.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Testimonials Section - PayPal Style with Cards */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 mb-4">
                <Quote size={16} className="text-[#0070ba]" />
                <span className="text-sm font-medium text-gray-700">What our users say</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                Loved by creators worldwide
              </h3>
              <p className="text-gray-600 mt-3">
                Join 2,500+ creators who trust PayPermit
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Quote size={48} className="text-[#0070ba]" />
                    </div>
                    
                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={18} className="fill-[#ffc439] text-[#ffc439]" />
                      ))}
                    </div>
                    
                    {/* Quote Text */}
                    <p className="text-gray-700 text-base leading-relaxed mb-8 relative z-10">
                      "{testimonial.text}"
                    </p>
                    
                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#0070ba] to-[#003087] flex items-center justify-center text-white font-semibold text-base">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* View All Link */}
            <div className="text-center mt-12">
              <button className="inline-flex items-center gap-2 text-[#0070ba] font-semibold hover:gap-3 transition-all group text-lg">
                See all success stories
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Stats Section - PayPal Style */}
          <div className="mb-24">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '500+', label: 'Active Communities', icon: Users, color: 'text-[#0070ba]', bg: 'bg-[#0070ba]/10' },
                { value: '50K+', label: 'Subscribers', icon: Users, color: 'text-[#ffc439]', bg: 'bg-[#ffc439]/10' },
                { value: '$2M+', label: 'Processed', icon: TrendingUp, color: 'text-[#00a86b]', bg: 'bg-[#00a86b]/10' },
                { value: '99.9%', label: 'Uptime Guarantee', icon: Shield, color: 'text-[#ff5e3a]', bg: 'bg-[#ff5e3a]/10' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className={`w-16 h-16 ${stat.bg} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <stat.icon size={28} className={stat.color} />
                  </div>
                  <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
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
                className="group px-8 py-4 bg-[#ffc439] hover:bg-[#ffb33c] text-[#00112c] font-semibold rounded-full transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2 text-lg"
              >
                Get Started Free
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-white/60 text-sm mt-4">
                No credit card required • 14-day free trial • Cancel anytime
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