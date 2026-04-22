import Link from 'next/link'

// 📚 SEO LESSON: The footer is a great place to reinforce local SEO signals.
// Repeating the clinic name, address, and phone number (NAP) in the footer
// helps Google verify your business is legitimate and located where you say.
// This is called "NAP consistency" — Name, Address, Phone should be
// IDENTICAL on your website AND Google Business Profile.

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-cream-200 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          {/* Brand column */}
          <div>
            <h3 className="font-display text-2xl text-white mb-1">Dr. Kubra Munawar</h3>
            <p className="text-xs tracking-[0.2em] text-gold mb-4 uppercase">Aesthetics Clinic</p>
            <p className="text-sm leading-relaxed text-white/60">
              Expert skin & hair care clinic in Faisalabad. Advanced aesthetic treatments by Dr. Kubra Munawar.
            </p>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/drkubramunawar.aesthetics"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm text-white/60 hover:text-gold transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @drkubramunawar.aesthetics
            </a>
          </div>

          {/* Treatments column */}
          <div>
            <h4 className="font-body text-xs tracking-[0.15em] uppercase text-gold mb-4">Treatments</h4>
            <ul className="space-y-2">
              {[
                { label: 'Exosomes Hair Treatment', href: '/treatments/exosomes-treatment-faisalabad' },
                { label: 'PRP Hair Therapy', href: '/treatments/prp-hair-treatment-faisalabad' },
                { label: 'HydraFacial', href: '/treatments/hydrafacial-faisalabad' },
                { label: 'Acne Treatment', href: '/treatments/acne-treatment-faisalabad' },
                { label: 'Carbon Laser Facial', href: '/treatments/carbon-laser-facial-faisalabad' },
                { label: 'View All Treatments', href: '/treatments' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-xs tracking-[0.15em] uppercase text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'About Dr. Kubra', href: '/about' },
                { label: 'Book Appointment', href: '/contact' },
                { label: 'Treatments', href: '/treatments' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* NAP — Critical for Local SEO */}
          <div>
            <h4 className="font-body text-xs tracking-[0.15em] uppercase text-gold mb-4">Find Us</h4>
            <address className="not-italic space-y-3">
              {/* Address — must match Google Business Profile EXACTLY */}
              <p className="text-sm text-white/60 leading-relaxed">
                Madni Chowk, near Quetta Shama Hotel,<br />
                Block A Samanabad,<br />
                Faisalabad, 38000
              </p>
              {/* Phone */}
              <a
                href="tel:+923047064092"
                className="block text-sm text-white/60 hover:text-gold transition-colors"
              >
                0304 706 4092
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/923047064092"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-white/60 hover:text-gold transition-colors"
              >
                WhatsApp: 0304 706 4092
              </a>
              {/* Hours */}
              <div className="text-sm text-white/60">
                <p className="text-white/80 mb-1">Clinic Hours:</p>
                <p>Sun – Sat: 2:00 PM – 10:00 PM</p>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/40">
            © {currentYear} Dr. Kubra Munawar Aesthetics, Faisalabad. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Dr. Kubra Munawar — Skin & Hair Specialist
          </p>
        </div>
      </div>
    </footer>
  )
}
