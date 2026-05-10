import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aquarium · PhiViMakes",
};

export default function AquariumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}