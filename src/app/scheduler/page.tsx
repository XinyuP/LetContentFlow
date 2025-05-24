"use client";

import React, { useState, useRef, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ChevronLeft, ChevronRight, Plus, Clock, TrendingUp, Zap, Star } from 'lucide-react';

const platforms = [
  { 
    id: 'tiktok', 
    name: 'TikTok', 
    color: 'bg-pink-500', 
    optimalTime: '7:00 PM - 9:00 PM',
    engagement: '+23%',
    icon: '🎵'
  },
  { 
    id: 'youtube', 
    name: 'YouTube', 
    color: 'bg-red-500', 
    optimalTime: '2:00 PM - 4:00 PM',
    engagement: '+18%',
    icon: '📺'
  },
  { 
    id: 'instagram', 
    name: 'Instagram', 
    color: 'bg-gradient-to-br from-purple-500 to-pink-500', 
    optimalTime: '11:00 AM - 1:00 PM',
    engagement: '+31%',
    icon: '📸'
  },
  { 
    id: 'twitter', 
    name: 'Twitter', 
    color: 'bg-blue-500', 
    optimalTime: '9:00 AM - 10:00 AM',
    engagement: '+15%',
    icon: '🐦'
  }
];

const scheduledContent = {
  tiktok: [
    { id: 1, title: 'Dance Challenge Tutorial', time: '19:30', date: '2024-01-15', status: 'scheduled' },
    { id: 2, title: 'Behind the Scenes Vlog', time: '20:00', date: '2024-01-16', status: 'draft' },
    { id: 3, title: 'Product Review', time: '19:45', date: '2024-01-18', status: 'scheduled' }
  ],
  youtube: [
    { id: 4, title: 'Weekly Tech Review', time: '14:30', date: '2024-01-15', status: 'scheduled' },
    { id: 5, title: 'Tutorial Series Ep 5', time: '15:00', date: '2024-01-17', status: 'draft' }
  ],
  instagram: [
    { id: 6, title: 'Morning Routine Reel', time: '11:30', date: '2024-01-15', status: 'scheduled' },
    { id: 7, title: 'Outfit of the Day', time: '12:00', date: '2024-01-16', status: 'scheduled' },
    { id: 8, title: 'Food Photography', time: '11:45', date: '2024-01-19', status: 'draft' }
  ],
  twitter: [
    { id: 9, title: 'Industry Insights Thread', time: '09:15', date: '2024-01-15', status: 'scheduled' },
    { id: 10, title: 'Quick Tips Post', time: '09:30', date: '2024-01-17', status: 'draft' }
  ]
};

const CalendarHero = ({ selectedRange, onRangeSelect }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [dragStart, setDragStart] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const firstDayOfWeek = firstDay.getDay();
    const daysInMonth = lastDay.getDate();
    
    const days = [];
    
    for (let i = 0; i < firstDayOfWeek; i++) {
      const prevDate = new Date(year, month, -firstDayOfWeek + i + 1);
      days.push({ date: prevDate, isCurrentMonth: false });
    }
    
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ date: new Date(year, month, i), isCurrentMonth: true });
    }
    
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({ date: new Date(year, month + 1, i), isCurrentMonth: false });
    }
    
    return days;
  };

  const handleMouseDown = (date) => {
    if (!date.isCurrentMonth) return;
    setDragStart(date.date);
    setIsDragging(true);
  };

  const handleMouseEnter = (date) => {
    if (!isDragging || !dragStart || !date.isCurrentMonth) return;
    
    const start = new Date(Math.min(dragStart, date.date));
    const end = new Date(Math.max(dragStart, date.date));
    onRangeSelect({ start, end });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDragStart(null);
  };

  const isInRange = (date) => {
    if (!selectedRange || !selectedRange.start || !selectedRange.end) return false;
    return date >= selectedRange.start && date <= selectedRange.end;
  };

  const isRangeStart = (date) => {
    if (!selectedRange || !selectedRange.start) return false;
    return date.toDateString() === selectedRange.start.toDateString();
  };

  const isRangeEnd = (date) => {
    if (!selectedRange || !selectedRange.end) return false;
    return date.toDateString() === selectedRange.end.toDateString();
  };

  const days = getDaysInMonth(currentDate);
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-orange-50 rounded-2xl p-6 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Content Calendar</h2>
          <p className="text-gray-600">Schedule ✦ Optimize ✦ Track</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}
            className="hover:bg-white/60 backdrop-blur-sm"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <h3 className="text-xl font-semibold text-gray-800 min-w-[200px] text-center">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h3>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}
            className="hover:bg-white/60 backdrop-blur-sm"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-4">
        {dayNames.map(day => (
          <div key={day} className="text-center text-sm font-medium text-gray-600 py-2">
            {day}
          </div>
        ))}
      </div>

      <div 
        className="grid grid-cols-7 gap-2"
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {days.map((day, index) => {
          const isInRangeDay = isInRange(day.date);
          const isStart = isRangeStart(day.date);
          const isEnd = isRangeEnd(day.date);
          
          return (
            <div
              key={index}
              className={`
                relative aspect-square rounded-lg border-2 border-transparent cursor-pointer
                transition-all duration-200 ease-out
                ${day.isCurrentMonth 
                  ? 'bg-white/60 backdrop-blur-sm hover:bg-white/80 hover:scale-105' 
                  : 'bg-gray-100/30 text-gray-400'
                }
                ${isInRangeDay ? 'bg-green-100/60 border-green-200' : ''}
                ${isStart || isEnd ? 'bg-green-200/80 border-green-300' : ''}
                ${isDragging && day.isCurrentMonth ? 'hover:bg-green-100/60' : ''}
              `}
              onMouseDown={() => handleMouseDown(day)}
              onMouseEnter={() => handleMouseEnter(day)}
            >
              <div className="flex items-center justify-center h-full">
                <span className={`text-sm font-medium ${day.isCurrentMonth ? 'text-gray-800' : 'text-gray-400'}`}>
                  {day.date.getDate()}
                </span>
              </div>
              
              {day.isCurrentMonth && (
                <div className="absolute bottom-1 left-1 right-1 flex justify-center space-x-1">
                  {/* Content indicators */}
                  {Object.keys(scheduledContent).map(platform => {
                    const hasContent = scheduledContent[platform].some(item => {
                      const itemDate = new Date(item.date);
                      return itemDate.toDateString() === day.date.toDateString();
                    });
                    
                    if (hasContent) {
                      const platformData = platforms.find(p => p.id === platform);
                      return (
                        <div
                          key={platform}
                          className={`w-1.5 h-1.5 rounded-full ${platformData.color}`}
                        />
                      );
                    }
                    return null;
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {selectedRange && selectedRange.start && selectedRange.end && (
        <div className="mt-6 p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-green-200">
          <p className="text-sm text-gray-600">
            Selected range: {selectedRange.start.toLocaleDateString()} - {selectedRange.end.toLocaleDateString()}
          </p>
        </div>
      )}
    </div>
  );
};

const PlatformTimeline = ({ platform, content, onScheduleContent }) => {
  const scrollRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [newContent, setNewContent] = useState({ title: '', time: '', date: '' });

  const timeSlots = Array.from({ length: 24 }, (_, i) => {
    const hour = i.toString().padStart(2, '0');
    return `${hour}:00`;
  });

  const handleSchedule = () => {
    if (newContent.title && newContent.time && newContent.date) {
      onScheduleContent(platform.id, {
        ...newContent,
        id: Date.now(),
        status: 'scheduled'
      });
      setNewContent({ title: '', time: '', date: '' });
      setIsOpen(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className={`w-3 h-3 rounded-full ${platform.color}`} />
          <span className="text-lg font-semibold text-gray-800">{platform.icon} {platform.name}</span>
          <Badge variant="secondary" className="bg-green-100 text-green-700">
            <TrendingUp className="h-3 w-3 mr-1" />
            {platform.engagement}
          </Badge>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="text-right">
            <p className="text-xs text-gray-500">Optimal time</p>
            <p className="text-sm font-medium text-gray-700 flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              {platform.optimalTime}
            </p>
          </div>
          
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button size="sm" className="bg-coral-500 hover:bg-coral-600 text-white">
                <Plus className="h-4 w-4 mr-1" />
                Schedule
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Schedule {platform.name} Content</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <div>
                  <Label htmlFor="title">Content Title</Label>
                  <Input
                    id="title"
                    value={newContent.title}
                    onChange={(e) => setNewContent({ ...newContent, title: e.target.value })}
                    placeholder="Enter content title..."
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="time">Time</Label>
                    <Select value={newContent.time} onValueChange={(value) => setNewContent({ ...newContent, time: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map(time => (
                          <SelectItem key={time} value={time}>{time}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="date">Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={newContent.date}
                      onChange={(e) => setNewContent({ ...newContent, date: e.target.value })}
                    />
                  </div>
                </div>
                
                <Button onClick={handleSchedule} className="w-full">
                  Schedule Content
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="relative">
        <div 
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {timeSlots.map(time => {
            const contentAtTime = content.filter(item => item.time.startsWith(time.split(':')[0]));
            const isOptimalTime = platform.optimalTime.includes(time.split(':')[0]);
            
            return (
              <div key={time} className="flex-shrink-0 w-32">
                <div className={`
                  p-3 rounded-lg border-2 min-h-[120px] transition-all duration-200
                  ${isOptimalTime 
                    ? 'border-green-300 bg-green-50/80 shadow-sm' 
                    : 'border-gray-200 bg-white/60'
                  }
                `}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{time}</span>
                    {isOptimalTime && (
                      <Star className="h-3 w-3 text-green-500" />
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    {contentAtTime.map(item => (
                      <div
                        key={item.id}
                        className={`
                          p-2 rounded-md text-xs transition-transform duration-200 hover:scale-105
                          ${item.status === 'scheduled' 
                            ? 'bg-blue-100 border border-blue-200' 
                            : 'bg-yellow-100 border border-yellow-200'
                          }
                        `}
                      >
                        <p className="font-medium text-gray-800 truncate">{item.title}</p>
                        <p className="text-gray-600">{item.time}</p>
                        <Badge 
                          size="sm" 
                          className={item.status === 'scheduled' ? 'bg-blue-500' : 'bg-yellow-500'}
                        >
                          {item.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

const OptimalTimingSuggestions = () => {
  const suggestions = [
    { platform: 'TikTok', time: '7:00 PM', reason: 'Peak Gen Z engagement', boost: '+23%' },
    { platform: 'YouTube', time: '2:00 PM', reason: 'Lunch break viewing', boost: '+18%' },
    { platform: 'Instagram', time: '11:00 AM', reason: 'Morning scroll time', boost: '+31%' },
    { platform: 'Twitter', time: '9:00 AM', reason: 'News consumption peak', boost: '+15%' }
  ];

  return (
    <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center text-lg">
          <Zap className="h-5 w-5 mr-2 text-yellow-500" />
          AI Timing Insights
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-white/60 backdrop-blur-sm rounded-lg transition-transform duration-200 hover:scale-105"
            >
              <div className="flex items-center space-x-3">
                <div className={`w-2 h-2 rounded-full ${platforms.find(p => p.name === suggestion.platform)?.color}`} />
                <div>
                  <p className="font-medium text-gray-800">{suggestion.platform}</p>
                  <p className="text-xs text-gray-600">{suggestion.reason}</p>
                </div>
              </div>
              
              <div className="text-right">
                <p className="font-semibold text-gray-800">{suggestion.time}</p>
                <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
                  {suggestion.boost}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default function SchedulerPage() {
  const [selectedRange, setSelectedRange] = useState(null);
  const [content, setContent] = useState(scheduledContent);

  const handleRangeSelect = (range) => {
    setSelectedRange(range);
  };

  const handleScheduleContent = (platformId, newContentItem) => {
    setContent(prev => ({
      ...prev,
      [platformId]: [...prev[platformId], newContentItem]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50/50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Content Scheduler</h1>
          <p className="text-lg text-gray-600">Plan, schedule, and optimize your content across all platforms</p>
        </div>

        {/* Calendar Hero */}
        <CalendarHero 
          selectedRange={selectedRange}
          onRangeSelect={handleRangeSelect}
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Platform Timelines */}
          <div className="lg:col-span-3 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Platform Schedules</h2>
              <div className="space-y-6">
                {platforms.map(platform => (
                  <Card key={platform.id} className="bg-white/80 backdrop-blur-sm border-0 shadow-sm">
                    <CardContent className="p-6">
                      <PlatformTimeline
                        platform={platform}
                        content={content[platform.id] || []}
                        onScheduleContent={handleScheduleContent}
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <OptimalTimingSuggestions />
            
            <Card className="bg-gradient-to-br from-orange-50 to-pink-50 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">This Week</span>
                    <span className="font-semibold">12 posts</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Next Week</span>
                    <span className="font-semibold">8 posts</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Draft Items</span>
                    <span className="font-semibold text-yellow-600">6 pending</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}