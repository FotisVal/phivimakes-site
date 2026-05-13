import type { Project } from "@/data/projects";

export const fobKeyProject: Project = {
  title: "Κάλυμμα κλειδιού",
  titleEn: "FobKey",

  type: "Mini Cooper",

  category: "mini-cooper",

  slug: "fobkey",

  href: "/projects/mini-cooper/fobkey",

  date: "2026-04-11",

  shortDescription:
    "Plastic protective key cover for Mini Cooper 3rd generation keys, designed for everyday use and personalization.",

  description:
    "Το FobKey είναι ένα πλαστικό προστατευτικό κάλυμμα για κλειδί Mini Cooper 3ης γενιάς, κατάλληλο για μοντέλα περίπου 2017-2025. Σχεδιάστηκε για να προστατεύει το κλειδί στην καθημερινή χρήση, να δίνει καλύτερο κράτημα και να προσφέρει δυνατότητα εξατομίκευσης με διαφορετικά σχέδια ή engraving.",

  coverImage: "/projects/mini-cooper/fobkey/cover-generated.jpg",

  images: [
    "/projects/mini-cooper/fobkey/1.jpg",
    "/projects/mini-cooper/fobkey/2.jpg",
    "/projects/mini-cooper/fobkey/3.jpg",
  ],

  stlVersions: [
    {
      label: "Default",
      file: "/models/mini-cooper/fobkey/fobkey-default.stl",
      descriptionEl:
        "Η Default έκδοση είναι η καθαρή βασική μορφή του FobKey. Είναι σχεδιασμένη για προστασία του κλειδιού Mini Cooper 3rd gen, χωρίς επιπλέον σχέδιο ή χάραξη. Ιδανική για καθημερινή χρήση και πιο minimal εμφάνιση.",
      descriptionEn:
        "The Default version is the clean base form of the FobKey. It is designed to protect the Mini Cooper 3rd generation key without extra graphics or engraving. Ideal for everyday use and a minimal look.",
    },
    {
      label: "Golf",
      file: "/models/mini-cooper/fobkey/fobkey-golf.stl",
      descriptionEl:
        "Η Golf έκδοση είναι μια θεματική παραλλαγή του FobKey με πιο ιδιαίτερο χαρακτήρα. Προορίζεται για όσους θέλουν ένα πιο playful ή hobby-inspired κάλυμμα για το κλειδί τους.",
      descriptionEn:
        "The Golf version is a themed FobKey variation with a more distinctive character. It is made for users who want a more playful or hobby-inspired key cover.",
    },
    {
      label: "Custom",
      file: "/models/mini-cooper/fobkey/fobkey-custom.stl",
      descriptionEl:
        "Η Custom έκδοση είναι η βάση για εξατομίκευση. Μπορεί να προσαρμοστεί με όνομα, αρχικά, μικρό logo ή άλλο απλό engraving, ανάλογα με το τι θέλει ο χρήστης.",
      descriptionEn:
        "The Custom version is made for personalization. It can be adapted with a name, initials, a small logo or another simple engraving depending on the user’s request.",
    },
  ],
};