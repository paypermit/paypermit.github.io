import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Globe, Sparkles, Heart, TrendingUp, Users, Clock, Check, X, Award, Star } from 'lucide-react';
import Container from '../ui/Container';
import FadeIn from '../animations/FadeIn';

const WhyChoose = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Bank-Level Security',
      description: 'Your payments and data are protected with enterprise-grade encryption and security protocols.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Payments are processed instantly. Users get access to your content in real-time.',
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Accept payments from anywhere in the world with support for 50+ currencies.',
    },
    {
      icon: Sparkles,
      title: 'Automated Everything',
      description: 'From payments to access management, everything runs automatically 24/7.',
    },
    {
      icon: Heart,
      title: 'Dedicated Support',
      description: 'Our team is here to help you succeed with priority support on all plans.',
    },
    {
      icon: TrendingUp,
      title: 'Revenue Growth',
      description: 'Creators see an average of 300% revenue increase within the first 3 months.',
    },
  ];

  const comparison = [
    { feature: 'Telegram Integration', paypermit: true, others: 'Basic' },
    { feature: 'Automated Access', paypermit: true, others: 'Manual' },
    { feature: 'Multiple Payment Methods', paypermit: true, others: 'Manual' },
    { feature: 'Analytics Dashboard', paypermit: true, others: false },
    { feature: 'Subscriber Management', paypermit: true, others: false },
    { feature: 'Fraud Protection', paypermit: true, others: false },
    { feature: '24/7 Automation', paypermit: true, others: false },
    { feature: 'API Access', paypermit: true, others: false },
  ];

  const achievements = [
    { value: '99.9%', label: 'Uptime Guarantee', icon: Clock },
    { value: '300%', label: 'Average Revenue Growth', icon: TrendingUp },
    { value: '50K+', label: 'Active Subscribers', icon: Users },
    { value: '4.9/5', label: 'User Rating', icon: Star },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <FadeIn direction="up">
          {/* Header - PayPal Style */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 mb-6 shadow-sm">
              <Award size={16} className="text-[#019be0]" />
              <span className="text-sm font-medium text-gray-700">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              The smarter way to
              <span className="block text-[#019be0] mt-2">
                monetize Telegram
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We're built specifically for Telegram communities. No other platform comes close.
            </p>
          </div>
        </FadeIn>

        {/* Benefits Grid - PayPal Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Icon with PayPal Blue */}
                <div className="w-12 h-12 rounded-xl bg-[#019be0]/10 flex items-center justify-center mb-4 group-hover:bg-[#019be0] transition-all duration-300">
                  <benefit.icon size={22} className="text-[#019be0] group-hover:text-white transition-colors duration-300" />
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#019be0] transition-colors">
                  {benefit.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
                
                {/* Decorative Line */}
                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-[#019be0] to-[#ffc439] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Banner - PayPal Style */}
        <FadeIn direction="up" delay={0.2}>
          <div className="bg-gradient-to-r from-[#019be0] to-[#042e72] rounded-2xl p-8 mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-3">
                    <achievement.icon size={28} className="text-[#ffc439]" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {achievement.value}
                  </div>
                  <div className="text-white/80 text-sm">
                    {achievement.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Comparison Table - PayPal Style */}
        <FadeIn direction="up" delay={0.3}>
          <div className="mb-16">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 mb-4">
                <Zap size={16} className="text-[#019be0]" />
                <span className="text-sm font-medium text-gray-700">Why We're Different</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                PayPermit vs. Traditional Way
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                See how we stack up against other payment solutions
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left py-4 px-6 text-gray-700 font-semibold">Feature</th>
                      <th className="text-center py-4 px-6 w-32">
                        <div className="inline-flex items-center gap-2">
                          {/* <div className="w-6 h-6 rounded-full bg-[#019be0] flex items-center justify-center">
                            <span className="text-white text-xs font-bold">P</span>
                          </div> */}
                          <span className="font-semibold text-[#019be0]">PayPermit</span>
                        </div>
                      </th>
                      <th className="text-center py-4 px-6 w-32">
                        <span className="text-gray-500 font-semibold">Traditional</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((item, idx) => (
                      <motion.tr 
                        key={idx} 
                        className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <td className="py-3 px-6 text-gray-900 font-medium">{item.feature}</td>
                        <td className="text-center py-3 px-6">
                          {item.paypermit === true ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100">
                              <Check size={14} className="text-green-600" />
                            </span>
                          ) : (
                            <span className="text-gray-400 text-sm">{item.paypermit}</span>
                          )}
                        </td>
                        <td className="text-center py-3 px-6">
                          {item.others === false ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100">
                              <X size={14} className="text-red-600" />
                            </span>
                          ) : (
                            <span className="text-gray-500 text-sm">{item.others}</span>
                          )}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Trust Badges */}
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { text: 'PCI DSS Compliant', icon: Shield },
              { text: 'GDPR Ready', icon: Shield },
              { text: '256-bit Encryption', icon: Shield },
              { text: '24/7 Monitoring', icon: Clock },
            ].map((badge, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + idx * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200"
              >
                <badge.icon size={14} className="text-[#019be0]" />
                <span className="text-xs text-gray-600 font-medium">{badge.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyChoose;