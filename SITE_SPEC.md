# Ulu Lāhui Foundation — Website Site Map & Information Architecture (v2)


## 1. Guiding principles

A few decisions shape every choice below:

**Funder journey first.** A funder or program officer doing 15 minutes of due diligence should be able to find mission, proof of outcomes, board/nonprofit legitimacy, and a way to give — without digging through a news feed. That journey runs: what do you do, does it work, what makes you distinctive, who else has vetted this. The nav order in §2 follows that sequence (Impact before Research, both before Partners) rather than the reverse.

**Bilingual by locale, not by toggle.** ULF's own materials (mission, vision, workshop content) already exist in both ʻŌlelo Hawaiʻi and English, but not every page does. Rather than a site-wide language toggle that implies full bilingual parity everywhere, the site should be architected with real ʻŌlelo Hawaiʻi locale routes (`/haw/...`) that exist only where reviewed Hawaiian-language content exists, and stay English-only elsewhere until translated. See §5 for the routing structure and translation rule.

---

## 2. Primary navigation (final)

Six top-level items plus a visually distinct call-to-action button. This is intentionally similar in breadth to AISES and American Indian College Fund — peer orgs the assessment benchmarked against — rather than the current single-tier "Home / About / Programs / News / Contact."

```
Home   About   Initiatives   Impact   Research   Partners   News        [ Donate ]
```

Notes on changes from the originally proposed layout:


## 3. Full site map

```
Home

About
  /about/mission-vision
  /about/story
  /about/leadership-staff
  /about/board
  /about/governance-values
  /about/organizational-relationships   (renamed from "Our Ecosystem" — see §4; clarifies ULF is distinct from Ke Kumu ʻUlu, Ulu HI-Tech, Ulu Malu Systems)
  /about/transparency                   (EIN, 501(c)(3) status, Candid seal, Charity Navigator note, board roster link — no financials/policy documents for now)

Initiatives
  /initiatives                    (overview/landing, all programs at a glance)
  /initiatives/places-education
  /initiatives/kumu-connect
  /initiatives/ai-for-hawaii
  /initiatives/community-workforce (renamed from "community-programs" — ʻāina-based and workforce work not under a named program brand)

Impact
  /impact                          (at-a-glance stats + Annual Report CTA block, flagship page)
  /impact/by-program
  /impact/stories                  (educator/community testimonials)

Research
  /research                        (overview: approach, themes, lab collaboration)
  /research/publications            (the 7 papers + future ones, each tagged with ULF's relationship to it — filterable)
  /research/kumu-connect-rd         (deep dive: the AI system itself, evaluation data, model/architecture specifics)
  /research/indigenous-data-sovereignty  (renamed from "Data Sovereignty & Cultural AI Stance" — position paper / stance page, a differentiator, see §5)
  /research/collaborators           (renamed from "team-collaborators")

Partners
  /partners                        (all partners + funders, grouped by relationship type — see §4)
  /partners/funders
  /partners/schools-communities
  /partners/become-a-partner

News
  /news                            (press releases + media coverage, chronological)
  /news/press-releases
  /news/media-coverage
  /news/newsletter                 (signup only at launch — see §4 on not exposing a thin public archive)

Support (CTA)
  /support/donate
  /support/corporate-partnership
  /support/foundation-grant-partnership
  /support/volunteer
  /support/contact

Utility (footer / not in primary nav)
  /faq                             (NEW — see §5)
  /media-kit                       (NEW — see §5)
  /accessibility
  /privacy-policy
  /404
```

**Locale routing (cross-cutting, not shown per-page above).** Rather than a language toggle bolted onto individual pages, structure the site so any page *can* have an ʻŌlelo Hawaiʻi counterpart at a parallel `/haw/` path:

```
/                              ↔  /haw/
/about/mission-vision          ↔  /haw/about/mission-vision
/initiatives                   ↔  /haw/initiatives
```

At launch, only build the `/haw/` routes where reviewed Hawaiian-language content already exists — the Mission & Vision text (Ka Mākia / Ka Nuʻukia, already written in the AI4HI Impact Report) is the one confirmed case. Every other page stays English-only until someone provides and reviews the translation. **Never machine-translate ʻŌlelo Hawaiʻi content for this site** — publish only text that a fluent reviewer (e.g., Evyn-Bree Helekahi-Kaiwi, the Cultural Transposition Lead) has supplied or approved. This matters more here than almost anywhere else on the site, given how central language accuracy is to ULF's own credibility and research findings.

---

## 4. Section-by-section content specs

### Home

The home page's job is to move a funder from "who is this" to "this is credible" to "here's proof" in one scroll, then offer a clear next action.

1. **Hero.** One sentence of mission (plain-language version, not the legal mission statement) that gestures at the three-pillar frame from §1 — education, technology & research, community sovereignty — rather than reading as an AI-workshops-only pitch. Plus a photo or video from an actual workshop once available (see §6). Primary CTA: Donate/Support. Secondary CTA: Learn about our impact.
2. **"ULF at a glance" stat bar** (exactly the numbers you supplied, sourced to the AI4HI 2026 Impact Report where overlapping):
   - 450+ students **[confirm — reconcile with AI4HI report's "33 schools reached" framing; report doesn't break out unique student count]**
   - 70+ educators
   - 33+ schools (AI4HI Impact Report: "33 schools reached")
   - 6 complex areas (AI4HI Impact Report: "6 complex areas")
   - Competitive funding figure — **do not** state this as a single "$X million" headline until the underlying figure is resolved per §9; see the funding data model in §8 for why a single aggregate is risky here.
   - Multiple islands + national Indigenous partnerships
   This same data should live in one structured file so it can populate both Home and the Impact page without duplication (see §8).
3. **Three initiatives, one line each** with a photo/icon and a link through: PLACES Education, Kumu Connect, AI for Hawaiʻi.
4. **Proof strip:** funder/collaborator logos (NSF, Google Research, HIDOE, Georgia Tech, University of Hawaiʻi Mānoa, Purple Maiʻa Foundation — see Partners below for the full, relationship-typed list and caveats on logo usage permission).
5. **Featured research or press hit** — e.g., the NSF award or the aiEDU/Ulu HI-Tech partnership, treated as a proof point with a pull-quote, not a news-feed item. See §4 Research and §9 for exactly how to phrase award ownership so this doesn't overstate ULF's role in a collaborative grant.
6. **One testimonial** from an educator (real quotes exist — see Impact/Stories).
7. **Newsletter or updates signup.**
8. Footer (site-wide, every page): EIN, 501(c)(3) status line, a link to About/Transparency, and Candid's 2026 Platinum Seal of Transparency web widget — signals legitimacy on every single page. Do **not** surface a Charity Navigator "Not Rated" badge here (see About/Transparency below for why).

### About

**Mission & Vision** (`/about/mission-vision`, with a reviewed `/haw/about/mission-vision` counterpart) — Publish both the English and ʻŌlelo Hawaiʻi versions:

> **Mission:** To promote and support the socio-economic advancement of the Native Hawaiian community in the Hawaiian Islands and abroad through educational programming, workforce development, and sustainability initiatives.
>
> **Vision:** The vision of Ulu Lāhui Foundation is to provide IT/STEM educational programs and support for schools, teachers, community centers and other non-profit organizations in the state of Hawaiʻi, with a focus on underserved, economically and socially disadvantaged Native Hawaiian communities — while welcoming all children, teachers, and communities who want to increase access to IT/STEM fields.

ʻŌlelo Hawaiʻi versions (Ka Mākia / Ka Nuʻukia) are already written and appear in the AI4HI Impact Report — reuse verbatim rather than re-translating.

This page should go further than the mission/vision statement itself: add 2–3 paragraphs of plain-language narrative on *why* this mission exists (the Kaiapuni education gap, the Hawaiian-language AI/data-sovereignty problem your research has documented), framed around the three pillars in §1, so it doesn't read as boilerplate or as AI-workshops-only.

**Story/History** (`/about/story`) — Founded 2020 **[confirm founding narrative/date with client — 2020 appears in a grant application as "Year Founded"]**. This is a narrative opportunity: how ULF grew from place-based CS education work (the Puʻōhala School/Waikalua Loko Iʻa micro:bit programs, 2021–2023) into PLACES Education, then Kumu Connect, then AI for Hawaiʻi — a track record, not just a list of programs. This story already exists in the Backing Research Summary; it just needs to be rewritten for a general audience instead of an academic one.

**Leadership & Staff** (`/about/leadership-staff`) — Distinct from the board. Real names and roles to seed with:

- Josiah Hester — Interim Executive Director. Leads project direction and partnership initiatives; brings expertise in human-centered computing, Indigenous knowledge systems, and sustainable computing. Also directs Georgia Tech's Ka Moamoa Lab, ULF's ongoing research collaborator (see Research, below) — worth cross-linking as a credibility signal, per the assessment's point that his personal/lab site does this work far better than ULF's. Describe this as a research collaboration between ULF and the lab, not as an institutional affiliation between ULF and Georgia Tech, unless an actual affiliation agreement exists **[confirm]**.
- Rebecca Diego — Program Manager, Education Initiatives & Curricula Designer.
- Evyn-Bree Kalikolaukeha Helekahi-Kaiwi — Cultural Transposition Lead. Also the natural sign-off point for any ʻŌlelo Hawaiʻi text published on the site (see §3, locale routing).
- Contributors/contractors: Rachel Baker-Ramos (UX & Co-Design Advisor), Moi Reilly (STEM Education Advisor), Will Gelder (User Research Advisor), Viswak Raja (UX Design Consultant), Manas Mhasakar (AI Consultant), Michael Parkin (UX Designer & Developer), Loke Tolentino (Curriculum Designer, Hawaii STEM Labs).

Each entry: headshot (see §6), 1–2 sentence bio, and where relevant a link to their research contributions (many are co-authors on the papers in Research).

**Board** (`/about/board`) — Confirmed board members and affiliations:

- Haliʻa Hester — Chairman of the Board. Also Co-founder/COO of Ulu HI-Tech and Co-founder/Board Manager of Ulu Malu Systems.
- Mahealani Austin — Secretary of the Board. Program Coordinator, Kūpuna Community Care Network, Kula No Nā Poʻe Hawaiʻi.
- Jonathan Marstaller — Treasurer of the Board. President/VP roles at Poukihi and Pono Pacific.

**[confirm]** The external assessment describes a four-person board including Josiah Hester; ULF's own grant documentation lists Josiah as Interim Executive Director (staff) and names only the three above as board members. Reconcile the actual current board roster before publishing — this is exactly the kind of ambiguity a funder doing diligence will notice.

Each board bio should include their outside professional affiliation (as above) since those affiliations are themselves a credibility signal (Pono Pacific, established Hawaiʻi community organizations).

**Community Governance / Values** (`/about/governance-values`) — This is where to state, explicitly, ULF's stance as a Native Hawaiian-led and governed nonprofit: co-design methodology, Kanaka Maoli leadership, data sovereignty commitments. Use "Native Hawaiian-led" (or "Native Hawaiian-led and governed," if the current board and staff composition supports it) rather than "Hawaiian-owned" — nonprofits don't have owners in the ordinary corporate sense, and "led and governed" actually makes a stronger, more specific claim about who makes decisions. (ULF's own PLACES Education site currently uses "Hawaiian-owned non-profit"; this is a good opportunity to tighten that language across the rebuilt site.) Your research papers already articulate the substance behind this (assets-based design, "talk story" over formal interviews, community advisory boards) — this page translates that research posture into an organizational values statement, and is a natural place to name Community Sovereignty as one of ULF's three organizational pillars (§1).

**Organizational Relationships** (`/about/organizational-relationships`, renamed from "Our Ecosystem") — **New page, directly answering the assessment's "structural oddity" flag.** "Ecosystem" was the wrong word for this page — it implies an integrated family of organizations, when the actual message is separation. A short, plain-language explainer:

- **Ulu Lāhui Foundation** — the 501(c)(3) nonprofit; runs PLACES Education, Kumu Connect, and AI for Hawaiʻi.
- **PLACES Education** — not a separate legal entity; ULF's own program brand for place-based CS curricula.
- **Ke Kumu ʻUlu**, **Ulu HI-Tech**, and **Ulu Malu Systems** — separate organizations from ULF. State the one confirmed relationship precisely and per-award rather than as a blanket claim: *"For certain projects, ULF works with Ulu HI-Tech in an administrative or fiscal role, as specified by the relevant funding agreement — for example, Ulu HI-Tech serves as fiscal sponsor and project implementation manager for the aiEDU-funded Kumu Connect work."* Don't generalize this into "Ulu HI-Tech fiscally sponsors ULF for some grants" without naming which award; confirm the arrangement (if any) on other awards before describing it more broadly **[confirm]**. Note, without overexplaining, that some individuals — including board chair Haliʻa Hester — hold roles at more than one of these organizations; that's a personal affiliation, not a sign of shared ownership, governance, or finances between the organizations.

Keep this page short and factual rather than diagrammatic — the goal is to close off the "is this all one thing?" question in a sentence or two, not to build out a full org chart implying a relationship that doesn't exist. An approachable public-facing page title to consider instead of the URL slug: "Who We Are — and Aren't."

This page exists specifically so a funder never has to ask "wait, who's actually behind this."

**Transparency** (`/about/transparency`) — Folded into About rather than given its own top-level section (see §2). This directly answers the assessment's single biggest structural gap, scoped to what ULF can actually publish today:

- 501(c)(3) status statement and EIN (84-4804827 — **[confirm this is safe/intended to publish publicly; EIN is often public via IRS records but confirm ULF's preference]**).
- Candid's 2026 Platinum Seal of Transparency, via Candid's web widget linking to ULF's public Candid profile (see §5 for the embed code and placement across the site — this is already earned, so it should appear at launch).
- A link back to the Board page (`/about/board`) rather than duplicating the roster here.
- **Charity Navigator, stated accurately.** ULF already has a Charity Navigator profile (https://www.charitynavigator.org/ein/844804827); it's currently listed as **Not Rated**, because Charity Navigator's star-rating methodology requires a public electronically-filed Form 990 history that ULF doesn't have yet as a young organization. State this plainly rather than omitting it or implying a rating exists: *"Ulu Lāhui Foundation is listed on Charity Navigator; a star rating isn't yet available because sufficient electronically-filed Form 990 history hasn't accumulated. We'll revisit this as our filing history grows."* Link to the profile from this page. Do **not** feature the "Not Rated" status prominently on the homepage or in the proof strip — the Candid Platinum Seal is the stronger, launch-ready trust signal (Candid's 2026 seal program specifically requires goals/strategies, board demographics, and a quantitative impact metric for Platinum, which is a meaningfully higher bar than a nonprofit registry listing).

No Form 990, audited financials, annual report, or written policies (conflict of interest, whistleblower, data privacy) on this page for now — ULF isn't ready to post those yet. Rather than building placeholder subpages for documents that don't exist, keep this to a single, honest page; add a Financials or Policies subpage later, when there's something real to put on it. (The Annual Report content lives as an inline block on `/impact`, not as its own page — see Impact, below, and §9 on not shipping empty "coming soon" pages.)

### Initiatives

Overview page (`/initiatives`) lists all programs with one-line descriptions and photos, linking to. Frame the overview copy around the three pillars from §1 (education, technology & research, community sovereignty) so the page reads as a coherent program strategy rather than three unrelated projects.

**PLACES Education** (`/initiatives/places-education`) — Reuse and expand the program's own strong copy (the assessment noted this sub-page already outperforms the parent site):

> PLACES Education advances place-based and culturally revitalizing educational opportunities through professional development, innovative curricula, and infrastructure, resources, and AI productivity tools — centered on community engagement and co-design, with priority on Indigenous language support, community-based projects, and environmental stewardship.

Include the concrete deliverables list already written: Computer Science Lessons (K-12 standards-aligned, ʻŌlelo Hawaiʻi and English), Computer Literacy Lessons, ʻĀina-Based Projects, the Cultural Transposition Process (working with kumu and kūpuna), ongoing PLACES point-of-contact support, quarterly PD sessions, and resource database access. Funded via a five-year National Science Foundation award; partner schools include communities in Kāneʻohe (Oʻahu), Hāna (Maui), and Niʻihau.

**Kumu Connect** (`/initiatives/kumu-connect`) — Position as ULF's flagship AI product, not just a research prototype, and keep this page's description **evergreen** — no specific model name or version here, since that ages quickly and makes the product sound tied to a particular vendor release:

> Uses culturally grounded retrieval and multi-stage generative AI to help Kaiapuni (Hawaiian immersion) teachers with substitute coverage and culturally-authentic lesson plan generation, evaluated with 36 educators across 3 schools (4.20/5 cultural accuracy, "Good" system usability score, 4.45/5 pedagogical usefulness).

Save the technical specifics — the exact model, the retrieval architecture, the three-phase pipeline — for `/research/kumu-connect-rd` (below), which is the correct home for reproducibility-level detail. Link this page directly to that Research page so "Initiatives" and "Research" reinforce each other without duplicating the same paragraph.

**AI for Hawaiʻi (AI4HI)** (`/initiatives/ai-for-hawaii`) — The single strongest proof-point program on the current site and it's the one with hard numbers. Content directly from the 2026 Impact Report:

- 6 workshops delivered (launch at the HI AI Summit, 2 online ʻŌlelo Hawaiʻi sessions, 2 online English sessions, 1 in-person ʻŌlelo Hawaiʻi + talk story session in Hilo).
- Themes: cultural alignment, data sovereignty, sustainable models, language & translation, low-connectivity AI, creative expression.
- Every participating kumu leaves with ready-to-use lesson plans, resource hub access, ʻŌlelo Hawaiʻi AI terminology, and a $50 classroom materials stipend.
- Outcomes: 33 schools reached, 6 complex areas, 97% average increase in AI understanding (126% among initially low-confidence participants), 4.6/5 workshop usefulness, 4.7/5 resource hub usefulness, 84% of teachers could deliver their lesson as-is or with minor changes.
- Link out to the AI4HI Resource Hub if it's public-facing.

**Community & Workforce** (`/initiatives/community-workforce`, renamed from "community-programs") — Catch-all for ʻāina-based and workforce-adjacent work not under a named program brand (e.g., the Kaona tabletop RPG wellness project, any workforce-development activity implied by the mission statement's "workforce development" pillar). Worth an honest inventory pass — see §9.

### Impact

**At a Glance** (`/impact`) — The flagship funder page. Restate the Home page stat bar with more depth and sourcing, plus:
- Growth-in-confidence data from AI4HI workshops (pre/post): 48.86% improvement explaining AI simply, 77.97% describing training data, 48.12% writing clear prompts, 58.53% recognizing AI hallucinations.
- A simple map or list of islands/complex areas served.
- A funding statement that distinguishes ULF's direct award amounts from the total value of larger collaborative grants ULF participates in (see §8 and §9 — this replaces any single "$X million" headline until the underlying figures are resolved and correctly attributed).
- **An inline "Annual Report" module**, not a separate nav-exposed page: a short block stating "ULF's first Annual Report is in progress" with a notify-me/email capture, living as a section on this page rather than as its own thin `/impact/annual-report` route. See §9 — an institutional-looking site with a conspicuously empty "coming soon" page can read as less credible than not having the section at all; folding it into this page's content avoids that while still capturing the ask you made for an annual-report placeholder.

**By Program** (`/impact/by-program`) — Break the same evidence out per initiative (PLACES / Kumu Connect / AI4HI), so a funder interested in one program specifically doesn't have to reverse-engineer which stat belongs to which.

**Stories** (`/impact/stories`) — Real educator quotes already exist and are strong; use them verbatim with attribution:

> "I learned a lot of new AI terminology and the importance of all the different layers of AI to safeguard our way of life as Hawaiian people when using technology." — Workshop Participant

> "Being mindful of what you share on the internet is not just about personal protection, but the protection of the accuracy of information... and honoring cultural aspects of information to prevent misuse, misrepresentation, and bias." — Workshop Participant

At least 5–6 more exist in the AI4HI Impact Report and can be rotated in. Pair each with a headshot/photo where permission exists, or an initial-based avatar where it doesn't (see §6).

### Research

This is the section the assessment says almost no peer nonprofit can match — treat it as a differentiator, not an academic afterthought.

**Overview** (`/research`) — Plain-language framing: ULF's programs are grounded in an active, published research practice conducted in collaboration with Georgia Tech's Ka Moamoa Lab (directed by Josiah Hester) — describe this as a research collaboration, not an institutional affiliation between the two organizations, unless an actual affiliation agreement exists **[confirm]**. State the throughline in one paragraph: from foundational place-based CS work (2023) through teacher needs-finding (2024) to a fully evaluated AI system, Kumu Connect (2025–2026), plus parallel work on community AI auditing and Native Hawaiian youth wellness. This is also a good page to name Community Sovereignty explicitly as a research throughline (§1), since it's the strongest and clearest expression of that pillar on the current body of work.

**Publications** (`/research/publications`) — A real, citable list (not vague "we do research" language). Each entry needs authors, venue, year, a one-paragraph plain-language summary, a link where publicly available, and — new in this revision — **ULF's actual relationship to the work**, so a program officer never has to wonder whether something is ULF research, Josiah's Georgia Tech research, or related research ULF is simply citing. Use one of: `ULF-led`, `ULF program evaluated` (the paper evaluates a ULF program, e.g. Kumu Connect, even if led by academic researchers), `ULF collaborator` (ULF staff/contractors are co-authors, but the paper isn't about a ULF program specifically), or `foundational research` (predecessor work that informed ULF's programs but predates or sits outside them). Suggested classifications below are a best-effort read of the source material Each of these should have a picture beside it.

1. *Mālama ʻĀina through Micro:bits in Kāneʻohe* — RESPECT 2023. **Foundational research.** Origin project: solar-powered micro:bit water-quality sensors at Waikalua Loko Iʻa fishpond, with Puʻōhala School and the Pacific American Foundation.
2. *"Those Don't Work for Us"* — RESPECT 2024. **ULF collaborator.** Assets-based design research into a Hawaiian teacher-substitute support platform; identified the design requirements that became Kumu Connect.
3. *"I Would Never Trust Anything Western"* — CHI EA 2025. **ULF collaborator.** Survey/interview study of 15+ educators on LLM use in Kaiapuni CS education; motivated Kumu Connect's cultural-alignment design.
4. *Kumu Connect: Design Thinking Case Study* — RESPECT 2025. **ULF program evaluated.** One-year co-design case study with 13 educators; usability testing produced a System Usability Scale score of 87 ("Excellent").
5. *Kumu Connect: Full System and Evaluation* — IDC 2026. **ULF program evaluated.** The flagship technical paper: full system description and a 36-educator, 3-school evaluation.
6. *Whose Knowledge Counts? Community-Centered AI Auditing* — CHI 2026 (Stanford collaboration). **ULF collaborator.** Co-design workshops with 22 Oʻahu educators on community-oriented AI auditing tools.
7. *Kaona: Tabletop RPG for Restorative Hawaiian Futurism* — CHI PLAY 2024. **Foundational research / Ka Moamoa Lab, not a named ULF program** — a wellness-focused tabletop RPG for Native Hawaiian and Pacific Islander youth, developed with the Waiʻanae Coast Comprehensive Health Center. Confirm whether this belongs on ULF's own publications page at all, or is better framed as "related research from our collaborators."

**Kumu Connect R&D** (`/research/kumu-connect-rd`) — This is where the model- and architecture-specific detail belongs (moved from the Initiatives page, above, to keep that page evergreen): *"The system evaluated in the 2025–2026 study used Claude 3.7 Sonnet with retrieval-augmented generation over a curated Hawaiian cultural corpus."* Also cover the three-phase pipeline (constrained generation, reflective verification, lesson synthesis) and the four "future imaginaries" for Indigenous AI the team has articulated (ahupua'a-organized data structures, data sovereignty as a usability principle, cultural-proximity-aware personas, kumu-style incremental knowledge sharing). When the underlying model changes in a future version, only this page needs updating — the Initiatives page copy doesn't reference it.

**Indigenous Data Sovereignty & AI** (`/research/indigenous-data-sovereignty`, renamed from "Data Sovereignty & Cultural AI Stance") — A short position page distilling the cross-cutting finding from your own research: Indigenous data sovereignty, skepticism of "Western" AI defaults, and an assets-based, trust-first methodology. This turns a recurring research theme into a public-facing statement of how ULF believes AI should be built for Indigenous communities, and is the clearest place to connect the Community Sovereignty pillar (§1) to concrete research findings — a strong, differentiated piece of thought leadership for funder and press outreach.

**Research Collaborators** (`/research/collaborators`, renamed from "Team & Collaborators") — Cross-link researchers already named in Leadership/Staff, plus external collaborators (Stanford co-authors on the AI-auditing paper, University of Hawaiʻi at Mānoa PI Tyler Ray, Theorycraftist Games, Waiʻanae Coast Comprehensive Health Center). Use "collaborator," consistently, rather than "partner" here — see Partners, below, on why that distinction matters.

### Partners

The current site's credibility gap isn't just "no partners listed" — it's that a flat, undifferentiated partner list invites a funder to assume every named organization has the same kind of formal relationship with ULF, which isn't accurate. Classify every entry by relationship type rather than using "Partner" as a catch-all:

**Overview** (`/partners`) — Grouped by relationship type, not a single undifferentiated list:

- **Funders:** National Science Foundation, Google Research.
- **Research collaborators:** Georgia Tech (Ka Moamoa Lab), University of Hawaiʻi at Mānoa (PI Tyler Ray), Stanford University (AI-auditing co-design study).
- **Program collaborators:** Purple Maiʻa Foundation, GoFarm Hawaiʻi, CIO Council of Hawaiʻi, Waiʻanae Coast Comprehensive Health Center, Theorycraftist Games.
- **Participating schools:** Puʻōhala School, Ke Kula ʻo Nāwahīokalaniʻōpuʻu, Hālau Hekili Middle College, Hilo High School, Ka Waihona o ka Naʻauao, Ka ʻUmeke Kāʻeo, Keonepoko Elementary, and others across the 6 complex areas served, plus the University of Hawaiʻi at Hilo (Ka Haka ʻUla o Keʻelikōlani).
- **Community organizations:** Pacific American Foundation, Bishop Museum, ʻIolani Palace.
- **Government collaborators:** Hawaiʻi Department of Education (HIDOE) — Advanced Technology Office, Office of Curriculum and Instructional Design, Office of Hawaiian Education; Department of Hawaiian Homelands; Kamehameha Schools.
- **Past collaborators:** use this category as programs wind down rather than quietly dropping an organization from the list or leaving a stale "current partner" claim up.

Only label an organization "Partner" on the site if ULF is confident that organization would describe the relationship the same way — when in doubt, use the more specific relationship category instead. This also solves the logo-permission problem cleanly: an organization can appear as a text-only entry in its correct category until logo usage is explicitly approved, rather than the whole list being held up on permissions (confirm logo usage rights before publishing any logo).

**Funders** (`/partners/funders`) — Funder-focused framing, with award context and a clear distinction between ULF's direct award amount and the total value of any larger collaborative grant (e.g., NSF Broadening Participation in Computing grant; Google Research support; the UH Mānoa-led Smart and Connected Communities award ULF participates in as a subawardee — see §8 and §9 on why these numbers should never be silently summed together).

**Schools & Communities** (`/partners/schools-communities`) — The participating-schools list above, ideally on a simple map by island/complex area — this single visual does a lot of work to counter the "vague initiatives" critique from the assessment.

**Become a Partner** (`/partners/become-a-partner`) — A short page aimed at schools, districts, and other nonprofits who want to bring PLACES/Kumu Connect/AI4HI to their community, distinct from the funder-facing Support pages.

### News

**Press Releases** and **Media Coverage** (`/news/press-releases`, `/news/media-coverage`) — Keep the two strongest existing items (the NSF award, the aiEDU/Ulu HI-Tech partnership) but present them as dated press releases with pull quotes and downloadable one-pagers, not feed entries. **Phrase the NSF item carefully:** ULF's current article headlines a "$1.25M NSF Grant," but the award itself went to a multidisciplinary University of Hawaiʻi at Mānoa/Georgia Tech team, with ULF as a collaborator/subawardee rather than the direct recipient of the full amount. Rewrite this press item so it's accurate about who received the award and what ULF's role and direct funding within it is — see §9. As new NSF/foundation awards or press mentions happen, this is also where a "As Seen In" / press-logo strip on the Home page draws from.

**Newsletter** (`/news/newsletter`) — Signup form only at launch. Don't build or expose a public archive page until there are actual past issues to show — an empty "no issues yet" archive reads the same way an empty Annual Report page does (see Impact, above, and §9): it signals absence rather than momentum. Add the archive view once there's real content for it.

### Support (CTA)

- **Donate** (`/support/donate`) — Primary giving CTA; needs a payment processor decision before build (Stripe, Donorbox, Every.org, etc. — flag as an open item, §9). Display Candid's 2026 Platinum Seal of Transparency widget here as well, reinforcing trust at the exact moment someone is deciding to give.
- **Corporate Partnership** (`/support/corporate-partnership`) — Sponsorship tiers, in-kind support (devices/equipment, per the AI4HI report's note that some teachers lack computers).
- **Foundation/Grant Partnership** (`/support/foundation-grant-partnership`) — For program officers: LOI process, current funding priorities, contact.
- **Volunteer** (`/support/volunteer`) — Workshop facilitation, curriculum review, translation/cultural review support.
- **Contact** (`/support/contact`) — General contact, distinct from the funder-specific paths above.

---

## 5. Additional recommendations beyond the original brief

**Nonprofit transparency badges.** ULF has already earned Candid's 2026 Platinum Seal of Transparency — the highest level of Candid's transparency recognition, awarded for publicly sharing information about leadership, finances, programs, goals, and measurable impact. This should ship at launch, not as a future milestone:

- Place the seal in three spots: the site footer (every page), the About/Transparency page, and the Donate/Support page.
- Use Candid's own embed widget rather than a static image — Candid recommends this because the widget links directly to ULF's public Candid profile and updates automatically as future seals are earned, so the site never shows a stale badge. ULF's official embed code (drop this into the footer partial/template and reuse on the Transparency and Donate pages rather than re-hosting the image):

  ```html
  <a aria-label="Ulu Lahui Foundation" href="https://app.candid.org/profile/9940240/ulu-lahui-foundation-84-4804827/?pkId=2dc64ac4-cce5-4669-8ff1-f7e7d993628b" target="_blank">
    <img alt="Candid 2026 Platinum Seal of Transparency" src="https://widgets.guidestar.org/prod/v1/pdp/transparency-seal/9940240/svg" />
  </a>
  ```

  Note the `alt` text above should be filled in (Candid's provided snippet ships with an empty `alt=""`); use of this code implies agreeing to Candid's [terms and conditions](https://candid.org/terms/candid-profiles-and-seals).
- Public profile to link/reference elsewhere on the site (e.g., in the Transparency page copy): https://app.candid.org/profile/9940240/ulu-lahui-foundation-84-4804827
- Suggested caption alongside the seal: "Ulu Lāhui Foundation earned Candid's highest level of transparency recognition by publicly sharing information about our leadership, finances, programs, goals, and measurable impact."