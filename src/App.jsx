import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  Search,
  CheckCircle2,
  Circle,
  ArrowRight,
  Sparkles,
  Compass,
  Award,
  Code,
  Play,
  Users,
  Target,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Send,
  ChevronDown,
  ChevronRight,
  Star,
  Layers,
  Zap,
  GraduationCap,
  Check,
  X,
  Filter,
  BarChart3,
  Lightbulb,
  ShieldCheck,
  Globe,
  Video,
  ArrowUpRight
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);
  
  // Demo Booking Form State
  const [demoStep, setDemoStep] = useState(1);
  const [demoFormData, setDemoFormData] = useState({
    name: '',
    email: '',
    phone: '',
    track: 'fullstack',
    date: '2026-10-25',
    time: '11:00 AM',
    role: 'Student'
  });
  const [demoSubmitted, setDemoSubmitted] = useState(false);

  // Courses Filter State
  const [courseCategory, setCourseCategory] = useState('all');
  const [courseSearch, setCourseSearch] = useState('');

  // Interactive Skill Tree Nodes (Home Page)
  const [skillNodes, setSkillNodes] = useState([
    { id: 1, title: 'Logic & Algorithm Fundamentals', status: 'completed', type: 'Core', duration: '12 hrs', level: 'Beginner' },
    { id: 2, title: 'Full Stack Web & Cloud Architectures', status: 'in-progress', type: 'Core', duration: '28 hrs', level: 'Intermediate' },
    { id: 3, title: 'AI & Machine Learning Engineering', status: 'locked', type: 'Advanced', duration: '35 hrs', level: 'Advanced' },
    { id: 4, title: 'Distributed Systems & Scalability', status: 'locked', type: 'Specialized', duration: '22 hrs', level: 'Expert' }
  ]);

  // Global Keyboard listener for Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Navigation Items
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'courses', label: 'Courses' },
    { id: 'about', label: 'About Us' },
    { id: 'demo', label: 'Demo Request' },
    { id: 'contact', label: 'Contact Us' },
  ];

  // Course Data
  const coursesList = [
    {
      id: 'fs-101',
      title: 'Full-Stack Modern Web Engineering',
      category: 'fullstack',
      level: 'Intermediate',
      rating: 4.9,
      students: 2450,
      duration: '16 Weeks',
      desc: 'Master React, Node.js, Next.js, and cloud deployments with real-time peer code reviews and microservice architectures.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
      imageBg: 'from-sky-500 to-blue-700'
    },
    {
      id: 'ds-201',
      title: 'Applied AI & ML Data Science Track',
      category: 'datascience',
      level: 'Advanced',
      rating: 4.8,
      students: 1890,
      duration: '20 Weeks',
      desc: 'Deep dive into Python, Neural Networks, PyTorch, and deploying LLM APIs with real industry datasets.',
      tags: ['Python', 'PyTorch', 'LLMs', 'Scikit-Learn'],
      imageBg: 'from-blue-600 to-indigo-800'
    },
    {
      id: 'sd-301',
      title: 'High-Scale System Design & Architecture',
      category: 'systemdesign',
      level: 'Expert',
      rating: 4.95,
      students: 1210,
      duration: '10 Weeks',
      desc: 'Learn caching, load balancing, databases sharding, and event-driven architecture used by top tech unicorns.',
      tags: ['Redis', 'Kafka', 'System Architecture', 'AWS'],
      imageBg: 'from-slate-800 to-sky-900'
    },
    {
      id: 'dev-401',
      title: 'Cloud Native DevOps & Kubernetes',
      category: 'fullstack',
      level: 'Intermediate',
      rating: 4.7,
      students: 980,
      duration: '12 Weeks',
      desc: 'Automate deployments with CI/CD pipelines, Terraform, Helm, and Kubernetes cluster orchestration.',
      tags: ['Kubernetes', 'CI/CD', 'Terraform', 'AWS'],
      imageBg: 'from-sky-600 to-slate-900'
    },
    {
      id: 'ai-501',
      title: 'Generative AI & Agentic Workflows',
      category: 'datascience',
      level: 'Advanced',
      rating: 4.9,
      students: 3100,
      duration: '8 Weeks',
      desc: 'Build autonomous AI agents using LangChain, AutoGen, vector databases, and enterprise API integrations.',
      tags: ['LangChain', 'OpenAI', 'Pinecone', 'Python'],
      imageBg: 'from-blue-500 to-sky-700'
    },
    {
      id: 'sec-601',
      title: 'Cybersecurity & Ethical Hacking Essentials',
      category: 'systemdesign',
      level: 'Beginner',
      rating: 4.85,
      students: 1420,
      duration: '14 Weeks',
      desc: 'Hands-on penetration testing, network security, zero-trust framework, and threat mitigation strategies.',
      tags: ['Network Security', 'PenTesting', 'Zero Trust'],
      imageBg: 'from-slate-700 to-blue-900'
    }
  ];

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(0);
  const faqs = [
    { q: 'How does EduX differ from traditional online learning portals?', a: 'EduX replaces passive recorded lectures with dynamic skill-tree roadmaps, real-time peer code workspaces, and automated feedback loops so you build true engineering muscle.' },
    { q: 'Can I request a customized demo for my university or company?', a: 'Yes! Navigate to our Demo Request page, choose your cohort track, and select a time slot. Our curriculum architects will tailor a live walkthrough for you.' },
    { q: 'Are there live mentor sessions included in the tracks?', a: 'Every track includes 2x weekly live interaction sessions with senior software engineers, system architects, and AI researchers.' },
    { q: 'Is there job assistance or portfolio support?', a: 'All capstone projects built on EduX generate verifiable public portfolios with integrated GitHub proof-of-work badges.' }
  ];

  const filteredCourses = coursesList.filter((course) => {
    const matchesCategory = courseCategory === 'all' || course.category === courseCategory;
    const matchesSearch = course.title.toLowerCase().includes(courseSearch.toLowerCase()) || 
                          course.desc.toLowerCase().includes(courseSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans antialiased flex flex-col selection:bg-sky-500 selection:text-white">
      
      {/* Top Banner Accent */}
      <div className="bg-slate-900 text-sky-200 text-xs py-2 px-4 text-center font-medium flex items-center justify-center space-x-2 border-b border-sky-950">
        <span className="inline-block w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
        <span>Admissions now open for Cohort 2026. Experience our Next-Gen Skill Pathway.</span>
        <button 
          onClick={() => setActiveTab('demo')} 
          className="text-white underline hover:text-sky-400 ml-2 font-semibold transition"
        >
          Book Free Live Demo →
        </button>
      </div>

      {/* Main Sticky Navbar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-sky-100 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          
          {/* Logo */}
          <div 
            onClick={() => setActiveTab('home')} 
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-xl bg-slate-900 flex items-center justify-center text-sky-400 font-black text-2xl shadow-md group-hover:scale-105 transition-transform">
              Edu<span className="text-sky-500">X</span>
            </div>
            <div>
              <span className="font-extrabold text-xl text-slate-900 tracking-tight block leading-tight">
                EduX<span className="text-sky-600">.io</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-sky-600 block">
                Next-Gen Pedagogy
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 bg-sky-50/70 p-1.5 rounded-2xl border border-sky-100">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-sky-100/60'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action Bar (Search + CTA) */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center space-x-2 bg-sky-50 hover:bg-sky-100 border border-sky-200 text-slate-700 px-3.5 py-2 rounded-xl transition text-xs font-medium"
              title="Global Search"
            >
              <Search className="w-4 h-4 text-sky-600" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden sm:inline-block bg-white border border-sky-200 text-[10px] px-1.5 py-0.5 rounded text-slate-400 font-mono shadow-2xs">
                ⌘K
              </kbd>
            </button>

            <button
              onClick={() => setActiveTab('demo')}
              className="hidden lg:flex items-center space-x-2 bg-sky-600 hover:bg-sky-500 text-white px-4 py-2 rounded-xl text-xs font-semibold transition shadow-md shadow-sky-500/20 active:scale-95"
            >
              <span>Request Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Row */}
        <div className="md:hidden flex items-center justify-around bg-white border-t border-sky-100 py-2 px-2 overflow-x-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition ${
                activeTab === item.id ? 'bg-slate-900 text-white font-semibold' : 'text-slate-600'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </header>

      {/* PAGE CONTENT CONTAINER */}
      <main className="flex-1">
        
        {/* ========================================================================= */}
        {/* 1. HOME PAGE VIEW                                                          */}
        {/* ========================================================================= */}
        {activeTab === 'home' && (
          <div className="space-y-16 pb-16">
            
            {/* HERO SECTION */}
            <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-[#F8FAFC] pt-12 lg:pt-20 pb-16 border-b border-sky-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Hero Left Intro */}
                  <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                    <div className="inline-flex items-center space-x-2 bg-sky-100/80 border border-sky-300/60 px-3.5 py-1.5 rounded-full text-sky-800 text-xs font-semibold shadow-2xs">
                      <Sparkles className="w-4 h-4 text-sky-600 animate-spin" />
                      <span>Reimagining Indian Higher Tech Education</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
                      Master Tech Skills Through <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-blue-700">Interactive Pathways</span>
                    </h1>

                    <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                      Ditch dry passive video courses. EduX provides a node-based interactive learning canvas, live micro-workspaces, and instant peer code benchmarks designed for India's top tech talent.
                    </p>

                    {/* CTA Group */}
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
                      <button
                        onClick={() => setActiveTab('courses')}
                        className="w-full sm:w-auto px-7 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-sm shadow-xl shadow-slate-900/10 flex items-center justify-center space-x-2 transition active:scale-98"
                      >
                        <span>Explore Skill Tracks</span>
                        <ArrowRight className="w-4 h-4 text-sky-400" />
                      </button>

                      <button
                        onClick={() => setActiveTab('demo')}
                        className="w-full sm:w-auto px-7 py-3.5 bg-sky-50 hover:bg-sky-100 text-slate-800 border border-sky-200 rounded-xl font-bold text-sm flex items-center justify-center space-x-2 transition"
                      >
                        <Video className="w-4 h-4 text-sky-600" />
                        <span>Book 1-on-1 Demo</span>
                      </button>
                    </div>

                    {/* Trust Proof Metrics */}
                    <div className="pt-6 border-t border-sky-100/80 grid grid-cols-3 gap-4 text-center lg:text-left">
                      <div>
                        <div className="text-2xl font-black text-slate-900">45,000+</div>
                        <div className="text-xs text-slate-500 font-medium">Active Learners</div>
                      </div>
                      <div>
                        <div className="text-2xl font-black text-sky-600">94.8%</div>
                        <div className="text-xs text-slate-500 font-medium">Completion Rate</div>
                      </div>
                      <div>
                        <div className="text-2xl font-black text-slate-900">120+</div>
                        <div className="text-xs text-slate-500 font-medium">Industry Mentors</div>
                      </div>
                    </div>
                  </div>

                  {/* Hero Right: Interactive Mini Workspace Card */}
                  <div className="lg:col-span-5 relative">
                    <div className="relative bg-slate-900 rounded-2xl p-6 shadow-2xl text-white border border-slate-800">
                      
                      {/* Window Controls Header */}
                      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-xs font-mono text-sky-400 bg-slate-800 px-2.5 py-1 rounded-md">
                          interactive_workspace.jsx
                        </span>
                      </div>

                      {/* Code Mock */}
                      <div className="mt-4 font-mono text-xs space-y-2 text-slate-300">
                        <p><span className="text-purple-400">import</span> &#123; LearningCanvas &#125; <span className="text-purple-400">from</span> <span className="text-sky-300">'@edux/core'</span>;</p>
                        <p className="text-slate-500">// Real-time skill node compilation</p>
                        <p><span className="text-blue-400">const</span> learnerTrack = <span className="text-yellow-300">new</span> Canvas(&#123;</p>
                        <p className="pl-4">pathway: <span className="text-emerald-400">'FullStack & Microservices'</span>,</p>
                        <p className="pl-4">mentors: [<span className="text-emerald-400">'IIT Bombay Alumni'</span>, <span className="text-emerald-400">'Tech Lead @ Unicorn'</span>],</p>
                        <p className="pl-4">handsOnProjects: <span className="text-sky-400">true</span></p>
                        <p>&#125;);</p>
                      </div>

                      {/* Floating Badge */}
                      <div className="mt-6 p-4 bg-slate-800/90 rounded-xl border border-sky-500/30 flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-9 h-9 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold">
                            <Code className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-white">Live Benchmark Test</div>
                            <div className="text-[10px] text-sky-300">Evaluating System Architecture</div>
                          </div>
                        </div>
                        <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-md text-[10px] font-mono font-bold">
                          98.4 SCORE
                        </span>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* BENTO GRID FEATURE HIGHLIGHTS */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                  Built For Precision
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  Why Engineers Choose EduX Platform
                </h2>
                <p className="text-slate-500 text-sm">
                  Experience a modern learning workflow engineered to maximize practical retention.
                </p>
              </div>

              {/* Bento Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                
                {/* Bento Card 1: Large Feature */}
                <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white p-8 rounded-2xl shadow-lg border border-slate-800 relative overflow-hidden flex flex-col justify-between group">
                  <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-sky-500/20 rounded-full blur-2xl group-hover:bg-sky-500/30 transition"></div>
                  <div className="space-y-4 z-10">
                    <div className="p-3 bg-sky-500/20 border border-sky-400/30 text-sky-300 w-fit rounded-xl">
                      <Compass className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight">Interactive Skill Graph Roadmap</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Instead of arbitrary video lists, visualize your learning as an interconnected tree. Complete prerequisites, unlock practical nodes, and track granular progress.
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-sky-400 font-semibold z-10">
                    <span>Explore Skill Trees →</span>
                    <Zap className="w-4 h-4 text-sky-400" />
                  </div>
                </div>

                {/* Bento Card 2: Code Review */}
                <div className="bg-white border border-sky-100 p-6 rounded-2xl shadow-sm hover:border-sky-300 transition flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="p-3 bg-sky-50 text-sky-600 rounded-xl w-fit">
                      <BarChart3 className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg">Instant Automated Code Audits</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      Submit code assignments and receive immediate AST benchmarks for performance, memory, and security.
                    </p>
                  </div>
                  <span className="text-xs font-bold text-sky-600 mt-4 block">Sub-second execution</span>
                </div>

                {/* Bento Card 3: Indian Tech Mentorship */}
                <div className="bg-white border border-sky-100 p-6 rounded-2xl shadow-sm hover:border-sky-300 transition flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit">
                      <Users className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg">IIT & Top Unicorn Mentors</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      Direct office hours and live architecture teardowns with engineers from top tech hubs across Bengaluru, Gurugram & Hyderabad.
                    </p>
                  </div>
                  <span className="text-xs font-bold text-sky-600 mt-4 block">1:1 Office Hours</span>
                </div>

                {/* Bento Card 4: Capstone Projects */}
                <div className="bg-white border border-sky-100 p-6 rounded-2xl shadow-sm hover:border-sky-300 transition flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="p-3 bg-sky-50 text-sky-600 rounded-xl w-fit">
                      <Layers className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg">Production Micro-Projects</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      Build distributed rate limiters, AI document parse pipelines, and scalable database cluster adapters.
                    </p>
                  </div>
                  <span className="text-xs font-bold text-sky-600 mt-4 block">Verifiable Github Proofs</span>
                </div>

                {/* Bento Card 5: Long Banner */}
                <div className="md:col-span-2 lg:col-span-3 bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-white text-sky-600 rounded-xl shadow-xs shrink-0">
                      <GraduationCap className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">EduX Placement & Career Guarantee Track</h4>
                      <p className="text-xs text-slate-600 mt-0.5">Top performing students receive direct referrals to 80+ partner hiring networks across India.</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setActiveTab('demo')}
                    className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-5 py-2.5 rounded-xl whitespace-nowrap transition"
                  >
                    Apply For Track
                  </button>
                </div>

              </div>
            </section>

            {/* INTERACTIVE SKILL TREE PREVIEW (Home Feature) */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sky-100 shadow-md space-y-8">
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-sky-600">Live Canvas Demo</span>
                    <h2 className="text-2xl font-bold text-slate-900 mt-1">Interactive Learning Pathway Node Sequence</h2>
                    <p className="text-slate-500 text-xs mt-1">Click nodes to inspect prerequisite status and curriculum modules.</p>
                  </div>
                  <button
                    onClick={() => setActiveTab('courses')}
                    className="px-4 py-2 bg-sky-50 text-sky-700 hover:bg-sky-100 border border-sky-200 text-xs font-bold rounded-xl flex items-center space-x-2 transition self-start md:self-auto"
                  >
                    <span>View All Full Tracks</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Node Roadmap Interactive Stack */}
                <div className="space-y-6 relative before:absolute before:left-5 before:top-4 before:bottom-4 before:w-0.5 before:bg-sky-100">
                  {skillNodes.map((node) => (
                    <div key={node.id} className="relative flex items-start space-x-4 group">
                      
                      {/* Node Icon */}
                      <div className="z-10 bg-white">
                        {node.status === 'completed' ? (
                          <div className="w-10 h-10 rounded-full bg-emerald-50 border-2 border-emerald-500 flex items-center justify-center text-emerald-600">
                            <CheckCircle2 className="w-6 h-6" />
                          </div>
                        ) : node.status === 'in-progress' ? (
                          <div className="w-10 h-10 rounded-full bg-sky-50 border-2 border-sky-500 flex items-center justify-center text-sky-600">
                            <Circle className="w-5 h-5 animate-spin" />
                          </div>
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-slate-100 border-2 border-slate-300 flex items-center justify-center text-slate-400">
                            <Circle className="w-5 h-5" />
                          </div>
                        )}
                      </div>

                      {/* Card Content */}
                      <div className="flex-1 bg-slate-50 hover:bg-sky-50/50 border border-slate-200 hover:border-sky-200 p-5 rounded-2xl transition flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-sky-100 text-sky-800 uppercase tracking-wide">
                              {node.type}
                            </span>
                            <span className="text-xs text-slate-400">• {node.duration}</span>
                            <span className="text-xs text-slate-400">• {node.level}</span>
                          </div>
                          <h3 className="font-bold text-slate-900 text-base mt-1.5">{node.title}</h3>
                        </div>

                        <div className="flex items-center space-x-3">
                          <span className={`text-xs font-semibold px-2.5 py-1 rounded-md ${
                            node.status === 'completed' ? 'text-emerald-700 bg-emerald-100' :
                            node.status === 'in-progress' ? 'text-sky-700 bg-sky-100' : 'text-slate-500 bg-slate-200'
                          }`}>
                            {node.status === 'completed' ? 'Passed' : node.status === 'in-progress' ? 'Active Module' : 'Prerequisite Required'}
                          </span>
                          
                          <button
                            onClick={() => setActiveTab('courses')}
                            disabled={node.status === 'locked'}
                            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1 ${
                              node.status === 'locked'
                                ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                                : 'bg-slate-900 text-white hover:bg-sky-600 shadow-sm'
                            }`}
                          >
                            <span>Inspect</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                    </div>
                  ))}
                </div>

              </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-xl mx-auto mb-10">
                <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">Alumni Voices</span>
                <h2 className="text-2xl font-bold text-slate-900 mt-1">Loved by Engineers Across India</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    name: 'Aarav Sharma',
                    role: 'Backend Engineer @ Fintech Unicorn',
                    city: 'Bengaluru',
                    quote: 'The system design interactive node map made abstract scaling concepts crystal clear. I cracked my Senior Engineer interview in 6 weeks.',
                    rating: 5
                  },
                  {
                    name: 'Priya Nair',
                    role: 'Full Stack Developer',
                    city: 'Hyderabad',
                    quote: 'Getting real AST automated code feedback instead of waiting 3 days for grading completely changed my pace of learning.',
                    rating: 5
                  },
                  {
                    name: 'Rohan Verma',
                    role: 'AI Research Associate',
                    city: 'Pune',
                    quote: 'The mentors are actual lead engineers in Indian tech startups. The direct office hours gave me insights you cannot find on YouTube.',
                    rating: 5
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-sky-100 shadow-sm space-y-4 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex space-x-1 text-amber-400">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <p className="text-slate-600 text-xs leading-relaxed italic">"{item.quote}"</p>
                    </div>
                    <div className="pt-3 border-t border-slate-100 flex items-center space-x-3">
                      <div className="w-9 h-9 rounded-full bg-slate-900 text-sky-400 font-bold flex items-center justify-center text-xs">
                        {item.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">{item.name}</div>
                        <div className="text-[10px] text-slate-500">{item.role} • {item.city}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>
        )}

        {/* ========================================================================= */}
        {/* 2. COURSES PAGE VIEW                                                       */}
        {/* ========================================================================= */}
        {activeTab === 'courses' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
            
            {/* Header */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl"></div>
              <div className="relative z-10 max-w-2xl space-y-3">
                <span className="px-3 py-1 bg-sky-500/20 text-sky-300 border border-sky-400/30 rounded-full text-xs font-semibold">
                  Curriculum Library 2026
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Explore Specialized Engineering Tracks
                </h1>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Every course is paired with interactive execution environments, live mentor checkpoints, and verifiable portfolio deliverables.
                </p>
              </div>
            </div>

            {/* Filter Controls Bar */}
            <div className="bg-white p-4 rounded-2xl border border-sky-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
              
              {/* Category Filter Pills */}
              <div className="flex items-center space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
                {[
                  { id: 'all', label: 'All Tracks' },
                  { id: 'fullstack', label: 'Full Stack & Cloud' },
                  { id: 'datascience', label: 'AI & Data Science' },
                  { id: 'systemdesign', label: 'System Design & Cyber' }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setCourseCategory(cat.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                      courseCategory === cat.id
                        ? 'bg-slate-900 text-white shadow-sm'
                        : 'bg-sky-50 text-slate-600 hover:bg-sky-100'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Course Search Box */}
              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="Filter courses or skills..."
                  value={courseSearch}
                  onChange={(e) => setCourseSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-sky-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
            </div>

            {/* Course Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-2xl border border-sky-100 shadow-sm hover:shadow-md hover:border-sky-300 transition flex flex-col overflow-hidden group"
                >
                  {/* Card Banner Header */}
                  <div className={`h-32 bg-gradient-to-r ${course.imageBg} p-5 flex flex-col justify-between relative`}>
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold rounded-md uppercase">
                        {course.level}
                      </span>
                      <div className="flex items-center space-x-1 bg-black/30 backdrop-blur-md px-2 py-0.5 rounded text-amber-300 text-xs font-bold">
                        <Star className="w-3 h-3 fill-current" />
                        <span>{course.rating}</span>
                      </div>
                    </div>
                    <span className="text-white/80 text-xs font-medium">{course.duration} Interactive Track</span>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-bold text-slate-900 text-lg leading-snug group-hover:text-sky-600 transition">
                        {course.title}
                      </h3>
                      <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                        {course.desc}
                      </p>
                    </div>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {course.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[10px] bg-sky-50 text-sky-700 font-semibold px-2 py-0.5 rounded border border-sky-100">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer Actions */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div className="text-[11px] text-slate-500 font-medium">
                        <Users className="w-3.5 h-3.5 inline mr-1 text-sky-600" />
                        {course.students.toLocaleString()} enrolled
                      </div>

                      <button
                        onClick={() => setSelectedCourse(course)}
                        className="px-3.5 py-1.5 bg-slate-900 hover:bg-sky-600 text-white rounded-xl text-xs font-semibold transition flex items-center space-x-1"
                      >
                        <span>Preview</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-300">
                <Filter className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                <h3 className="text-slate-700 font-bold">No tracks matched your criteria</h3>
                <p className="text-slate-400 text-xs mt-1">Try clearing your search query or selecting another category.</p>
                <button
                  onClick={() => { setCourseCategory('all'); setCourseSearch(''); }}
                  className="mt-4 px-4 py-2 bg-sky-50 text-sky-700 font-semibold text-xs rounded-xl"
                >
                  Reset Filters
                </button>
              </div>
            )}

          </div>
        )}

        {/* ========================================================================= */}
        {/* 3. ABOUT US PAGE VIEW                                                      */}
        {/* ========================================================================= */}
        {activeTab === 'about' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
            
            {/* Mission Hero */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="text-xs font-bold text-sky-600 uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                Our Pedagogy Blueprint
              </span>
              <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
                Bridging India's University Tech Education with Real Engineering
              </h1>
              <p className="text-slate-600 text-base leading-relaxed">
                EduX was founded in 2024 by engineers from top Indian Institutes of Technology and Silicon Valley tech leaders who recognized a critical gap: traditional education teaches theories, but modern engineering requires interactive experimentation.
              </p>
            </div>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-sky-100 shadow-sm space-y-3 text-center">
                <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center mx-auto font-bold">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg">Active Skill Synthesis</h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  We eliminate 2-hour passive videos in favor of bite-sized interactive node pathways where code is evaluated instantaneously.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-sky-100 shadow-sm space-y-3 text-center">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto font-bold">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg">Open Innovation</h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  All capstone deliverables are committed to public Github repositories so students showcase real proof-of-work to employers.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-sky-100 shadow-sm space-y-3 text-center">
                <div className="w-12 h-12 bg-slate-900 text-sky-400 rounded-2xl flex items-center justify-center mx-auto font-bold">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg">Mentor Accountability</h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Our mentors are verified staff software engineers actively working in tech firms, ensuring relevant, non-outdated curricula.
                </p>
              </div>
            </div>

            {/* Timeline Milestones */}
            <div className="bg-white p-8 sm:p-12 rounded-3xl border border-sky-100 shadow-sm space-y-8">
              <h2 className="text-2xl font-bold text-slate-900 text-center">The EduX Journey</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                {[
                  { year: '2024', title: 'Platform Inception', desc: 'Launched prototype visual skill tree canvas for 500 beta university students in Bengaluru.' },
                  { year: '2025', title: 'Interactive Workspaces', desc: 'Rolled out browser-based AST compiler for instant code audits and peer review queues.' },
                  { year: '2025 Q4', title: 'Enterprise & Hiring', desc: 'Partnered with 80+ Indian unicorn startups to match top node-scorers directly to engineering teams.' },
                  { year: '2026', title: 'AI Agent Workflows', desc: 'Integrated real-time AI tutor debugging assistance across all core system design tracks.' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-200 relative space-y-2">
                    <span className="text-xs font-black text-sky-600 bg-sky-100 px-2.5 py-0.5 rounded-full">{item.year}</span>
                    <h4 className="font-bold text-slate-900 text-sm mt-1">{item.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* 4. DEMO REQUEST PAGE VIEW                                                  */}
        {/* ========================================================================= */}
        {activeTab === 'demo' && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            
            <div className="bg-white rounded-3xl border border-sky-100 shadow-xl overflow-hidden">
              
              {/* Form Header Banner */}
              <div className="bg-slate-900 text-white p-8 sm:p-10 text-center space-y-3 relative">
                <span className="px-3 py-1 bg-sky-500/20 text-sky-300 border border-sky-400/30 rounded-full text-xs font-semibold">
                  Personalized Walkthrough
                </span>
                <h1 className="text-3xl font-extrabold">Schedule a Live EduX Demo</h1>
                <p className="text-slate-300 text-xs max-w-xl mx-auto">
                  Experience our interactive learning canvas with a Senior Curriculum Architect. Select your preferred date and learning track.
                </p>

                {/* Step Progress Bar */}
                {!demoSubmitted && (
                  <div className="flex items-center justify-center space-x-4 pt-4">
                    <div className={`flex items-center space-x-2 text-xs font-semibold ${demoStep >= 1 ? 'text-sky-400' : 'text-slate-500'}`}>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${demoStep >= 1 ? 'bg-sky-500 text-slate-950 font-bold' : 'bg-slate-800'}`}>1</div>
                      <span>Track & Details</span>
                    </div>
                    <div className="w-8 h-0.5 bg-slate-800"></div>
                    <div className={`flex items-center space-x-2 text-xs font-semibold ${demoStep >= 2 ? 'text-sky-400' : 'text-slate-500'}`}>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${demoStep >= 2 ? 'bg-sky-500 text-slate-950 font-bold' : 'bg-slate-800'}`}>2</div>
                      <span>Date & Time</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Form Content */}
              <div className="p-8 sm:p-10">
                {demoSubmitted ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <Check className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">Demo Scheduled Successfully!</h2>
                    <p className="text-slate-600 text-xs max-w-md mx-auto">
                      We've sent a calendar invite and interactive platform preview link to <span className="font-semibold text-slate-900">{demoFormData.email}</span> for <span className="font-semibold text-slate-900">{demoFormData.date} at {demoFormData.time}</span>.
                    </p>
                    <button
                      onClick={() => { setDemoSubmitted(false); setDemoStep(1); }}
                      className="px-6 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold transition hover:bg-slate-800"
                    >
                      Book Another Session
                    </button>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); if (demoStep === 1) setDemoStep(2); else setDemoSubmitted(true); }} className="space-y-6">
                    
                    {demoStep === 1 && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                            <input
                              type="text"
                              required
                              placeholder="e.g. Vikramaditya Singh"
                              value={demoFormData.name}
                              onChange={(e) => setDemoFormData({ ...demoFormData, name: e.target.value })}
                              className="w-full px-4 py-2.5 bg-slate-50 border border-sky-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                            <input
                              type="email"
                              required
                              placeholder="vikram@example.com"
                              value={demoFormData.email}
                              onChange={(e) => setDemoFormData({ ...demoFormData, email: e.target.value })}
                              className="w-full px-4 py-2.5 bg-slate-50 border border-sky-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                            <input
                              type="tel"
                              required
                              placeholder="+91 98765 43210"
                              value={demoFormData.phone}
                              onChange={(e) => setDemoFormData({ ...demoFormData, phone: e.target.value })}
                              className="w-full px-4 py-2.5 bg-slate-50 border border-sky-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">Primary Learning Goal</label>
                            <select
                              value={demoFormData.track}
                              onChange={(e) => setDemoFormData({ ...demoFormData, track: e.target.value })}
                              className="w-full px-4 py-2.5 bg-slate-50 border border-sky-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                            >
                              <option value="fullstack">Full Stack & Cloud Architecture</option>
                              <option value="datascience">AI, Machine Learning & LLMs</option>
                              <option value="systemdesign">High-Scale System Design</option>
                              <option value="enterprise">University / Enterprise Batch</option>
                            </select>
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs transition flex items-center justify-center space-x-2"
                        >
                          <span>Proceed to Time Slot Selection</span>
                          <ArrowRight className="w-4 h-4 text-sky-400" />
                        </button>
                      </div>
                    )}

                    {demoStep === 2 && (
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Date</label>
                            <input
                              type="date"
                              required
                              value={demoFormData.date}
                              onChange={(e) => setDemoFormData({ ...demoFormData, date: e.target.value })}
                              className="w-full px-4 py-2.5 bg-slate-50 border border-sky-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">Time Slot (IST)</label>
                            <select
                              value={demoFormData.time}
                              onChange={(e) => setDemoFormData({ ...demoFormData, time: e.target.value })}
                              className="w-full px-4 py-2.5 bg-slate-50 border border-sky-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                            >
                              <option value="10:00 AM">10:00 AM IST</option>
                              <option value="11:30 AM">11:30 AM IST</option>
                              <option value="03:00 PM">03:00 PM IST</option>
                              <option value="06:30 PM">06:30 PM IST</option>
                            </select>
                          </div>
                        </div>

                        <div className="p-4 bg-sky-50 rounded-2xl border border-sky-200 text-xs space-y-1 text-slate-700">
                          <div className="font-bold text-sky-900">Summary:</div>
                          <div>Track: <span className="font-semibold text-slate-900">{demoFormData.track}</span></div>
                          <div>Attendee: <span className="font-semibold text-slate-900">{demoFormData.name} ({demoFormData.email})</span></div>
                        </div>

                        <div className="flex items-center space-x-3">
                          <button
                            type="button"
                            onClick={() => setDemoStep(1)}
                            className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs transition"
                          >
                            Back
                          </button>
                          <button
                            type="submit"
                            className="flex-1 py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-xl text-xs transition shadow-md shadow-sky-600/20"
                          >
                            Confirm Demo Booking
                          </button>
                        </div>
                      </div>
                    )}

                  </form>
                )}
              </div>

            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* 5. CONTACT US PAGE VIEW                                                    */}
        {/* ========================================================================= */}
        {activeTab === 'contact' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
            
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold text-sky-600 uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                Direct Support
              </span>
              <h1 className="text-3xl font-black text-slate-900">We're Here to Help You Build</h1>
              <p className="text-slate-500 text-xs">Have questions regarding curriculum tracks, enterprise licensing, or mentor applications?</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Contact Info & Hub Locations */}
              <div className="lg:col-span-5 space-y-6">
                
                <div className="bg-slate-900 text-white p-8 rounded-3xl space-y-6 border border-slate-800">
                  <h3 className="text-xl font-bold">EduX Engineering Hubs</h3>
                  
                  <div className="space-y-4 text-xs">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-white">Bengaluru Hub (HQ)</div>
                        <div className="text-slate-400">Koramanagala 4th Block, 100ft Road, Bengaluru, Karnataka 560034</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-white">NCR Innovation Lab</div>
                        <div className="text-slate-400">Cyber City Phase 2, Gurugram, Haryana 122002</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 pt-2 border-t border-slate-800">
                      <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                      <span className="text-slate-300">admissions@edux.io</span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                      <span className="text-slate-300">+91 (080) 4567 8900</span>
                    </div>
                  </div>
                </div>

                {/* FAQ Accordion Box */}
                <div className="bg-white p-6 rounded-3xl border border-sky-100 shadow-sm space-y-4">
                  <h3 className="font-bold text-slate-900 text-base">Frequently Asked Questions</h3>
                  <div className="space-y-3">
                    {faqs.map((faq, fIdx) => (
                      <div key={fIdx} className="border-b border-slate-100 pb-3">
                        <button
                          onClick={() => setOpenFaq(openFaq === fIdx ? null : fIdx)}
                          className="w-full text-left font-semibold text-slate-800 text-xs flex justify-between items-center py-1 hover:text-sky-600"
                        >
                          <span>{faq.q}</span>
                          <ChevronDown className={`w-4 h-4 text-sky-600 transition-transform ${openFaq === fIdx ? 'rotate-180' : ''}`} />
                        </button>
                        {openFaq === fIdx && (
                          <p className="text-[11px] text-slate-500 mt-1.5 leading-relaxed">{faq.a}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Interactive Contact Form */}
              <div className="lg:col-span-7">
                <div className="bg-white p-8 rounded-3xl border border-sky-100 shadow-sm space-y-6">
                  <h3 className="font-bold text-slate-900 text-xl">Send an Inquiry</h3>
                  
                  <form onSubmit={(e) => { e.preventDefault(); alert('Message sent! Our academic coordinator will contact you within 2 hours.'); }} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Your Name</label>
                        <input
                          type="text"
                          required
                          placeholder="Ananya Roy"
                          className="w-full px-4 py-2.5 bg-slate-50 border border-sky-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                        <input
                          type="email"
                          required
                          placeholder="ananya@domain.com"
                          className="w-full px-4 py-2.5 bg-slate-50 border border-sky-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Subject Tag</label>
                      <select className="w-full px-4 py-2.5 bg-slate-50 border border-sky-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500">
                        <option>Course Admissions & Cohort Dates</option>
                        <option>Enterprise / University Licensing</option>
                        <option>Mentor Program Application</option>
                        <option>General Tech Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Message</label>
                      <textarea
                        rows="5"
                        required
                        placeholder="Tell us about your background or requirements..."
                        className="w-full px-4 py-2.5 bg-slate-50 border border-sky-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs transition flex items-center justify-center space-x-2"
                    >
                      <Send className="w-4 h-4 text-sky-400" />
                      <span>Dispatch Inquiry</span>
                    </button>
                  </form>
                </div>
              </div>

            </div>

          </div>
        )}

      </main>

      {/* GLOBAL FOOTER */}
      <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-3">
              <div className="text-white font-extrabold text-xl tracking-tight">
                Edu<span className="text-sky-500">X</span>.io
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Next-generation interactive skill pathways and real-time AST execution environments engineered for ambitious tech talent.
              </p>
            </div>

            <div>
              <div className="text-white font-bold mb-3">Navigation</div>
              <ul className="space-y-2">
                <li><button onClick={() => setActiveTab('home')} className="hover:text-white transition">Home Workspace</button></li>
                <li><button onClick={() => setActiveTab('courses')} className="hover:text-white transition">Skill Tracks</button></li>
                <li><button onClick={() => setActiveTab('about')} className="hover:text-white transition">About Pedagogy</button></li>
                <li><button onClick={() => setActiveTab('demo')} className="hover:text-white transition">Request Demo</button></li>
              </ul>
            </div>

            <div>
              <div className="text-white font-bold mb-3">Core Tracks</div>
              <ul className="space-y-2 text-[11px]">
                <li>Full Stack & Cloud Systems</li>
                <li>AI & Agentic Workflows</li>
                <li>High Scale Architecture</li>
                <li>Cybersecurity Essentials</li>
              </ul>
            </div>

            <div>
              <div className="text-white font-bold mb-3">Connect Hub</div>
              <p className="text-[11px] text-slate-400 mb-3">Subscribe for weekly system design breakdown newsletters.</p>
              <div className="flex space-x-2">
                <input type="email" placeholder="Email" className="bg-slate-800 text-white px-3 py-1.5 rounded-lg text-xs w-full focus:outline-none border border-slate-700" />
                <button className="bg-sky-500 text-slate-950 font-bold px-3 py-1.5 rounded-lg text-xs">Join</button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 text-center flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500">
            <div>© 2026 EduX Technologies Pvt Ltd. Built with Light Blue, Dark Blue & Crisp White.</div>
            <div className="flex space-x-4 mt-2 sm:mt-0">
              <span className="hover:text-slate-300 cursor-pointer">Privacy</span>
              <span className="hover:text-slate-300 cursor-pointer">Terms</span>
              <span className="hover:text-slate-300 cursor-pointer">Security</span>
            </div>
          </div>
        </div>
      </footer>

      {/* COURSE PREVIEW MODAL */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-xl w-full rounded-3xl border border-sky-100 shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className={`p-6 bg-gradient-to-r ${selectedCourse.imageBg} text-white flex justify-between items-start`}>
              <div>
                <span className="px-2.5 py-1 bg-white/20 text-white text-[10px] font-bold rounded uppercase">
                  {selectedCourse.level}
                </span>
                <h3 className="text-xl font-bold mt-2">{selectedCourse.title}</h3>
                <p className="text-xs text-sky-200 mt-1">{selectedCourse.duration} Track</p>
              </div>
              <button 
                onClick={() => setSelectedCourse(null)}
                className="p-1.5 bg-black/20 hover:bg-black/40 rounded-full text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-xs text-slate-600 leading-relaxed">{selectedCourse.desc}</p>
              
              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-900">Key Deliverables:</div>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-700">
                  <div className="flex items-center space-x-2 bg-sky-50 p-2 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Real-time Code Audits</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-sky-50 p-2 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>2x Weekly Live Mentorship</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-sky-50 p-2 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Capstone GitHub Portfolio</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-sky-50 p-2 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Direct Hiring Referral</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end space-x-3">
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-xs font-bold"
                >
                  Close
                </button>
                <button
                  onClick={() => { setSelectedCourse(null); setActiveTab('demo'); }}
                  className="px-5 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-sky-600 transition"
                >
                  Request Track Walkthrough
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* GLOBAL COMMAND SEARCH PALETTE (Ctrl+K Overlay) */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-start justify-center pt-16 px-4">
          <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-sky-100 overflow-hidden">
            
            {/* Search Input Bar */}
            <div className="p-4 border-b border-slate-100 flex items-center space-x-3 bg-slate-50">
              <Search className="w-5 h-5 text-sky-600" />
              <input
                type="text"
                placeholder="Search tracks, modules, or pages (e.g., Fullstack, Demo, System Design)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent focus:outline-none text-slate-800 text-sm placeholder-slate-400"
                autoFocus
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="text-xs bg-slate-200 text-slate-600 px-2 py-1 rounded-md font-mono"
              >
                ESC
              </button>
            </div>

            {/* Quick Result Suggestions */}
            <div className="p-4 space-y-3 max-h-96 overflow-y-auto">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2">
                Quick Actions
              </div>

              <div className="space-y-1">
                <button
                  onClick={() => { setActiveTab('courses'); setIsSearchOpen(false); }}
                  className="w-full p-2.5 rounded-xl hover:bg-sky-50 text-left flex items-center justify-between text-xs transition"
                >
                  <div className="flex items-center space-x-3">
                    <BookOpen className="w-4 h-4 text-sky-600" />
                    <span className="font-bold text-slate-800">Browse All Skill Tracks</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>

                <button
                  onClick={() => { setActiveTab('demo'); setIsSearchOpen(false); }}
                  className="w-full p-2.5 rounded-xl hover:bg-sky-50 text-left flex items-center justify-between text-xs transition"
                >
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-4 h-4 text-sky-600" />
                    <span className="font-bold text-slate-800">Book Live Platform Demo</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>

                <button
                  onClick={() => { setActiveTab('contact'); setIsSearchOpen(false); }}
                  className="w-full p-2.5 rounded-xl hover:bg-sky-50 text-left flex items-center justify-between text-xs transition"
                >
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-sky-600" />
                    <span className="font-bold text-slate-800">Contact Engineering Coordinators</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}