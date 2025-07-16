"use client"

import Link from "next/link"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  ExternalLink,
  Star,
  Search,
  Brain,
  ImageIcon,
  MessageSquare,
  Code,
  Zap,
  Database,
  Mic,
  Video,
} from "lucide-react"

const aiTools = [
  {
    id: 1,
    name: "OpenAI GPT-4",
    description:
      "Advanced language model for text generation, analysis, and conversation with superior reasoning capabilities.",
    category: "Language Model",
    rating: 4.9,
    pricing: "Pay-per-use",
    icon: Brain,
    link: "https://openai.com/gpt-4",
    features: ["Text Generation", "Code Assistance", "Analysis", "Conversation"],
  },
  {
    id: 2,
    name: "Midjourney",
    description: "AI-powered image generation tool for creating stunning visual content from text descriptions.",
    category: "Image Generation",
    rating: 4.8,
    pricing: "Subscription",
    icon: ImageIcon,
    link: "https://midjourney.com",
    features: ["Image Generation", "Art Creation", "Style Transfer", "High Quality"],
  },
  {
    id: 3,
    name: "Vercel AI SDK",
    description: "TypeScript toolkit for building AI-powered applications with React, Next.js, and other frameworks.",
    category: "Development",
    rating: 4.7,
    pricing: "Free",
    icon: Zap,
    link: "https://sdk.vercel.ai",
    features: ["React Integration", "Streaming", "TypeScript", "Multiple Providers"],
  },
  {
    id: 4,
    name: "Claude",
    description: "Anthropic's AI assistant for analysis, writing, and coding tasks with strong safety measures.",
    category: "AI Assistant",
    rating: 4.6,
    pricing: "Freemium",
    icon: MessageSquare,
    link: "https://claude.ai",
    features: ["Long Context", "Code Analysis", "Writing", "Safety Focused"],
  },
  {
    id: 5,
    name: "GitHub Copilot",
    description: "AI-powered code completion tool that helps developers write code faster and more efficiently.",
    category: "Development",
    rating: 4.5,
    pricing: "Subscription",
    icon: Code,
    link: "https://github.com/features/copilot",
    features: ["Code Completion", "IDE Integration", "Multiple Languages", "Context Aware"],
  },
  {
    id: 6,
    name: "Pinecone",
    description: "Vector database for building AI applications with semantic search and recommendation systems.",
    category: "Database",
    rating: 4.4,
    pricing: "Freemium",
    icon: Database,
    link: "https://pinecone.io",
    features: ["Vector Search", "Real-time", "Scalable", "Easy Integration"],
  },
  {
    id: 7,
    name: "ElevenLabs",
    description: "Advanced AI voice synthesis for creating realistic speech from text in multiple languages.",
    category: "Audio",
    rating: 4.6,
    pricing: "Freemium",
    icon: Mic,
    link: "https://elevenlabs.io",
    features: ["Voice Cloning", "Multiple Languages", "High Quality", "API Access"],
  },
  {
    id: 8,
    name: "RunwayML",
    description: "AI-powered video editing and generation platform for creative professionals and developers.",
    category: "Video",
    rating: 4.3,
    pricing: "Subscription",
    icon: Video,
    link: "https://runwayml.com",
    features: ["Video Generation", "Editing Tools", "Real-time", "Creative AI"],
  },
  {
    id: 9,
    name: "LangChain",
    description: "Framework for developing applications powered by language models with advanced capabilities.",
    category: "Development",
    rating: 4.5,
    pricing: "Open Source",
    icon: Code,
    link: "https://langchain.com",
    features: ["LLM Framework", "Chain Operations", "Memory", "Tool Integration"],
  },
]

const categories = [
  "All",
  "Language Model",
  "Image Generation",
  "Development",
  "AI Assistant",
  "Database",
  "Audio",
  "Video",
]

export default function AIToolsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredTools = aiTools.filter((tool) => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === "All" || tool.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">AI Tools & Services</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the best AI tools to supercharge your development workflow and build amazing applications
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mt-8 max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input 
                  type="text" 
                  placeholder="Search AI tools..." 
                  className="pl-10 bg-white"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className={`cursor-pointer transition-colors ${
                      selectedCategory === category 
                        ? "bg-blue-600 text-white hover:bg-blue-700" 
                        : "hover:bg-blue-50 hover:border-blue-300"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filteredTools.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No AI tools found matching your search criteria.</p>
              <p className="text-gray-400 mt-2">Try adjusting your search terms or selecting a different category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredTools.map((tool) => {
              const IconComponent = tool.icon
              return (
                <Card key={tool.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        {tool.rating}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{tool.name}</CardTitle>
                    <CardDescription className="text-gray-600">{tool.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline">{tool.category}</Badge>
                      <span className="text-sm font-medium text-green-600">{tool.pricing}</span>
                    </div>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {tool.features.slice(0, 3).map((feature) => (
                          <Badge key={feature} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                        {tool.features.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{tool.features.length - 3} more
                          </Badge>
                        )}
                      </div>
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
          )}
        </div>
      </section>
    </div>
  )
}
