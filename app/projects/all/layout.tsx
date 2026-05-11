import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Projects · Phivimakes",
};

export default function AllProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
