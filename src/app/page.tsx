"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Calendar, Lightbulb, BarChart3, Users, Sparkles, ArrowRight, Star } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-100/20 to-pink-200/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-pink-100 rounded-full">
                <Sparkles className="w-4 h-4 text-pink-500 mr-2" />
                <span className="text-pink-600 text-sm font-medium">AI-Powered Content Magic ✨</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-500 via-pink-400 to-pink-600 bg-clip-text text-transparent">
                Let Content Flow
              </span>
              <br />
              <span className="text-gray-700">Like Never Before 💕</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              The sweetest way to manage your content creation journey. From spark ✨ to publish 🚀, 
              we make content creation feel like a breeze with AI-powered recommendations and adorable workflows.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/dashboard"
                className="group bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center"
              >
                Start Creating Magic
                <Heart className="w-5 h-5 ml-2 group-hover:animate-pulse" />
              </Link>
              <button className="text-pink-600 font-medium text-lg hover:text-pink-700 transition-colors flex items-center">
                Watch Demo 
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-4">
              Content Creation Shouldn't Feel Like Chaos 😵‍💫
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Too many creators are stuck in the content struggle bus. Let's fix that together! 💪
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "😰",
                title: "Flying Blind",
                description: "No clue when or where to post that amazing content you just created"
              },
              {
                icon: "🤹",
                title: "Juggling Chaos",
                description: "Ideas scattered everywhere while execution feels like herding cats"
              },
              {
                icon: "🔍",
                title: "Missing Insights",
                description: "Can't figure out what worked and what flopped from past posts"
              }
            ].map((problem, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-pink-50 border border-pink-100">
                <div className="text-4xl mb-4">{problem.icon}</div>
                <h3 className="text-xl font-display font-semibold text-gray-800 mb-3">{problem.title}</h3>
                <p className="text-gray-600">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gradient-to-r from-pink-50 to-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-4">
              Meet Your New Content BFF 💕
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              LetContentFlow is your AI-powered content companion that makes everything easier, 
              smarter, and way more fun!
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Calendar,
                title: "Perfect Timing",
                description: "AI finds the sweet spot when your audience is most active 📊",
                color: "from-pink-400 to-pink-500"
              },
              {
                icon: Lightbulb,
                title: "Idea Paradise",
                description: "Drop ideas anytime, anywhere. We'll help them bloom into content 🌸",
                color: "from-pink-500 to-rose-500"
              },
              {
                icon: Heart,
                title: "Smart Scheduling",
                description: "Calendar invites with everything you need to post like a pro 📅",
                color: "from-rose-400 to-pink-500"
              },
              {
                icon: BarChart3,
                title: "Growth Insights",
                description: "Learn what makes your content sparkle and do more of that ✨",
                color: "from-pink-400 to-rose-400"
              }
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="text-center group">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-4">
              How The Magic Happens ✨
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four simple steps to content creation bliss
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Drop Ideas",
                description: "Capture inspiration whenever it strikes - we'll keep it safe 💡",
                emoji: "💭"
              },
              {
                step: "2", 
                title: "AI Analysis",
                description: "Our smart AI analyzes your past hits and audience behavior 🤖",
                emoji: "🔮"
              },
              {
                step: "3",
                title: "Get Recommendations",
                description: "Receive perfect timing, platform, and format suggestions 📋",
                emoji: "🎯"
              },
              {
                step: "4",
                title: "Schedule & Shine",
                description: "Auto-scheduled calendar invites with everything you need 🌟",
                emoji: "🚀"
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {step.step}
                  </div>
                  <div className="text-4xl mb-4">{step.emoji}</div>
                  <h3 className="text-xl font-display font-semibold text-gray-800 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-6 -right-4 w-8 h-0.5 bg-gradient-to-r from-pink-300 to-pink-400"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 via-pink-400 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Ready to Let Your Content Flow? 💕
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Join thousands of creators who've fallen in love with stress-free content creation
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/dashboard"
              className="bg-white text-pink-600 px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center"
            >
              Start Your Journey
              <Sparkles className="w-5 h-5 ml-2" />
            </Link>
            <div className="flex items-center text-pink-100">
              <div className="flex mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span>Loved by 10K+ creators</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}