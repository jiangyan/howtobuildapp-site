I will address the issue by changing the button title in the hero section to 'Claude Code Guide' and ensuring the button size adjusts automatically. I'll start by examining `components/hero.tsx` to locate and update the button.I've located the target button in `components/hero.tsx` and will change its text to "Claude Code Guide." The user wants the button to auto-fit, and since it's styled with padding rather than a fixed width, it should resize naturally. To be certain, I'll remove the `px-8` class and rely on the `size="lg"` property to manage padding. I'll now inspect `components/ui/button.tsx` to confirm the `lg` variant's behavior.I've analyzed `components/hero.tsx` and the `Button` component at `components/ui/button.tsx`. The `size="lg"` property on the button already provides `px-8` padding, making the `px-8` and `py-3` classes in `hero.tsx` redundant.

To resolve the issue, I will:
1.  Change the button text from "Claude Guide" to "Claude Code Guide".
2.  Remove the redundant padding classes from the button's `className` to rely on the `size="lg"` variant for sizing, which will ensure the button's width adjusts to the new text.
3.  For consistency, I'll apply the same class cleanup to the adjacent "Explore Tools" button.

Here is the updated file:
---
components/hero.tsx
---
```tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Code, Zap } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              <span>AI-Powered Development</span>
            </div>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            Build the Future with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              AI Innovation
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
            Learn how to harness the power of artificial intelligence to build cutting-edge applications. From tutorials
            and case studies to tools and resources, we've got everything you need to become an AI-first developer.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" className="text-lg">
              <Link href="/Claude_Code_Guide.html">
                Claude Code Guide
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg" className="text-lg">
              <Link href="/ai-tools">Explore Tools</Link>
            </Button>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="text-center">
            <Link href="/tutorials" className="group">
              <div className="mx-auto h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <Code className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Practical Tutorials</h3>
            </Link>
            <p className="mt-2 text-gray-600">Step-by-step guides to build real AI applications</p>
          </div>

          <div className="text-center">
            <div className="mx-auto h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Zap className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">AI Tools & Services</h3>
            <p className="mt-2 text-gray-600">Curated collection of the best AI development tools</p>
          </div>

          <div className="text-center">
            <div className="mx-auto h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Case Studies</h3>
            <p className="mt-2 text-gray-600">Real-world examples of successful AI implementations</p>
          </div>
        </div>
      </div>
    </section>
  )
}
```
