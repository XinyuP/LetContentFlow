"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, Lightbulb, Edit, Eye, Calendar, CheckCircle, Sparkles, Star } from "lucide-react"

const initialContent = {
  ideas: [
    {
      id: 1,
      title: "10 AI Tools Every Creator Needs 💕",
      description: "Comprehensive guide to essential AI tools",
      status: "ideas",
      priority: "high",
      platform: "YouTube",
      assignee: "You",
      dueDate: "2024-01-15",
      tags: ["AI", "Tools", "Guide"],
      aiScore: 92
    },
    {
      id: 2,
      title: "Quick Instagram Reel Ideas",
      description: "5 trendy reel concepts for this week",
      platform: "Instagram",
      priority: "medium",
      aiScore: 78,
      estimatedTime: "30 mins"
    }
  ],
  drafts: [
    {
      id: 3,
      title: "My Content Creation Setup",
      description: "Behind the scenes of my creator workspace",
      platform: "Instagram",
      priority: "low",
      aiScore: 72,
      estimatedTime: "1 hour",
      progress: 60
    },
    {
      id: 4,
      title: "Creator Mistakes to Avoid",
      description: "Top 5 mistakes new creators make",
      platform: "TikTok",
      priority: "high",
      aiScore: 91,
      estimatedTime: "45 mins",
      progress: 80
    }
  ],
  review: [
    {
      id: 5,
      title: "Design Tips for Non-Designers",
      description: "Quick design improvements anyone can make",
      platform: "Instagram",
      priority: "medium",
      aiScore: 88,
      estimatedTime: "Review needed",
      progress: 100
    }
  ],
  scheduled: [
    {
      id: 6,
      title: "Year End Creator Reflection",
      description: "My journey and lessons learned this year",
      platform: "LinkedIn",
      priority: "high",
      aiScore: 79,
      scheduledDate: "Dec 30, 2024",
      scheduledTime: "2:00 PM"
    },
    {
      id: 7,
      title: "Quick Productivity Hacks",
      description: "5-minute tips to boost your productivity",
      platform: "Twitter",
      priority: "medium",
      aiScore: 83,
      scheduledDate: "Dec 28, 2024",
      scheduledTime: "10:00 AM"
    }
  ],
  published: [
    {
      id: 8,
      title: "Best Tools for 2024",
      description: "My favorite tools and software this year",
      platform: "YouTube",
      priority: "high",
      aiScore: 92,
      publishDate: "Dec 25, 2024",
      views: "12.5K",
      engagement: "8.4%"
    }
  ]
}

const columns = [
  { id: "ideas", title: "Ideas 💡", icon: Lightbulb, color: "from-pink-400 to-pink-500" },
  { id: "drafts", title: "Draft ✏️", icon: Edit, color: "from-rose-400 to-pink-500" },
  { id: "review", title: "Review 👀", icon: Eye, color: "from-pink-500 to-rose-500" },
  { id: "scheduled", title: "Scheduled 📅", icon: Calendar, color: "from-rose-500 to-pink-600" },
  { id: "published", title: "Published ✨", icon: CheckCircle, color: "from-pink-600 to-rose-600" }
]

const contentItems = [
  {
    id: 1,
    title: "10 AI Tools Every Creator Needs 💕",
    description: "Comprehensive guide to essential AI tools",
    status: "ideas",
    priority: "high",
    platform: "YouTube",
    assignee: "You",
    dueDate: "2024-01-15",
    tags: ["AI", "Tools", "Guide"],
    aiScore: 92
  },
  {
    id: 2,
    title: "Behind the Scenes: My Setup ✨",
    description: "Tour of my content creation workspace",
    status: "drafts",
    priority: "medium",
    platform: "Instagram",
    assignee: "You",
    dueDate: "2024-01-12",
    tags: ["BTS", "Personal"],
    aiScore: 78
  },
  {
    id: 3,
    title: "Quick Design Tips 🎨",
    description: "5-minute design tips for non-designers",
    status: "review",
    priority: "high",
    platform: "TikTok",
    assignee: "You",
    dueDate: "2024-01-10",
    tags: ["Design", "Tips"],
    aiScore: 85
  },
  {
    id: 4,
    title: "Content Creator Mistakes 🚫",
    description: "Common mistakes and how to avoid them",
    status: "scheduled",
    priority: "high",
    platform: "LinkedIn",
    assignee: "You",
    dueDate: "2024-01-08",
    tags: ["Education", "Tips"],
    aiScore: 89
  },
  {
    id: 5,
    title: "Year in Review 🎉",
    description: "Reflecting on the creator journey",
    status: "published",
    priority: "medium",
    platform: "Blog",
    assignee: "You",
    dueDate: "2024-01-05",
    tags: ["Personal", "Reflection"],
    aiScore: 94
  }
]

export default function PipelinePage() {
  const [content, setContent] = useState(initialContent)
  const [draggedItem, setDraggedItem] = useState<any>(null)

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-100 text-red-600 border-red-200"
      case "medium": return "bg-yellow-100 text-yellow-600 border-yellow-200"
      case "low": return "bg-green-100 text-green-600 border-green-200"
      default: return "bg-gray-100 text-gray-600 border-gray-200"
    }
  }

  const getPlatformEmoji = (platform: string) => {
    switch (platform) {
      case "YouTube": return "📺"
      case "Instagram": return "📸"
      case "TikTok": return "🎵"
      case "Twitter": return "🐦"
      case "LinkedIn": return "💼"
      default: return "📱"
    }
  }

  const getAIScoreColor = (score: number) => {
    if (score >= 85) return "text-nx-accent-lime"
    if (score >= 75) return "text-nx-accent-coral"
    return "text-nx-accent-mint"
  }

  const getItemsByStatus = (status: string) => {
    return contentItems.filter(item => item.status === status)
  }

  const handleDragStart = (e: React.DragEvent, item: any, fromColumn: string) => {
    setDraggedItem({ ...item, fromColumn })
  }

  const handleDrop = (e: React.DragEvent, toColumn: string) => {
    e.preventDefault()
    if (!draggedItem || draggedItem.fromColumn === toColumn) return

    // Remove from source column
    const newContent = { ...content }
    newContent[draggedItem.fromColumn as keyof typeof content] = content[draggedItem.fromColumn as keyof typeof content].filter(
      (item: any) => item.id !== draggedItem.id
    )

    // Add to target column
    const itemToMove = { ...draggedItem }
    delete itemToMove.fromColumn
    
    // Add specific properties based on target column
    if (toColumn === "scheduled") {
      itemToMove.scheduledDate = "TBD"
      itemToMove.scheduledTime = "TBD"
    } else if (toColumn === "published") {
      itemToMove.publishDate = new Date().toLocaleDateString()
      itemToMove.views = "0"
      itemToMove.engagement = "0%"
    }

    newContent[toColumn as keyof typeof content].push(itemToMove)
    setContent(newContent)
    setDraggedItem(null)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-display font-bold bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent mb-2">
            Content Pipeline 💕
          </h1>
          <p className="text-gray-600 text-lg">
            Watch your ideas flow from spark to success! ✨
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {columns.map((column) => {
            const items = getItemsByStatus(column.id)
            const Icon = column.icon
            return (
              <div key={column.id} className="bg-white rounded-xl p-4 border border-pink-100 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-8 h-8 bg-gradient-to-r ${column.color} rounded-lg flex items-center justify-center`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-2xl font-bold text-gray-800">{items.length}</span>
                </div>
                <div className="text-sm text-gray-600">{column.title}</div>
              </div>
            )
          })}
        </div>

        {/* Kanban Board */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">
          {columns.map((column) => {
            const items = getItemsByStatus(column.id)
            const Icon = column.icon
            
            return (
              <div key={column.id} className="bg-white rounded-2xl p-4 border border-pink-100 shadow-lg">
                {/* Column Header */}
                <div className="flex items-center mb-4 pb-4 border-b border-pink-100">
                  <div className={`w-8 h-8 bg-gradient-to-r ${column.color} rounded-lg flex items-center justify-center mr-3`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800">{column.title}</h3>
                  <span className="ml-auto bg-pink-100 text-pink-600 px-2 py-1 rounded-full text-xs font-medium">
                    {items.length}
                  </span>
                </div>

                {/* Column Items */}
                <div className="space-y-3 min-h-[400px]">
                  {items.map((item) => (
                    <div key={item.id} className="group bg-pink-50 border border-pink-100 rounded-xl p-4 hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer">
                      {/* Item Header */}
                      <div className="flex items-center justify-between mb-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(item.priority)}`}>
                          {item.priority === "high" && "🔥"} {item.priority}
                        </span>
                        <div className="flex items-center text-xs text-pink-600">
                          <Star className="w-3 h-3 mr-1" />
                          {item.aiScore}
                        </div>
                      </div>

                      {/* Item Content */}
                      <h4 className="font-medium text-gray-800 mb-2 group-hover:text-pink-600 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {item.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {item.tags?.map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-2 py-1 bg-white text-pink-600 rounded-md text-xs font-medium border border-pink-200">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Item Footer */}
                      <div className="flex items-center justify-between pt-3 border-t border-pink-200">
                        <span className="text-xs text-gray-500">{item.platform}</span>
                        <span className="text-xs text-gray-500">{item.dueDate}</span>
                      </div>
                    </div>
                  ))}

                  {/* Add New Item */}
                  <button className="w-full p-4 border-2 border-dashed border-pink-200 rounded-xl text-pink-500 hover:border-pink-300 hover:bg-pink-50 transition-all duration-300 flex items-center justify-center">
                    <Heart className="w-4 h-4 mr-2" />
                    Add New Item
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* AI Assistant Sidebar */}
        <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-6 border border-pink-100">
          <div className="flex items-center mb-4">
            <Sparkles className="w-6 h-6 text-pink-500 mr-2" />
            <h2 className="text-xl font-semibold text-gray-800">AI Content Assistant</h2>
            <Heart className="w-5 h-5 text-pink-400 ml-2" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 border border-pink-100">
              <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                📊 Pipeline Health
              </h3>
              <p className="text-sm text-gray-600 mb-2">Your content flow is looking great! 💕</p>
              <div className="text-xs text-green-600 font-medium">✅ Balanced workflow</div>
            </div>

            <div className="bg-white rounded-xl p-4 border border-pink-100">
              <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                🎯 Next Best Action
              </h3>
              <p className="text-sm text-gray-600 mb-2">Focus on your high-priority TikTok content ✨</p>
              <div className="text-xs text-blue-600 font-medium">🎬 Review "Quick Design Tips"</div>
            </div>

            <div className="bg-white rounded-xl p-4 border border-pink-100">
              <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                💡 Content Ideas
              </h3>
              <p className="text-sm text-gray-600 mb-2">Based on your audience, try: 🌟</p>
              <div className="text-xs text-purple-600 font-medium">📱 "Apps I Can't Live Without"</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}