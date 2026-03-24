import React from 'react';
import { motion } from 'framer-motion';
import { Bot, CreditCard, Users, Rocket, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import FadeIn from '../animations/FadeIn';

const HowItWorks = () => {
  const steps = [
    {
      icon: Bot,
      title: 'Connect Your Bot',
      description: 'Link your Telegram bot to PayPermit in under 5 minutes. Our guided setup makes it effortless.',
      stepNumber: 1,
    },
    {
      icon: CreditCard,
      title: 'Set Up Payment Plans',
      description: 'Create subscription tiers, set pricing, and choose your preferred payment methods.',
      stepNumber: 2,
    },
    {
      icon: Users,
      title: 'Share Your Link',
      description: 'Share your unique payment link with your community. They can subscribe instantly.',
      stepNumber: 3,
    },
    {
      icon: Rocket,
      title: 'Get Paid Automatically',
      description: 'Our bot handles everything. Users get access instantly, you get paid automatically.',
      stepNumber: 4,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-gray-50">
      <Container>
        <FadeIn direction="up">
          {/* Header - PayPal Style */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 mb-6 shadow-sm">
              <Zap size={16} className="text-[#0070ba]" />
              <span className="text-sm font-medium text-gray-700">Simple Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Get started in
              <span className="block text-[#0070ba] mt-2">
                4 simple steps
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              No technical expertise required. Launch your premium community today.
            </p>
          </div>
        </FadeIn>

        {/* Steps Grid - PayPal Style */}
        <div className="relative mb-16">
          {/* Connection Line - PayPal Style */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0070ba]/20 via-[#ffc439]/40 to-[#0070ba]/20 hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  {/* Step Number Badge */}
                  <div className="relative inline-block mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0070ba]/10 to-[#ffc439]/10 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <step.icon size={32} className="text-[#0070ba] group-hover:text-[#ffc439] transition-colors" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#0070ba] text-white flex items-center justify-center text-sm font-bold shadow-md group-hover:bg-[#ffc439] group-hover:text-[#00112c] transition-all duration-300">
                      {step.stepNumber}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-[#0070ba] transition-colors">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Decorative Element */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight size={20} className="text-gray-300 group-hover:text-[#0070ba] transition-colors" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quick Setup Banner - PayPal Style */}
        <FadeIn direction="up" delay={0.3}>
          <div className="bg-gradient-to-r from-[#0070ba] to-[#003087] rounded-2xl p-8 text-center">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-4">
                  <Zap size={16} className="text-[#ffc439]" />
                  <span className="text-sm font-medium text-white">Quick Setup</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Ready in just 5 minutes
                </h3>
                <p className="text-white/80">
                  Most creators are up and running in under 5 minutes
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-[#ffc439]" />
                  <span className="text-white text-sm">No coding required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-[#ffc439]" />
                  <span className="text-white text-sm">Free setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-[#ffc439]" />
                  <span className="text-white text-sm">24/7 support</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Additional Info - PayPal Style */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'No Technical Skills Required',
              description: 'Our simple interface makes setup easy for everyone',
              icon: Zap
            },
            {
              title: 'Start for Free',
              description: 'No upfront costs. Only pay when you start earning',
              icon: CreditCard
            },
            {
              title: '24/7 Automation',
              description: 'Everything runs automatically once configured',
              icon: Rocket
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + idx * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-[#0070ba]/10 flex items-center justify-center flex-shrink-0">
                <item.icon size={18} className="text-[#0070ba]" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-[#0070ba] text-white rounded-full font-semibold text-lg hover:bg-[#003087] transition-all shadow-md hover:shadow-xl inline-flex items-center gap-2 group">
            Start your 14-day free trial
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="mt-4 text-sm text-gray-500">
            No credit card required. Cancel anytime.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;