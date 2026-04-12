import React from 'react';
import { Send, Twitter, Github, Linkedin, Mail, Facebook, Youtube, Instagram, Shield, CreditCard, Globe } from 'lucide-react';
import Container from '../ui/Container';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'How it Works', href: '#how-it-works' },
      { name: 'Use Cases', href: '#use-cases' },
    ],
    Support: [
      { name: 'Help Center', href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'Status', href: '#' },
      { name: 'API Documentation', href: '#' },
    ],
    Legal: [
      { name: 'Terms of Service', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR', href: '#' },
    ],
    Company: [
      { name: 'About Us', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/paypermit', label: 'Twitter', color: 'hover:bg-[#1DA1F2]' },
    { icon: Github, href: 'https://github.com/paypermit', label: 'GitHub', color: 'hover:bg-[#333]' },
    { icon: Linkedin, href: 'https://linkedin.com/company/paypermit', label: 'LinkedIn', color: 'hover:bg-[#0077B5]' },
    { icon: Facebook, href: 'https://facebook.com/paypermit', label: 'Facebook', color: 'hover:bg-[#1877F2]' },
    { icon: Youtube, href: 'https://youtube.com/paypermit', label: 'YouTube', color: 'hover:bg-[#FF0000]' },
    { icon: Instagram, href: 'https://instagram.com/paypermit', label: 'Instagram', color: 'hover:bg-gradient-to-r from-[#833AB4] to-[#FD1D1D]' },
  ];

  const paymentMethods = [
      { name: 'WaafiPay', icon: Globe },
    { name: 'Visa', icon: CreditCard },
    { name: 'Mastercard', icon: CreditCard },
    { name: 'PayPal', icon: Send },

  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <Container>
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Brand Column - PayPal Style */}
            <div className="lg:col-span-2">
              <div className="flex items-center">
 <img 
                  src="/images/logo2.png" 
                  alt="PayPermit Logo" 
                  className="w-40  object-contain"
                />
                               
              </div>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                The easiest way to accept subscription payments on Telegram. Monetize your community instantly.
              </p>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                {[
                  { icon: Shield, text: 'PCI Compliant' },
                  { icon: CreditCard, text: 'Secure Payments' },
                  { icon: Globe, text: 'Global Coverage' }
                ].map((badge, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-gray-50 border border-gray-200">
                    <badge.icon size={12} className="text-[#019be0]" />
                    <span className="text-xs text-gray-600">{badge.text}</span>
                  </div>
                ))}
              </div>

              {/* Social Links - PayPal Style */}
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:text-white transition-all duration-300 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon size={14} />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns - PayPal Style */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wider">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-600 hover:text-[#019be0] transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Methods Section */}
        <div className="py-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-500">Accepted Payments:</span>
              <div className="flex gap-2">
                {paymentMethods.map((method, idx) => (
                  <div key={idx} className="flex items-center gap-1 px-2 py-1 rounded bg-gray-50 border border-gray-200">
                    <method.icon size={12} className="text-gray-600" />
                    <span className="text-xs text-gray-600">{method.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-[#00a86b]" />
              <span className="text-xs text-gray-500">256-bit SSL Encryption</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar - PayPal Style */}
        <div className="py-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} PayPermit. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-[#019be0] transition-colors">Terms</a>
              <a href="#" className="text-gray-500 hover:text-[#019be0] transition-colors">Privacy</a>
              <a href="#" className="text-gray-500 hover:text-[#019be0] transition-colors">Cookies</a>
              <a href="#" className="text-gray-500 hover:text-[#019be0] transition-colors">Sitemap</a>
            </div>
            <div className="flex items-center gap-2">
              <Globe size={14} className="text-gray-400" />
              <select className="text-sm text-gray-600 bg-transparent border-none focus:ring-0 cursor-pointer hover:text-[#019be0]">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </div>
          </div>
        </div>

        {/* Additional Trust Section */}
        <div className="py-4 border-t border-gray-200 bg-gray-50 -mx-4 sm:mx-0 rounded-lg mb-4">
          <div className="text-center">
            <p className="text-xs text-gray-500">
              PayPermit is a registered payment facilitator. All transactions are secure and encrypted.
              <br />
              <a href="#" className="text-[#019be0] hover:underline">Learn more about security</a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;