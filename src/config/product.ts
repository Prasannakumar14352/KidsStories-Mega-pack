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
  supportEmail: 'prodxstoresupport@gmail.com',
  siteUrl: 'https://www.prodxstore.com',
  licenseSummary: 'Personal and single-classroom use licence',
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
    question: 'How do I receive the bundle after I pay?',
    answer:
      'Instantly. The moment your payment is confirmed, you get an automatic download link on screen and in your email. No waiting, no shipping — everything is digital and delivered within seconds.',
  },
  {
    question: 'What files do I get and what formats are they in?',
    answer:
      'You get all 50 illustrated stories as ready-to-read PDFs, plus one fully editable master document in DOCX (Word) format so you can adjust names, text or reading level yourself. You also receive all 5 reading bonuses in the same download.',
  },
  {
    question: 'Can I print the stories?',
    answer:
      'Yes. Every story is print-ready. Print them at home, at a print shop, or in your classroom as many times as you like for your own children or students.',
  },
  {
    question: 'What devices does it work on?',
    answer:
      'Any device — phone, tablet, laptop or computer. PDFs open on everything, and the editable DOCX opens in Microsoft Word, Google Docs or any free word processor.',
  },
  {
    question: 'What age group is this for?',
    answer:
      'The bundle is designed for children ages 6 to 12, with stories spanning early readers to more confident readers. The variety means it grows with your child instead of being outgrown in a year.',
  },
  {
    question: 'Is this a one-time payment or a subscription?',
    answer: `One-time payment. You pay ₹${product.launchPrice} once and the entire bundle is yours forever — no monthly fees, no renewals, no hidden charges.`,
  },
  {
    question: 'Can teachers or homeschoolers use this?',
    answer:
      "Absolutely. It's built for homes, classrooms and homeschooling. The editable file lets teachers adapt stories for lessons, and printing rights cover your students.",
  },
  {
    question: 'What if I have a problem with my download?',
    answer:
      "Your purchase is covered. If you have any trouble accessing or downloading your files, reach out and we'll make it right. You also get a 7-day money-back guarantee: if you're not happy, email us within 7 days of purchase for a full refund.",
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

/**
 * Benefit-framed labels for the "what's inside" package summary - never
 * show raw filenames (e.g. "*.zip", "*.pdf" as a literal file name) to
 * customers.
 */
export const zipContents = [
  'Read Me First guide (PDF)',
  '50 ready-to-read illustrated stories (PDF)',
  '1 fully editable master document (DOCX)',
  '5 interactive reading bonuses (PDF)',
  'Editable bonus activity files (DOCX)',
  'Personal & classroom use licence (PDF)',
];
