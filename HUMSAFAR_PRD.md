# Product Requirements Document
## HUMSAFAR — Website Project (Phase 1: Sample / Phase 2: Full Build)

**Client:** HUMSAFAR — Support Centre for Women, Youth and Queer Persons, Lucknow
**Prepared by:** [Your name / studio name]
**Date:** August 2026
**Status:** Draft — pending internal review before client presentation

---

## 0. Assumptions & Open Questions

Flagging these up front rather than burying them — they affect scope and should be resolved before Phase 1 build starts:

- Using the official spelling **HUMSAFAR** throughout (the org's own materials use this; "HAMSAFAR" appears to be a typo).
- No confirmation yet on whether HUMSAFAR has existing brand guidelines (logo files, brand colors, approved fonts). Phase 1 assumes **no** existing digital brand system exists beyond what's on their current site — needs verification.
- No confirmation on whether the site needs Hindi/English bilingual support. Given the local Lucknow audience and the fact that survivors and community members are a primary user group, this is a real question, not a nice-to-have — flagged as an open item, not assumed either way.
- Content in this PRD (stats, service list, program names) is pulled from the provided research file, compiled from public sources as of August 2026. It should be **verified directly with HUMSAFAR** before publishing, even for a demo — case numbers and program details for a GBV-focused org are not the kind of thing to get wrong or publish without their sign-off, even in a sample.
- This PRD assumes you (the builder) are pitching HUMSAFAR to win the Phase 2 contract, per the earlier plan: Phase 1 is unpaid/low-cost scoped-down proof of capability, Phase 2 is the paid full engagement.

---

## 1. Background

HUMSAFAR is a Lucknow-based nonprofit (registered as a Trust in 2008, active since 2003) providing crisis support, legal aid, medical referrals, counseling, shelter, and rehabilitation to women survivors of gender-based violence, with an expanded mandate now covering youth and LGBTQIA+ persons. It runs community and school programs across 53 neighborhoods and 42 institutions in the Lucknow division, and partners with government bodies (UP Dept. of Women and Child Welfare) and a volunteer network ("Friends of HUMSAFAR").

Their current web presence (humsafarindia.org) is minimal relative to the scope of their actual work. The opportunity is a website that communicates the seriousness, credibility, and reach of the organization to three very different audiences at once: people who need help, people who fund or partner with the org, and people who want to volunteer.

## 2. Problem Statement

HUMSAFAR's current site does not reflect the scale or credibility of their work (14+ years, 53 neighborhoods, 42 institutions, 10,000+ cases). For a org that depends on donor trust, government partnership, and being findable by someone in crisis, the website is under-serving all three functions at once.

## 3. Goals

1. Present HUMSAFAR's work with the credibility and production quality that matches a 20-year track record — to funders, government partners, and press.
2. Make it fast and low-friction for someone in crisis to find help.
3. Make it easy for volunteers, professionals, and donors to understand how to get involved.
4. Win the Phase 2 contract by demonstrating this in a tightly-scoped sample.

## 4. Target Audiences

| Audience | Primary need |
|---|---|
| Survivor / person in crisis | Find help fast — phone number, location, what HUMSAFAR does, feel safe |
| Donor / funder / CSR partner | Credibility, scale of impact, transparency |
| Volunteer / "Friend of HUMSAFAR" professional | Understand how to contribute, what's needed |
| School / institution / government partner | Understand program offerings (training, POSH, Yuva Tarang) |
| Press / researcher | Facts, history, focus areas, contact |

Note: the first audience has fundamentally different needs (speed, discretion, safety) from the other four (narrative, scale, trust-building). This tension is a real design constraint, not a minor detail — addressed in the Design Document under motion and safety.

## 5. Project Phases

### Phase 1 — Sample Website (this engagement)
A single scrollytelling landing page, built to demonstrate design and technical capability to HUMSAFAR's decision-makers, using their real content and mission — not a generic template. Goal: win approval for Phase 2. Not intended to go live publicly as HUMSAFAR's actual site.

### Phase 2 — Full Website (contingent on Phase 1 approval)
Full multi-page site: Home, About/History, Get Help (crisis-first page), Programs & Services, Focus Areas, Get Involved (volunteer/donate/partner), News/Press, Contact. Includes CMS for HUMSAFAR staff to update content, forms with backend, donation integration if applicable, and (pending the open question above) bilingual support.

Phase 2 scope, timeline, and pricing are deliberately **not** detailed in this document — that's a separate proposal to write once Phase 1 is approved.

## 6. Phase 1 — Detailed Scope

**Format:** One page, scroll-driven narrative, styled after the visual language of Wilderness International's 2024 Impact Report (see Design Document for full breakdown and important caveats on that reference).

**Sections:**
1. **Hero** — full-bleed image, HUMSAFAR's mission stated in one line
2. **Who we are** — short intro, founding year, registration, scope (53 neighborhoods, 42 institutions, Lucknow/Hardoi/Unnao/Sitapur)
3. **How we help** — numbered process sequence (case comes in → assessment → legal/medical support → counseling → shelter/rehab → community prevention programs → long-term reintegration), mirroring the reference site's numbered-step storytelling format
4. **Impact in numbers** — case count, neighborhoods, schools, years active
5. **Focus areas** — women's safety, youth engagement, LGBTQIA+ support, POSH/legal aid
6. **Get involved / Contact** — CTA toward volunteering, partnership, and a visible help contact (even in the demo, this should not be an afterthought)
7. **Footer** — minimal, per reference site convention

**Explicitly out of scope for Phase 1:**
- Multi-page navigation, CMS, backend forms, donation processing, multilingual content, blog/press section, SEO work, hosting/domain setup. These belong to Phase 2 and should be presented as such when pitching, so HUMSAFAR understands what they're approving vs. what comes next.

## 7. Functional Requirements (Phase 1)

- Fully responsive (mobile-first — assume most visitors, especially community members, are on mobile)
- Scroll-triggered animations per Design Document
- Real HUMSAFAR content and (with permission) imagery, not stock placeholders standing in for their actual mission
- A visible, fast-to-find contact/help path even in a single-page demo
- Fast load — this is a pitch artifact; it needs to work flawlessly on a mid-range phone on average Indian mobile data speeds, not just on your dev machine

## 8. Non-Functional Requirements

- **Accessibility:** WCAG AA contrast minimum, given the audience includes people who may be accessing this under stress
- **Motion sensitivity:** respect `prefers-reduced-motion`; do not gate critical content (help/contact info) behind scroll animation
- **Privacy:** no unnecessary third-party trackers on a GBV-adjacent site, even at demo stage — don't build a habit you'd have to unwind in Phase 2
- **Performance:** target sub-3s load on 4G for the hero section

## 9. Content & Image Sourcing

- Copy: adapt from HUMSAFAR's own public materials (as compiled in the research file) — do not invent statistics or program details
- Imagery: avoid identifiable photos of survivors or anything that could compromise anonymity; prefer documentary-style photos of community/training programs, symbolic/abstract imagery, or clearly-licensed stock as placeholders, with a note to HUMSAFAR that final imagery should come from them
- Get explicit sign-off from HUMSAFAR before showing the sample anywhere beyond the pitch meeting itself, given the sensitivity of the subject matter

## 10. Success Criteria

**Phase 1 succeeds if:** HUMSAFAR approves moving to Phase 2.
**Phase 2 (future) succeeds on:** help-seekers finding contact info in under 2 clicks, increased volunteer/donor inquiries, positive feedback from HUMSAFAR staff on ease of content updates.

## 11. Risks

- **Design-clone risk:** the reference site is a bespoke build by a named design agency (Studio GOOD, Berlin), not a template. Reproducing it closely is fine as a *structural and motion reference* for a pitch, but should not be presented as original design work, and Phase 2 should move toward a palette/identity that's actually HUMSAFAR's own — flagged in full in the Design Document.
- **Content sensitivity risk:** publishing unverified case numbers or program details for a GBV organization, even in a demo, carries real reputational risk if wrong. Verify before showing anyone.
- **Tone mismatch risk:** a nature-conservation storytelling aesthetic (long scroll, heavy motion, editorial pacing) does not automatically transfer to a crisis-support org — needs deliberate adaptation, not a straight reskin.
