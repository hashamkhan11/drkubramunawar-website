// 📚 LESSON: This is a SERVER COMPONENT (no 'use client').
// Next.js renders this on the server → sends complete HTML to browser.
// Google's crawler sees ALL the content, not an empty div.
// This is the #1 reason Next.js beats regular React for SEO.

import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { featuredTreatments } from '@/lib/treatments'

// 📚 LESSON: Each page can override the root metadata.
// The title here overrides the `template` in layout.tsx.
export const metadata: Metadata = {
  title: 'Best Dermatologist in Faisalabad | Dr. Kubra Munawar Aesthetics',
  description:
    'Dr. Kubra Munawar Aesthetics in Faisalabad offers advanced skin & hair treatments: Exosomes, PRP, HydraFacial, Acne Treatment, Laser Hair Removal & more. Book today: 0304 706 4092.',
  alternates: {
    canonical: 'https://drkubramunawar.com',
  },
}

// Reviews data — hardcoded for now, but could come from Firebase
const reviews = [
  {
    name: 'Ayesha R.',
    text: 'My hair loss improved dramatically after 3 sessions of exosomes treatment. Dr. Kubra is amazing!',
    rating: 5,
    treatment: 'Exosomes Treatment',
  },
  {
    name: 'Sana M.',
    text: 'Best HydraFacial in Faisalabad. My skin glowed for weeks. Highly recommended!',
    rating: 5,
    treatment: 'HydraFacial',
  },
  {
    name: 'Nadia K.',
    text: 'After years of trying different acne treatments, Zahra clinic finally gave me clear skin.',
    rating: 5,
    treatment: 'Acne Treatment',
  },
]

const stats = [
  { value: '1000+', label: 'Happy Patients' },
  { value: '12+', label: 'Treatments Offered' },
  { value: '5★', label: 'Patient Rating' },
  { value: '8hrs', label: 'Daily Availability' },
]

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        {/* ══════════════════════════════════════════════════
            HERO SECTION
            SEO: H1 tag must contain primary keyword.
            Primary keyword: "dermatologist Faisalabad"
            Secondary: "Dr. Kubra Munawar"
            The <h1> is the MOST important on-page SEO element.
           ══════════════════════════════════════════════════ */}
        <section
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #FDFAF6 0%, #F9F3EA 50%, #F0E6D3 100%)',
          }}
        >
          {/* Decorative background circles */}
          <div className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-20"
               style={{ background: 'radial-gradient(circle, #B8976A, transparent)' }} />
          <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full opacity-15"
               style={{ background: 'radial-gradient(circle, #C9847A, transparent)' }} />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center py-24 sm:py-32">
            {/* Pre-heading badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-[1px] bg-gold" />
              <span className="font-body text-xs tracking-[0.25em] text-gold uppercase">
                Faisalabad&apos;s Premier Skin & Hair Clinic
              </span>
              <div className="w-8 h-[1px] bg-gold" />
            </div>

            {/* H1 — THE most important SEO element on the page */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-charcoal leading-tight mb-6">
              Expert Skin & Hair Care
              <br />
              <em className="font-semibold" style={{ color: '#A3544A' }}>in Faisalabad</em>
            </h1>

            {/* Subheading with secondary keywords */}
            <p className="font-body text-base sm:text-lg text-charcoal/70 max-w-2xl mx-auto mb-4 leading-relaxed">
              Dr. Kubra Munawar offers advanced aesthetic treatments including{' '}
              <strong className="text-charcoal font-medium">Exosomes Hair Therapy</strong>,{' '}
              <strong className="text-charcoal font-medium">PRP Treatment</strong>, HydraFacial,
              Acne Care & more — at Madni Chowk, Samanabad.
            </p>

            {/* Open hours — a trust signal */}
            <p className="font-body text-sm text-gold mb-10">
              Open Daily: 2:00 PM – 10:00 PM · Walk-ins Welcome
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="font-body text-sm tracking-wide bg-charcoal text-white px-8 py-4 rounded-full hover:bg-charcoal/80 transition-all duration-300 min-w-[200px] text-center"
              >
                Book Appointment
              </Link>
              <a
                href="tel:+923047064092"
                className="font-body text-sm tracking-wide border border-gold text-gold px-8 py-4 rounded-full hover:bg-gold hover:text-white transition-all duration-300 min-w-[200px] text-center"
              >
                Call: 0304 706 4092
              </a>
            </div>

            {/* Gold divider */}
            <div className="gold-divider mt-16 mb-8" />

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-3xl font-semibold text-charcoal">{stat.value}</div>
                  <div className="font-body text-xs tracking-wide text-charcoal/50 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <div className="w-[1px] h-12 bg-gradient-to-b from-gold/0 to-gold/60 animate-pulse" />
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            FEATURED TREATMENTS SECTION
            H2 contains secondary keywords.
            Each treatment card links to its own SEO page.
           ══════════════════════════════════════════════════ */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <span className="font-body text-xs tracking-[0.2em] text-gold uppercase">What We Offer</span>
              <h2 className="font-display text-3xl sm:text-5xl font-light text-charcoal mt-2 mb-4">
                Signature Treatments
              </h2>
              <div className="gold-divider" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredTreatments.map((treatment, i) => (
                <Link
                  key={treatment.id}
                  href={`/treatments/${treatment.slug}`}
                  className="treatment-card group block bg-cream-50 rounded-2xl p-6 border border-cream-200 hover:border-gold/30"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {/* Icon */}
                  <div className="text-3xl text-gold mb-4 font-display">{treatment.icon}</div>
                  
                  {/* Treatment name — H3 for SEO hierarchy */}
                  <h3 className="font-display text-xl text-charcoal mb-2 group-hover:text-rose-deep transition-colors">
                    {treatment.name}
                  </h3>
                  
                  <p className="font-body text-xs text-charcoal/50 leading-relaxed mb-4">
                    {treatment.tagline}
                  </p>

                  <div className="flex items-center gap-1 text-gold text-xs font-body">
                    <span>Learn More</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/treatments"
                className="font-body text-sm tracking-wide border border-charcoal text-charcoal px-8 py-3 rounded-full hover:bg-charcoal hover:text-white transition-all duration-300"
              >
                View All 12 Treatments
              </Link>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            ABOUT DR. KUBRA — Trust Section
            Google values E-E-A-T: Experience, Expertise, 
            Authoritativeness, Trustworthiness for medical sites.
            This section addresses all four.
           ══════════════════════════════════════════════════ */}
        <section className="py-20 sm:py-28 bg-cream-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image placeholder */}
              <div className="relative">
                <div
                  className="rounded-3xl overflow-hidden aspect-[4/5] flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #F0E6D3, #D4B896)' }}
                >
                  {/* Replace this div with <Image> tag when you have a photo */}
                  <div className="text-center p-8">
                    <div className="w-24 h-24 rounded-full bg-white/50 mx-auto mb-4 flex items-center justify-center">
                      <span className="font-display text-4xl text-gold">KM</span>
                    </div>
                    <p className="font-body text-sm text-charcoal/60">Photo Coming Soon</p>
                    <p className="font-display text-lg text-charcoal mt-2">Dr. Kubra Munawar</p>
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-charcoal text-white rounded-2xl p-4 shadow-lg">
                  <div className="font-display text-2xl">✦</div>
                  <div className="font-body text-xs mt-1">Expert<br />Aesthetician</div>
                </div>
              </div>

              {/* Text */}
              <div>
                <span className="font-body text-xs tracking-[0.2em] text-gold uppercase">Meet Your Doctor</span>
                <h2 className="font-display text-3xl sm:text-5xl font-light text-charcoal mt-2 mb-6">
                  Dr. Kubra Munawar
                </h2>
                <div className="gold-divider mb-6" style={{ margin: '0 0 1.5rem 0' }} />
                
                <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-4">
                  Dr. Kubra Munawar is a passionate aesthetic physician at Dr. Kubra Munawar Aesthetics,
                  dedicated to delivering exceptional results in skin and hair care. With specialized
                  expertise in advanced treatments, she combines medical knowledge with an artistic
                  eye for natural-looking results.
                </p>
                <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-8">
                  Practicing at Madni Chowk, Samanabad, Faisalabad, she has helped over 1,000
                  patients achieve their skin and hair goals through personalized treatment plans.
                </p>

                {/* Specialties list */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    'Exosomes Therapy',
                    'PRP Hair Treatment',
                    'HydraFacial',
                    'Acne Management',
                    'Laser Treatments',
                    'Alopecia Treatment',
                  ].map((spec) => (
                    <div key={spec} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                      <span className="font-body text-xs text-charcoal/70">{spec}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/about"
                  className="font-body text-sm tracking-wide bg-gold text-white px-8 py-3 rounded-full hover:bg-gold-dark transition-all duration-300 inline-block"
                >
                  Learn More About Dr. Kubra
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            WHY CHOOSE US
           ══════════════════════════════════════════════════ */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <span className="font-body text-xs tracking-[0.2em] text-gold uppercase">Why Patients Choose Us</span>
              <h2 className="font-display text-3xl sm:text-5xl font-light text-charcoal mt-2 mb-4">
                The Zahra Difference
              </h2>
              <div className="gold-divider" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: '◈',
                  title: 'Expert Medical Care',
                  desc: 'All treatments performed by qualified Dr. Kubra Munawar with years of specialized aesthetic training.',
                },
                {
                  icon: '◇',
                  title: 'Advanced Technology',
                  desc: 'Latest equipment including professional-grade lasers, exosome kits, and HydraFacial machines.',
                },
                {
                  icon: '○',
                  title: 'Personalized Plans',
                  desc: 'Every patient gets a customized treatment plan. No one-size-fits-all approach.',
                },
                {
                  icon: '✦',
                  title: 'Open 7 Days a Week',
                  desc: 'Available every day from 2–10 PM. Evening hours perfect for working professionals.',
                },
                {
                  icon: '∿',
                  title: 'Proven Results',
                  desc: 'Over 1,000 satisfied patients. Before & after photos available for all treatments.',
                },
                {
                  icon: '⬡',
                  title: 'Easy Location',
                  desc: 'Conveniently located at Madni Chowk, Samanabad — easily accessible from all areas of Faisalabad.',
                },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-2xl border border-cream-200 bg-cream-50">
                  <div className="font-display text-2xl text-gold mb-3">{item.icon}</div>
                  <h3 className="font-display text-xl text-charcoal mb-2">{item.title}</h3>
                  <p className="font-body text-xs text-charcoal/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            REVIEWS SECTION
            Reviews = Social Proof = higher conversion rates.
            Google also uses review signals for local ranking.
           ══════════════════════════════════════════════════ */}
        <section className="py-20 sm:py-28 bg-charcoal">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <span className="font-body text-xs tracking-[0.2em] text-gold-light uppercase">Patient Stories</span>
              <h2 className="font-display text-3xl sm:text-5xl font-light text-white mt-2 mb-4">
                What Patients Say
              </h2>
              <div className="gold-divider" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <div
                  key={review.name}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
                  // 📚 Schema markup for reviews improves Google rich snippets
                  itemScope
                  itemType="https://schema.org/Review"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <span key={i} className="text-gold text-sm">★</span>
                    ))}
                  </div>

                  {/* Review text */}
                  <p
                    className="font-body text-sm text-white/70 leading-relaxed mb-4 italic"
                    itemProp="reviewBody"
                  >
                    &ldquo;{review.text}&rdquo;
                  </p>

                  {/* Reviewer */}
                  <div>
                    <p className="font-body text-sm text-white font-medium" itemProp="author">
                      {review.name}
                    </p>
                    <p className="font-body text-xs text-gold-light mt-0.5">{review.treatment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            CTA BANNER + LOCATION
           ══════════════════════════════════════════════════ */}
        <section className="py-20 sm:py-24 bg-cream-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <span className="font-body text-xs tracking-[0.2em] text-gold uppercase">Ready to Transform?</span>
            <h2 className="font-display text-3xl sm:text-5xl font-light text-charcoal mt-2 mb-4">
              Book Your Consultation
            </h2>
            <div className="gold-divider mb-8" />

            <p className="font-body text-sm text-charcoal/60 mb-8 max-w-lg mx-auto">
              Take the first step towards radiant skin and healthy hair.
              Visit us at Madni Chowk, Samanabad, Faisalabad.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/contact"
                className="font-body text-sm tracking-wide bg-charcoal text-white px-8 py-4 rounded-full hover:bg-charcoal/80 transition-all"
              >
                Book Online
              </Link>
              <a
                href="https://wa.me/923047064092?text=Hi%20I%20want%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm tracking-wide bg-[#25D366] text-white px-8 py-4 rounded-full hover:opacity-90 transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>

            {/* Google Maps embed */}
            <div className="rounded-2xl overflow-hidden border border-cream-200 h-64 sm:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.0!2d73.0851!3d31.4697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMadni+Chowk+Samanabad+Faisalabad!5e0!3m2!1sen!2spk!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dr. Kubra Munawar Aesthetics - Madni Chowk, Samanabad, Faisalabad"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
