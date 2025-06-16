import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Clock, Users, Star, Search, Play, BookOpen, Code, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "AI Development Tutorials - Step-by-Step Guides",
  description:
    "Learn AI development with our comprehensive tutorials. From beginner to advanced, master AI technologies with hands-on projects.",
}

const tutorials = [
  {
    id: 1,
    title: "Build Your First AI Chatbot",
    description: "Create an intelligent chatbot using OpenAI's GPT API and Next.js. Perfect for beginners.",
    level: "Beginner",
    duration: "45 min",
    students: 1250,
    rating: 4.8,
    category: "Chatbots",
    slug: "build-first-ai-chatbot",
    icon: Play,
    topics: ["Next.js", "OpenAI API", "React", "TypeScript"],
  },
  {
    id: 2,
    title: "AI-Powered Image Generation App",
    description: "Build a complete image generation application using DALL-E API and modern web technologies.",
    level: "Intermediate",
    duration: "90 min",
    students: 890,
    rating: 4.9,
    category: "Image AI",
    slug: "ai-image-generation-app",
    icon: BookOpen,
    topics: ["DALL-E", "Image Processing", "API Integration", "UI/UX"],
  },
  {
    id: 3,
    title: "Semantic Search with Vector Databases",
    description: "Implement intelligent search functionality using embeddings and vector databases like Pinecone.",
    level: "Advanced",
    duration: "120 min",
    students: 567,
    rating: 4.7,
    category: "Search",
    slug: "semantic-search-vector-db",
    icon: Code,
    topics: ["Vector DB", "Embeddings", "Semantic Search", "RAG"],
  },
  {
    id: 4,
    title: "AI Content Moderation System",
    description: "Create an automated content moderation system using machine learning and AI APIs.",
    level: "Intermediate",
    duration: "75 min",
    students: 432,
    rating: 4.6,
    category: "Moderation",
    slug: "ai-content-moderation",
    icon: Zap,
    topics: ["Content AI", "Moderation", "Safety", "Automation"],
  },
  {
    id: 5,
    title: "Voice AI Assistant with Speech Recognition",
    description: "Build a voice-activated AI assistant with speech-to-text and text-to-speech capabilities.",
    level: "Advanced",
    duration: "100 min",
    students: 298,
    rating: 4.8,
    category: "Voice AI",
    slug: "voice-ai-assistant",
    icon: Play,
    topics: ["Speech API", "Voice AI", "Audio Processing", "Real-time"],
  },
  {
    id: 6,
    title: "AI-Powered Analytics Dashboard",
    description: "Create an intelligent analytics dashboard that provides AI-driven insights and predictions.",
    level: "Intermediate",
    duration: "85 min",
    students: 654,
    rating: 4.5,
    category: "Analytics",
    slug: "ai-analytics-dashboard",
    icon: BookOpen,
    topics: ["Data Analysis", "Predictions", "Dashboards", "Visualization"],
  },
]

const categories = ["All", "Chatbots", "Image AI", "Search", "Moderation", "Voice AI", "Analytics"]
const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"]

export default function TutorialsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">AI Development Tutorials</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Master AI development with our step-by-step tutorials. From beginner-friendly guides to advanced
              techniques, learn by building real projects.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mt-8 max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input type="text" placeholder="Search tutorials..." className="pl-10 bg-white" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex gap-2 flex-wrap">
                <span className="text-sm font-medium text-gray-700 flex items-center">Categories:</span>
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant="outline"
                    className="cursor-pointer hover:bg-blue-50 hover:border-blue-300"
                  >
                    {category}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2 flex-wrap">
                <span className="text-sm font-medium text-gray-700 flex items-center">Level:</span>
                {levels.map((level) => (
                  <Badge
                    key={level}
                    variant="outline"
                    className="cursor-pointer hover:bg-purple-50 hover:border-purple-300"
                  >
                    {level}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorials Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {tutorials.map((tutorial) => {
              const IconComponent = tutorial.icon
              return (
                <Card key={tutorial.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        {tutorial.rating}
                      </div>
                    </div>
                    <CardTitle className="text-xl leading-tight">
                      <Link href={`/tutorials/${tutorial.slug}`} className="hover:text-blue-600 transition-colors">
                        {tutorial.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="text-gray-600">{tutorial.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <Badge
                        variant={
                          tutorial.level === "Beginner"
                            ? "default"
                            : tutorial.level === "Intermediate"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {tutorial.level}
                      </Badge>
                      <Badge variant="outline">{tutorial.category}</Badge>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {tutorial.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {tutorial.students.toLocaleString()} students
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {tutorial.topics.slice(0, 3).map((topic) => (
                          <Badge key={topic} variant="secondary" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                        {tutorial.topics.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{tutorial.topics.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <Button asChild className="w-full">
                      <Link href={`/tutorials/${tutorial.slug}`}>Start Tutorial</Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your AI Journey?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are already building amazing AI applications. Start with our beginner
            tutorials and work your way up to advanced projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/tutorials/build-first-ai-chatbot">Start with Chatbot Tutorial</Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link href="/contact">Get Help from Experts</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
