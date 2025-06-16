import type { Metadata } from "next"
import Hero from "@/components/hero"
import FeaturedContent from "@/components/featured-content"
import AIToolsPreview from "@/components/ai-tools-preview"
import NewsletterSignup from "@/components/newsletter-signup"

export const metadata: Metadata = {
  title: "HowToBuild.app - AI Innovation & Application Development",
  description: "Learn how to build AI-powered applications with tutorials, tools, and resources for developers.",
  keywords: "AI development, machine learning, tutorials, AI tools, application development",
  openGraph: {
    title: "HowToBuild.app - AI Innovation & Application Development",
    description: "Learn how to build AI-powered applications with tutorials, tools, and resources for developers.",
    url: "https://howtobuild.app",
    siteName: "HowToBuild.app",
    type: "website",
  },
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedContent />
      <AIToolsPreview />
      <NewsletterSignup />
    </main>
  )
}
