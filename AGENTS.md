# AGENTS.md

## Project Overview
- Marketing site for Kafein.
- Stack: React 19, Vite 8, Framer Motion.
- Language: JavaScript with JSX, no TypeScript.
- Main app entry lives in `src/App.jsx`.

## Brand Snapshot
- Cafe name: `Kafein`
- Short description: Kafein is a specialty coffee shop based in Woluwe-Saint-Lambert, in the heart of the Alma campus.
- Address: `Galeries des Argousiers 3b, 1200 Woluwe-Saint-Lambert`
- Phone: `04 91 56 06 05`
- Contact email: `Hozen2025@outlook.com`
- Opening hours: Monday to Friday, `7:30` to `17:00`
- Brand vibe: minimal and modern

## Brand Colors
- Primary palette: `#f8e6d6`, `#dcc9b0`, `#a3ad91`
- Secondary palette: `#d3a97a`, `#683c11`
- Accent palette: `#555842`, `#3d2b1f`

## Primary Goals
- Keep the site fast and easy to maintain.
- Preserve the existing brand direction unless the task explicitly asks for a redesign.
- Prefer small, focused edits over broad rewrites.

## Commands
- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Build production bundle: `npm run build`
- Run lint: `npm run lint`

## Working Rules
- Read the relevant files before editing.
- Do not add dependencies unless they are necessary for the requested task.
- Do not migrate the project to TypeScript unless explicitly asked.
- Keep file names and structure stable unless a change is clearly justified.
- Prefer editing existing components over introducing new abstractions for small UI changes.

## Validation
- After code changes, run `npm run build`.
- Run `npm run lint` when changing JavaScript or JSX logic.
- If a validation step cannot be run, state that clearly.

## Frontend Expectations
- Preserve responsive behavior on mobile and desktop.
- Reuse the existing visual system in `src/App.css` unless the task is a redesign.
- Keep animations purposeful and lightweight.
- Favor accessible markup, clear button/link text, and meaningful `alt` text.
- Use the Kafein palette and minimal-modern direction as the default visual reference for future edits.

## Content Changes
- Keep cafe content realistic and internally consistent.
- If hours, addresses, menu items, or pricing are changed, update all related sections together.
- Use the business details in `Brand Snapshot` as the default source of truth unless the user explicitly overrides them.
- Keep specialty coffee as a core positioning point.
- The company/catering offer should remain easy to expand or edit over time.
- A savory offer is planned from September onward, so menu and offer sections should stay easy to add to, remove from, or reorganize without a rewrite.
- Current company offer direction:
  - Kafein brings a soft, premium touch to meetings and events with homemade cakes, cookies, brownies, other pastries, and specialty coffee.
  - Suitable copy can mention breakfast meetings, coffee breaks, and other professional gatherings.
  - Offer content should support combinations such as pastries only, coffee only, or both.
- Photos are currently limited, and there is only one menu photo for now. Do not assume a full image library exists; prefer layouts that can work with limited assets and be upgraded later.

## Forms And Lead Capture
- If the site includes an event, catering, or company inquiry form, it should support at least these fields:
  - First name
  - Last name
  - Email
  - Phone
  - Company
  - Event type (`petit dejeuner`, `pause cafe`, `autre`)
  - Desired date
  - Number of people
  - Budget
  - Special notes
- The form should allow interest selection for pastries, coffee, or both.
- Form copy should fit professional requests such as coffee breaks, meetings, and small event catering.

## Pull Requests
- Summaries should focus on user-visible changes, validation performed, and any remaining risks.
