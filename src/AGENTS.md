# AGENTS.md

## Scope
- These instructions apply to files under `src/`.

## Current Structure
- `App.jsx` contains the main one-page marketing layout.
- `App.css` contains most component styling and responsive behavior.
- `index.css` contains base global styles.
- `src/assets/` stores images and static assets used by the app.

## Domain Context
- The site represents `Kafein`, a specialty coffee shop in Woluwe-Saint-Lambert near the Alma campus.
- Default contact details and opening hours come from the root `AGENTS.md` and should stay consistent across the page.
- The visual direction is minimal and modern, using the defined brand palette unless a task explicitly asks for a new direction.

## React Guidelines
- Keep components as simple function components.
- Use React hooks only when they support clear UI behavior.
- Avoid unnecessary state, effects, memoization, or indirection.
- Preserve current section anchors and navigation behavior unless explicitly asked to change them.
- When adding offer or menu content, prefer simple data-driven structures that are easy to expand later.

## Motion Guidelines
- Framer Motion is already in use; prefer staying consistent with that library.
- Keep motion smooth and restrained.
- Avoid stacking multiple heavy scroll or continuous animations on the same section.
- Ensure animations do not break layout or readability on smaller screens.

## Styling Guidelines
- Prefer updating `App.css` and existing class names over introducing a new styling system.
- Reuse existing CSS variables from `:root` when possible.
- Keep spacing, typography, and colors consistent with the current design language.
- Do not introduce inline styles unless they are animation-related or clearly justified.
- When adjusting colors, stay within the approved Kafein palette unless the user asks otherwise.

## Assets
- Reuse existing assets when possible.
- Optimize for web-friendly formats and reasonable file sizes.
- Do not leave unused imports or dead assets behind.
- Assume the project may temporarily rely on a small number of photos and a menu image; layouts should still feel complete with limited imagery.

## Quality Bar
- Check for broken anchors, layout overflow, and mobile menu regressions after UI edits.
- Keep text encoding clean and readable.
- Preserve accessibility basics: semantic sections, readable contrast, and useful image `alt` text.
- If adding a contact or catering form, keep the fields explicit and practical for business inquiries: name, email, phone, company, event type, desired date, guest count, budget, notes, and interest in pastries and/or coffee.
