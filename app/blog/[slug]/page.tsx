import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Clock,
  User,
  ArrowLeft,
  BookOpen,
  Code,
  Lightbulb,
  Settings,
  Image,
  Zap,
  CheckCircle,
  AlertTriangle,
  ExternalLink,
} from "lucide-react"

// This would typically come from a database or CMS
const getBlogPost = (slug: string) => {
  const blogPosts = {
    "building-ai-chatbot-nextjs-openai": {
      id: 1,
      title: "Building Your First AI Chatbot with Next.js and OpenAI",
      description: "Learn how to create an intelligent chatbot using the latest AI technologies and modern web development practices.",
      category: "Tutorial",
      readTime: "15 min read",
      author: "Sarah Cheung",
      date: "2024-01-15",
      slug: "building-ai-chatbot-nextjs-openai",
      featured: true,
      content: {
        introduction: `
In today's digital landscape, AI chatbots have become essential tools for businesses and developers alike. They provide instant customer support, engage users with personalized experiences, and automate routine tasks. With the power of OpenAI's GPT models and the modern React framework Next.js, building a sophisticated chatbot has never been more accessible.

This comprehensive tutorial will guide you through creating your first AI chatbot from scratch. We'll cover everything from setting up your development environment to deploying a production-ready chatbot that can handle real conversations. Whether you're a beginner looking to explore AI development or an experienced developer wanting to add conversational AI to your toolkit, this guide provides practical, hands-on learning.

By the end of this tutorial, you'll have a fully functional chatbot with a beautiful user interface, proper error handling, and the ability to maintain context across conversations. Let's dive in and build something amazing together.
        `,
        sections: [
          {
            title: "Understanding AI Chatbots and OpenAI",
            content: `
Before we start coding, let's understand what makes AI chatbots powerful and how OpenAI's technology enables intelligent conversations.

**What is an AI Chatbot?**
An AI chatbot is a computer program that uses artificial intelligence to simulate human-like conversations. Unlike traditional rule-based chatbots that follow predetermined scripts, AI chatbots can understand context, generate creative responses, and learn from interactions.

**OpenAI's GPT Models**
OpenAI's Generative Pre-trained Transformer (GPT) models are large language models trained on vast amounts of text data. They excel at understanding natural language and generating human-like responses. The latest models like GPT-4 and GPT-3.5-turbo offer:

- Advanced natural language understanding
- Context awareness across long conversations
- Ability to follow instructions and maintain personality
- Support for multiple languages
- Integration with function calling for enhanced capabilities

**Why Next.js for Chatbot Development?**
Next.js provides several advantages for building chatbots:

- **Server-side rendering** for better SEO and performance
- **API routes** for secure backend functionality
- **Built-in optimization** for images, fonts, and scripts
- **TypeScript support** for better code quality
- **Easy deployment** with Vercel and other platforms
- **React ecosystem** with rich component libraries

**Architecture Overview**
Our chatbot will follow a modern three-tier architecture:
1. **Frontend**: React components for the chat interface
2. **Backend**: Next.js API routes for OpenAI integration
3. **Storage**: Session management and conversation history
            `,
            codeExample: `
// Basic chatbot message interface
interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
  metadata?: {
    tokens?: number;
    model?: string;
    latency?: number;
  };
}

// Chatbot configuration
interface ChatbotConfig {
  model: 'gpt-4' | 'gpt-3.5-turbo';
  maxTokens: number;
  temperature: number;
  systemPrompt: string;
  conversationHistory: ChatMessage[];
}

// Example system prompt for a helpful assistant
const SYSTEM_PROMPT = \`You are a helpful AI assistant created to provide accurate, friendly, and informative responses. You should:
- Be conversational and engaging
- Provide clear and detailed explanations
- Ask clarifying questions when needed
- Admit when you don't know something
- Be respectful and professional at all times\`;
            `
          },
          {
            title: "Setting Up Your Development Environment",
            content: `
Let's set up a robust development environment for building our AI chatbot with all the necessary tools and dependencies.

**Prerequisites**
Before we begin, ensure you have:
- Node.js 18.0 or later installed
- A code editor (VS Code recommended)
- Git for version control
- An OpenAI API account and API key

**Project Initialization**
We'll create a new Next.js project with TypeScript and Tailwind CSS for a modern development experience:

**Environment Configuration**
Proper environment management is crucial for API key security and different deployment stages. We'll set up environment variables for development, staging, and production environments.

**Development Tools Setup**
To ensure code quality and consistency, we'll configure:
- ESLint for code linting
- Prettier for code formatting
- Husky for Git hooks
- TypeScript for type safety
- Tailwind CSS for styling

**Project Structure**
Our project will follow Next.js 13+ app directory structure:
- \`app/\` - App router and pages
- \`components/\` - Reusable React components
- \`lib/\` - Utility functions and configurations
- \`types/\` - TypeScript type definitions
- \`styles/\` - Global styles and Tailwind config
            `,
            codeExample: `
// Create new Next.js project
npx create-next-app@latest ai-chatbot --typescript --tailwind --eslint --app

// Navigate to project directory
cd ai-chatbot

// Install additional dependencies
npm install openai lucide-react @radix-ui/react-dialog @radix-ui/react-toast

// Install development dependencies
npm install -D @types/node @types/react @types/react-dom

// Create environment variables file
// .env.local
OPENAI_API_KEY=your_openai_api_key_here
NEXT_PUBLIC_APP_NAME=AI Chatbot
NEXT_PUBLIC_APP_VERSION=1.0.0

// .env.example (for version control)
OPENAI_API_KEY=your_api_key_here
NEXT_PUBLIC_APP_NAME=AI Chatbot
NEXT_PUBLIC_APP_VERSION=1.0.0

// package.json scripts
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "format": "prettier --write .",
    "type-check": "tsc --noEmit"
  }
}

// tsconfig.json paths configuration
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"],
      "@/components/*": ["components/*"],
      "@/lib/*": ["lib/*"],
      "@/types/*": ["types/*"],
      "@/styles/*": ["styles/*"]
    }
  }
}
            `
          },
          {
            title: "Building the Chat Interface Components",
            content: `
Now let's create beautiful and functional React components for our chatbot interface. We'll build a modern chat UI with proper styling, animations, and user experience considerations.

**Component Architecture**
Our chat interface will consist of several key components:
- \`ChatContainer\` - Main wrapper component
- \`MessageList\` - Displays conversation history
- \`MessageBubble\` - Individual message display
- \`ChatInput\` - User input field and send button
- \`TypingIndicator\` - Shows when AI is thinking
- \`ChatHeader\` - Title and controls

**Design Principles**
- **Mobile-first responsive design**
- **Accessibility compliance** with proper ARIA labels
- **Smooth animations** for better user experience
- **Clear visual hierarchy** between user and AI messages
- **Loading states** to indicate processing
- **Error handling** with user-friendly messages

**Key Features**
- Auto-scrolling to latest messages
- Message timestamps
- Typing indicators
- Copy message functionality
- Message regeneration
- Conversation clearing
- Responsive layout for all screen sizes

**Styling Approach**
We'll use Tailwind CSS for utility-first styling, creating a modern and clean interface that works across all devices and screen sizes.
            `,
            codeExample: `
// components/chat/ChatContainer.tsx
'use client';
import React, { useState, useRef, useEffect } from 'react';
import { MessageList } from './MessageList';
import { ChatInput } from './ChatInput';
import { ChatHeader } from './ChatHeader';
import { ChatMessage } from '@/types/chat';

interface ChatContainerProps {
  className?: string;
}

export function ChatContainer({ className = '' }: ChatContainerProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    if (!content.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: content.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.message,
        timestamp: new Date(),
        metadata: data.metadata,
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error('Chat error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([]);
    setError(null);
  };

  return (
    <div className={\`flex flex-col h-full bg-white rounded-lg shadow-lg \${className}\`}>
      <ChatHeader onClearChat={handleClearChat} messageCount={messages.length} />
      
      <div className="flex-1 overflow-hidden">
        <MessageList 
          messages={messages} 
          isLoading={isLoading}
          error={error}
        />
        <div ref={messagesEndRef} />
      </div>

      <ChatInput 
        onSendMessage={handleSendMessage}
        isLoading={isLoading}
        disabled={!!error}
      />
    </div>
  );
}

// components/chat/MessageBubble.tsx
import React from 'react';
import { ChatMessage } from '@/types/chat';
import { User, Bot, Copy, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MessageBubbleProps {
  message: ChatMessage;
  onCopy?: (content: string) => void;
  onRegenerate?: (messageId: string) => void;
}

export function MessageBubble({ message, onCopy, onRegenerate }: MessageBubbleProps) {
  const isUser = message.role === 'user';
  
  const handleCopy = () => {
    navigator.clipboard.writeText(message.content);
    onCopy?.(message.content);
  };

  return (
    <div className={\`flex \${isUser ? 'justify-end' : 'justify-start'} mb-4 group\`}>
      <div className={\`max-w-[80%] \${isUser ? 'order-2' : 'order-1'}\`}>
        <div className={\`flex items-start gap-3 \${isUser ? 'flex-row-reverse' : 'flex-row'}\`}>
          {/* Avatar */}
          <div className={\`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center \${
            isUser 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-100 text-gray-600 border-2 border-gray-200'
          }\`}>
            {isUser ? <User size={16} /> : <Bot size={16} />}
          </div>

          {/* Message Content */}
          <div className={\`relative \${isUser ? 'text-right' : 'text-left'}\`}>
            <div className={\`inline-block px-4 py-2 rounded-2xl \${
              isUser
                ? 'bg-blue-500 text-white rounded-br-md'
                : 'bg-gray-100 text-gray-800 rounded-bl-md border border-gray-200'
            }\`}>
              <p className="text-sm leading-relaxed whitespace-pre-wrap">
                {message.content}
              </p>
            </div>

            {/* Timestamp and Actions */}
            <div className={\`flex items-center gap-2 mt-1 text-xs text-gray-500 \${
              isUser ? 'justify-end' : 'justify-start'
            }\`}>
              <span>{message.timestamp.toLocaleTimeString()}</span>
              
              {/* Action buttons (shown on hover) */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCopy}
                  className="h-6 w-6 p-0 hover:bg-gray-200"
                  title="Copy message"
                >
                  <Copy size={12} />
                </Button>
                
                {!isUser && onRegenerate && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onRegenerate(message.id)}
                    className="h-6 w-6 p-0 hover:bg-gray-200"
                    title="Regenerate response"
                  >
                    <RefreshCw size={12} />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
            `
          },
          {
            title: "Implementing OpenAI API Integration",
            content: `
Now let's implement the backend logic to connect our chatbot with OpenAI's powerful language models. We'll create a robust API route that handles authentication, rate limiting, error handling, and conversation management.

**API Route Structure**
Our Next.js API route will handle:
- Request validation and sanitization
- OpenAI API communication
- Context management for conversations
- Error handling and logging
- Response streaming for better UX
- Usage tracking and rate limiting

**Key Implementation Features**
- **Streaming responses** for real-time chat experience
- **Context preservation** across conversation turns
- **Token counting** and usage optimization
- **Error recovery** with fallback strategies
- **Input sanitization** for security
- **Response caching** for common queries

**OpenAI Best Practices**
- Proper system prompt engineering
- Temperature and parameter tuning
- Token limit management
- Content filtering and safety
- Cost optimization strategies
- Performance monitoring

**Security Considerations**
- API key protection
- Input validation and sanitization
- Rate limiting per user/IP
- Content filtering
- Audit logging
- CORS configuration
            `,
            codeExample: `
// app/api/chat/route.ts
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { ChatMessage } from '@/types/chat';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// System prompt for the chatbot
const SYSTEM_PROMPT = \`You are a helpful AI assistant built with Next.js and OpenAI. You should:
- Provide accurate, helpful, and friendly responses
- Be conversational and engaging
- Ask clarifying questions when needed
- Admit when you don't know something
- Keep responses concise but informative
- Maintain context throughout the conversation\`;

export async function POST(request: NextRequest) {
  try {
    // Parse and validate request
    const body = await request.json();
    const { messages } = body;

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Invalid messages format' },
        { status: 400 }
      );
    }

    // Validate message format
    const validMessages = messages.filter((msg: ChatMessage) => 
      msg.content && 
      msg.content.trim().length > 0 && 
      ['user', 'assistant', 'system'].includes(msg.role)
    );

    if (validMessages.length === 0) {
      return NextResponse.json(
        { error: 'No valid messages provided' },
        { status: 400 }
      );
    }

    // Prepare messages for OpenAI
    const openaiMessages = [
      { role: 'system' as const, content: SYSTEM_PROMPT },
      ...validMessages.map((msg: ChatMessage) => ({
        role: msg.role as 'user' | 'assistant',
        content: msg.content,
      })),
    ];

    // Call OpenAI API
    const startTime = Date.now();
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: openaiMessages,
      max_tokens: 1000,
      temperature: 0.7,
      presence_penalty: 0.1,
      frequency_penalty: 0.1,
    });

    const endTime = Date.now();
    const latency = endTime - startTime;

    // Extract response
    const assistantMessage = completion.choices[0]?.message?.content;

    if (!assistantMessage) {
      throw new Error('No response from OpenAI');
    }

    // Return response with metadata
    return NextResponse.json({
      message: assistantMessage,
      metadata: {
        model: completion.model,
        tokens: completion.usage?.total_tokens || 0,
        latency,
        timestamp: new Date().toISOString(),
      },
    });

  } catch (error) {
    console.error('Chat API error:', error);

    // Handle different types of errors
    if (error instanceof Error) {
      if (error.message.includes('rate limit')) {
        return NextResponse.json(
          { error: 'Rate limit exceeded. Please try again later.' },
          { status: 429 }
        );
      }

      if (error.message.includes('insufficient_quota')) {
        return NextResponse.json(
          { error: 'API quota exceeded. Please contact support.' },
          { status: 503 }
        );
      }
    }

    return NextResponse.json(
      { error: 'Failed to process your message. Please try again.' },
      { status: 500 }
    );
  }
}

// lib/openai-config.ts
export const OPENAI_CONFIG = {
  models: {
    'gpt-4': {
      maxTokens: 8192,
      costPer1KTokens: 0.03,
      description: 'Most capable model, best for complex tasks',
    },
    'gpt-3.5-turbo': {
      maxTokens: 4096,
      costPer1KTokens: 0.002,
      description: 'Fast and efficient for most conversations',
    },
  },
  defaultParams: {
    temperature: 0.7,
    max_tokens: 1000,
    presence_penalty: 0.1,
    frequency_penalty: 0.1,
  },
  systemPrompts: {
    helpful: \`You are a helpful AI assistant...\`,
    creative: \`You are a creative AI assistant...\`,
    analytical: \`You are an analytical AI assistant...\`,
  },
} as const;

// lib/token-counter.ts
export function estimateTokenCount(text: string): number {
  // Rough estimation: 1 token ≈ 4 characters for English text
  return Math.ceil(text.length / 4);
}

export function validateTokenLimit(messages: ChatMessage[], maxTokens: number): boolean {
  const totalTokens = messages.reduce((sum, msg) => 
    sum + estimateTokenCount(msg.content), 0
  );
  return totalTokens <= maxTokens;
}

export function truncateConversation(messages: ChatMessage[], maxTokens: number): ChatMessage[] {
  let tokenCount = 0;
  const truncated: ChatMessage[] = [];
  
  // Keep recent messages within token limit
  for (let i = messages.length - 1; i >= 0; i--) {
    const msgTokens = estimateTokenCount(messages[i].content);
    if (tokenCount + msgTokens > maxTokens) break;
    
    tokenCount += msgTokens;
    truncated.unshift(messages[i]);
  }
  
  return truncated;
}
            `
          },
          {
            title: "Adding Advanced Features",
            content: `
Let's enhance our chatbot with advanced features that provide a superior user experience and demonstrate professional-level development skills.

**Streaming Responses**
Implement real-time response streaming so users see the AI's response as it's being generated, similar to ChatGPT's interface.

**Conversation Memory**
Add persistent conversation storage using browser localStorage or a database, allowing users to resume conversations across sessions.

**Multiple AI Personalities**
Create different chatbot personalities (helpful, creative, analytical) that users can switch between for different use cases.

**File Upload Support**
Enable users to upload documents or images for the AI to analyze and discuss.

**Voice Integration**
Add speech-to-text input and text-to-speech output for hands-free interaction.

**Advanced UI Features**
- Message reactions and ratings
- Conversation search and filtering
- Export conversations
- Dark/light theme toggle
- Responsive mobile interface
- Keyboard shortcuts

**Performance Optimizations**
- Response caching for common queries
- Lazy loading for conversation history
- Optimistic UI updates
- Error retry mechanisms
- Connection status indicators
            `,
            codeExample: `
// hooks/useChat.ts - Custom hook for chat functionality
import { useState, useCallback, useEffect } from 'react';
import { ChatMessage, ChatConfig } from '@/types/chat';

export function useChat(config: ChatConfig = {}) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(true);

  // Load conversation from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('chatbot-conversation');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setMessages(parsed);
      } catch (err) {
        console.error('Failed to load conversation:', err);
      }
    }
  }, []);

  // Save conversation to localStorage when messages change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('chatbot-conversation', JSON.stringify(messages));
    }
  }, [messages]);

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'user',
      content: content.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/chat/stream', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          config,
        }),
      });

      if (!response.ok) {
        throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) {
        throw new Error('No response stream available');
      }

      let assistantMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: '',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);

      // Read streaming response
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split('\\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6);
            if (data === '[DONE]') continue;

            try {
              const parsed = JSON.parse(data);
              const content = parsed.choices[0]?.delta?.content;
              
              if (content) {
                assistantMessage.content += content;
                setMessages(prev => 
                  prev.map(msg => 
                    msg.id === assistantMessage.id 
                      ? { ...msg, content: assistantMessage.content }
                      : msg
                  )
                );
              }
            } catch (err) {
              console.error('Failed to parse stream data:', err);
            }
          }
        }
      }

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
      console.error('Chat error:', err);
    } finally {
      setIsLoading(false);
    }
  }, [messages, isLoading, config]);

  const clearConversation = useCallback(() => {
    setMessages([]);
    setError(null);
    localStorage.removeItem('chatbot-conversation');
  }, []);

  const regenerateLastResponse = useCallback(async () => {
    if (messages.length < 2) return;
    
    // Remove last assistant message and regenerate
    const messagesWithoutLast = messages.slice(0, -1);
    const lastUserMessage = messagesWithoutLast[messagesWithoutLast.length - 1];
    
    if (lastUserMessage?.role === 'user') {
      setMessages(messagesWithoutLast);
      await sendMessage(lastUserMessage.content);
    }
  }, [messages, sendMessage]);

  return {
    messages,
    isLoading,
    error,
    isConnected,
    sendMessage,
    clearConversation,
    regenerateLastResponse,
  };
}

// components/chat/StreamingMessage.tsx
import React, { useEffect, useState } from 'react';

interface StreamingMessageProps {
  content: string;
  isComplete: boolean;
}

export function StreamingMessage({ content, isComplete }: StreamingMessageProps) {
  const [displayedContent, setDisplayedContent] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isComplete) {
      setDisplayedContent(content);
      return;
    }

    // Simulate typing effect for streaming
    const timer = setInterval(() => {
      if (currentIndex < content.length) {
        setDisplayedContent(content.slice(0, currentIndex + 1));
        setCurrentIndex(prev => prev + 1);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [content, isComplete, currentIndex]);

  return (
    <div className="relative">
      <p className="whitespace-pre-wrap">{displayedContent}</p>
      {!isComplete && (
        <span className="inline-block w-2 h-4 bg-blue-500 animate-pulse ml-1" />
      )}
    </div>
  );
}

// lib/personality-configs.ts
export const PERSONALITY_CONFIGS = {
  helpful: {
    name: 'Helpful Assistant',
    systemPrompt: \`You are a helpful AI assistant focused on providing accurate, useful information and assistance. You should be friendly, professional, and always try to be as helpful as possible.\`,
    temperature: 0.7,
    emoji: '🤝',
  },
  creative: {
    name: 'Creative Companion',
    systemPrompt: \`You are a creative AI assistant who loves to think outside the box. You should be imaginative, inspiring, and help users explore creative solutions and ideas.\`,
    temperature: 0.9,
    emoji: '🎨',
  },
  analytical: {
    name: 'Analytical Expert',
    systemPrompt: \`You are an analytical AI assistant focused on logical reasoning, data analysis, and systematic problem-solving. You should be precise, methodical, and thorough in your responses.\`,
    temperature: 0.3,
    emoji: '🔍',
  },
} as const;
            `
          },
          {
            title: "Testing, Deployment, and Best Practices",
            content: `
Now let's ensure our chatbot is production-ready with comprehensive testing, deployment strategies, and adherence to best practices.

**Testing Strategy**
Implement a multi-layered testing approach:
- **Unit tests** for individual components and utilities
- **Integration tests** for API routes and OpenAI integration
- **End-to-end tests** for complete user workflows
- **Performance tests** for response times and scalability
- **Accessibility tests** for inclusive design
- **Security tests** for vulnerability assessment

**Deployment Options**
- **Vercel** (recommended for Next.js projects)
- **Netlify** for static deployment with serverless functions
- **AWS** with Lambda and CloudFront
- **Google Cloud Platform** with Cloud Run
- **Docker** containers for consistent environments

**Production Considerations**
- Environment variable management
- API rate limiting and quotas
- Error monitoring and logging
- Performance monitoring
- Cost tracking and optimization
- Security hardening
- GDPR and privacy compliance

**Best Practices Checklist**
✅ Secure API key management
✅ Input validation and sanitization
✅ Error handling and user feedback  
✅ Responsive design for all devices
✅ Accessibility compliance (WCAG 2.1)
✅ Performance optimization
✅ SEO optimization
✅ Content security policy
✅ Rate limiting implementation
✅ Monitoring and analytics setup

**Monitoring and Analytics**
Set up comprehensive monitoring to track:
- API usage and costs
- Response times and errors
- User engagement metrics
- Conversation quality metrics
- System performance and uptime
            `,
            codeExample: `
// __tests__/api/chat.test.ts
import { POST } from '@/app/api/chat/route';
import { NextRequest } from 'next/server';

// Mock OpenAI
jest.mock('openai', () => ({
  default: jest.fn().mockImplementation(() => ({
    chat: {
      completions: {
        create: jest.fn().mockResolvedValue({
          choices: [{ message: { content: 'Test response' } }],
          usage: { total_tokens: 50 },
          model: 'gpt-3.5-turbo',
        }),
      },
    },
  })),
}));

describe('/api/chat', () => {
  it('should return a successful response for valid input', async () => {
    const request = new NextRequest('http://localhost:3000/api/chat', {
      method: 'POST',
      body: JSON.stringify({
        messages: [
          { role: 'user', content: 'Hello, world!', id: '1', timestamp: new Date() }
        ],
      }),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.message).toBe('Test response');
    expect(data.metadata).toBeDefined();
  });

  it('should handle invalid input gracefully', async () => {
    const request = new NextRequest('http://localhost:3000/api/chat', {
      method: 'POST',
      body: JSON.stringify({ messages: 'invalid' }),
    });

    const response = await POST(request);
    expect(response.status).toBe(400);
  });
});

// __tests__/components/ChatContainer.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ChatContainer } from '@/components/chat/ChatContainer';

// Mock fetch
global.fetch = jest.fn();

describe('ChatContainer', () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
  });

  it('should render chat interface correctly', () => {
    render(<ChatContainer />);
    
    expect(screen.getByPlaceholderText(/type your message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument();
  });

  it('should send message and display response', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        message: 'Hello! How can I help you?',
        metadata: { tokens: 10 },
      }),
    });

    render(<ChatContainer />);
    
    const input = screen.getByRole('textbox');
    const sendButton = screen.getByRole('button', { name: /send/i });

    fireEvent.change(input, { target: { value: 'Hello' } });
    fireEvent.click(sendButton);

    await waitFor(() => {
      expect(screen.getByText('Hello')).toBeInTheDocument();
      expect(screen.getByText('Hello! How can I help you?')).toBeInTheDocument();
    });
  });
});

// next.config.js - Production configuration
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static optimization
  output: 'standalone',
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: \`
              default-src 'self';
              script-src 'self' 'unsafe-eval' 'unsafe-inline';
              style-src 'self' 'unsafe-inline';
              img-src 'self' data: https:;
              font-src 'self';
              connect-src 'self' https://api.openai.com;
            \`.replace(/\\s+/g, ' ').trim(),
          },
        ],
      },
    ];
  },

  // Environment variables validation
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },

  // Bundle analyzer for optimization
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: false,
        })
      );
    }
    return config;
  },
};

module.exports = nextConfig;

// lib/monitoring.ts
export class ChatbotMonitoring {
  static async logConversation(messages: ChatMessage[], metadata: any) {
    // Log to analytics service (e.g., Google Analytics, Mixpanel)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'chat_message', {
        message_count: messages.length,
        model_used: metadata.model,
        tokens_used: metadata.tokens,
        response_time: metadata.latency,
      });
    }
  }

  static async trackError(error: Error, context: string) {
    // Log to error tracking service (e.g., Sentry)
    console.error(\`[\${context}] Error:\`, error);
    
    // Send to monitoring service
    if (process.env.NODE_ENV === 'production') {
      // Sentry.captureException(error, { tags: { context } });
    }
  }

  static async trackPerformance(metric: string, value: number) {
    // Track performance metrics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'timing_complete', {
        name: metric,
        value: Math.round(value),
      });
    }
  }
}
            `
          }
        ],
        conclusion: `
Congratulations! You've successfully built a sophisticated AI chatbot using Next.js and OpenAI. This comprehensive tutorial has covered everything from basic setup to advanced features and production deployment.

Your chatbot now includes:
- A modern, responsive chat interface built with React and Tailwind CSS
- Robust backend integration with OpenAI's GPT models
- Advanced features like streaming responses and conversation memory
- Comprehensive error handling and user experience considerations
- Production-ready code with testing, monitoring, and security best practices

**What's Next?**
- Experiment with different AI models and parameters to find the perfect balance for your use case
- Implement additional features like voice input, file uploads, or integration with external APIs
- Scale your chatbot with database storage, user authentication, and multi-tenant support
- Explore fine-tuning custom models for domain-specific conversations
- Build chatbot analytics and conversation insights

The AI landscape is evolving rapidly, and chatbots are becoming increasingly sophisticated. By mastering these fundamental concepts and best practices, you're well-equipped to build the next generation of conversational AI applications.

Remember to stay updated with OpenAI's latest model releases, maintain security best practices, and always prioritize user experience in your implementations. Happy coding!
        `,
        resources: [
          {
            title: "OpenAI Platform Documentation",
            url: "https://platform.openai.com/docs",
            description: "Official OpenAI API documentation and guides"
          },
          {
            title: "Next.js Documentation",
            url: "https://nextjs.org/docs",
            description: "Complete Next.js framework documentation"
          },
          {
            title: "React TypeScript Cheatsheet",
            url: "https://react-typescript-cheatsheet.netlify.app/",
            description: "Comprehensive guide for using TypeScript with React"
          },
          {
            title: "Tailwind CSS Documentation",
            url: "https://tailwindcss.com/docs",
            description: "Utility-first CSS framework documentation"
          },
          {
            title: "Vercel Deployment Guide",
            url: "https://vercel.com/docs/deployments/overview",
            description: "Learn how to deploy Next.js apps with Vercel"
          },
          {
            title: "OpenAI Best Practices",
            url: "https://platform.openai.com/docs/guides/production-best-practices",
            description: "Production best practices for OpenAI applications"
          }
        ]
      }
    },
    "ai-powered-image-generation-guide": {
      id: 2,
      title: "The Complete Guide to AI-Powered Image Generation",
      description: "Explore different AI models for image generation and learn how to integrate them into your applications.",
      category: "Guide",
      readTime: "20 min read",
      author: "Alex Rodriguez",
      date: "2024-01-12",
      slug: "ai-powered-image-generation-guide",
      featured: true,
      content: {
        introduction: `
Artificial Intelligence has revolutionized the way we create and manipulate images. From generating artwork to creating product mockups, AI-powered image generation has become an essential tool for developers, designers, and content creators. This comprehensive guide will walk you through everything you need to know about AI image generation, from understanding the technology to implementing it in your applications.

Whether you're building a creative platform, enhancing your app with AI-generated visuals, or simply curious about the technology, this guide provides practical insights and implementation strategies that you can apply immediately.
        `,
        sections: [
          {
            title: "Understanding AI Image Generation",
            content: `
AI image generation uses machine learning models to create images from text descriptions, modify existing images, or generate entirely new visual content. The technology has evolved rapidly, with several approaches leading the field:

**Diffusion Models**: These work by gradually adding noise to images during training, then learning to reverse the process to generate new images. Popular examples include Stable Diffusion and DALL-E 2.

**Generative Adversarial Networks (GANs)**: These use two neural networks competing against each other - one generating images and another evaluating their quality.

**Transformer-based Models**: Like DALL-E 3, these use attention mechanisms to understand text prompts and generate corresponding images.

**Variational Autoencoders (VAEs)**: These compress images into a lower-dimensional space and then generate new images from that space.
            `,
            codeExample: `
// Example: Basic structure for AI image generation
interface ImageGenerationRequest {
  prompt: string;
  width?: number;
  height?: number;
  steps?: number;
  guidance_scale?: number;
  negative_prompt?: string;
}

interface ImageGenerationResponse {
  images: string[]; // Base64 encoded images
  seed: number;
  prompt: string;
}
            `
          },
          {
            title: "Popular AI Image Generation Models",
            content: `
Let's explore the most popular and accessible AI image generation models available today:

**1. DALL-E 3 (OpenAI)**
- Exceptional text understanding and adherence
- High-quality, photorealistic results
- Great for complex scene composition
- Commercial use allowed with proper licensing

**2. Stable Diffusion**
- Open-source and highly customizable
- Multiple versions available (1.5, 2.0, XL)
- Excellent community support and extensions
- Can run locally or in the cloud

**3. Midjourney**
- Artistic and stylized outputs
- Strong community and discord-based interface
- Great for creative and artistic applications
- Subscription-based model

**4. Adobe Firefly**
- Integrated with Adobe Creative Suite
- Commercial-safe training data
- Excellent for professional workflows
- Strong text and vector generation capabilities

**5. Google Imagen**
- High photorealism and text fidelity
- Advanced language understanding
- Currently limited availability
- Strong technical foundation
            `,
            codeExample: `
// OpenAI DALL-E 3 API Example
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateImage(prompt: string) {
  try {
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      n: 1,
      size: "1024x1024",
      quality: "standard",
      style: "vivid"
    });

    return response.data[0].url;
  } catch (error) {
    console.error('Error generating image:', error);
    throw error;
  }
}
            `
          },
          {
            title: "Setting Up Your Development Environment",
            content: `
Before diving into implementation, let's set up a robust development environment for AI image generation:

**Prerequisites:**
- Node.js 18+ or Python 3.8+
- A code editor (VS Code recommended)
- Git for version control
- API keys for your chosen service

**Environment Setup:**
1. Create a new project directory
2. Initialize your package manager (npm, yarn, or pip)
3. Set up environment variables securely
4. Install necessary dependencies
5. Configure your development server

**Security Considerations:**
- Never commit API keys to version control
- Use environment variables for sensitive data
- Implement rate limiting to prevent abuse
- Consider image content filtering
- Set up proper error handling and logging
            `,
            codeExample: `
// package.json dependencies
{
  "dependencies": {
    "openai": "^4.0.0",
    "replicate": "^0.22.0",
    "stability-ai": "^1.0.0",
    "canvas": "^2.11.2",
    "multer": "^1.4.5-lts.1",
    "sharp": "^0.32.6"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "typescript": "^5.0.0",
    "ts-node": "^10.9.0"
  }
}

// Environment variables (.env)
OPENAI_API_KEY=your_openai_api_key
REPLICATE_API_TOKEN=your_replicate_token
STABILITY_AI_KEY=your_stability_ai_key
CLOUDINARY_URL=your_cloudinary_url
            `
          },
          {
            title: "Implementing AI Image Generation APIs",
            content: `
Let's implement a comprehensive image generation system that supports multiple AI providers:

**API Design Principles:**
- Provider abstraction for easy switching
- Consistent response format across services
- Proper error handling and retry logic
- Image optimization and storage
- Usage tracking and analytics

**Implementation Strategy:**
1. Create a base image generator interface
2. Implement provider-specific classes
3. Add a factory pattern for provider selection
4. Implement caching and storage
5. Add monitoring and logging
            `,
            codeExample: `
// Abstract Image Generator Interface
interface ImageGenerator {
  generateImage(params: ImageGenerationParams): Promise<GeneratedImage>;
  generateVariations(imageUrl: string, count: number): Promise<GeneratedImage[]>;
  upscaleImage(imageUrl: string, scale: number): Promise<GeneratedImage>;
}

// Implementation for OpenAI DALL-E
class OpenAIImageGenerator implements ImageGenerator {
  private client: OpenAI;

  constructor(apiKey: string) {
    this.client = new OpenAI({ apiKey });
  }

  async generateImage(params: ImageGenerationParams): Promise<GeneratedImage> {
    const response = await this.client.images.generate({
      model: "dall-e-3",
      prompt: params.prompt,
      n: 1,
      size: params.size || "1024x1024",
      quality: params.quality || "standard",
      style: params.style || "vivid"
    });

    return {
      url: response.data[0].url!,
      prompt: params.prompt,
      model: "dall-e-3",
      size: params.size || "1024x1024",
      generatedAt: new Date().toISOString()
    };
  }

  async generateVariations(imageUrl: string, count: number): Promise<GeneratedImage[]> {
    // Implementation for image variations
    const response = await this.client.images.createVariation({
      image: await this.urlToFile(imageUrl),
      n: count,
      size: "1024x1024"
    });

    return response.data.map(img => ({
      url: img.url!,
      prompt: "Variation",
      model: "dall-e-2",
      size: "1024x1024",
      generatedAt: new Date().toISOString()
    }));
  }

  private async urlToFile(url: string): Promise<File> {
    const response = await fetch(url);
    const blob = await response.blob();
    return new File([blob], 'image.png', { type: 'image/png' });
  }
}

// Factory for creating image generators
class ImageGeneratorFactory {
  static create(provider: 'openai' | 'stable-diffusion' | 'midjourney'): ImageGenerator {
    switch (provider) {
      case 'openai':
        return new OpenAIImageGenerator(process.env.OPENAI_API_KEY!);
      case 'stable-diffusion':
        return new StableDiffusionGenerator(process.env.STABILITY_AI_KEY!);
      default:
        throw new Error(\`Unsupported provider: \${provider}\`);
    }
  }
}
            `
          },
          {
            title: "Advanced Techniques and Optimization",
            content: `
Take your AI image generation to the next level with these advanced techniques:

**Prompt Engineering:**
- Use descriptive, specific language
- Include style and artistic references
- Specify lighting, composition, and mood
- Use negative prompts to exclude unwanted elements
- Experiment with prompt weights and emphasis

**Quality Optimization:**
- Choose appropriate image dimensions
- Adjust generation parameters (steps, guidance scale)
- Use upscaling for higher resolution outputs
- Implement post-processing filters
- Consider multiple generations and selection

**Performance Considerations:**
- Implement intelligent caching strategies
- Use CDN for image delivery
- Optimize image formats (WebP, AVIF)
- Implement lazy loading for generated images
- Monitor API usage and costs

**User Experience Enhancements:**
- Show generation progress indicators
- Provide real-time previews
- Allow parameter adjustment
- Implement favorites and collections
- Add social sharing capabilities
            `,
            codeExample: `
// Advanced image generation with optimization
class OptimizedImageGenerator {
  private cache = new Map<string, GeneratedImage>();
  private rateLimiter = new RateLimiter(10, 60); // 10 requests per minute

  async generateOptimizedImage(params: ImageGenerationParams): Promise<GeneratedImage> {
    // Check cache first
    const cacheKey = this.getCacheKey(params);
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey)!;
    }

    // Rate limiting
    await this.rateLimiter.checkLimit();

    // Generate image
    const generator = ImageGeneratorFactory.create(params.provider);
    const image = await generator.generateImage(params);

    // Post-processing
    const optimizedImage = await this.optimizeImage(image);

    // Cache result
    this.cache.set(cacheKey, optimizedImage);

    return optimizedImage;
  }

  private async optimizeImage(image: GeneratedImage): Promise<GeneratedImage> {
    // Upload to CDN
    const cdnUrl = await this.uploadToCDN(image.url);
    
    // Generate multiple formats
    const formats = await this.generateFormats(image.url);
    
    return {
      ...image,
      url: cdnUrl,
      formats,
      optimized: true
    };
  }

  private getCacheKey(params: ImageGenerationParams): string {
    return btoa(JSON.stringify(params));
  }
}

// Prompt optimization utilities
class PromptOptimizer {
  static enhancePrompt(prompt: string, style?: string): string {
    let enhanced = prompt;
    
    // Add style modifiers
    if (style) {
      enhanced += \`, \${style} style\`;
    }
    
    // Add quality modifiers
    enhanced += ", highly detailed, professional photography, 8k resolution";
    
    return enhanced;
  }

  static generateNegativePrompt(avoiding: string[]): string {
    const commonNegatives = [
      "blurry", "low quality", "distorted", "malformed", "artifacts"
    ];
    
    return [...commonNegatives, ...avoiding].join(", ");
  }
}
            `
          },
          {
            title: "Building a Complete Image Generation App",
            content: `
Let's build a complete Next.js application that incorporates AI image generation with a beautiful user interface:

**Application Features:**
- Text-to-image generation with multiple providers
- Image editing and enhancement tools
- Gallery with favorites and collections
- Sharing and export capabilities
- User authentication and usage tracking
- Responsive design for all devices

**Architecture Overview:**
- Frontend: Next.js with React and Tailwind CSS
- Backend: API routes with rate limiting and caching
- Database: PostgreSQL for user data and image metadata
- Storage: Cloud storage for generated images
- Authentication: NextAuth.js for user management

**Key Components:**
1. Image generation interface with real-time previews
2. Parameter controls for fine-tuning
3. Gallery view with search and filtering
4. User dashboard with usage analytics
5. Social features for sharing and collaboration
            `,
            codeExample: `
// Complete Next.js API route for image generation
// pages/api/generate-image.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from './auth/[...nextauth]';
import { ImageGeneratorFactory } from '@/lib/image-generator';
import { rateLimit } from '@/lib/rate-limit';
import { saveImageMetadata, updateUserUsage } from '@/lib/database';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Authentication
    const session = await getServerSession(req, res, authOptions);
    if (!session) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // Rate limiting
    const rateLimitResult = await rateLimit(req, res);
    if (!rateLimitResult.success) {
      return res.status(429).json({ 
        error: 'Rate limit exceeded',
        resetTime: rateLimitResult.resetTime 
      });
    }

    // Validate request
    const { prompt, provider, size, style, negativePrompt } = req.body;
    if (!prompt || !provider) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }

    // Generate image
    const generator = ImageGeneratorFactory.create(provider);
    const image = await generator.generateImage({
      prompt,
      size,
      style,
      negativePrompt,
      userId: session.user.id
    });

    // Save metadata
    const savedImage = await saveImageMetadata({
      userId: session.user.id,
      prompt,
      imageUrl: image.url,
      provider,
      parameters: { size, style, negativePrompt }
    });

    // Update user usage
    await updateUserUsage(session.user.id, provider);

    res.status(200).json({
      success: true,
      image: savedImage,
      usage: await getUserUsage(session.user.id)
    });

  } catch (error) {
    console.error('Image generation error:', error);
    res.status(500).json({ 
      error: 'Failed to generate image',
      details: error.message 
    });
  }
}

// React component for image generation
'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Card } from '@/components/ui/card';

export function ImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [provider, setProvider] = useState('openai');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, provider })
      });

      const data = await response.json();
      if (data.success) {
        setGeneratedImage(data.image.url);
      }
    } catch (error) {
      console.error('Generation failed:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="p-6">
        <div className="space-y-4">
          <Input
            placeholder="Describe the image you want to generate..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="text-lg"
          />
          
          <div className="flex gap-4">
            <Select value={provider} onValueChange={setProvider}>
              <option value="openai">DALL-E 3</option>
              <option value="stable-diffusion">Stable Diffusion</option>
              <option value="midjourney">Midjourney</option>
            </Select>
            
            <Button 
              onClick={handleGenerate}
              disabled={!prompt || isGenerating}
              className="px-8"
            >
              {isGenerating ? 'Generating...' : 'Generate Image'}
            </Button>
          </div>
        </div>

        {generatedImage && (
          <div className="mt-8">
            <img 
              src={generatedImage} 
              alt="Generated image"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        )}
      </Card>
    </div>
  );
}
            `
          },
          {
            title: "Best Practices and Considerations",
            content: `
As you implement AI image generation in your applications, keep these best practices in mind:

**Cost Management:**
- Monitor API usage closely
- Implement usage limits per user
- Use caching to avoid duplicate generations
- Consider offering different tiers of service
- Optimize image sizes for your use case

**Content Safety:**
- Implement content filtering and moderation
- Use safety classifiers to detect inappropriate content
- Maintain clear terms of service
- Provide user reporting mechanisms
- Keep logs for compliance and safety reviews

**Legal and Ethical Considerations:**
- Understand the licensing terms of each AI service
- Respect copyright and intellectual property rights
- Be transparent about AI-generated content
- Consider the environmental impact of AI generation
- Provide proper attribution when required

**User Experience:**
- Provide clear feedback during generation
- Offer editing and refinement tools
- Enable easy sharing and download options
- Implement progressive loading for better performance
- Design for accessibility and inclusivity

**Technical Excellence:**
- Use proper error handling and recovery
- Implement comprehensive logging and monitoring
- Design for scalability from the start
- Regular testing and performance optimization
- Keep up with latest model updates and improvements
            `
          }
        ],
        conclusion: `
AI-powered image generation represents one of the most exciting frontiers in modern application development. By understanding the underlying technology, choosing the right tools, and implementing best practices, you can create compelling applications that leverage the power of artificial intelligence to generate stunning visual content.

Remember that this technology is rapidly evolving, with new models and capabilities being released regularly. Stay connected with the AI community, experiment with new approaches, and always prioritize user experience and ethical considerations in your implementations.

The examples and patterns in this guide provide a solid foundation for building production-ready image generation features. As you grow more comfortable with the technology, consider exploring advanced topics like fine-tuning custom models, implementing real-time generation, and building collaborative creative tools.

The future of AI image generation is bright, and by mastering these concepts today, you'll be well-positioned to create the next generation of creative applications.
        `,
        resources: [
          {
            title: "OpenAI DALL-E Documentation",
            url: "https://platform.openai.com/docs/guides/images",
            description: "Official documentation for DALL-E API integration"
          },
          {
            title: "Stable Diffusion Web UI",
            url: "https://github.com/AUTOMATIC1111/stable-diffusion-webui",
            description: "Popular open-source interface for Stable Diffusion"
          },
          {
            title: "Hugging Face Diffusers",
            url: "https://huggingface.co/docs/diffusers/index",
            description: "Python library for state-of-the-art diffusion models"
          },
          {
            title: "Replicate API",
            url: "https://replicate.com/docs",
            description: "Cloud API for running AI models including image generation"
          },
          {
            title: "AI Image Generation Best Practices",
            url: "https://www.anthropic.com/news/ai-safety-best-practices",
            description: "Guidelines for responsible AI image generation"
          }
        ]
      }
    }
  }

  return blogPosts[slug as keyof typeof blogPosts] || null
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return {
      title: "Blog Post Not Found",
    }
  }

  return {
    title: `${post.title} - AI Development Blog`,
    description: post.description,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </div>

          <div className="text-center">
            <Badge variant="default" className="mb-4">
              {post.category}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">{post.title}</h1>
            <p className="text-lg text-gray-600 mb-6">{post.description}</p>

            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {post.readTime}
              </div>
              <div>{new Date(post.date).toLocaleDateString()}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
              <div className="flex items-start">
                <Lightbulb className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">{post.content.introduction}</p>
              </div>
            </div>
          </div>

          {/* Main Content Sections */}
          <div className="space-y-12">
            {post.content.sections.map((section, index) => (
              <section key={index} className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 flex items-center">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">
                    {index + 1}
                  </span>
                  {section.title}
                </h2>
                
                <div className="prose prose-lg max-w-none">
                  {section.content.split('\n\n').map((paragraph, pIndex) => {
                    if (paragraph.trim().startsWith('**') && paragraph.trim().endsWith('**')) {
                      return (
                        <h3 key={pIndex} className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                          {paragraph.replace(/\*\*/g, '')}
                        </h3>
                      )
                    }
                    return (
                      <p key={pIndex} className="text-gray-700 leading-relaxed mb-4">
                        {paragraph.split('**').map((part, partIndex) => 
                          partIndex % 2 === 0 ? part : <strong key={partIndex}>{part}</strong>
                        )}
                      </p>
                    )
                  })}
                </div>

                {section.codeExample && (
                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Code className="h-5 w-5 mr-2 text-green-600" />
                        Code Example
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                        <code>{section.codeExample}</code>
                      </pre>
                    </CardContent>
                  </Card>
                )}
              </section>
            ))}
          </div>

          {/* Conclusion */}
          <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
              Conclusion
            </h2>
            <div className="prose prose-lg max-w-none">
              {post.content.conclusion.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <BookOpen className="h-6 w-6 text-purple-600 mr-3" />
              Additional Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {post.content.resources.map((resource, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <ExternalLink className="h-4 w-4 mr-2 text-blue-600" />
                      <a 
                        href={resource.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        {resource.title}
                      </a>
                    </h3>
                    <p className="text-sm text-gray-600">{resource.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center bg-gray-50 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Build Your AI Image Generator?</h3>
            <p className="text-gray-600 mb-6">
              Start implementing AI-powered image generation in your applications today with our comprehensive tutorials.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild>
                <Link href="/tutorials">View Tutorials</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/ai-tools">Explore AI Tools</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}