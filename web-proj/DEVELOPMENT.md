# Portfolio Website — Development Documentation

This document describes the architecture, tech stack, design decisions, and development workflow for Vinay Kumar N's portfolio website.

---

## Table of Contents

1. [Overview](#overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Design System](#design-system)
5. [Animations & UX](#animations--ux)
6. [Components](#components)
7. [Getting Started](#getting-started)
8. [Customization Guide](#customization-guide)
9. [Deployment](#deployment)
10. [Future Improvements](#future-improvements)

---

## Overview

A single-page portfolio website built with **React 19** and **Vite 8**. The site showcases personal information, skills, projects, and a contact form with a modern dark theme, glassmorphism effects, and scroll-triggered animations.

**Live sections:**
- **Hero** — Introduction, CTAs, stats, social links
- **About** — Bio and tech stack grid
- **Projects** — Featured project cards with links
- **Contact** — Validated contact form (client-side demo)

---

## Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev) | UI component library |
| [Vite 8](https://vite.dev) | Build tool and dev server |
| [Framer Motion](https://www.framer.com/motion/) | Page animations and micro-interactions |
| [GSAP](https://gsap.com) | Optional text/scroll animations |
| Custom CSS (`index.css`) | All styling — design tokens, layout, animations, responsive breakpoints |

---

## Project Structure

```
web-proj/
├── index.html              # HTML entry, fonts, meta tags
├── vite.config.js          # Vite + React plugins
├── package.json
├── DEVELOPMENT.md          # This file
└── src/
    ├── main.jsx            # React root mount
    ├── App.jsx             # Root layout (Background + Header + Content + Footer)
    ├── index.css           # Global styles and design tokens
    ├── components/
    │   ├── Background.jsx  # Animated gradient orbs + grid overlay
    │   └── AnimatedSection.jsx  # Reusable scroll-reveal wrappers
    ├── hooks/
    │   └── useActiveSection.js  # Intersection Observer for nav highlighting
    ├── Header.jsx          # Fixed nav with mobile menu
    ├── Cards.jsx           # Logo / avatar in header
    ├── Content.jsx         # Main section router
    ├── Hero.jsx            # Landing hero with staggered entrance
    ├── About.jsx           # Bio + skills
    ├── Projects.jsx        # Project cards
    ├── Contact.jsx         # Contact form
    ├── Footer.jsx
    └── assets/             # Images and static files
```

---

## Design System

### Color Palette

Defined as CSS custom properties in `src/index.css`:

| Token | Value | Usage |
|---|---|---|
| `--bg-base` | `#0a0a0f` | Page background |
| `--text-primary` | `#f4f4f5` | Headings, emphasis |
| `--text-secondary` | `#a1a1aa` | Body text |
| `--accent` | `#6366f1` | Primary accent (indigo) |
| `--accent-cyan` | `#22d3ee` | Secondary accent |
| `--accent-purple` | `#a78bfa` | Tertiary accent |

### Typography

- **Display:** [Syne](https://fonts.google.com/specimen/Syne) — headings and brand name
- **Body:** [Inter](https://fonts.google.com/specimen/Inter) — paragraphs, UI text

### Layout

- Max content width: `1100px`
- Fixed header height: `72px`
- Section vertical padding: `80px` (desktop), `56px` (mobile)

---

## Animations & UX

### Entrance Animations (Hero)
- Staggered fade-up using Framer Motion `staggerChildren`
- Each hero element animates in sequence on page load

### Scroll Reveal (About, Projects, Contact)
- `AnimatedSection` — fades sections in when they enter the viewport
- `StaggerContainer` / `StaggerItem` — cascades children (skills, project cards)

### Background
- Three floating gradient orbs with CSS `@keyframes float`
- Subtle grid overlay with radial mask for depth

### Navigation
- Header background intensifies on scroll (`header--scrolled`)
- Active section highlighted via `IntersectionObserver` (`useActiveSection`)
- Animated pill indicator slides between nav items (`layoutId`)

### Micro-interactions
- Project cards lift on hover (`whileHover={{ y: -8 }}`)
- Skill cards scale and glow on hover
- Social icons lift with border glow
- Contact form success toast with enter/exit animation
- Rotating role text in hero subtitle (CSS `typeCycle` keyframes)

### Accessibility
- `aria-label` on icon-only links
- `aria-expanded` on mobile menu button
- Semantic HTML (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Smooth scroll via `scroll-behavior: smooth`

---

## Components

### `Background.jsx`
Renders fixed decorative layers behind all content. Uses `pointer-events: none` so it never blocks interaction.

### `AnimatedSection.jsx`
Exports three helpers:
- `AnimatedSection` — single section fade-up on scroll
- `StaggerContainer` — parent for staggered children
- `StaggerItem` — individual staggered child

### `useActiveSection.js`
Observes `#home`, `#about`, `#projects`, `#contact` and returns the currently visible section ID for nav state.

### `Contact.jsx`
Form state is managed locally with `useState`. Submission is simulated with a 1.2s delay — connect to a backend or service like [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com) for production.

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Install & Run

```bash
cd web-proj
npm install
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`).

### Build for Production

```bash
npm run build
npm run preview   # preview the production build locally
```

Output is written to `dist/`.

---

## Customization Guide

### Update personal info
Edit these files:
- `Hero.jsx` — name, description, stats, social URLs
- `About.jsx` — bio text and skills array
- `Projects.jsx` — `projectList` array (title, description, tech, links)
- `Contact.jsx` — placeholder text and email in social links
- `Cards.jsx` — header name and title

### Add a profile photo
Replace the initials avatar in `Cards.jsx`:

```jsx
import profilepic from './assets/profilepic.jpg';

<img className="prof-pic-logo" src={profilepic} alt="Vinay Kumar N" />
```

Add corresponding CSS if switching from the gradient avatar div to an `<img>`.

### Change colors
Modify CSS variables at the top of `src/index.css`. The gradient, glows, and accents all derive from these tokens.

### Connect the contact form
Replace the `setTimeout` mock in `Contact.jsx` with a real API call:

```js
const res = await fetch('https://your-api.com/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

---

## Deployment

### Vercel / Netlify
1. Push the repo to GitHub
2. Connect the repository on [Vercel](https://vercel.com) or [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Set root directory: `web-proj`

### GitHub Pages
Add to `vite.config.js`:

```js
export default defineConfig({
  base: '/your-repo-name/',
  plugins: [react()],
});
```

Then build and deploy the `dist` folder.

---

## Future Improvements

- [ ] Add a real backend for the contact form
- [ ] Implement dark/light theme toggle
- [ ] Add project screenshots or thumbnails
- [ ] Blog section or case studies
- [ ] SEO: Open Graph and Twitter card meta tags
- [ ] Analytics integration
- [ ] Resume download button (PDF)
- [ ] Page transition animations between routes (if expanding to multi-page)

---

## Changelog

### v1.0 — June 2026
- Complete UI/UX redesign with modern dark theme
- Added Framer Motion scroll and entrance animations
- Floating gradient background with grid overlay
- Active section navigation with animated indicator
- Responsive mobile slide-out menu
- Typing role animation in hero
- Project card hover effects with accent glows
- Contact form loading state and success toast
- Development documentation (this file)

---

*Built by Vinay Kumar N — Full Stack Developer*
