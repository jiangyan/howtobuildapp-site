"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, CheckCircle } from "lucide-react"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitted(true)
    setIsLoading(false)
    setEmail("")
  }

  return (
    <section className="py-20 bg-blue-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Mail className="mx-auto h-12 w-12 text-blue-200 mb-6" />
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Stay Updated with AI Innovations</h2>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            Get the latest tutorials, tool reviews, and AI development insights delivered to your inbox weekly.
          </p>

          {isSubmitted ? (
            <div className="mt-8 flex items-center justify-center text-green-300">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span className="text-lg">Thank you for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto">
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-white"
                />
                <Button type="submit" disabled={isLoading} className="bg-white text-blue-600 hover:bg-gray-100">
                  {isLoading ? "Subscribing..." : "Subscribe"}
                </Button>
              </div>
              <p className="mt-3 text-sm text-blue-200">No spam, unsubscribe at any time.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
