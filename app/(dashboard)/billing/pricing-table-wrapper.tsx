"use client"

import { Component, ReactNode } from "react"
import { PricingTable } from "@clerk/nextjs"
import { CreditCard, ExternalLink, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface Props {
  children?: ReactNode
}

interface State {
  hasError: boolean
}

class BillingErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  }

  public static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  public render() {
    if (this.state.hasError) {
      return <BillingFallbackCard />
    }

    return this.props.children
  }
}

function BillingFallbackCard() {
  return (
    <Card className="border-dashed">
      <CardHeader>
        <div className="flex items-center gap-2 text-amber-500">
          <CreditCard className="size-5" />
          <CardTitle className="text-lg font-medium">Clerk Billing Setup Required</CardTitle>
        </div>
        <CardDescription>
          Clerk Billing has not been enabled in your Clerk Dashboard yet.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 text-sm text-muted-foreground">
        <p>
          To enable pricing tables and subscription plans, configure Clerk Billing in your Clerk application dashboard:
        </p>
        <ol className="list-decimal space-y-2 pl-5 font-mono text-xs text-foreground">
          <li>Go to your Clerk Dashboard &rarr; Billing section</li>
          <li>Enable Clerk Billing for Organizations</li>
          <li>Create a plan with the slug <span className="bg-muted px-1.5 py-0.5 rounded text-amber-500 font-bold">pro</span></li>
        </ol>
        <div className="pt-2">
          <Button variant="outline" asChild className="gap-2">
            <a href="https://dashboard.clerk.com" target="_blank" rel="noreferrer">
              <ExternalLink className="size-4" />
              Open Clerk Dashboard
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export function PricingTableWrapper() {
  return (
    <BillingErrorBoundary>
      <PricingTable
        for="organization"
        newSubscriptionRedirectUrl="/billing"
      />
    </BillingErrorBoundary>
  )
}
