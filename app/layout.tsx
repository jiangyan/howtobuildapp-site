import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const bodyFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://howtobuild.app"),
  title: "How to Build — Small idea. Real app.",
  description:
    "An independent playground for building with AI. Try three tiny apps, borrow the prompts, and turn your own what-if into something real.",
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "Small idea. Real app.",
    description:
      "Less what if. More it works. Explore the AI building playground at How to Build.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
