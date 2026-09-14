
# Pushpank Kumar Portfolio — CSS 3D Design System

## 1. Design Identity

Build a premium, interactive developer portfolio inspired by Antigravity Design.

The interface should feel like a modern developer workspace floating in a dark digital environment.

Primary design characteristics:

- Spatial depth
- Glassmorphism
- CSS 3D transforms
- Floating UI
- Developer terminal
- Layered surfaces
- Minimal dark theme
- Smooth micro-interactions
- Responsive layouts

The design must feel creative and technical without becoming difficult to use.

---

## 2. Technology Restrictions

### Primary Technologies

- React
- Vite
- JavaScript or TypeScript
- Tailwind CSS if available
- Custom CSS
- CSS 3D transforms

### Allowed

- perspective
- perspective-origin
- transform-style: preserve-3d
- translateZ()
- translate3d()
- rotateX()
- rotateY()
- rotateZ()
- scale3d()
- CSS transitions
- CSS keyframes
- GSAP for CSS transforms
- ScrollTrigger for scroll-linked effects

### Not Allowed

- React Three Fiber
- Three.js
- WebGL
- Heavy 3D libraries
- Canvas-based 3D scenes
- External 3D models
- Unnecessary animation libraries

The website must use HTML elements and CSS transformations for 3D depth.

---

## 3. Visual System

### Theme

Dark-first.

The default interface should use a near-black background with subtle glass surfaces.

### Color Tokens

```css
:root {
  --background: #08090d;
  --surface: #0d1017;
  --surface-elevated: #121722;
  --surface-glass: rgba(18, 23, 34, 0.65);

  --text-primary: #f5f7fb;
  --text-secondary: #9ba4b5;
  --text-muted: #626b7d;

  --border: rgba(255, 255, 255, 0.09);
  --border-hover: rgba(255, 255, 255, 0.18);

  --accent: #8b9cff;
  --accent-secondary: #6ee7b7;

  --terminal-green: #7ee787;
  --terminal-blue: #79c0ff;
  --terminal-yellow: #e3b341;
  --terminal-red: #ff7b72;
}
```

Use CSS variables throughout the project.

### Accent Usage

Accent colors are reserved for:

- CTAs
- Links
- Active navigation
- Terminal highlights
- Focus states
- Selected project states
- Small decorative details

Avoid using accent colors as the background for every card.

---

## 4. Typography

### Main Font

Choose one:

- Inter
- Geist
- Manrope
- Space Grotesk

### Monospace Font

Choose one:

- JetBrains Mono
- Fira Code
- IBM Plex Mono

Use monospace for:

- Terminal
- Technical labels
- Code
- Command palette
- System status

### Typography Rules

Hero:
- Large
- Bold
- Tight line-height
- Responsive

Sections:
- Clear hierarchy
- Consistent spacing

Body:
- Comfortable line-height
- Muted text
- Readable width

Do not use too many font families.

---

## 5. Layout

### Container

```css
.container {
  width: min(100% - 2rem, 1200px);
  margin-inline: auto;
}
```

### Spacing

Use a consistent scale:

- 4px
- 8px
- 12px
- 16px
- 24px
- 32px
- 48px
- 64px
- 96px

### Desktop

- Spacious sections
- Two-column hero
- Floating terminal
- Multi-column project grid

### Mobile

- Single-column sections
- Full-width terminal
- Stacked buttons
- Reduced spacing
- No horizontal overflow

---

# 6. CSS 3D Foundation

## 6.1 Local Perspective

Do not apply a large perspective to the entire page.

Use perspective on local scenes.

```css
.scene {
  perspective: 1200px;
  perspective-origin: center;
}
```

Suitable scenes:

- Hero terminal
- Project card
- Floating status panel
- Featured project visual

## 6.2 Preserve 3D

```css
.spatial-element {
  transform-style: preserve-3d;
}
```

Use this when child elements should appear layered in depth.

## 6.3 Translate Z

Use translateZ to create subtle depth.

```css
.layer {
  transform: translateZ(20px);
}
```

Do not use extreme translateZ values.

## 6.4 Rotation

Keep rotation subtle.

Recommended limits:

```text
rotateX: -4deg to 4deg
rotateY: -5deg to 5deg
```

Never rotate readable text aggressively.

## 6.5 Transform Origin

Use appropriate transform origins.

```css
.spatial-element {
  transform-origin: center center;
}
```

---

# 7. Antigravity Surfaces

## Glassmorphism

Use glass effects selectively.

```css
.glass {
  background: rgba(18, 23, 34, 0.65);
  border: 1px solid rgba(255, 255, 255, 0.09);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
}
```

Suitable elements:

- Navbar
- Terminal
- Featured project
- Floating status cards
- Command palette

Do not apply glass to every small element.

## Shadows

Use soft shadows for depth.

```css
.spatial-shadow {
  box-shadow:
    0 24px 80px rgba(0, 0, 0, 0.35),
    0 8px 24px rgba(0, 0, 0, 0.18);
}
```

Do not animate large shadows continuously.

---

# 8. Developer Terminal

## Component

`DeveloperTerminal.jsx`

## Purpose

A signature interactive terminal component that communicates Pushpank's developer identity.

The terminal should feel like a floating developer workspace.

## Layout

```text
┌─────────────────────────────────────────────┐
│ ● ● ●    pushpank@portfolio ~               │
├─────────────────────────────────────────────┤
│                                             │
│ $ whoami                                    │
│ pushpank                                    │
│                                             │
│ $ role                                      │
│ CSE Student / Frontend Developer            │
│                                             │
│ $ skills                                    │
│ HTML CSS JavaScript React Python Java       │
│                                             │
│ $ projects                                  │
│ Horizon News                                │
│ Katihar Central Library                     │
│ Student Management System                   │
│ React Portfolio                             │
│                                             │
│ $ status                                    │
│ Learning React and building projects        │
│                                             │
└─────────────────────────────────────────────┘
```

## Required Features

- Window header
- Three window dots
- Terminal title
- Status indicator
- Command input
- Command history
- Enter to execute
- Arrow-up history
- Clear command
- Mobile accessibility
- Visible focus state

### Commands

```text
help
whoami
about
skills
projects
contact
clear
```

Only display commands that are implemented.

---

# 9. Terminal CSS 3D

## Scene

```css
.terminal-scene {
  perspective: 1200px;
  perspective-origin: center;
}
```

## Terminal

```css
.terminal {
  transform-style: preserve-3d;
  transform:
    rotateX(2deg)
    rotateY(-3deg)
    translateZ(0);
  transition:
    transform 0.4s ease-out,
    border-color 0.4s ease-out;
}
```

## Header Layer

```css
.terminal-header {
  transform: translateZ(12px);
}
```

## Content Layer

```css
.terminal-content {
  transform: translateZ(6px);
}
```

Do not over-layer every line of terminal text.

## Pointer Tilt

Optional.

Rules:

- Apply only on devices with hover/pointer support.
- Keep tilt within small rotation limits.
- Reset on pointer leave.
- Disable on touch screens.
- Disable under reduced motion.
- Do not interfere with text selection or terminal input.

Use CSS variables if helpful:

```css
.terminal {
  transform:
    perspective(1200px)
    rotateX(var(--rotate-x, 2deg))
    rotateY(var(--rotate-y, -3deg));
}
```

---

# 10. Hero Design

## Visual Goal

The Hero must immediately communicate:

- Who Pushpank is
- What he builds
- His developer identity
- Where visitors can explore his work

### Desktop

```text
--------------------------------------------------
|                                                |
| AVAILABLE FOR INTERNSHIPS                      |
|                                                |
| Building digital experiences     [ TERMINAL ]  |
| with code and creativity.                      |
|                                                |
| Introduction                                  |
|                                                |
| [ View Projects ] [ Resume ]                   |
|                                                |
| GitHub   LinkedIn                              |
|                                                |
--------------------------------------------------
```

### Mobile

```text
----------------------------------
|                                |
| AVAILABLE FOR INTERNSHIPS       |
|                                |
| Building digital experiences   |
| with code and creativity.      |
|                                |
| Introduction                   |
|                                |
| [ View Projects ]              |
| [ Resume ]                     |
|                                |
| [ Terminal ]                   |
----------------------------------
```

## Hero Motion

Use:

- Fade-in
- Subtle upward movement
- Terminal float
- Small parallax background
- CSS 3D depth

Do not block the hero behind long typing animations.

---

# 11. Navbar

## Style

Floating glass navbar.

Features:

- Sticky
- Responsive
- Subtle blur
- Active section state
- Mobile menu
- Resume button

## Motion

Use:

- Background transition on scroll
- Link hover transitions
- Active indicator
- Mobile menu reveal

Keep it lightweight.

---

# 12. About Section

Use a profile workspace style.

Include:

- Biography
- Education
- Current learning
- Development interests

Suggested panel:

```text
CURRENTLY LEARNING

React
JavaScript
Data Structures & Algorithms

EDUCATION

B.Tech CSE
Katihar Engineering College
2025–2029
```

Use subtle 3D depth for cards.

Do not overuse perspective.

---

# 13. Skills Section

Use a technical matrix.

Categories:

Frontend:
- HTML
- CSS
- JavaScript
- React

Programming:
- Python
- Java

Tools:
- Git
- GitHub
- VS Code

## Skill Interactions

- Slight lift
- Accent border
- Icon movement
- Optional translateZ
- Clear focus state

Avoid fake percentage bars.

---

# 14. Projects Section

## Project Card

Each card supports:

- Image
- Title
- Description
- Tech tags
- Live Demo
- GitHub
- Featured status

## CSS 3D Card

```css
.project-card-scene {
  perspective: 1000px;
}

.project-card {
  transform-style: preserve-3d;
  transition:
    transform 0.4s ease-out,
    border-color 0.4s ease-out;
}

.project-card:hover {
  transform:
    translateY(-8px)
    rotateX(2deg)
    rotateY(-2deg);
}
```

Use 3D sparingly.

The entire card must remain readable.

## Featured Project

The first project may have:

- Larger layout
- Larger image
- More detailed description
- Stronger visual hierarchy

Do not make all cards oversized.

---

# 15. Education

Use:

- Timeline
- Glass card
- Subtle depth
- Clear dates
- Strong heading

Content:

B.Tech in Computer Science & Engineering
Katihar Engineering College
2025–2029
Bihar, India

---

# 16. Contact

Heading:

"Let's build something meaningful."

Include:

- Email
- GitHub
- LinkedIn
- Contact form

Form fields:

- Name
- Email
- Message

Implement:

- Frontend validation
- Error states
- Success state
- Accessible labels

Do not pretend a message was sent without a working backend or email integration.

---

# 17. Background

Use a subtle background system.

Possible elements:

- Fine grid
- Radial gradient
- Floating dots
- Minimal lines
- Soft light sources
- Low-opacity geometric layers

## Grid

```css
.background-grid {
  background-image:
    linear-gradient(
      rgba(255, 255, 255, 0.025) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.025) 1px,
      transparent 1px
    );

  background-size: 48px 48px;
}
```

Keep the background subtle.

---

# 18. Motion Rules

## General

Motion must be purposeful.

Use CSS transitions for simple states.

Use GSAP only when coordinated motion is necessary.

## Allowed

- Transform
- Opacity
- Color
- Border color
- Background color

## Avoid Continuous Animation Of

- box-shadow
- filter
- Large blur
- Layout properties
- Width/height
- Top/left when transform is sufficient

## Scroll Motion

Use subtle reveal animations.

Do not hijack scrolling.

Do not create excessive pinned sections.

---

# 19. Reduced Motion

Use:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

JavaScript must also respect reduced motion.

Disable:

- Pointer tilt
- Parallax
- Floating loops
- Scroll animations

Show content immediately.

---

# 20. Responsive Design

Test:

- 320px
- 375px
- 768px
- 1024px
- 1440px

## Mobile Rules

- No horizontal overflow
- Reduce perspective
- Disable or reduce tilt
- Terminal remains readable
- Buttons are touch-friendly
- Cards stack
- Typography scales
- Navigation works

---

# 21. Accessibility

Implement:

- Semantic HTML
- Keyboard navigation
- Visible focus states
- Proper form labels
- Alt text
- Sufficient contrast
- Reduced motion
- No hover-only essential functionality

The terminal must remain usable with a keyboard.

---

# 22. Component Architecture

Suggested:

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── DeveloperTerminal.jsx
│   ├── GlassCard.jsx
│   ├── ProjectCard.jsx
│   ├── SkillBadge.jsx
│   └── Footer.jsx
│
├── sections/
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Education.jsx
│   └── Contact.jsx
│
├── data/
│   ├── projects.js
│   ├── skills.js
│   └── terminalCommands.js
│
├── assets/
│
├── App.jsx
├── main.jsx
└── index.css
```

Keep content separate from UI.

---

# 23. Performance

The portfolio should run smoothly on modest hardware.

Rules:

- No WebGL
- No React Three Fiber
- No heavy 3D libraries
- Use CSS transforms
- Avoid continuous expensive animations
- Use will-change sparingly
- Avoid large images
- Optimize project screenshots
- Test on low-end laptops
- Test mobile performance

CSS 3D is a visual enhancement, not a reason to sacrifice performance.

---

# 24. Final Quality Standard

Before finishing:

- Hero is visually strong
- Terminal is the signature component
- CSS 3D effects feel natural
- Glass surfaces are readable
- Projects look professional
- Typography is consistent
- Mobile layout is polished
- No horizontal overflow
- No fake information
- No broken links
- No console errors
- No unnecessary dependencies
- Build succeeds
- Reduced motion works

## Final Goal

Create a modern developer portfolio that feels like:

> A floating, interactive developer workspace built with React, HTML, CSS, and thoughtful CSS 3D transformations.

The website should be creative, professional, responsive, and technically impressive without relying on WebGL or heavy 3D libraries.
