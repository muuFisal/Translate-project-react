export type ProjectCategory = 'residential' | 'commercial' | 'poolside' | 'courtyard';

export type Project = {
  slug: string;
  category: ProjectCategory;
  cover: string;
  gallery: string[];
  area: string;
  year: string;
  location: { en: string; ar: string };
  title: { en: string; ar: string };
  excerpt: { en: string; ar: string };
  summary: { en: string; ar: string };
  challenge: { en: string; ar: string };
  solution: { en: string; ar: string };
  tags: { en: string[]; ar: string[] };
};

export const projects: Project[] = [
  {
    slug: 'palm-haven-villa',
    category: 'poolside',
    area: '2,400 m²',
    year: '2025',
    location: { en: 'Dubai Hills', ar: 'دبي هيلز' },
    title: { en: 'Palm Haven Villa', ar: 'فيلا بالم هافن' },
    excerpt: {
      en: 'A refined poolside landscape blending sculpted greenery, water reflections, and intimate lounge zones.',
      ar: 'منسق حمام سباحة راقٍ يجمع بين الزراعة المنحوتة وانعكاسات المياه وجلسات خارجية حميمة.',
    },
    summary: {
      en: 'We transformed an underused backyard into a resort-inspired outdoor sanctuary with layered lighting, shaded pergolas, and a pool lounge tailored for family hosting.',
      ar: 'حوّلنا فناءً خلفيًا غير مستغل إلى ملاذ خارجي بروح المنتجعات مع إضاءة متدرجة وبرجولات مظللة وصالة حمام سباحة مناسبة للاستضافة العائلية.',
    },
    challenge: {
      en: 'The client needed privacy, cooling shade, and a visual identity that felt premium without overcrowding the space.',
      ar: 'احتاج العميل إلى خصوصية وظل مريح وهوية بصرية فاخرة من دون ازدحام في الفراغ.',
    },
    solution: {
      en: 'We created a calm composition with framed planting beds, travertine hardscape, reflective water, and concealed lighting scenes.',
      ar: 'صممنا تكوينًا هادئًا بأحواض زراعية مؤطرة وأرضيات ترافرتين وماء عاكس ومشاهد إضاءة مخفية.',
    },
    tags: {
      en: ['Poolscape', 'Lighting', 'Luxury Villa'],
      ar: ['حمام سباحة', 'إضاءة', 'فيلا فاخرة'],
    },
    cover: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80',
    ],
  },
  {
    slug: 'courtyard-retreat',
    category: 'courtyard',
    area: '900 m²',
    year: '2024',
    location: { en: 'Abu Dhabi', ar: 'أبوظبي' },
    title: { en: 'Courtyard Retreat', ar: 'ملاذ الفناء الداخلي' },
    excerpt: {
      en: 'A contemporary courtyard with soft planting, built-in seating, and elegant material contrast.',
      ar: 'فناء داخلي معاصر بزراعة ناعمة وجلسات مدمجة وتباين خامات أنيق.',
    },
    summary: {
      en: 'This compact residential courtyard was redesigned to feel calm, generous, and visually elevated all year long.',
      ar: 'أُعيد تصميم هذا الفناء السكني الصغير ليصبح هادئًا ورحبًا وذا حضور بصري مميز طوال العام.',
    },
    challenge: {
      en: 'The site suffered from poor circulation and lacked shaded social moments for evening use.',
      ar: 'كان الموقع يعاني من حركة غير مريحة ويفتقد إلى أماكن اجتماعية مظللة للاستخدام المسائي.',
    },
    solution: {
      en: 'We introduced a central axis, custom seating edges, textured walls, and layered planting for depth.',
      ar: 'أدخلنا محورًا مركزيًا وجلسات مخصصة وحوائط بخامات غنية وزراعة متعددة الطبقات لإضافة العمق.',
    },
    tags: {
      en: ['Courtyard', 'Family Space', 'Modern'],
      ar: ['فناء داخلي', 'مساحة عائلية', 'مودرن'],
    },
    cover: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80',
    ],
  },
  {
    slug: 'emerald-business-park',
    category: 'commercial',
    area: '5,800 m²',
    year: '2025',
    location: { en: 'Sharjah', ar: 'الشارقة' },
    title: { en: 'Emerald Business Park', ar: 'إيميرالد بزنس بارك' },
    excerpt: {
      en: 'A commercial landscape experience balancing arrival impact, circulation clarity, and durable planting.',
      ar: 'تجربة لاندسكيب تجارية توازن بين قوة الانطباع الأول ووضوح الحركة والزراعة المتينة.',
    },
    summary: {
      en: 'We designed a welcoming exterior for tenants and visitors with signature entry moments, structured greenery, and shaded walkways.',
      ar: 'صممنا واجهة خارجية ترحيبية للمستأجرين والزوار مع مداخل مميزة وخضرة منظمة وممرات مظللة.',
    },
    challenge: {
      en: 'The brief required premium curb appeal with low-maintenance materials across a large footprint.',
      ar: 'تطلب المشروع مظهرًا فاخرًا عند الواجهة مع خامات قليلة الصيانة على مساحة كبيرة.',
    },
    solution: {
      en: 'We combined durable palms, native planting, hardscape zoning, and a legible visitor journey.',
      ar: 'جمعنا بين نخيل متين وزراعة محلية وتقسيم واضح للأرضيات ومسار مفهوم للزائر.',
    },
    tags: {
      en: ['Commercial', 'Masterplan', 'Low Maintenance'],
      ar: ['تجاري', 'مخطط عام', 'قليل الصيانة'],
    },
    cover: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80',
    ],
  },
  {
    slug: 'olive-garden-residence',
    category: 'residential',
    area: '1,700 m²',
    year: '2023',
    location: { en: 'Riyadh', ar: 'الرياض' },
    title: { en: 'Olive Garden Residence', ar: 'أوليف جاردن ريزيدنس' },
    excerpt: {
      en: 'A warm family garden with organic planting, play areas, and hospitality-focused outdoor living.',
      ar: 'حديقة عائلية دافئة بزراعة عضوية ومناطق لعب ومعيشة خارجية مهيأة للضيافة.',
    },
    summary: {
      en: 'The project crafted a soft outdoor experience with family dining, sensory planting, and adaptable zones for children and guests.',
      ar: 'صاغ المشروع تجربة خارجية ناعمة مع جلسات طعام عائلية وزراعة حسية ومناطق مرنة للأطفال والضيوف.',
    },
    challenge: {
      en: 'The family wanted beauty and utility together, without compromising circulation and maintenance.',
      ar: 'أرادت العائلة الجمع بين الجمال والوظيفة دون الإخلال بسهولة الحركة والصيانة.',
    },
    solution: {
      en: 'We balanced curated lawns, olive accents, decomposed-granite walks, and custom seating features.',
      ar: 'وازنّا بين مسطحات خضراء مدروسة ولمسات زيتون وممرات طبيعية وجلسات مخصصة.',
    },
    tags: {
      en: ['Residential', 'Family Garden', 'Outdoor Living'],
      ar: ['سكني', 'حديقة عائلية', 'معيشة خارجية'],
    },
    cover: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=80',
    ],
  },
];
