export type Project = {
  title: string;
  titleEn: string;
  type: string;
  category: string;
  slug: string;
  href: string;
  date: string;
  shortDescription: string;
  description: string;
  coverImage: string;
  images: string[];
  stlVersions?: {
    label: string;
    file: string;
  }[];
};

export const allProjects: Project[] = [
  {
    title: "Λαγούμι",
    titleEn: "Lagoumi",
    type: "Aquarium",
    category: "aquarium",
    slug: "lagoumi",
    href: "/projects/aquarium/lagoumi",
    date: "2026-05-08",
    shortDescription: "Custom aquarium cave for fish shelter and aquascaping.",
    description:
      "Το Λαγούμι είναι μια 3D printed κατασκευή για ενυδρείο, σχεδιασμένη ώστε να προσφέρει κρυψώνα στα ψάρια και ταυτόχρονα να ενσωματώνεται όμορφα στο aquascape.",
    coverImage: "/projects/aquarium/lagoumi/cover.jpg",
    images: [
      "/projects/aquarium/lagoumi/1.jpg",
      "/projects/aquarium/lagoumi/2.jpg",
      "/projects/aquarium/lagoumi/3.jpg",
    ],
    stlVersions: [
      {
        label: "Form A",
        file: "/models/aquarium/lagoumi.stl",
      },
      {
        label: "Wide",
        file: "/models/aquarium/lagoumi-wide.stl",
      },
    ],
  },
  {
    title: "Νησίδα",
    titleEn: "Nisida",
    type: "Aquarium",
    category: "aquarium",
    slug: "nisida",
    href: "/projects/aquarium/nisida",
    date: "2026-05-07",
    shortDescription: "Aquarium island concept for decoration and support.",
    description:
      "Η Νησίδα είναι ένα custom aquarium project με στόχο να δημιουργήσει ένα ιδιαίτερο σημείο μέσα στο ενυδρείο.",
    coverImage: "/projects/aquarium/nisida/cover.jpg",
    images: [
      "/projects/aquarium/nisida/1.jpg",
      "/projects/aquarium/nisida/2.jpg",
    ],
    stlVersions: [
      {
        label: "Form A",
        file: "/models/aquarium/nisida.stl",
      },
    ],
  },
];