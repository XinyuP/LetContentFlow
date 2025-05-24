"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Heart, Sparkles, Lightbulb, Star } from "lucide-react"

const existingIdeas = [
  {
    id: 1,
    title: "10 AI Tools Every Creator Needs 💕",
    content: "Curate a list of must-have AI tools for content creation, including pricing and use cases",
    tags: ["AI", "Tools", "List"],
    status: "draft",
    aiScore: 85,
    suggestedPlatform: "YouTube",
    estimatedEngagement: "High"
  },
  {
    id: 2,
    title: "Behind the Scenes: My Content Creation Setup ✨",
    content: "Show my desk setup, equipment, and workflow for creating content",
    tags: ["BTS", "Setup", "Personal"],
    status: "idea",
    aiScore: 72,
    suggestedPlatform: "Instagram",
    estimatedEngagement: "Medium"
  },
  {
    id: 3,
    title: "Common Content Creator Mistakes 🚫",
    content: "Address the top 5 mistakes new creators make and how to avoid them",
    tags: ["Education", "Tips", "Mistakes"],
    status: "scheduled",
    aiScore: 91,
    suggestedPlatform: "TikTok",
    estimatedEngagement: "High"
  },
  {
    id: 4,
    title: "Collaborative Content Ideas 🤝",
    content: "Brainstorm ideas for collaborating with other creators in my niche",
    tags: ["Collaboration", "Networking"],
    status: "idea",
    aiScore: 68,
    suggestedPlatform: "Twitter",
    estimatedEngagement: "Medium"
  },
  {
    id: 5,
    title: "Year in Review: My Creator Journey 🎉",
    content: "Reflect on the year's wins, challenges, and lessons learned as a content creator",
    tags: ["Personal", "Reflection", "Year-End"],
    status: "idea",
    aiScore: 79,
    suggestedPlatform: "LinkedIn",
    estimatedEngagement: "High"
  },
  {
    id: 6,
    title: "Quick Design Tips for Non-Designers 🎨",
    content: "Share 5-minute design tips that anyone can use to improve their content",
    tags: ["Design", "Tips", "Quick"],
    status: "draft",
    aiScore: 88,
    suggestedPlatform: "Instagram",
    estimatedEngagement: "High"
  }
]

export default function IdeasPage() {
  const [ideas, setIdeas] = useState(existingIdeas)
  const [newIdea, setNewIdea] = useState({
    title: "",
    content: "",
    tags: ""
  })
  const [filter, setFilter] = useState("all")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "idea": return "bg-pink-100 text-pink-600 border-pink-200"
      case "draft": return "bg-rose-100 text-rose-600 border-rose-200"
      case "scheduled": return "bg-purple-100 text-purple-600 border-purple-200"
      default: return "bg-gray-100 text-gray-600 border-gray-200"
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-500"
    if (score >= 70) return "text-yellow-500"
    return "text-pink-500"
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newIdea.title.trim()) return

    const idea = {
      id: ideas.length + 1,
      title: newIdea.title,
      content: newIdea.content,
      tags: newIdea.tags.split(",").map(tag => tag.trim()).filter(Boolean),
      status: "idea",
      aiScore: Math.floor(Math.random() * 30) + 70,
      suggestedPlatform: ["Instagram", "TikTok", "YouTube", "Twitter", "LinkedIn"][Math.floor(Math.random() * 5)],
      estimatedEngagement: ["High", "Medium"][Math.floor(Math.random() * 2)]
    }

    setIdeas([idea, ...ideas])
    setNewIdea({ title: "", content: "", tags: "" })
  }

  const filteredIdeas = ideas.filter(idea => {
    if (filter === "all") return true
    return idea.status === filter
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-display font-bold bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent mb-2">
            Idea Vault 💕
          </h1>
          <p className="text-gray-600 text-lg">
            Your magical space to capture, organize, and transform creative sparks into amazing content ✨
          </p>
        </div>

        {/* Quick Capture Form */}
        <Card className="p-6 mb-8 bg-white border-pink-100 shadow-lg">
          <div className="flex items-center mb-4">
            <Lightbulb className="w-6 h-6 text-pink-500 mr-2" />
            <h3 className="text-xl font-semibold text-gray-800">Capture New Idea</h3>
            <Sparkles className="w-5 h-5 text-pink-400 ml-2" />
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                placeholder="What's your brilliant idea? ✨"
                value={newIdea.title}
                onChange={(e) => setNewIdea({ ...newIdea, title: e.target.value })}
                className="border-pink-200 focus:border-pink-400 focus:ring-pink-200"
              />
            </div>
            <div>
              <Textarea
                placeholder="Tell us more about this amazing idea... 💭"
                value={newIdea.content}
                onChange={(e) => setNewIdea({ ...newIdea, content: e.target.value })}
                className="min-h-[100px] border-pink-200 focus:border-pink-400 focus:ring-pink-200"
              />
            </div>
            <div>
              <Input
                placeholder="Tags (comma separated) 🏷️"
                value={newIdea.tags}
                onChange={(e) => setNewIdea({ ...newIdea, tags: e.target.value })}
                className="border-pink-200 focus:border-pink-400 focus:ring-pink-200"
              />
            </div>
            <Button type="submit" className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              <Heart className="w-4 h-4 mr-2" />
              Capture This Magic
            </Button>
          </form>
        </Card>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-6 justify-center">
          {["all", "idea", "draft", "scheduled"].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === status
                  ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-pink-50 hover:text-pink-600 border border-pink-100"
              }`}
            >
              {status === "all" ? "All Ideas" : status.charAt(0).toUpperCase() + status.slice(1)}
              <span className="ml-2 text-xs">
                ({status === "all" ? ideas.length : ideas.filter(i => i.status === status).length})
              </span>
            </button>
          ))}
        </div>

        {/* Ideas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredIdeas.map((idea, index) => (
            <Card key={idea.id} className="p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 bg-white border-pink-100 group">
              {/* Status Badge */}
              <div className="flex items-center justify-between mb-3">
                <Badge className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(idea.status)}`}>
                  {idea.status === "idea" && "💡"} {idea.status === "draft" && "📝"} {idea.status === "scheduled" && "📅"}
                  {" " + idea.status}
                </Badge>
                <div className={`text-sm font-bold flex items-center ${getScoreColor(idea.aiScore)}`}>
                  <Star className="w-4 h-4 mr-1" />
                  {idea.aiScore}
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display font-semibold text-gray-800 mb-2 leading-tight group-hover:text-pink-600 transition-colors">
                {idea.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                {idea.content}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {idea.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-pink-50 text-pink-600 rounded-full text-xs font-medium border border-pink-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* AI Insights */}
              <div className="space-y-2 pt-4 border-t border-pink-100">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">Best Platform:</span>
                  <span className="font-medium text-pink-600">{idea.suggestedPlatform}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">Engagement:</span>
                  <span className={`font-medium ${
                    idea.estimatedEngagement === "High" ? "text-green-500" : "text-yellow-500"
                  }`}>
                    {idea.estimatedEngagement}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* AI Recommendations */}
        <Card className="p-6 bg-gradient-to-r from-pink-50 to-rose-50 border-pink-100">
          <div className="flex items-center mb-4">
            <Sparkles className="w-6 h-6 text-pink-500 mr-2" />
            <h3 className="text-xl font-semibold text-gray-800">AI Recommendations</h3>
            <Heart className="w-5 h-5 text-pink-400 ml-2" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-xl border border-pink-100 shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                📈 Trending Topics
              </h4>
              <p className="text-sm text-gray-600">
                AI tools and productivity content are performing 35% better this week! ✨
              </p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-pink-100 shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                🎯 Content Gap
              </h4>
              <p className="text-sm text-gray-600">
                Consider creating more tutorial-style content for better engagement 💕
              </p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-pink-100 shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                ⏰ Optimal Timing
              </h4>
              <p className="text-sm text-gray-600">
                Your audience is most active on weekends. Schedule accordingly! 🌟
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}