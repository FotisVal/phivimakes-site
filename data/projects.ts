export type Project = {
  title: string;
  type: string;
  category: string;
  slug: string;
  href: string;
  date: string;
  shortDescription: string;
  description: string;
  coverImage: string;
  images: string[];
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
    shortDescription: "Custom aquarium cave for fish shelter and aquascaping.",
    description:
      "Το Λαγούμι είναι μια 3D printed κατασκευή για ενυδρείο, σχεδιασμένη ώστε να προσφέρει κρυψώνα στα ψάρια και ταυτόχρονα να ενσωματώνεται όμορφα στο aquascape. Η ιδέα προέκυψε από την ανάγκη για ένα αντικείμενο που να είναι πρακτικό, σταθερό και πιο ιδιαίτερο από τις έτοιμες λύσεις του εμπορίου. Το σχήμα μπορεί να προσαρμοστεί ανάλογα με τις διαστάσεις του ενυδρείου, το είδος των ψαριών και το αισθητικό αποτέλεσμα που θέλουμε.",
    coverImage: "/projects/aquarium/lagoumi/cover.jpg",
    images: [
      "/projects/aquarium/lagoumi/1.jpg",
      "/projects/aquarium/lagoumi/2.jpg",
      "/projects/aquarium/lagoumi/3.jpg",
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
    shortDescription: "Aquarium island concept for decoration and support.",
    description:
      "Η Νησίδα είναι ένα custom aquarium project με στόχο να δημιουργήσει ένα ιδιαίτερο σημείο μέσα στο ενυδρείο, είτε για διακόσμηση είτε για υποστήριξη φυτών, πετρών ή άλλων στοιχείων. Το σχέδιο μπορεί να λειτουργήσει ως βάση για aquascaping και να προσαρμοστεί σε διαφορετικά setups.",
    coverImage: "/projects/aquarium/nisida/cover.jpg",
    images: [
      "/projects/aquarium/nisida/1.jpg",
      "/projects/aquarium/nisida/2.jpg",
    ],
    stl: "/models/aquarium/nisida.stl",
  },
];