import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Clock, User, Search } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog - AI Development Tutorials & Insights",
  description:
    "Explore our collection of AI development tutorials, case studies, and insights to accelerate your learning journey.",
}

const blogPosts = [
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
    featured: true,
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
    featured: true,
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
    featured: true,
  },
  {
    id: 4,
    title: "Understanding Large Language Models: A Developer's Guide",
    description:
      "Demystify LLMs and learn how to effectively integrate them into your applications with practical examples.",
    category: "Guide",
    readTime: "18 min read",
    author: "Emily Zhang",
    date: "2024-01-08",
    slug: "understanding-large-language-models",
  },
  {
    id: 5,
    title: "Building AI-Powered Search with Vector Databases",
    description:
      "Learn how to implement semantic search using vector databases and embedding models for better user experiences.",
    category: "Tutorial",
    readTime: "25 min read",
    author: "David Park",
    date: "2024-01-05",
    slug: "ai-powered-search-vector-databases",
  },
  {
    id: 6,
    title: "AI Ethics in Application Development",
    description: "Explore the ethical considerations and best practices when building AI-powered applications.",
    category: "Opinion",
    readTime: "10 min read",
    author: "Lisa Johnson",
    date: "2024-01-03",
    slug: "ai-ethics-application-development",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">AI Development Blog</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Tutorials, case studies, and insights to help you build better AI-powered applications
            </p>
          </div>

          {/* Search */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input type="text" placeholder="Search articles..." className="pl-10 bg-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={post.featured ? "default" : "secondary"}>{post.category}</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl leading-tight">
                    <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-gray-600">{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-4">{post.author}</span>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
