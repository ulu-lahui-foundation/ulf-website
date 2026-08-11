// The seven publications, each tagged with ULF's relationship to the work.
// Authors and links: TODO fill from the source papers once confirmed for public
// publication — do not publish a URL to an unreleased or non-public copy.
export type PubRelation =
  | "ULF-led"
  | "ULF program evaluated"
  | "ULF collaborator"
  | "foundational research"
  | "related research";

export type Publication = {
  title: string;
  venue: string;
  year: number;
  relation: PubRelation;
  summary: string;
  tone: "alaea" | "moana" | "olena" | "ulu" | "lehua" | "kai";
};

export const publications: Publication[] = [
  {
    title: "Mālama ʻĀina through Micro:bits in Kāneʻohe",
    venue: "RESPECT",
    year: 2023,
    relation: "foundational research",
    tone: "ulu",
    summary:
      "The origin project of ULF's education track: solar-powered micro:bit water-quality sensors at Waikalua Loko Iʻa fishpond, built with Puʻōhala School and the Pacific American Foundation. This place-based work became the seed of PLACES Education.",
  },
  {
    title: "\u201cThose Don\u2019t Work for Us\u201d",
    venue: "RESPECT",
    year: 2024,
    relation: "ULF collaborator",
    tone: "moana",
    summary:
      "Assets-based design research into a Hawaiian teacher-substitute support platform. The design requirements this study identified became the foundation of Kumu Connect.",
  },
  {
    title: "\u201cI Would Never Trust Anything Western\u201d",
    venue: "CHI EA",
    year: 2025,
    relation: "ULF collaborator",
    tone: "lehua",
    summary:
      "A survey and interview study of 15+ educators on LLM use in Kaiapuni CS education. It motivated Kumu Connect's cultural-alignment design.",
  },
  {
    title: "Kumu Connect: Design Thinking Case Study",
    venue: "RESPECT",
    year: 2025,
    relation: "ULF program evaluated",
    tone: "kai",
    summary:
      "A one-year co-design case study with 13 educators. Usability testing produced a System Usability Scale score of 87 (Excellent) and shaped the fully evaluated system that followed.",
  },
  {
    title: "Kumu Connect: Full System and Evaluation",
    venue: "IDC",
    year: 2026,
    relation: "ULF program evaluated",
    tone: "alaea",
    summary:
      "The flagship technical paper: the full system description and a 36-educator, 3-school evaluation. Cultural accuracy of 4.20/5, a Good system usability score, and pedagogical usefulness of 4.45/5.",
  },
  {
    title: "Whose Knowledge Counts? Community-Centered AI Auditing",
    venue: "CHI",
    year: 2026,
    relation: "ULF collaborator",
    tone: "moana",
    summary:
      "Co-design workshops with 22 Oʻahu educators on community-oriented AI auditing tools, in collaboration with Stanford researchers.",
  },
  {
    title: "Kaona: Tabletop RPG for Restorative Hawaiian Futurism",
    venue: "CHI PLAY",
    year: 2024,
    relation: "related research",
    tone: "olena",
    summary:
      "A wellness-focused tabletop RPG for Native Hawaiian and Pacific Islander youth, developed with the Waiʻanae Coast Comprehensive Health Center. Related research from our collaborators rather than a named ULF program.",
  },
];