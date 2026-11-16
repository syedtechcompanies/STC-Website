import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About STC",
  description:
    "STC (Syed Tech Company) builds web, mobile and cloud solutions and offers IT consulting.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About STC | Syed Tech Company", type: "website" },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
