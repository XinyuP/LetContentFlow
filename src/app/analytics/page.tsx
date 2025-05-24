"use client"

import { Card } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts'

const engagementData = [
  { name: 'Mon', engagement: 45, reach: 1200 },
  { name: 'Tue', engagement: 52, reach: 1400 },
  { name: 'Wed', engagement: 38, reach: 1100 },
  { name: 'Thu', engagement: 67, reach: 1800 },
  { name: 'Fri', engagement: 71, reach: 2100 },
  { name: 'Sat', engagement: 59, reach: 1600 },
  { name: 'Sun', engagement: 44, reach: 1300 },
]

const platformData = [
  { name: 'Instagram', value: 35, color: '#BB3C73' },
  { name: 'Twitter', value: 28, color: '#EF725F' },
  { name: 'TikTok', value: 22, color: '#6EE0D6' },
  { name: 'YouTube', value: 15, color: '#A4E764' },
]

const contentData = [
  { type: 'Video', performance: 85 },
  { type: 'Carousel', performance: 72 },
  { type: 'Single Image', performance: 64 },
  { type: 'Story', performance: 58 },
]

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-nx-bg">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-display font-bold text-nx-ink mb-2">
            Analytics Dashboard
          </h1>
          <p className="text-nx-neutral-400">
            Deep insights into your content performance and audience engagement
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-nx-neutral-400">Total Reach</p>
                <p className="text-2xl font-bold text-nx-ink">24.7K</p>
              </div>
              <div className="w-12 h-12 bg-nx-accent-pink/10 rounded-lg flex items-center justify-center">
                <span className="text-nx-accent-pink">📊</span>
              </div>
            </div>
            <div className="mt-4">
              <span className="text-xs text-nx-accent-coral">↗ +12.5%</span>
              <span className="text-xs text-nx-neutral-400 ml-2">vs last week</span>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-nx-neutral-400">Engagement Rate</p>
                <p className="text-2xl font-bold text-nx-ink">8.4%</p>
              </div>
              <div className="w-12 h-12 bg-nx-accent-coral/10 rounded-lg flex items-center justify-center">
                <span className="text-nx-accent-coral">❤️</span>
              </div>
            </div>
            <div className="mt-4">
              <span className="text-xs text-nx-accent-coral">↗ +3.2%</span>
              <span className="text-xs text-nx-neutral-400 ml-2">vs last week</span>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-nx-neutral-400">Content Score</p>
                <p className="text-2xl font-bold text-nx-ink">92</p>
              </div>
              <div className="w-12 h-12 bg-nx-accent-mint/10 rounded-lg flex items-center justify-center">
                <span className="text-nx-accent-mint">⭐</span>
              </div>
            </div>
            <div className="mt-4">
              <span className="text-xs text-nx-accent-coral">↗ +5 points</span>
              <span className="text-xs text-nx-neutral-400 ml-2">this month</span>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-nx-neutral-400">Growth Rate</p>
                <p className="text-2xl font-bold text-nx-ink">15.7%</p>
              </div>
              <div className="w-12 h-12 bg-nx-accent-lime/10 rounded-lg flex items-center justify-center">
                <span className="text-nx-accent-lime">📈</span>
              </div>
            </div>
            <div className="mt-4">
              <span className="text-xs text-nx-accent-coral">↗ +2.1%</span>
              <span className="text-xs text-nx-neutral-400 ml-2">vs last month</span>
            </div>
          </Card>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Engagement Chart */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-nx-ink mb-4">Weekly Engagement</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={engagementData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E4EDEC" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #E4EDEC',
                    borderRadius: '8px'
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="engagement" 
                  stroke="#BB3C73" 
                  strokeWidth={3}
                  dot={{ fill: '#BB3C73', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          {/* Platform Distribution */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-nx-ink mb-4">Platform Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={platformData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name} ${value}%`}
                >
                  {platformData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Content Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-nx-ink mb-4">Content Type Performance</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={contentData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E4EDEC" />
                <XAxis dataKey="type" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #E4EDEC',
                    borderRadius: '8px'
                  }} 
                />
                <Bar dataKey="performance" fill="#6EE0D6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          {/* AI Insights */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-nx-ink mb-4">AI Insights</h3>
            <div className="space-y-4">
              <div className="p-4 bg-nx-accent-mint/5 rounded-lg border-l-4 border-nx-accent-mint">
                <h4 className="font-semibold text-nx-ink mb-2">🎯 Optimal Posting Time</h4>
                <p className="text-sm text-nx-neutral-400">Your audience is most active on Thursdays at 2 PM</p>
              </div>
              <div className="p-4 bg-nx-accent-coral/5 rounded-lg border-l-4 border-nx-accent-coral">
                <h4 className="font-semibold text-nx-ink mb-2">📈 Trending Content</h4>
                <p className="text-sm text-nx-neutral-400">Video content performs 40% better than static posts</p>
              </div>
              <div className="p-4 bg-nx-accent-lime/5 rounded-lg border-l-4 border-nx-accent-lime">
                <h4 className="font-semibold text-nx-ink mb-2">💡 Content Suggestion</h4>
                <p className="text-sm text-nx-neutral-400">Consider creating more carousel posts for higher engagement</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}