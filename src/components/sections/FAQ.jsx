import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Mail, MessageCircle, Phone, ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import FadeIn from '../animations/FadeIn';
import { faqs } from '../../utils/constants';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-20 md:py-28 bg-gray-50">
      <Container>
        <FadeIn direction="up">
          {/* Header - PayPal Style */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 mb-6 shadow-sm">
              <HelpCircle size={16} className="text-[#0070ba]" />
              <span className="text-sm font-medium text-gray-700">FAQ</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Frequently asked
              <span className="block text-[#0070ba] mt-2">
                questions
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Got questions? We've got answers.
            </p>
          </div>
        </FadeIn>

        {/* FAQ Accordion - PayPal Style */}
        <div className="max-w-3xl mx-auto mb-16">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left bg-white rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300 group"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                        openIndex === index 
                          ? 'bg-[#0070ba] text-white' 
                          : 'bg-gray-100 text-gray-400 group-hover:bg-[#0070ba]/10'
                      }`}>
                        <HelpCircle size={14} />
                      </div>
                      <span className={`font-semibold transition-colors ${
                        openIndex === index 
                          ? 'text-[#0070ba]' 
                          : 'text-gray-900 group-hover:text-[#0070ba]'
                      }`}>
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      size={20}
                      className={`transform transition-all duration-300 ${
                        openIndex === index 
                          ? 'rotate-180 text-[#0070ba]' 
                          : 'text-gray-400 group-hover:text-[#0070ba]'
                      }`}
                    />
                  </div>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-600 leading-relaxed pl-9">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Help Center Section - PayPal Style */}
        <FadeIn direction="up" delay={0.3}>
          <div className="bg-gradient-to-r from-[#0070ba] to-[#003087] rounded-2xl p-8 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <MessageCircle size={24} className="text-[#ffc439]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Still have questions?</h3>
                  <p className="text-white/80">We're here to help you get started</p>
                </div>
              </div>
              <button className="px-6 py-3 bg-white text-[#0070ba] rounded-full font-semibold hover:bg-gray-100 transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2 group">
                Contact Support
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </FadeIn>

        {/* Support Options - PayPal Style */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Mail,
              title: 'Email Support',
              description: 'Get a response within 24 hours',
              action: 'support@paypermit.com',
              type: 'email'
            },
            {
              icon: MessageCircle,
              title: 'Live Chat',
              description: 'Chat with our support team',
              action: 'Start live chat',
              type: 'chat'
            },
            {
              icon: Phone,
              title: 'Phone Support',
              description: 'Available Mon-Fri, 9am-6pm',
              action: 'Schedule a call',
              type: 'phone'
            }
          ].map((option, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + idx * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center">
                <div className="w-12 h-12 rounded-full bg-[#0070ba]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0070ba] transition-all duration-300">
                  <option.icon size={22} className="text-[#0070ba] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{option.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{option.description}</p>
                {option.type === 'email' ? (
                  <a 
                    href={`mailto:${option.action}`} 
                    className="inline-flex items-center gap-1 text-[#0070ba] text-sm font-medium hover:gap-2 transition-all group-hover:gap-2"
                  >
                    {option.action}
                    <ArrowRight size={14} />
                  </a>
                ) : (
                  <button className="inline-flex items-center gap-1 text-[#0070ba] text-sm font-medium hover:gap-2 transition-all group-hover:gap-2">
                    {option.action}
                    <ArrowRight size={14} />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Can't find what you're looking for? Check out our{' '}
            <a href="#" className="text-[#0070ba] hover:underline font-medium">
              Help Center
            </a>{' '}
            or{' '}
            <a href="#" className="text-[#0070ba] hover:underline font-medium">
              Documentation
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
};

export default FAQ;