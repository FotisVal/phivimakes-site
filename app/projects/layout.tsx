import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects · PhiViMakes",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}