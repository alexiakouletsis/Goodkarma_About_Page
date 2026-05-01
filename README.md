# Good Karma - About Page

An excerpt from the Good Karma band website, built as part of a team project through Northeastern's [Scout](https://scout.camd.northeastern.edu/). This repo contains the About page, which I designed and developed from scratch.

## Demo

![Desktop Demo](GK_desktop_demo.gif)
![Mobile Demo](GK_mobile_demo.gif)

## Features

- **Scroll-triggered animations** — A custom `useShine` hook using the Intersection Observer API adds a glow pulse to icons and a sweep animation to name blocks every time they enter the viewport
- **Layered double-exposure names** — Member names are rendered as two offset, semi-transparent layers to create a graphic, print-inspired effect
- **Fully responsive** — Separate desktop and mobile layouts with a breakpoint at 768px; mobile uses a stacked card structure, desktop uses alternating horizontal rows
- **Alternating layout system** — Members alternate between left/right photo and name orientations via a `flip` prop, with vertical name rendering for flipped members
- **Per-member theming** — Each member has individual bio colors, border colors, name spacing, and photo positioning defined in `about.ts`
- **Star bars with instrument icons** — Decorative bars between sections feature scroll-animated instrument icons with per-icon size and nudge values

## Tech Stack

- **React**
- **TypeScript**
- **Tailwind CSS**
- **Vite**
- **@fontsource** — Anton and Saira fonts
- **Intersection Observer API** — scroll-triggered animations

## File Structure

- `About.tsx` — Main page component, all layout and animation logic
- `about.ts` — `Member` interface and data for all four band members

## Notes

This is an excerpt from a larger private team repository. Band photos are not included. Built as a designer/developer at Scout NU.
