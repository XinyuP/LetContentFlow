# LetContentFlow - AI-Powered Content Pipeline Platform

> Transform your content chaos into a strategic pipeline. NebulaQueue helps creators and startups coordinate ideation, optimize timing, and amplify their reach across all platforms.

![NebulaQueue Dashboard](https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/7ea9ad1f-9418-4b6d-92e5-adb274aa7c01/stock_images/modern-content-creator-workspace-desk-co-60164fed-20250524220427.jpg)

## ✨ Features

### 🎯 Core Functionality
- **AI-Powered Recommendations** - Suggests optimal timing, platforms, and content formats
- **Content Pipeline Management** - Visual Kanban board from idea to publication
- **Smart Scheduling** - Calendar integration with automated posting recommendations
- **Performance Analytics** - Track engagement metrics and content performance
- **Idea Vault** - Capture and organize content ideas with AI clustering
- **Cross-Platform Support** - Manage content across Twitter, LinkedIn, Instagram, TikTok, and more

### 🎨 Design System
- **Pastel-Infused Minimalism** - Clean, modern interface with soft gradients
- **Custom Color Palette** - Carefully crafted brand colors (pink, coral, mint, lime)
- **Responsive Design** - Mobile-first approach with fluid grid system
- **Micro-Interactions** - Smooth animations and hover effects
- **Accessibility First** - WCAG AA compliant with proper contrast ratios

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom design tokens
- **UI Components**: Shadcn/UI
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Responsive**: Mobile-first design

## 📁 Project Structure

src/
├── app/                    # Next.js App Router pages
│   ├── dashboard/         # Main dashboard page
│   ├── pipeline/          # Content pipeline Kanban
│   ├── ideas/             # Idea vault and management
│   ├── scheduler/         # Calendar and scheduling
│   ├── analytics/         # Performance analytics
│   ├── layout.tsx         # Root layout with navigation
│   └── page.tsx           # Landing page
├── components/
│   ├── ui/                # Shadcn/UI components
│   ├── navigation.tsx     # Main navigation component
│   └── footer.tsx         # Site footer
└── lib/
    └── utils.ts           # Utility functions
## 🎯 Pages Overview

### 🏠 Landing Page (`/`)
- Hero section with value proposition
- Problem statement and solution overview
- Feature highlights with interactive cards
- Call-to-action sections

### 📊 Dashboard (`/dashboard`)
- KPI tiles with engagement metrics
- Today's schedule with posting timeline
- Quick composer for new content ideas
- Activity stream with recent posts

### 🔄 Pipeline (`/pipeline`)
- Kanban board with drag-and-drop functionality
- Content stages: Idea → Draft → Review → Scheduled → Published
- AI assistant sidekick for suggestions
- Progress tracking and status updates

### 💡 Ideas (`/ideas`)
- Grid view of captured ideas with tagging
- Search and filter functionality
- AI clustering of related concepts
- Quick idea capture modal

### 📅 Scheduler (`/scheduler`)
- Calendar interface with month/week views
- Platform-specific scheduling rows
- Optimal timing recommendations
- Batch scheduling capabilities

### 📈 Analytics (`/analytics`)
- Performance metrics dashboard
- Engagement trend analysis
- Platform comparison charts
- Content performance insights

## 🎨 Design System

### Color Palette
--nx-bg: #F8F9F9           /* Canvas background */
--nx-surface: #FFFFFF       /* Card surfaces */
--nx-ink: #231216          /* Primary text */
--nx-accent-pink: #BB3C73   /* CTAs, active states */
--nx-accent-coral: #EF725F  /* Success, publish */
--nx-accent-mint: #6EE0D6   /* Links, highlights */
--nx-accent-lime: #A4E764   /* Progress, growth */
### Typography
- **Display**: Outfit (600-800 weight)
- **Body**: Inter (400-500 weight)
- **Mono**: IBM Plex Mono (400 weight)

### Components
- **Buttons**: Primary, secondary, ghost variants with hover effects
- **Cards**: Elevated surfaces with subtle shadows and hover animations
- **Tags**: Pill-shaped badges with color variants
- **Forms**: Clean inputs with focus states

## 🛠️ Setup Instructions

1. **Clone the repository**
      git clone <repository-url>
   cd nebulaqueue
   2. **Install dependencies**
   npm install
   3. **Run development server**
   npm run dev
   4. **Open in browser**
   Navigate to `http://localhost:3000`

## 📱 Responsive Breakpoints

- **Mobile**: `640px` and below
- **Tablet**: `768px` - `1023px`
- **Desktop**: `1024px` and above
- **Large**: `1280px` and above

## 🎯 Key Features Implementation

### AI-Powered Suggestions
- Content type recommendations based on performance data
- Optimal posting time analysis
- Platform-specific content optimization
- Engagement prediction algorithms

### Content Pipeline
- Visual workflow management
- Drag-and-drop interface
- Status tracking and updates
- Collaboration features

### Smart Scheduling
- Calendar integration
- Automated posting recommendations
- Batch scheduling capabilities
- Time zone optimization

### Analytics Dashboard
- Real-time performance metrics
- Trend analysis and insights
- Cross-platform comparison
- ROI tracking

## 🚀 Future Enhancements

- [ ] Real AI integration (OpenAI, Claude)
- [ ] Social media platform APIs
- [ ] Team collaboration features
- [ ] Advanced analytics and reporting
- [ ] Mobile app development
- [ ] Webhook integrations
- [ ] Content templates library
- [ ] A/B testing capabilities

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern SaaS platforms
- Shadcn/UI for beautiful, accessible components
- Tailwind CSS for rapid styling
- Next.js team for the amazing framework

---

**Built with ❤️ for content creators everywhere**
