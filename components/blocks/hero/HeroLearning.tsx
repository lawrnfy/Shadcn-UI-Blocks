"use client"

import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function HeroLearning() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-primary/20 via-background to-secondary/20" 
        aria-hidden="true"
      />
      
      <div className="container px-4 py-20 mx-auto relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-lg"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Empower Your Learning Journey
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-lg text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Discover practical courses designed by industry experts. 
              Gain in-demand skills that elevate your career to new heights.
            </motion.p>
            
            <motion.div 
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button size="lg" className="rounded-full">
                Start Learning
              </Button>
              <Button size="lg" variant="outline" className="rounded-full">
                View Courses
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="hidden md:block relative"
          >
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/30 to-secondary/30 p-1">
              <div className="h-full w-full overflow-hidden rounded-xl bg-muted">
                <svg
                  className="h-full w-full"
                  fill="none"
                  viewBox="0 0 400 400"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Decorative learning illustration"
                >
                  <rect width="400" height="400" fill="currentColor" fillOpacity="0.05" />
                  <rect x="46" y="80" width="320" height="240" rx="12" fill="currentColor" fillOpacity="0.1" />
                  <rect x="66" y="100" width="280" height="140" rx="8" fill="currentColor" fillOpacity="0.1" />
                  <rect x="100" y="260" width="212" height="20" rx="4" fill="currentColor" fillOpacity="0.2" />
                  <rect x="100" y="290" width="212" height="20" rx="4" fill="currentColor" fillOpacity="0.1" />
                  <rect x="66" y="320" width="100" height="30" rx="6" fill="currentColor" fillOpacity="0.3" />
                  <circle cx="350" cy="160" r="24" fill="currentColor" fillOpacity="0.3" />
                  <circle cx="350" cy="160" r="16" fill="currentColor" fillOpacity="0.6" />
                </svg>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute -right-4 top-1/3 h-12 w-12 rounded-full bg-primary/30 backdrop-blur-md"
              animate={{ 
                y: [0, -15, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 6,
                ease: "easeInOut"
              }}
              aria-hidden="true"
            />
            <motion.div
              className="absolute left-1/4 bottom-1/4 h-8 w-8 rounded-full bg-secondary/30 backdrop-blur-md"
              animate={{ 
                y: [0, 12, 0],
                scale: [1, 0.9, 1],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 5,
                ease: "easeInOut",
                delay: 1
              }}
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 