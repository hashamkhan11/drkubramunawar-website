'use client'
// 📚 'use client' = this component runs in the browser (needed for useState, events)
// Without it, Next.js tries to render it on the server where useState doesn't exist

import { useState, useEffect } from 'react'
import Link from 'next/link'

// 📚 LESSON: Next.js `Link` component does "client-side navigation"
// Instead of full page reload, it swaps only what changed → 10x faster

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/treatments', label: 'Treatments' },
  { href: '/about', label: 'About Dr. Kubra' },
  { href: '/contact', label: 'Book Appointment' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Add background when user scrolls down
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll) // Cleanup!
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream-50/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight group">
            <span className="font-display text-lg sm:text-xl font-semibold text-charcoal tracking-wide group-hover:text-gold transition-colors duration-200">
              Dr. Kubra Munawar
            </span>
            <span className="font-body text-[10px] tracking-[0.2em] text-gold uppercase">
              Aesthetics Clinic
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body text-sm tracking-wide transition-colors duration-200 ${
                  link.label === 'Book Appointment'
                    ? 'bg-gold text-white px-5 py-2 rounded-full hover:bg-gold-dark'
                    : 'text-charcoal hover:text-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-[5px] p-2"
            aria-label="Toggle navigation menu"
          >
            <span
              className={`block w-6 h-[1.5px] bg-charcoal transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-[6.5px]' : ''
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-charcoal transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-charcoal transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-[6.5px]' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-80 pb-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-1 pt-2 border-t border-cream-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-body text-sm py-3 px-2 transition-colors duration-200 ${
                  link.label === 'Book Appointment'
                    ? 'text-gold font-medium'
                    : 'text-charcoal hover:text-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
