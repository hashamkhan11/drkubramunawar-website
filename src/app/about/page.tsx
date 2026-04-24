// 📚 SEO LESSON: E-E-A-T = Experience, Expertise, Authoritativeness, Trustworthiness
// Google uses E-E-A-T to rank medical websites. This About page is CRITICAL
// because it establishes the doctor's credentials and makes Google trust your site.
// Medical sites without a proper "About the Doctor" page rank significantly lower.

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'About Dr. Kubra Munawar | Dermatologist Faisalabad | Dr. Kubra Munawar Aesthetics',
  description:
    'Meet Dr. Kubra Munawar, expert dermatologist and aesthetic physician in Faisalabad. Specializing in Exosomes, PRP, HydraFacial, Acne & Hair Treatments at Dr. Kubra Munawar Aesthetics.',
  alternates: {
    canonical: 'https://drkubramunawar.com/about',
  },
}

const specializations = [
  { name: 'Exosomes Hair Therapy', icon: '✦', desc: 'Next-generation stem cell hair restoration' },
  { name: 'PRP Treatment', icon: '◈', desc: 'Platelet-rich plasma for hair & skin' },
  { name: 'HydraFacial', icon: '◇', desc: 'Deep cleansing and hydration therapy' },
  { name: 'Acne Management', icon: '○', desc: 'Medical-grade acne & scar treatment' },
  { name: 'Laser Treatments', icon: '∿', desc: 'Carbon laser, hair removal & more' },
  { name: 'IV Whitening Drips', icon: '⬡', desc: 'Glutathione IV drips for full-body skin brightening' },
]

const clinicFeatures = [
  'State-of-the-art aesthetic equipment',
  'Medically approved treatment protocols',
  'Personalized consultation before every treatment',
  'Safe, sterile clinical environment',
  'Follow-up care included',
  'Transparent pricing, no hidden costs',
]

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        {/* Hero */}
        <section
          className="py-20 sm:py-28"
          style={{ background: 'linear-gradient(135deg, #F9F3EA 0%, #FDFAF6 100%)' }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Doctor Photo */}
              <div className="order-2 lg:order-1">
                <div className="rounded-3xl overflow-hidden aspect-[3/4] max-w-sm mx-auto lg:mx-0 relative">
                  <Image
                    src="/profile-pic.png"
                    alt="Dr. Kubra Munawar - Dermatologist & Aesthetic Physician Faisalabad"
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(max-width: 768px) 100vw, 384px"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2">
                <span className="font-body text-xs tracking-[0.2em] text-gold uppercase">
                  Meet Your Expert
                </span>
                <h1 className="font-display text-4xl sm:text-5xl font-light text-charcoal mt-2 mb-6">
                  Dr. Kubra Munawar
                </h1>
                <div className="gold-divider mb-6" style={{ margin: '0 0 1.5rem 0' }} />

                <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-4">
                  Dr. Kubra Munawar is the lead aesthetic physician at{' '}
                  <strong className="text-charcoal font-medium">Dr. Kubra Munawar Aesthetics</strong>,
                  Faisalabad&apos;s trusted skin and hair care clinic located at Madni Chowk,
                  Samanabad. With a passion for helping patients look and feel their best,
                  Dr. Kubra brings both medical expertise and a caring approach to every consultation.
                </p>

                <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-4">
                  She specializes in advanced aesthetic treatments including{' '}
                  <strong className="text-charcoal font-medium">Exosomes Hair Therapy</strong>,{' '}
                  <strong className="text-charcoal font-medium">PRP Treatment</strong>, HydraFacial,
                  acne management, laser procedures, and comprehensive hair loss solutions. Her
                  approach is deeply personalized — she believes every patient&apos;s skin and hair
                  tells a unique story that deserves a tailored treatment plan.
                </p>

                <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-8">
                  &ldquo;My goal is simple — to make sure every patient leaves with visible results
                  and a smile. Skin confidence changes lives.&rdquo;
                  <span className="block text-charcoal/40 mt-1 text-xs italic">
                    — Dr. Kubra Munawar
                  </span>
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="font-body text-sm bg-charcoal text-white px-7 py-3 rounded-full hover:bg-charcoal/80 transition-all text-center"
                  >
                    Book with Dr. Kubra
                  </Link>
                  <a
                    href="https://wa.me/923047064092"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm border border-gold text-gold px-7 py-3 rounded-full hover:bg-gold hover:text-white transition-all text-center"
                  >
                    WhatsApp: 0304 706 4092
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specializations */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <span className="font-body text-xs tracking-[0.2em] text-gold uppercase">Areas of Expertise</span>
              <h2 className="font-display text-3xl sm:text-4xl font-light text-charcoal mt-2 mb-4">
                Dr. Kubra&apos;s Specializations
              </h2>
              <div className="gold-divider" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {specializations.map((spec) => (
                <div
                  key={spec.name}
                  className="flex items-start gap-4 p-5 bg-cream-50 rounded-2xl border border-cream-200"
                >
                  <span className="font-display text-2xl text-gold flex-shrink-0">{spec.icon}</span>
                  <div>
                    <h3 className="font-display text-lg text-charcoal">{spec.name}</h3>
                    <p className="font-body text-xs text-charcoal/50 mt-1">{spec.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About the Clinic */}
        <section className="py-20 bg-cream-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="font-body text-xs tracking-[0.2em] text-gold uppercase">The Clinic</span>
                <h2 className="font-display text-3xl sm:text-4xl font-light text-charcoal mt-2 mb-4">
                  About Dr. Kubra Munawar Aesthetics
                </h2>
                <div className="gold-divider mb-6" style={{ margin: '0 0 1.5rem 0' }} />

                <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-4">
                  Dr. Kubra Munawar Aesthetics is a premier skin and hair clinic based in
                  Samanabad, Faisalabad. Located at Madni Chowk near Quetta Shama Hotel, our
                  clinic is easily accessible from all areas of Faisalabad.
                </p>

                <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-6">
                  We provide a comprehensive range of medical-grade treatments for skin issues
                  including acne, allergies, fungal infections, pigmentation, and anti-aging — as
                  well as advanced hair loss solutions for men and women. All treatments are
                  performed in a clean, professional, and welcoming environment.
                </p>

                {/* Clinical features */}
                <ul className="space-y-3">
                  {clinicFeatures.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0">
                        <span className="text-gold text-xs">✓</span>
                      </div>
                      <span className="font-body text-sm text-charcoal/70">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Info cards */}
              <div className="space-y-4">
                {/* Location card */}
                <div className="bg-white rounded-2xl p-6 border border-cream-200">
                  <h3 className="font-display text-xl text-charcoal mb-3">📍 Location</h3>
                  <address className="font-body text-sm text-charcoal/70 not-italic leading-relaxed">
                    Madni Chowk, near Quetta Shama Hotel<br />
                    Block A, Samanabad<br />
                    Faisalabad, 38000<br />
                    <span className="text-charcoal/40 text-xs mt-1 block">
                      ≈ 35 minutes from Faisalabad Cantonment
                    </span>
                  </address>
                  <a
                    href="https://maps.google.com/?q=Madni+Chowk+Samanabad+Faisalabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 font-body text-xs text-gold hover:underline"
                  >
                    Open in Google Maps →
                  </a>
                </div>

                {/* Hours card */}
                <div className="bg-white rounded-2xl p-6 border border-cream-200">
                  <h3 className="font-display text-xl text-charcoal mb-3">🕐 Clinic Hours</h3>
                  <div className="space-y-1.5">
                    {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map(
                      (day) => (
                        <div key={day} className="flex justify-between font-body text-sm">
                          <span className="text-charcoal/60">{day}</span>
                          <span className="text-charcoal font-medium">2:00 PM – 10:00 PM</span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Contact card */}
                <div className="bg-charcoal rounded-2xl p-6">
                  <h3 className="font-display text-xl text-white mb-3">Contact Us</h3>
                  <div className="space-y-2">
                    <a
                      href="tel:+923047064092"
                      className="block font-body text-sm text-white/70 hover:text-gold transition-colors"
                    >
                      📞 0304 706 4092
                    </a>
                    <a
                      href="https://wa.me/923047064092"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block font-body text-sm text-white/70 hover:text-gold transition-colors"
                    >
                      💬 WhatsApp: 0304 706 4092
                    </a>
                    <a
                      href="https://www.instagram.com/drkubramunawar.aesthetics"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block font-body text-sm text-white/70 hover:text-gold transition-colors"
                    >
                      📸 @drkubramunawar.aesthetics
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 bg-white text-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <h2 className="font-display text-3xl sm:text-4xl font-light text-charcoal mb-4">
              Ready to start your journey?
            </h2>
            <p className="font-body text-sm text-charcoal/60 mb-8">
              Book a consultation with Dr. Kubra Munawar and take the first step towards
              healthier skin and hair.
            </p>
            <Link
              href="/contact"
              className="font-body text-sm bg-gold text-white px-10 py-4 rounded-full hover:bg-gold-dark transition-all inline-block"
            >
              Book Appointment
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
