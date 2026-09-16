export interface Scene {
  sceneNumber: string;
  title: string;
  duration: string;
  camera: string;
  purpose: string;
  description: string;
  thumbnailUrl: string;
}

export interface CreativeStep {
  step: string;
  title: string;
  description: string;
  assetUrl?: string;
}

export interface BeforeAfter {
  rawProductImg: string;
  aiConceptImg: string;
  finalAdVideo: string;
}

export interface Approach {
  visualDirection: string;
  background: string;
  lighting: string;
  character: string;
  productStyling: string;
  cameraMovement: string;
  storytelling: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  client: string;
  isSpec: boolean;
  industry:
    | "JEWELLERY"
    | "FASHION"
    | "SHOES"
    | "FITNESS"
    | "BEAUTY"
    | "SKINCARE"
    | "WATCHES"
    | "FOOD"
    | "TECH"
    | "LUXURY"
    | "SOCIAL ADS"
    | "PRODUCT FILMS"
    | "AI UGC";
  category: string;
  service: string;
  year: string;
  format: "9:16" | "16:9" | "4:5";
  creativeAngle: string;
  videoUrl: string;
  thumbnailUrl: string;
  featured: boolean;
  status: "published" | "draft";
  order: number;
  overview: string;
  theIdea: string;
  theApproach: Approach;
  theResult: string;
  creativeBreakdown: CreativeStep[];
  scenes: Scene[];
  beforeAfter: BeforeAfter;
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  brand: string;
  product: string;
  industry: string;
  serviceNeeded: string;
  budgetRange: string;
  message: string;
  createdAt: string;
}

export const INITIAL_PROJECTS: Project[] = [
  {
    "id": "proj-fashion-01",
    "slug": "haute-couture-black-tunic",
    "title": "HAUTE COUTURE BLACK TUNIC",
    "tagline": "Runway couture motion and luxury fabric drape synthesis.",
    "client": "EDITORIAL ATELIER",
    "isSpec": true,
    "industry": "FASHION",
    "category": "High Fashion & Runway Editorial",
    "service": "AI Video Ads",
    "year": "2026",
    "format": "9:16",
    "creativeAngle": "Fluid Fabric Dynamics + High Fashion Runway Choreography",
    "videoUrl": "/videos/industry-fashion.mp4",
    "thumbnailUrl": "/videos/industry-fashion.jpg",
    "featured": true,
    "status": "published",
    "order": 1,
    "overview": "A high-impact editorial fashion commercial designed for luxury apparel houses seeking runway-grade visual elegance.",
    "theIdea": "Showcasing the structural silhouette and physical weight of luxury textile through generative movement.",
    "theApproach": {
      "visualDirection": "Minimalist luxury runway lighting with deep obsidian contrast.",
      "background": "Architectural runway hall with subtle floor reflections.",
      "lighting": "Precision key light sculpting the contour of the garment.",
      "character": "Editorial model walking in slow fluid cadence.",
      "productStyling": "Bespoke black tunic with razor-sharp geometric cuts.",
      "cameraMovement": "Tracking pedestal dolly following the motion of the drape.",
      "storytelling": "From quiet tension to striking couture revelation."
    },
    "theResult": "Prestige brand engagement and high click-through performance on paid social feeds.",
    "creativeBreakdown": [
      {
        "step": "01",
        "title": "GARMENT CAD & TEXTILE MAPPING",
        "description": "Texture and fabric weight analysis."
      },
      {
        "step": "02",
        "title": "LIGHTING & RUNWAY CHOREOGRAPHY",
        "description": "Editorial lighting setup."
      },
      {
        "step": "03",
        "title": "GENERATIVE FABRIC SIMULATION",
        "description": "Fluid physics synthesis."
      },
      {
        "step": "04",
        "title": "FINAL 9:16 MASTER",
        "description": "Color-graded high-fashion commercial."
      }
    ],
    "scenes": [
      {
        "sceneNumber": "01",
        "title": "Runway Hook",
        "duration": "0:00 - 0:05",
        "camera": "Smooth tracking dolly",
        "purpose": "Scroll stopping luxury hook",
        "description": "Fabric floats into frame revealing silhouette.",
        "thumbnailUrl": "/videos/industry-fashion.jpg"
      }
    ],
    "beforeAfter": {
      "rawProductImg": "/videos/industry-fashion.jpg",
      "aiConceptImg": "/videos/industry-fashion.jpg",
      "finalAdVideo": "/videos/industry-fashion.mp4"
    }
  },
  {
    "id": "proj-fashion-02",
    "slug": "streetwear-drip-campaign",
    "title": "STREETWEAR DRIP CAMPAIGN",
    "tagline": "Fast-paced urban editorial designed for maximum mobile feed retention.",
    "client": "KINETIC APPAREL",
    "isSpec": true,
    "industry": "FASHION",
    "category": "Streetwear & Urban Apparel",
    "service": "AI Video Ads",
    "year": "2026",
    "format": "9:16",
    "creativeAngle": "High Shutter Urban Movement + Gritty High-Contrast Grade",
    "videoUrl": "/videos/demo-streetwear-fashion.mp4",
    "thumbnailUrl": "/videos/demo-streetwear-fashion.jpg",
    "featured": true,
    "status": "published",
    "order": 2,
    "overview": "A high-energy 9:16 video ad engineered for Gen-Z and millennial streetwear audiences on TikTok and Instagram Reels.",
    "theIdea": "Combining urban grit with hyper-stylized camera motion to communicate authenticity and cultural edge.",
    "theApproach": {
      "visualDirection": "Modern neon-accented street styling with dynamic handheld energy.",
      "background": "Metropolitan dusk streetscape.",
      "lighting": "Ambient golden hour mixed with neon storefront reflections.",
      "character": "Authentic street model showcasing the fit in real-world motion.",
      "productStyling": "Oversized luxury streetwear hoodie and tailored utility pants.",
      "cameraMovement": "Rapid whip pans and rotational push-ins.",
      "storytelling": "Everyday street confidence transformed into cultural status."
    },
    "theResult": "3.8x higher average watch time compared to static lookbooks.",
    "creativeBreakdown": [
      {
        "step": "01",
        "title": "LOOKBOOK MOODBOARD",
        "description": "Urban streetwear visual curation."
      },
      {
        "step": "02",
        "title": "DYNAMIC MOTION PROMPTING",
        "description": "Generative street cinematography."
      },
      {
        "step": "03",
        "title": "BEAT-SYNCED AUDIO MASTER",
        "description": "Bass-heavy sound design export."
      }
    ],
    "scenes": [
      {
        "sceneNumber": "01",
        "title": "Street Hook",
        "duration": "0:00 - 0:04",
        "camera": "Rotational push",
        "purpose": "Immediate feed hook",
        "description": "Model steps towards lens in sharp dynamic motion.",
        "thumbnailUrl": "/videos/demo-streetwear-fashion.jpg"
      }
    ],
    "beforeAfter": {
      "rawProductImg": "/videos/demo-streetwear-fashion.jpg",
      "aiConceptImg": "/videos/demo-streetwear-fashion.jpg",
      "finalAdVideo": "/videos/demo-streetwear-fashion.mp4"
    }
  },
  {
    "id": "proj-jewel-01",
    "slug": "aura-gold-necklace",
    "title": "AURA GOLD NECKLACE",
    "tagline": "Haute joaillerie diamond facet reflection and luxury unboxing ad.",
    "client": "AURUM ATELIER",
    "isSpec": true,
    "industry": "JEWELLERY",
    "category": "Haute Joaillerie & Fine Metals",
    "service": "AI Video Ads",
    "year": "2026",
    "format": "9:16",
    "creativeAngle": "Microscopic Specular Reflections + Tactile Luxury Presentation",
    "videoUrl": "/videos/industry-jewellery.mp4",
    "thumbnailUrl": "/videos/industry-jewellery.jpg",
    "featured": true,
    "status": "published",
    "order": 3,
    "overview": "Fine gold pendant reveal captured with macro specular precision to make fine jewelry look breathtaking and premium on mobile screens.",
    "theIdea": "Highlighting the pristine polish and diamond pav\u00e9 sparkle under slowly rotating studio illumination.",
    "theApproach": {
      "visualDirection": "Warm chiaroscuro with razor-sharp golden caustics and prismatic sparkles.",
      "background": "Velvet jewelry plinth with soft specular ambient falloff.",
      "lighting": "Twin fiber-optic pinpoint beams tracing the gold curves.",
      "character": "Prestige fine jewelry showcase.",
      "productStyling": "24-karat handcrafted gold necklace set with brilliant-cut stones.",
      "cameraMovement": "Slow gliding orbital macro lens.",
      "storytelling": "From raw luxury to an emotional heirloom."
    },
    "theResult": "Instant luxury credibility that drives direct purchases for fine jewelry brands.",
    "creativeBreakdown": [
      {
        "step": "01",
        "title": "JEWELRY CAD SPECIFICATION",
        "description": "Facet curvature mapping."
      },
      {
        "step": "02",
        "title": "PRISMATIC LIGHTING RIG",
        "description": "Virtual gemstone dispersion setup."
      },
      {
        "step": "03",
        "title": "FINAL 9:16 RETINA MASTER",
        "description": "4K diamond sparkle grade."
      }
    ],
    "scenes": [
      {
        "sceneNumber": "01",
        "title": "Sparkle Reveal",
        "duration": "0:00 - 0:05",
        "camera": "Macro orbit",
        "purpose": "High ticket luxury prestige",
        "description": "Prismatic dispersion catches the camera.",
        "thumbnailUrl": "/videos/industry-jewellery.jpg"
      }
    ],
    "beforeAfter": {
      "rawProductImg": "/videos/industry-jewellery.jpg",
      "aiConceptImg": "/videos/industry-jewellery.jpg",
      "finalAdVideo": "/videos/industry-jewellery.mp4"
    }
  },
  {
    "id": "proj-jewel-02",
    "slug": "royal-gift-box-unboxing",
    "title": "ROYAL GIFT BOX UNBOXING",
    "tagline": "Slow tactile velvet reveal and fine gold pendant illumination.",
    "client": "ROYAL GEMS",
    "isSpec": true,
    "industry": "JEWELLERY",
    "category": "Tactile Jewellery Unboxing",
    "service": "AI Video Ads",
    "year": "2026",
    "format": "9:16",
    "creativeAngle": "Sensory Tactile Unboxing + Pristine Gold Reflections",
    "videoUrl": "/videos/demo-necklace-giftbox.mp4",
    "thumbnailUrl": "/videos/demo-necklace-giftbox.jpg",
    "featured": true,
    "status": "published",
    "order": 4,
    "overview": "Capturing the sensory anticipation of unboxing a luxury gift to trigger dopamine and impulse gifting purchases during festive and wedding seasons.",
    "theIdea": "Smooth hands gently opening a royal velvet box to reveal the glittering treasure inside.",
    "theApproach": {
      "visualDirection": "Intimate luxury tactile mood with soft velvet texture and warm rim highlights.",
      "background": "Warm editorial interior bedroom set.",
      "lighting": "Soft morning light casting golden sheen across hands and box.",
      "character": "Manicured hands interacting with gift box.",
      "productStyling": "Deep emerald green velvet box with satin ribbon.",
      "cameraMovement": "Top-down 45-degree slow push.",
      "storytelling": "The supreme joy of giving and receiving luxury."
    },
    "theResult": "High emotional resonance driving 4.2x higher add-to-cart rates.",
    "creativeBreakdown": [
      {
        "step": "01",
        "title": "UNBOXING SCRIPT",
        "description": "Sensory pacing and reveal."
      },
      {
        "step": "02",
        "title": "PHYSICAL TEXTURE SYNTHESIS",
        "description": "Velvet and satin simulation."
      },
      {
        "step": "03",
        "title": "SOUND-ENRICHED MASTER",
        "description": "ASMR velvet opening sound design."
      }
    ],
    "scenes": [
      {
        "sceneNumber": "01",
        "title": "The Reveal",
        "duration": "0:00 - 0:06",
        "camera": "Gentle 45-degree tilt",
        "purpose": "Gifting impulse trigger",
        "description": "Box opens to reveal glowing pendant.",
        "thumbnailUrl": "/videos/demo-necklace-giftbox.jpg"
      }
    ],
    "beforeAfter": {
      "rawProductImg": "/videos/demo-necklace-giftbox.jpg",
      "aiConceptImg": "/videos/demo-necklace-giftbox.jpg",
      "finalAdVideo": "/videos/demo-necklace-giftbox.mp4"
    }
  },
  {
    "id": "proj-shoes-01",
    "slug": "hyper-sneaker-generation",
    "title": "HYPER SNEAKER GENERATION",
    "tagline": "Aerodynamic sole explosion and fluid dynamic footwear commercial.",
    "client": "STRATUS KICKS",
    "isSpec": true,
    "industry": "SHOES",
    "category": "Footwear & Sneaker Culture",
    "service": "AI Video Ads",
    "year": "2026",
    "format": "9:16",
    "creativeAngle": "Exploded Sole Architecture + High-Impact Athletic Kineticism",
    "videoUrl": "/videos/industry-shoes.mp4",
    "thumbnailUrl": "/videos/industry-shoes.jpg",
    "featured": true,
    "status": "published",
    "order": 5,
    "overview": "A high-octane sneaker commercial engineered for D2C footwear brands to showcase sole cushioning technology, breathable knit, and lifestyle appeal.",
    "theIdea": "The sneaker floats and compresses in mid-air with volumetric smoke and dynamic neon energy.",
    "theApproach": {
      "visualDirection": "Futuristic streetwear studio with dynamic volumetric atmospheric lighting.",
      "background": "Concrete minimalist athletic vault with subtle neon rim.",
      "lighting": "Dual electric blue and warm white high-speed strobe effect.",
      "character": "High-performance footwear hero.",
      "productStyling": "Next-gen carbon plate running silhouette with textured knit.",
      "cameraMovement": "Dynamic 360-degree rotational spin transitioning to sole macro.",
      "storytelling": "Defying gravity through engineered athletic innovation."
    },
    "theResult": "Elevates standard D2C sneakers into high-status performance footwear.",
    "creativeBreakdown": [
      {
        "step": "01",
        "title": "SNEAKER 3D REFERENCE",
        "description": "Sole geometry and tread detail."
      },
      {
        "step": "02",
        "title": "EXPLODED MOTION RIG",
        "description": "Mid-air levitation physics."
      },
      {
        "step": "03",
        "title": "HIGH-ENERGY SOUND DESIGN",
        "description": "Thumping bass and air swoosh effects."
      }
    ],
    "scenes": [
      {
        "sceneNumber": "01",
        "title": "Sole Impact",
        "duration": "0:00 - 0:04",
        "camera": "360 spin",
        "purpose": "Instant visual hook",
        "description": "Sneaker rotates mid-air with glowing energy.",
        "thumbnailUrl": "/videos/industry-shoes.jpg"
      }
    ],
    "beforeAfter": {
      "rawProductImg": "/videos/industry-shoes.jpg",
      "aiConceptImg": "/videos/industry-shoes.jpg",
      "finalAdVideo": "/videos/industry-shoes.mp4"
    }
  },
  {
    "id": "proj-shoes-02",
    "slug": "hyperlight-sneaker-motion",
    "title": "HYPERLIGHT SNEAKER MOTION",
    "tagline": "High-speed kinetic footwear performance in dynamic commercial flow.",
    "client": "HYPERLIGHT LABS",
    "isSpec": true,
    "industry": "SHOES",
    "category": "Performance Athletic Footwear",
    "service": "AI Video Ads",
    "year": "2026",
    "format": "9:16",
    "creativeAngle": "High Shutter Sprint Motion + Urban Athletics Noir",
    "videoUrl": "/videos/demo-sneaker-generation.mp4",
    "thumbnailUrl": "/videos/demo-sneaker-generation.jpg",
    "featured": true,
    "status": "published",
    "order": 6,
    "overview": "Designed to communicate speed, lightweight agility, and premium aesthetic execution for performance runners and lifestyle hypebeasts.",
    "theIdea": "Crisp cuts highlighting the aerodynamic curve, outsole traction, and featherlight construction.",
    "theApproach": {
      "visualDirection": "Clean editorial high-contrast runner aesthetic.",
      "background": "Wet asphalt reflections under metropolitan lights.",
      "lighting": "Sharp edge rim highlights cutting through atmospheric mist.",
      "character": "Kinetic athlete in motion.",
      "productStyling": "Monochrome high-top trainer with reflective accents.",
      "cameraMovement": "Low-angle tracking dolly following foot-strike.",
      "storytelling": "Unstoppable momentum from the first stride."
    },
    "theResult": "Exceptional conversion rates on Instagram Story and Reel ad placements.",
    "creativeBreakdown": [
      {
        "step": "01",
        "title": "ATHLETIC MOVEMENT SCRIPT",
        "description": "Biomechanical pacing study."
      },
      {
        "step": "02",
        "title": "KINETIC AI GENERATION",
        "description": "High-speed diffusion rendering."
      },
      {
        "step": "03",
        "title": "DELIVERY MASTER",
        "description": "Vertical 9:16 export with energetic rhythm."
      }
    ],
    "scenes": [
      {
        "sceneNumber": "01",
        "title": "Foot strike",
        "duration": "0:00 - 0:05",
        "camera": "Ground level dolly",
        "purpose": "Performance demonstration",
        "description": "Shoe flexes under athletic compression.",
        "thumbnailUrl": "/videos/demo-sneaker-generation.jpg"
      }
    ],
    "beforeAfter": {
      "rawProductImg": "/videos/demo-sneaker-generation.jpg",
      "aiConceptImg": "/videos/demo-sneaker-generation.jpg",
      "finalAdVideo": "/videos/demo-sneaker-generation.mp4"
    }
  },
  {
    "id": "proj-ugc-01",
    "slug": "authentic-direct-response-ugc",
    "title": "AUTHENTIC DIRECT RESPONSE UGC",
    "tagline": "High-converting selfie-style AI UGC creative with thumb-stopping hook.",
    "client": "CREATOR PERFORMANCE",
    "isSpec": true,
    "industry": "AI UGC",
    "category": "Authentic Direct-Response UGC",
    "service": "AI UGC",
    "year": "2026",
    "format": "9:16",
    "creativeAngle": "Relatable Human Hook + Real-World Product Demonstration",
    "videoUrl": "/videos/industry-ai-ugc.mp4",
    "thumbnailUrl": "/videos/industry-ai-ugc.jpg",
    "featured": true,
    "status": "published",
    "order": 7,
    "overview": "A hyper-authentic AI-generated UGC ad designed to look and feel like genuine creator content that effortlessly blends into organic social feeds.",
    "theIdea": "Bypassing ad skepticism with natural conversational body language and direct problem-solving product proof.",
    "theApproach": {
      "visualDirection": "Warm lifestyle bedroom / home setting with natural daylight.",
      "background": "Relatable cozy domestic environment.",
      "lighting": "Soft natural ring light with authentic window spill.",
      "character": "Enthusiastic genuine creator speaking directly to camera.",
      "productStyling": "Held naturally in hand with clear logo visibility.",
      "cameraMovement": "Slight handheld organic breathing motion.",
      "storytelling": "From frustration with ordinary products to discovering the solution."
    },
    "theResult": "Up to 3.2x higher ROAS compared to traditional studio brand ads.",
    "creativeBreakdown": [
      {
        "step": "01",
        "title": "PAIN POINT HOOK SCRIPT",
        "description": "Conversion psychology framework."
      },
      {
        "step": "02",
        "title": "AI CREATOR SYNTHESIS",
        "description": "Photorealistic facial & voice generation."
      },
      {
        "step": "03",
        "title": "VIRAL EDIT & CAPTIONS",
        "description": "High-retention social captions overlay."
      }
    ],
    "scenes": [
      {
        "sceneNumber": "01",
        "title": "3-Sec Hook",
        "duration": "0:00 - 0:03",
        "camera": "Front facing selfie",
        "purpose": "Stop feed scroll instantly",
        "description": "Creator leans in with urgent relatable insight.",
        "thumbnailUrl": "/videos/industry-ai-ugc.jpg"
      }
    ],
    "beforeAfter": {
      "rawProductImg": "/videos/industry-ai-ugc.jpg",
      "aiConceptImg": "/videos/industry-ai-ugc.jpg",
      "finalAdVideo": "/videos/industry-ai-ugc.mp4"
    }
  },
  {
    "id": "proj-ugc-02",
    "slug": "viral-social-hook-ad",
    "title": "VIRAL SOCIAL HOOK AD",
    "tagline": "Engineered for TikTok and Reels feeds to maximize ROAS and CTR.",
    "client": "VIRAL LABS",
    "isSpec": true,
    "industry": "AI UGC",
    "category": "Social Media Ad Creative",
    "service": "AI UGC",
    "year": "2026",
    "format": "9:16",
    "creativeAngle": "Pattern Interrupt Opening + High Retention Pacing",
    "videoUrl": "/videos/demo-ad-0913.mp4",
    "thumbnailUrl": "/videos/demo-ad-0913.jpg",
    "featured": true,
    "status": "published",
    "order": 8,
    "overview": "Designed specifically to combat ad blindness. Uses visual pattern interruption in the first 2 seconds to hook casual scrollers into paying attention.",
    "theIdea": "An unexpected visual opening that leads seamlessly into an irresistible product showcase.",
    "theApproach": {
      "visualDirection": "Vibrant colorful social media visual pacing.",
      "background": "Modern creator studio workspace.",
      "lighting": "Crisp daylight with dynamic color pop.",
      "character": "Engaging creator delivering punchy value proposition.",
      "productStyling": "Hero unboxed demonstration.",
      "cameraMovement": "Snap zoom into macro detail.",
      "storytelling": "Rapid question and immediate visual answer."
    },
    "theResult": "Consistently achieves lower Cost Per Acquisition (CPA) on Meta & TikTok.",
    "creativeBreakdown": [
      {
        "step": "01",
        "title": "HOOK REPOSITORY",
        "description": "Testing 5 different opening angles."
      },
      {
        "step": "02",
        "title": "FAST-CUT PACING",
        "description": "Sub-1-second cut cadence."
      },
      {
        "step": "03",
        "title": "CTA RETENTION LOOP",
        "description": "Clear urgency to drive website visits."
      }
    ],
    "scenes": [
      {
        "sceneNumber": "01",
        "title": "Pattern Interrupt",
        "duration": "0:00 - 0:02",
        "camera": "Snap zoom",
        "purpose": "Shatter feed inertia",
        "description": "Surprising product action grabs viewer focus.",
        "thumbnailUrl": "/videos/demo-ad-0913.jpg"
      }
    ],
    "beforeAfter": {
      "rawProductImg": "/videos/demo-ad-0913.jpg",
      "aiConceptImg": "/videos/demo-ad-0913.jpg",
      "finalAdVideo": "/videos/demo-ad-0913.mp4"
    }
  },
  {
    "id": "proj-ugc-03",
    "slug": "ugc-performance-sprint",
    "title": "UGC PERFORMANCE SPRINT",
    "tagline": "Relatable human-centric product demonstration that drives purchase intent.",
    "client": "PERFORMANCE UGC",
    "isSpec": true,
    "industry": "AI UGC",
    "category": "Direct Response Social",
    "service": "AI UGC",
    "year": "2026",
    "format": "9:16",
    "creativeAngle": "Direct Product Benefit + Social Proof Testimonial Flow",
    "videoUrl": "/videos/demo-ad-0913-1.mp4",
    "thumbnailUrl": "/videos/demo-ad-0913-1.jpg",
    "featured": true,
    "status": "published",
    "order": 9,
    "overview": "Combining creator authenticity with commercial art direction so brands never look cheap while keeping direct response performance exceptionally high.",
    "theIdea": "Demonstrating how the product effortlessly solves everyday friction with cheerful authenticity.",
    "theApproach": {
      "visualDirection": "Clean modern aesthetic with authentic creator charm.",
      "background": "Aesthetic kitchen and living space.",
      "lighting": "Bright cheerful natural illumination.",
      "character": "Relatable talent holding and testing the product.",
      "productStyling": "Clean hero packaging.",
      "cameraMovement": "Selfie handheld with smooth stabilizer motion.",
      "storytelling": "Before-and-after life transformation."
    },
    "theResult": "Drives scalable conversions for D2C e-commerce brands.",
    "creativeBreakdown": [
      {
        "step": "01",
        "title": "BENEFIT HIGHLIGHTS",
        "description": "Top 3 consumer benefits."
      },
      {
        "step": "02",
        "title": "CREATOR VOICE SYNTHESIS",
        "description": "Warm friendly tone generation."
      },
      {
        "step": "03",
        "title": "FINAL SOCIAL EXPORT",
        "description": "Ready-to-launch ad creative."
      }
    ],
    "scenes": [
      {
        "sceneNumber": "01",
        "title": "Product Try-on",
        "duration": "0:00 - 0:04",
        "camera": "Close selfie",
        "purpose": "Credibility building",
        "description": "Product applied with genuine smile.",
        "thumbnailUrl": "/videos/demo-ad-0913-1.jpg"
      }
    ],
    "beforeAfter": {
      "rawProductImg": "/videos/demo-ad-0913-1.jpg",
      "aiConceptImg": "/videos/demo-ad-0913-1.jpg",
      "finalAdVideo": "/videos/demo-ad-0913-1.mp4"
    }
  },
  {
    "id": "proj-long-01",
    "slug": "cinematic-product-commercial",
    "title": "CINEMATIC PRODUCT COMMERCIAL",
    "tagline": "High-fidelity AI commercial production engineered for premium brand prestige.",
    "client": "COMMERCIAL SPEC CREATIVE",
    "isSpec": true,
    "industry": "LUXURY",
    "category": "Commercial Production",
    "service": "Product Commercials",
    "year": "2026",
    "format": "16:9",
    "creativeAngle": "Broadcast Grade Studio Lighting & Fluid Macro Choreography",
    "videoUrl": "/videos/long-ad-product-01.mp4",
    "thumbnailUrl": "/videos/long-ad-product-01.jpg",
    "featured": true,
    "status": "published",
    "order": 10,
    "overview": "A high-impact cinematic commercial designed for multi-channel brand positioning with broadcast-grade generative cinematography.",
    "theIdea": "Commanding viewer attention through pristine lighting transitions and dynamic camera motion.",
    "theApproach": {
      "visualDirection": "Warm studio lighting with dramatic rim reflections and razor-sharp product detail.",
      "background": "Architectural minimalist studio environment.",
      "lighting": "Chiaroscuro key with golden accents and specular reflections.",
      "character": "Solo dynamic interaction with product.",
      "productStyling": "Master studio placement with sharp branding fidelity.",
      "cameraMovement": "Sweeping orbital tracking with macro reveal.",
      "storytelling": "From anticipation to triumphant commercial delivery."
    },
    "theResult": "A full-length 16:9 commercial master delivering high conversion and brand memorability.",
    "creativeBreakdown": [
      {
        "step": "01",
        "title": "PRODUCT CAD & PACKSHOT",
        "description": "High-res reference geometry setup."
      },
      {
        "step": "02",
        "title": "CINEMATIC DIRECTION",
        "description": "Studio lighting and angle storyboard."
      },
      {
        "step": "03",
        "title": "AI MOTION GENERATION",
        "description": "Diffusion-based camera move synthesis."
      },
      {
        "step": "04",
        "title": "COLOR GRADE & SOUND",
        "description": "Broadcast master export."
      }
    ],
    "scenes": [
      {
        "sceneNumber": "01",
        "title": "Hero Commercial Shot",
        "duration": "0:00 - 0:10",
        "camera": "Cinematic Orbit",
        "purpose": "Prestige brand commercial",
        "description": "Product highlighted under dynamic studio illumination.",
        "thumbnailUrl": "/videos/long-ad-product-01.jpg"
      }
    ],
    "beforeAfter": {
      "rawProductImg": "/videos/long-ad-product-01.jpg",
      "aiConceptImg": "/videos/long-ad-product-01.jpg",
      "finalAdVideo": "/videos/long-ad-product-01.mp4"
    }
  },
  {
    "id": "proj-long-02",
    "slug": "dynamic-vertical-product-sprint",
    "title": "DYNAMIC VERTICAL PRODUCT SPRINT",
    "tagline": "Thumb-stopping 9:16 direct-response commercial with high-converting visual friction.",
    "client": "DIRECT RESPONSE SPRINT",
    "isSpec": true,
    "industry": "TECH",
    "category": "Direct Response & Social Ads",
    "service": "Product Commercials",
    "year": "2026",
    "format": "9:16",
    "creativeAngle": "Fast-Paced Mobile Hook + High Shutter Product Immersion",
    "videoUrl": "/videos/long-ad-product-02.mp4",
    "thumbnailUrl": "/videos/long-ad-product-02.jpg",
    "featured": true,
    "status": "published",
    "order": 11,
    "overview": "Engineered specifically for 9:16 mobile feeds (Instagram Reels & TikTok) to drive immediate click-through and purchase intent.",
    "theIdea": "First 3 seconds break feed scroll patterns through aggressive visual hook and hyper-realistic product texture.",
    "theApproach": {
      "visualDirection": "High-energy mobile editorial with vibrant contrast and clean cuts.",
      "background": "Modern urban studio backdrop.",
      "lighting": "Dynamic daylight with neon edge highlights.",
      "character": "Engaging talent interacting with product in real-world context.",
      "productStyling": "Hero product front and center.",
      "cameraMovement": "Quick push-ins and vertical tilts.",
      "storytelling": "Problem-to-solution visual progression."
    },
    "theResult": "High-performing 9:16 vertical commercial optimized for social media ad performance.",
    "creativeBreakdown": [
      {
        "step": "01",
        "title": "HOOK SCRIPTING",
        "description": "Thumb-stopping angle development."
      },
      {
        "step": "02",
        "title": "MOTION SYNTHESIS",
        "description": "AI generated hyper-realistic action."
      },
      {
        "step": "03",
        "title": "SOCIAL MASTER",
        "description": "Sound-synced 9:16 delivery."
      }
    ],
    "scenes": [
      {
        "sceneNumber": "01",
        "title": "Hook Sequence",
        "duration": "0:00 - 0:10",
        "camera": "Rapid vertical push",
        "purpose": "Scroll stopping",
        "description": "Dynamic reveal of product in high-energy flow.",
        "thumbnailUrl": "/videos/long-ad-product-02.jpg"
      }
    ],
    "beforeAfter": {
      "rawProductImg": "/videos/long-ad-product-02.jpg",
      "aiConceptImg": "/videos/long-ad-product-02.jpg",
      "finalAdVideo": "/videos/long-ad-product-02.mp4"
    }
  },
  {
    "id": "proj-long-03",
    "slug": "studio-lighting-commercial-reveal",
    "title": "STUDIO LIGHTING COMMERCIAL REVEAL",
    "tagline": "Broadcast-grade cinematic lighting choreography and sensory product transformation.",
    "client": "PRESTIGE BRAND CAMPAIGN",
    "isSpec": true,
    "industry": "LUXURY",
    "category": "Brand Commercials",
    "service": "Product Commercials",
    "year": "2026",
    "format": "16:9",
    "creativeAngle": "Chiaroscuro Illumination + Precision Industrial Design",
    "videoUrl": "/videos/long-ad-product-03.mp4",
    "thumbnailUrl": "/videos/long-ad-product-03.jpg",
    "featured": true,
    "status": "published",
    "order": 12,
    "overview": "A high-end cinematic product film emphasizing precision engineering, metallic reflections, and luxury brand prestige.",
    "theIdea": "Visualizing craftsmanship through slow moving lighting beams that sculpt the physical geometry of the product.",
    "theApproach": {
      "visualDirection": "Haute horlogerie and luxury commercial noir aesthetic.",
      "background": "Obsidian stone and dark glass floor reflections.",
      "lighting": "Laser-precision blade lighting sweeping across surfaces.",
      "character": "Minimalist luxury atmosphere.",
      "productStyling": "Pristine macro product inspection.",
      "cameraMovement": "Slow gliding horizontal rail tracking.",
      "storytelling": "The revelation of perfection."
    },
    "theResult": "A full broadcast-quality 16:9 commercial master delivering commanding presence.",
    "creativeBreakdown": [
      {
        "step": "01",
        "title": "LIGHT RIG DESIGN",
        "description": "Virtual studio lighting setup."
      },
      {
        "step": "02",
        "title": "MACRO SYNTHESIS",
        "description": "Photorealistic reflection rendering."
      },
      {
        "step": "03",
        "title": "CINEMATIC FINISH",
        "description": "4K graded commercial master."
      }
    ],
    "scenes": [
      {
        "sceneNumber": "01",
        "title": "Light Sweep",
        "duration": "0:00 - 0:10",
        "camera": "Gliding macro rail",
        "purpose": "Atmospheric prestige hook",
        "description": "Light beam reveals the pristine facets of the product.",
        "thumbnailUrl": "/videos/long-ad-product-03.jpg"
      }
    ],
    "beforeAfter": {
      "rawProductImg": "/videos/long-ad-product-03.jpg",
      "aiConceptImg": "/videos/long-ad-product-03.jpg",
      "finalAdVideo": "/videos/long-ad-product-03.mp4"
    }
  }
];

export const CORE_SERVICES = [
  {
    number: "01",
    title: "AI VIDEO ADS",
    headline: "Cinematic product advertisements created with AI.",
    description:
      "High-end, commercial-grade video advertisements engineered to stop thumbs and drive conversions. We craft bespoke camera paths, dynamic lighting, and photorealistic physics that match multi-million dollar studio productions.",
    deliverables: [
      "9:16 & 16:9 4K Master Exports",
      "Multiple 3-second Hook Variations",
      "Dynamic Typographic Overlays",
      "Commercial Sound Design & Score",
    ],
    tags: ["Paid Social", "Meta Ads", "TikTok", "YouTube Shorts"],
  },
  {
    number: "02",
    title: "AI PRODUCT VISUALS",
    headline: "Premium product photography and campaign visuals without traditional production overhead.",
    description:
      "Hyper-realistic commercial photography placing your product into impossible, breathtaking architectural worlds and editorial sets without shipping samples across continents.",
    deliverables: [
      "Ultra-High-Resolution Imagery (Up to 8K)",
      "Consistent Lighting & Product Angles",
      "Lifestyle, Macro & Editorial Contexts",
      "E-Commerce & Hero Banner Assets",
    ],
    tags: ["E-Commerce", "Hero Visuals", "Print Quality", "Packaging"],
  },
  {
    number: "03",
    title: "SOCIAL MEDIA ADS",
    headline: "Short-form advertising creatives designed for Instagram, TikTok, YouTube Shorts and Facebook.",
    description:
      "Performance-first creatives structured around audience psychology. We test visual hooks, pacing variations, and emotional triggers to find your winning ad formula fast.",
    deliverables: [
      "Pacing Optimized for Retention",
      "Native-Feel Storytelling Formats",
      "Platform-Specific Aspect Ratios",
      "Iterative Creative A/B Variations",
    ],
    tags: ["Performance Marketing", "D2C Scaling", "High ROAS", "Short-Form"],
  },
  {
    number: "04",
    title: "PRODUCT COMMERCIALS",
    headline: "High-end cinematic product commercials with multiple scenes.",
    description:
      "Full-narrative commercial spots featuring complete scene progressions: problem introduction, macro product craftsmanship, lifestyle usage, emotional payoff, and decisive call-to-action.",
    deliverables: [
      "Multi-Scene Script & Storyboard",
      "Character & Environment Consistency",
      "Director's Cut & Cutdowns (30s, 15s, 6s)",
      "Broadcast & Web Streaming Masters",
    ],
    tags: ["Brand Film", "Commercial Spots", "TV & Streaming", "Website Hero"],
  },
  {
    number: "05",
    title: "AI CREATIVE DIRECTION",
    headline: "Concept development, art direction, visual strategy, storytelling and advertising hooks.",
    description:
      "We don't simply type prompts into tools. We dissect your brand positioning, study competitive whitespace, and build cohesive artistic guidelines that elevate your product into an aspirational icon.",
    deliverables: [
      "Strategic Creative Deck & Moodboards",
      "Advertising Angle & Hook Architecture",
      "Lighting, Tone & Camera Guidelines",
      "Prompt Matrix & Bespoke LoRA Direction",
    ],
    tags: ["Art Direction", "Brand Strategy", "Narrative Hook", "Creative Strategy"],
  },
  {
    number: "06",
    title: "CAMPAIGN CREATIVE",
    headline: "Multiple ad concepts created around one product for creative testing.",
    description:
      "One product, endless advertising angles. We build complete multi-angle creative sprints—testing luxury minimalism against high-energy kinetic action—allowing your growth team to scale winning ad sets.",
    deliverables: [
      "3-5 Divergent Creative Angles per SKU",
      "Batch Creative Delivery for Testing",
      "Rapid Iteration on Winning Angles",
      "Omnichannel Creative Adaptation",
    ],
    tags: ["Creative Sprint", "A/B Testing", "Growth Engine", "Omnichannel"],
  },
];

export const CREATIVE_PROCESS_STEPS = [
  {
    number: "01",
    phase: "PRODUCT",
    subtitle: "You send the product.",
    description:
      "Send high-resolution photos, 3D CAD files, or product packaging blueprints. We isolate the silhouette, verify brand guidelines, and lock product consistency.",
  },
  {
    number: "02",
    phase: "STRATEGY",
    subtitle: "Advertising opportunity analysis.",
    description:
      "We analyze your target demographic, current conversion friction, platform dynamics, and the psychological hook required to stand out in congested feeds.",
  },
  {
    number: "03",
    phase: "CONCEPT",
    subtitle: "Multiple creative directions.",
    description:
      "We pitch contrasting advertising worlds: minimalist editorial, hyper-real CGI physics, cinematic lifestyle, or high-octane kinetic performance.",
  },
  {
    number: "04",
    phase: "VISUAL DEVELOPMENT",
    subtitle: "AI-generated product visuals & keyframes.",
    description:
      "Using bespoke generative pipelines, we produce high-fidelity keyframes where lighting, materials, and product fidelity are locked with surgical precision.",
  },
  {
    number: "05",
    phase: "VIDEO PRODUCTION",
    subtitle: "Turning keyframes into cinema.",
    description:
      "Through generative video diffusion, camera trajectories, fluid dynamics, and character interactions are rendered into seamless motion clips.",
  },
  {
    number: "06",
    phase: "FINAL AD",
    subtitle: "Editing, pacing & advertising creative.",
    description:
      "Editorial cut, color correction, custom typography, sound effects, musical score, and multi-format exports built to convert on day one.",
  },
];

export const INDUSTRIES = [
  {
    id: "FASHION",
    name: "FASHION",
    tag: "High Fashion & Runway Editorial",
    description: "Editorial runways, dynamic drape physics, and high-contrast luxury apparel aesthetics.",
    accent: "#FF6B6B",
    videoPreview: "/videos/industry-fashion.mp4",
  },
  {
    id: "JEWELLERY",
    name: "JEWELLERY",
    tag: "Haute Joaillerie & Fine Metals",
    description: "Macro facet refractions, unboxing reveals, and dramatic luxury reflections.",
    accent: "#E5C07B",
    videoPreview: "/videos/industry-jewellery.mp4",
  },
  {
    id: "SHOES",
    name: "SHOES",
    tag: "Footwear & Sneaker Culture",
    description: "Dynamic sneaker motion synthesis, urban culture, and high-impact streetwear aesthetics.",
    accent: "#B8FF3D",
    videoPreview: "/videos/industry-shoes.mp4",
  },
  {
    id: "AI_UGC",
    name: "AI UGC",
    tag: "Authentic Direct-Response UGC",
    description: "High-converting, thumb-stopping AI UGC creators designed for Meta & TikTok organic and paid scale.",
    accent: "#9B51E0",
    videoPreview: "/videos/industry-ai-ugc.mp4",
  },
];

export const WHY_WORK_WITH_ME = [
  {
    title: "PRODUCT-FIRST THINKING",
    description:
      "AI video generation is notorious for mutating products into unrecognizable shapes. We engineer custom consistency pipelines so your label, typography, and geometry remain 100% faithful in every single frame.",
  },
  {
    title: "MULTIPLE CREATIVE DIRECTIONS",
    description:
      "A physical video shoot locks you into one set and one model. With our generative studio, one physical product can effortlessly branch into ten completely distinct advertising aesthetics for rigorous testing.",
  },
  {
    title: "ADVERTISING-FIRST APPROACH",
    description:
      "We aren't AI prompters making cool art—we are advertising thinkers. Every cut, hook, typography frame, and color grade is calibrated around human attention spans and direct-response marketing psychology.",
  },
  {
    title: "FAST CREATIVE ITERATION",
    description:
      "No permits, no weather delays, no 6-week studio turnaround. Test bold campaign angles and seasonal refresh creatives in days rather than months.",
  },
  {
    title: "PLATFORM READY",
    description:
      "Creatives natively formatted with safe zones for TikTok, Instagram Reels, Meta Feed, YouTube Shorts, and high-impact desktop banners.",
  },
];
