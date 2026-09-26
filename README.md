# Mobile Car Repair Services (MCRS) — Astro + Bootstrap

A rebuild of the MCRS one-pager: hero, about, services, why-choose-us, a before/after work
gallery with an accessible modal, and a quote-request form with image-only file uploads.

## Run it

```bash
npm install
npm run dev       # http://localhost:4321
npm run build      # outputs to /dist
```

## Structure

```
src/
  layouts/Layout.astro       # <head>, Navbar, Footer, global.css
  components/
    Navbar.astro                # Sticky top bar, offcanvas nav on small screens
    Hero.astro / HeroArt.astro    # Hero section + illustrated car-on-jack graphic
    About.astro
    Services.astro                # 4 service cards
    WhyChooseUs.astro
    WorkGallery.astro               # Before/after cards — each opens the shared modal
    DamageArt.astro                   # Illustrated before/after panel graphic
    Icon.astro                          # Small inline icon set used across cards
    QuoteForm.astro                       # Quote form incl. accessible image upload
    Footer.astro
  data/content.js             # Services / why-choose-us / work-gallery copy — edit here
  styles/global.css           # All design tokens + component styling
```

## Responsive nav

`Navbar.astro` uses Bootstrap's responsive offcanvas (`offcanvas offcanvas-end offcanvas-lg`):
inline horizontal nav at `lg`+, and below that a hamburger button (top-right, matching the
original design) opens a right-sliding drawer. `global.css` also forces the desktop layout
explicitly with its own `@media (min-width:992px)` override rather than trusting Bootstrap's
built-in behavior alone — worth knowing if you ever see the nav disappear at desktop width, that
override block is the first place to check.

## Work gallery modal

Each before/after card in `WorkGallery.astro` is a real `<button>` (keyboard-operable) with
`data-bs-toggle="modal"` and `data-work="<id>"`. A single shared modal listens for Bootstrap's
`show.bs.modal` event, reads `event.relatedTarget.dataset.work`, looks the item up in
`src/data/content.js`, and fills in the title/description/images — so there's one modal in the
DOM instead of one per card. Bootstrap's modal handles focus-trapping, Escape-to-close, and
returning focus to the trigger button automatically.

## Accessibility notes

- Skip-to-content link, landmark structure (`<header>`, `<nav aria-label>`, `<main>`, `<footer>`).
- Every interactive element is a real `<button>`/`<a>`/form control — nothing relies on a `<div>`
  with a click handler alone, so Tab/Enter/Space all work as expected.
- Visible high-contrast focus ring on every interactive element for keyboard users.
- The quote form's upload "dropzone" is a `role="button"` with `tabindex="0"` and its own
  `keydown` handler (Enter/Space opens the file picker) — drag-and-drop is a bonus, not the only
  way in, for people not using a mouse.
- File-list updates and validation errors use `aria-live="polite"` regions so screen reader users
  hear what happened without losing their place.

## Image upload — type and size limits

`QuoteForm.astro`'s script enforces, client-side:
- **Image files only** — checks `file.type.startsWith('image/')` (the `accept="image/*"` on the
  `<input>` is a UI hint for the file picker, not real validation, since it can be bypassed by
  drag-and-drop or a renamed file — the JS check is what actually matters).
- **5MB per photo** (`MAX_SIZE_BYTES`) and **5 photos max** (`MAX_FILES`) — both easy to change
  at the top of the script in `QuoteForm.astro`.
- Rejected files are skipped with a plain-language reason shown in a `role="alert"` message;
  accepted files show as removable thumbnail chips.

**Important:** this is client-side validation only, for a better user experience — it does not
replace server-side validation. Anyone can bypass client-side checks entirely (disabled JS, a
direct API call, etc.), so when you wire this form up to a real backend, re-check file type
(by content/magic bytes, not just the browser-reported MIME type) and size limits there too
before accepting or storing anything.

## Content notes

- All photography is illustrated (flat SVG) rather than real photos of vehicle damage, for the
  same reason as other builds in this conversation — I can't verify licensing on stock/scraped
  images. Swap `HeroArt.astro` and `DamageArt.astro` for real photography whenever you have it;
  the surrounding layout, modal, and gallery logic don't need to change.
- The quote form doesn't submit anywhere yet — connect `QuoteForm.astro`'s submit handler to your
  backend or a form service (with server-side file validation, per above) when ready.
