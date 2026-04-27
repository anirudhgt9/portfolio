import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces-var",
  display: "swap",
  weight: ["300", "400"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans-var",
  display: "swap",
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  title: "Anirudh Thandu — Partnerships & GTM",
  description:
    "I help SaaS companies grow through partners — building programs, closing alliances, and unlocking new markets across Asia.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmSans.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
