"use client"

import React from "react"
import { motion } from "framer-motion"
import { Check, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const fadeInRowVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
}

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "For individuals just getting started",
    buttonText: "Get Started",
    buttonVariant: "outline",
  },
  {
    name: "Pro",
    price: "$19",
    description: "For serious learners and professionals",
    buttonText: "Subscribe",
    buttonVariant: "default",
    highlighted: true,
  },
  {
    name: "Team",
    price: "$49",
    description: "For teams of up to 5 members",
    buttonText: "Contact Sales",
    buttonVariant: "outline",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    buttonText: "Contact Sales",
    buttonVariant: "outline",
  },
]

type Feature = {
  name: string
  tiers: Record<string, boolean | string>
}

const features: Feature[] = [
  {
    name: "Course access",
    tiers: { Free: "Limited", Pro: true, Team: true, Enterprise: true },
  },
  {
    name: "Project limit",
    tiers: { Free: "1", Pro: "Unlimited", Team: "Unlimited", Enterprise: "Unlimited" },
  },
  {
    name: "Priority support",
    tiers: { Free: false, Pro: true, Team: true, Enterprise: true },
  },
  {
    name: "Team collaboration",
    tiers: { Free: false, Pro: false, Team: true, Enterprise: true },
  },
  {
    name: "Custom branding",
    tiers: { Free: false, Pro: false, Team: false, Enterprise: true },
  },
  {
    name: "Analytics dashboard",
    tiers: { Free: false, Pro: "Basic", Team: "Advanced", Enterprise: "Enterprise" },
  },
  {
    name: "API access",
    tiers: { Free: false, Pro: false, Team: true, Enterprise: true },
  },
]

export default function PricingComparison() {
  return (
    <section className="container px-4 py-16 mx-auto">
      <div className="mx-auto max-w-3xl text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Compare Plans</h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Choose the perfect plan for your learning journey.
        </p>
      </div>

      <div className="overflow-x-auto">
        <div className="inline-block min-w-full py-2 align-middle">
          <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-800" role="table">
            <thead className="sticky top-0 bg-background z-10">
              <tr>
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-0">
                  <span className="sr-only">Feature</span>
                </th>
                {plans.map((plan) => (
                  <th
                    key={plan.name}
                    scope="col"
                    className={cn(
                      "px-3 py-3.5 text-center text-sm font-semibold",
                      plan.highlighted ? "text-primary" : ""
                    )}
                  >
                    <div className="flex flex-col items-center">
                      <span className="text-lg font-bold">{plan.name}</span>
                      <span className="mt-1 text-2xl font-bold">{plan.price}</span>
                      <span className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                        {plan.description}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
              {features.map((feature, featureIdx) => (
                <motion.tr
                  key={feature.name}
                  custom={featureIdx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInRowVariants}
                >
                  <th
                    scope="row"
                    className="py-4 pl-4 pr-3 text-sm font-medium text-left sm:pl-0"
                  >
                    {feature.name}
                  </th>
                  {plans.map((plan) => (
                    <td key={plan.name} className="px-3 py-4 text-sm text-center">
                      {renderValue(feature.tiers[plan.name], plan.highlighted)}
                    </td>
                  ))}
                </motion.tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th scope="row" className="pt-8 pl-4 pr-3 text-left text-sm font-medium sm:pl-0">
                  <span className="sr-only">Call to action</span>
                </th>
                {plans.map((plan) => (
                  <td key={plan.name} className="pt-8 px-3 text-center">
                    <Button
                      variant={plan.buttonVariant as "default" | "outline"}
                      size="lg"
                      className={cn(
                        "w-full",
                        plan.highlighted ? "shadow-md" : ""
                      )}
                      aria-label={`Get ${plan.name} plan`}
                    >
                      {plan.buttonText}
                    </Button>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      
      {/* Mobile view (cards) */}
      <div className="mt-16 grid gap-8 md:hidden">
        {plans.map((plan, planIdx) => (
          <motion.div
            key={plan.name}
            custom={planIdx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInRowVariants}
            className={cn(
              "border rounded-lg p-6",
              plan.highlighted ? "border-primary shadow-md" : "border-border"
            )}
          >
            <div className="text-center mb-4">
              <h3 className="text-lg font-bold">{plan.name}</h3>
              <div className="mt-1 text-2xl font-bold">{plan.price}</div>
              <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">{plan.description}</div>
            </div>
            
            <ul className="space-y-3 mb-6">
              {features.map((feature) => (
                <li key={feature.name} className="flex justify-between text-sm">
                  <span>{feature.name}</span>
                  <span>{renderValue(feature.tiers[plan.name], plan.highlighted)}</span>
                </li>
              ))}
            </ul>
            
            <Button
              variant={plan.buttonVariant as "default" | "outline"}
              size="lg"
              className="w-full"
              aria-label={`Get ${plan.name} plan`}
            >
              {plan.buttonText}
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function renderValue(value: boolean | string, isHighlighted: boolean = false) {
  if (typeof value === "string") {
    return <span className={isHighlighted ? "font-semibold" : ""}>{value}</span>
  }

  if (value === true) {
    return <Check className="mx-auto h-5 w-5 text-green-500" aria-hidden="true" />
  }

  return <Minus className="mx-auto h-5 w-5 text-gray-400" aria-hidden="true" />
} 