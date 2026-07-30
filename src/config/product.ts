export type CategoryIcon =
  | 'PawPrint'
  | 'Shield'
  | 'Sparkles'
  | 'BookOpen'
  | 'Laugh'
  | 'HeartHandshake'
  | 'Feather'
  | 'Gem'
  | 'Zap'
  | 'Ghost';

export interface Bonus {
  id: number;
  label: string;
  title: string;
  value: number;
  description: string;
}

export interface Category {
  name: string;
  description: string;
  icon: CategoryIcon;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export type PricingBreakdownValue =
  | { type: 'amount'; amount: number }
  | { type: 'included' }
  | { type: 'zero-recurring' };

export interface PricingBreakdownRow {
  label: string;
  value: PricingBreakdownValue;
}

/**
 * Single source of truth for all product facts. Every price, count and
 * label shown on the landing page is derived from this object so figures
 * can never drift out of sync between sections.
 */
export const product = {
  slug: 'kids-stories-mega-bundle',
  name: '50 Illustrated Kids Stories Mega Bundle',
  brand: 'PRODXSTORE',
  tagline: 'Digital Products Marketplace',
  description:
    'A complete digital reading collection containing 50 illustrated children’s stories in ready-to-read PDF and editable DOCX formats, plus five exclusive reading bonuses.',
  launchPrice: 499,
  regularPrice: 999,
  /**
   * USD equivalents charged to non-India visitors via PayPal. Placeholder
   * values (~₹83/$1) - update to your real international pricing.
   */
  launchPriceUSD: 4.99,
  regularPriceUSD: 11.99,
  mainValue: 999,
  docxValue: 499,
  bonusValue: 695,
  readMeValue: 99,
  licenceValue: 199,
  currency: '₹',
  stories: 50,
  categories: 10,
  approximatePages: 199,
  ageRange: '6–12',
  format: 'Digital Download',
  /**
   * Set to a real ISO timestamp (e.g. "2026-08-15T18:30:00+05:30") to enable
   * a genuine countdown. Leave null when there is no fixed, real deadline -
   * the UI falls back to a static "introductory pricing" message and never
   * fabricates urgency.
   */
  launchEndDate: null as string | null,
  supportEmail: 'support@prodxstore.com',
  siteUrl: 'https://www.prodxstore.com',
  licenseSummary: 'Personal and single-classroom use licence',
  /**
   * Razorpay Payment Link for direct checkout. Leave empty to fall back to
   * the VITE_RAZORPAY_PAYMENT_URL environment variable. Never hardcode a
   * placeholder/fake URL here - an empty value intentionally disables the
   * pricing button's redirect until a real link is configured.
   */
  razorpayPaymentUrl: '' as string,
} as const;

export const totalValue = product.mainValue + product.bonusValue;
export const totalSavings = totalValue - product.launchPrice;

/**
 * Itemized value breakdown shown inside the main pricing card. Every amount
 * references a product config field rather than a literal number, so the
 * breakdown, its total and the savings figure can never drift out of sync
 * with the rest of the page.
 */
export const pricingBreakdown: PricingBreakdownRow[] = [
  { label: '50 illustrated children’s stories', value: { type: 'amount', amount: product.mainValue } },
  { label: 'Combined PDF storybook', value: { type: 'included' } },
  { label: 'Editable master DOCX', value: { type: 'amount', amount: product.docxValue } },
  { label: `Approximately ${product.approximatePages} story pages`, value: { type: 'included' } },
  { label: `${product.categories} organised story categories`, value: { type: 'included' } },
  { label: 'Five exclusive reading bonuses', value: { type: 'amount', amount: product.bonusValue } },
  { label: 'Read Me First guide', value: { type: 'amount', amount: product.readMeValue } },
  { label: 'Personal and single-classroom licence', value: { type: 'amount', amount: product.licenceValue } },
  { label: 'One organised ZIP download', value: { type: 'included' } },
  { label: 'No subscription', value: { type: 'zero-recurring' } },
];

export const pricingBreakdownTotal = pricingBreakdown.reduce(
  (sum, row) => (row.value.type === 'amount' ? sum + row.value.amount : sum),
  0,
);

export const pricingBreakdownSavings = pricingBreakdownTotal - product.launchPrice;

export const bonuses: Bonus[] = [
  {
    id: 1,
    label: 'BONUS 01',
    title: '30-Day Reading Adventure Tracker',
    value: 99,
    description:
      'Help children build a regular reading habit by recording stories, reading time, ratings and completed reading days.',
  },
  {
    id: 2,
    label: 'BONUS 02',
    title: 'Eight Printable Bookmarks',
    value: 99,
    description:
      'Fun, print-ready bookmarks with positive reading messages and space for children to add their names.',
  },
  {
    id: 3,
    label: 'BONUS 03',
    title: 'Reading Reward Chart and Certificate',
    value: 149,
    description:
      'Encourage progress with a 20-story reading challenge, simple reward ideas and a printable achievement certificate.',
  },
  {
    id: 4,
    label: 'BONUS 04',
    title: 'Parent Storytelling Guide',
    value: 149,
    description:
      'Practical tips for preparing story time, asking better questions and making reading more engaging for different age groups.',
  },
  {
    id: 5,
    label: 'BONUS 05',
    title: 'Discussion Questions and Creative Activities',
    value: 199,
    description:
      'Includes 150 story discussion questions and 50 creative activities to support comprehension, reflection and imagination.',
  },
];

export const categories: Category[] = [
  {
    name: 'Animal Stories',
    description: 'Warm and imaginative adventures featuring memorable animal characters.',
    icon: 'PawPrint',
  },
  {
    name: 'Bravery Stories',
    description: 'Stories about facing fears, making difficult choices and discovering inner courage.',
    icon: 'Shield',
  },
  {
    name: 'Fairy Tales',
    description: 'Magical worlds, imaginative journeys and timeless storytelling themes.',
    icon: 'Sparkles',
  },
  {
    name: 'Fiction Stories',
    description: 'Creative adventures designed to spark curiosity and imagination.',
    icon: 'BookOpen',
  },
  {
    name: 'Funny Stories',
    description: 'Light-hearted stories that add laughter and enjoyment to reading time.',
    icon: 'Laugh',
  },
  {
    name: 'Good Behaviour Stories',
    description: 'Everyday lessons about honesty, manners, responsibility and thoughtful choices.',
    icon: 'HeartHandshake',
  },
  {
    name: 'Fables',
    description: 'Short, meaningful tales that introduce clear lessons through memorable characters.',
    icon: 'Feather',
  },
  {
    name: 'Moral Stories',
    description: 'Stories built around kindness, friendship, patience and positive values.',
    icon: 'Gem',
  },
  {
    name: 'Superhero Adventures',
    description: 'Imaginative tales about helping others, making responsible choices and using courage wisely.',
    icon: 'Zap',
  },
  {
    name: 'Spooky Stories',
    description: 'Mildly spooky reading for older children, recommended for ages 9+ with parental guidance.',
    icon: 'Ghost',
  },
];

export const faqs: FaqItem[] = [
  {
    question: 'What exactly will I receive?',
    answer:
      'You will receive one organised ZIP package containing a Read Me First guide, a combined PDF with all 50 illustrated stories, an editable master DOCX, a combined bonus pack, editable bonus files and the Personal and Classroom Use Licence.',
  },
  {
    question: 'Is this a physical book?',
    answer: 'No. This is a digital-download product. Nothing will be shipped to your address.',
  },
  {
    question: 'What age group is the collection suitable for?',
    answer:
      'The collection is generally suitable for children ages 6–12. Parent-guided reading is recommended for approximately ages 6–10, while confident readers around ages 9–12 may read independently.',
  },
  {
    question: 'Can I print the stories?',
    answer:
      'Yes. You may print the material for your own household or for one classroom, subject to the included Personal and Classroom Use Licence.',
  },
  {
    question: 'Why is an editable DOCX included?',
    answer:
      'The editable master document allows parents and teachers to add permitted notes, questions and classroom instructions for their own household or classroom. It does not include resale or redistribution rights.',
  },
  {
    question: 'Can I resell or share these files?',
    answer:
      'No. The customer edition is licensed for personal and single-classroom use. Reselling, redistributing, publicly uploading, sharing the ZIP or commercially republishing modified versions is not allowed.',
  },
  {
    question: 'What software do I need?',
    answer:
      'The storybook PDF works with common PDF readers on phones, tablets and computers. The editable DOCX can be opened with Microsoft Word or a compatible document editor.',
  },
  {
    question: 'How will I receive the product?',
    answer:
      'After successful payment, the existing checkout and digital-delivery system will provide access to the downloadable ZIP package.',
  },
  {
    question: `Are the bonuses included in the ₹${product.launchPrice} price?`,
    answer: 'Yes. All five listed bonuses are included during the current offer at no additional charge.',
  },
  {
    question: 'Is there a recurring payment?',
    answer: 'No. The displayed price is a one-time payment. There is no monthly or annual subscription.',
  },
  {
    question: 'Can teachers use the bundle?',
    answer:
      'Yes. One purchaser may use the material in one classroom. Additional teachers or separate classrooms should purchase their own licences unless a broader licence is offered separately.',
  },
  {
    question: 'What should I do if my download does not work?',
    answer:
      'Contact the support address shown on the website with the email used for payment and the order reference. Support will verify the order and assist with access.',
  },
];

export const headerNav: NavItem[] = [
  { label: "What's Included", href: '#included' },
  { label: 'Categories', href: '#categories' },
  { label: 'Bonuses', href: '#bonuses' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
];

export const stats = [
  { value: '50', label: 'Illustrated Stories' },
  { value: '10', label: 'Story Categories' },
  { value: '≈199', label: 'Story Pages' },
  { value: '5', label: 'Exclusive Bonuses' },
  { value: '1', label: 'Easy Download' },
];

export const zipContents = [
  '01_READ_ME_FIRST.pdf',
  '02_50_Kids_Stories_Mega_Book.pdf',
  '03_50_Kids_Stories_Editable_Master.docx',
  '04_Exclusive_Bonus_Pack.pdf',
  '05_Editable_Bonus_Files',
  '06_Personal_Classroom_Use_License.pdf',
];
