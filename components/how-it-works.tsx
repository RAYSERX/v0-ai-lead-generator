import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Brain, Download } from "lucide-react"

const steps = [
  {
    step: 1,
    icon: MessageCircle,
    title: "Conversational Setup",
    description:
      "Chat with our AI to define your ideal customer profile. No complex forms - just natural conversation about your target market.",
    demoDetail: "Experience the full conversation flow with demo limitations clearly communicated",
  },
  {
    step: 2,
    icon: Brain,
    title: "AI Processing",
    description:
      "Our advanced algorithms analyze millions of data points to find prospects matching your exact criteria with high precision.",
    demoDetail: "Watch real-time processing with up to 20 carefully selected demo leads",
  },
  {
    step: 3,
    icon: Download,
    title: "Enriched Results",
    description:
      "Receive detailed lead profiles with contact information, company insights, and personalized outreach suggestions.",
    demoDetail: "Download demo results and experience optional enrichment features",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            How It Works <span className="gradient-text">in 3 Simple Steps</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            From conversation to qualified leads in minutes. Experience the complete workflow with our demo version.
          </p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="border-border bg-card relative overflow-hidden">
              <CardContent className="p-8 text-center">
                {/* Step Number */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{step.step}</span>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <step.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{step.description}</p>

                {/* Demo Detail */}
                <div className="bg-[var(--color-demo-bg)] border border-[var(--color-demo-border)] rounded-lg p-3">
                  <p className="text-sm text-[var(--color-demo)] font-medium">Demo: {step.demoDetail}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Demo Flow Visualization */}
        <div className="bg-card border border-border rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-center mb-6">Demo Experience Flow</h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1 text-center">
              <div className="w-12 h-12 bg-[var(--color-demo)] rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">1</span>
              </div>
              <p className="text-sm font-medium">Start Chat</p>
              <p className="text-xs text-muted-foreground">AI mentions 20-lead limit</p>
            </div>
            <div className="w-8 h-px bg-border hidden md:block"></div>
            <div className="flex-1 text-center">
              <div className="w-12 h-12 bg-[var(--color-demo)] rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">2</span>
              </div>
              <p className="text-sm font-medium">Define Criteria</p>
              <p className="text-xs text-muted-foreground">Natural conversation</p>
            </div>
            <div className="w-8 h-px bg-border hidden md:block"></div>
            <div className="flex-1 text-center">
              <div className="w-12 h-12 bg-[var(--color-demo)] rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">3</span>
              </div>
              <p className="text-sm font-medium">Process Request</p>
              <p className="text-xs text-muted-foreground">Max 20 leads enforced</p>
            </div>
            <div className="w-8 h-px bg-border hidden md:block"></div>
            <div className="flex-1 text-center">
              <div className="w-12 h-12 bg-[var(--color-demo)] rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">4</span>
              </div>
              <p className="text-sm font-medium">Download Results</p>
              <p className="text-xs text-muted-foreground">With upgrade prompts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
