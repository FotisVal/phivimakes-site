import type { Project } from "@/data/projects";

export const SaveParkingProject: Project = {
  title: "Βάση Ποτηριού",
  titleEn: "Cup Holder",

  type: "Mini Cooper",

  category: "mini-cooper",

  slug: "cup-holder",

  href: "/projects/mini-cooper/cup-holder",

  date: "2026-05-10",

  shortDescription:
    "Custom Mini Cooper cup holder designed for better stability and everyday usability.",

  description:
    "Custom βάση ποτηριού για Mini Cooper με στόχο καλύτερη σταθερότητα και εργονομία.",

  coverImage:
    "/projects/mini-cooper/cup-holder/cover.jpg",

  images: [
    "/projects/mini-cooper/cup-holder/1.jpg",
    "/projects/mini-cooper/cup-holder/2.jpg",
    "/projects/mini-cooper/cup-holder/3.jpg",
  ],

  stlVersions: [
    {
      label: "Standard",

      file:
        "/models/mini-cooper/cup-holder.stl",

      descriptionEl:
        "Η standard έκδοση της βάσης ποτηριού.",

      descriptionEn:
        "The standard version of the cup holder.",
    },

    {
      label: "Wide",

      file:
        "/models/mini-cooper/CASING_NFC_CAR_V3.stl",

      descriptionEl:
        "Η Wide έκδοση προσφέρει μεγαλύτερη διάμετρο.",

      descriptionEn:
        "The Wide version supports larger cups.",
    },
  ],
};