"use client"

import React from "react"
import { motion } from "framer-motion"
import { BookOpen, Code, Compass } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type FeatureItem = {
  icon: React.ElementType
  title: string
  description: string
  link?: string
}

const features: FeatureItem[] = [
  {
    icon: BookOpen,
    title: "Comprehensive Curriculum",
    description: "Access over 500 courses covering the most in-demand skills in today's job market.",
    link: "#courses"
  },
  {
    icon: Code,
    title: "Interactive Learning",
    description: "Practice with hands-on coding exercises and real-world projects that reinforce concepts.",
    link: "#interactive"
  },
  {
    icon: Compass,
    title: "Expert Guidance",
    description: "Learn from industry experts with years of experience in their respective fields.",
    link: "#instructors"
  }
]

export default function FeatureCourseHighlights() {
  return (
    <section className="container px-4 py-16 mx-auto">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Why Choose Our Platform
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          We've designed our platform to provide an optimal learning experience
          that helps you achieve your goals faster.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5,
              delay: index * 0.2
            }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ scale: 1.05 }}
            className="transition-all duration-200"
          >
            <Card className="h-full border-2 hover:border-primary hover:shadow-md">
              <CardHeader>
                <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 mb-4 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {feature.link && (
                  <a
                    href={feature.link}
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    Learn more →
                  </a>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
} 