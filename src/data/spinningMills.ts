import type { AchievementItem, JourneyMilestone, YarnProduct } from '../types/brands'
import type { GalleryItem } from '../types'
import { images } from './images'

export const spinningCompany = {
  name: 'Example Spinning Mills',
  legalName: 'Example Spinning Mills Private Ltd',
  tagline: 'Symbol of Trust',
  heroHeadline: 'Reshaping the Textile Industry through Forward-Thinking and Ingenuity',
  location: 'Near Coimbatore, Tamil Nadu, India',
  email: 'spinning@example.com',
  phone: '+91 422 000 0000',
  address: 'Example Spinning Mills, Near Coimbatore, Tamil Nadu, India',
}

export const spinningAbout = {
  eyebrow: 'About the Company',
  title: 'Precision yarn manufacturing rooted in Coimbatore excellence',
  paragraphs: [
    'Since February 2009, Example Spinning Mills has grown from a focused regional spinner into a trusted yarn partner for customers across India. What began with 10,000 spindles has evolved into a modern manufacturing ecosystem exceeding 80,000 spindles — powered by skilled craftsmanship and disciplined quality systems.',
    'Today, our teams of nearly 1,000 professionals produce cotton, viscose, polyester, and blended yarns that meet demanding commercial and industrial standards. Every process is engineered for consistency, sustainability, and long-term customer value.',
    'Looking ahead, we are expanding toward more than 100,000 spindles while strengthening ISO-aligned quality practices — ensuring Example Spinning Mills remains a symbol of trust in India’s textile value chain.',
  ],
}

export const spinningStats = [
  { value: 80000, suffix: '+', label: 'Spindles' },
  { value: 1000, suffix: '+', label: 'Employees' },
  { value: 2009, suffix: '', label: 'Established', display: '2009' },
  { value: 1, suffix: '', label: 'Nationwide Supply', display: 'India' },
] as const

export const spinningJourney: JourneyMilestone[] = [
  {
    year: '2009',
    title: 'Company Started',
    description:
      'Example Spinning Mills began operations near Coimbatore with an inaugural capacity of 10,000 spindles.',
  },
  {
    year: 'Growth',
    title: 'Expanded to 80,000 Spindles',
    description:
      'Continuous investment in plant modernization scaled production capacity more than eightfold.',
  },
  {
    year: 'Expansion',
    title: 'Example Fabrics Established',
    description:
      'The group extended its textile footprint with Example Fabrics, strengthening downstream capabilities.',
  },
  {
    year: 'Today',
    title: 'Serving Customers Across India',
    description:
      'A nationwide supply network delivers reliable yarn solutions to partners across the country.',
  },
  {
    year: 'Future',
    title: '100,000+ Spindles',
    description:
      'Capacity expansion plans target over 100,000 spindles while elevating ISO quality benchmarks.',
  },
]

export const spinningProducts: YarnProduct[] = [
  {
    id: 'cotton',
    name: 'Cotton Yarn',
    description:
      'Soft, breathable cotton yarns engineered for apparel, knitwear, and premium home textiles.',
    icon: 'Leaf',
    image: images.yarnCotton,
  },
  {
    id: 'viscose',
    name: 'Viscose Yarn',
    description:
      'Smooth viscose yarns with excellent drape and dye affinity for fashion-forward fabrics.',
    icon: 'Sparkles',
    image: images.sewingThread,
  },
  {
    id: 'polyester',
    name: 'Polyester Yarn',
    description:
      'Durable polyester yarns built for strength, dimensional stability, and high-volume production.',
    icon: 'Layers',
    image: images.fabricRolls,
  },
  {
    id: 'pc-blend',
    name: 'PC Blended Yarn',
    description:
      'Polyester-cotton blends balancing comfort, resilience, and consistent mill performance.',
    icon: 'Blend',
    image: images.textileMill,
  },
  {
    id: 'grey',
    name: 'Grey Yarn',
    description:
      'Reliable grey yarn for weaving and knitting applications requiring process-ready consistency.',
    icon: 'CircleDot',
    image: images.textileFactory,
  },
  {
    id: 'home-textile',
    name: 'Home Textile Fabrics',
    description:
      'Quality-focused fabric solutions supporting home textile manufacturers and converters.',
    icon: 'Home',
    image: images.greenEnergy,
  },
]

export const spinningTechnology = [
  {
    title: 'Modern Spinning Lines',
    description:
      'High-efficiency ring and process machinery calibrated for uniform yarn count and reduced waste.',
  },
  {
    title: 'Process Automation',
    description:
      'Digitally monitored production stages improve throughput, traceability, and operational control.',
  },
  {
    title: 'Material Optimization',
    description:
      'Advanced fibre preparation and blending practices deliver stable quality across yarn variants.',
  },
]

export const spinningQuality = [
  {
    title: 'ISO Quality Practices',
    description:
      'Structured quality management systems guide inspection, documentation, and continuous improvement.',
  },
  {
    title: 'In-Process Testing',
    description:
      'Laboratory checks across critical parameters help maintain yarn evenness, strength, and appearance.',
  },
  {
    title: 'Customer Specifications',
    description:
      'Orders are aligned to customer requirements with disciplined lot control and delivery reliability.',
  },
]

export const spinningInfrastructure = [
  {
    title: 'Coimbatore Manufacturing Hub',
    description:
      'Strategically located near India’s textile corridor for efficient logistics and market access.',
  },
  {
    title: 'Scalable Plant Capacity',
    description:
      'More than 80,000 spindles support large-volume programs with room for planned expansion.',
  },
  {
    title: 'Skilled Workforce',
    description:
      'Nearly 1,000 trained professionals uphold safety, productivity, and craftsmanship on every shift.',
  },
]

export const spinningWhyChoose = [
  {
    title: 'Proven Scale',
    description: 'From 10,000 to 80,000+ spindles — a track record of responsible industrial growth.',
    icon: 'TrendingUp',
  },
  {
    title: 'Diverse Yarn Portfolio',
    description: 'Cotton, viscose, polyester, and blended yarns for multi-segment textile demand.',
    icon: 'Layers',
  },
  {
    title: 'Nationwide Reach',
    description: 'Reliable supply partnerships across India with a customer-first service culture.',
    icon: 'Map',
  },
  {
    title: 'Quality Commitment',
    description: 'ISO-aligned processes and future-ready capacity investments protect product integrity.',
    icon: 'Shield',
  },
]

export const spinningAchievements: AchievementItem[] = [
  {
    title: 'Established in 2009',
    description: 'A strong foundation near Coimbatore with clear focus on yarn excellence.',
    icon: 'Award',
  },
  {
    title: 'Recognized Supplier Across India',
    description: 'Trusted by customers nationwide for consistent quality and dependable supply.',
    icon: 'Map',
  },
  {
    title: 'Advanced Textile Manufacturing',
    description: 'Modern plant capabilities supporting high-volume, precision yarn production.',
    icon: 'Settings',
  },
  {
    title: 'Modern Production Technology',
    description: 'Continuous upgrades keep processes efficient, clean, and competitive.',
    icon: 'Cpu',
  },
  {
    title: 'ISO Quality Practices',
    description: 'Quality systems designed to uphold standards as capacity continues to grow.',
    icon: 'BadgeCheck',
  },
  {
    title: 'Customer-First Approach',
    description: 'Partnerships built on responsiveness, transparency, and long-term value.',
    icon: 'Users',
  },
]

export const spinningGallery: GalleryItem[] = [
  {
    id: 'sg1',
    src: images.textileMill,
    alt: 'Example Spinning Mills manufacturing environment',
    category: 'Plant',
  },
  {
    id: 'sg2',
    src: images.textileFactory,
    alt: 'Textile production floor',
    category: 'Production',
  },
  {
    id: 'sg3',
    src: images.yarnCotton,
    alt: 'Cotton yarn cones ready for dispatch',
    category: 'Yarn',
  },
  {
    id: 'sg4',
    src: images.sewingThread,
    alt: 'Yarn and thread ready for textile applications',
    category: 'Technology',
  },
  {
    id: 'sg5',
    src: images.fabricRolls,
    alt: 'Finished textile material rolls',
    category: 'Fabrics',
  },
  {
    id: 'sg6',
    src: images.qualityCheck,
    alt: 'Quality and process review',
    category: 'Quality',
  },
]
