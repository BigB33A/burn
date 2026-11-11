export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Tokenomics', href: '#tokenomics' },
  { label: 'BurnBack Events', href: '#events' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Whitepaper', href: '#whitepaper' },
];

export interface TokenomicsSegment {
  name: string;
  percentage: number;
  color: string;
}

export const TOKENOMICS_DATA: TokenomicsSegment[] = [
  { name: 'Public Sale', percentage: 40, color: '#18A66A' },
  { name: 'BurnBack Fund', percentage: 25, color: '#F47A35' },
  { name: 'Community', percentage: 15, color: '#3B82F6' },
  { name: 'Team', percentage: 10, color: '#8B5CF6' },
  { name: 'Marketing', percentage: 7, color: '#EC4899' },
  { name: 'CEX Listings', percentage: 3, color: '#F59E0B' },
];

export interface StakingTier {
  id: string;
  name: string;
  amount: string;
  duration: string;
  durationDays: number;
  perks: string[];
  accent: string;
  bg: string;
  badge?: string;
  featured?: boolean;
}

export const STAKING_TIERS: StakingTier[] = [
  {
    id: 'spark',
    name: 'Spark',
    amount: '5,000 $BURN',
    duration: '30 Days',
    durationDays: 30,
    perks: [
      'Seedling NFT Badge',
      'Governance voting rights',
      'Access to Spark Discord channel',
      'BurnBack event updates',
    ],
    accent: '#18A66A',
    bg: '#092B20',
  },
  {
    id: 'flame',
    name: 'Flame',
    amount: '25,000 $BURN',
    duration: '90 Days',
    durationDays: 90,
    perks: [
      'Everything in Spark',
      'Tree naming rights',
      'Flame NFT Certificate',
      '1.2x governance vote weight',
    ],
    accent: '#F47A35',
    bg: '#1A1206',
  },
  {
    id: 'wildfire',
    name: 'Wildfire',
    amount: '100,000 $BURN',
    duration: '180 Days',
    durationDays: 180,
    perks: [
      'Everything in Flame',
      'Exclusive BURNBACK merch',
      '1.5x governance vote weight',
      'Priority event access',
      'Wildfire NFT Certificate',
    ],
    accent: '#EF4444',
    bg: '#1A0606',
  },
  {
    id: 'phoenix',
    name: 'Phoenix',
    amount: '500,000 $BURN',
    duration: '365 Days',
    durationDays: 365,
    perks: [
      'Everything in Wildfire',
      'Phoenix NFT (1-of-1)',
      '2x governance vote weight',
      'Physical impact plaque',
      'Direct NGO partner calls',
      'Co-branding on restoration site',
    ],
    accent: '#A855F7',
    bg: '#0D0A1A',
    badge: 'Most Exclusive',
    featured: true,
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'What is $BURN?',
    answer:
      '$BURN is the native token of the BURNBACK ecosystem on the Solana blockchain. Every transaction with $BURN automatically contributes to real-world environmental restoration through our BurnBack Fund. A portion of every buy and sell is permanently burned, reducing supply over time, while another portion funds verified tree-planting and forest restoration projects.',
  },
  {
    question: 'How can I buy $BURN?',
    answer:
      '$BURN will be available on Solana-based decentralized exchanges. You will need a Solana-compatible wallet (such as Phantom or Solflare), some SOL to cover transaction fees, and you can then swap SOL or USDC for $BURN. Specific DEX listings and contract address will be announced before launch. Always verify the contract address from official channels only.',
  },
  {
    question: 'How do I receive my tree NFT certificate?',
    answer:
      'After holding a minimum of 10,000 $BURN tokens and once the NFT certificate system is operational, you will be eligible to claim an on-chain NFT certificate linked to a specific planted tree. Each NFT contains GPS coordinates, planting date, species information, and satellite verification data. The system will be announced when available.',
  },
  {
    question: 'Is $BURN a security?',
    answer:
      '$BURN is a utility token designed to participate in the BURNBACK ecosystem and support environmental restoration. It is not intended to represent an investment contract or security. Participation in the BURNBACK ecosystem does not guarantee any financial return. Please consult with legal and financial advisors in your jurisdiction before participating. This does not constitute financial or investment advice.',
  },
  {
    question: 'Where will trees be planted?',
    answer:
      'BURNBACK focuses on three primary regions: the Amazon Rainforest in South America, the Congo Basin in Central Africa, and additional high-impact areas including Borneo, Australia, and Canada. All planting locations are selected in partnership with vetted environmental NGOs and are verified using GPS coordinates and satellite imagery.',
  },
  {
    question: 'How does the 6% transaction tax work?',
    answer:
      'Every buy or sell transaction with $BURN incurs a 6% tax, distributed as follows: 2% is permanently burned (reducing total supply), 2% goes to the BurnBack Fund (finances real-world planting events), 1.5% rewards stakers, and 0.5% supports marketing and project development. Transfer transactions between wallets carry 0% tax.',
  },
  {
    question: 'How can I verify the environmental impact?',
    answer:
      'All BurnBack Events are fully documented on-chain and off-chain. Transaction records are publicly viewable on the Solana blockchain. Each event produces GPS coordinates, satellite verification imagery, NGO-signed documentation, and timestamped records. These will be available through our Transparency Dashboard once the first event takes place.',
  },
  {
    question: 'When will staking be available?',
    answer:
      'Staking contracts are currently in development. The staking system will be audited before launch. Availability will be announced through official channels — our website, Telegram, and Twitter/X. Do not interact with any staking contracts that are not officially announced by the BURNBACK team.',
  },
];

export interface RoadmapMilestone {
  text: string;
  done: boolean;
}

export interface RoadmapPhase {
  id: number;
  phase: string;
  name: string;
  icon: string;
  status: 'active' | 'upcoming';
  milestones: RoadmapMilestone[];
}

export const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    id: 1,
    phase: 'Phase 1',
    name: 'SPARK',
    icon: '✨',
    status: 'active',
    milestones: [
      { text: 'Token contract deployment on Solana', done: true },
      { text: 'Website & whitepaper launch', done: true },
      { text: 'Community building (Telegram, Twitter)', done: true },
      { text: 'First BurnBack Event planning', done: false },
      { text: 'CEX & DEX listings', done: false },
    ],
  },
  {
    id: 2,
    phase: 'Phase 2',
    name: 'FLAME',
    icon: '🔥',
    status: 'upcoming',
    milestones: [
      { text: 'First BurnBack Event execution', done: false },
      { text: 'On-chain transparency dashboard launch', done: false },
      { text: 'NFT certificate system deployment', done: false },
      { text: 'Staking contracts audit & launch', done: false },
      { text: 'Second BurnBack Event', done: false },
    ],
  },
  {
    id: 3,
    phase: 'Phase 3',
    name: 'WILDFIRE',
    icon: '🌊',
    status: 'upcoming',
    milestones: [
      { text: 'Multi-region planting expansion', done: false },
      { text: 'Governance DAO launch', done: false },
      { text: 'NGO partnership announcements', done: false },
      { text: 'Mobile app for impact tracking', done: false },
      { text: 'Carbon credit integration research', done: false },
    ],
  },
  {
    id: 4,
    phase: 'Phase 4',
    name: 'PHOENIX',
    icon: '🦅',
    status: 'upcoming',
    milestones: [
      { text: 'Global forest restoration network', done: false },
      { text: 'Cross-chain bridge exploration', done: false },
      { text: 'Real-world impact fund (registered)', done: false },
      { text: 'Annual impact report publication', done: false },
      { text: '100M token burn milestone', done: false },
    ],
  },
];

export interface ProblemCard {
  icon: string;
  region: string;
  description: string;
  stat: string;
  statLabel: string;
}

export const PROBLEM_CARDS: ProblemCard[] = [
  {
    icon: '🌿',
    region: 'Amazon Rainforest',
    description:
      'The Amazon loses approximately 10,000 soccer fields of forest every single day. Industrial agriculture, illegal logging, and infrastructure projects have destroyed over 20% of the original rainforest — pushing countless species to the brink of extinction and accelerating climate breakdown.',
    stat: '17%',
    statLabel: 'Lost in 50 years',
  },
  {
    icon: '🌊',
    region: 'Congo Basin',
    description:
      "The Congo Basin — the world's second largest rainforest — faces mounting pressure from charcoal production, subsistence farming, and commercial logging. Home to forest elephants, gorillas, and over 10,000 plant species, it absorbs billions of tonnes of CO₂ that would otherwise accelerate warming.",
    stat: '0.3%',
    statLabel: 'Lost annually',
  },
  {
    icon: '🌲',
    region: 'Global Forests',
    description:
      'From the peat swamp forests of Borneo to the eucalyptus corridors of Australia and the boreal forests of Canada, deforestation is a global crisis. The planet loses roughly 15 billion trees per year — net — while reforestation efforts remain underfunded and uncoordinated.',
    stat: '15B',
    statLabel: 'Trees lost per year',
  },
];
