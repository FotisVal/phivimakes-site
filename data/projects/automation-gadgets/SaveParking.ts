import type { Project } from "@/data/projects";

export const SaveParkingProject: Project = {
  title: "Αποθήκευση Πάρκινγκ",
  titleEn: "Save Parking",

  type: "automation-gadgets",

  category: "automation-gadgets",

  slug: "save-parking",

  href: "/projects/automation-gadgets/save-parking",

  date: "2026-05-10",

  shortDescription:
    "Custom Mini Cooper cup holder designed for better stability and everyday usability.",

  description:
    "Custom βάση ποτηριού για Mini Cooper με στόχο καλύτερη σταθερότητα και εργονομία.",

  coverImage:
    "/projects/automation-gadgets/SaveParking/cover.jpg",

  images: [
    "/projects/automation-gadgets/SaveParking/1.jpg",
    "/projects/automation-gadgets/SaveParking/2.jpg",
    "/projects/automation-gadgets/SaveParking/3.jpg",
  ],

  stlVersions: [
    {
      label: "Standard",

      file:
        "/models/automation-gadgets/SaveParking/CASING_NFC_CAR_V3.stl",

      descriptionEl:
        "Η standard έκδοση της βάσης ποτηριού.",

      descriptionEn:
        "The standard version of the cup holder.",
    },

    /*{
      label: "Wide",

      file:
        "/models/automation-gadgets/CASING_NFC_CAR_V3.stl",

      descriptionEl:
        "Η Wide έκδοση προσφέρει μεγαλύτερη διάμετρο.",

      descriptionEn:
        "The Wide version supports larger cups.",
    },*/
  ],
};