import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// 📚 LESSON: Next.js automatically uses not-found.tsx for all 404 errors.
// A good 404 page keeps users on your site instead of leaving.

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center bg-cream-50 pt-16">
        <div className="text-center px-4 py-20">
          <span className="font-display text-8xl text-gold/30">404</span>
          <h1 className="font-display text-3xl text-charcoal mt-4 mb-2">Page Not Found</h1>
          <p className="font-body text-sm text-charcoal/60 mb-8 max-w-sm mx-auto">
            The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="font-body text-sm bg-charcoal text-white px-7 py-3 rounded-full hover:bg-charcoal/80 transition-all"
            >
              Go to Homepage
            </Link>
            <Link
              href="/treatments"
              className="font-body text-sm border border-gold text-gold px-7 py-3 rounded-full hover:bg-gold hover:text-white transition-all"
            >
              View All Treatments
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
