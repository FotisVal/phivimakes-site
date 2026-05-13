import type { Project } from "@/data/projects";

export const saveParkingProject: Project = {
  title: "Αποθήκευση Πάρκινγκ",
  titleEn: "Save Parking",

  type: "Automation Gadgets",
  category: "automation-gadgets",
  slug: "save-parking",
  href: "/projects/automation-gadgets/save-parking",

  date: "2026-05-10",

  shortDescription:
    "A practical automation gadget designed to help with parking positioning and everyday usability.",

  description:
    "Το Save Parking είναι ένα πρακτικό automation gadget που δημιουργήθηκε για να βοηθάει στην καθημερινή χρήση του parking. Στόχος του project είναι να δώσει μια απλή, καθαρή και λειτουργική λύση σε ένα επαναλαμβανόμενο πρόβλημα, με custom σχεδιασμό και δυνατότητα προσαρμογής.",

  coverImage: "/projects/automation-gadgets/SaveParking/cover-generated.jpg",

  images: [
    "/projects/automation-gadgets/SaveParking/1.jpg",
  ],

  stlVersions: [
    {
      label: "Standard",
      file: "/models/automation-gadgets/SaveParking/CASING_NFC_CAR_V3.stl",
      descriptionEl:
        "Η Standard έκδοση του Save Parking είναι η βασική μορφή του project. Περιλαμβάνει το κύριο casing και είναι σχεδιασμένη ως πρακτική και καθαρή λύση για καθημερινή χρήση.",
      descriptionEn:
        "The Standard version of Save Parking is the base form of the project. It includes the main casing and is designed as a practical, clean solution for everyday use.",
    },
  ],
};
