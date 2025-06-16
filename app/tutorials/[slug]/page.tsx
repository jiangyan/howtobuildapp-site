import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Clock,
  Users,
  Star,
  CheckCircle,
  Play,
  Download,
  Github,
  ArrowLeft,
  BookOpen,
  Code,
  Terminal,
} from "lucide-react"

// This would typically come from a database or CMS
const getTutorial = (slug: string) => {
  const tutorials = {
    "build-first-ai-chatbot": {
      id: 1,
      title: "Build Your First AI Chatbot",
      description: "Create an intelligent chatbot using OpenAI's GPT API and Next.js. Perfect for beginners.",
      level: "Beginner",
      duration: "45 min",
      students: 1250,
      rating: 4.8,
      category: "Chatbots",
      topics: ["Next.js", "OpenAI API", "React", "TypeScript"],
      prerequisites: ["Basic JavaScript knowledge", "Familiarity with React", "Node.js installed"],
      learningOutcomes: [
        "Set up a Next.js project with TypeScript",
        "Integrate OpenAI's GPT API",
        "Create a responsive chat interface",
        "Handle API responses and streaming",
        "Deploy your chatbot to production",
      ],
      sections: [
        {
          title: "Project Setup",
          duration: "10 min",
          steps: [
            "Create a new Next.js project",
            "Install required dependencies",
            "Set up environment variables",
            "Configure TypeScript",
          ],
        },
        {
          title: "Building the Chat Interface",
          duration: "15 min",
          steps: [
            "Create the chat component",
            "Design the message layout",
            "Add input handling",
            "Implement responsive design",
          ],
        },
        {
          title: "OpenAI Integration",
          duration: "15 min",
          steps: [
            "Set up OpenAI API client",
            "Create API route handler",
            "Handle streaming responses",
            "Error handling and validation",
          ],
        },
        {
          title: "Deployment & Testing",
          duration: "5 min",
          steps: ["Deploy to Vercel", "Test the application", "Performance optimization", "Next steps"],
        },
      ],
    },
  }

  return tutorials[slug as keyof typeof tutorials] || null
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const tutorial = getTutorial(slug)

  if (!tutorial) {
    return {
      title: "Tutorial Not Found",
    }
  }

  return {
    title: `${tutorial.title} - AI Tutorial`,
    description: tutorial.description,
  }
}

export default async function TutorialPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const tutorial = getTutorial(slug)

  if (!tutorial) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Tutorial Not Found</h1>
          <p className="text-gray-600 mb-8">The tutorial you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/tutorials">Back to Tutorials</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link href="/tutorials" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Tutorials
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
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

              <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">{tutorial.title}</h1>
              <p className="text-lg text-gray-600 mb-6">{tutorial.description}</p>

              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {tutorial.duration}
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  {tutorial.students.toLocaleString()} students
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  {tutorial.rating} rating
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Play className="h-5 w-5 mr-2 text-blue-600" />
                    Start Learning
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full" size="lg">
                    <Play className="h-4 w-4 mr-2" />
                    Begin Tutorial
                  </Button>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1">
                      <Download className="h-4 w-4 mr-2" />
                      Resources
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* What You'll Learn */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-green-600" />
                    What You'll Learn
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tutorial.learningOutcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Prerequisites */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Code className="h-5 w-5 mr-2 text-orange-600" />
                    Prerequisites
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tutorial.prerequisites.map((prerequisite, index) => (
                      <li key={index} className="flex items-center">
                        <Terminal className="h-4 w-4 text-gray-400 mr-3" />
                        <span className="text-gray-700">{prerequisite}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Tutorial Sections */}
              <Card>
                <CardHeader>
                  <CardTitle>Tutorial Sections</CardTitle>
                  <CardDescription>Step-by-step breakdown of what we'll cover</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {tutorial.sections.map((section, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-semibold text-gray-900">
                            {index + 1}. {section.title}
                          </h3>
                          <Badge variant="outline">{section.duration}</Badge>
                        </div>
                        <ul className="space-y-1">
                          {section.steps.map((step, stepIndex) => (
                            <li key={stepIndex} className="text-sm text-gray-600 flex items-center">
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3" />
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Topics Covered */}
              <Card>
                <CardHeader>
                  <CardTitle>Topics Covered</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {tutorial.topics.map((topic) => (
                      <Badge key={topic} variant="secondary">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Related Tutorials */}
              <Card>
                <CardHeader>
                  <CardTitle>Related Tutorials</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link
                    href="/tutorials/ai-image-generation-app"
                    className="block p-3 rounded-lg border hover:bg-gray-50 transition-colors"
                  >
                    <h4 className="font-medium text-sm">AI Image Generation App</h4>
                    <p className="text-xs text-gray-500 mt-1">Intermediate • 90 min</p>
                  </Link>
                  <Link
                    href="/tutorials/semantic-search-vector-db"
                    className="block p-3 rounded-lg border hover:bg-gray-50 transition-colors"
                  >
                    <h4 className="font-medium text-sm">Semantic Search with Vector DB</h4>
                    <p className="text-xs text-gray-500 mt-1">Advanced • 120 min</p>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
