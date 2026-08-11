export type Person = {
  name: string;
  role: string;
  initials: string;
  bio: string;
  tone: "alaea" | "moana" | "olena" | "ulu" | "lehua" | "kai";
  photo?: string;
};

export const staff: Person[] = [
  {
    name: "Josiah Hester",
    role: "Interim Executive Director",
    initials: "JH",
    photo: "headshots/josiah.avif",
    tone: "alaea",
    bio: "Josiah is a Kanaka Maoli computer scientist and Associate Professor of Interactive Computing at the Georgia Institute of Technology, where he founded the Ka Moamoa Lab to advance Indigenous communities through sustainable computing, health wearables, interactive devices, and culturally empowering education. He leads ULF's project direction and partnership initiatives, and advocates for Hawaiian sovereignty, education, and environmental protection.",
  },
  {
    name: "Rebecca Diego",
    role: "Program Manager, Education Initiatives & Curricula Designer",
    initials: "RD",
    photo: "headshots/becky.avif",
    tone: "moana",
    bio: "Rebecca is a licensed, active teacher in Hawaiʻi with over ten years in STEM and computer science classrooms, most of it in Hawaiian language immersion schools. She has led the design of culturally based CS curricula reflecting the diverse backgrounds of students in grades K-12, to strengthen engagement, learning outcomes, and equity of access.",
  },
  {
    name: "Evyn-Bree Kalikolaukeha Helekahi-Kaiwi",
    role: "Cultural Transposition Lead",
    initials: "EH",
    photo: "headshots/evyn.avif",
    tone: "kai",
    bio: "Evyn-Bree is a graduate of Hawaiian-medium education and a second-generation ʻŌlelo Hawaiʻi speaker whose family has worked for four generations on the revitalization of Hawaiian language in Hāna, Maui. She brings ʻōlelo Hawaiʻi, ʻike kuʻuna, and moʻomeheu into ULF's work, creating equitable, accessible learning experiences for ʻŌlelo Hawaiʻi-speaking students.",
  },
];

export const consultants: Person[] = [
  {
    name: "Rachel Baker-Ramos",
    role: "UX & Co-Design Advisor",
    initials: "RB",
    photo: "headshots/rachel.avif",
    tone: "olena",
    bio: "Rachel is a research scientist with the Ka Moamoa Lab at Georgia Tech, leading the Education and Public Interest HCI subgroup. Her 7+ years of co-design work includes conservation data dashboards, culturally revitalizing educational games, and place-based bilingual ʻŌlelo Hawaiʻi/English educational technology.",
  },
  {
    name: "Alakaʻi Iaea-Russell",
    role: "Curriculum Design Consultant",
    initials: "AI",
    photo: "headshots/ala.avif",
    tone: "lehua",
    bio: "Alakaʻi is a Hawaiian-medium education and Ka Haka ʻUla o Keʻelikōlani graduate who works to combine culture, language, and education, helping keiki connect to their community through place-based learning.",
  },
  { name: "Moi Reilly", role: "STEM Education Advisor", initials: "MR", tone: "ulu", bio: "" },
  { name: "Will Gelder", role: "User Research Advisor", initials: "WG", tone: "moana", bio: "" },
  { name: "Viswak Raja", role: "UX Design Consultant", initials: "VR",
    photo: "headshots/viswak.avif", tone: "kai", bio: "" },
  { name: "Manas Mhasakar", role: "AI Consultant", initials: "MM",
    photo: "headshots/manas.avif", tone: "olena", bio: "" },
  { name: "Michael Parkin", role: "UX Designer & Developer", initials: "MP",
    photo: "headshots/michael.avif", tone: "ulu", bio: "" },
  { name: "Loke Tolentino", role: "Curriculum Designer, Hawaiʻi STEM Labs", initials: "LT", tone: "lehua", bio: "" },
  { name: "Kula", role: "Senior Curricula Design Consultant", initials: "KU", tone: "alaea", bio: "" },
];

export const board = [
  {
    name: "Haliʻa Hester",
    role: "Chairman of the Board",
    initials: "HH",
    tone: "alaea",
    affiliation: "Co-founder and COO of Ulu HI-Tech; Co-founder and Board Manager of Ulu Malu Systems.",
  },
  {
    name: "Mahealani Austin",
    role: "Secretary of the Board",
    initials: "MA",
    tone: "moana",
    affiliation: "Program Coordinator, Kūpuna Community Care Network, Kula No Nā Poʻe Hawaiʻi.",
  },
  {
    name: "Jonathan Marstaller",
    role: "Treasurer of the Board",
    initials: "JM",
    tone: "kai",
    affiliation: "President and VP roles at Poukihi and Pono Pacific.",
  },
];