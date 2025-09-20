"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react"
import { useState } from "react"
import { ChatInterface } from "./chat-interface"

export function HeroSection() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <>
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Demo Notice */}
            <div className="inline-flex items-center gap-2 bg-[var(--color-demo-bg)] border border-[var(--color-demo-border)] rounded-full px-4 py-2 mb-8">
              <Sparkles className="h-4 w-4 text-[var(--color-demo)]" />
              <span className="text-sm font-medium text-[var(--color-demo)]">
                Demo Version - Experience AI Lead Generation
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              AI-Powered Lead Generation <span className="gradient-text">for Modern Teams</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto leading-relaxed">
              Transform your sales pipeline with intelligent lead discovery. Get 20 high-quality, enriched prospects in
              minutes through our AI-powered conversation.
            </p>

            {/* Demo Limitation Notice */}
            <div className="bg-muted/50 border border-border rounded-lg p-6 mb-8 max-w-2xl mx-auto">
              <h3 className="font-semibold text-lg mb-2 text-[var(--color-demo)]">🎯 Demo Experience</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                This demonstration provides up to 20 carefully selected leads to showcase our AI capabilities.
                Experience our intelligent parameter collection and lead enrichment process.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] hover:opacity-90 text-lg px-8 py-6 h-auto"
                onClick={() => setIsChatOpen(true)}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Start Demo Chat (20 leads max)
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 h-auto border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white bg-transparent"
              >
                Watch Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-4">Trusted by sales teams worldwide</p>
              <div className="flex items-center justify-center gap-8 opacity-60">
                <div className="text-2xl font-bold">Salesforce</div>
                <div className="text-2xl font-bold">HubSpot</div>
                <div className="text-2xl font-bold">Pipedrive</div>
                <div className="text-2xl font-bold">Outreach</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Interface */}
      <ChatInterface isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  )
}
