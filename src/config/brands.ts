/**
 * Brand destination URLs — change these in one place when domains/paths change.
 * Future domain switch:
 *   spinning: 'https://spinning.windfarm.com'
 */
export const BRAND_LINKS = {
  windEnergy: '/wind-energy',
  spinning: '/brands/spinning-mills',
} as const

export type BrandLinkKey = keyof typeof BRAND_LINKS
