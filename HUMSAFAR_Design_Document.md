# Design Document
## HUMSAFAR — Phase 1 Sample Website

**Reference site:** wilderness-international.org/reports/impactreport2024.html
**Reference agency:** Studio GOOD, Berlin (confirmed via search — this is a bespoke agency build, not a template)

---

## 1. Why this reference, and one important caveat

The reference site works because it's a long-form, single-scroll narrative that moves a visitor from emotional hook → mission → methodology (numbered steps) → proof/impact → call to action, using generous whitespace, full-bleed photography, and restrained scroll animation to make a nonprofit's work feel credible and premium rather than like a typical donation-page template. That structure maps unusually well onto HUMSAFAR's own material — their multi-pronged casework process is naturally an 8-ish step sequence, same as the reference's "how we protect wilderness" steps.

**Caveat worth stating plainly:** this is a custom site built by a paid design agency for a different client. Matching its structure, spacing rhythm, and motion language as a *reference point* for a pitch deck is normal practice (this is how most agencies build mood boards). But I'd treat "same colors, same everything" as shorthand for "same quality bar and structural logic," not literal pixel-for-pixel cloning — partly because I can't actually extract their exact hex values or animation timing from a text fetch (see Section 4), and partly because once HUMSAFAR approves Phase 2, you'll want a palette that's actually theirs, not borrowed from a European wilderness-conservation brand. Worth deciding now whether Phase 1's "sameness" is in service of the pitch (fine) or meant to carry into Phase 2 (worth flagging to them explicitly, so nobody's surprised later).

## 2. What I could confirm about the reference vs. what's inferred

I fetched the live page and pulled its actual structure and copy. I could **not** extract computed CSS (exact hex codes, font-family names, animation durations/easing curves) from that fetch — no headless browser access here. So:

**Confirmed from the actual page:**
- Single-page vertical scroll, no traditional multi-item nav — just logo + two persistent CTA buttons
- Full-bleed hero image with large bold bilingual headline text overlaid directly on the image
- A numbered sequence (1–8), each with a large numeral, short bold heading, and a paragraph — this is the core storytelling device
- Full-bleed photography used as section breaks between text blocks, not as decoration alongside text
- Two CTA buttons ("Read report" / "Donate now" equivalents) that persist/recur through the scroll
- Minimal footer: three text links + logo, on a dark or saturated background

**Inferred from genre convention** (this style of scrollytelling nonprofit report site — flag before your dev builds against it as fact):
- Color palette: likely a deep, muted, nature-toned base (forest green / off-white or cream / one warm accent) — **before Phase 1 build, open the live site's dev tools and pull the actual hex values rather than guessing.** This is a 10-minute task and removes all doubt.
- Typography: large-scale serif or high-contrast display face for headlines, paired with a clean humanist sans for body copy — again, verify via dev tools (View Source / computed styles) rather than assuming.
- Animation: fade-up + slight vertical translate on scroll-into-view for text blocks, background images likely using subtle parallax (moving slower than scroll speed), numbers likely counting up or staggering in sequence. Standard implementation would be GSAP ScrollTrigger or a lighter library like Framer Motion's `whileInView`.

## 3. Adapting the structure to HUMSAFAR content

| Reference section | HUMSAFAR equivalent |
|---|---|
| Hero image + tagline ("Living tree, living space") | Full-bleed image + HUMSAFAR mission line |
| "How we protect wilderness" (8 numbered steps) | "How we help" — case intake → assessment → legal/medical support → counseling/mediation → rescue/shelter/rehab → community & school programs → long-term reintegration |
| Impact photography breaks | Community program / training photography (see imagery notes below) |
| Persistent donate/read-more CTAs | Persistent "Get help" + "Get involved" CTAs — **not the same CTA pair as the reference**, since HUMSAFAR's two audiences (crisis help-seekers vs. donors/volunteers) need different paths, not one donate button |
| Minimal footer | Contact, location, focus areas, footer links |

## 4. Color palette — placeholder, pending direct extraction

Rather than inventing hex codes and presenting them as "the reference site's colors" when I can't actually verify that, here's a workable placeholder direction in the same *tonal register* (muted, grounded, trustworthy — not clinical, not alarmist):

- Base background: warm off-white / cream (`#F6F3EE` range)
- Primary dark: deep charcoal-green or ink (`#1F2A24` range) for text and dark section backgrounds
- Accent: one warm, human accent color — terracotta or warm gold works well for a trust/dignity register (`#C77B4A` range) — avoid red/crisis-coded accent colors given the subject matter
- Reserve final hex values for direct inspection of the reference site's dev tools, or for HUMSAFAR's own brand colors if they have them (open question in the PRD)

## 5. Typography

Direction: one large display face for headlines (serif or high-contrast sans, used big — 60px+ desktop), one clean workhorse sans for body text and UI. If bilingual (Hindi/English) support is confirmed as a requirement, this determines font choice early — not every display serif has a strong Devanagari counterpart, so resolve the language question before locking type.

## 6. Imagery / image placeholders

The reference uses full-bleed, high-production nature photography as the emotional engine of the page. For HUMSAFAR, the equivalent needs care:

- Do **not** use imagery that identifies survivors or depicts distress/violence directly — this is both an ethical and safety issue, not just a style choice
- Favor documentary-style photography of community sessions, training workshops, the Yuva Tarang youth programs, or the team/volunteers — HUMSAFAR likely has some of this from their own archives, worth asking for directly
- Where real imagery isn't available for the demo, use tasteful, clearly-licensed placeholder photography (never anything depicting a specific real event or person without consent) and flag it in the pitch as "placeholder — final imagery to be provided by HUMSAFAR"

## 7. Motion & animation — with a scope-specific caveat

Use the reference's motion language (fade/slide-up reveals on scroll, staggered numbered sections, subtle parallax on full-bleed images, persistent CTA buttons) for the storytelling sections — mission, "how we help," impact numbers. It genuinely fits: it makes the org's work feel considered and credible.

**Where to deliberately break from the reference:** any "Get help" or contact pathway should NOT be gated behind scroll animation or delay. Someone using this site in a moment of crisis needs the phone number/contact path to be immediate, not choreographed. Practically: keep a persistent, always-visible "Get help" CTA in the nav/header from the first frame, independent of the scroll-reveal treatment applied to the narrative content. Also implement `prefers-reduced-motion` support globally — not optional for this subject matter.

## 8. Components list

- Header: logo + persistent "Get help" and "Get involved" CTAs (always visible, no scroll-dependent reveal)
- Hero block: full-bleed image + overlay headline
- Numbered step block (reusable, x8)
- Full-bleed image break block
- Stat highlight block (case count, neighborhoods, schools, years)
- Focus-area grid/list
- Footer: contact, location, links

## 9. Responsive behavior

Mobile-first. On mobile: numbered steps stack full-width, full-bleed images crop to maintain focal point (test crop with real photos, not placeholders, since focal points shift), persistent CTAs collapse to a simplified sticky bar rather than two full buttons competing for space on a small screen.

## 10. Accessibility

- WCAG AA contrast minimum throughout, including text-over-image overlay treatments (this is where scrollytelling sites most commonly fail accessibility audits — verify contrast on every hero/overlay combination, not just body text)
- Full keyboard navigation for CTAs and any interactive elements
- `prefers-reduced-motion` respected sitewide
- Alt text on all imagery, written with the same care as the rest of the content given the subject matter

## 11. Recommended tech stack (Phase 1)

Given your existing stack: **Next.js + TypeScript**, **Framer Motion** for scroll-triggered reveals (lighter weight than GSAP for a single-page build, and you're already in the React ecosystem), Tailwind for styling. Static export is sufficient for Phase 1 — no backend needed since forms/CMS are explicitly Phase 2.

## 12. Open items before build starts

1. Does HUMSAFAR have existing brand colors/logo files/fonts? (affects Section 4–5 directly)
2. Bilingual requirement confirmed or not? (affects Section 5 and content volume)
3. Any real photography available from HUMSAFAR's archives, or placeholder-only for the demo?
4. Confirm the "Get help" CTA destination even for Phase 1 — a real phone number/contact, not a placeholder, since this is the one thing on the page that shouldn't feel like a mockup
