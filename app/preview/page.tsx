import React from 'react'
import HeroLearning from '@/components/blocks/hero/HeroLearning'
import FeatureCourseHighlights from '@/components/blocks/feature/FeatureCourseHighlights'
import PricingSimple from '@/components/blocks/pricing/PricingSimple'
import PricingComparison from '@/components/blocks/pricing/PricingComparison'
import TestimonialSlider from '@/components/blocks/testimonial/TestimonialSlider'

export default function PreviewPage() {
  return (
    <main className="space-y-24 py-20">
      <HeroLearning />
      <FeatureCourseHighlights />
      <PricingSimple />
      <PricingComparison />
      <TestimonialSlider />
    </main>
  )
} 