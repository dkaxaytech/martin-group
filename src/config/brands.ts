/**
 * Brand destination URLs — change these in one place when domains/paths change.
 * Example future switch:
 *   spinning: 'https://spinning.example.com'
 */
export const BRAND_LINKS = {
  windEnergy: '/wind-energy',
  spinning: '/brands/spinning-mills',
} as const

export type BrandLinkKey = keyof typeof BRAND_LINKS
