import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { MainLayout } from './components/layouts/MainLayout'
import { BRAND_LINKS } from './config/brands'

const HomePage = lazy(() => import('./pages/HomePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const GroupPage = lazy(() => import('./pages/GroupPage'))
const WindEnergyPage = lazy(() => import('./pages/WindEnergyPage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'))
const SustainabilityPage = lazy(() => import('./pages/SustainabilityPage'))
const GalleryPage = lazy(() => import('./pages/GalleryPage'))
const CareersPage = lazy(() => import('./pages/CareersPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'))
const SpinningMillsPage = lazy(() => import('./pages/SpinningMillsPage'))

function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-green/20 border-t-green" />
    </div>
  )
}

const spinningRoute = BRAND_LINKS.spinning.replace(/^\//, '')

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '') || '/'}>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="group" element={<GroupPage />} />
            <Route path="wind-energy" element={<WindEnergyPage />} />
            <Route path={spinningRoute} element={<SpinningMillsPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="sustainability" element={<SustainabilityPage />} />
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="careers" element={<CareersPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
