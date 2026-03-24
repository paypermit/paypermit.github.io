export const navigationLinks = [
  { name: 'Features', href: '#features' },
  // { name: 'Pricing', href: '#pricing' },
  { name: 'How it Works', href: '#how-it-works' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export const features = [
  {
    icon: 'Zap',
    title: 'Instant Setup',
    description: 'Get started in minutes. No coding required. Connect your Telegram bot and start accepting payments immediately.',
  },
  {
    icon: 'Shield',
    title: 'Secure Payments',
    description: 'Bank-grade security with end-to-end encryption. Your transactions are always protected.',
  },
  {
    icon: 'Wallet',
    title: 'Multiple Currencies',
    description: 'Support for USD, EUR, and local currencies. Accept payments from anywhere in the world.',
  },
  {
    icon: 'Bot',
    title: 'Automated Bot',
    description: 'Fully automated payment processing. Your Telegram bot handles everything from payment to access management.',
  },
  {
    icon: 'BarChart',
    title: 'Analytics Dashboard',
    description: 'Track your revenue, subscriber growth, and payment performance with detailed analytics.',
  },
  {
    icon: 'Users',
    title: 'Member Management',
    description: 'Automatically manage subscriber access, send reminders, and handle expirations seamlessly.',
  },
  {
    icon: 'CreditCard',
    title: 'Multiple Payment Methods',
    description: 'Support for cards, mobile money, and crypto payments. Give your users the flexibility they need.',
  },
  {
    icon: 'Globe',
    title: 'Global Reach',
    description: 'Accept payments from users worldwide with support for 50+ currencies and local payment methods.',
  },
];

export const pricingPlans = [
  {
    name: 'Starter',
    price: 29,
    period: 'month',
    description: 'Perfect for small communities and creators just starting out.',
    features: [
      'Up to 500 subscribers',
      'Basic analytics',
      'Email support',
      'Standard payment methods',
      '2% transaction fee',
    ],
    highlighted: false,
  },
  {
    name: 'Pro',
    price: 79,
    period: 'month',
    description: 'Ideal for growing communities and established creators.',
    features: [
      'Up to 5,000 subscribers',
      'Advanced analytics',
      'Priority support',
      'All payment methods',
      '1% transaction fee',
      'Custom branding',
      'API access',
    ],
    highlighted: true,
  },
  {
    name: 'Business',
    price: 199,
    period: 'month',
    description: 'For large communities and businesses with high volume.',
    features: [
      'Unlimited subscribers',
      'Custom analytics',
      '24/7 dedicated support',
      'All payment methods + crypto',
      '0.5% transaction fee',
      'White-label solution',
      'Full API access',
      'SLA guarantee',
    ],
    highlighted: false,
  },
];

export const faqs = [
  {
    question: 'What is PayPermit?',
    answer: 'PayPermit is a payment platform that allows Telegram community owners to accept subscription payments easily. It provides a seamless way to monetize your Telegram channel or group with automated access management.',
  },
  {
    question: 'How do I get started?',
    answer: 'Simply create an account, connect your Telegram bot, configure your subscription plans, and start accepting payments. The entire setup takes less than 10 minutes.',
  },
  {
    question: 'What payment methods do you support?',
    answer: 'We support credit/debit cards, mobile money (Telebirr, M-Pesa, CBE Birr), and major cryptocurrencies. More payment methods are being added regularly.',
  },
  {
    question: 'Is my payment information secure?',
    answer: 'Absolutely. We use bank-grade encryption and comply with PCI DSS standards. All transactions are processed through secure, certified payment gateways.',
  },
  {
    question: 'How do subscribers get access?',
    answer: 'Once a payment is confirmed, our bot automatically adds the user to your Telegram channel or group and sends them an access link. The process is fully automated.',
  },
  {
    question: 'Can I try PayPermit for free?',
    answer: 'Yes! We offer a 14-day free trial with all Pro features. No credit card required to start. You can cancel anytime.',
  },
  {
    question: 'What happens when a subscription expires?',
    answer: 'The bot automatically removes expired subscribers from your channel and can send reminder notifications before expiration. You have full control over the process.',
  },
  {
    question: 'Can I use my own Telegram bot?',
    answer: 'Yes, you can connect your own Telegram bot or use our default bot. We provide full instructions for bot setup.',
  },
];