export type BlogPost = {
  slug: string;
  category: { en: string; ar: string };
  readTime: { en: string; ar: string };
  image: string;
  date: string;
  title: { en: string; ar: string };
  excerpt: { en: string; ar: string };
  content: { en: string[]; ar: string[] };
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'passport-id-translation-checklist-saudi',
    category: {
      en: 'Certified Translation',
      ar: 'الترجمة المعتمدة',
    },
    readTime: {
      en: '4 min read',
      ar: '4 دقائق',
    },
    date: '2026-03-01',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80',
    title: {
      en: 'Passport and ID translation checklist for Saudi submissions',
      ar: 'قائمة تجهيز جواز السفر والهوية للترجمة المعتمدة في السعودية',
    },
    excerpt: {
      en: 'What to prepare before sending identity documents for certified translation, and how to avoid delays during official submission.',
      ar: 'ما الذي يجب تجهيزه قبل إرسال وثائق الهوية للترجمة المعتمدة، وكيف تتجنب أي تأخير عند التقديم الرسمي.',
    },
    content: {
      en: [
        'Before sending a passport or ID for translation, make sure the scan is clear, complete, and in color whenever possible. Cropped edges, missing pages, or blurred phone photos often slow down the review and lead to avoidable follow-up questions.',
        'A reliable translation office will confirm the target language, spelling of names as they appear on the document, and whether the receiving authority requires a stamped hard copy. Clarifying these details early helps the translation move forward without revisions.',
        'If the document is needed for a visa, university, employer, or government submission, mention the deadline when sending the file. This allows the team to advise whether standard, priority, or express delivery is the best fit for your request.',
      ],
      ar: [
        'قبل إرسال جواز السفر أو الهوية للترجمة، احرص على أن تكون النسخة واضحة وكاملة وملونة قدر الإمكان. قص الأطراف أو نقص الصفحات أو الصور غير الواضحة من الهاتف يؤدي غالباً إلى تأخير المراجعة وطلب تفاصيل إضافية.',
        'المكتب الموثوق يؤكد معك اللغة المطلوبة وطريقة كتابة الأسماء كما وردت في المستند، وهل الجهة المستفيدة تحتاج إلى نسخة مختومة. توضيح هذه النقاط من البداية يساعد على إنجاز الترجمة دون تعديلات لاحقة.',
        'إذا كانت الوثيقة مخصصة لسفارة أو جامعة أو جهة عمل أو جهة حكومية، فمن الأفضل ذكر الموعد المطلوب عند إرسال الملف حتى يتم تحديد ما إذا كان التنفيذ العادي أو السريع أو المستعجل هو الأنسب لطلبك.',
      ],
    },
  },
  {
    slug: 'medical-report-translation-for-treatment-and-travel',
    category: {
      en: 'Medical Translation',
      ar: 'الترجمة الطبية',
    },
    readTime: {
      en: '5 min read',
      ar: '5 دقائق',
    },
    date: '2026-02-22',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=80',
    title: {
      en: 'Medical report translation for treatment, insurance, and travel requests',
      ar: 'ترجمة التقارير الطبية لطلبات العلاج والتأمين والسفر',
    },
    excerpt: {
      en: 'Medical files require precise terminology, confidentiality, and a translation format that remains clear for hospitals, insurers, and official reviewers.',
      ar: 'الملفات الطبية تحتاج إلى مصطلحات دقيقة وسرية كاملة وصياغة واضحة تناسب المستشفيات وشركات التأمين والجهات الرسمية.',
    },
    content: {
      en: [
        'Medical translation is most effective when the source document is complete and clearly organized. Reports, discharge summaries, lab results, and referral letters should be sent together whenever they will be reviewed as one case.',
        'Because medical files often contain medication names, diagnoses, and treatment history, careful terminology review is essential. Small wording differences can create confusion, especially when the translation is being used for treatment continuity or insurance approval.',
        'If the report is urgent for travel, surgery, or a hospital appointment, mention the date immediately. An experienced team can then recommend the right turnaround and confirm whether a stamped or digital copy is required.',
      ],
      ar: [
        'تكون الترجمة الطبية أكثر فاعلية عندما يكون الملف الأصلي كاملاً ومنظماً بوضوح. من الأفضل إرسال التقرير الطبي وملخص الخروج ونتائج التحاليل وخطابات الإحالة معاً عندما تكون ضمن حالة واحدة.',
        'ولأن الملفات الطبية تتضمن أسماء أدوية وتشخيصات وتاريخاً علاجياً، فإن مراجعة المصطلحات بدقة أمر أساسي. أي اختلاف بسيط في الصياغة قد يسبب التباساً، خاصة عندما تستخدم الترجمة لاستكمال العلاج أو اعتماد التأمين.',
        'إذا كان التقرير مطلوباً بشكل عاجل للسفر أو الجراحة أو موعد في المستشفى، فمن المهم توضيح التاريخ من البداية حتى يتم اقتراح مدة التنفيذ المناسبة وتأكيد الحاجة إلى نسخة مختومة أو رقمية.',
      ],
    },
  },
  {
    slug: 'contract-translation-for-gulf-businesses',
    category: {
      en: 'Legal and Business',
      ar: 'القانونية والتجارية',
    },
    readTime: {
      en: '6 min read',
      ar: '6 دقائق',
    },
    date: '2026-02-14',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80',
    title: {
      en: 'When contracts and business documents need certified translation in the Gulf',
      ar: 'متى تحتاج العقود والوثائق التجارية إلى ترجمة معتمدة في الخليج',
    },
    excerpt: {
      en: 'A practical guide to preparing contracts, commercial records, HR files, and company paperwork for bilingual business use and official submission.',
      ar: 'دليل عملي لتجهيز العقود والسجلات التجارية وملفات الموارد البشرية ووثائق الشركات للاستخدام المهني والتقديم الرسمي.',
    },
    content: {
      en: [
        'Business translation is not limited to full contracts. Companies often need certified translation for commercial registrations, board resolutions, HR letters, powers of attorney, and supporting documents submitted with the main agreement.',
        'For legal and business material, consistency matters as much as accuracy. Company names, registration numbers, dates, and defined terms should remain aligned across every page so the translated file reads as one coherent document set.',
        'If the file will be shared with a partner, court, government office, or bank, mention the receiving party when requesting the quote. This helps the translation team understand the expected format and advise whether certification or courier delivery is needed.',
      ],
      ar: [
        'الترجمة التجارية لا تقتصر على العقود فقط. فكثير من الشركات تحتاج إلى ترجمة معتمدة للسجلات التجارية وقرارات الشركاء وخطابات الموارد البشرية والتوكيلات والملاحق التي ترفق مع الاتفاقية الأساسية.',
        'في هذا النوع من الملفات، لا تقل أهمية الاتساق عن أهمية الدقة. يجب أن تظهر أسماء الشركات وأرقام السجلات والتواريخ والمصطلحات المتكررة بشكل موحد في جميع الصفحات حتى يبدو الملف المترجم متكاملاً وواضحاً.',
        'إذا كانت الوثيقة ستقدم لشريك تجاري أو محكمة أو جهة حكومية أو بنك، فمن الأفضل ذكر الجهة المستفيدة عند طلب العرض. هذا يساعد فريق الترجمة على تحديد الصياغة المناسبة وتأكيد الحاجة إلى اعتماد أو شحن ورقي.',
      ],
    },
  },
];