// 📚 LESSON: This is the ROOT LAYOUT — it wraps EVERY page.
// Next.js 14 App Router uses this file as the HTML shell.
// The `metadata` export here becomes <head> tags automatically.
// Google reads these tags to understand & rank your site.

import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'

// 📚 LESSON: Next.js loads Google Fonts at BUILD TIME (zero runtime cost)
// This is better than a <link> tag which loads fonts at page load time.
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap', // Shows fallback font until Cormorant loads (better UX)
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-jost',
  display: 'swap',
})

// 📚 LESSON: This `metadata` object is PURE SEO GOLD.
// Next.js converts this to proper <meta> tags in the HTML <head>.
// Google, WhatsApp, Facebook all read these tags.
export const metadata: Metadata = {
  // 🔍 The <title> tag — most important SEO element
  // Format: "Primary Keyword | Brand Name | Location"
  title: {
    default: 'Dr. Kubra Munawar Aesthetics | Dermatologist Faisalabad | Skin & Hair Expert',
    template: '%s | Dr. Kubra Munawar Aesthetics',
  },
  
  // 🔍 Meta description — shown in Google search results under the title
  // Max 155-160 chars. Include main keywords naturally.
  description:
    'Expert skin & hair treatments in Faisalabad by Dr. Kubra Munawar. Specializing in Exosomes Treatment, PRP Hair Therapy, HydraFacial, Acne & Whitening Drips. Book now at Samanabad Madni Chowk.',

  // 🔍 Keywords (less important now but still used by some search engines)
  keywords: [
    'dermatologist Faisalabad',
    'skin specialist Faisalabad',
    'exosomes treatment Faisalabad',
    'PRP hair treatment Faisalabad',
    'hair loss treatment Faisalabad',
    'HydraFacial Faisalabad',
    'acne treatment Faisalabad',
    'whitening drip Faisalabad',
    'Dr Kubra Munawar',
    'Dr Kubra Munawar Aesthetics',
    'mesotherapy Faisalabad',
    'carbon laser facial Faisalabad',
    'chemical peel Faisalabad',
    'hair exosomes Faisalabad',
    'skin clinic Samanabad Faisalabad',
  ],

  // 🔍 Open Graph = how the site looks when shared on WhatsApp, Facebook, etc.
  openGraph: {
    title: 'Dr. Kubra Munawar Aesthetics | Faisalabad Skin & Hair Clinic',
    description:
      'Advanced skin & hair clinic in Faisalabad. Exosomes, PRP, HydraFacial, Acne Treatment & more. Visit us at Madni Chowk, Samanabad.',
    url: 'https://drkubramunawar.com',
    siteName: 'Dr. Kubra Munawar Aesthetics',
    locale: 'en_PK',
    type: 'website',
  },

  // 🔍 Twitter Card — how it looks when shared on Twitter/X
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Kubra Munawar Aesthetics | Faisalabad Skin & Hair Clinic',
    description: 'Expert Exosomes, PRP & aesthetic treatments by Dr. Kubra Munawar in Faisalabad.',
  },

  // 🔍 Robots — tells Google HOW to crawl your site
  robots: {
    index: true,        // ✅ Add this page to search results
    follow: true,       // ✅ Follow links on this page
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,  // Show full text snippet in results
    },
  },

  // 🔍 Canonical URL — prevents duplicate content penalty
  alternates: {
    canonical: 'https://drkubramunawar.com',
  },

  // 🔍 Verification codes (you'll fill these after setting up Google Search Console)
  verification: {
    google: 'YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      {/* 
        📚 LESSON: JSON-LD Schema Markup
        This is invisible to users but Google LOVES it.
        It tells Google: "This is a medical clinic at this address, 
        with these hours, this phone number" — in structured data Google understands.
        This can qualify your site for Rich Results (special listings in Google).
      */}
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': ['MedicalBusiness', 'LocalBusiness'],
              name: 'Dr. Kubra Munawar Aesthetics',
              alternateName: 'Dr Kubra Munawar Skin Clinic',
              description:
                'Skin care aesthetic clinic offering advanced dermatology treatments including exosomes, PRP, HydraFacial, acne treatment, hair loss solutions, and more in Faisalabad.',
              url: 'https://drkubramunawar.com',
              telephone: '+923047064092',
              image: 'https://drkubramunawar.com/og-image.jpg',
              priceRange: '$$',
              currenciesAccepted: 'PKR',
              paymentAccepted: 'Cash, Bank Transfer',
              // Address from Google Business Profile
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Madni Chowk, near Quetta Shama Hotel, Block A',
                addressLocality: 'Samanabad',
                addressRegion: 'Faisalabad',
                postalCode: '38000',
                addressCountry: 'PK',
              },
              // GPS coordinates for Google Maps
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 31.4697,
                longitude: 73.0851,
              },
              // Opening hours from Google Business Profile
              openingHoursSpecification: [
                'Sunday', 'Monday', 'Tuesday', 'Wednesday',
                'Thursday', 'Friday', 'Saturday',
              ].map((day) => ({
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: `https://schema.org/${day}`,
                opens: '14:00',
                closes: '22:00',
              })),
              // The doctor
              hasMap: 'https://maps.google.com/?q=Madni+Chowk+Samanabad+Faisalabad',
              sameAs: [
                'https://www.instagram.com/drkubramunawar.aesthetics',
              ],
              // Medical specialties offered
              medicalSpecialty: [
                'Dermatology',
                'Aesthetic Medicine',
                'Trichology',
              ],
              // Staff
              employee: {
                '@type': 'Physician',
                name: 'Dr. Kubra Munawar',
                jobTitle: 'Dermatologist & Aesthetic Physician',
                medicalSpecialty: 'Dermatology',
              },
            }),
          }}
        />
      </head>
      <body className="bg-cream-50 text-charcoal antialiased">
        {children}
      </body>
    </html>
  )
}
