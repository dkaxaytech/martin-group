import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
}

export function SEO({ title, description }: SEOProps) {
  useEffect(() => {
    document.title = `${title} | Windfarm Group`
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', description)

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', `${title} | Windfarm Group`)

    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', description)
  }, [title, description])

  return null
}
