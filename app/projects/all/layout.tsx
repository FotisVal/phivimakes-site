import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Projects · PhiViMakes",
};

export default function AllProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}