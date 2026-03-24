import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import TrustedBy from './components/sections/TrustedBy';
import Features from './components/sections/Features';
import HowItWorks from './components/sections/HowItWorks';
import UseCases from './components/sections/UseCases';
import Pricing from './components/sections/Pricing';
import WhyChoose from './components/sections/WhyChoose';
import FAQ from './components/sections/FAQ';
import CTA from './components/sections/CTA';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-600 z-50 origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <HowItWorks />
        <UseCases />
        <Pricing />
        <WhyChoose />
        <FAQ />
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;