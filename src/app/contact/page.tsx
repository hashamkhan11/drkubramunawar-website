'use client'
// 📚 LESSON: This page is 'use client' because it has:
// - useState (form data)
// - Event handlers (form submission)
// - Firebase interaction
// For the metadata (SEO), we handle it differently — see the metadata export trick below.

// Actually, to add metadata to a client component page, we create a separate 
// server component wrapper. For simplicity here, we'll add metadata via the 
// parent layout, and keep this page focused on the form functionality.

import { useState } from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

interface FormData {
  name: string
  phone: string
  treatment: string
  date: string
  message: string
}

const treatmentOptions = [
  'Exosomes Hair Treatment',
  'PRP Hair Therapy',
  'HydraFacial',
  'Acne Treatment',
  'Whitening Drip',
  'Carbon Laser Facial',
  'Micro Needling',
  'Laser Hair Removal',
  'Chemical Peel',
  'Mesotherapy',
  'Dark Circle Treatment',
  'Alopecia Treatment',
  'General Consultation',
  'Other',
]

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    treatment: '',
    date: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  // 📚 LESSON: This function saves appointment data to Firebase Firestore.
  // In Firebase, data is organized in "Collections" (like folders) and "Documents" (like files).
  // Collection: "appointments" → each form submission = one Document
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      // 📚 `addDoc` adds a new document to the "appointments" collection
      // `serverTimestamp()` records WHEN the appointment was booked (server time, not browser time)
      await addDoc(collection(db, 'appointments'), {
        ...formData,
        createdAt: serverTimestamp(),
        status: 'pending', // You can update this to 'confirmed' from Firebase Console
        clinic: 'Dr. Kubra Munawar Aesthetics Faisalabad',
      })

      setStatus('success')
      setFormData({ name: '', phone: '', treatment: '', date: '', message: '' })
    } catch (error) {
      console.error('Booking error:', error)
      setStatus('error')
    }
  }

  return (
    <>
      <Navbar />

      <main className="pt-16">
        {/* Header */}
        <section
          className="py-20 sm:py-28 text-center"
          style={{ background: 'linear-gradient(180deg, #F9F3EA 0%, #FDFAF6 100%)' }}
        >
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <span className="font-body text-xs tracking-[0.2em] text-gold uppercase">
              We&apos;re Here to Help
            </span>
            <h1 className="font-display text-4xl sm:text-6xl font-light text-charcoal mt-2 mb-4">
              Book an Appointment
            </h1>
            <div className="gold-divider mb-6" />
            <p className="font-body text-sm text-charcoal/60">
              Fill out the form below and we&apos;ll confirm your appointment within a few hours.
              Or contact us directly on WhatsApp for immediate response.
            </p>
          </div>
        </section>

        {/* Main content */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

              {/* Contact Info Sidebar */}
              <div className="space-y-6">
                <h2 className="font-display text-2xl text-charcoal">Contact Info</h2>
                <div className="gold-divider" style={{ margin: '0 0 1.5rem 0' }} />

                {/* Address */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-gold text-xs">📍</span>
                  </div>
                  <div>
                    <p className="font-body text-xs tracking-wide text-charcoal/40 uppercase mb-1">Address</p>
                    <address className="font-body text-sm text-charcoal/70 not-italic leading-relaxed">
                      Madni Chowk, near Quetta Shama Hotel,<br />
                      Block A Samanabad,<br />
                      Faisalabad, 38000
                    </address>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs">📞</span>
                  </div>
                  <div>
                    <p className="font-body text-xs tracking-wide text-charcoal/40 uppercase mb-1">Phone</p>
                    <a
                      href="tel:+923047064092"
                      className="font-body text-sm text-charcoal hover:text-gold transition-colors"
                    >
                      0304 706 4092
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#25D366]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#25D366] text-xs">✓</span>
                  </div>
                  <div>
                    <p className="font-body text-xs tracking-wide text-charcoal/40 uppercase mb-1">WhatsApp</p>
                    <a
                      href="https://wa.me/923249874690"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm text-charcoal hover:text-gold transition-colors"
                    >
                      0324 987 4690
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs">🕐</span>
                  </div>
                  <div>
                    <p className="font-body text-xs tracking-wide text-charcoal/40 uppercase mb-1">Clinic Hours</p>
                    <p className="font-body text-sm text-charcoal/70">Sunday – Saturday</p>
                    <p className="font-body text-sm text-charcoal/70">2:00 PM – 10:00 PM</p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-pink-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs">📸</span>
                  </div>
                  <div>
                    <p className="font-body text-xs tracking-wide text-charcoal/40 uppercase mb-1">Instagram</p>
                    <a
                      href="https://www.instagram.com/drkubramunawar.aesthetics"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm text-charcoal hover:text-gold transition-colors"
                    >
                      @drkubramunawar.aesthetics
                    </a>
                  </div>
                </div>

                {/* Quick WhatsApp button */}
                <a
                  href="https://wa.me/923249874690?text=Hi%20I%20want%20to%20book%20an%20appointment%20at%20Zahra%20Dermatologist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-full text-sm font-body hover:opacity-90 transition-all w-full justify-center"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Book on WhatsApp (Instant)
                </a>
              </div>

              {/* Booking Form */}
              <div className="lg:col-span-2">
                <div className="bg-cream-50 rounded-3xl p-8 border border-cream-200">
                  <h2 className="font-display text-2xl text-charcoal mb-6">Appointment Request</h2>

                  {/* Success Message */}
                  {status === 'success' && (
                    <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                      <p className="font-body text-sm text-green-700 font-medium">
                        ✓ Appointment request sent! We&apos;ll confirm via WhatsApp or phone within a few hours.
                      </p>
                    </div>
                  )}

                  {/* Error Message */}
                  {status === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
                      <p className="font-body text-sm text-red-700">
                        Something went wrong. Please WhatsApp us directly at 0324 987 4690.
                      </p>
                    </div>
                  )}

                  {/* 📚 LESSON: We use onSubmit instead of <form action="...">
                      This prevents page reload and lets us interact with Firebase */}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div>
                        <label className="font-body text-xs tracking-wide text-charcoal/50 uppercase mb-2 block">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your name"
                          className="w-full font-body text-sm bg-white border border-cream-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="font-body text-xs tracking-wide text-charcoal/50 uppercase mb-2 block">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="03XX XXX XXXX"
                          className="w-full font-body text-sm bg-white border border-cream-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>
                    </div>

                    {/* Treatment */}
                    <div>
                      <label className="font-body text-xs tracking-wide text-charcoal/50 uppercase mb-2 block">
                        Treatment Interested In *
                      </label>
                      <select
                        name="treatment"
                        value={formData.treatment}
                        onChange={handleChange}
                        required
                        className="w-full font-body text-sm bg-white border border-cream-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                      >
                        <option value="">Select a treatment...</option>
                        {treatmentOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    {/* Preferred date */}
                    <div>
                      <label className="font-body text-xs tracking-wide text-charcoal/50 uppercase mb-2 block">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full font-body text-sm bg-white border border-cream-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="font-body text-xs tracking-wide text-charcoal/50 uppercase mb-2 block">
                        Additional Information
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Describe your skin/hair concern, or any questions..."
                        className="w-full font-body text-sm bg-white border border-cream-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full font-body text-sm bg-charcoal text-white py-4 rounded-full hover:bg-charcoal/80 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? 'Sending...' : 'Submit Appointment Request'}
                    </button>

                    <p className="font-body text-xs text-charcoal/40 text-center">
                      We&apos;ll confirm your appointment within a few hours via WhatsApp or phone call.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="h-72 sm:h-96">
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
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
