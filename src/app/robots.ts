// 📚 SEO LESSON: robots.txt tells search engine crawlers (Googlebot, Bingbot)
// which pages they ARE and ARE NOT allowed to crawl.
// Next.js auto-generates /robots.txt from this file.
//
// Rules:
// - Allow: / → Google can crawl everything
// - Sitemap: tells Google exactly where to find all pages
// - We don't block anything because all our pages SHOULD be indexed

import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',        // Applies to ALL crawlers (Google, Bing, etc.)
      allow: '/',            // Allow crawling everything
      // disallow: '/admin',  // Uncomment if you add an admin panel later
    },
    sitemap: 'https://drkubramunawar.com/sitemap.xml',
    host: 'https://drkubramunawar.com',
  }
}
