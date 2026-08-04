import { BRAND_LINKS } from '../config/brands'
import type { BrandItem } from '../types/brands'
import { images } from './images'

export const brands: BrandItem[] = [
  {
    id: 'wind-energy',
    name: 'Martin Wind Energy',
    description:
      'Delivering renewable energy solutions through modern wind farms and sustainable power generation.',
    image: images.heroWind,
    buttonText: 'Explore',
    link: BRAND_LINKS.windEnergy,
  },
  {
    id: 'spinning-mills',
    name: 'Martin Spinning Mills',
    description: 'Experience Quality and Sustainability in Textile Production.',
    image: images.textileFactory,
    buttonText: 'Explore',
    link: BRAND_LINKS.spinning,
  },
]
