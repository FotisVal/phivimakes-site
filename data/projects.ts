import { lagoumiProject } from "@/data/projects/aquarium/lagoumi";
import { saveParkingProject } from "@/data/projects/automation-gadgets/save-parking";
import { fobKeyProject } from "@/data/projects/mini-cooper/fobkey";
import { excaliburProject } from "@/data/projects/traditional-shaving/excalibur";
import { doubleStandProject } from "@/data/projects/traditional-shaving/double-stand";



export type Project = {
  title: string;
  titleEn: string;
  type: string;
  category: string;
  slug: string;
  href: string;
  date: string;
  shortDescription: string;
  shortDescriptionEn: string;
  description: string;
  coverImage: string;
  images: string[];
  stlVersions?: {
    label: string;
    file: string;
    descriptionEl: string;
    descriptionEn: string;
  }[];
};

export const allProjects: Project[] = [
  lagoumiProject,
  saveParkingProject,
  fobKeyProject,
  excaliburProject,
  doubleStandProject,
];