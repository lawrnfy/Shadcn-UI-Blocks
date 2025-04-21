# Shadcn UI Blocks

A collection of 5 high-quality, reusable UI blocks built with Next.js, Tailwind CSS, shadcn/ui, and Framer Motion.

## Blocks Included

1. **PricingSimple** - A two-tier pricing block with animated cards and feature lists
2. **PricingComparison** - A responsive pricing table with mobile card view support
3. **HeroLearning** - A full-width hero section with animated content for e-learning platforms
4. **FeatureCourseHighlights** - A three-column feature highlight section with hover animations
5. **TestimonialSlider** - An accessible and animated testimonial carousel

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/shadcn-ui-blocks.git
cd shadcn-ui-blocks
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000/preview](http://localhost:3000/preview) to see all blocks in action.

## Features

- Fully responsive designs that work across all device sizes
- Animated elements using Framer Motion for engaging interactions
- Built with accessibility in mind (semantic HTML, ARIA attributes, keyboard navigation)
- Dark mode support via Tailwind's dark mode utilities
- TypeScript for better developer experience and type safety

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI component collection
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide Icons](https://lucide.dev/) - Beautiful open-source icons

## Project Structure

```
components/
└─ blocks/
   ├─ pricing/
   │  ├─ PricingSimple.tsx
   │  └─ PricingComparison.tsx
   ├─ hero/
   │  └─ HeroLearning.tsx
   ├─ feature/
   │  └─ FeatureCourseHighlights.tsx
   └─ testimonial/
      └─ TestimonialSlider.tsx
app/
└─ preview/
   └─ page.tsx   # Preview all blocks
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Next.js](https://nextjs.org/) for the React framework
- [Framer Motion](https://www.framer.com/motion/) for the animation library
