export const allProjects = [
  {
    title: "Λαγούμι",
    type: "Aquarium",
    category: "aquarium",
    href: "/projects/aquarium/lagoumi",
    date: "2026-05-08",
  },
  {
    title: "Νησίδα",
    type: "Aquarium",
    category: "aquarium",
    href: "/projects/aquarium/nisida",
    date: "2026-05-07",
  },
  {
    title: "Mini Cooper Phone Mount",
    type: "Mini Cooper",
    category: "mini-cooper",
    href: "/projects/mini-cooper/phone-mount",
    date: "2026-05-06",
  },
];

export const latestProjects = [...allProjects]
  .sort((a, b) => b.date.localeCompare(a.date))
  .slice(0, 3);