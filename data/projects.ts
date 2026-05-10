import { lagoumiProject } from "@/data/projects/aquarium/lagoumi";
import { SaveParkingProject } from "@/data/projects/automation-gadgets/SaveParking";

export type Project = {
  title: string;
  titleEn: string;
  type: string;
  category: string;
  slug: string;
  href: string;
  date: string;
  shortDescription: string;
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
  SaveParkingProject,
];