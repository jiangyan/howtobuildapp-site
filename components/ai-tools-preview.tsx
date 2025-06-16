import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Star, Zap, Brain, ImageIcon, MessageSquare } from "lucide-react"

const aiTools = [
  {
    id: 1,
    name: "OpenAI GPT-4",
    description: "Advanced language model for text generation, analysis, and conversation",
    category: "Language Model",
    rating: 4.9,
    pricing: "Pay-per-use",
    icon: Brain,
    link: "https://openai.com/gpt-4",
  },
  {
    id: 2,
    name: "Midjourney",
    description: "AI-powered image generation tool for creating stunning visual content",
    category: "Image Generation",
    rating: 4.8,
    pricing: "Subscription",
    icon: ImageIcon,
    link: "https://midjourney.com",
  },
  {
    id: 3,
    name: "Vercel AI SDK",
    description: "TypeScript toolkit for building AI-powered applications with React",
    category: "Development",
    rating: 4.7,
    pricing: "Free",
    icon: Zap,
    link: "https://sdk.vercel.ai",
  },
  {
    id: 4,
    name: "Claude",
    description: "Anthropic's AI assistant for analysis, writing, and coding tasks",
    category: "AI Assistant",
    rating: 4.6,
    pricing: "Freemium",
    icon: MessageSquare,
    link: "https://claude.ai",
  },
]

export default function AIToolsPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">AI Tools & Services</h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover the best AI tools to supercharge your development workflow
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {aiTools.map((tool) => {
            const IconComponent = tool.icon
            return (
              <Card key={tool.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      {tool.rating}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{tool.name}</CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline">{tool.category}</Badge>
                    <span className="text-sm font-medium text-green-600">{tool.pricing}</span>
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={tool.link} target="_blank" rel="noopener noreferrer">
                      Learn More
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/ai-tools">
              Explore All Tools
              <ExternalLink className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
