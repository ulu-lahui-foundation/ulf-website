// Partners, grouped by relationship type. Text-only until logo usage is approved.
export type PartnerGroup = {
  group: string;
  note?: string;
  partners: string[];
};

export const funders = [
  {
    org: "National Science Foundation",
    detail:
      "Supports ULF's work through collaborative Broadening Participation in Computing awards with a multidisciplinary University of Hawaiʻi at Mānoa and Georgia Tech team, where ULF participates as a collaborator and subawardee for specific projects.",
  },
  {
    org: "Google Research",
    detail:
      "Supports ULF's applied research into culturally grounded AI, including work on low-resource Hawaiian language technology and evaluation with educators.",
  },
];

export const partnerGroups: PartnerGroup[] = [
  {
    group: "Funders",
    partners: ["National Science Foundation", "Google Research"],
  },
  {
    group: "Research collaborators",
    note: "Collaborators, not institutional partners — see Research.",
    partners: [
      "Georgia Tech — Ka Moamoa Lab",
      "University of Hawaiʻi at Mānoa (PI Tyler Ray)",
      "Stanford University — AI-auditing co-design study",
    ],
  },
  {
    group: "Program collaborators",
    partners: [
      "Purple Maiʻa Foundation",
      "GoFarm Hawaiʻi",
      "CIO Council of Hawaiʻi",
      "Waiʻanae Coast Comprehensive Health Center",
      "Theorycraftist Games",
    ],
  },
  {
    group: "Participating schools",
    partners: [
      "Puʻōhala School",
      "Ke Kula ʻo Nāwahīokalaniʻōpuʻu",
      "Hālau Hekili Middle College",
      "Hilo High School",
      "Ka Waihona o ka Naʻauao",
      "Ka ʻUmeke Kāʻeo",
      "Keonepoko Elementary",
      "University of Hawaiʻi at Hilo — Ka Haka ʻUla o Keʻelikōlani",
    ],
  },
  {
    group: "Community organizations",
    partners: ["Pacific American Foundation", "Bishop Museum", "ʻIolani Palace"],
  },
  {
    group: "Government collaborators",
    partners: [
      "Hawaiʻi Department of Education (HIDOE) — Advanced Technology Office, Office of Curriculum and Instructional Design, Office of Hawaiian Education",
      "Department of Hawaiian Homelands",
      "Kamehameha Schools",
    ],
  },
];

export const schoolsByIsland = [
  {
    island: "Oʻahu",
    areas: [
      "Kāneʻohe complex area — Puʻōhala School",
      "Ka Waihona o ka Naʻauao",
      "Ka ʻUmeke Kāʻeo",
    ],
  },
  {
    island: "Maui",
    areas: ["Hāna — Ke Kula ʻo Nāwahīokalaniʻōpuʻu"],
  },
  {
    island: "Hawaiʻi Island",
    areas: [
      "Hilo High School",
      "Hālau Hekili Middle College",
      "Keonepoko Elementary (Puna)",
      "Ka Haka ʻUla o Keʻelikōlani, University of Hawaiʻi at Hilo",
    ],
  },
];