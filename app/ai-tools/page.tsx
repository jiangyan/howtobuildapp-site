import type { Metadata } from "next"
import AIToolsClient, { type AITool } from "./AIToolsClient"
import { Brain, ImageIcon, MessageSquare, Code, Zap, Database, Mic, Video } from "lucide-react"

export const metadata: Metadata = {
  title: "AI Tools & Services - Curated Collection for Developers",
  description:
    "Discover the best AI tools and services to accelerate your development workflow. From language models to image generation.",
}

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
  return <AIToolsClient tools={aiTools as AITool[]} categories={categories} />
}

