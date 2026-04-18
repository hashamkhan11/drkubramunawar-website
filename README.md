# Zahra Dermatologist Website
**Dr. Kubra Munawar | Faisalabad**

A production-ready, SEO-focused Next.js 14 + Firebase website for a dermatology clinic.

---

## 🚀 Quick Start

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Set Up Firebase
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click **"Add project"** → Name it `zahra-dermatology`
3. Enable **Google Analytics** (recommended)
4. Click **"Add app"** → Choose **Web** icon `</>`
5. Copy your Firebase config

### Step 3: Configure Environment Variables
```bash
# Copy the example file
cp .env.local.example .env.local

# Open .env.local and paste your Firebase config values
```

### Step 4: Enable Firestore Database
1. In Firebase Console → Left sidebar → **"Firestore Database"**
2. Click **"Create database"**
3. Choose **"Start in production mode"**
4. Select a region (asia-south1 = Mumbai, closest to Pakistan)

### Step 5: Deploy Firestore Security Rules
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Deploy rules
firebase deploy --only firestore:rules
```

### Step 6: Run Development Server
```bash
npm run dev
# Visit http://localhost:3000
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout — SEO metadata, fonts, JSON-LD
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   ├── sitemap.ts          # Auto-generated sitemap.xml
│   ├── robots.ts           # Auto-generated robots.txt
│   ├── not-found.tsx       # Custom 404 page
│   ├── about/
│   │   └── page.tsx        # About Dr. Kubra (E-E-A-T page)
│   ├── treatments/
│   │   ├── page.tsx        # All treatments hub page
│   │   └── [slug]/
│   │       └── page.tsx    # Individual treatment pages (dynamic)
│   └── contact/
│       └── page.tsx        # Appointment booking form (Firebase)
├── components/
│   ├── Navbar.tsx          # Responsive navigation
│   ├── Footer.tsx          # Footer with NAP info (local SEO)
│   └── WhatsAppButton.tsx  # Floating WhatsApp CTA
└── lib/
    ├── firebase.ts         # Firebase connection
    └── treatments.ts       # All treatment data (central source of truth)
```

---

## 🔍 SEO Strategy Implemented

### On-Page SEO
- ✅ Unique `<title>` and `<meta description>` for every page
- ✅ Semantic HTML: H1 → H2 → H3 hierarchy on all pages
- ✅ Target keywords in H1, H2, URL slugs, and meta tags
- ✅ Image `alt` attributes (add when you upload real photos)

### Technical SEO
- ✅ Server-Side Rendering (Google crawls complete HTML)
- ✅ Auto-generated `sitemap.xml` with all 16+ pages
- ✅ `robots.txt` configured
- ✅ Canonical URLs on every page
- ✅ Open Graph tags (WhatsApp/Facebook previews)
- ✅ Mobile-responsive (Google mobile-first indexing)
- ✅ Next.js font optimization (zero layout shift)

### Local SEO
- ✅ LocalBusiness + MedicalBusiness Schema markup (JSON-LD)
- ✅ NAP consistency (Name, Address, Phone) in footer
- ✅ Google Maps embed on homepage and contact page
- ✅ Opening hours in Schema and footer
- ✅ City name ("Faisalabad") in titles, URLs, and content

### Content SEO (E-E-A-T for Medical Sites)
- ✅ Doctor bio page (Expertise)
- ✅ Treatment FAQ sections with FAQ Schema (People Also Ask)
- ✅ Detailed treatment descriptions with keywords
- ✅ Patient reviews section with Review Schema

### Target Keywords
| Keyword | Target Page |
|---------|-------------|
| dermatologist Faisalabad | Homepage |
| exosomes treatment Faisalabad | /treatments/exosomes-treatment-faisalabad |
| PRP hair treatment Faisalabad | /treatments/prp-hair-treatment-faisalabad |
| HydraFacial Faisalabad | /treatments/hydrafacial-faisalabad |
| acne treatment Faisalabad | /treatments/acne-treatment-faisalabad |
| skin specialist Faisalabad | Homepage + About |
| Dr Kubra Munawar | About page |

---

## 🌐 Deployment on Vercel (Free)

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/zahra-dermatology.git
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) → Sign up with GitHub
2. Click **"New Project"** → Import your GitHub repo
3. In **"Environment Variables"**, add all variables from `.env.local`
4. Click **"Deploy"**
5. Get a free `.vercel.app` URL instantly

### Step 3: Add Custom Domain
1. Buy domain: `zahradermafaisalabad.com` (from Namecheap ~$10/year)
2. In Vercel → Your Project → **"Domains"** → Add your domain
3. Update DNS records as shown by Vercel

---

## 📊 After Launch Checklist

- [ ] Submit to Google Search Console
- [ ] Submit sitemap: `https://yourdomain.com/sitemap.xml`
- [ ] Set up Google Business Profile (if not done)
- [ ] Ensure clinic name/address on Google matches website EXACTLY
- [ ] Add real photos of Dr. Kubra and clinic
- [ ] Get 5-star Google reviews from patients (HUGE local SEO factor)
- [ ] Set up Firebase Analytics to track traffic

---

## 📞 Clinic Contact Info (for reference)
- **Clinic:** Zahra Dermatologist / Zahra Physiotherapy & Aesthetics
- **Doctor:** Dr. Kubra Munawar
- **Address:** Madni Chowk, near Quetta Shama Hotel, Block A Samanabad, Faisalabad, 38000
- **Phone:** 0304 706 4092
- **WhatsApp:** 0324 987 4690
- **Hours:** Daily 2:00 PM – 10:00 PM
- **Instagram:** [@zahra_physiotherapy_aesthetics](https://www.instagram.com/zahra_physiotherapy_aesthetics)
