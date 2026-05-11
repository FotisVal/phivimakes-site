import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automation Gadgets · Phivimakes",
};

export default function AutomationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
