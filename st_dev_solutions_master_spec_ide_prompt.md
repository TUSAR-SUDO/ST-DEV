# ST Dev Solutions — Master Website Specification & AI IDE Prompt

**How to use this file:**
1. Download or copy this `.md` file into the root folder of your project (e.g., `PROJECT_SPEC.md`).
2. Copy the **Master AI IDE Prompt** in **Part 1** below and paste it directly into your AI IDE chat (Cursor, Windsurf, or Antigravity).
3. Your AI IDE will read the specification and build the entire upgraded website with live interactive previews for all three of your real client websites.

---

## PART 1: Copy-Paste Master Prompt for Your AI IDE

> **Copy everything inside the box below and paste it into your AI IDE:**

```text
Act as a Senior Creative Developer and UX Designer. Read the complete project specification in this document and build/upgrade the homepage for "ST Dev Solutions" (a two-person web studio in Bhubaneswar, Odisha, India building websites for local businesses).

CRITICAL REQUIREMENTS TO EXECUTE:
1. Keep the City Transit Route Map concept where a thick 8px route line (#2A1230) connects every section as a "station".
2. Strictly enforce the flat color palette:
   - Background: Sage-grey (#CFD8CC)
   - Ink, Outlines & Text: Deep Aubergine (#2A1230)
   - Primary Accent: Hot Magenta (#FF3D8B)
   - Secondary Accent: Lime-Yellow (#E8F25C)
   - Surface Panels: Off-White (#F6F7F2)
   - NO gradients, NO glassmorphism, NO soft drop shadows, NO 3D blobs, NO stock photos. Flat colors and thick 4px–6px #2A1230 borders only.
3. Enforce typography rules:
   - Headlines: 'Archivo' (weight 900, tight tracking, sentence case only, 100px+ in Hero). NEVER highlight a single word in a headline with a different color or italics. NEVER use all-caps eyebrow labels.
   - Body: 'Hanken Grotesk' (clean, readable, 18px+).
   - Station labels, badges & prices: 'Barlow Condensed' (600/700 weight).
4. Build the Interactive Live Website Preview System in "Stop 3: Work":
   - Integrate all 3 real client websites with their real URLs, problems, solutions, and features listed in the spec below:
     1) RS Fit Club (https://rs-fit-club.vercel.app/)
     2) IronForge Gym (https://gym-taupe-chi.vercel.app/)
     3) Wanderlust Travels (https://travel-agency-three-beta.vercel.app/)
   - Visitors must be able to preview all 3 live websites directly inside our main website without leaving the page!
   - Build both:
     a) Staggered, offset browser-window cards with a "Preview Live Site Inside Page" button that either loads the live iframe right inside the card or opens an Interactive Fullscreen "Station Inspector" Modal containing a live `<iframe>` of the client website, a Desktop (100% width) / Mobile (390px phone frame) viewport switcher, a "Open in New Tab ↗" button, and the case study breakdown alongside it.
5. Implement all 9 required stations (Hero with Before/After slider, Scroll-driven "How we work" with moving bus along the route line, 8-second looping Live Build Demo, Real Client Work with in-page live iframe previews, Trust & Team section, Interactive Price Estimator, Accessible FAQ Accordion, Bus-Stop Contact Form + WhatsApp integration, and Route-Line Footer).
6. Follow the luxury motion rules: `cubic-bezier(0.22, 0.61, 0.36, 1)` at `600ms–900ms`, custom desktop cursor, and full `prefers-reduced-motion: reduce` support.
```

---

## PART 2: Complete Brand, Design & Architecture Specification

### 1. Studio Identity & Core Goal
* **Studio Name:** ST Dev Solutions
* **Location:** Bhubaneswar, Odisha, India
* **Team:** Two-person web studio — **Tusar** (Code, speed & Google setup) and **[Partner Name Placeholder / Swapna]** (Design, layout & client care).
* **Target Audience:** Local business owners in India (gyms, travel agencies, salons, clinics, sweet shops, coaching centres, cafés) who are non-technical.
* **The 60-Second Goal:** A business owner visiting the page must understand in under 60 seconds:
  1. Who we are.
  2. Exactly how we build their site in 7 days.
  3. Real live websites we have already built (which they can test right inside the page).
  4. What it costs (via an interactive price calculator).
  5. Why it is zero-risk (*"Working draft in 3 days. Pay ₹0 if you don't love the draft"*).

---

### 2. Strict Visual & Design Rules
* **Palette (Flat Colors Only):**
  * `--bg`: `#CFD8CC` (Sage-grey page background)
  * `--ink`: `#2A1230` (Deep Aubergine text, 5px–6px panel borders, 8px transit route line)
  * `--pink`: `#FF3D8B` (Hot Magenta primary buttons, station badges, highlights)
  * `--lime`: `#E8F25C` (Lime-Yellow secondary badges, active states, ticket accents)
  * `--panel`: `#F6F7F2` (Off-White cards, browser windows, tickets)
* **Forbidden Elements:**
  * Zero gradients of any kind.
  * Zero glassmorphism (`backdrop-filter: blur`).
  * Zero soft drop shadows (if depth is needed, use hard offset flat borders in `#2A1230` or none at all).
  * Zero stock photos (use crisp inline SVG illustrations and live client `<iframe>` embeds).
  * Never color or italicize a single word inside a headline.
  * Never use ALL-CAPS eyebrow labels above headings (use sentence-case station pills like `Stop 1 · How we work`).
  * Maximum 2 accent colors visible in any single section.

---

### 3. Real Client Portfolio Data & In-Page Live Preview Spec (`Stop 3 · Work`)

Instead of a boring 3-card row, display **3 staggered, offset browser-window frames** connected to the central transit route line by horizontal stems. Each window tilts subtly toward the mouse cursor (`cubic-bezier(0.22, 0.61, 0.36, 1)`).

#### How the In-Page Live Website Preview Must Work:
Every project browser window must include two ways to experience the real site without leaving the ST Dev Solutions homepage:
1. **Inline Live Preview Toggle ("Load Live Interactive Site"):** Clicking inside the browser window header or clicking **"Interact Live Here"** swaps the static illustration/preview with a live, scrollable `<iframe src="..." loading="lazy">` scaled nicely inside the browser frame so the visitor can scroll the actual website right on the spot.
2. **Fullscreen "Station Inspector" Modal ("Expand Full Live Preview"):** Clicking **"Expand Live Preview (Desktop / Phone)"** opens an off-white `#F6F7F2` modal framed with a 6px `#2A1230` border. Inside the modal:
   * **Top Transit Bar:** Shows the station badge (`Line 01 · RS Fit Club`), a **Project Switcher** (`Prev Stop` / `Next Stop` to flip between all 3 client sites instantly), a **Viewport Toggle** (`Desktop 1440px` vs `Mobile Phone 390px`), and an **`Open Live URL ↗`** button.
   * **Main Interactive Viewport:** Embeds the live client URL inside an `<iframe>` so the user can test animations, calculators, and buttons live.

---

#### Client Project #1: RS Fit Club (Local Gym & Transformation Center)
* **Station Label:** `Stop 3A · Fitness & Gym Flagship`
* **Client Name:** RS Fit Club
* **Location:** Samantarapur, Mahavir Bazar, Bhubaneswar, Odisha
* **Live Website URL:** `https://rs-fit-club.vercel.app/`
* **Accent Backing Color:** Hot Magenta (`#FF3D8B`)
* **The Problem:** Walk-in enquiries were getting lost because people searching for gyms near Mahavir Bazar couldn't see the gym floor, class timings, or real member transformations online before visiting.
* **What We Built:** A bold, custom-engineered dark-and-crimson web platform with a hero statement (*"Built Here. Not Borrowed."*), an interactive 8-programme horizontal showcase (*Weight Training, Strength Training, Cardio, Zumba, Aerobics*), an interactive drag-line Before/After transformation slider (*"Drag the Line. See the Work."*), a weekly class schedule table, transparent membership tiers, and a 1-tap Free Trial + WhatsApp booking funnel (`+91 76098 81233`).
* **The Result:** `[Placeholder: +3x increase in free trial bookings & daily WhatsApp enquiries from Samantarapur locals]`.

---

#### Client Project #2: IronForge (Strength & Conditioning Community Gym)
* **Station Label:** `Stop 3B · Community Gym & Interactive Tools`
* **Client Name:** IronForge
* **Location:** `[Location Placeholder, e.g., Bhubaneswar]`
* **Live Website URL:** `https://gym-taupe-chi.vercel.app/`
* **Accent Backing Color:** Lime-Yellow (`#E8F25C`)
* **The Problem:** The gym needed a high-energy digital presence that proved its active lifting culture and kept visitors engaged rather than bouncing off a static brochure page.
* **What We Built:** A high-impact community fitness website (*"More Than a Gym. A Community Built on Iron."*) featuring a real-time horizontal member activity ticker (*"Maria just finished Kettlebell Swings — 50 reps"*, *"James just finished Clean & Jerk — 225kg"*), a built-in interactive **BMI Calculator** in the main navigation, an asymmetric bento media + video tour grid, trainer spotlights, and instant membership signup.
* **The Result:** `[Placeholder: Higher visitor time-on-site via the BMI calculator and steady monthly membership signups]`.

---

#### Client Project #3: Wanderlust Travels (Multi-Page Travel & Tour Booking Agency)
* **Station Label:** `Stop 3C · Travel & Custom Tour Booking`
* **Client Name:** Wanderlust Travels
* **Location:** `[Location Placeholder]`
* **Live Website URL:** `https://travel-agency-three-beta.vercel.app/`
* **Featured Deep-Link Package URL (for quick tab switching in preview):** `https://travel-agency-three-beta.vercel.app/packages/mumbai-weekend-getaway`
* **Accent Backing Color:** Deep Aubergine (`#2A1230`) with Off-White (`#F6F7F2`) frame
* **The Problem:** Travellers were overwhelmed by cluttered travel portals with hidden fees and wanted a clear, trustworthy way to browse curated domestic and international packages and get custom itineraries on WhatsApp.
* **What We Built:** A warm, editorial multi-page travel booking platform featuring an interactive destination hero switcher (*Kerala, Bali, Goa, Kashmir, Dubai*), filterable trip cards with duration and group tags (*3N/4D Domestic, Family, Couple, Honeymoon*), dedicated day-by-day itinerary pages (*Mumbai Weekend Getaway, Goa Beach Escape, Bali Island Honeymoon*), clear *What's Included vs. Not Included* checklists, a 4-step booking journey, and 1-click WhatsApp trip customisation.
* **The Result:** `[Placeholder: Streamlined WhatsApp itinerary bookings across 25+ domestic and international destinations]`.

---

### 4. Section-by-Section Architecture (Top to Bottom)

#### Header & Navigation
* **Left:** Rounded-square magenta line badge (`#FF3D8B`) with `ST` inside (`border: 3px solid #2A1230`), followed by `ST Dev Solutions`.
* **Right:** Station links sitting along a horizontal route bar with circular station nodes underneath: `How we work`, `Live demo`, `Work (3 Live Sites)`, `Pricing`, `Talk to us`.

#### Station 0 · Hero Section
* **Headline (100px–136px, sentence case, cropped slightly toward left edge):**  
  `Your shop is on the street. Put it on the map.`
* **Lead Copy:**  
  `We build fast, plain-English websites for gyms, travel agencies, clinics, salons, and shops across Odisha. You see a working draft on your phone in 3 days—and pay only if you love it.`
* **Primary CTA:** Pill button in `#FF3D8B` (`Get a free site audit`) + secondary link (`Preview our 3 live client sites ↓`).
* **Right Interactive Ticket Card (Rotated `-3deg`):**
  * **Interactive Before / After Drag Slider:**
    * **Before (Left side):** SVG illustration of an offline street chalkboard menu (` Invisible on Google · Missed calls`).
    * **After (Right side):** SVG illustration of a live mobile-ready business website (`Top of Google Maps · 1-Click WhatsApp Bookings`).
  * **Route Ticket Details Below Slider:**
    * `From:` Offline & word-of-mouth only
    * `To:` Found first on Google & WhatsApp
    * `Fare:` Your first call is free

#### Station 1 · How We Work (Scroll-Driven Bus & 7-Day Route)
* **Scroll Mechanic:** As the visitor scrolls down this section, an inline SVG/3D **Transit Bus** glides smoothly along the route line from Station 1 to Station 4.
* **The 4 Stations & Timeline Badges:**
  1. **Day 1 — Visit:** We visit your shop, gym, or clinic (or hop on a 20-minute call), take photos, and learn what your customers ask for most. *(You receive: A clear 1-page plan & fixed price quote).*
  2. **Day 3 — Draft in 3 days:** We build a real, working website on a private link so you can tap through it on your own phone—not a flat picture. *(You receive: Live mobile & desktop draft link).*
  3. **Day 5 — Edit:** Tell us what to change in plain words over WhatsApp or voice note. We tweak photos, prices, and wording until it feels right. *(You receive: Unlimited plain-English revisions).*
  4. **Day 7 — Launch:** Your site goes live on your `.com` or `.in` domain, connected to Google Maps and WhatsApp, with 30 days of free support. *(You receive: Full ownership + Google setup).*

#### Station 2 · Live Build Demo (8-Second Looping Animation)
* A wide browser canvas on the page that loops cleanly every 8 seconds (with a `Pause / Play animation` button for accessibility), showing a blank screen assembling a local shop website step-by-step:
  * `0s–2s (Step 1):` Brand header, shop name, and navigation bar snap into place.
  * `2s–4s (Step 2):` Hero banner, shopfront photo, and location badge appear.
  * `4s–6s (Step 3):` Service/menu cards with transparent ₹ prices populate.
  * `6s–8s (Step 4):` Google Maps pin and green WhatsApp instant-order button light up.

#### Station 3 · Work (Real Client Case Studies + In-Page Live Iframe Previews)
* Features **RS Fit Club**, **IronForge Gym**, and **Wanderlust Travels** as staggered browser windows connected to the route spine.
* Includes:
  * **Quick Switcher Bar** at the top of the section: `[ Preview inside page: 01 RS Fit Club | 02 IronForge Gym | 03 Wanderlust Travels ]` so a business owner can test all 3 live websites inside an embedded interactive browser frame right on the homepage, toggle between **Desktop View** and **Phone View**, or open the full-screen modal.

#### Station 4 · Trust, Team & Risk-Free Promise
* **The Team (Oval Tram-Window Portraits):**
  * **Tusar** — `[Tusar Role Placeholder: Code, speed & Google setup]` (Flat illustrated portrait inside an oval tram window).
  * **[Partner Name Placeholder]** — `[Partner Role Placeholder: Design, layout & client care]` (Flat illustrated portrait inside an oval tram window).
* **The "What's Included in Every Ticket" Checklist (6 Items):**
  1. Custom `.com` or `.in` domain name setup
  2. Fast, secure cloud hosting (1st year included)
  3. Built for Indian mobile networks (loads in under 2 seconds)
  4. Google Business Profile & Google Maps pin optimisation
  5. Direct WhatsApp enquiry & booking buttons
  6. 30 days of free post-launch updates & support
* **Zero-Risk Guarantee Banner (Lime `#E8F25C` panel with 5px `#2A1230` border):**
  * **Fixed price. Zero hidden fees. Pay ₹0 if you don't like the Day-3 draft.**
* **3 Client Testimonial Cards** with placeholders for `[Client Name]`, `[Shop/Business Name]`, and quote.

#### Station 5 · Interactive Price Estimator (Torn Bus Ticket Output)
* **Step 1 — Pick number of pages (Radio buttons):**
  * `1-Page Storefront` (Best for cafés, sweet shops & single clinics) — Base: `₹8,000 – ₹10,000`
  * `3–5 Page Business Site` (Best for gyms, salons & coaching centres) — Base: `₹15,000 – ₹18,000`
  * `6–10 Page Full Platform` (Best for travel agencies & multi-branch clinics) — Base: `₹24,000 – ₹28,000`
* **Step 2 — Add optional features (Checkboxes):**
  * `Interactive calculator or custom tool (like BMI / trip planner)` (`+₹3,000`)
  * `Photo shoot & copywriting in Bhubaneswar` (`+₹2,500`)
  * `Multi-language support (English + Odia / Hindi)` (`+₹2,500`)
  * `Online payment gateway / appointment calendar` (`+₹3,500`)
* **Live Output Panel (Perforated Bus Ticket):**
  * Dynamically calculates and displays the live price range (e.g., `₹15,000 – ₹18,000`), estimated delivery time (`5–7 days`), and a button **`Send this estimate to our WhatsApp ↗`** that pre-fills the exact selected pages and features into a WhatsApp message.

#### Station 6 · Frequently Asked Questions (Accessible Accordion)
1. **How much does a website actually cost, and are there monthly fees?** (Explains the one-time build fee and transparent yearly domain/hosting renewal of `[₹2,500/year placeholder]`).
2. **How fast will my website be ready?** (Draft in 3 days, live in 7 days).
3. **Do I own my website and domain name 100%?** (Yes, registered in the client's name, zero lock-in).
4. **What if I need to change prices, photos, or festival offers after launch?** (30 days free changes, plus a simple way to message on WhatsApp anytime).

#### Station 7 · Contact ("The Terminal") & Floating WhatsApp
* Large Hot Magenta (`#FF3D8B`) terminal block with an Off-White (`#F6F7F2`) speech-bubble bus-stop sign reading: **`Tell us about your business`**.
* **Short 3-Field Form:**
  * `Your name`
  * `Shop, gym, clinic, or business type`
  * `Phone / WhatsApp number`
  * `What would you like your website to do?`
* Submitting the form opens a pre-filled WhatsApp chat to `[REPLACE_WHATSAPP_NUMBER]` and shows an instant confirmation message.
* **Floating WhatsApp Pill Button** fixed at the bottom-right of the screen on all devices.

#### Station 8 · Footer
* Deep Aubergine (`#2A1230`) full-width strip with a repeating horizontal transit line and station dots.
* Displays studio address (`Bhubaneswar, Odisha · [REPLACE_ADDRESS]`), phone (`[REPLACE_PHONE_DISPLAY]`), email (`[REPLACE_EMAIL]`), quick links to the 3 live client sites, and `© 2026 ST Dev Solutions`.

---

### 5. Motion, Performance & Accessibility Checklist for the IDE
* **Luxury Easing Only:** All transitions must use `cubic-bezier(0.22, 0.61, 0.36, 1)` over `600ms–900ms`. Zero bouncy springs.
* **Custom Desktop Cursor:** A small `#2A1230` ring with a `#FF3D8B` center dot that expands smoothly when hovering over links, buttons, or live website previews (automatically disabled on touchscreens).
* **Reduced Motion:** Wrap all scroll/loop animations in `@media (prefers-reduced-motion: reduce)` so users who prefer reduced motion get instant static states.
* **Mobile Responsiveness (`< 900px`):** The transit route line becomes a clean vertical spine along the left edge of the screen, and the in-page live website preview defaults to a responsive mobile frame.