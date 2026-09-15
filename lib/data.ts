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
    id: "proj-1",
    slug: "elan-parfums-liquid-gold",
    title: "THE GOLDEN HOUR",
    tagline: "Ultra-luxe liquid gold bottle reveal for haute perfumery.",
    client: "ÉLAN NOIR PARFUMS (SPEC CREATIVE)",
    isSpec: true,
    industry: "LUXURY",
    category: "Fragrance & Perfumery",
    service: "AI Video Ads",
    year: "2026",
    format: "9:16",
    creativeAngle: "Product Emergence + Cinematic Liquid Physics",
    videoUrl: "/videos/perfume-liquid-gold.mp4",
    thumbnailUrl: "/images/product-hero-perfume.jpg",
    featured: true,
    status: "published",
    order: 1,
    overview:
      "A cinematic commercial engineered for high-conversion social feeds, centering on the tactile transformation of a fragrance bottle rising from liquid amber chrome.",
    theIdea:
      "Fragrance cannot be smelled through glass and screen—it must be felt. We designed a sensory visual metaphor where the bottle emerges directly out of liquid gold, visualizing richness, density, and opulent longevity.",
    theApproach: {
      visualDirection: "Editorial noir with dramatic rim light and reflective golden fluid dynamics.",
      background: "Minimal obsidian void with ripples radiating outward.",
      lighting: "Chiaroscuro high-contrast key with liquid rim reflections.",
      character: "Solo ethereal muse revealed in macro silhouette.",
      productStyling: "Prismatic flacon with laser-sharp typography retention.",
      cameraMovement: "Slow orbital rise transitioning to macro push-in on atomizer nozzle.",
      storytelling: "From raw fluid state into structural luxury artifact.",
    },
    theResult:
      "A 9:16 vertical commercial ready for Meta and TikTok, delivering 3 seconds of immediate thumb-stopping visual friction followed by crisp brand positioning.",
    creativeBreakdown: [
      {
        step: "01",
        title: "ORIGINAL PRODUCT",
        description: "Studio bottle CAD render and packshot with precise dimensions and label artwork.",
        assetUrl: "/images/product-hero-perfume.jpg",
      },
      {
        step: "02",
        title: "CREATIVE CONCEPT",
        description: "Visual moodboards highlighting molten glass, viscous amber waves, and obsidian reflections.",
        assetUrl: "/images/jewellery-concept.png",
      },
      {
        step: "03",
        title: "AI KEYFRAME GENERATION",
        description: "Prompt-engineered photorealistic keyframes generated with custom LoRA product identity locks.",
        assetUrl: "/images/scenes/perfume-scene-01.jpg",
      },
      {
        step: "04",
        title: "AI MOTION SYNTHESIS",
        description: "Generative video diffusion controlling camera orbital path, surface tension, and liquid drip kinetics.",
        assetUrl: "/images/scenes/perfume-scene-03.jpg",
      },
      {
        step: "05",
        title: "FINAL COMMERCIAL MASTER",
        description: "Editorial color grading, dynamic typographic lockup, sound design, and vertical packaging.",
        assetUrl: "/videos/perfume-liquid-gold.mp4",
      },
    ],
    scenes: [
      {
        sceneNumber: "01",
        title: "Liquid Disturbance",
        duration: "0.0s - 1.2s",
        camera: "Macro downward tilt",
        purpose: "The 3-second hook: immediate fluid dynamics arresting scroll velocity.",
        description: "Viscous golden liquid surface ripples in silence as tension builds.",
        thumbnailUrl: "/images/scenes/perfume-scene-01.jpg",
      },
      {
        sceneNumber: "02",
        title: "The Emergence",
        duration: "1.2s - 2.8s",
        camera: "Low-angle orbital crane",
        purpose: "Reveal product silhouette with dramatic light shearing.",
        description: "The flacon breaches the liquid horizon, shedding golden droplets across beveled glass.",
        thumbnailUrl: "/images/scenes/perfume-scene-02.jpg",
      },
      {
        sceneNumber: "03",
        title: "Macro Typography",
        duration: "2.8s - 4.1s",
        camera: "Extreme close-up glide",
        purpose: "Showcase luxury craftsmanship and brand name clarity.",
        description: "Razor-sharp serif branding catches an intentional streak of warm tungsten light.",
        thumbnailUrl: "/images/scenes/perfume-scene-03.jpg",
      },
      {
        sceneNumber: "04",
        title: "Atomizer Mist Arc",
        duration: "4.1s - 5.5s",
        camera: "Lateral tracking slow-motion",
        purpose: "Sensory payoff simulating fragrance diffusion.",
        description: "Micro-droplets explode in back-lit suspension across dark air.",
        thumbnailUrl: "/images/scenes/perfume-scene-04.jpg",
      },
      {
        sceneNumber: "05",
        title: "Hero Bottle Stand",
        duration: "5.5s - 7.0s",
        camera: "Center lock push-back",
        purpose: "Solidify packshot memory and prestige brand stance.",
        description: "The complete luxury bottle settles onto a mirror pedestal.",
        thumbnailUrl: "/images/scenes/perfume-scene-05.jpg",
      },
      {
        sceneNumber: "06",
        title: "Call to Action",
        duration: "7.0s - 8.5s",
        camera: "Static typography lock",
        purpose: "Direct high-intent shoppers to seasonal discovery kit.",
        description: "Minimal typography: 'DISCOVER THE COLLECTION' with discreet swipe-up indicator.",
        thumbnailUrl: "/images/scenes/perfume-scene-06.jpg",
      },
    ],
    beforeAfter: {
      rawProductImg: "/images/product-hero-perfume.jpg",
      aiConceptImg: "/images/jewellery-concept.png",
      finalAdVideo: "/videos/perfume-liquid-gold.mp4",
    },
  },
  {
    id: "proj-2",
    slug: "velvet-noir-confectionery",
    title: "CACAO CEREMONY",
    tagline: "Sensory artisanal chocolate campaign celebrating tactile indulgence.",
    client: "MAISON DU CACAO (SPEC CREATIVE)",
    isSpec: true,
    industry: "FOOD",
    category: "Food & Beverage",
    service: "Product Commercials",
    year: "2026",
    format: "16:9",
    creativeAngle: "Macro Tactile Senses + Satisfying Unwrapping Motion",
    videoUrl: "/videos/chocolate-velvet.mp4",
    thumbnailUrl: "/images/scenes/perfume-scene-02.jpg",
    featured: true,
    status: "published",
    order: 2,
    overview:
      "An ASMR-driven cinematic commercial capturing the ritual of unwrapping artisanal 85% single-origin dark chocolate.",
    theIdea:
      "Modern confectionery buyers don't just buy chocolate—they buy an intimate pause in their day. We turned the packaging peel into a deliberate luxury ritual.",
    theApproach: {
      visualDirection: "Rich warm earth tones, deep umber shadows, and glistening gold foil highlights.",
      background: "Natural linen and raw slate surfaces.",
      lighting: "Soft directional morning window illumination.",
      character: "Graceful hand model with natural manicured elegance.",
      productStyling: "Geometric matte chocolate snap tiles dusted with single-origin nibs.",
      cameraMovement: "Intimate table-level macro tracking.",
      storytelling: "Anticipation, the snap sound payoff, and sensory bliss.",
    },
    theResult:
      "A cinematic food commercial demonstrating that AI visual tools can reproduce complex organic textures, paper crinkles, and mouth-watering tactile details without commercial studio delays.",
    creativeBreakdown: [
      {
        step: "01",
        title: "PACKAGING PACKSHOT",
        description: "Raw packaging die-line and foil stamp texture specifications.",
      },
      {
        step: "02",
        title: "LIGHTING MOODBOARD",
        description: "Warm culinary lighting references evoking French luxury bakeries.",
      },
      {
        step: "03",
        title: "PHYSICAL TEXTURE SYNTHESIS",
        description: "Micro-texture rendering of cocoa fat bloom, foil micro-creases, and matte chocolate surfaces.",
      },
      {
        step: "04",
        title: "TACTILE MOTION MODELING",
        description: "Video diffusion physics accurately depicting paper peeling and structural snap.",
      },
      {
        step: "05",
        title: "SOUND-SYNCED MASTER",
        description: "Crisp foil crinkle soundscape matched with frame-by-frame visual beats.",
      },
    ],
    scenes: [
      {
        sceneNumber: "01",
        title: "Foil Reflection",
        duration: "0.0s - 1.5s",
        camera: "Macro glide",
        purpose: "Establish premium unboxing expectation.",
        description: "Gold embossed crest gleams as warm light skims the wrapper.",
        thumbnailUrl: "/images/scenes/perfume-scene-01.jpg",
      },
      {
        sceneNumber: "02",
        title: "The Unfold",
        duration: "1.5s - 3.2s",
        camera: "Top-down 45-degree close-up",
        purpose: "Sensory curiosity trigger.",
        description: "Fingers delicately crease open the inner gold foil layer.",
        thumbnailUrl: "/images/scenes/perfume-scene-02.jpg",
      },
      {
        sceneNumber: "03",
        title: "The Snap",
        duration: "3.2s - 5.0s",
        camera: "High-speed macro",
        purpose: "Irresistible appetite appeal.",
        description: "Clean geometric break of dark chocolate releasing fine cocoa dust.",
        thumbnailUrl: "/images/scenes/perfume-scene-03.jpg",
      },
    ],
    beforeAfter: {
      rawProductImg: "/images/scenes/perfume-scene-02.jpg",
      aiConceptImg: "/images/scenes/perfume-scene-03.jpg",
      finalAdVideo: "/videos/chocolate-velvet.mp4",
    },
  },
  {
    id: "proj-3",
    slug: "apex-kinetic-sportswear",
    title: "BIOMECHANICAL WILL",
    tagline: "High-intensity athletic performance ad combining sweat, muscle tension, and gear durability.",
    client: "APEX PERFORMANCE APPAREL (SPEC CREATIVE)",
    isSpec: true,
    industry: "FITNESS",
    category: "Athletic Wear",
    service: "AI Video Ads",
    year: "2026",
    format: "9:16",
    creativeAngle: "High Energy + Gritty Gym Noir + Biomechanical Precision",
    videoUrl: "/videos/fitness-apex.mp4",
    thumbnailUrl: "/images/scenes/fitness-scene-01.jpg",
    featured: true,
    status: "published",
    order: 3,
    overview:
      "A dark, kinetic sportswear commercial capturing the raw grit of elite training. Engineered to convert performance enthusiasts and athletes.",
    theIdea:
      "Fitness apparel ads are too often sterile and sanitized. We plunged the camera directly into a high-stakes, sweat-drenched underground gym setting to prove fabric breathability and explosive movement tolerance.",
    theApproach: {
      visualDirection: "Neo-noir industrial gym, steel cage textures, and volumetric chalk clouds.",
      background: "Dark charcoal concrete with neon edge highlights.",
      lighting: "Single top-down harsh spotlight carving out anatomical striations.",
      character: "High-level athlete performing heavy compound resistance movements.",
      productStyling: "Seamless compression top with bonded reflective seams.",
      cameraMovement: "Aggressive whip-pans and slow-mo snap impacts.",
      storytelling: "Exhaustion versus stubborn endurance.",
    },
    theResult:
      "A fierce, 9:16 social-first campaign piece that mirrors top-tier Nike and Gymshark campaigns with zero location rental or athlete booking fees.",
    creativeBreakdown: [
      {
        step: "01",
        title: "APPAREL SPECIFICATION",
        description: "Compression weave CAD and reflective logo vector.",
      },
      {
        step: "02",
        title: "ATHLETE & LIGHTING PROMPT MATRIX",
        description: "Prompt matrix controlling sweat sheen, muscle striations, and volumetric haze.",
      },
      {
        step: "03",
        title: "CHOREOGRAPHY DIFFUSION",
        description: "Dynamic motion trajectory tracking biomechanically accurate lifts.",
      },
      {
        step: "04",
        title: "HIGH-SHUTTER SPEED SIMULATION",
        description: "Eliminating motion blur to emphasize fabric stretch and breathability.",
      },
      {
        step: "05",
        title: "BASS-BOOSTED CAMPAIGN CUT",
        description: "Industrial percussion soundtrack synchronized with muscle peak contractions.",
      },
    ],
    scenes: [
      {
        sceneNumber: "01",
        title: "The Chalk Strike",
        duration: "0.0s - 1.2s",
        camera: "Low angle wide",
        purpose: "Immediate athletic hook and atmosphere establishment.",
        description: "Athlete slaps chalked hands together; white powder detonates in the air.",
        thumbnailUrl: "/images/scenes/fitness-scene-01.jpg",
      },
      {
        sceneNumber: "02",
        title: "Tension Arc",
        duration: "1.2s - 2.9s",
        camera: "Orbital track around back muscles",
        purpose: "Highlight fabric flex and ergonomic fit under strain.",
        description: "Heavy lat contraction stretches compression fibers seamlessly.",
        thumbnailUrl: "/images/scenes/fitness-scene-03.jpg",
      },
      {
        sceneNumber: "03",
        title: "Explosive Lockout",
        duration: "2.9s - 4.5s",
        camera: "Dutch angle snap zoom",
        purpose: "Emotional climax of effort.",
        description: "Barbell locks out; sweat flies in high-speed slow motion.",
        thumbnailUrl: "/images/scenes/fitness-scene-05.jpg",
      },
    ],
    beforeAfter: {
      rawProductImg: "/images/scenes/fitness-scene-01.jpg",
      aiConceptImg: "/images/scenes/fitness-scene-03.jpg",
      finalAdVideo: "/videos/fitness-apex.mp4",
    },
  },
  {
    id: "proj-4",
    slug: "hyperlight-stratus-footwear",
    title: "ZERO GRAVITY STRIDE",
    tagline: "Dynamic running shoe campaign emphasizing airborne lightness and cushioning tech.",
    client: "STRATUS FOOTWEAR (SPEC CREATIVE)",
    isSpec: true,
    industry: "SHOES",
    category: "Footwear & Sneakers",
    service: "AI Video Ads",
    year: "2026",
    format: "9:16",
    creativeAngle: "Exploded Foam Physics + High-Speed Urban Sprint",
    videoUrl: "/videos/shoe-hyperlight.mp4",
    thumbnailUrl: "/images/scenes/fitness-scene-02.jpg",
    featured: true,
    status: "published",
    order: 4,
    overview:
      "A high-impact footwear commercial designed to position a new marathon shoe as virtually weightless through physics-defying visual metaphor.",
    theIdea:
      "Traditional sneaker shoots struggle to convey midsole energy return. We visualized the foam cell structure literally lifting the runner off asphalt into clouds of anti-gravity particles.",
    theApproach: {
      visualDirection: "Sleek aerodynamic motion, wet rain-slick asphalt, and electric lime light trails.",
      background: "Nocturnal downtown metropolis with neon reflections.",
      lighting: "Low-slit road lighting catching tread grips.",
      character: "Sprinter accelerating through city night.",
      productStyling: "Engineered mesh upper with gradient carbon plate sole.",
      cameraMovement: "Ground-level high-speed tracking vehicle simulation.",
      storytelling: "From foot strike to flight.",
    },
    theResult:
      "A fast-paced, high-conversion footwear film built for conversion on mobile ads and digital billboards.",
    creativeBreakdown: [
      {
        step: "01",
        title: "SHOE GEOMETRY LOCK",
        description: "Sole tread pattern and upper knit structure fidelity preservation.",
      },
      {
        step: "02",
        title: "SPEED TRAIL CONCEPTS",
        description: "Particle physics exploration for energy rebound visualizations.",
      },
      {
        step: "03",
        title: "RUNNER GAIT GENERATION",
        description: "Anatomically correct heel-to-toe transition modeling.",
      },
      {
        step: "04",
        title: "ATMOSPHERIC COMPOSITING",
        description: "Rain splashes, mist swirls, and pavement puddle reflections.",
      },
      {
        step: "05",
        title: "SPEED RAMP CUT",
        description: "Dynamic speed-ramping between 120fps slow-motion and hyperspeed sprints.",
      },
    ],
    scenes: [
      {
        sceneNumber: "01",
        title: "Tread Ground Contact",
        duration: "0.0s - 1.0s",
        camera: "Pavement macro angle",
        purpose: "Grip and traction demonstration.",
        description: "Lugged rubber sole hits wet asphalt without slipping.",
        thumbnailUrl: "/images/scenes/fitness-scene-02.jpg",
      },
      {
        sceneNumber: "02",
        title: "Carbon Plate Rebound",
        duration: "1.0s - 2.5s",
        camera: "Side tracking cutaway",
        purpose: "Explain technology mechanism.",
        description: "Midsole compresses and launches runner forward with energy sparks.",
        thumbnailUrl: "/images/scenes/fitness-scene-04.jpg",
      },
    ],
    beforeAfter: {
      rawProductImg: "/images/scenes/fitness-scene-02.jpg",
      aiConceptImg: "/images/scenes/fitness-scene-04.jpg",
      finalAdVideo: "/videos/shoe-hyperlight.mp4",
    },
  },
  {
    id: "proj-5",
    slug: "chronos-haute-horlogerie",
    title: "OBSIDIAN TOURBILLON",
    tagline: "Swiss mechanical precision meet architectural shadows in an ultra-luxury watch commercial.",
    client: "CHRONOS ATELIER (CONCEPT PROJECT)",
    isSpec: true,
    industry: "WATCHES",
    category: "Haute Horlogerie",
    service: "AI Product Visuals",
    year: "2026",
    format: "16:9",
    creativeAngle: "Macro Gear Architecture + Monochromatic Sculptural Light",
    videoUrl: "/videos/watch-chronos.mp4",
    thumbnailUrl: "/images/luxury-watch.png",
    featured: true,
    status: "published",
    order: 5,
    overview:
      "A cinematic exploration into mechanical complexity, highlighting diamond-like carbon finishes and intricate tourbillon movement under moving light.",
    theIdea:
      "Time is an invisible luxury. We created a sculptural visual poem where light reveals gear teeth, rubies, and hand-beveled bridges one by one out of pitch darkness.",
    theApproach: {
      visualDirection: "Surgical monochrome with brushed titanium and ruby red accents.",
      background: "Brushed slate and matte ceramic plates.",
      lighting: "Moving razor-slit key lights creating sweeping shadow edges.",
      character: "None—the mechanical movement is the living protagonist.",
      productStyling: "41mm skeletonized tourbillon case with sapphire crystal reflections.",
      cameraMovement: "Continuous macro drone push-through inside the movement gears.",
      storytelling: "The heartbeat of micro-mechanics.",
    },
    theResult:
      "A flagship luxury commercial proving AI can respect extreme microscopic tolerances and high-end horological aesthetics.",
    creativeBreakdown: [
      {
        step: "01",
        title: "WATCH CAD BLUEPRINT",
        description: "Case dimensions, dial proportions, and movement schematics.",
      },
      {
        step: "02",
        title: "MATERIAL ACCURACY CALIBRATION",
        description: "Reflectance mapping for brushed titanium, polished bevels, and synthetic sapphire.",
      },
      {
        step: "03",
        title: "LIGHT STREAK CHOREOGRAPHY",
        description: "Automated light sweep simulations across dial markers.",
      },
      {
        step: "04",
        title: "GEAR ROTATION GENERATION",
        description: "Synchronous escapement wheel and balance spring oscillations.",
      },
      {
        step: "05",
        title: "CINEMA 4K GRADE",
        description: "Deep blacks and subtle film grain for an authentic boutique cinema presentation.",
      },
    ],
    scenes: [
      {
        sceneNumber: "01",
        title: "Balance Spring Pulse",
        duration: "0.0s - 2.0s",
        camera: "Extreme microscope macro",
        purpose: "Hypnotic rhythm hook.",
        description: "Coiled hairspring pulses rhythmically as light glints across steel coils.",
        thumbnailUrl: "/images/luxury-watch.png",
      },
    ],
    beforeAfter: {
      rawProductImg: "/images/luxury-watch.png",
      aiConceptImg: "/images/luxury-watch.png",
      finalAdVideo: "/videos/watch-chronos.mp4",
    },
  },
  {
    id: "proj-6",
    slug: "lumina-botanical-skincare",
    title: "CELLULAR BLOOM",
    tagline: "Dewy cellular hydration and botanical alchemy for clinical beauty.",
    client: "LUMINA LABS (SPEC CREATIVE)",
    isSpec: true,
    industry: "SKINCARE",
    category: "Clinical Beauty",
    service: "AI Product Visuals",
    year: "2026",
    format: "9:16",
    creativeAngle: "Dew Drop Refraction + Macro Botanical Active Science",
    videoUrl: "/videos/skincare-lumina.mp4",
    thumbnailUrl: "/images/product-hero-perfume.jpg",
    featured: true,
    status: "published",
    order: 6,
    overview:
      "A serene, medical-grade yet luxurious skincare campaign demonstrating barrier repair and botanical cellular absorption.",
    theIdea:
      "Modern skincare consumers demand both clinical proof and luxurious self-care emotional connection. We combined sterile lab aesthetic with lush botanical life.",
    theApproach: {
      visualDirection: "Clean pastel hues, water ripples, and glass pipettes with viscous serums.",
      background: "Frosted glass and pale rose travertine.",
      lighting: "Soft diffuse studio wrap-around light.",
      character: "Flawless skin model showing micro pore texture and glass-skin hydration.",
      productStyling: "Frosted dropper bottle with golden peptide serum droplet suspension.",
      cameraMovement: "Gentle vertical tilt following a serum drop.",
      storytelling: "Nature refined by science.",
    },
    theResult:
      "An ethereal product film tailored for high-converting Instagram Story and Reels beauty placements.",
    creativeBreakdown: [
      {
        step: "01",
        title: "BOTTLE & FORMULATION ASSETS",
        description: "Exact pantone shades of amber serum and dropper pipette.",
      },
      {
        step: "02",
        title: "REFRACTION & LIQUID STUDIES",
        description: "Simulating light bending through clear viscous serum droplets.",
      },
      {
        step: "03",
        title: "SKIN TEXTURE INTEGRITY",
        description: "Preserving real skin pores and natural luminosity without fake plastic blur.",
      },
      {
        step: "04",
        title: "DROP FALL SIMULATION",
        description: "Zero-gravity suspended drop expanding into a soothing hydration ring.",
      },
      {
        step: "05",
        title: "FINAL SOCIAL MASTER",
        description: "Optimized for mobile viewing with prominent headline overlays.",
      },
    ],
    scenes: [
      {
        sceneNumber: "01",
        title: "Dropper Suspension",
        duration: "0.0s - 1.5s",
        camera: "Macro vertical hold",
        purpose: "Viscosity and luxury texture demonstration.",
        description: "Single golden drop gathers at the tip of the glass pipette.",
        thumbnailUrl: "/images/product-hero-perfume.jpg",
      },
    ],
    beforeAfter: {
      rawProductImg: "/images/product-hero-perfume.jpg",
      aiConceptImg: "/images/product-hero-perfume.jpg",
      finalAdVideo: "/videos/skincare-lumina.mp4",
    },
  },
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
