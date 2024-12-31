export const customerSegments = [
  {
    type: 'business' as const,
    title: 'Business Solutions',
    description: 'Comprehensive IT support and solutions tailored for businesses of all sizes. We help you maximize efficiency, security, and productivity.',
    features: [
      'Microsoft 365 & Azure Solutions',
      'Network Infrastructure',
      'Cloud Services & Migration',
      'Cybersecurity',
      'IT Consulting'
    ],
    benefits: [
      'Reduced IT costs',
      '24/7 technical support',
      'Enhanced security',
      'Improved productivity',
      'Scalable solutions'
    ]
  },
  {
    type: 'consumer' as const,
    title: 'Consumer Services',
    description: 'Expert technical support and solutions for home users and individuals. We make technology work for you, not against you.',
    features: [
      'PC & Laptop Repairs',
      'Home Network Setup',
      'Data Recovery',
      'Smart Home Solutions',
      'Mobile Device Support'
    ],
    benefits: [
      'Affordable pricing',
      'Same-day service',
      'Expert guidance',
      'Home visits available',
      'No technical jargon'
    ]
  }
];