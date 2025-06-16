import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, User, ArrowRight } from "lucide-react"

const featuredArticles = [
  {
    id: 1,
    title: "Building Your First AI Chatbot with Next.js and OpenAI",
    description:
      "Learn how to create an intelligent chatbot using the latest AI technologies and modern web development practices.",
    category: "Tutorial",
    readTime: "15 min read",
    author: "Sarah Chen",
    date: "2024-01-15",
    slug: "building-ai-chatbot-nextjs-openai",
  },
  {
    id: 2,
    title: "The Complete Guide to AI-Powered Image Generation",
    description:
      "Explore different AI models for image generation and learn how to integrate them into your applications.",
    category: "Guide",
    readTime: "20 min read",
    author: "Alex Rodriguez",
    date: "2024-01-12",
    slug: "ai-powered-image-generation-guide",
  },
  {
    id: 3,
    title: "Case Study: How Startup X Increased Conversion by 300% with AI",
    description:
      "A deep dive into how a SaaS startup leveraged AI to dramatically improve their user experience and conversion rates.",
    category: "Case Study",
    readTime: "12 min read",
    author: "Michael Kim",
    date: "2024-01-10",
    slug: "startup-ai-conversion-case-study",
  },
]

export default function FeaturedContent() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Featured Content</h2>
          <p className="mt-4 text-lg text-gray-600">
            Latest tutorials, guides, and case studies to accelerate your AI development journey
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredArticles.map((article) => (
            <Card key={article.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{article.category}</Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {article.readTime}
                  </div>
                </div>
                <CardTitle className="text-xl leading-tight">
                  <Link href={`/blog/${article.slug}`} className="hover:text-blue-600 transition-colors">
                    {article.title}
                  </Link>
                </CardTitle>
                <CardDescription className="text-gray-600">{article.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="h-4 w-4 mr-1" />
                    {article.author}
                  </div>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center"
                  >
                    Read more
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
            View all articles
            <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
