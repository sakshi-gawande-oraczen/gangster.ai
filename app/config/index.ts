import type {
  CompetitorCard,
  FaqItem,
  FirmProfile,
  NavLink,
  PlatformCard,
  ProblemCard,
  StatItem,
  Step,
  UseCase,
} from "@/app/types";

export const SITE_CONFIG = {
  name: "Gangster.ai",
  tagline: "Construction Intelligence Platform",
  description:
    "Gangster.ai turns your firm's historical data and field intelligence into a competitive advantage — starting with one data source, delivering value in weeks.",
  url: "https://gangster.ai",
  copyright: "© 2026 Gangster.ai. Built for the firms that build everything else.",
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Platform", href: "#platform" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Who It's For", href: "#who-its-for" },
  { label: "Why Now", href: "#why-now" },
];

export const HERO_CONTENT = {
  eyebrow: "Construction Intelligence Platform",
  headline: ["Your competitors aren't beating you on price.", "They're beating you on information."],
  subheadline:
    "Every project your firm has completed is sitting in a system somewhere — unread, uncategorised, and completely useless. Meanwhile, your best estimator is retiring next year and taking thirty years of judgment with him. Gangster.ai fixes both problems. At the same time.",
  primaryCta: "See How It Works",
  secondaryCta: "Talk to Our Team",
} as const;

export const HERO_STATS: StatItem[] = [
  {
    value: "$865B",
    numericValue: 865,
    suffix: "B",
    prefix: "$",
    label: "The size of the EPC market in 2025",
  },
  {
    value: "88%",
    numericValue: 88,
    suffix: "%",
    prefix: "",
    label: "Rise in project abandonment last year",
  },
  {
    value: "499,000",
    numericValue: 499,
    suffix: "K",
    prefix: "",
    label: "Construction workers the industry needs by 2026",
  },
  {
    value: "$1.2T",
    numericValue: 1.2,
    suffix: "T",
    prefix: "$",
    label: "Where the market is headed by 2035",
  },
];

export const SIGNAL_STRIP_TEXT =
  "The largest EPC firms in the world are posting billion-dollar losses. The era of winning on headcount and relationships alone is over. The firms that win the next decade will win on intelligence.";

export const PROBLEM_SECTION = {
  label: "Why now",
  headline: "The construction industry is running on memory. That's a liability.",
  intro:
    "Most EPC firms have invested heavily in software — project management tools, ERP systems, CRMs. But here's what those tools don't do: they don't learn from your data, they don't score risk before it surfaces on site, and they don't capture a single word your project manager said after last Tuesday's owner walkthrough. You have more data than ever. You're making decisions the same way you did twenty years ago.",
  cards: [
    {
      id: "bid-risk",
      title: "You're pricing tomorrow's projects on yesterday's gut feel",
      body: "Material costs are swinging. Tariffs are unpredictable. Project abandonment is spiking. Firms that are still building estimates from industry benchmarks and phone calls to PMs are not just leaving money on the table — they're taking on risk they can't see.",
    },
    {
      id: "talent-cliff",
      title: "Your institutional knowledge has an expiry date",
      body: "The senior people who know which subcontractors cut corners, which owner relationships need careful handling, and why that contingency line was set where it was — they're leaving. And when they go, everything they know goes with them. There is no system capturing it. Not yet.",
    },
    {
      id: "data-paradox",
      title: "You have the data. You just can't use it.",
      body: "Your ERP, your project management system, your procurement records — they hold years of evidence. Patterns about cost overruns, subcontractor performance, scope creep. That evidence is locked in formats no one can query. Your people make decisions without it every single day.",
    },
  ] satisfies ProblemCard[],
} as const;

export const PLATFORM_SECTION = {
  label: "The platform",
  headline: "Two intelligence problems. One platform built to solve both.",
  intro:
    "Gangster.ai doesn't ask you to rip and replace your existing systems. It doesn't require a two-year implementation or a team of consultants to configure an ontology. It starts with what you already have — and makes it work for the first time.",
  pullQuote:
    "Most platforms tell you what happened. Gangster.ai tells you what it means — and what you're about to miss.",
  cards: [
    {
      id: "structured-data",
      label: "Structured data intelligence",
      title: "Make your historical data actually answer questions",
      body: "Your cost history, subcontractor records, and change order logs have never been properly organised. Gangster.ai ingests a single data source, structures it, and makes it queryable. For the first time, your estimators can ask real questions — and get answers built from your firm's own project history, not industry averages.",
    },
    {
      id: "field-intelligence",
      label: "Field intelligence capture",
      title: "Stop losing what your people learn in the room",
      body: "After every owner meeting, site walkthrough, and preconstruction handover, your project managers carry critical intelligence back to the office in their heads. Three minutes. Voice or text. Structured and searchable from day one. No new software to learn. No integration required. Just the knowledge your firm has been losing for decades — finally captured.",
    },
  ] satisfies PlatformCard[],
} as const;

export const USE_CASES_SECTION = {
  label: "Where it delivers",
  headline: "Four places Gangster.ai pays for itself immediately",
  cases: [
    {
      id: "estimation",
      tabLabel: "Smarter bids",
      title: "Build estimates from evidence, not instinct",
      description:
        "When a chief estimator sits down to price a major project, she shouldn't have to call three PMs to ask what something cost two years ago. Gangster.ai structures your firm's full cost history so comparable scopes, geographies, and trade breakdowns are queryable in minutes. The result is a bid built on what your firm actually experienced — not what the industry average suggests.",
      result: "Fewer margin surprises. More competitive bids. Faster turnaround.",
    },
    {
      id: "subcontractor",
      tabLabel: "Smarter awards",
      title: "Know which subcontractors to trust before you sign",
      description:
        "Every subcontractor your firm has ever worked with has left a trail — delivery compliance, change order frequency, defect rates. That data exists in your systems right now. Gangster.ai aggregates it, scores it, and puts it in front of your procurement team at the moment it matters most: before the award, not after the delay.",
      result:
        "Pattern recognition across your full subcontractor portfolio — surfaced before the next contract is signed.",
    },
    {
      id: "owner-meetings",
      tabLabel: "Smarter relationships",
      title: "The things said in the room shouldn't stay in the room",
      description:
        "An owner mentions expansion plans offhand. A development lead signals that schedule matters more than cost. A facilities director hints at a future phase. These are relationship signals — and they disappear the moment your PM gets back in the car. A structured, three-minute capture after every owner interaction means your account team always knows what was said, what was implied, and what to follow up on.",
      result: "Relationship intelligence that stays with the firm — not the individual.",
    },
    {
      id: "handovers",
      tabLabel: "Smarter handovers",
      title: "The construction team deserves to know what preconstruction learned",
      description:
        "Nine weeks of pursuit. Dozens of conversations. A winning bid built on specific assumptions about risk, scope, and owner priorities. And then the construction PM gets a contract document and a handshake. The assumptions that drove every decision in preconstruction never make it to the team that has to deliver on them. Gangster.ai closes that gap — structured, searchable, and waiting on day one.",
      result: "No more starting from scratch. The context travels with the project.",
    },
  ] satisfies UseCase[],
} as const;

export const WHO_ITS_FOR_SECTION = {
  label: "Who it's for",
  headline: "Built for firms that are serious about margin, retention, and growth",
  intro:
    "If your firm is between $400M and $2B in revenue, running 50 or more active projects, and working with a mix of lump sum, GMP, and design-build contracts — you are exactly who Gangster.ai is built for.",
  firmProfile: [
    { label: "Revenue range", value: "$400M – $2B" },
    { label: "Active projects", value: "50 – 200 simultaneously" },
    { label: "Team size", value: "800 – 8,000 people" },
    { label: "Pursuit cycles", value: "12 – 36 months" },
    { label: "Delivery model", value: "Lump sum · GMP · Design-build" },
    { label: "End markets", value: "Federal · Industrial · Infrastructure · Healthcare" },
  ] satisfies FirmProfile[],
  whoYouWork:
    "The conversations that open fastest happen with CEOs and COOs who feel the margin pressure directly — and with chief estimators, procurement heads, and BD leaders who live the data problem every day.",
} as const;

export const COMPETITIVE_SECTION = {
  label: "The honest comparison",
  headline: "Your current tools weren't built to do this. Neither were your competitors'.",
  intro:
    "Procore is excellent at tracking what's happening. Deltek is excellent at tracking the pursuit. Neither was designed to enrich your historical data, score subcontractor risk, or capture what was said after the last owner walkthrough. That's not a criticism. It's a gap. And it's the gap Gangster.ai fills.",
  cards: [
    {
      id: "procore",
      name: "Procore",
      type: "Project management",
      doesWell: "Tracks live project activity and document management",
      doesntDo: "Enrich historical data, surface patterns, or preserve field intelligence",
      isHighlighted: false,
    },
    {
      id: "deltek",
      name: "Deltek / Unanet",
      type: "AEC CRM & ERP",
      doesWell: "Pursuit tracking, financial management, contact records",
      doesntDo: "Score subcontractor risk or capture post-meeting relationship context",
      isHighlighted: false,
    },
    {
      id: "palantir",
      name: "Palantir",
      type: "Enterprise data platform",
      doesWell: "Deep cross-system intelligence at scale",
      doesntDo:
        "Start small. Their engagement model requires years and eight figures before you see value.",
      isHighlighted: false,
    },
    {
      id: "gangster-ai",
      name: "Gangster.ai",
      type: "Construction intelligence",
      doesWell:
        "Starts with one data source. Delivers value in weeks. Grows as your intelligence foundation matures. No ontology. No multi-year build. No rip and replace.",
      doesntDo: "",
      isHighlighted: true,
    },
  ] satisfies CompetitorCard[],
} as const;

export const HOW_IT_STARTS_SECTION = {
  label: "Getting started",
  headline: "You don't need to overhaul anything. You need to start somewhere.",
  steps: [
    {
      number: "01",
      title: "The conversation",
      body: "We don't open with a demo or a capabilities deck. We start by understanding where your firm has felt the intelligence gap most — a margin miss, a subcontractor failure, a PM handover that lost critical context. The right starting point is always the problem you already know you have.",
    },
    {
      number: "02",
      title: "The scoping engagement",
      body: "A paid assessment where Gangster.ai maps your existing systems, evaluates data quality, and identifies where structured intelligence would deliver the fastest and highest return. You come out of it with a clear picture of what's possible — and what to do first.",
    },
    {
      number: "03",
      title: "Phase one delivery",
      body: "One data source. One use case. Measurable value — in weeks, not quarters. Phase two connects the layers as your intelligence foundation matures.",
    },
  ] satisfies Step[],
} as const;

export const FAQ_SECTION = {
  headline: "The questions we hear most",
  items: [
    {
      id: "faq-1",
      question:
        "We already have Procore, Deltek, and Salesforce. Why do we need another platform?",
      answer:
        "You don't need another platform. You need the layer above the platforms you already have. Procore tracks the project. Deltek tracks the pursuit. Salesforce tracks the contact. None of them enrich your data, identify risk patterns, or capture what your people learned in the field. Gangster.ai does — without replacing any of them.",
    },
    {
      id: "faq-2",
      question:
        "We've invested in major implementations before and they didn't deliver. Why would this be different?",
      answer:
        "Because it doesn't start with a major implementation. It starts with one data source — your existing ERP cost history, or your subcontractor procurement records, or nothing more than a voice capture mechanism for your project managers. There is no cross-system integration required in phase one. You see value before you make a larger commitment.",
    },
    {
      id: "faq-3",
      question: "Our project managers are already stretched. They won't use a new tool.",
      answer:
        "The field capture takes three minutes. Voice. In the car after the meeting. It's not a tool they log into — it's a habit that takes less time than the debrief call they're probably already making. And the output comes back to them as a briefing, not a data entry burden.",
    },
  ] satisfies FaqItem[],
} as const;

export const FINAL_CTA_SECTION = {
  headline: "The firms that build the intelligence foundation now will be the ones that win the next decade.",
  subtext:
    "The data your firm has accumulated over years of projects is the most underused competitive asset in your business. The knowledge your people carry is the most fragile. Both are solvable. Both are solvable now.",
  primaryCta: "Request a Briefing",
  secondaryCta: "Explore the Platform",
} as const;

export const ANIMATION_CONFIG = {
  duration: {
    fast: 0.2,
    medium: 0.4,
    slow: 0.6,
    slower: 0.8,
  },
  ease: {
    smooth: [0.4, 0, 0.2, 1],
    spring: [0.34, 1.56, 0.64, 1],
    out: [0, 0, 0.2, 1],
  },
  stagger: {
    tight: 0.05,
    normal: 0.1,
    loose: 0.15,
  },
} as const;
