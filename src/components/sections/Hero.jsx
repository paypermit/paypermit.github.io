// import React from 'react';
// import { motion } from 'framer-motion';
// import { ArrowRight, Shield, Lock, Globe, CheckCircle, Sparkles, Send, Zap, Phone } from 'lucide-react';

// const Hero = () => {
//   return (
//     <div className="relative min-h-screen flex items-center overflow-hidden bg-[#003087]">
     
//       {/* Content */}
//       <div className="relative z-10 w-full">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="max-w-3xl">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               {/* Trust Badge */}
//               <div className="mt-32 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6 border border-white/20">
//                 <Sparkles size={16} className="text-[#fff]" />
//                 <span className="text-sm text-white font-medium">Launch Your Premium Community Today</span>
//               </div>

//               {/* Main Heading */}
//               <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
//                 Monetize Your{' '}
//                 <span className="relative inline-block">
//                   <span className="relative z-10 bg-gradient-to-r from-[#fff] to-[#fff] bg-clip-text text-transparent">
//                     Telegram Community
//                   </span>
//                   <div className="absolute bottom-2 left-0 right-0 h-3 bg-[#0070ba]/20 blur-sm rounded-full -z-0" />
//                 </span>
//                 {' '}Seamlessly
//               </h1>

//               {/* Subheading */}
//               <p className="text-xl text-white/90 mb-8 max-w-lg">
//                 PayPermit helps creators and businesses accept subscription payments on Telegram automatically. Set up in minutes, get paid instantly.
//               </p>

//               {/* CTA Buttons */}
//               <div className="flex flex-col sm:flex-row gap-4 mb-8">
//                 <button 
//                   onClick={() => window.open('https://t.me/paypermit_bot', '_blank')}
//                   className="group px-8 py-4 bg-[#0070ba] hover:bg-[#0070ba] text-[#fff] rounded-full font-semibold text-lg transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center gap-2"
//                 >
//                   Get Started Free
//                   <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
//                 </button>
//                 <button 
//                   onClick={() => {
//                     document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' });
//                   }}
//                   className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full font-semibold text-lg transition-all"
//                 >
//                   How It Works
//                 </button>
//               </div>

//               {/* Trust Indicators */}
//               <div className="flex flex-wrap gap-6 my-5">
//                 {[
//                   { icon: Lock, text: 'Bank-level security' },
//                   { icon: Globe, text: 'Global payments' },
//                   { icon: Phone, text: 'Local wallets' }
//                 ].map((item, idx) => (
//                   <div key={idx} className="flex items-center gap-2">
//                     <item.icon size={18} className="text-white/80" />
//                     <span className="text-sm text-white/80">{item.text}</span>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div 
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
//         animate={{ y: [0, 10, 0] }}
//         transition={{ repeat: Infinity, duration: 1.5 }}
//       >
//         <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
//           <div className="w-1 h-2 bg-white/70 rounded-full mt-2 animate-pulse" />
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Hero;










// import React, { useEffect, useRef, useState } from 'react';
// import { motion } from 'framer-motion';
// import { ArrowRight, Lock, Globe, Sparkles, Phone } from 'lucide-react';

// const Hero = () => {
//   const lottieContainer = useRef(null);
//   const lottieInstance = useRef(null);
//   const [animationData, setAnimationData] = useState(null);
//   const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
//   const [lottieError, setLottieError] = useState(false);

//   // Handle window resize for particles
//   useEffect(() => {
//     setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//     const handleResize = () => {
//       setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Load animation data
//   useEffect(() => {
//     const loadAnimation = async () => {
//       try {
//         // Try multiple possible paths
//         const pathsToTry = [
//           '/assets/lotties/Laptop.json',
//           '/Laptop.json',
//           '/src/assets/lotties/Laptop.json'
//         ];
        
//         for (const path of pathsToTry) {
//           try {
//             const response = await fetch(path);
//             if (response.ok) {
//               const data = await response.json();
//               setAnimationData(data);
//               console.log('Animation loaded from:', path);
//               return;
//             }
//           } catch (err) {
//             // Continue to next path
//           }
//         }
        
//         console.warn('Lottie file not found in any path');
//         setLottieError(true);
//       } catch (error) {
//         console.error('Error loading animation:', error);
//         setLottieError(true);
//       }
//     };

//     loadAnimation();
//   }, []);

//   // Initialize Lottie animation
//   useEffect(() => {
//     if (animationData && lottieContainer.current && !lottieError) {
//       import('lottie-web').then((lottieModule) => {
//         const lottie = lottieModule.default;
//         if (lottieInstance.current) {
//           lottieInstance.current.destroy();
//         }
//         lottieInstance.current = lottie.loadAnimation({
//           container: lottieContainer.current,
//           renderer: 'svg',
//           loop: true,
//           autoplay: true,
//           animationData: animationData,
//         });
//       }).catch(err => {
//         console.error('Failed to load lottie-web:', err);
//         setLottieError(true);
//       });
//     }

//     return () => {
//       if (lottieInstance.current) {
//         lottieInstance.current.destroy();
//       }
//     };
//   }, [animationData, lottieError]);

//   // Generate particles only on client side
//   const particles = React.useMemo(() => {
//     if (windowSize.width === 0) return [];
//     return [...Array(20)].map((_, i) => ({
//       id: i,
//       x: Math.random() * windowSize.width,
//       y: Math.random() * windowSize.height,
//       duration: Math.random() * 5 + 3,
//       delay: Math.random() * 5,
//     }));
//   }, [windowSize]);

//   return (
//     <div className="relative min-h-screen flex items-center overflow-hidden bg-[#003087]">
//       {/* Background Gradient Accents */}
//       <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0070ba]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
//       <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#0070ba]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

//       {/* Animated Background Particles */}
//       {windowSize.width > 0 && (
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           {particles.map((particle) => (
//             <motion.div
//               key={particle.id}
//               className="absolute w-1 h-1 bg-white/20 rounded-full"
//               initial={{
//                 x: particle.x,
//                 y: particle.y,
//               }}
//               animate={{
//                 y: [particle.y, particle.y - 100, particle.y - 200],
//                 opacity: [0, 1, 0],
//               }}
//               transition={{
//                 duration: particle.duration,
//                 repeat: Infinity,
//                 delay: particle.delay,
//               }}
//             />
//           ))}
//         </div>
//       )}

//       {/* Content */}
//       <div className="relative z-10 w-full">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             {/* Left Column - Text Content */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               {/* Trust Badge */}
//               <motion.div 
//                 className="inline-flex items-center gap-2 px-4 py-2 mt-12 rounded-full bg-white/10 backdrop-blur-sm mb-6 border border-white/20"
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ type: "spring", stiffness: 400 }}
//               >
//                 <Sparkles size={16} className="text-white" />
//                 <span className="text-sm text-white font-medium">Launch Your Premium Community Today</span>
//               </motion.div>

//               {/* Main Heading */}
//               <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
//                 Monetize Your{' '}
//                 <span className="relative inline-block">
//                   <span className="relative z-10 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
//                     Telegram Community
//                   </span>
//                   <motion.div 
//                     className="absolute bottom-2 left-0 right-0 h-3 bg-[#0070ba]/30 blur-sm rounded-full -z-0"
//                     animate={{ scale: [1, 1.1, 1] }}
//                     transition={{ duration: 2, repeat: Infinity }}
//                   />
//                 </span>
//                 {' '}Seamlessly
//               </h1>

//               {/* Subheading */}
//               <p className="text-lg md:text-xl text-white/85 mb-8 max-w-lg leading-relaxed">
//                 PayPermit helps creators and businesses accept subscription payments on Telegram automatically. 
//                 Set up in minutes, get paid instantly.
//               </p>

//               {/* CTA Buttons */}
//               <div className="flex flex-col sm:flex-row gap-4 mb-10">
//                 <motion.button 
//                   onClick={() => window.open('https://t.me/paypermit_bot', '_blank')}
//                   className="group px-8 py-4 bg-[#0070ba] hover:bg-[#0088d4] text-white rounded-full font-semibold text-lg transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Get Started Free
//                   <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
//                 </motion.button>
//                 <motion.button 
//                   onClick={() => {
//                     const howItWorks = document.querySelector('#how-it-works');
//                     if (howItWorks) {
//                       howItWorks.scrollIntoView({ behavior: 'smooth' });
//                     }
//                   }}
//                   className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 rounded-full font-semibold text-lg transition-all"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   How It Works
//                 </motion.button>
//               </div>

//               {/* Trust Indicators */}
//               <div className="flex flex-wrap gap-6">
//                 {[
//                   { icon: Lock, text: 'Bank-level security' },
//                   { icon: Globe, text: 'Global payments' },
//                   { icon: Phone, text: 'Local wallets' }
//                 ].map((item, idx) => (
//                   <motion.div 
//                     key={idx} 
//                     className="flex items-center gap-2"
//                     initial={{ opacity: 0, x: -10 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.3 + idx * 0.1 }}
//                     whileHover={{ scale: 1.05 }}
//                   >
//                     <div className="p-1.5 rounded-full bg-white/10">
//                       <item.icon size={16} className="text-white" />
//                     </div>
//                     <span className="text-sm text-white/80">{item.text}</span>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Right Column - Lottie Animation */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.7, delay: 0.2 }}
//               className="flex justify-center lg:justify-end"
//             >
//               <div className="relative">
//                 {/* Glow Effect Behind Animation */}
//                 <div className="absolute inset-0 bg-[#0070ba]/20 rounded-full blur-3xl scale-110 animate-pulse" />
//                 <div className="absolute inset-0 bg-gradient-to-tr from-[#0070ba]/10 to-transparent rounded-full blur-2xl" />
                
//                 {/* Lottie Animation Container */}
//                 <div 
//                   ref={lottieContainer}
//                   className="w-[320px] h-[320px] md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px] relative z-10 flex items-center justify-center"
//                   style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.2))' }}
//                 >
//                   {/* Show loading or fallback content */}
//                   {(!animationData || lottieError) && (
//                     <div className="text-center">
//                       <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
//                         <Sparkles size={48} className="text-white/40" />
//                       </div>
//                       <p className="text-white/60 text-sm">
//                         {lottieError ? 'Subscription Animation' : 'Loading animation...'}
//                       </p>
//                     </div>
//                   )}
//                 </div>
                
//                 {/* Floating Elements Decoration */}
//                 <motion.div 
//                   className="absolute -top-6 -right-6 w-20 h-20 bg-white/5 rounded-full blur-xl"
//                   animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
//                   transition={{ duration: 3, repeat: Infinity }}
//                 />
//                 <motion.div 
//                   className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#0070ba]/20 rounded-full blur-2xl"
//                   animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
//                   transition={{ duration: 4, repeat: Infinity }}
//                 />
//                 <motion.div 
//                   className="absolute top-1/2 -right-4 w-12 h-12 bg-white/10 rounded-full blur-lg"
//                   animate={{ y: [-10, 10, -10] }}
//                   transition={{ duration: 5, repeat: Infinity }}
//                 />
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div 
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer"
//         animate={{ y: [0, 10, 0] }}
//         transition={{ repeat: Infinity, duration: 1.5 }}
//         onClick={() => {
//           const howItWorks = document.querySelector('#how-it-works');
//           if (howItWorks) {
//             howItWorks.scrollIntoView({ behavior: 'smooth' });
//           }
//         }}
//       >
//         <div className="w-7 h-11 border-2 border-white/40 rounded-full flex justify-center hover:border-white/70 transition-colors">
//           <motion.div 
//             className="w-1.5 h-2.5 bg-white/60 rounded-full mt-2"
//             animate={{ y: [0, 12, 0] }}
//             transition={{ repeat: Infinity, duration: 1.5 }}
//           />
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Hero;






















// import React, { useEffect, useRef, useState } from 'react';
// import { motion } from 'framer-motion';
// import { ArrowRight, Lock, Globe, Sparkles, Phone, CreditCard, TrendingUp, Shield, Zap, CheckCircle, Users } from 'lucide-react';

// const Hero = () => {
//   const lottieContainer = useRef(null);
//   const lottieInstance = useRef(null);
//   const [animationData, setAnimationData] = useState(null);
//   const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
//   const [lottieError, setLottieError] = useState(false);

//   useEffect(() => {
//     setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//     const handleResize = () => {
//       setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   useEffect(() => {
//     const loadAnimation = async () => {
//       try {
//         const pathsToTry = [
//           '/src/assets/lotties/subs.json'
//         ];
        
//         for (const path of pathsToTry) {
//           try {
//             const response = await fetch(path);
//             if (response.ok) {
//               const data = await response.json();
//               setAnimationData(data);
//               return;
//             }
//           } catch (err) {}
//         }
//         setLottieError(true);
//       } catch (error) {
//         setLottieError(true);
//       }
//     };

//     loadAnimation();
//   }, []);

//   useEffect(() => {
//     if (animationData && lottieContainer.current && !lottieError) {
//       import('lottie-web').then((lottieModule) => {
//         const lottie = lottieModule.default;
//         if (lottieInstance.current) {
//           lottieInstance.current.destroy();
//         }
//         lottieInstance.current = lottie.loadAnimation({
//           container: lottieContainer.current,
//           renderer: 'svg',
//           loop: true,
//           autoplay: true,
//           animationData: animationData,
//         });
//       }).catch(() => setLottieError(true));
//     }

//     return () => {
//       if (lottieInstance.current) {
//         lottieInstance.current.destroy();
//       }
//     };
//   }, [animationData, lottieError]);

//   const particles = React.useMemo(() => {
//     if (windowSize.width === 0) return [];
//     return [...Array(30)].map((_, i) => ({
//       id: i,
//       x: Math.random() * windowSize.width,
//       y: Math.random() * windowSize.height,
//       duration: Math.random() * 8 + 4,
//       delay: Math.random() * 5,
//     }));
//   }, [windowSize]);

//   return (
//     <div className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#fff] via-[#fff] to-[#003087]">
//       {/* Animated Gradient Orbs */}
//       <div className="absolute top-0 -left-40 w-96 h-96 bg-[#009cde]/20 rounded-full blur-3xl animate-pulse" />
//       <div className="absolute bottom-0 -right-40 w-96 h-96 bg-[#fff]/30 rounded-full blur-3xl animate-pulse delay-1000" />
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#009cde]/10 to-transparent rounded-full blur-3xl" />

//       {/* PayPal-style Grid Pattern */}
//       {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" /> */}

//       {/* Animated Background Particles */}
//       {windowSize.width > 0 && (
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           {particles.map((particle) => (
//             <motion.div
//               key={particle.id}
//               className="absolute w-1 h-1 bg-[#003087]/30 rounded-full"
//               initial={{ x: particle.x, y: particle.y }}
//               animate={{
//                 y: [particle.y, particle.y - 150, particle.y - 300],
//                 opacity: [0, 0.5, 0],
//               }}
//               transition={{
//                 duration: particle.duration,
//                 repeat: Infinity,
//                 delay: particle.delay,
//               }}
//             />
//           ))}
//         </div>
//       )}

//       {/* Floating Payment Cards Background */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <motion.div
//           className="absolute top-20 right-20 w-40 h-24 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 rotate-6"
//           animate={{ y: [0, -20, 0], rotate: [6, 10, 6] }}
//           transition={{ duration: 6, repeat: Infinity }}
//         >
//           <div className="p-3">
//             <div className="w-8 h-6 bg-[#003087]/20 rounded mb-2" />
//             <div className="w-12 h-2 bg-[#003087]/20 rounded" />
//           </div>
//         </motion.div>
//         <motion.div
//           className="absolute bottom-32 left-20 w-48 h-28 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 -rotate-6"
//           animate={{ y: [0, 20, 0], rotate: [-6, -10, -6] }}
//           transition={{ duration: 7, repeat: Infinity }}
//         >
//           <div className="p-3">
//             <div className="w-10 h-7 bg-[#003087]/20 rounded mb-2" />
//             <div className="w-16 h-2 bg-[#003087]/20 rounded" />
//           </div>
//         </motion.div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 w-full">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//           <div className="">
//             {/* Left Column - Text Content */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               {/* Trust Badge - PayPal Style */}
//               <motion.div 
//                 className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#003087]/10 backdrop-blur-sm mb-8 border border-white/20"
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <Shield size={14} className="text-[#ffc439]" />
//                 <span className="text-sm text-[#003087] font-medium">Trusted by 500,000+ businesses</span>
//               </motion.div>

//               {/* Main Heading */}
//               <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0070ba] w-full leading-[1.1] mb-6">
//                 Accept payments for Telegram{' '}
//                 <span className="relative inline-block">
//                   <span className="relative z-10 bg-gradient-to-r from-[#0070ba] to-[#0070ba] bg-clip-text text-transparent">
//                     groups & channels
//                   </span>
//                   <motion.div 
//                     className="absolute -bottom-2 left-0 right-0 h-3 bg-[#003087]/30 blur-sm rounded-full"
//                     animate={{ scale: [1, 1.2, 1] }}
//                     transition={{ duration: 2, repeat: Infinity }}
//                   />
//                 </span>
//               </h1>

//               {/* Subheading */}
//               <p className="text-lg md:text-xl text-[#003087]/85 mb-10 max-w-lg leading-relaxed">
//               Create subscriptions, collect payments, and automatically manage member access.
//                 {/* Join millions who trust us for secure subscription payments. Accept payments, manage members, and grow your community with zero hassle. */}
//               </p>

//               {/* CTA Buttons */}
//               <div className="flex flex-col sm:flex-row gap-4 mb-12">
//                 <motion.button 
//                   onClick={() => window.open('https://t.me/paypermit_bot', '_blank')}
//                   className="group px-8 py-4 bg-[#0070ba] hover:bg-[#0070ba] text-[#fff] rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Get Started Free
//                   <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
//                 </motion.button>
//                 <motion.button 
//                   onClick={() => {
//                     const howItWorks = document.querySelector('#how-it-works');
//                     if (howItWorks) {
//                       howItWorks.scrollIntoView({ behavior: 'smooth' });
//                     }
//                   }}
//                   className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-[#0070ba]/30 text-[#0070ba] hover:bg-white/20 rounded-full font-semibold text-lg transition-all"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Watch Demo
//                 </motion.button>
//               </div>

//               {/* Stats - PayPal Style */}
//               <div className="grid grid-cols-3 gap-6 mb-8">
//                 {[
//                   { value: '$10B+', label: 'Processed', icon: TrendingUp },
//                   { value: '500K+', label: 'Businesses', icon: Users },
//                   { value: '99.99%', label: 'Uptime', icon: CheckCircle }
//                 ].map((stat, idx) => (
//                   <motion.div 
//                     key={idx}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.3 + idx * 0.1 }}
//                     className="text-center"
//                   >
//                     <stat.icon size={20} className="text-[#ffc439] mx-auto mb-2" />
//                     <div className="text-xl md:text-2xl font-bold text-[#0070ba]">{stat.value}</div>
//                     <div className="text-xs text-[#003087]/60">{stat.label}</div>
//                   </motion.div>
//                 ))}
//               </div>

//               {/* Trust Indicators */}
//               <div className="flex flex-wrap gap-5 pt-4 border-t border-white/10">
//                 {[
//                   { icon: Lock, text: 'Bank-level security' },
//                   { icon: CreditCard, text: '100+ payment methods' },
//                   { icon: Globe, text: 'Global coverage' }
//                 ].map((item, idx) => (
//                   <motion.div 
//                     key={idx} 
//                     className="flex items-center gap-2"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 0.6 + idx * 0.1 }}
//                   >
//                     <div className="p-1.5 rounded-full bg-white/10">
//                       <item.icon size={14} className="text-[#0070ba]/80" />
//                     </div>
//                     <span className="text-sm text-[#0070ba]/70">{item.text}</span>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>

         
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div 
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer"
//         animate={{ y: [0, 10, 0] }}
//         transition={{ repeat: Infinity, duration: 1.5 }}
//         onClick={() => {
//           const howItWorks = document.querySelector('#how-it-works');
//           if (howItWorks) {
//             howItWorks.scrollIntoView({ behavior: 'smooth' });
//           }
//         }}
//       >
//         <div className="w-7 h-11 border-2 border-white/40 rounded-full flex justify-center hover:border-white/70 transition-colors">
//           <motion.div 
//             className="w-1.5 h-2.5 bg-white/60 rounded-full mt-2"
//             animate={{ y: [0, 12, 0] }}
//             transition={{ repeat: Infinity, duration: 1.5 }}
//           />
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Hero;












import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lock, Globe, Sparkles, Phone, Shield, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-white to-blue-50">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Trust Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles size={16} className="text-[#0070ba]" />
            <span className="text-sm text-[#003087] font-medium">Launch Your Premium Community Today</span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
            Monetize Your{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#003087] to-[#0070ba] bg-clip-text text-transparent">
                Telegram Community
              </span>
              <motion.div 
                className="absolute -bottom-2 left-0 right-0 h-3 bg-blue-200 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
            <br />
            <span className="text-gray-800">Seamlessly</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            PayPermit helps creators and businesses accept subscription payments on Telegram automatically. 
            Set up in minutes, get paid instantly.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.button 
              onClick={() => window.open('https://t.me/paypermit_bot', '_blank')}
              className="group px-8 py-4 bg-[#0070ba] hover:bg-[#003087] text-white rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Free
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button 
              onClick={() => {
                const howItWorks = document.querySelector('#how-it-works');
                if (howItWorks) {
                  howItWorks.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 hover:bg-gray-50 rounded-xl font-semibold text-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              How It Works
            </motion.button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
            {[
              { value: '10K+', label: 'Active Communities' },
              { value: '$2.5M+', label: 'Processed' },
              { value: '99.9%', label: 'Uptime' }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-[#003087]">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-6 justify-center pt-4 border-t border-gray-100 max-w-2xl mx-auto">
            {[
              { icon: Shield, text: 'Bank-level security' },
              { icon: Lock, text: 'Secure payments' },
              { icon: Globe, text: 'Global coverage' }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                className="flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 + idx * 0.1 }}
              >
                <div className="p-1.5 rounded-full bg-blue-50">
                  <item.icon size={14} className="text-[#0070ba]" />
                </div>
                <span className="text-sm text-gray-600">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        onClick={() => {
          const howItWorks = document.querySelector('#how-it-works');
          if (howItWorks) {
            howItWorks.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        <div className="w-7 h-11 border-2 border-gray-300 rounded-full flex justify-center hover:border-[#0070ba] transition-colors">
          <motion.div 
            className="w-1.5 h-2.5 bg-[#0070ba] rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;