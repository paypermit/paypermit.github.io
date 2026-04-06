// import React from 'react';
// import { motion } from 'framer-motion';
// import { CreditCard, Shield, Lock } from 'lucide-react';
// import Container from '../ui/Container';
// import FadeIn from '../animations/FadeIn';

// // Import your payment logos (black and white PNGs)
// // Adjust the import paths according to your actual file structure
// import visaLogo from '../../assets/logos/visa.png';
// import mastercard from '../../assets/logos/mastercard.png';
// import telebirr from '../../assets/logos/telebirr.png';
// import ebirr from '../../assets/logos/ebirr.png';
// import kaafi from '../../assets/logos/kaafi.png';
// import paypal from '../../assets/logos/paypal.png';

// // interface PaymentMethod removed for JS compatibility

// const PaymentMethods = () => {
//   // First row - 3 payment methods
//   const firstRowPayments = [
//     { id: 'visa', name: 'Visa', logo: visaLogo },
//     { id: 'mastercard', name: 'Mastercard', logo: mastercard },
//     { id: 'paypal', name: 'paypal', logo: paypal },
// ];

//   // Second row - 3 payment methods
//   const secondRowPayments = [
//     { id: 'ebirr', name: 'Ebirr', logo: ebirr },
//     { id: 'kaafi', name: 'Ebirr kaafi', logo: kaafi },
//     { id: 'telebirr', name: 'TeleBirr', logo: telebirr },
//   ];

//   return (
//     <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white">
//       <Container>
//         <FadeIn direction="up">
//           {/* PayPal Style Card Container */}
//           <div className="max-w-5xl mx-auto">
//             <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
//               {/* Card Header - PayPal Style */}
//               <div className="bg-gradient-to-r from-[#0070ba] to-[#003087 px-6 py-8 md:px-8 md:py-10">
//                 <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//                   <div>
//                     <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm mb-3">
//                       <Shield size={14} className="text-[#ffc439]" />
//                       <span className="text-xs font-medium text-white">Secure Payments</span>
//                     </div>
//                     <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
//                       We Accept
//                     </h3>
//                     <p className="text-white/80 text-sm md:text-base">
//                       Multiple payment options for your convenience
//                     </p>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Lock size={16} className="text-white/60" />
//                     <span className="text-white/60 text-xs">256-bit SSL Secure</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Payment Methods Grid */}
//               <div className="p-6 md:p-8">
//                 {/* First Row - 3 items */}
//                 <div className="grid grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
//                   {firstRowPayments.map((payment, index) => (
//                     <motion.div
//                       key={payment.id}
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ delay: index * 0.1 }}
//                       viewport={{ once: true }}
//                       className="group relative"
//                     >
//                       <div className="relative h-full bg-white rounded-xl p-4 md:p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
//                         {/* PayPal Style hover effect */}
//                         <div className="absolute inset-0 bg-gradient-to-r from-[#0070ba]/0 to-[#0070ba]/0 rounded-xl group-hover:from-[#0070ba]/5 group-hover:to-[#003087]/5 transition-all duration-300" />
                        
//                         {/* Logo Container */}
//                         <div className="flex items-center justify-center h-12 md:h-16 mb-3 md:mb-4">
//                           <img 
//                             src={payment.logo} 
//                             alt={payment.name}
//                             className="max-h-full max-w-full object-contain opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
//                             style={{ filter: 'grayscale(100%)' }}
//                             onError={(e) => {
//                               // Fallback if image fails to load
//                               const target = e.target;
//                               target.style.display = 'none';
//                               const parent = target.parentElement;
//                               if (parent) {
//                                 const fallback = document.createElement('div');
//                                 fallback.className = 'w-12 h-8 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500';
//                                 fallback.textContent = payment.name;
//                                 parent.appendChild(fallback);
//                               }
//                             }}
//                           />
//                         </div>
                        
//                         {/* Payment Name - Hidden on mobile, visible on hover for clean design */}
//                         <div className="text-center">
//                           <p className="text-xs text-gray-500 group-hover:text-[#0070ba] transition-colors duration-300">
//                             {payment.name}
//                           </p>
//                         </div>

//                         {/* PayPal style checkmark on hover */}
//                         <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                           <div className="w-5 h-5 rounded-full bg-[#0070ba] flex items-center justify-center">
//                             <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//                             </svg>
//                           </div>
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>

//                 {/* Second Row - 3 items */}
//                 <div className="grid grid-cols-3 gap-4 md:gap-6">
//                   {secondRowPayments.map((payment, index) => (
//                     <motion.div
//                       key={payment.id}
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.3 + index * 0.1 }}
//                       viewport={{ once: true }}
//                       className="group relative"
//                     >
//                       <div className="relative h-full bg-white rounded-xl p-4 md:p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
//                         {/* PayPal Style hover effect */}
//                         <div className="absolute inset-0 bg-gradient-to-r from-[#0070ba]/0 to-[#0070ba]/0 rounded-xl group-hover:from-[#0070ba]/5 group-hover:to-[#003087]/5 transition-all duration-300" />
                        
//                         {/* Logo Container */}
//                         <div className="flex items-center justify-center h-12 md:h-16 mb-3 md:mb-4">
//                           <img 
//                             src={payment.logo} 
//                             alt={payment.name}
//                             className="max-h-full max-w-full object-contain opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
//                             style={{ filter: 'grayscale(100%)' }}
//                             onError={(e) => {
//                               const target = e.target;
//                               target.style.display = 'none';
//                               const parent = target.parentElement;
//                               if (parent) {
//                                 const fallback = document.createElement('div');
//                                 fallback.className = 'w-12 h-8 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500';
//                                 fallback.textContent = payment.name;
//                                 parent.appendChild(fallback);
//                               }
//                             }}
//                           />
//                         </div>
                        
//                         {/* Payment Name */}
//                         <div className="text-center">
//                           <p className="text-xs text-gray-500 group-hover:text-[#0070ba] transition-colors duration-300">
//                             {payment.name}
//                           </p>
//                         </div>

//                         {/* PayPal style checkmark on hover */}
//                         <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                           <div className="w-5 h-5 rounded-full bg-[#0070ba] flex items-center justify-center">
//                             <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//                             </svg>
//                           </div>
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>


                

//                 {/* PayPal Style Footer Note */}
//                 <motion.div 
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   transition={{ delay: 0.6 }}
//                   viewport={{ once: true }}
//                   className="mt-8 pt-6 border-t border-gray-100 text-center"
//                 >
//                   <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-gray-500">
//                     <div className="flex items-center gap-2">
//                       <CreditCard size={14} className="text-[#0070ba]" />
//                       <span>Your payment info is encrypted and secure</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <div className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block" />
//                       <span>No hidden fees • Instant processing</span>
//                     </div>
//                   </div>
//                 </motion.div>
//               </div>
//             </div>

//             {/* PayPal Style Trust Badge - Optional extra section */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.7 }}
//               viewport={{ once: true }}
//               className="text-center mt-6"
//             >
//               <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gray-50 border border-gray-100">
//                 <div className="flex items-center gap-1">
//                   <Shield size={12} className="text-green-600" />
//                   <span className="text-xs text-gray-600">PCI Compliant</span>
//                 </div>
//                 <div className="w-px h-3 bg-gray-200" />
//                 <div className="flex items-center gap-1">
//                   <Lock size={12} className="text-green-600" />
//                   <span className="text-xs text-gray-600">Fraud Protection</span>
//                 </div>
//                 <div className="w-px h-3 bg-gray-200" />
//                 <div className="flex items-center gap-1">
//                   <CreditCard size={12} className="text-green-600" />
//                   <span className="text-xs text-gray-600">24/7 Support</span>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </FadeIn>
//       </Container>
//     </section>
//   );
// };

// export default PaymentMethods;


// import React from 'react';
// import { motion } from 'framer-motion';
// import { CreditCard, Shield, Lock } from 'lucide-react';
// import Container from '../ui/Container';
// import FadeIn from '../animations/FadeIn';

// // Import your payment logos (black and white PNGs)
// import visaLogo from '../../assets/logos/visa.png';
// import mastercard from '../../assets/logos/mastercard.png';
// import telebirr from '../../assets/logos/telebirr.png';
// import ebirr from '../../assets/logos/ebirr.png';
// import kaafi from '../../assets/logos/kaafi.png';
// import paypal from '../../assets/logos/paypal.png';

// const PaymentMethods = () => {
//   // First row - 3 payment methods with individual size control
//   const firstRowPayments = [
//     { id: 'visa', name: 'Visa', logo: visaLogo, size: 'medium' },
//     { id: 'mastercard', name: 'Mastercard', logo: mastercard, size: 'large' },
//     { id: 'paypal', name: 'PayPal', logo: paypal, size: 'small' },
//   ];

//   // Second row - 3 payment methods with individual size control
//   const secondRowPayments = [
//     { id: 'ebirr', name: 'Ebirr', logo: ebirr, size: 'large' },
//     { id: 'kaafi', name: 'Kaafi', logo: kaafi, size: 'medium' },
//     { id: 'telebirr', name: 'TeleBirr', logo: telebirr, size: 'small' },
//   ];

//   // Function to get size classes based on size prop
//   const getLogoSizeClasses = (size) => {
//     switch (size) {
//       case 'small':
//         return {
//           container: 'h-8 md:h-10',
//           image: 'max-h-6 md:max-h-8',
//         };
//       case 'large':
//         return {
//           container: 'h-16 md:h-24',
//           image: 'max-h-12 md:max-h-16',
//         };
//       case 'medium':
//       default:
//         return {
//           container: 'h-12 md:h-16',
//           image: 'max-h-8 md:max-h-12',
//         };
//     }
//   };

//   return (
//     <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white">
//       <Container>
//         <FadeIn direction="up">
//           {/* PayPal Style Card Container */}
//           <div className="max-w-5xl mx-auto">
//             <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
//               {/* Card Header - PayPal Style */}
//               <div className="bg-gradient-to-r from-[#0070ba] to-[#003087] px-6 py-8 md:px-8 md:py-10">
//                 <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//                   <div>
//                     <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm mb-3">
//                       <Shield size={14} className="text-[#ffc439]" />
//                       <span className="text-xs font-medium text-white">Secure Payments</span>
//                     </div>
//                     <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
//                       We Accept
//                     </h3>
//                     <p className="text-white/80 text-sm md:text-base">
//                       Multiple payment options for your convenience
//                     </p>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Lock size={16} className="text-white/60" />
//                     <span className="text-white/60 text-xs">256-bit SSL Secure</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Payment Methods Grid */}
//               <div className="p-6 md:p-8">
//                 {/* First Row - 3 items */}
//                 <div className="grid grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
//                   {firstRowPayments.map((payment, index) => {
//                     const sizeClasses = getLogoSizeClasses(payment.size);
//                     return (
//                       <motion.div
//                         key={payment.id}
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ delay: index * 0.1 }}
//                         viewport={{ once: true }}
//                         className="group relative"
//                       >
//                         <div className="relative h-full bg-white rounded-xl p-4 md:p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
//                           {/* PayPal Style hover effect */}
//                           <div className="absolute inset-0 bg-gradient-to-r from-[#0070ba]/0 to-[#0070ba]/0 rounded-xl group-hover:from-[#0070ba]/5 group-hover:to-[#003087]/5 transition-all duration-300" />
                          
//                           {/* Logo Container with dynamic size */}
//                           <div className={`flex items-center justify-center ${sizeClasses.container} mb-3 md:mb-4`}>
//                             <img 
//                               src={payment.logo} 
//                               alt={payment.name}
//                               className={`${sizeClasses.image} w-auto object-contain opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105`}
//                               style={{ filter: 'grayscale(100%)' }}
//                               onError={(e) => {
//                                 const target = e.target;
//                                 target.style.display = 'none';
//                                 const parent = target.parentElement;
//                                 if (parent) {
//                                   const fallback = document.createElement('div');
//                                   fallback.className = 'w-12 h-8 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500';
//                                   fallback.textContent = payment.name;
//                                   parent.appendChild(fallback);
//                                 }
//                               }}
//                             />
//                           </div>
                          
//                           {/* Payment Name - Only visible on hover */}
//                           <div className="text-center">
//                             <p className="text-xs text-gray-500 group-hover:text-[#0070ba] transition-colors duration-300">
//                               {payment.name}
//                             </p>
//                           </div>

//                           {/* PayPal style checkmark on hover */}
//                           <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                             <div className="w-5 h-5 rounded-full bg-[#0070ba] flex items-center justify-center">
//                               <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//                               </svg>
//                             </div>
//                           </div>
//                         </div>
//                       </motion.div>
//                     );
//                   })}
//                 </div>

//                 {/* Second Row - 3 items */}
//                 <div className="grid grid-cols-3 gap-4 md:gap-6">
//                   {secondRowPayments.map((payment, index) => {
//                     const sizeClasses = getLogoSizeClasses(payment.size);
//                     return (
//                       <motion.div
//                         key={payment.id}
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.3 + index * 0.1 }}
//                         viewport={{ once: true }}
//                         className="group relative"
//                       >
//                         <div className="relative h-full bg-white rounded-xl p-4 md:p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
//                           {/* PayPal Style hover effect */}
//                           <div className="absolute inset-0 bg-gradient-to-r from-[#0070ba]/0 to-[#0070ba]/0 rounded-xl group-hover:from-[#0070ba]/5 group-hover:to-[#003087]/5 transition-all duration-300" />
                          
//                           {/* Logo Container with dynamic size */}
//                           <div className={`flex items-center justify-center ${sizeClasses.container} mb-3 md:mb-4`}>
//                             <img 
//                               src={payment.logo} 
//                               alt={payment.name}
//                               className={`${sizeClasses.image} w-auto object-contain opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105`}
//                               style={{ filter: 'grayscale(100%)' }}
//                               onError={(e) => {
//                                 const target = e.target;
//                                 target.style.display = 'none';
//                                 const parent = target.parentElement;
//                                 if (parent) {
//                                   const fallback = document.createElement('div');
//                                   fallback.className = 'w-12 h-8 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500';
//                                   fallback.textContent = payment.name;
//                                   parent.appendChild(fallback);
//                                 }
//                               }}
//                             />
//                           </div>
                          
//                           {/* Payment Name */}
//                           <div className="text-center">
//                             <p className="text-xs text-gray-500 group-hover:text-[#0070ba] transition-colors duration-300">
//                               {payment.name}
//                             </p>
//                           </div>

//                           {/* PayPal style checkmark on hover */}
//                           <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                             <div className="w-5 h-5 rounded-full bg-[#0070ba] flex items-center justify-center">
//                               <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//                               </svg>
//                             </div>
//                           </div>
//                         </div>
//                       </motion.div>
//                     );
//                   })}
//                 </div>

//                 {/* PayPal Style Footer Note */}
//                 <motion.div 
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   transition={{ delay: 0.6 }}
//                   viewport={{ once: true }}
//                   className="mt-8 pt-6 border-t border-gray-100 text-center"
//                 >
//                   <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-gray-500">
//                     <div className="flex items-center gap-2">
//                       <CreditCard size={14} className="text-[#0070ba]" />
//                       <span>Your payment info is encrypted and secure</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <div className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block" />
//                       <span>No hidden fees • Instant processing</span>
//                     </div>
//                   </div>
//                 </motion.div>
//               </div>
//             </div>

//             {/* PayPal Style Trust Badge */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.7 }}
//               viewport={{ once: true }}
//               className="text-center mt-6"
//             >
//               <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gray-50 border border-gray-100">
//                 <div className="flex items-center gap-1">
//                   <Shield size={12} className="text-green-600" />
//                   <span className="text-xs text-gray-600">PCI Compliant</span>
//                 </div>
//                 <div className="w-px h-3 bg-gray-200" />
//                 <div className="flex items-center gap-1">
//                   <Lock size={12} className="text-green-600" />
//                   <span className="text-xs text-gray-600">Fraud Protection</span>
//                 </div>
//                 <div className="w-px h-3 bg-gray-200" />
//                 <div className="flex items-center gap-1">
//                   <CreditCard size={12} className="text-green-600" />
//                   <span className="text-xs text-gray-600">24/7 Support</span>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </FadeIn>
//       </Container>
//     </section>
//   );
// };

// export default PaymentMethods;







// import React from 'react';
// import { motion } from 'framer-motion';
// import { CreditCard, Shield, Lock } from 'lucide-react';
// import Container from '../ui/Container';
// import FadeIn from '../animations/FadeIn';

// // Import your payment logos (black and white PNGs)
// import visaLogo from '../../assets/logos/visa.png';
// import mastercard from '../../assets/logos/mastercard.png';
// import telebirr from '../../assets/logos/telebirr.png';
// import ebirr from '../../assets/logos/ebirr.png';
// import kaafi from '../../assets/logos/kaafi.png';
// import paypal from '../../assets/logos/paypal.png';

// const PaymentMethods = () => {
//   // First row - 3 payment methods with numeric size control (size in pixels)
//   const firstRowPayments = [
//     { id: 'visa', name: 'Visa', logo: visaLogo, size: 80 },
//     { id: 'mastercard', name: 'Mastercard', logo: mastercard, size: 80 },
//     { id: 'paypal', name: 'PayPal', logo: paypal, size: 80 },
//   ];

//   // Second row - 3 payment methods with numeric size control (size in pixels)
//   const secondRowPayments = [
//     { id: 'ebirr', name: 'Ebirr', logo: ebirr, size: 100 },
//     { id: 'kaafi', name: 'Kaafi', logo: kaafi, size: 100 },
//     { id: 'telebirr', name: 'TeleBirr', logo: telebirr, size: 100 },
//   ];

//   return (
//     <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white">
//       <Container>
//         <FadeIn direction="up">
//           {/* PayPal Style Card Container */}
//           <div className="max-w-5xl mx-auto">
//             <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
//               {/* Card Header - PayPal Style */}
//               <div className="bg-gradient-to-r from-[#0070ba] to-[#003087] px-6 py-8 md:px-8 md:py-10">
//                 <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//                   <div>
//                     <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm mb-3">
//                       <Shield size={14} className="text-[#ffc439]" />
//                       <span className="text-xs font-medium text-white">Secure Payments</span>
//                     </div>
//                     <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
//                       We Accept
//                     </h3>
//                     <p className="text-white/80 text-sm md:text-base">
//                       Multiple payment options for your convenience
//                     </p>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Lock size={16} className="text-white/60" />
//                     <span className="text-white/60 text-xs">256-bit SSL Secure</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Payment Methods Grid */}
//               <div className="p-6 md:p-8">
//                 {/* First Row - 3 items */}
//                 <div className="grid grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
//                   {firstRowPayments.map((payment, index) => (
//                     <motion.div
//                       key={payment.id}
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ delay: index * 0.1 }}
//                       viewport={{ once: true }}
//                       className="group relative"
//                     >
//                       <div className="relative h-full bg-white rounded-xl p-4 md:p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
//                         {/* PayPal Style hover effect */}
//                         <div className="absolute inset-0 bg-gradient-to-r from-[#0070ba]/0 to-[#0070ba]/0 rounded-xl group-hover:from-[#0070ba]/5 group-hover:to-[#003087]/5 transition-all duration-300" />
                        
//                         {/* Logo Container - centered with custom size */}
//                         <div className="flex items-center justify-center min-h-[80px]">
//                           <img 
//                             src={payment.logo} 
//                             alt={payment.name}
//                             style={{ 
//                               height: `${payment.size}px`, 
//                               width: 'auto',
//                               filter: 'grayscale(100%)',
//                               maxWidth: '100%',
//                               objectFit: 'contain'
//                             }}
//                             className="opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
//                             onError={(e) => {
//                               const target = e.target;
//                               target.style.display = 'none';
//                               const parent = target.parentElement;
//                               if (parent) {
//                                 const fallback = document.createElement('div');
//                                 fallback.className = 'w-12 h-8 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500';
//                                 fallback.textContent = payment.name;
//                                 parent.appendChild(fallback);
//                               }
//                             }}
//                           />
//                         </div>

//                         {/* PayPal style checkmark on hover */}
//                         <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                           <div className="w-5 h-5 rounded-full bg-[#0070ba] flex items-center justify-center">
//                             <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//                             </svg>
//                           </div>
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>

//                 {/* Second Row - 3 items */}
//                 <div className="grid grid-cols-3 gap-4 md:gap-6">
//                   {secondRowPayments.map((payment, index) => (
//                     <motion.div
//                       key={payment.id}
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.3 + index * 0.1 }}
//                       viewport={{ once: true }}
//                       className="group relative"
//                     >
//                       <div className="relative h-full bg-white rounded-xl p-4 md:p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
//                         {/* PayPal Style hover effect */}
//                         <div className="absolute inset-0 bg-gradient-to-r from-[#0070ba]/0 to-[#0070ba]/0 rounded-xl group-hover:from-[#0070ba]/5 group-hover:to-[#003087]/5 transition-all duration-300" />
                        
//                         {/* Logo Container - centered with custom size */}
//                         <div className="flex items-center justify-center min-h-[80px]">
//                           <img 
//                             src={payment.logo} 
//                             alt={payment.name}
//                             style={{ 
//                               height: `${payment.size}px`, 
//                               width: 'auto',
//                               filter: 'grayscale(100%)',
//                               maxWidth: '100%',
//                               objectFit: 'contain'
//                             }}
//                             className="opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
//                             onError={(e) => {
//                               const target = e.target;
//                               target.style.display = 'none';
//                               const parent = target.parentElement;
//                               if (parent) {
//                                 const fallback = document.createElement('div');
//                                 fallback.className = 'w-12 h-8 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500';
//                                 fallback.textContent = payment.name;
//                                 parent.appendChild(fallback);
//                               }
//                             }}
//                           />
//                         </div>

//                         {/* PayPal style checkmark on hover */}
//                         <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                           <div className="w-5 h-5 rounded-full bg-[#0070ba] flex items-center justify-center">
//                             <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//                             </svg>
//                           </div>
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>

//                 {/* PayPal Style Footer Note */}
//                 <motion.div 
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   transition={{ delay: 0.6 }}
//                   viewport={{ once: true }}
//                   className="mt-8 pt-6 border-t border-gray-100 text-center"
//                 >
//                   <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-gray-500">
//                     <div className="flex items-center gap-2">
//                       <CreditCard size={14} className="text-[#0070ba]" />
//                       <span>Your payment info is encrypted and secure</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <div className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block" />
//                       <span>No hidden fees • Instant processing</span>
//                     </div>
//                   </div>
//                 </motion.div>
//               </div>
//             </div>

//             {/* PayPal Style Trust Badge */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.7 }}
//               viewport={{ once: true }}
//               className="text-center mt-6"
//             >
//               <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gray-50 border border-gray-100">
//                 <div className="flex items-center gap-1">
//                   <Shield size={12} className="text-green-600" />
//                   <span className="text-xs text-gray-600">PCI Compliant</span>
//                 </div>
//                 <div className="w-px h-3 bg-gray-200" />
//                 <div className="flex items-center gap-1">
//                   <Lock size={12} className="text-green-600" />
//                   <span className="text-xs text-gray-600">Fraud Protection</span>
//                 </div>
//                 <div className="w-px h-3 bg-gray-200" />
//                 <div className="flex items-center gap-1">
//                   <CreditCard size={12} className="text-green-600" />
//                   <span className="text-xs text-gray-600">24/7 Support</span>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </FadeIn>
//       </Container>
//     </section>
//   );
// };

// export default PaymentMethods;






// import React from 'react';
// import { motion } from 'framer-motion';
// import { CreditCard, Shield, Lock } from 'lucide-react';
// import Container from '../ui/Container';
// import FadeIn from '../animations/FadeIn';

// // Import your payment logos (black and white PNGs)
// import visaLogo from '../../assets/logos/visa.png';
// import mastercard from '../../assets/logos/mastercard.png';
// import telebirr from '../../assets/logos/telebirr.png';
// import ebirr from '../../assets/logos/ebirr.png';
// import kaafi from '../../assets/logos/kaafi.png';
// import paypal from '../../assets/logos/paypal.png';

// // Import additional payment logos for second row
// import awashbank from '../../assets/logos/awashbank.png';
// import cbebank from '../../assets/logos/cbebank.png';
// import cbebirr from '../../assets/logos/cbebirr.png';


// const PaymentMethods = () => {
//   // First row - 3 payment methods with numeric size control (size in pixels)
//   const firstRowPayments = [
//     { id: 'visa', name: 'Visa', logo: visaLogo, size: 80 },
//     { id: 'mastercard', name: 'Mastercard', logo: mastercard, size: 80 },
//     { id: 'paypal', name: 'PayPal', logo: paypal, size: 80 },
//   ];

//   // Second row - 6 payment methods with numeric size control (size in pixels)
//   const secondRowPayments = [
//       { id: 'discover', name: 'Discover', logo: cbebank, size: 80 },
//       { id: 'telebirr', name: 'TeleBirr', logo: telebirr, size: 100 },
//       { id: 'ebirr', name: 'Ebirr', logo: ebirr, size: 100 },
//       { id: 'kaafi', name: 'Kaafi', logo: kaafi, size: 100 },
//       { id: 'stripe', name: 'Stripe', logo: cbebirr, size: 80 },
//       { id: 'amex', name: 'American Express', logo: awashbank, size: 80 },
//   ];

//   // Third row - additional 6 payment methods (optional, remove if not needed)
//   const thirdRowPayments = [
//     // { id: 'square', name: 'Square', logo: squareLogo, size: 70 },
//     // { id: 'venmo', name: 'Venmo', logo: venmoLogo, size: 70 },
//     // { id: 'crypto', name: 'Cryptocurrency', logo: cryptoLogo, size: 70 },
//   ];

//   return (
//     <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white">
//       <Container>
//         <FadeIn direction="up">
//           {/* PayPal Style Card Container */}
//           <div className="max-w-5xl mx-auto">
//             <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
//               {/* Card Header - PayPal Style */}
//               <div className="bg-gradient-to-r from-[#0070ba] to-[#003087] px-6 py-8 md:px-8 md:py-10">
//                 <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//                   <div>
//                     <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm mb-3">
//                       <Shield size={14} className="text-[#ffc439]" />
//                       <span className="text-xs font-medium text-white">Secure Payments</span>
//                     </div>
//                     <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
//                       We Accept
//                     </h3>
//                     <p className="text-white/80 text-sm md:text-base">
//                       Multiple payment options for your convenience
//                     </p>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Lock size={16} className="text-white/60" />
//                     <span className="text-white/60 text-xs">256-bit SSL Secure</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Payment Methods Grid */}
//               <div className="p-6 md:p-8">
//                 {/* First Row - 3 items */}
//                 <div className="grid grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
//                   {firstRowPayments.map((payment, index) => (
//                     <motion.div
//                       key={payment.id}
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ delay: index * 0.1 }}
//                       viewport={{ once: true }}
//                       className="group relative"
//                     >
//                       <div className="relative h-full bg-white rounded-xl p-4 md:p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
//                         {/* Logo Container - centered with custom size */}
//                         <div className="flex items-center justify-center min-h-[80px]">
//                           <img 
//                             src={payment.logo} 
//                             alt={payment.name}
//                             style={{ 
//                               height: `${payment.size}px`, 
//                               width: 'auto',
//                               filter: 'grayscale(100%)',
//                               maxWidth: '100%',
//                               objectFit: 'contain'
//                             }}
//                             className="opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
//                             onError={(e) => {
//                               const target = e.target;
//                               target.style.display = 'none';
//                               const parent = target.parentElement;
//                               if (parent) {
//                                 const fallback = document.createElement('div');
//                                 fallback.className = 'w-12 h-8 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500';
//                                 fallback.textContent = payment.name;
//                                 parent.appendChild(fallback);
//                               }
//                             }}
//                           />
//                         </div>

//                         {/* PayPal style checkmark on hover */}
//                         <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                           <div className="w-5 h-5 rounded-full bg-[#0070ba] flex items-center justify-center">
//                             <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//                             </svg>
//                           </div>
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>

//                 {/* Second Row - 6 items (using grid-cols-6) */}
//                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-6 md:mb-8">
//                   {secondRowPayments.map((payment, index) => (
//                     <motion.div
//                       key={payment.id}
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.3 + index * 0.05 }}
//                       viewport={{ once: true }}
//                       className="group relative"
//                     >
//                       <div className="relative h-full bg-white rounded-xl p-4 md:p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
//                         {/* Logo Container - centered with custom size */}
//                         <div className="flex items-center justify-center min-h-[80px]">
//                           <img 
//                             src={payment.logo} 
//                             alt={payment.name}
//                             style={{ 
//                               height: `${payment.size}px`, 
//                               width: 'auto',
//                               filter: 'grayscale(100%)',
//                               maxWidth: '100%',
//                               objectFit: 'contain'
//                             }}
//                             className="opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
//                             onError={(e) => {
//                               const target = e.target;
//                               target.style.display = 'none';
//                               const parent = target.parentElement;
//                               if (parent) {
//                                 const fallback = document.createElement('div');
//                                 fallback.className = 'w-12 h-8 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500';
//                                 fallback.textContent = payment.name;
//                                 parent.appendChild(fallback);
//                               }
//                             }}
//                           />
//                         </div>

//                         {/* PayPal style checkmark on hover */}
//                         <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                           <div className="w-5 h-5 rounded-full bg-[#0070ba] flex items-center justify-center">
//                             <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//                             </svg>
//                           </div>
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>

//                 {/* Optional Third Row - if you need more payment methods */}
//                 {thirdRowPayments.length > 0 && (
//                   <div className="grid grid-cols-3 gap-4 md:gap-6">
//                     {thirdRowPayments.map((payment, index) => (
//                       <motion.div
//                         key={payment.id}
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.6 + index * 0.1 }}
//                         viewport={{ once: true }}
//                         className="group relative"
//                       >
//                         <div className="relative h-full bg-white rounded-xl p-4 md:p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
//                           {/* Logo Container - centered with custom size */}
//                           <div className="flex items-center justify-center min-h-[80px]">
//                             <img 
//                               src={payment.logo} 
//                               alt={payment.name}
//                               style={{ 
//                                 height: `${payment.size}px`, 
//                                 width: 'auto',
//                                 filter: 'grayscale(100%)',
//                                 maxWidth: '100%',
//                                 objectFit: 'contain'
//                               }}
//                               className="opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
//                               onError={(e) => {
//                                 const target = e.target;
//                                 target.style.display = 'none';
//                                 const parent = target.parentElement;
//                                 if (parent) {
//                                   const fallback = document.createElement('div');
//                                   fallback.className = 'w-12 h-8 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500';
//                                   fallback.textContent = payment.name;
//                                   parent.appendChild(fallback);
//                                 }
//                               }}
//                             />
//                           </div>

//                           {/* PayPal style checkmark on hover */}
//                           <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                             <div className="w-5 h-5 rounded-full bg-[#0070ba] flex items-center justify-center">
//                               <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//                               </svg>
//                             </div>
//                           </div>
//                         </div>
//                       </motion.div>
//                     ))}
//                   </div>
//                 )}

//                 {/* PayPal Style Footer Note */}
//                 <motion.div 
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   transition={{ delay: 0.6 }}
//                   viewport={{ once: true }}
//                   className="mt-8 pt-6 border-t border-gray-100 text-center"
//                 >
//                   <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-gray-500">
//                     <div className="flex items-center gap-2">
//                       <CreditCard size={14} className="text-[#0070ba]" />
//                       <span>Your payment info is encrypted and secure</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <div className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block" />
//                       <span>No hidden fees • Instant processing</span>
//                     </div>
//                   </div>
//                 </motion.div>
//               </div>
//             </div>

//             {/* PayPal Style Trust Badge */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.7 }}
//               viewport={{ once: true }}
//               className="text-center mt-6"
//             >
//               <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gray-50 border border-gray-100">
//                 <div className="flex items-center gap-1">
//                   <Shield size={12} className="text-green-600" />
//                   <span className="text-xs text-gray-600">PCI Compliant</span>
//                 </div>
//                 <div className="w-px h-3 bg-gray-200" />
//                 <div className="flex items-center gap-1">
//                   <Lock size={12} className="text-green-600" />
//                   <span className="text-xs text-gray-600">Fraud Protection</span>
//                 </div>
//                 <div className="w-px h-3 bg-gray-200" />
//                 <div className="flex items-center gap-1">
//                   <CreditCard size={12} className="text-green-600" />
//                   <span className="text-xs text-gray-600">24/7 Support</span>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </FadeIn>
//       </Container>
//     </section>
//   );
// };

// export default PaymentMethods;





import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Shield, Lock, ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import FadeIn from '../animations/FadeIn';

// Import your payment logos (black and white PNGs)
import visaLogo from '../../assets/logos/visa.png';
import mastercard from '../../assets/logos/mastercard.png';
import telebirr from '../../assets/logos/telebirr.png';
import ebirr from '../../assets/logos/ebirr.png';
import kaafi from '../../assets/logos/kaafi.png';
import paypal from '../../assets/logos/paypal.png';

// Import additional payment logos for second row
import awashbank from '../../assets/logos/awashbank.png';
import cbebank from '../../assets/logos/cbebank.png';
import cbebirr from '../../assets/logos/cbebirr.png';


const PaymentMethods = () => {
  // First row - 3 payment methods with numeric size control (size in pixels)
  const firstRowPayments = [
    { id: 'visa', name: 'Visa', logo: visaLogo, size: 80 },
    { id: 'mastercard', name: 'Mastercard', logo: mastercard, size: 80 },
    { id: 'paypal', name: 'PayPal', logo: paypal, size: 80 },
  ];

  // Second row - 6 payment methods with numeric size control (size in pixels)
  const secondRowPayments = [
      { id: 'discover', name: 'Discover', logo: cbebank, size: 80 },
      { id: 'telebirr', name: 'TeleBirr', logo: telebirr, size: 100 },
      { id: 'ebirr', name: 'Ebirr', logo: ebirr, size: 100 },
      { id: 'kaafi', name: 'Kaafi', logo: kaafi, size: 100 },
      { id: 'stripe', name: 'Stripe', logo: cbebirr, size: 80 },
      { id: 'amex', name: 'American Express', logo: awashbank, size: 80 },
  ];

  // Third row - additional 6 payment methods (optional, remove if not needed)
  const thirdRowPayments = [
    // { id: 'square', name: 'Square', logo: squareLogo, size: 70 },
    // { id: 'venmo', name: 'Venmo', logo: venmoLogo, size: 70 },
    // { id: 'crypto', name: 'Cryptocurrency', logo: cryptoLogo, size: 70 },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white">
      <Container>
        <FadeIn direction="up">
          {/* PayPal Style Card Container */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              {/* Card Header - PayPal Style */}
              <div className="bg-gradient-to-r from-[#0070ba] to-[#003087] px-6 py-8 md:px-8 md:py-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm mb-3">
                      <Shield size={14} className="text-[#ffc439]" />
                      <span className="text-xs font-medium text-white">Secure Payments</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      We Accept
                    </h3>
                    <p className="text-white/80 text-sm md:text-base">
                      Multiple payment options for your convenience
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lock size={16} className="text-white/60" />
                    <span className="text-white/60 text-xs">256-bit SSL Secure</span>
                  </div>
                </div>
              </div>

              {/* Payment Methods Grid */}
              <div className="p-6 md:p-8">
                {/* First Row - 3 items */}
                <div className="grid grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
                  {firstRowPayments.map((payment, index) => (
                    <motion.div
                      key={payment.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group relative"
                    >
                      <div className="relative h-full bg-white rounded-xl p-4 md:p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                        {/* Logo Container - centered with custom size */}
                        <div className="flex items-center justify-center min-h-[80px]">
                          <img 
                            src={payment.logo} 
                            alt={payment.name}
                            style={{ 
                              height: `${payment.size}px`, 
                              width: 'auto',
                              filter: 'grayscale(100%)',
                              maxWidth: '100%',
                              objectFit: 'contain'
                            }}
                            className="opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
                            onError={(e) => {
                              const target = e.target;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent) {
                                const fallback = document.createElement('div');
                                fallback.className = 'w-12 h-8 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500';
                                fallback.textContent = payment.name;
                                parent.appendChild(fallback);
                              }
                            }}
                          />
                        </div>

                        {/* PayPal style checkmark on hover */}
                        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-5 h-5 rounded-full bg-[#0070ba] flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Second Row - 6 items (using grid-cols-6) */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-6 md:mb-8">
                  {secondRowPayments.map((payment, index) => (
                    <motion.div
                      key={payment.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      viewport={{ once: true }}
                      className="group relative"
                    >
                      <div className="relative h-full bg-white rounded-xl p-4 md:p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                        {/* Logo Container - centered with custom size */}
                        <div className="flex items-center justify-center min-h-[80px]">
                          <img 
                            src={payment.logo} 
                            alt={payment.name}
                            style={{ 
                              height: `${payment.size}px`, 
                              width: 'auto',
                              filter: 'grayscale(100%)',
                              maxWidth: '100%',
                              objectFit: 'contain'
                            }}
                            className="opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
                            onError={(e) => {
                              const target = e.target;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent) {
                                const fallback = document.createElement('div');
                                fallback.className = 'w-12 h-8 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500';
                                fallback.textContent = payment.name;
                                parent.appendChild(fallback);
                              }
                            }}
                          />
                        </div>

                        {/* PayPal style checkmark on hover */}
                        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-5 h-5 rounded-full bg-[#0070ba] flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Optional Third Row - if you need more payment methods */}
                {thirdRowPayments.length > 0 && (
                  <div className="grid grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
                    {thirdRowPayments.map((payment, index) => (
                      <motion.div
                        key={payment.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative"
                      >
                        <div className="relative h-full bg-white rounded-xl p-4 md:p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                          {/* Logo Container - centered with custom size */}
                          <div className="flex items-center justify-center min-h-[80px]">
                            <img 
                              src={payment.logo} 
                              alt={payment.name}
                              style={{ 
                                height: `${payment.size}px`, 
                                width: 'auto',
                                filter: 'grayscale(100%)',
                                maxWidth: '100%',
                                objectFit: 'contain'
                              }}
                              className="opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
                              onError={(e) => {
                                const target = e.target;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                  const fallback = document.createElement('div');
                                  fallback.className = 'w-12 h-8 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500';
                                  fallback.textContent = payment.name;
                                  parent.appendChild(fallback);
                                }
                              }}
                            />
                          </div>

                          {/* PayPal style checkmark on hover */}
                          <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-5 h-5 rounded-full bg-[#0070ba] flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Big Button - See all payment options */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex justify-center mt-8 mb-6"
                >
                  <button 
                    onClick={() => {
                      // Add your click handler here
                      console.log('See all payment options clicked');
                    }}
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#0070ba] to-[#003087] text-white font-semibold rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <CreditCard size={20} className="text-[#ffc439]" />
                    <span className="text-base md:text-lg">See all payment options</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </motion.div>

                {/* PayPal Style Footer Note */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                  className="mt-8 pt-6 border-t border-gray-100 text-center"
                >
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-2">
                      <CreditCard size={14} className="text-[#0070ba]" />
                      <span>Your payment info is encrypted and secure</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block" />
                      <span>No hidden fees • Instant processing</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* PayPal Style Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
              className="text-center mt-6"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gray-50 border border-gray-100">
                <div className="flex items-center gap-1">
                  <Shield size={12} className="text-green-600" />
                  <span className="text-xs text-gray-600">PCI Compliant</span>
                </div>
                <div className="w-px h-3 bg-gray-200" />
                <div className="flex items-center gap-1">
                  <Lock size={12} className="text-green-600" />
                  <span className="text-xs text-gray-600">Fraud Protection</span>
                </div>
                <div className="w-px h-3 bg-gray-200" />
                <div className="flex items-center gap-1">
                  <CreditCard size={12} className="text-green-600" />
                  <span className="text-xs text-gray-600">24/7 Support</span>
                </div>
              </div>
            </motion.div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};

export default PaymentMethods;