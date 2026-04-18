import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { treatments } from '@/lib/treatments'

export const metadata: Metadata = {
  title: 'All Skin & Hair Treatments in Faisalabad | Dr. Kubra Munawar Aesthetics',
  description:
    'Explore all treatments at Dr. Kubra Munawar Aesthetics Faisalabad: Exosomes, PRP, HydraFacial, Carbon Laser, Acne Treatment, Laser Hair Removal, Whitening Drips & more. Book today.',
  alternates: {
    canonical: 'https://drkubramunawar.com/treatments',
  },
}

const categories = [
  { id: 'hair', label: 'Hair Treatments', icon: '◈' },
  { id: 'skin', label: 'Skin Treatments', icon: '◇' },
  { id: 'laser', label: 'Laser Treatments', icon: '∿' },
  { id: 'body', label: 'Body Treatments', icon: '✦' },
]

export default function TreatmentsPage() {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        {/* Hero */}
        <section
          className="py-24 sm:py-32 text-center"
          style={{ background: 'linear-gradient(180deg, #F9F3EA 0%, #FDFAF6 100%)' }}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <span className="font-body text-xs tracking-[0.2em] text-gold uppercase">
              Complete Treatment Menu
            </span>
            <h1 className="font-display text-4xl sm:text-6xl font-light text-charcoal mt-2 mb-4">
              All Treatments
            </h1>
            <div className="gold-divider mb-6" />
            <p className="font-body text-sm text-charcoal/60 leading-relaxed">
              Dr. Kubra Munawar offers a comprehensive range of medical-grade skin and hair
              treatments at our Faisalabad clinic. Each treatment is personalized to your needs.
            </p>
          </div>
        </section>

        {/* Treatments by category */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {categories.map((cat) => {
              const catTreatments = treatments.filter((t) => t.category === cat.id)
              if (catTreatments.length === 0) return null

              return (
                <div key={cat.id} className="mb-16">
                  {/* Category heading — H2 for each category */}
                  <div className="flex items-center gap-3 mb-8">
                    <span className="font-display text-xl text-gold">{cat.icon}</span>
                    <h2 className="font-display text-2xl sm:text-3xl text-charcoal">{cat.label}</h2>
                    <div className="flex-1 h-[1px] bg-cream-200 ml-2" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {catTreatments.map((treatment) => (
                      <Link
                        key={treatment.id}
                        href={`/treatments/${treatment.slug}`}
                        className="treatment-card group block bg-cream-50 rounded-2xl p-6 border border-cream-200 hover:border-gold/40"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <span className="font-display text-2xl text-gold">{treatment.icon}</span>
                          {treatment.featured && (
                            <span className="font-body text-[10px] tracking-wide bg-gold/10 text-gold px-2 py-0.5 rounded-full uppercase">
                              Popular
                            </span>
                          )}
                        </div>

                        {/* H3 for SEO hierarchy */}
                        <h3 className="font-display text-lg text-charcoal mb-1 group-hover:text-rose-deep transition-colors">
                          {treatment.name}
                        </h3>
                        <p className="font-body text-xs text-charcoal/50 mb-3">{treatment.tagline}</p>

                        <div className="flex items-center justify-between text-xs font-body text-charcoal/40">
                          <span>⏱ {treatment.duration}</span>
                          <span className="text-gold group-hover:translate-x-1 transition-transform">
                            Details →
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-charcoal text-center">
          <div className="max-w-xl mx-auto px-4">
            <h2 className="font-display text-3xl text-white mb-4">
              Not sure which treatment is right for you?
            </h2>
            <p className="font-body text-sm text-white/60 mb-8">
              Book a free consultation with Dr. Kubra Munawar. She will assess your skin or hair
              and recommend the best treatment plan for your goals and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="font-body text-sm bg-white text-charcoal px-8 py-3 rounded-full hover:bg-cream-100 transition-all"
              >
                Book Free Consultation
              </Link>
              <a
                href="tel:+923047064092"
                className="font-body text-sm border border-white/30 text-white px-8 py-3 rounded-full hover:border-gold hover:text-gold transition-all"
              >
                Call: 0304 706 4092
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
