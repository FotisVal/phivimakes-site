import type { Project } from "@/data/projects";

export const excaliburProject: Project = {
  title: "Εξκάλιμπερ",
  titleEn: "Excalibur",

  type: "Traditional Shaving",

  category: "traditional-shaving",

  slug: "excalibur",

  href: "/projects/traditional-shaving/excalibur",

  date: "2025-05-12",

  shortDescription:
    "A decorative razor stand inspired by the sword in the stone, designed for traditional shaving setups.",

  description:
    "Το Excalibur είναι μια βάση ξυραφιού εμπνευσμένη από το θρυλικό ξίφος στον βράχο. Το ξυράφι τοποθετείται μέσα στον βράχο σαν να είναι το ίδιο το Excalibur, δημιουργώντας ένα ιδιαίτερο διακοσμητικό και λειτουργικό αντικείμενο για traditional shaving setups. Στόχος του project είναι να συνδυάσει πρακτικότητα, θεματικό design και μια πιο συλλεκτική αίσθηση στον χώρο του ξυρίσματος.",

  coverImage: "/projects/traditional-shaving/excalibur/cover.jpg",

  images: [
    "/projects/traditional-shaving/excalibur/1.jpg",
    "/projects/traditional-shaving/excalibur/2.jpg",
    "/projects/traditional-shaving/excalibur/3.jpg",
  ],

  stlVersions: [
    {
      label: "Rock Stand",
      file: "/models/traditional-shaving/excalibur/vraxos.stl",
      descriptionEl:
        "Η βασική έκδοση του Excalibur είναι ένας βράχος-βάση όπου το ξυράφι τοποθετείται κάθετα, σαν ξίφος στον βράχο. Είναι σχεδιασμένη ώστε να λειτουργεί σαν πρακτική βάση αλλά και σαν διακοσμητικό κομμάτι για traditional shaving setup.",
      descriptionEn:
        "The base version of Excalibur is a rock-shaped stand where the razor is placed vertically, like a sword in the stone. It is designed to work both as a practical razor stand and as a decorative piece for a traditional shaving setup.",
    },
  ],
};