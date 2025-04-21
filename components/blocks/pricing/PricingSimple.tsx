"use client"

import React from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

const plans = [
  {
    name: "Basic",
    price: "$19/mo",
    description: "Perfect for individuals and small teams getting started.",
    features: [
      "Access to all basic courses",
      "Up to 3 projects",
      "Community support",
      "Regular updates"
    ]
  },
  {
    name: "Pro",
    price: "$49/mo",
    description: "Advanced features for professionals and growing teams.",
    features: [
      "Access to all premium courses",
      "Unlimited projects",
      "Priority support",
      "Early access to new content",
      "Advanced analytics"
    ],
    highlighted: true
  }
]

export default function PricingSimple() {
  return (
    <section className="container px-4 py-16 mx-auto">
      <motion.div 
        className="max-w-3xl mx-auto text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUpVariants}
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Simple, Transparent Pricing</h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Choose the plan that's right for you and start your learning journey today.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div 
            key={plan.name}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              ...fadeInUpVariants,
              visible: { 
                ...fadeInUpVariants.visible, 
                transition: { delay: index * 0.2, duration: 0.5 } 
              }
            }}
          >
            <Card className={`h-full flex flex-col ${plan.highlighted ? 'border-primary shadow-lg' : ''}`}>
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-2 text-3xl font-bold">{plan.price}</div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-green-500" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  size="lg" 
                  className="w-full" 
                  variant={plan.highlighted ? "default" : "outline"}
                  aria-label={`Choose ${plan.name} Plan`}
                >
                  Choose Plan
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
} 