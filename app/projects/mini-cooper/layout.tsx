import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mini Cooper · Phivimakes",
};

export default function MiniLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
