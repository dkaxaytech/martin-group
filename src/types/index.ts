export interface NavLink {
  label: string
  path: string
}

export interface StatItem {
  value: number
  suffix: string
  label: string
}

export interface GroupCompany {
  id: string
  name: string
  description: string
  icon: string
  image: string
}

export interface ServiceItem {
  id: string
  title: string
  description: string
  icon: string
}

export interface ProjectItem {
  id: string
  title: string
  location: string
  capacity: string
  year: string
  status: 'Completed' | 'Running' | 'Upcoming'
  image: string
  description: string
}

export interface GalleryItem {
  id: string
  src: string
  alt: string
  category: string
}

export interface JobOpening {
  id: string
  title: string
  department: string
  location: string
  type: string
  description: string
}

export interface SustainabilityMilestone {
  year: string
  title: string
  description: string
}

export interface ProgressMetric {
  label: string
  value: number
  description: string
}

export interface CoreValue {
  title: string
  description: string
  icon: string
}

export interface WindBenefit {
  title: string
  description: string
  icon: string
}
