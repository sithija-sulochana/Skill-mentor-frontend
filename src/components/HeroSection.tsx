import React from 'react'
import { Button } from './ui/button'

function HeroSection() {
  return (
 <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-slate-100">
    
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Hero Content */}
        <div className="space-y-6 text-center">
          {/* Main Heading */}
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            <span className="text-balance">
              Find Your SkillMentor
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg leading-relaxed text-slate-600 sm:text-xl max-w-2xl mx-auto text-balance">
            Empower your career with personalized mentorship for AWS Developer 
            Associate, Interview Prep, and more.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Button 
              size="lg" 
              className="bg-amber-400 text-slate-900 font-semibold hover:bg-amber-500 transition-colors"
              aria-label="Sign up to see all tutors"
            >
              Sign up to see all the tutors
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection