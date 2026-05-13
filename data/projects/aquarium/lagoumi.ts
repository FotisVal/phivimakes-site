import type { Project } from "@/data/projects";

export const lagoumiProject: Project = {
  title: "Λαγούμι",
  titleEn: "Lagoumi",
  type: "Aquarium",
  category: "aquarium",
  slug: "lagoumi",
  href: "/projects/aquarium/lagoumi",
  date: "2026-05-25",

  shortDescription:
    "Custom aquarium cave for fish shelter and aquascaping.",

  description:
    "Το Λαγούμι είναι μια 3D printed κατασκευή για ενυδρείο, σχεδιασμένη ώστε να προσφέρει κρυψώνα στα ψάρια και να ενσωματώνεται όμορφα στο aquascape.",

  coverImage: "/projects/aquarium/lagoumi/cover-generated.jpg",

  images: [
    "/projects/aquarium/lagoumi/1.jpg",
    "/projects/aquarium/lagoumi/2.jpg",
    "/projects/aquarium/lagoumi/3.jpg",
  ],

  stlVersions: [
    {
      label: "Form A",
      file: "/models/aquarium/lagoumi.stl",
      descriptionEl:
        "Η αρχική έκδοση του Lagoumi είναι compact και σχεδιασμένη για εύκολη ενσωμάτωση στο ενυδρείο.",
      descriptionEn:
        "The original Lagoumi version is compact and designed to fit naturally inside the aquarium.",
    },
    {
      label: "Wide",
      file: "/models/aquarium/lagoumi-wide.stl",
      descriptionEl:
        "Η έκδοση Wide έχει μεγαλύτερο εσωτερικό χώρο και πιο έντονη παρουσία μέσα στο aquascape.",
      descriptionEn:
        "The Wide version has more internal space and a stronger visual presence inside the aquascape.",
    },
  ],
};