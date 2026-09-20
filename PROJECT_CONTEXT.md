# Project Context & AI Agent Knowledge Base

> **File:** `PROJECT_CONTEXT.md`  
> **Purpose:** Central reference document detailing project concept, exact runtime/build dependencies and versions, component architecture, design system tokens, and an exhaustive log of UI fixes and features implemented for future AI agents and human developers.

---

## 🌿 1. Project Concept & Overview

- **Owner:** Pushpank Kumar (Computer Science Engineering student at Katihar Engineering College under BEU Patna, Bihar, India)
- **Tagline:** *"A developer portfolio hidden inside a moonlit digital botanical garden."*
- **Theme & Aesthetic:** An immersive digital botanical garden combining luxury editorial typography, natural flora (leaves, petals, vines, pollen), cinematic moonlight, and restrained frosted glassmorphism.
- **Visual Tenet:** Deep green and dark negative space (`--bg-deep: #060d06`) carrying the visual identity rather than overbearing green glass.

---

## 📦 2. Dependencies & Versions

This project is built with modern ES modules on Node.js (tested on `v24.15.0`).

### Runtime Dependencies
| Package | Version Installed | Declared in `package.json` | Purpose |
| :--- | :--- | :--- | :--- |
| **`react`** | `19.3.0` | `^19.0.0` | Core UI framework |
| **`react-dom`** | `19.3.0` | `^19.0.0` | DOM renderer for React 19 |
| **`three`** | `0.181.2` | `^0.181.0` | 3D graphics rendering engine |
| **`@react-three/fiber`** | `9.7.0` | `^9.7.0` | React renderer for Three.js (React 19 compatible) |
| **`framer-motion`** | `12.23.0` | `^12.23.0` | Declarative UI animations, modal transitions & spring physics |
| **`lucide-react`** | `1.16.0` | `^1.16.0` | SVG icons for general UI actions and concepts |
| **`gsap`** | `3.13.0` | `^3.13.0` | Timeline animations and smooth scroll utility |

### Development Dependencies
| Package | Version Installed | Declared in `package.json` | Purpose |
| :--- | :--- | :--- | :--- |
| **`vite`** | `6.4.3` | `^6.0.7` | Fast development server & Rollup production bundler |
| **`@vitejs/plugin-react`** | `4.3.4` | `^4.3.4` | React Fast Refresh & JSX transformation for Vite |
| **`tailwindcss`** | `3.4.17` | `^3.4.17` | Utility-first CSS framework |
| **`postcss`** | `8.4.49` | `^8.4.49` | CSS transformation pipeline |
| **`autoprefixer`** | `10.4.20` | `^10.4.20` | Vendor prefix parser |

---

## 🏛️ 3. Architecture & File Hierarchy

```
Portfolio/
├── .gitignore
├── dist/                              # Production build output
├── index.html                         # HTML entry with Playfair Display & DM Sans fonts
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js                 # Forest, gold, sage color palette & font family config
├── vite.config.js                     # Vite build config with vendor code-splitting
├── start-server.bat                   # Convenience batch launcher (port 3000)
├── README.md                          # Concept, visual language & feature requirements
├── IMPLEMENTATION_RULE.md             # Strict architectural guidelines
├── PROJECT_CONTEXT.md                 # THIS FILE (AI agent reference & version log)
└── src/
    ├── main.jsx                       # React 19 root bootstrap
    ├── App.jsx                        # Layout orchestrator (Navbar -> Main Sections -> Footer)
    ├── index.css                      # CSS custom properties, glassmorphism, animations
    ├── data/
    │   └── config.js                  # Central data store for bio, social, journey, skills, projects
    ├── utils/
    │   └── helpers.js                 # useReducedMotion, useMousePosition, lerp, math utils
    ├── components/
    │   ├── Footer.jsx                 # Deep forest footer with social links & copyright
    │   ├── botanical/
    │   │   └── BotanicalScene.jsx     # Isolated 3D Three.js canvas (Moon, leaves, pollen, parallax)
    │   └── ui/
    │       ├── GlassComponents.jsx    # GlassCard, GlassButton, GlassInput, GlassTextarea
    │       ├── Icons.jsx              # Dedicated SVG brand icons (GitHub, Instagram, LinkedIn, Mail)
    │       └── Navbar.jsx             # Floating glass header with active spy & mobile drawer
    └── sections/
        ├── Hero.jsx                   # Hero header with 3D BotanicalScene & glass CTAs (#home)
        ├── About.jsx                  # Personal info, education, interests & framed avatar (#about)
        ├── Journey.jsx                # Botanical vine timeline with blooming milestone nodes (#journey)
        ├── Skills.jsx                 # Categorized botanical skills garden with hover glows (#skills)
        ├── Projects.jsx               # Greenhouse Bento grid, project modal & GitHub banner (#projects)
        └── Contact.jsx                # Form with clean labels, bloom feedback & social links (#contact)
```

---

## 🎨 4. Design System & Style Tokens

### Colors (CSS Custom Properties in `src/index.css`)
- **Backgrounds (Lush, atmospheric nocturnal forest floor — less dark, warmer green undertones):**
  - `--bg-deep`: `#0c1b10` (Primary canvas floor)
  - `--bg-forest`: `#122617` (Secondary section background)
  - `--bg-moss`: `#17301e` (Card and tertiary section background)
  - `--bg-card`: `#183320` (Input backgrounds and card surfaces)
  - `--bg-glass`: `rgba(24, 51, 32, 0.75)` (Restrained frosted glass base)
- **Text:**
  - `--text-cream`: `#fbf7ee` (Headings, brand, high contrast)
  - `--text-sage`: `#c8d8c8` (Body text, subheadings)
  - `--text-moss`: `#a2bba2` (Secondary descriptions)
  - `--text-dim`: `#739473` (Captions, labels, timestamps)
- **Accents:**
  - `--accent-gold`: `#e5b958` (Moonlight accent, active indicators)
  - `--accent-sage`: `#82c882` (Botanical green accents)
  - `--accent-emerald`: `#2e7d32` (Vibrant leaf highlights)
  - `--accent-forest`: `#1e4228` (Deep foliage base)
  - `--accent-leaf`: `#4ade80` (Foliage mid-tone)
  - `--terminal-red`: `#f87171` (Form validation & error states)
- **Textures of Red, Yellow, Orange:**
  - `--accent-ember`: `#ef4444`
  - `--accent-sunset`: `#f97316`
  - `--accent-amber`: `#fb923c`
  - `--accent-sun`: `#facc15`
- **Textures of Ethereal Blue & Cyan:**
  - `--accent-azure`: `#38bdf8` (Celestial azure highlights)
  - `--accent-sapphire`: `#60a5fa` (Moonlight rim illumination)
  - `--accent-cyan`: `#22d3ee` (Luminescent petals & fireflies)
- **Borders & Shadows:**
  - Borderless aesthetic: components use `border: none;` and rely on `backdrop-blur-2xl` and soft multi-layered shadows.
  - `--shadow-soft`: `0 4px 24px rgba(0, 0, 0, 0.35)`
  - `--shadow-medium`: `0 12px 48px rgba(0, 0, 0, 0.45)`
  - `--shadow-strong`: `0 24px 80px rgba(0, 0, 0, 0.55)`

### Typography
- **Landing Display / Floral Editorial:** `Marigold` / `Marry Gold` (`font-marigold` / `font-marrygold`) — high-fashion luxury botanical serif for "PUSHPANK".
- **Editorial Serif:** `Playfair Display`, Georgia, serif (Headings, titles, brand)
- **Body Sans:** `DM Sans`, system-ui, -apple-system, sans-serif (Body copy, cards, navigation)

---

## 🛠️ 5. Exhaustive Changelog of UI Fixes & Improvements

### 1. Fixed `useReducedMotion` Return Type Mismatch Bug
- **Issue:** `src/utils/helpers.js` previously returned a raw boolean (`reducedMotion`), but multiple components called it via destructuring (`const { prefersReducedMotion } = useReducedMotion();`). This led to `prefersReducedMotion = undefined`, breaking motion conditions across `Hero`, `Journey`, `Projects`, and `Contact`.
- **Fix:** Enhanced `useReducedMotion` to return a dual-compatible object (`Object.assign(Boolean(reducedMotion), { prefersReducedMotion, reducedMotion, valueOf: () => reducedMotion })`). It now safely supports both `const { prefersReducedMotion } = useReducedMotion()` and `const prefersReducedMotion = useReducedMotion()`.

### 2. Built Isolated 3D Botanical Scene (`BotanicalScene.jsx`)
- **Issue:** The 3D botanical scene was missing; the hero only had 3 flat CSS divs with 2D rotations and a misaligned CSS moon.
- **Fix:** Created `src/components/botanical/BotanicalScene.jsx` using `@react-three/fiber` and `Three.js` fulfilling `IMPLEMENTATION_RULE.md`:
  - Ethereal 3D Moon with realistic procedural canvas crater texture and moonlight halo.
  - Procedural 3D botanical leaves and flower petals floating at varying depths with organic swaying physics.
  - 130-particle luminescent pollen/firefly field drifting with sine-wave motion.
  - Interactive mouse parallax tracking.
  - WebGL Error Boundary with an automatic graceful CSS canvas fallback for devices with reduced motion or disabled WebGL.

### 3. Resolved Hero Section UI & Navigation Target Bugs
- **Issue:** Hero lacked `id="home"`, making Navbar's "Home" link unresponsive. The "Let's Connect" button scrolled to `#about` instead of `#contact`.
- **Fix:** Added `id="home"`, wired "Let's Connect" to `#contact` and "Explore My Work" to `#projects`. Embedded the isolated `BotanicalScene` and added a "Scroll to Wander" button.

### 4. Resolved Collapsed Frame Bug in About Section
- **Issue:** In `About.jsx`, the right frame wrapper had an `absolute inset-0` child with no natural height, collapsing the frame to 0px and hiding the avatar/photo.
- **Fix:** Restructured the layout with a responsive 7:5 grid. Gave the botanical frame proper layout flow (`aspect-[4/5]`, padding, glass borders, decorative corner vines, and avatar disc). Connected bio, education, location, and interests dynamically to `src/data/config.js`.

### 5. Fixed Journey Botanical Vine Timeline & Milestone Positioning
- **Issue:** Contained invalid Tailwind class `md:relative-left-1/2` and `md:h-screen`. Milestone marker lacked `relative`, causing `absolute inset-0` to expand over the entire card.
- **Fix:** Built a centered botanical vine timeline with blooming milestone nodes. Used dynamic data from `personalInfo.journey`, added distinct botanical icons (`Sprout`, `Compass`, `Code2`, `Flower2`), and staggered cards on desktop with responsive mobile alignment.

### 6. Built Bento Greenhouse Grid & Expanded Project Modal
- **Issue:** Hardcoded project data omitted `github` and `demo` URLs (causing `href={undefined}`). Lacked Bento sizing, lacked project expansion modal, and missed the GitHub Connection section.
- **Fix:** Connected directly to `projectsData` in `data/config.js`. Implemented an asymmetric Bento greenhouse grid with a 2-column featured specimen card with a mock browser window preview. Added an animated **Click-to-Expand Modal** for deep dives into tech stacks and links. Added the **GitHub Connection** banner with direct link to `https://github.com/itspushpank`.

### 7. Fixed Skills Garden Visual Polish & Data Flow
- **Issue:** Generic copy-pasted SVG icons on all category cards; plain text boxes without botanical flair.
- **Fix:** Added category-specific icons from `lucide-react` (`Layout`, `Terminal`, `Wrench`, `Lightbulb`). Styled skill chips with responsive glowing indicators, item counters, and botanical accents.

### 8. Resolved Contact Form Label Overlapping Bug & Feedback
- **Issue:** Uncontrolled `<label>` tags were permanently centered over `<input>` text with no floating styles, rendering the form illegible and broken.
- **Fix:** Redesigned form fields with separate structured label bands and clean typography, preventing text overlap. Added a blooming flower celebration animation on submission with a "Send Another Message" reset button.

### 9. Dedicated Social Icons Component (`Icons.jsx`)
- **Issue:** `lucide-react` removed brand icons (`Github`, `Instagram`, `Linkedin`) in recent versions, causing build failures when imported from `lucide-react`.
- **Fix:** Created `src/components/ui/Icons.jsx` exporting `GithubIcon`, `InstagramIcon`, `LinkedinIcon`, and `MailIcon` with clean, accessible SVGs.

### 10. Polished Floating Glass Navbar
- **Issue:** Navbar was missing `journey` from its sections list and lacked an active scroll indicator.
- **Fix:** Synchronized all 6 sections (Home, About, Journey, Skills, Projects, Contact). Implemented scroll-spy to highlight active section. Added a mobile glass drawer.

### 11. Optimized Vite Production Build
- **Fix:** Configured `manualChunks` in `vite.config.js` to split `three` and `vendor` libraries into separate bundles for improved caching and performance.

### 12. Resolved Landing Name "PUSHPANK" Visibility Bug
- **Issue:** The landing page name "PUSHPANK" was previously rendered invisible due to conflicting `filter: drop-shadow(...)` on text with `-webkit-text-fill-color: transparent` in Chromium, compounded by a keyframe animation with negative background offset (`-200%`).
- **Fix:** Removed conflicting CSS filters, corrected the `shimmer` animation bounds (`0% 50%` to `100% 50%`), and ensured standard `background-clip: text` without drop-shadow interference.

### 13. Reverted Light Mode in Favor of Unified Atmospheric Dark Garden
- **Action:** Per user instruction, completely removed the light mode toggle and `ThemeProvider` to maintain a single atmospheric botanical aesthetic. Removed `themeContext.jsx` and simplified component state.

### 14. Lightened the Theme Background
- **Action:** Adjusted the background palette from pitch black (`#060d06`) to a warmer, softer nocturnal green (`--bg-deep: #0c1b10;`, `--bg-forest: #122617;`, `--bg-moss: #17301e;`). This provides a much more inviting and luminous backdrop for botanical elements.

### 15. Integrated Ethereal Textures of Blue Across the UI
- **Action:** Infused celestial blue, azure (`#38bdf8`), sapphire (`#60a5fa`), and cyan (`#22d3ee`) textures across the UI and 3D environment:
  - **3D Botanical Scene:** Added floating celestial azure petals and cyan petals, sapphire rim lighting, and luminous starlight particles.
  - **Hero:** Layered radial azure/cyan glows in the background mesh; styled landing title with azure gradient edge.
  - **About:** Added sky-blue background radial glow and azure accenting on developer frame and location badge.
  - **Journey:** Converted milestone phase 4 (Flower2) to celestial azure with sky glow, and styled the central vine to terminate in a glowing blue bud.
  - **Skills Garden:** Updated Computer Science Roots to celestial azure.
  - **Projects:** Added subtle cyan moonlight reflection glow in the greenhouse preview window and background.
  - **Contact:** Added azure background wash and subtle sky-blue focus rings.

### 16. Adopted Artistic Painting Brush Typography for Landing Name
- **Action:** Changed the typography of the landing page name "PUSHPANK" from mechanical block letters to an organic painting brush style using `Kaushan Script` and `Caveat Brush` (`font-brush`). Paired with a multi-tonal painterly gradient blending warm ivory, radiant gold, sunset orange, ember crimson, and celestial azure.

### 17. Removed Borders Across Navigation & Components
- **Action:** Completely removed harsh borders across the navbar container, nav links, active pills, cards, inputs, buttons, and `.glass` utility classes, replacing them with soft glassmorphism blur (`backdrop-blur-2xl`) and multi-stage box shadows.

### 18. Removed Hero Status Pill Chip
- **Action:** Removed the pill chip badge (`"Moonlit Botanical Garden • Available for Work"`) above "PUSHPANK" in `Hero.jsx`, giving the landing page name full, unobstructed center-stage presence.

### 19. Lush 3D Botanical Canopy Expansion
- **Action:** Significantly expanded the 3D foliage in `BotanicalScene.jsx` so the botanical garden looks rich and full:
  - Added multi-geometry generation supporting broad monstera/tropical leaves, slender fern/fronds, curved willow leaves, and delicate petals.
  - Positioned over 40 distinct 3D botanical elements across the top canopy (left and right), vertical side flanks, bottom undergrowth, midground, and foreground.
  - Increased luminescent starlight/firefly dust particles to 180.
  - Enhanced non-WebGL fallback with expanded botanical silhouettes.

### 20. Replaced About Section Placeholder with Real Developer Portrait
- **Action:** Replaced the initial placeholder disc ("PK") in `About.jsx` with the user's provided high-resolution botanical portrait photo (`/profile.jpg` in `public/`), styled inside the borderless glass frame with subtle scale-on-hover zoom, bottom atmospheric vignette, and floating name chip.

### 21. Updated Favicon to Custom SVG
- **Action:** Updated `index.html` favicon link from default Vite logo (`/vite.svg`) to the custom SVG provided in the public folder (`/favicon.svg`).

### 22. Resolved Vercel Deployment ERESOLVE Peer Dependency Failure
- **Issue:** Vercel deployment threw `ERESOLVE overriding peer dependency` / `Could not resolve dependency: peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from @react-spring/animated@9.7.5`.
- **Cause:** `@react-three/drei` (which was unused) depended on `@react-spring/three` -> `@react-spring/animated`, which declared strict peer dependencies on React <=18, conflicting with React 19.
- **Fix:**
  - Removed unused `@react-three/drei` from `package.json` and pruned 58 bloated unused packages.
  - Added `.npmrc` with `legacy-peer-deps=true`.
  - Added `vercel.json` with explicit `installCommand: "npm install --legacy-peer-deps"`.
  - Regenerated `package-lock.json` cleanly with 0 vulnerabilities.

### 23. Transitioned Landing Name to Marigold Bold Font, Compacted Description, and Streamlined Hero CTAs
- **Action:**
  - Integrated custom luxury editorial typeface `Marigold` / `Marry Gold` (`Marigold-Regular.woff2`, `Marigold-Regular.otf`, `Marigold-Sans.woff2`, `Marigold-Sans.otf`) provided in `public/fonts/`.
  - Configured `@font-face` and Tailwind fontFamily (`marigold`, `marrygold`) with bold styling for the landing page name "PUSHPANK".
  - Made hero description text smaller and refined (`text-xs sm:text-sm max-w-lg`).
  - Removed "Explore My Work" and "Let's Connect" buttons from the landing page per user request, giving the hero a cinematic, minimalist presentation.

### 24. Extended 3D Botanical Scene to Global Website Background with Scroll Parallax
- **Action:**
  - Elevated `BotanicalScene` from `Hero.jsx` to `App.jsx` as a unified, full-page fixed background (`fixed inset-0 z-0 pointer-events-none`).
  - Added smooth scroll tracking (`scrollProgress`) to `BotanicalSceneContent`: as users scroll down through the website, the camera organically descends from the moon canopy down into the lush midground and undergrowth foliage.
  - Enhanced `LuminescentDust` firefly particles to 220, dynamically wrapping around the camera Y position so luminescent dust and fireflies float continuously across all sections (Home, About, Journey, Skills, Projects, Contact, Footer).
  - Updated all section backgrounds from solid colors to translucent gradient washes (`linear-gradient(...)`), allowing the 3D leaves, celestial moon, and fireflies to be visible throughout the entire browsing experience.

---

## 💡 6. Guidance for Future AI Agents & Developers

1. **Do not create monolithic components:** Keep sections isolated and modular as mandated by `IMPLEMENTATION_RULE.md`.
2. **Centralize data in `src/data/config.js`:** Whenever adding new projects, skills, journey milestones, or bio info, edit `src/data/config.js` rather than hardcoding values inside JSX files.
3. **Keep 3D isolated:** The 3D scene in `src/components/botanical/BotanicalScene.jsx` is self-contained. If updating 3D models with GLTF/GLB assets in the future, import them via `@react-three/drei`'s `useGLTF` within that component.
4. **Restrained glassmorphism & No Harsh Borders:** Maintain the borderless aesthetic; do not add 1px opaque borders around glass cards or nav links. Rely on backdrop blurs and soft shadows.
5. **Chromium Text Clipping Bug Warning:** NEVER apply `filter: drop-shadow(...)` directly to an element that has `text-transparent` and `bg-clip-text`. It clips the text invisible in Chromium. Put any glowing dropshadows or radial glows on a parent or sibling element with `-z-10`.
