import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "HowToBuild.app - AI Innovation & Application Development",
    template: "%s | HowToBuild.app",
  },
  description: "Learn how to build AI-powered applications with tutorials, tools, and resources for developers.",
  keywords: "AI development, machine learning, tutorials, AI tools, application development",
  authors: [{ name: "HowToBuild.app Team" }],
  creator: "HowToBuild.app",
  publisher: "HowToBuild.app",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://howtobuild.app",
    siteName: "HowToBuild.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "HowToBuild.app - AI Innovation & Application Development",
    description: "Learn how to build AI-powered applications with tutorials, tools, and resources for developers.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
