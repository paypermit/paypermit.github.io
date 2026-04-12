import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Star, Sparkles, ArrowRight, Shield, CreditCard, Zap } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import FadeIn from '../animations/FadeIn';

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  const plans = [
    {
      name: 'Starter',
      price: { monthly: 29, yearly: 290 },
      description: 'Perfect for small communities and creators just starting out.',
      features: [
        'Up to 500 subscribers',
        'Basic analytics dashboard',
        'Email support (24h response)',
        'Standard payment methods',
        '2% transaction fee',
        'Basic automation',
      ],
      highlighted: false,
      buttonText: 'Get Started',
      popular: false,
    },
    {
      name: 'Pro',
      price: { monthly: 79, yearly: 790 },
      description: 'Ideal for growing communities and established creators.',
      features: [
        'Up to 5,000 subscribers',
        'Advanced analytics & insights',
        'Priority support (4h response)',
        'All payment methods',
        '1% transaction fee',
        'Custom branding',
        'API access',
        'Subscriber segmentation',
      ],
      highlighted: true,
      buttonText: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Business',
      price: { monthly: 199, yearly: 1990 },
      description: 'For large communities and businesses with high volume.',
      features: [
        'Unlimited subscribers',
        'Custom analytics & reports',
        '24/7 dedicated support',
        'All payment methods + crypto',
        '0.5% transaction fee',
        'White-label solution',
        'Full API access',
        'SLA guarantee',
        'Custom integrations',
        'Account manager',
      ],
      highlighted: false,
      buttonText: 'Contact Sales',
      popular: false,
    },
  ];

  const yearlySavings = (monthly, yearly) => {
    const monthlyTotal = monthly * 12;
    const savings = monthlyTotal - yearly;
    return Math.round((savings / monthlyTotal) * 100);
  };

  return (
    <section id="pricing" className="py-20 md:py-28 bg-gray-50">
      <Container>
        <FadeIn direction="up">
          {/* Header - PayPal Style */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 mb-6 shadow-sm">
              <CreditCard size={16} className="text-[#019be0]" />
              <span className="text-sm font-medium text-gray-700">Simple Pricing</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Simple,
              <span className="block text-[#019be0] mt-2">
                transparent pricing
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose the plan that fits your community size. No hidden fees.
            </p>
          </div>

          {/* Billing Toggle - PayPal Style */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1 bg-gray-100 rounded-full">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  billingPeriod === 'monthly'
                    ? 'bg-white shadow-sm text-[#019be0]'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod('yearly')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  billingPeriod === 'yearly'
                    ? 'bg-white shadow-sm text-[#019be0]'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Yearly
                <span className="ml-1 text-xs text-[#00a86b]">Save up to 20%</span>
              </button>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative ${
                plan.highlighted ? 'md:scale-105 z-10' : ''
              }`}
            >
              {/* Popular Badge - PayPal Style */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="px-4 py-1 bg-[#ffc439] rounded-full text-xs font-semibold text-[#00112c] flex items-center gap-1 shadow-md">
                    <Star size={12} className="fill-current" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className={`h-full rounded-2xl bg-white transition-all duration-300 ${
                plan.highlighted
                  ? 'shadow-2xl border-2 border-[#019be0] hover:shadow-3xl'
                  : 'shadow-lg border border-gray-100 hover:shadow-xl'
              }`}>
                <div className="p-8">
                  {/* Plan Name */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{plan.description}</p>
                  
                  {/* Price */}
                  <div className="mt-6 mb-4">
                    <span className="text-4xl font-bold text-gray-900">
                      ${plan.price[billingPeriod]}
                    </span>
                    <span className="text-gray-500">/{billingPeriod === 'monthly' ? 'month' : 'year'}</span>
                    {billingPeriod === 'yearly' && (
                      <p className="text-xs text-[#00a86b] mt-1 font-medium">
                        Save {yearlySavings(plan.price.monthly, plan.price.yearly)}% vs monthly
                      </p>
                    )}
                  </div>
                  
                  {/* CTA Button */}
                  <button
                    className={`w-full py-3 rounded-full font-semibold transition-all mb-6 ${
                      plan.highlighted
                        ? 'bg-[#019be0] text-white hover:bg-[#042e72] shadow-md hover:shadow-lg'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                    onClick={() => window.open('https://t.me/paypermit_bot', '_blank')}
                  >
                    {plan.buttonText}
                  </button>
                  
                  {/* Features */}
                  <div className="space-y-3">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <Check size={16} className="text-[#019be0] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Free Trial Banner - PayPal Style */}
        <FadeIn direction="up" delay={0.3}>
          <div className="bg-gradient-to-r from-[#019be0] to-[#042e72] rounded-2xl p-8 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Zap size={24} className="text-[#ffc439]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">14-day free trial</h3>
                  <p className="text-white/80">Try PayPermit risk-free with our Pro plan trial</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-white/80 text-sm">No credit card required</span>
                <button className="px-6 py-2 bg-white text-[#019be0] rounded-full font-semibold hover:bg-gray-100 transition-all">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* FAQ Section - PayPal Style */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 mb-6">
            <Shield size={16} className="text-[#019be0]" />
            <span className="text-sm font-medium text-gray-700">Questions?</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Frequently asked questions
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Have questions about pricing? We're here to help you choose the right plan.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            {
              q: "Can I switch plans later?",
              a: "Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated."
            },
            {
              q: "What payment methods do you accept?",
              a: "We accept all major credit cards, PayPal, and cryptocurrencies."
            },
            {
              q: "Is there a setup fee?",
              a: "No setup fees. You only pay the subscription price based on your plan."
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes, you can cancel your subscription at any time with no hidden fees."
            }
          ].map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all"
            >
              <h4 className="font-semibold text-gray-900 mb-2">{faq.q}</h4>
              <p className="text-gray-600 text-sm">{faq.a}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Sales */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Need a custom plan for your enterprise?
          </p>
          <button className="inline-flex items-center gap-2 text-[#019be0] font-semibold hover:gap-3 transition-all group">
            Contact our sales team
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Pricing;