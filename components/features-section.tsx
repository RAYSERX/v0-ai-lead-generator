import { Card, CardContent } from "@/components/ui/card"
import { Brain, Target, Zap, Shield, Users, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description:
      "Advanced AI algorithms analyze millions of data points to identify your perfect prospects with unprecedented accuracy.",
    demoNote: "Experience with 20 sample leads",
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description:
      "Define your ideal customer profile through natural conversation and get laser-focused lead recommendations.",
    demoNote: "Full targeting capabilities in demo",
  },
  {
    icon: Zap,
    title: "Instant Enrichment",
    description:
      "Automatically enrich leads with contact information, company data, and personalized insights for better outreach.",
    demoNote: "Try enrichment on demo leads",
  },
  {
    icon: Shield,
    title: "Data Compliance",
    description: "GDPR and CCPA compliant data sourcing ensures your lead generation meets all privacy regulations.",
    demoNote: "Full compliance in production",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Share leads, track progress, and collaborate with your sales team through integrated workflow tools.",
    demoNote: "Preview team features",
  },
  {
    icon: TrendingUp,
    title: "Performance Analytics",
    description:
      "Track conversion rates, analyze lead quality, and optimize your targeting with detailed performance metrics.",
    demoNote: "Sample analytics included",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Powerful Features for <span className="gradient-text">Modern Sales Teams</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Experience the full power of AI-driven lead generation with our comprehensive demo. All features available
            with 20-lead limitation.
          </p>
        </div>

        {/* Demo Notice */}
        <div className="bg-[var(--color-demo-bg)] border border-[var(--color-demo-border)] rounded-lg p-6 mb-12 max-w-4xl mx-auto">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-[var(--color-demo)] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-xs font-bold">!</span>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--color-demo)] mb-2">Demo Feature Access</h3>
              <p className="text-sm text-[var(--color-demo)] leading-relaxed">
                All features below are fully functional in this demo version. The only limitation is the 20-lead maximum
                per request. Contact us to unlock unlimited lead generation and advanced enterprise features.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-border bg-card hover:bg-muted/50 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">{feature.description}</p>
                <div className="inline-flex items-center gap-2 bg-[var(--color-demo-bg)] border border-[var(--color-demo-border)] rounded-full px-3 py-1">
                  <span className="w-2 h-2 bg-[var(--color-demo)] rounded-full"></span>
                  <span className="text-xs font-medium text-[var(--color-demo)]">{feature.demoNote}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
