import type {
  CoreValue,
  GalleryItem,
  GroupCompany,
  JobOpening,
  NavLink,
  ProgressMetric,
  ProjectItem,
  ServiceItem,
  StatItem,
  SustainabilityMilestone,
  WindBenefit,
} from '../types'
import { BRAND_LINKS } from '../config/brands'
import { images } from './images'

export const companyInfo = {
  name: 'Windfarm',
  tagline: 'Innovation, Sustainability and Quality Across Industries',
  description:
    'Windfarm is a diversified enterprise spanning renewable energy, textile manufacturing, and complementary businesses — united by innovation, sustainability, and uncompromising quality.',
  address: 'Windfarm Corporate Office, Coimbatore, Tamil Nadu, India',
  phone: '+91 422 000 0000',
  email: 'hello@windfarm.com',
  hours: 'Monday – Saturday: 09:00 – 18:00 IST',
}

export const navLinks: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Group', path: '/group' },
  { label: 'Wind Energy', path: '/wind-energy' },
  { label: 'Spinning Mills', path: BRAND_LINKS.spinning },
  { label: 'Projects', path: '/projects' },
  { label: 'Services', path: '/services' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' },
]

export const heroStats: StatItem[] = [
  { value: 500, suffix: '+', label: 'Wind Turbines' },
  { value: 250, suffix: ' MW', label: 'Installed Capacity' },
  { value: 20, suffix: '+', label: 'Years Experience' },
  { value: 100, suffix: '+', label: 'Clients' },
]

export const coreValues: CoreValue[] = [
  {
    title: 'Integrity',
    description:
      'We deliver transparent partnerships and accountable project execution at every stage of the energy lifecycle.',
    icon: 'Shield',
  },
  {
    title: 'Innovation',
    description:
      'From turbine technology to digital monitoring, we continuously advance how clean power is generated and managed.',
    icon: 'Lightbulb',
  },
  {
    title: 'Sustainability',
    description:
      'Every decision is guided by long-term environmental responsibility and measurable carbon reduction outcomes.',
    icon: 'Leaf',
  },
  {
    title: 'Excellence',
    description:
      'Precision engineering, rigorous safety standards, and world-class operations define how Windfarm performs.',
    icon: 'Award',
  },
]

export const groupCompanies: GroupCompany[] = [
  {
    id: 'wind',
    name: 'Wind Energy',
    description:
      'Full-lifecycle wind power solutions including site development, turbine installation, and long-term operations across onshore and coastal markets.',
    icon: 'Wind',
    image: images.heroWind,
  },
  {
    id: 'solar',
    name: 'Solar Energy',
    description:
      'Utility-scale and commercial solar developments that complement wind portfolios with hybrid renewable generation strategies.',
    icon: 'Sun',
    image: images.solarField,
  },
  {
    id: 'infra',
    name: 'Infrastructure',
    description:
      'Grid interconnection, substations, and civil works engineered to support reliable renewable energy delivery.',
    icon: 'Building2',
    image: images.cityInfra,
  },
  {
    id: 'logistics',
    name: 'Logistics',
    description:
      'Specialized transport and heavy-lift logistics for turbine components, blades, and project equipment worldwide.',
    icon: 'Truck',
    image: images.logistics,
  },
  {
    id: 'engineering',
    name: 'Engineering Services',
    description:
      'Multidisciplinary engineering teams delivering design, technical advisory, and performance optimization for renewable assets.',
    icon: 'Settings',
    image: images.engineering,
  },
]

export const services: ServiceItem[] = [
  {
    id: 'development',
    title: 'Wind Farm Development',
    description:
      'End-to-end project development from land acquisition and permitting to financial close and construction readiness.',
    icon: 'Map',
  },
  {
    id: 'epc',
    title: 'EPC',
    description:
      'Engineering, procurement, and construction delivery with disciplined scheduling, quality control, and HSE excellence.',
    icon: 'HardHat',
  },
  {
    id: 'om',
    title: 'Operation & Maintenance',
    description:
      'Predictive maintenance, spare-parts management, and 24/7 asset care that maximize turbine availability.',
    icon: 'Wrench',
  },
  {
    id: 'consulting',
    title: 'Consulting',
    description:
      'Strategic advisory for investors, utilities, and governments seeking bankable renewable energy pathways.',
    icon: 'Briefcase',
  },
  {
    id: 'assessment',
    title: 'Site Assessment',
    description:
      'Wind resource measurement, environmental studies, and technical due diligence for high-confidence investment decisions.',
    icon: 'Search',
  },
  {
    id: 'monitoring',
    title: 'Monitoring',
    description:
      'Digital SCADA analytics and performance monitoring platforms that unlock continuous production improvement.',
    icon: 'Activity',
  },
]

export const projects: ProjectItem[] = [
  {
    id: 'nordic-ridge',
    title: 'Nordic Ridge Wind Farm',
    location: 'Jutland, Denmark',
    capacity: '85 MW',
    year: '2023',
    status: 'Completed',
    image: images.turbineClose,
    description:
      'A landmark onshore wind farm delivering clean power to more than 70,000 households with industry-leading turbine efficiency.',
  },
  {
    id: 'atlantic-breeze',
    title: 'Atlantic Breeze Project',
    location: 'Galway, Ireland',
    capacity: '120 MW',
    year: '2024',
    status: 'Running',
    image: images.coastalWind,
    description:
      'Coastal wind assets optimized for Atlantic wind regimes, supporting Ireland’s renewable transition targets.',
  },
  {
    id: 'sahara-horizon',
    title: 'Sahara Horizon Hybrid',
    location: 'Ouarzazate, Morocco',
    capacity: '150 MW',
    year: '2025',
    status: 'Running',
    image: images.solarField,
    description:
      'A hybrid wind-solar corridor designed for high-capacity renewable export and regional grid stability.',
  },
  {
    id: 'baltic-stream',
    title: 'Baltic Stream Offshore',
    location: 'Baltic Sea, Germany',
    capacity: '200 MW',
    year: '2026',
    status: 'Upcoming',
    image: images.offshoreWind,
    description:
      'Next-generation offshore wind development featuring advanced foundations and high-capacity turbines.',
  },
  {
    id: 'green-valley',
    title: 'Green Valley Cluster',
    location: 'Tamil Nadu, India',
    capacity: '95 MW',
    year: '2022',
    status: 'Completed',
    image: images.windField,
    description:
      'Multi-phase wind cluster powering industrial corridors while creating skilled local employment.',
  },
  {
    id: 'northern-lights',
    title: 'Northern Lights Farm',
    location: 'Trøndelag, Norway',
    capacity: '110 MW',
    year: '2027',
    status: 'Upcoming',
    image: images.windModern,
    description:
      'A high-latitude wind project engineered for harsh climates and exceptional capacity factors.',
  },
]

export const windBenefits: WindBenefit[] = [
  {
    title: 'Zero Fuel Costs',
    description:
      'Wind is a free and abundant resource, protecting energy systems from fuel-price volatility.',
    icon: 'Coins',
  },
  {
    title: 'Carbon-Free Power',
    description:
      'Modern wind turbines generate electricity without direct greenhouse gas emissions.',
    icon: 'Leaf',
  },
  {
    title: 'Rapid Scalability',
    description:
      'Wind farms can be deployed modularly and expanded as grid demand and investment grow.',
    icon: 'TrendingUp',
  },
  {
    title: 'Local Economic Growth',
    description:
      'Projects create construction, operations, and supply-chain jobs in host communities.',
    icon: 'Users',
  },
]

export const sustainabilityMilestones: SustainabilityMilestone[] = [
  {
    year: '2010',
    title: 'Foundation of Windfarm',
    description:
      'Established with a mission to accelerate the global shift toward clean wind power.',
  },
  {
    year: '2015',
    title: 'First 100 MW Milestone',
    description:
      'Reached 100 MW of installed capacity across Northern European markets.',
  },
  {
    year: '2019',
    title: 'Carbon-Neutral Operations',
    description:
      'Achieved carbon-neutral corporate operations through efficiency and renewable procurement.',
  },
  {
    year: '2022',
    title: 'Community Energy Program',
    description:
      'Launched community benefit funds supporting education and local green infrastructure.',
  },
  {
    year: '2025',
    title: 'Net-Zero Pathway',
    description:
      'Committed to a science-based net-zero roadmap covering Scope 1, 2, and key Scope 3 emissions.',
  },
]

export const progressMetrics: ProgressMetric[] = [
  {
    label: 'Carbon Reduction',
    value: 88,
    description: 'Emissions avoided vs. fossil baseline across operating assets',
  },
  {
    label: 'Green Energy Share',
    value: 96,
    description: 'Portfolio electricity generated from renewable sources',
  },
  {
    label: 'Environment Score',
    value: 92,
    description: 'Biodiversity and land-stewardship performance index',
  },
  {
    label: 'Community Impact',
    value: 85,
    description: 'Local investment, training, and stakeholder engagement score',
  },
]

export const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    src: images.heroWind,
    alt: 'Wind turbines on a green hillside at sunrise',
    category: 'Onshore',
  },
  {
    id: 'g2',
    src: images.coastalWind,
    alt: 'Coastal wind farm against blue sky',
    category: 'Coastal',
  },
  {
    id: 'g3',
    src: images.offshoreWind,
    alt: 'Offshore wind turbines in open sea',
    category: 'Offshore',
  },
  {
    id: 'g4',
    src: images.windDusk,
    alt: 'Renewable energy landscape at dusk',
    category: 'Landscape',
  },
  {
    id: 'g5',
    src: images.turbineClose,
    alt: 'Modern wind turbine close-up',
    category: 'Technology',
  },
  {
    id: 'g6',
    src: images.windField,
    alt: 'Wind farm corridor in open fields',
    category: 'Onshore',
  },
  {
    id: 'g7',
    src: images.greenEnergy,
    alt: 'Solar and wind hybrid renewable site',
    category: 'Hybrid',
  },
  {
    id: 'g8',
    src: images.engineering,
    alt: 'Engineers reviewing renewable project plans',
    category: 'People',
  },
]

export const jobOpenings: JobOpening[] = [
  {
    id: 'job-1',
    title: 'Wind Turbine Technician',
    department: 'Operations',
    location: 'Copenhagen, Denmark',
    type: 'Full-time',
    description:
      'Perform scheduled maintenance, troubleshooting, and safety inspections across onshore wind assets.',
  },
  {
    id: 'job-2',
    title: 'Project Development Manager',
    department: 'Development',
    location: 'Dublin, Ireland',
    type: 'Full-time',
    description:
      'Lead early-stage wind project pipelines from site identification through permitting and stakeholder engagement.',
  },
  {
    id: 'job-3',
    title: 'SCADA Data Analyst',
    department: 'Digital',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    description:
      'Analyze turbine performance data, identify production losses, and recommend optimization actions.',
  },
  {
    id: 'job-4',
    title: 'HSE Specialist',
    department: 'Safety',
    location: 'Hamburg, Germany',
    type: 'Full-time',
    description:
      'Champion health, safety, and environmental excellence across construction and operations teams.',
  },
]

export const careerBenefits = [
  {
    title: 'Competitive Compensation',
    description: 'Market-leading salaries with performance-based incentives.',
  },
  {
    title: 'Global Mobility',
    description: 'Opportunities to work across European and international project sites.',
  },
  {
    title: 'Learning & Growth',
    description: 'Technical certifications, mentorship, and leadership development programs.',
  },
  {
    title: 'Purpose-Driven Work',
    description: 'Contribute directly to the clean energy transition and climate action.',
  },
]

export const footerServices = [
  'Wind Farm Development',
  'EPC Delivery',
  'Operation & Maintenance',
  'Technical Consulting',
  'Site Assessment',
  'Asset Monitoring',
]

export const processSteps = [
  {
    step: '01',
    title: 'Resource Assessment',
    description:
      'We measure wind patterns, terrain effects, and environmental constraints to model expected energy yield.',
  },
  {
    step: '02',
    title: 'Engineering & Design',
    description:
      'Turbine selection, layout optimization, and electrical design are refined for performance and reliability.',
  },
  {
    step: '03',
    title: 'Construction & Commissioning',
    description:
      'Foundations, towers, and turbines are installed, tested, and connected to the grid with rigorous QA.',
  },
  {
    step: '04',
    title: 'Operations & Optimization',
    description:
      'Continuous monitoring and predictive maintenance keep assets producing clean power for decades.',
  },
]
