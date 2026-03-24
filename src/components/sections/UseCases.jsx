import React from 'react';
import { motion } from 'framer-motion';
import { Users, Building2, Sparkles, TrendingUp, MessageCircle, Gift, CheckCircle, ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import FadeIn from '../animations/FadeIn';

const UseCases = () => {
  const useCases = [
    {
      icon: Users,
      title: 'Content Creators',
      description: 'Monetize your exclusive content, courses, and digital products. Give premium members access to your Telegram channel with automated subscriptions.',
      benefits: ['Recurring revenue', 'Automated access', 'Community growth'],
    },
    {
      icon: Building2,
      title: 'Businesses',
      description: 'Build a private community for your customers, offer premium support, and create exclusive product releases.',
      benefits: ['Customer retention', 'Direct engagement', 'Product feedback'],
    },
 
    {
      icon: Sparkles,
      title: 'Creators & Artists',
      description: 'Share exclusive art, tutorials, and behind-the-scenes content with your biggest fans. Set up membership tiers easily.',
      benefits: ['Fan monetization', 'Exclusive content', 'Direct connection'],
    },
    {
      icon: TrendingUp,
      title: 'Trading Communities',
      description: 'Share signals, analysis, and market insights with paid subscribers. Manage access automatically.',
      benefits: ['Signal distribution', 'Premium insights', 'Real-time updates'],
    },
    {
      icon: MessageCircle,
      title: 'Support Communities',
      description: 'Create premium support channels where members get priority responses and exclusive help.',
      benefits: ['Priority support', 'Expert access', 'Community help'],
    },
    {
      icon: Gift,
      title: 'Product Launches',
      description: 'Build anticipation and give early access to your most loyal followers before public release.',
      benefits: ['Early access', 'Beta testing', 'Exclusive deals'],
    },
  ];

  return (
    <section id="use-cases" className="py-20 md:py-28 bg-white">
      <Container>
        <FadeIn direction="up">
          {/* Header - PayPal Style */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 mb-6 shadow-sm">
              <Users size={16} className="text-[#0070ba]" />
              <span className="text-sm font-medium text-gray-700">Use Cases</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Perfect for
              <span className="block text-[#0070ba] mt-2">
                any community
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From creators to businesses, PayPermit works for everyone.
            </p>
          </div>
        </FadeIn>

        {/* Use Cases Grid - PayPal Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Icon with PayPal Blue */}
                <div className="w-12 h-12 rounded-xl bg-[#0070ba]/10 flex items-center justify-center mb-5 group-hover:bg-[#0070ba] transition-all duration-300">
                  <useCase.icon size={24} className="text-[#0070ba] group-hover:text-white transition-colors duration-300" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#0070ba] transition-colors">
                  {useCase.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {useCase.description}
                </p>
                
                {/* Benefits Tags */}
                <div className="flex flex-wrap gap-2">
                  {useCase.benefits.map((benefit) => (
                    <span 
                      key={benefit} 
                      className="inline-flex items-center gap-1 px-3 py-1 text-xs rounded-full bg-gray-50 text-gray-700 border border-gray-200 group-hover:bg-[#0070ba]/5 group-hover:border-[#0070ba]/20 transition-all"
                    >
                      <CheckCircle size={10} className="text-[#0070ba]" />
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Success Story Section - PayPal Style */}
        <FadeIn direction="up" delay={0.3}>
          <div className="bg-gradient-to-r from-[#0070ba] to-[#003087] rounded-2xl overflow-hidden mb-16">
            <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
              <div className="flex items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-4">
                    <TrendingUp size={16} className="text-[#ffc439]" />
                    <span className="text-sm font-medium text-white">Success Story</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    From 0 to 10,000 subscribers in 3 months
                  </h3>
                  <p className="text-white/80 mb-6">
                    "PayPermit helped me transform my Telegram community into a thriving business. The automated payments and member management saved me countless hours."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-semibold">
                      U
                    </div>
                    <div>
                      <p className="text-white font-semibold">Ugaaska</p>
                      <p className="text-white/70 text-sm">Content Creator, 10K+ subscribers</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Users size={20} className="text-[#ffc439]" />
                      <span className="text-white font-semibold">Growth Metrics</span>
                    </div>
                    <span className="text-xs text-white/60">3 months</span>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm text-white/80 mb-1">
                        <span>Subscriber Growth</span>
                        <span className="font-semibold">+10,000</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-[#ffc439] rounded-full h-2" style={{ width: '100%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm text-white/80 mb-1">
                        <span>Monthly Revenue</span>
                        <span className="font-semibold">+$8,500</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-[#ffc439] rounded-full h-2" style={{ width: '85%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm text-white/80 mb-1">
                        <span>Engagement Rate</span>
                        <span className="font-semibold">+45%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-[#ffc439] rounded-full h-2" style={{ width: '45%' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Who Can Use Section - PayPal Style */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 mb-6">
            <Sparkles size={16} className="text-[#0070ba]" />
            <span className="text-sm font-medium text-gray-700">Perfect For</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Trusted by thousands across industries
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join creators, businesses, and organizations who use PayPermit to monetize their communities
          </p>
        </div>

        {/* Industry Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { name: 'Content Creators', count: '2,500+' },
            { name: 'Businesses', count: '1,200+' },
            { name: 'Trading Groups', count: '800+' },
            { name: 'Artists', count: '1,000+' },
          ].map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-4 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="text-2xl font-bold text-[#0070ba] mb-1">{category.count}</div>
              <div className="text-sm text-gray-600">{category.name}</div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="inline-flex items-center gap-2 text-[#0070ba] font-semibold hover:gap-3 transition-all group">
            See more success stories
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default UseCases;