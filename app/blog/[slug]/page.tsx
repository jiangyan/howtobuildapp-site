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