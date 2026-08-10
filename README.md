# The Understanding Tree™

Official website for The Understanding Tree™ (Program, Advocacy, and
Institute), built with Next.js and deployed on Vercel.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Open items flagged for Courtney

This site was built from the Claude Website Build Prompt using the
approved mockup images as the content/visual source (no separate written
Master Website Build Specification was supplied). The following were
intentionally left as placeholders rather than invented — see inline
`[FLAG]`-style notes in the code and content:

- **Official logo & artwork files** — the site currently uses a temporary
  emoji mark and labeled placeholder boxes (`PlaceholderArt` component)
  everywhere approved artwork/photography belongs (hero logo, Program
  storybook illustration, Advocacy hero, Institute photo, About portrait,
  Legal hero). Swap these for the real asset files once supplied — do not
  regenerate the artwork with AI.
- **Mission, Purpose, Vision & Legacy Statement** — reserved section on
  the About page (`/about`) with a visible flag; needs Courtney's exact
  approved wording.
- **Contact routing** — no email address or CRM is published on the
  public site (by design, per the spec). The contact form
  (`src/components/ContactForm.tsx`) and newsletter form
  (`src/components/NewsletterForm.tsx`) are UI-complete but not wired to
  a real backend/email service yet — pick a provider (e.g. Formspree,
  Resend) and connect it.
- **Legal & Transparency copy** — the accordion structure and section
  order match the spec; the copy inside is explicitly draft language
  pending attorney review (flagged on-page).
- **Blog / "Growing Under the Tree" and "From the Advocacy Branch"
  articles** — teaser cards only, marked "Blog launching soon"; no full
  article content existed to build from.
- **Institute free-resource library & e-books** — not yet built (source
  content wasn't provided); CTAs route to Contact in the meantime.
