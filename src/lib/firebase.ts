// 📚 LESSON: Firebase is Google's database-as-a-service.
// We use it for TWO things:
// 1. Storing appointment booking requests from the contact form
// 2. Real-time updates (when you confirm an appointment, it updates instantly)
//
// HOW TO SET UP (free):
// 1. Go to https://console.firebase.google.com
// 2. Create project: "zahra-dermatology"
// 3. Click "Add app" → Web app
// 4. Copy the config object and paste your real values below
// 5. Enable "Firestore Database" in the left sidebar

import { initializeApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// 🔒 These values go in .env.local (never commit to GitHub!)
// Create a file called .env.local in your project root with these values
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

// 📚 LESSON: `getApps().length === 0` prevents re-initializing Firebase
// in Next.js, which renders components multiple times during development.
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]

// Firestore = the database where appointments will be stored
export const db = getFirestore(app)

// Analytics loaded dynamically to avoid SSR crash (firebase/analytics uses browser globals)
export const getAnalyticsInstance = async () => {
  const { getAnalytics, isSupported } = await import('firebase/analytics')
  if (await isSupported()) {
    return getAnalytics(app)
  }
  return null
}

export default app
