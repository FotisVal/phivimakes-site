import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Traditional Shaving · PhiViMakes",
};

export default function TraditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}