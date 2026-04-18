// 📚 LESSON: Centralizing data in one file means:
// 1. Change a treatment name in ONE place, updates everywhere
// 2. Easy to add new treatments
// 3. TypeScript keeps you from making typos

export interface Treatment {
  id: string
  slug: string          // URL-friendly name (used in /treatments/[slug])
  name: string
  tagline: string       // Short hook for cards
  description: string   // Full description (for SEO meta description)
  benefits: string[]
  duration: string
  sessions: string
  icon: string          // Emoji icon for visual appeal
  category: 'hair' | 'skin' | 'body' | 'laser'
  featured: boolean     // Show on homepage?
  keywords: string[]    // SEO keywords specific to this treatment
}

export const treatments: Treatment[] = [
  // ⭐ FEATURED: High-demand keyword target
  {
    id: 'hair-exosomes',
    slug: 'exosomes-treatment-faisalabad',
    name: 'Exosomes Hair Treatment',
    tagline: 'Next-gen stem cell therapy for hair regrowth',
    description:
      'Exosomes hair treatment is the most advanced hair restoration therapy available in Faisalabad. Exosomes are nano-sized vesicles derived from stem cells that deliver powerful growth signals directly to hair follicles, stimulating new hair growth and reversing thinning.',
    benefits: [
      'Stimulates dormant hair follicles',
      'Reduces hair shedding within 4-6 weeks',
      'Improves hair density and thickness',
      'Natural, non-surgical approach',
      'No downtime required',
    ],
    duration: '45-60 minutes',
    sessions: '3-6 sessions recommended',
    icon: '✦',
    category: 'hair',
    featured: true,
    keywords: [
      'exosomes treatment Faisalabad',
      'hair exosomes Faisalabad',
      'exosome therapy hair loss',
      'advanced hair regrowth Faisalabad',
    ],
  },
  // ⭐ FEATURED: Second major keyword target
  {
    id: 'prp-hair',
    slug: 'prp-hair-treatment-faisalabad',
    name: 'PRP Hair Therapy',
    tagline: 'Platelet-rich plasma to awaken your hair follicles',
    description:
      'PRP (Platelet-Rich Plasma) hair treatment uses your own blood\'s growth factors to stimulate hair regrowth. A proven, natural solution for hair thinning, alopecia, and patchy hair loss in men and women in Faisalabad.',
    benefits: [
      'Uses your own natural growth factors',
      'Clinically proven for androgenetic alopecia',
      'Reduces hair fall significantly',
      'Safe with no allergic reactions',
      'Suitable for both men and women',
    ],
    duration: '60-75 minutes',
    sessions: '3-4 sessions, monthly intervals',
    icon: '◈',
    category: 'hair',
    featured: true,
    keywords: [
      'PRP hair treatment Faisalabad',
      'platelet rich plasma hair Faisalabad',
      'hair PRP Faisalabad',
      'hair loss solution Faisalabad',
    ],
  },
  {
    id: 'hydrafacial',
    slug: 'hydrafacial-faisalabad',
    name: 'HydraFacial',
    tagline: 'Deep cleanse, extract & hydrate in one session',
    description:
      'HydraFacial is a multi-step facial treatment that cleanses, exfoliates, extracts impurities and infuses skin with nourishing serums. Suitable for all skin types, it delivers instant glow with zero downtime.',
    benefits: [
      'Instant visible glow after one session',
      'Removes blackheads and whiteheads',
      'Deeply hydrates and plumps skin',
      'No redness or downtime',
      'Suitable for sensitive skin',
    ],
    duration: '60-90 minutes',
    sessions: 'Monthly maintenance recommended',
    icon: '◇',
    category: 'skin',
    featured: true,
    keywords: [
      'HydraFacial Faisalabad',
      'hydrafacial treatment Faisalabad',
      'facial treatment Faisalabad',
      'skin brightening Faisalabad',
    ],
  },
  {
    id: 'acne-treatment',
    slug: 'acne-treatment-faisalabad',
    name: 'Acne Treatment',
    tagline: 'Clear skin, restored confidence',
    description:
      'Comprehensive acne treatment combining medical-grade chemical peels, LED therapy, and prescription-based care to eliminate active acne and reduce acne scars. Effective for all types of acne in Faisalabad.',
    benefits: [
      'Targets active acne and cysts',
      'Reduces post-acne dark marks',
      'Controls sebum (oil) production',
      'Prevents future breakouts',
      'Suitable for teens and adults',
    ],
    duration: '30-45 minutes',
    sessions: '4-6 sessions for best results',
    icon: '○',
    category: 'skin',
    featured: true,
    keywords: [
      'acne treatment Faisalabad',
      'acne specialist Faisalabad',
      'pimple treatment Faisalabad',
      'acne scar removal Faisalabad',
    ],
  },
  {
    id: 'whitening-drip',
    slug: 'whitening-drip-faisalabad',
    name: 'Whitening Drip (IV Glutathione)',
    tagline: 'Glow from the inside out',
    description:
      'IV Glutathione whitening drip delivers powerful antioxidants directly into your bloodstream for skin brightening, anti-aging, and detoxification. Experience full-body glow and improved skin tone in Faisalabad.',
    benefits: [
      'Visible skin brightening from inside',
      'Powerful antioxidant detoxification',
      'Reduces hyperpigmentation',
      'Anti-aging benefits',
      'Boosts immunity',
    ],
    duration: '30-45 minutes per session',
    sessions: '6-8 sessions for optimal results',
    icon: '✧',
    category: 'body',
    featured: true,
    keywords: [
      'whitening drip Faisalabad',
      'IV glutathione Faisalabad',
      'skin whitening injection Faisalabad',
      'glutathione drip Faisalabad',
    ],
  },
  {
    id: 'mesotherapy',
    slug: 'mesotherapy-faisalabad',
    name: 'Mesotherapy',
    tagline: 'Microinjections of youth directly into skin',
    description:
      'Mesotherapy involves microinjections of vitamins, enzymes, hormones, and plant extracts to rejuvenate the face and tighten skin. Effective for hair loss, skin rejuvenation and fat reduction.',
    benefits: [
      'Tightens loose and sagging skin',
      'Reduces fine lines and wrinkles',
      'Stimulates collagen production',
      'Treats hair loss (scalp mesotherapy)',
      'Minimal downtime',
    ],
    duration: '30-60 minutes',
    sessions: '4-8 sessions recommended',
    icon: '⟡',
    category: 'skin',
    featured: false,
    keywords: [
      'mesotherapy Faisalabad',
      'skin mesotherapy Faisalabad',
      'hair mesotherapy Faisalabad',
    ],
  },
  {
    id: 'carbon-laser',
    slug: 'carbon-laser-facial-faisalabad',
    name: 'Carbon Laser Facial',
    tagline: 'Hollywood glow, Faisalabad price',
    description:
      'The Carbon Laser Facial (Hollywood Peel) uses a carbon mask and laser to deeply clean pores, reduce oiliness, treat acne and give instant luminosity. Popular for weddings and events.',
    benefits: [
      'Immediate skin brightening',
      'Tightens enlarged pores',
      'Controls oily skin',
      'No downtime whatsoever',
      'Popular pre-event treatment',
    ],
    duration: '30-45 minutes',
    sessions: '4-6 sessions, or single for events',
    icon: '◉',
    category: 'laser',
    featured: true,
    keywords: [
      'carbon laser Faisalabad',
      'carbon facial Faisalabad',
      'Hollywood peel Faisalabad',
      'laser facial Faisalabad',
    ],
  },
  {
    id: 'micro-needling',
    slug: 'microneedling-faisalabad',
    name: 'Micro Needling',
    tagline: 'Trigger your skin\'s natural collagen factory',
    description:
      'Micro needling (dermarolling) creates controlled micro-injuries to stimulate collagen and elastin production. Effective for acne scars, large pores, fine lines and stretch marks.',
    benefits: [
      'Reduces acne scars dramatically',
      'Smooths skin texture',
      'Tightens pores',
      'Stimulates natural collagen',
      'Works on face, neck, scalp',
    ],
    duration: '45-60 minutes',
    sessions: '3-6 sessions, 4-6 weeks apart',
    icon: '⬡',
    category: 'skin',
    featured: true,
    keywords: [
      'microneedling Faisalabad',
      'dermaroller Faisalabad',
      'collagen induction Faisalabad',
      'acne scar treatment Faisalabad',
    ],
  },
  {
    id: 'hair-laser',
    slug: 'laser-hair-removal-faisalabad',
    name: 'Laser Hair Removal',
    tagline: 'Permanent smoothness for face, arms, legs & full body',
    description:
      'Laser hair removal at Dr. Kubra Munawar Aesthetics covers full body, face, arms, underarms, legs, and bikini area. Advanced laser technology targets hair follicles precisely with minimal discomfort and long-lasting results — for all skin tones.',
    benefits: [
      'Full body, face, arms & legs coverage',
      'Permanent hair reduction after sessions',
      'Smooth, hair-free skin',
      'Safe for all skin tones',
      'No ingrown hairs or razor bumps',
    ],
    duration: '15-60 minutes (area dependent)',
    sessions: '6-8 sessions for permanent results',
    icon: '∿',
    category: 'laser',
    featured: true,
    keywords: [
      'laser hair removal Faisalabad',
      'full body laser hair removal Faisalabad',
      'face laser hair removal Faisalabad',
      'legs laser hair removal Faisalabad',
      'arm laser hair removal Faisalabad',
      'permanent hair removal Faisalabad',
    ],
  },
  {
    id: 'chemical-peel',
    slug: 'chemical-peel-faisalabad',
    name: 'Chemical Peel',
    tagline: 'Reveal fresher, brighter skin underneath',
    description:
      'Medical-grade chemical peels remove the outer layer of damaged skin, revealing smoother, more youthful skin. Effective for pigmentation, dullness, acne scars, and uneven skin tone.',
    benefits: [
      'Brightens dull, tired skin',
      'Reduces hyperpigmentation',
      'Evens out skin tone',
      'Reduces acne scars',
      'Multiple strengths available',
    ],
    duration: '30-45 minutes',
    sessions: '3-6 sessions recommended',
    icon: '◌',
    category: 'skin',
    featured: false,
    keywords: [
      'chemical peel Faisalabad',
      'skin peel Faisalabad',
      'glycolic peel Faisalabad',
      'skin resurfacing Faisalabad',
    ],
  },
  {
    id: 'dark-circles',
    slug: 'dark-circle-treatment-faisalabad',
    name: 'Dark Circle Treatment',
    tagline: 'Wake up looking refreshed every day',
    description:
      'Targeted treatments including PRP, fillers, and topical serums to reduce under-eye dark circles, puffiness, and hollowness. Customized approach based on the cause of your dark circles.',
    benefits: [
      'Lightens dark under-eye area',
      'Reduces puffiness and bags',
      'Long-lasting results',
      'Non-surgical approach',
      'Restores youthful eye area',
    ],
    duration: '30-45 minutes',
    sessions: '2-4 sessions',
    icon: '◎',
    category: 'skin',
    featured: false,
    keywords: [
      'dark circle treatment Faisalabad',
      'under eye treatment Faisalabad',
      'eye bags treatment Faisalabad',
    ],
  },
  {
    id: 'alopecia',
    slug: 'alopecia-areata-treatment-faisalabad',
    name: 'Alopecia Areata Treatment',
    tagline: 'Patchy hair loss, treated from the root',
    description:
      'Specialized treatment protocol for Alopecia Areata (patchy hair loss) combining PRP therapy, mesotherapy, and medical management. Dr. Kubra Munawar has extensive experience treating all forms of hair loss.',
    benefits: [
      'Targets root cause of patchy loss',
      'Combines PRP + mesotherapy',
      'Regrowth visible in 8-12 weeks',
      'Prevents spread of hair loss',
      'Medically supervised',
    ],
    duration: '45-60 minutes',
    sessions: '4-6 sessions minimum',
    icon: '◈',
    category: 'hair',
    featured: false,
    keywords: [
      'alopecia areata treatment Faisalabad',
      'patchy hair loss treatment Faisalabad',
      'hair regrowth Faisalabad',
    ],
  },
  {
    id: 'mole-removal',
    slug: 'mole-removal-faisalabad',
    name: 'Mole Removal',
    tagline: 'Safe, scar-minimizing mole removal',
    description:
      'Professional mole removal in Faisalabad using advanced laser or surgical techniques. Dr. Kubra Munawar ensures safe removal with minimal scarring for both cosmetic and medical concerns.',
    benefits: [
      'Safe removal with minimal scarring',
      'Laser and surgical options available',
      'Suitable for face and body moles',
      'Quick procedure, fast recovery',
      'Medically evaluated before removal',
    ],
    duration: '15-30 minutes',
    sessions: '1-2 sessions',
    icon: '◌',
    category: 'skin',
    featured: false,
    keywords: [
      'mole removal Faisalabad',
      'laser mole removal Faisalabad',
      'skin tag removal Faisalabad',
    ],
  },
  {
    id: 'dark-lips',
    slug: 'dark-lips-treatment-faisalabad',
    name: 'Dark Lips Treatment',
    tagline: 'Restore your lips natural pink tone',
    description:
      'Dark lips treatment at Dr. Kubra Munawar Aesthetics targets pigmentation in the lips caused by sun exposure, smoking, or hormonal changes. Laser and topical treatments restore a natural, rosy lip tone.',
    benefits: [
      'Lightens dark and pigmented lips',
      'Restores natural pink tone',
      'Safe laser and topical options',
      'Visible results within sessions',
      'No long downtime',
    ],
    duration: '20-30 minutes',
    sessions: '3-6 sessions recommended',
    icon: '◎',
    category: 'skin',
    featured: false,
    keywords: [
      'dark lips treatment Faisalabad',
      'lip pigmentation treatment Faisalabad',
      'pink lips treatment Faisalabad',
    ],
  },
  {
    id: 'open-pores',
    slug: 'open-pores-treatment-faisalabad',
    name: 'Open Pores Treatment',
    tagline: 'Minimize pores for porcelain-smooth skin',
    description:
      'Open pores treatment in Faisalabad using carbon laser facial, microneedling, and chemical peels to tighten and minimize enlarged pores. Results in smoother, refined skin texture.',
    benefits: [
      'Visibly reduces pore size',
      'Smooths and refines skin texture',
      'Controls excess oil production',
      'Prevents blackheads and breakouts',
      'Long-lasting results with maintenance',
    ],
    duration: '30-45 minutes',
    sessions: '3-6 sessions recommended',
    icon: '⬡',
    category: 'skin',
    featured: false,
    keywords: [
      'open pores treatment Faisalabad',
      'large pores treatment Faisalabad',
      'pore minimizing treatment Faisalabad',
    ],
  },
  {
    id: 'skin-allergy',
    slug: 'skin-allergy-treatment-faisalabad',
    name: 'Skin Allergy Treatment',
    tagline: 'Expert diagnosis and relief from skin allergies',
    description:
      'Dr. Kubra Munawar provides expert diagnosis and treatment for skin allergies including contact dermatitis, urticaria (hives), eczema, and fungal infections in Faisalabad. Medically managed for lasting relief.',
    benefits: [
      'Accurate allergy diagnosis',
      'Treatment for rash, hives, eczema',
      'Fungal infection management',
      'Prescription-based medical care',
      'Prevents recurrence',
    ],
    duration: '20-30 minutes (consultation)',
    sessions: 'Depends on condition severity',
    icon: '○',
    category: 'skin',
    featured: false,
    keywords: [
      'skin allergy treatment Faisalabad',
      'skin rash treatment Faisalabad',
      'fungal infection skin Faisalabad',
      'eczema treatment Faisalabad',
      'urticaria treatment Faisalabad',
    ],
  },
  {
    id: 'blackhead-whitehead',
    slug: 'blackhead-whitehead-treatment-faisalabad',
    name: 'Blackhead & Whitehead Treatment',
    tagline: 'Clear congested pores for clean, fresh skin',
    description:
      'Blackhead and whitehead removal at Dr. Kubra Munawar Aesthetics uses HydraFacial extraction, chemical peels, and deep-cleansing treatments to clear clogged pores and prevent new comedones from forming.',
    benefits: [
      'Deep extraction of blackheads and whiteheads',
      'Unclogs and cleanses pores',
      'Reduces future comedone formation',
      'Improves overall skin clarity',
      'No harsh squeezing or scarring',
    ],
    duration: '45-60 minutes',
    sessions: '2-4 sessions recommended',
    icon: '◇',
    category: 'skin',
    featured: false,
    keywords: [
      'blackhead removal Faisalabad',
      'whitehead removal Faisalabad',
      'comedone treatment Faisalabad',
      'pore cleansing Faisalabad',
    ],
  },
]

export const featuredTreatments = treatments.filter((t) => t.featured)
export const getTreatmentBySlug = (slug: string) =>
  treatments.find((t) => t.slug === slug)
