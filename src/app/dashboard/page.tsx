"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Heart, Calendar, TrendingUp, Users, Sparkles, Star, ArrowUp, ArrowDown
} from "lucide-react";
import { useState } from "react";

export default function Dashboard() {
  const [newIdea, setNewIdea] = useState("");
  const [aiPrompt, setAiPrompt] = useState("");

  const kpiData = [
    {
      title: "Content Published",
      value: "24",
      change: "+12%",
      trend: "up",
      icon: Heart,
      color: "from-pink-400 to-pink-500"
    },
    {
      title: "Total Engagement",
      value: "12.5K",
      change: "+18%",
      trend: "up", 
      icon: Star,
      color: "from-rose-400 to-pink-500"
    },
    {
      title: "New Followers",
      value: "1,234",
      change: "+8%",
      trend: "up",
      icon: Users,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "AI Ideas Generated",
      value: "47",
      change: "+25%",
      trend: "up",
      icon: Sparkles,
      color: "from-rose-400 to-pink-400"
    }
  ];

  const todaySchedule = [
    {
      time: "9:00 AM",
      platform: "Instagram",
      content: "Morning motivation quote ✨",
      status: "scheduled",
      engagement: "High"
    },
    {
      time: "12:00 PM", 
      platform: "TikTok",
      content: "Quick productivity tip 💕",
      status: "posted",
      engagement: "Medium"
    },
    {
      time: "3:00 PM",
      platform: "YouTube",
      content: "Behind the scenes vlog 🎬",
      status: "scheduled",
      engagement: "High"
    },
    {
      time: "6:00 PM",
      platform: "Twitter",
      content: "Industry insights thread 🧵",
      status: "draft",
      engagement: "Medium"
    }
  ];

  const recentActivity = [
    {
      type: "published",
      content: "10 AI Tools Every Creator Needs",
      platform: "YouTube",
      engagement: "2.3K views",
      time: "2 hours ago",
      emoji: "🚀"
    },
    {
      type: "scheduled",
      content: "Behind the Scenes: My Setup",
      platform: "Instagram",
      engagement: "Est. 800 likes",
      time: "4 hours ago",
      emoji: "📅"
    },
    {
      type: "idea",
      content: "Collaborative Content Ideas",
      platform: "Multiple",
      engagement: "AI Score: 89",
      time: "6 hours ago",
      emoji: "💡"
    },
    {
      type: "published",
      content: "Quick Design Tips",
      platform: "TikTok",
      engagement: "5.2K views",
      time: "1 day ago",
      emoji: "🎨"
    }
  ];

  const handleSparkIdea = () => {
    // Simulate AI suggestion
    console.log("Sparking AI suggestions for:", newIdea, aiPrompt);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-display font-bold bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent mb-2">
            Welcome Back, Creator! 💕
          </h1>
          <p className="text-gray-600 text-lg">
            Your content is flowing beautifully! Here's what's happening today ✨
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpiData.map((kpi, index) => {
            const Icon = kpi.icon
            return (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${kpi.color} rounded-xl flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`flex items-center text-sm font-medium ${
                    kpi.trend === "up" ? "text-green-500" : "text-red-500"
                  }`}>
                    {kpi.trend === "up" ? <ArrowUp className="w-4 h-4 mr-1" /> : <ArrowDown className="w-4 h-4 mr-1" />}
                    {kpi.change}
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-800 mb-1">{kpi.value}</div>
                <div className="text-sm text-gray-600">{kpi.title}</div>
              </div>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Today's Schedule */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-pink-100">
              <div className="flex items-center mb-6">
                <Calendar className="w-6 h-6 text-pink-500 mr-2" />
                <h2 className="text-xl font-semibold text-gray-800">Today's Content Flow</h2>
                <Sparkles className="w-5 h-5 text-pink-400 ml-2" />
              </div>
              <div className="space-y-4">
                {todaySchedule.map((item, index) => (
                  <div key={index} className="flex items-center p-4 bg-pink-50 rounded-xl border border-pink-100 hover:bg-pink-100 transition-colors">
                    <div className="text-sm font-medium text-gray-600 w-20">{item.time}</div>
                    <div className="flex-1 mx-4">
                      <div className="font-medium text-gray-800">{item.content}</div>
                      <div className="text-sm text-gray-600">{item.platform}</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.status === "posted" ? "bg-green-100 text-green-600" :
                        item.status === "scheduled" ? "bg-blue-100 text-blue-600" :
                        "bg-yellow-100 text-yellow-600"
                      }`}>
                        {item.status}
                      </span>
                      <span className={`text-xs font-medium ${
                        item.engagement === "High" ? "text-green-500" : "text-yellow-500"
                      }`}>
                        {item.engagement}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-pink-100 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Heart className="w-5 h-5 text-pink-500 mr-2" />
                Quick Actions
              </h3>
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 hover:scale-105">
                  ✨ Create New Content
                </button>
                <button className="w-full bg-pink-100 text-pink-600 py-3 rounded-xl font-medium hover:bg-pink-200 transition-colors">
                  💡 Capture Idea
                </button>
                <button className="w-full bg-pink-100 text-pink-600 py-3 rounded-xl font-medium hover:bg-pink-200 transition-colors">
                  📅 Schedule Post
                </button>
                <button className="w-full bg-pink-100 text-pink-600 py-3 rounded-xl font-medium hover:bg-pink-200 transition-colors">
                  📊 View Analytics
                </button>
              </div>
            </div>

            {/* AI Insights */}
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-6 border border-pink-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Sparkles className="w-5 h-5 text-pink-500 mr-2" />
                AI Insights
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-white rounded-lg border border-pink-100">
                  <div className="text-sm font-medium text-gray-800">💕 Engagement Boost</div>
                  <div className="text-xs text-gray-600">Posts with emojis get 25% more engagement</div>
                </div>
                <div className="p-3 bg-white rounded-lg border border-pink-100">
                  <div className="text-sm font-medium text-gray-800">⏰ Best Time</div>
                  <div className="text-xs text-gray-600">Your audience is most active at 7 PM</div>
                </div>
                <div className="p-3 bg-white rounded-lg border border-pink-100">
                  <div className="text-sm font-medium text-gray-800">🎯 Content Gap</div>
                  <div className="text-xs text-gray-600">Consider more behind-the-scenes content</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-pink-100">
            <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
              <TrendingUp className="w-6 h-6 text-pink-500 mr-2" />
              Recent Activity
              <Heart className="w-5 h-5 text-pink-400 ml-2" />
            </h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center p-4 hover:bg-pink-50 rounded-xl transition-colors border border-pink-50">
                  <div className="text-2xl mr-4">{activity.emoji}</div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-800">{activity.content}</div>
                    <div className="text-sm text-gray-600">{activity.platform} • {activity.engagement}</div>
                  </div>
                  <div className="text-sm text-gray-500">{activity.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
