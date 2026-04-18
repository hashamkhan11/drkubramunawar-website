// 📚 LESSON: Dynamic Routes in Next.js
// The folder name [slug] with brackets means this is a DYNAMIC route.
// URL /treatments/exosomes-treatment-faisalabad → slug = "exosomes-treatment-faisalabad"
// URL /treatments/prp-hair-treatment-faisalabad → slug = "prp-hair-treatment-faisalabad"
// ONE file serves UNLIMITED treatment pages! Each gets its own URL & SEO metadata.

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { treatments, getTreatmentBySlug } from '@/lib/treatments'

interface Props {
  params: { slug: string }
}

// 📚 LESSON: `generateStaticParams` = Next.js pre-builds ALL treatment pages
// at BUILD TIME. So /treatments/exosomes-treatment-faisalabad is a real HTML file,
// not generated on-demand. This means:
// ✅ Faster page loads
// ✅ Google can crawl immediately 
// ✅ Works even if your server is down temporarily
export async function generateStaticParams() {
  return treatments.map((treatment) => ({
    slug: treatment.slug,
  }))
}

// 📚 LESSON: Dynamic metadata per treatment page.
// Each treatment gets its own unique title, description, and keywords.
// This is CRITICAL for SEO — Google needs unique meta for each page.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const treatment = getTreatmentBySlug(params.slug)

  if (!treatment) {
    return { title: 'Treatment Not Found' }
  }

  return {
    title: `${treatment.name} in Faisalabad | Dr. Kubra Munawar Aesthetics`,
    description: treatment.description.slice(0, 155) + '...',
    keywords: treatment.keywords,
    alternates: {
      canonical: `https://drkubramunawar.com/treatments/${treatment.slug}`,
    },
    openGraph: {
      title: `${treatment.name} in Faisalabad`,
      description: treatment.description.slice(0, 155),
      url: `https://drkubramunawar.com/treatments/${treatment.slug}`,
    },
  }
}

export default function TreatmentDetailPage({ params }: Props) {
  const treatment = getTreatmentBySlug(params.slug)

  // 📚 notFound() shows Next.js 404 page if slug doesn't exist
  if (!treatment) notFound()

  // Related treatments (same category, different treatment)
  const related = treatments
    .filter((t) => t.category === treatment.category && t.id !== treatment.id)
    .slice(0, 3)

  return (
    <>
      <Navbar />

      <main className="pt-16">
        {/* Breadcrumb — helps SEO and user navigation */}
        <div className="bg-cream-100 border-b border-cream-200 py-3">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <nav className="font-body text-xs text-charcoal/50 flex items-center gap-2">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/treatments" className="hover:text-gold transition-colors">Treatments</Link>
              <span>/</span>
              <span className="text-charcoal">{treatment.name}</span>
            </nav>
          </div>
        </div>

        {/* Treatment Hero */}
        <section
          className="py-16 sm:py-24"
          style={{ background: 'linear-gradient(135deg, #FDFAF6 0%, #F9F3EA 100%)' }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <span className="font-body text-xs tracking-[0.2em] text-gold uppercase">
                  {treatment.category === 'hair' ? 'Hair Treatment' :
                   treatment.category === 'skin' ? 'Skin Treatment' :
                   treatment.category === 'laser' ? 'Laser Treatment' : 'Body Treatment'}
                </span>

                {/* H1 with treatment name + location keyword */}
                <h1 className="font-display text-4xl sm:text-5xl font-light text-charcoal mt-2 mb-2">
                  {treatment.name}
                </h1>
                <p className="font-body text-sm text-gold mb-6">in Faisalabad</p>

                <div className="gold-divider mb-6" style={{ margin: '0 0 1.5rem 0' }} />

                <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-8">
                  {treatment.description}
                </p>

                {/* Quick info */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white rounded-xl p-4 border border-cream-200">
                    <p className="font-body text-[10px] tracking-wide text-charcoal/40 uppercase mb-1">Duration</p>
                    <p className="font-display text-base text-charcoal">{treatment.duration}</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-cream-200">
                    <p className="font-body text-[10px] tracking-wide text-charcoal/40 uppercase mb-1">Sessions</p>
                    <p className="font-display text-base text-charcoal">{treatment.sessions}</p>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="font-body text-sm bg-charcoal text-white px-6 py-3 rounded-full hover:bg-charcoal/80 transition-all text-center"
                  >
                    Book This Treatment
                  </Link>
                  <a
                    href={`https://wa.me/923249874690?text=Hi%20I%20want%20to%20book%20${encodeURIComponent(treatment.name)}%20at%20Zahra%20Dermatologist%20Faisalabad`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm bg-[#25D366] text-white px-6 py-3 rounded-full hover:opacity-90 transition-all text-center"
                  >
                    WhatsApp to Book
                  </a>
                </div>
              </div>

              {/* Benefits panel */}
              <div className="bg-white rounded-3xl p-8 border border-cream-200 shadow-sm">
                <h2 className="font-display text-2xl text-charcoal mb-6">Treatment Benefits</h2>
                <div className="space-y-4">
                  {treatment.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-gold text-xs">✓</span>
                      </div>
                      <p className="font-body text-sm text-charcoal/70 leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-cream-200">
                  <p className="font-body text-xs text-charcoal/50 mb-2">Performed by:</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                      <span className="font-display text-gold text-sm">KM</span>
                    </div>
                    <div>
                      <p className="font-body text-sm font-medium text-charcoal">Dr. Kubra Munawar</p>
                      <p className="font-body text-xs text-charcoal/50">Dermatologist & Aesthetic Physician</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section — Excellent for SEO (People Also Ask) */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="font-display text-3xl text-charcoal text-center mb-10">
              Frequently Asked Questions
            </h2>

            {/* 📚 LESSON: FAQ Schema makes these appear in Google's "People Also Ask"
                boxes, which gives you a second listing on Google's first page! */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'FAQPage',
                  mainEntity: [
                    {
                      '@type': 'Question',
                      name: `How much does ${treatment.name} cost in Faisalabad?`,
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: `The cost of ${treatment.name} at Dr. Kubra Munawar Aesthetics in Faisalabad depends on the number of sessions required. Please contact us at 0304 706 4092 or visit our clinic at Madni Chowk, Samanabad for a personalized quote.`,
                      },
                    },
                    {
                      '@type': 'Question',
                      name: `Is ${treatment.name} safe?`,
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: `Yes, ${treatment.name} at Dr. Kubra Munawar Aesthetics is performed by Dr. Kubra Munawar using medically approved techniques and equipment. A thorough consultation is conducted before every procedure to ensure suitability.`,
                      },
                    },
                    {
                      '@type': 'Question',
                      name: `How many sessions of ${treatment.name} do I need?`,
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: `${treatment.sessions}. However, the exact number depends on your individual condition. Dr. Kubra will assess your skin or hair and recommend a tailored treatment plan.`,
                      },
                    },
                  ],
                }),
              }}
            />

            <div className="space-y-4">
              {[
                {
                  q: `How much does ${treatment.name} cost in Faisalabad?`,
                  a: `The cost depends on the number of sessions and your specific needs. Please contact us at 0304 706 4092 or visit our clinic for a personalized consultation and pricing.`,
                },
                {
                  q: `Is ${treatment.name} painful?`,
                  a: `Most patients experience minimal discomfort. Dr. Kubra uses topical numbing creams where necessary to ensure a comfortable experience throughout the procedure.`,
                },
                {
                  q: `How many sessions of ${treatment.name} do I need?`,
                  a: `${treatment.sessions}. The exact number is determined after Dr. Kubra assesses your condition during the initial consultation.`,
                },
                {
                  q: `What should I do before my ${treatment.name} appointment?`,
                  a: `Avoid sun exposure for 24 hours before your appointment. Come with a clean face/scalp (no makeup or heavy styling products). Dr. Kubra will provide specific pre-care instructions during your consultation.`,
                },
              ].map((faq, i) => (
                <details
                  key={i}
                  className="border border-cream-200 rounded-xl overflow-hidden group"
                >
                  <summary className="font-body text-sm font-medium text-charcoal p-5 cursor-pointer flex items-center justify-between list-none hover:bg-cream-50 transition-colors">
                    {faq.q}
                    <span className="text-gold group-open:rotate-45 transition-transform text-lg">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="font-body text-sm text-charcoal/60 leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Related Treatments */}
        {related.length > 0 && (
          <section className="py-16 bg-cream-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <h2 className="font-display text-2xl text-charcoal mb-8 text-center">
                Related Treatments
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {related.map((t) => (
                  <Link
                    key={t.id}
                    href={`/treatments/${t.slug}`}
                    className="treatment-card group block bg-white rounded-2xl p-6 border border-cream-200"
                  >
                    <span className="font-display text-2xl text-gold">{t.icon}</span>
                    <h3 className="font-display text-lg text-charcoal mt-3 mb-1 group-hover:text-rose-deep transition-colors">
                      {t.name}
                    </h3>
                    <p className="font-body text-xs text-charcoal/50">{t.tagline}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
