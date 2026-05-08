export type Project = {
  title: string;
  type: string;
  category: string;
  slug: string;
  href: string;
  date: string;
  description: string;
  coverImage?: string;
  images?: string[];
  stl?: string;
};

export const allProjects: Project[] = [
  {
    title: "Λαγούμι",
    type: "Aquarium",
    category: "aquarium",
    slug: "lagoumi",
    href: "/projects/aquarium/lagoumi",
    date: "2026-05-08",
    description:
      "3D printed aquarium cave structure designed for fish shelter and aquascaping.",
    coverImage: "/projects/aquarium/lagoumi/cover.jpg",
    images: [
      "/projects/aquarium/lagoumi/1.jpg",
      "/projects/aquarium/lagoumi/2.jpg",
    ],
    stl: "/models/aquarium/lagoumi.stl",
  },
  {
    title: "Νησίδα",
    type: "Aquarium",
    category: "aquarium",
    slug: "nisida",
    href: "/projects/aquarium/nisida",
    date: "2026-05-07",
    description:
      "Floating-style aquarium island concept with custom rock and plant support.",
    coverImage: "/projects/aquarium/nisida/cover.jpg",
    images: [
      "/projects/aquarium/nisida/1.jpg",
      "/projects/aquarium/nisida/2.jpg",
    ],
    stl: "/models/aquarium/nisida.stl",
  },
];