"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type Testimonial = {
  id: number
  content: string
  author: {
    name: string
    role: string
    avatar: string
    initials: string
  }
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "This platform completely transformed my career. I went from having basic coding skills to landing a full-stack developer job in just 6 months. The curriculum is exceptional!",
    author: {
      name: "Alex Morgan",
      role: "Software Developer at TechCorp",
      avatar: "https://i.pravatar.cc/150?img=11",
      initials: "AM"
    }
  },
  {
    id: 2,
    content: "The interactive learning approach helped me retain information better than any other course I've taken. I especially loved the real-world projects that built my portfolio while learning.",
    author: {
      name: "Samantha Chen",
      role: "UX Designer at CreativeLabs",
      avatar: "https://i.pravatar.cc/150?img=12",
      initials: "SC"
    }
  },
  {
    id: 3,
    content: "As a career switcher, I was worried about learning programming from scratch. This platform made the transition smooth, with step-by-step guidance and amazing community support.",
    author: {
      name: "Michael Johnson",
      role: "Former Accountant, now Backend Engineer",
      avatar: "https://i.pravatar.cc/150?img=13",
      initials: "MJ"
    }
  }
]

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
}

export default function TestimonialSlider() {
  const [[page, direction], setPage] = useState([0, 0])

  const testimonialIndex = Math.abs(page % testimonials.length)
  
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }

  return (
    <section className="container px-4 py-16 mx-auto">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          What Our Students Say
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Hear from the people who have transformed their careers with our platform.
        </p>
      </div>

      <div className="relative max-w-3xl mx-auto">
        <div className="flex items-center justify-center p-2 md:p-6 bg-muted/40 rounded-2xl overflow-hidden relative min-h-[300px]">
          {/* Large quote icon */}
          <Quote className="absolute text-gray-200 dark:text-gray-800 h-40 w-40 left-0 top-0 -translate-x-1/3 -translate-y-1/3 opacity-30" aria-hidden="true" />
          
          <AnimatePresence custom={direction} initial={false} mode="wait">
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute w-full px-4 md:px-10"
              aria-live="polite"
            >
              <div className="text-center">
                <blockquote className="text-lg md:text-xl italic mb-8 relative z-10">
                  "{testimonials[testimonialIndex].content}"
                </blockquote>
                
                <div className="flex flex-col items-center">
                  <Avatar className="h-14 w-14 mb-4">
                    <AvatarImage 
                      src={testimonials[testimonialIndex].author.avatar} 
                      alt={testimonials[testimonialIndex].author.name} 
                    />
                    <AvatarFallback>
                      {testimonials[testimonialIndex].author.initials}
                    </AvatarFallback>
                  </Avatar>
                  <cite className="not-italic font-medium">
                    {testimonials[testimonialIndex].author.name}
                  </cite>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonials[testimonialIndex].author.role}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Navigation controls */}
        <div className="flex justify-center mt-8 gap-2">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={() => paginate(-1)}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          {testimonials.map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              className={`rounded-full h-2 w-2 p-2 ${
                index === testimonialIndex ? "bg-primary" : "bg-gray-300 dark:bg-gray-700"
              }`}
              onClick={() => setPage([index, index > testimonialIndex ? 1 : -1])}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={index === testimonialIndex ? "true" : "false"}
            />
          ))}
          
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={() => paginate(1)}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

// TODO: Remaining blocks (6–50) will be created after milestone approval. 