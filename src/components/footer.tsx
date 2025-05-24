"use client";

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-nx-surface border-t border-nx-neutral-200 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg text-nx-ink">NebulaQueue</h3>
            <p className="text-nx-neutral-400 text-sm leading-relaxed">
              Create, schedule, and grow your content with AI-powered insights.
            </p>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h4 className="font-display font-medium text-nx-ink">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/dashboard" className="text-nx-neutral-400 hover:text-nx-accent-pink transition-colors duration-150 text-sm">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/pipeline" className="text-nx-neutral-400 hover:text-nx-accent-pink transition-colors duration-150 text-sm">
                  Content Pipeline
                </Link>
              </li>
              <li>
                <Link href="/analytics" className="text-nx-neutral-400 hover:text-nx-accent-pink transition-colors duration-150 text-sm">
                  Analytics
                </Link>
              </li>
              <li>
                <Link href="/scheduler" className="text-nx-neutral-400 hover:text-nx-accent-pink transition-colors duration-150 text-sm">
                  Scheduler
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="font-display font-medium text-nx-ink">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-nx-neutral-400 hover:text-nx-accent-pink transition-colors duration-150 text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-nx-neutral-400 hover:text-nx-accent-pink transition-colors duration-150 text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-nx-neutral-400 hover:text-nx-accent-pink transition-colors duration-150 text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-nx-neutral-400 hover:text-nx-accent-pink transition-colors duration-150 text-sm">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="font-display font-medium text-nx-ink">Connect</h4>
            <div className="flex space-x-4">
              <Link 
                href="https://twitter.com" 
                className="text-2xl hover:scale-110 transition-transform duration-150"
                aria-label="Twitter"
              >
                🐦
              </Link>
              <Link 
                href="https://instagram.com" 
                className="text-2xl hover:scale-110 transition-transform duration-150"
                aria-label="Instagram"
              >
                📸
              </Link>
              <Link 
                href="https://linkedin.com" 
                className="text-2xl hover:scale-110 transition-transform duration-150"
                aria-label="LinkedIn"
              >
                💼
              </Link>
              <Link 
                href="https://youtube.com" 
                className="text-2xl hover:scale-110 transition-transform duration-150"
                aria-label="YouTube"
              >
                📺
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-nx-neutral-200 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-nx-neutral-400 text-sm">
            © 2024 NebulaQueue. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-nx-neutral-400 hover:text-nx-accent-pink transition-colors duration-150 text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-nx-neutral-400 hover:text-nx-accent-pink transition-colors duration-150 text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}