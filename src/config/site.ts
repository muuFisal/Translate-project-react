export const siteConfig = {
  brand: {
    name: 'Khaleej Translate',
    shortName: 'Khaleej',
    tagline: 'Certified translation for official documents across Saudi Arabia and the GCC.',
    email: 'info@khaleejtranslate.sa',
    phone: '+966 55 123 4567',
    whatsapp: '966551234567',
    locations: ['Riyadh', 'Jeddah', 'Dammam', 'Dubai', 'Doha'],
  },
  assets: {
    heroBackground: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2200&q=80',
    heroSecondary: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
    articleFallback: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80',
    supportAgent: 'https://images.unsplash.com/photo-1573497019236-17f8177b81e8?auto=format&fit=crop&w=400&q=80',
  },
  homeSectionOrder: [
    'hero',
    'trustBar',
    'services',
    'documents',
    'process',
    'quoteCalculator',
    'competitiveEdge',
    'coverage',
    'pricing',
    'blogPreview',
    'testimonials',
    'faq',
    'cta',
  ] as const,
} as const;

export type HomeSectionKey = (typeof siteConfig.homeSectionOrder)[number];
