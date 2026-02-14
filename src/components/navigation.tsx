import React, { useState } from 'react'
import { Button } from './ui/button'

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Courses', href: '#courses' },
    { label: 'Mentors', href: '#mentors' },
    { label: 'Pricing', href: '#pricing' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-black border-b border-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Section */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center font-bold text-black transition-transform group-hover:scale-110">
              SM
            </div>
            <span className="text-xl font-bold text-white hidden sm:inline">Skill Mentor</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            {/* Desktop Login Button: Black bg, White text -> Hover: White bg, Black text */}
            <Button
              className="hidden sm:flex bg-black text-white border border-gray-700 hover:bg-white hover:text-black transition-colors duration-300"
            >
              Login
            </Button>
            
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500 font-semibold transition-colors duration-200">
              Sign Up
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-800 py-4 space-y-3 bg-black">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-900 rounded-md text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <div className="border-t border-gray-800 pt-3 space-y-2">
              {/* Mobile Login Button: Same styling logic applied */}
              <Button
                className="w-full bg-black text-white border border-gray-700 hover:bg-white hover:text-black transition-colors duration-300"
              >
                Login
              </Button>
              <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500 font-semibold">
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}