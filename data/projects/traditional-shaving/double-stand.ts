import type { Project } from "@/data/projects";

export const doubleStandProject: Project = {
  title: "Καλόγερος Ξυριστικών",
  titleEn: "Double Stand",

  type: "Traditional Shaving",

  category: "traditional-shaving",

  slug: "double-stand",

  href: "/projects/traditional-shaving/double-stand",

  date: "2025-05-13",

  shortDescription:
    "A double shaving stand designed to hold and display traditional shaving tools in a clean and practical way.",

  description:
    "Ο Καλόγερος Ξυριστικών είναι μια διπλή βάση για traditional shaving εργαλεία, σχεδιασμένη ώστε να κρατάει τα ξυριστικά οργανωμένα, σταθερά και ευπαρουσίαστα. Η ιδέα είναι να υπάρχει ένα πρακτικό αλλά και όμορφο αντικείμενο που να ταιριάζει σε ένα shaving setup, δίνοντας χώρο για δύο εργαλεία ή συνδυασμό ξυραφιού και αξεσουάρ.",

  coverImage: "/projects/traditional-shaving/double-stand/cover-generated.jpg",

  images: [
    "/projects/traditional-shaving/double-stand/1.jpg",
    "/projects/traditional-shaving/double-stand/2.jpg",
    "/projects/traditional-shaving/double-stand/3.jpg",
  ],

  stlVersions: [
    {
      label: "Standard",
      file: "/models/traditional-shaving/double-stand/double-stand-pao.stl",
      descriptionEl:
        "Η Standard έκδοση του Καλόγερου Ξυριστικών είναι σχεδιασμένη για να κρατάει δύο shaving εργαλεία με σταθερότητα και καθαρή εμφάνιση. Είναι κατάλληλη για καθημερινή χρήση αλλά και για πιο προσεγμένο traditional shaving setup.",
      descriptionEn:
        "The Standard version of the Double Stand is designed to hold two shaving tools with stability and a clean appearance. It works both as a practical everyday stand and as a display piece for a traditional shaving setup.",
    },
  ],
};