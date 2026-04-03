'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, ArrowRight, BookOpen, Tag, Eye, Heart, Share2, Search, Filter } from 'lucide-react'
import { useState, useMemo } from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BlurReveal from '../components/BlurReveal'

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [hoveredPost, setHoveredPost] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [showGrid, setShowGrid] = useState(true)

  const categories = ['All', 'React', 'Next.js', 'JavaScript', 'Web Development', 'UI/UX']

  const blogPosts = [
    {
      id: 1,
      slug: 'building-modern-react-applications-nextjs-14',
      title: 'Building Modern React Applications with Next.js 14',
      excerpt: 'Explore the latest features of Next.js 14 and how to build performant React applications with server components and app router.',
      category: 'Next.js',
      date: '2024-01-15',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
      tags: ['Next.js', 'React', 'Server Components'],
      views: 1250,
      likes: 89,
      color: 'from-blue-500 to-purple-600',
      bgGradient: 'from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20'
    },
    {
      id: 2,
      slug: 'advanced-react-hooks-custom-hooks',
      title: 'Advanced React Hooks: Custom Hooks for Better Code',
      excerpt: 'Learn how to create powerful custom React hooks that make your code more reusable, maintainable, and elegant.',
      category: 'React',
      date: '2024-01-10',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
      tags: ['React', 'Hooks', 'JavaScript'],
      views: 980,
      likes: 67,
      color: 'from-emerald-500 to-teal-600',
      bgGradient: 'from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20'
    },
    {
      id: 3,
      slug: 'css-grid-vs-flexbox-when-to-use-which',
      title: 'CSS Grid vs Flexbox: When to Use Which',
      excerpt: 'A comprehensive guide to understanding the differences between CSS Grid and Flexbox and when to use each layout method.',
      category: 'Web Development',
      date: '2024-01-05',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop',
      tags: ['CSS', 'Layout', 'Web Development'],
      views: 756,
      likes: 45,
      color: 'from-orange-500 to-red-600',
      bgGradient: 'from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20'
    },
    {
      id: 4,
      slug: 'optimizing-web-performance-developers-guide',
      title: 'Optimizing Web Performance: A Developer\'s Guide',
      excerpt: 'Essential techniques for improving web performance, from code splitting to image optimization and caching strategies.',
      category: 'Web Development',
      date: '2023-12-28',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
      tags: ['Performance', 'Optimization', 'Web Development'],
      views: 1420,
      likes: 112,
      color: 'from-purple-500 to-pink-600',
      bgGradient: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20'
    },
    {
      id: 5,
      slug: 'react-state-management-redux-zustand-context',
      title: 'React State Management: Redux vs Zustand vs Context',
      excerpt: 'Compare different state management solutions for React applications and learn when to use each approach.',
      category: 'React',
      date: '2023-12-20',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
      tags: ['React', 'State Management', 'Redux'],
      views: 892,
      likes: 73,
      color: 'from-cyan-500 to-blue-600',
      bgGradient: 'from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20'
    },
    {
      id: 6,
      slug: 'modern-javascript-es2024-features',
      title: 'Modern JavaScript ES2024 Features You Should Know',
      excerpt: 'Discover the latest JavaScript features and how they can improve your development workflow and code quality.',
      category: 'JavaScript',
      date: '2023-12-15',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&h=400&fit=crop',
      tags: ['JavaScript', 'ES2024', 'Modern JS'],
      views: 1156,
      likes: 94,
      color: 'from-yellow-500 to-orange-600',
      bgGradient: 'from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20'
    },
    {
      id: 7,
      slug: 'design-systems-building-consistent-ui-components',
      title: 'Design Systems: Building Consistent UI Components',
      excerpt: 'Learn how to create and maintain a design system that ensures consistency across your applications.',
      category: 'UI/UX',
      date: '2023-12-10',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop',
      tags: ['Design Systems', 'UI/UX', 'Components'],
      views: 634,
      likes: 52,
      color: 'from-pink-500 to-rose-600',
      bgGradient: 'from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20'
    },
    {
      id: 8,
      slug: 'nextjs-app-router-complete-migration-guide',
      title: 'Next.js App Router: Complete Migration Guide',
      excerpt: 'Step-by-step guide to migrating from Pages Router to App Router in Next.js with practical examples.',
      category: 'Next.js',
      date: '2023-12-05',
      readTime: '11 min read',
      image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=400&fit=crop',
      tags: ['Next.js', 'App Router', 'Migration'],
      views: 1089,
      likes: 87,
      color: 'from-indigo-500 to-purple-600',
      bgGradient: 'from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20'
    }
  ]

  const filteredPosts = useMemo(() => {
    let filtered = selectedCategory === 'All' 
      ? blogPosts 
      : blogPosts.filter(post => post.category === selectedCategory)
    
    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }
    
    return filtered
  }, [selectedCategory, searchTerm])



  return (
    <div className="min-h-screen bg-white dark:bg-dark-300">
      <Header />
      
      <main className="pt-0">
        {/* Hero Section */}
        <section className="py-16 relative overflow-hidden">
          {/* Grid background */}
          <div className="absolute inset-0 dark:hidden bg-[linear-gradient(rgba(16,185,129,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.07)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
          <div className="absolute inset-0 hidden dark:block bg-[linear-gradient(rgba(156,163,175,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(156,163,175,0.15)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
          {/* Floating orbs */}
          <motion.div
            className="absolute top-1/4 -left-32 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"
            animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-1/4 -right-32 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none"
            animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <BlurReveal className="text-center mb-12">
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-gray-900 dark:text-white">My </span>
                <span className="gradient-text">Blog</span>
              </motion.h1>
              <motion.p 
                className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Insights, tutorials, and thoughts on web development, React, Next.js, and modern frontend technologies. 
                Stay updated with the latest trends and best practices in the world of web development.
              </motion.p>
            </BlurReveal>

            {/* Search Bar */}
            <motion.div 
              className="max-w-md mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:text-white"
                />
              </div>
            </motion.div>

            {/* Category Filter */}
            <motion.div 
              className="flex flex-wrap justify-center gap-3 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/20'
                      : 'bg-gray-100 dark:bg-dark-100 text-gray-700 dark:text-gray-300 hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 border border-gray-200 dark:border-gray-700'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="pb-20 relative">
          {showGrid && (
            <>
              <div className="absolute inset-0 dark:hidden bg-[linear-gradient(rgba(16,185,129,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.07)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
              <div className="absolute inset-0 hidden dark:block bg-[linear-gradient(rgba(156,163,175,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(156,163,175,0.15)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
            </>
          )}
          <div className="container mx-auto px-4 sm:px-6">
            {/* Grid Background Toggle */}
            <div className="flex justify-end mb-6 max-w-7xl mx-auto">
              <label className="flex items-center gap-2 cursor-pointer select-none text-sm text-gray-600 dark:text-gray-400">
                <span>Grid Background</span>
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={showGrid}
                    onChange={(e) => setShowGrid(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-10 h-5 bg-gray-200 dark:bg-gray-700 rounded-full peer-checked:bg-emerald-500 transition-colors duration-200" />
                  <div className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 peer-checked:translate-x-5" />
                </div>
              </label>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              <AnimatePresence>
                {filteredPosts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`}>
                    <motion.article
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      layout
                      onHoverStart={() => setHoveredPost(post.id)}
                      onHoverEnd={() => setHoveredPost(null)}
                      className="relative overflow-hidden rounded-2xl bg-white dark:bg-dark-100 border border-gray-200 dark:border-gray-700 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 cursor-pointer group shadow-sm hover:shadow-lg hover:shadow-emerald-500/10 transition-shadow duration-300"
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-300" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${post.color} text-white`}>
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Meta Info */}
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span suppressHydrationWarning>{new Date(post.date).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Stats and Read More */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            <span>{post.views}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            <span>{post.likes}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium group-hover:translate-x-1 transition-transform duration-200">
                          <span>Read More</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </motion.article>
                </Link>
                ))}
              </AnimatePresence>
            </div>

            {/* No Results */}
            {filteredPosts.length === 0 && (
              <motion.div 
                className="text-center py-16 col-span-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <BookOpen className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">
                  No articles found
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Try adjusting your search or filter criteria
                </p>
              </motion.div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}