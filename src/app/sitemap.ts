// 📚 SEO LESSON: A sitemap.xml tells Google exactly which pages exist on your site
// and when they were last updated. Without this, Google might miss some pages.
// Next.js 14 generates this automatically as a REAL /sitemap.xml file.
// Submit this URL to Google Search Console: https://drkubramunawar.com/sitemap.xml

import { MetadataRoute } from 'next'
import { treatments } from '@/lib/treatments'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://drkubramunawar.com'

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,   // Homepage = highest priority (1.0 = most important)
    },
    {
      url: `${baseUrl}/treatments`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // Dynamic treatment pages — one entry per treatment
  // 📚 Each treatment page gets its own sitemap entry.
  // Google discovers ALL treatment pages through the sitemap.
  const treatmentPages: MetadataRoute.Sitemap = treatments.map((treatment) => ({
    url: `${baseUrl}/treatments/${treatment.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    // Featured treatments (our main keywords) get higher priority
    priority: treatment.featured ? 0.9 : 0.7,
  }))

  return [...staticPages, ...treatmentPages]
}
