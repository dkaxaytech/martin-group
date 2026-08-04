/** Local image assets served from /public/images (respects Vite `base`) */
const base = import.meta.env.BASE_URL

export const images = {
  heroWind: `${base}images/hero-wind.jpg`,
  turbineClose: `${base}images/turbine-close.jpg`,
  coastalWind: `${base}images/coastal-wind.jpg`,
  offshoreWind: `${base}images/offshore-wind.jpg`,
  solarField: `${base}images/solar-field.jpg`,
  cityInfra: `${base}images/city-infra.jpg`,
  logistics: `${base}images/logistics.jpg`,
  engineering: `${base}images/engineering.jpg`,
  windField: `${base}images/wind-field.jpg`,
  greenEnergy: `${base}images/green-energy.jpg`,
  natureHills: `${base}images/nature-hills.jpg`,
  earthTech: `${base}images/earth-tech.jpg`,
  teamWork: `${base}images/team-work.jpg`,
  officeDesk: `${base}images/office-desk.jpg`,
  contactDesk: `${base}images/contact-desk.jpg`,
  ecoHands: `${base}images/eco-hands.jpg`,
  windDusk: `${base}images/wind-dusk.jpg`,
  windModern: `${base}images/wind-modern.jpg`,
  yarnCotton: `${base}images/yarn-cotton.jpg`,
  sewingThread: `${base}images/sewing-thread.jpg`,
  fabricRolls: `${base}images/fabric-rolls.jpg`,
  textileMill: `${base}images/textile-mill.jpg`,
  textileFactory: `${base}images/textile-factory.jpg`,
  qualityCheck: `${base}images/quality-check.jpg`,
} as const
