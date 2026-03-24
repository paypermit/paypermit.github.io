import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, Shield, Wallet, Bot, BarChart, Users, 
  CreditCard, Globe, Lock, Rocket, Clock, Headphones,
  ChevronRight
} from 'lucide-react';
import Container from '../ui/Container';
import FadeIn from '../animations/FadeIn';

const Features = () => {
  const features = [
    { icon: Zap, title: 'Instant Setup', description: 'Get started in minutes. No coding required. Connect your Telegram bot and start accepting payments immediately.' },
    { icon: Shield, title: 'Secure Payments', description: 'Bank-grade security with end-to-end encryption. Your transactions are always protected.' },
    { icon: Wallet, title: 'Multiple Currencies', description: 'Support for USD, and local currencies. Accept payments from anywhere in the world.' },
    { icon: Bot, title: 'Automated Bot', description: 'Fully automated payment processing. Your Telegram bot handles everything from payment to access management.' },
    { icon: BarChart, title: 'Analytics Dashboard', description: 'Track your revenue, subscriber growth, and payment performance with detailed analytics.' },
    { icon: Users, title: 'Member Management', description: 'Automatically manage subscriber access, send reminders, and handle expirations seamlessly.' },
    { icon: CreditCard, title: 'Multiple Payment Methods', description: 'Support for cards, mobile money. Give your users the flexibility they need.' },
    { icon: Globe, title: 'Global Reach', description: 'Accept payments from users worldwide with support for 50+ currencies and local payment methods.' },
    { icon: Lock, title: 'Fraud Protection', description: 'Advanced fraud detection and prevention to keep your revenue safe.' },
    { icon: Rocket, title: 'Scalable Infrastructure', description: 'Built to handle millions of subscribers without breaking a sweat.' },
    { icon: Clock, title: '24/7 Automation', description: 'Everything runs automatically. No manual intervention needed for payments or access.' },
    { icon: Headphones, title: 'Dedicated Support', description: 'Our team is here to help you succeed. Get priority support on all plans.' },
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-white">
      <Container>
        <FadeIn direction="up">
          {/* Header - PayPal Style */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 mb-6">
              <Zap size={16} className="text-[#0070ba]" />
              <span className="text-sm font-medium text-gray-700">Powerful Features</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Everything you need to
              <span className="block text-[#0070ba] mt-2">
                monetize your community
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Powerful tools designed specifically for Telegram communities. Start earning in minutes.
            </p>
          </div>
        </FadeIn>

        {/* Features Grid - PayPal Style Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Icon with PayPal Blue */}
                <div className="w-12 h-12 rounded-xl bg-[#0070ba]/10 flex items-center justify-center mb-5 group-hover:bg-[#0070ba] transition-all duration-300">
                  <feature.icon size={24} className="text-[#0070ba] group-hover:text-white transition-colors duration-300" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#0070ba] transition-colors">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Decorative Line */}
                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-[#0070ba] to-[#ffc439] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Highlight Section - PayPal Style */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-[#0070ba] to-[#003087] rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
              <div className="flex items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-4">
                    <Rocket size={16} className="text-[#ffc439]" />
                    <span className="text-sm font-medium text-white">PayPermit 1.0</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    Advanced Analytics Dashboard
                  </h3>
                  <p className="text-white/80 mb-6">
                    Get deeper insights into your community's growth with our upcoming advanced analytics dashboard. Track subscriber behavior, revenue trends, and payment patterns in real-time.
                  </p>
                  <button className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all group">
                    Learn more
                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <BarChart size={20} className="text-[#ffc439]" />
                      <span className="text-white font-semibold">Revenue Overview</span>
                    </div>
                    <span className="text-xs text-white/60">Last 30 days</span>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm text-white/80 mb-1">
                        <span>Total Revenue</span>
                        <span className="font-semibold">$12,450</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-[#ffc439] rounded-full h-2" style={{ width: '75%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm text-white/80 mb-1">
                        <span>Active Subscribers</span>
                        <span className="font-semibold">1,234</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-[#ffc439] rounded-full h-2" style={{ width: '62%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm text-white/80 mb-1">
                        <span>Growth Rate</span>
                        <span className="font-semibold">+23%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-[#ffc439] rounded-full h-2" style={{ width: '23%' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Comparison */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 mb-6">
            <Shield size={16} className="text-[#0070ba]" />
            <span className="text-sm font-medium text-gray-700">Compare Features</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Access all features
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            No hidden fees. No surprises. Get access to all features when you sign up.
          </p>
          <button className="inline-flex items-center gap-2 text-[#0070ba] font-semibold hover:gap-3 transition-all group">
            View all features
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Features;