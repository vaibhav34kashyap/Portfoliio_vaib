'use client'

import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Calendar, Clock, Eye, Heart } from 'lucide-react'
import Link from 'next/link'
import BlurReveal from './BlurReveal'

export default function BlogPreview() {
  // const featuredPosts = [
  //   {
  //     id: 1,
  //     slug: 'building-modern-react-applications-nextjs-14',
  //     title: 'Building Modern React Applications with Next.js 14',
  //     excerpt: 'Explore the latest features of Next.js 14 and how to build performant React applications with server components and app router.',
  //     category: 'Next.js',
  //     date: '2024-01-15',
  //     readTime: '8 min read',
  //     image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
  //     tags: ['Next.js', 'React', 'Server Components'],
  //     views: 1250,
  //     likes: 89,
  //     color: 'from-blue-500 to-purple-600',
  //     bgGradient: 'from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20'
  //   },
  //   {
  //     id: 2,
  //     slug: 'advanced-react-hooks-custom-hooks',
  //     title: 'Advanced React Hooks: Custom Hooks for Better Code',
  //     excerpt: 'Learn how to create powerful custom React hooks that make your code more reusable, maintainable, and elegant.',
  //     category: 'React',
  //     date: '2024-01-10',
  //     readTime: '6 min read',
  //     image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
  //     tags: ['React', 'Hooks', 'JavaScript'],
  //     views: 980,
  //     likes: 67,
  //     color: 'from-emerald-500 to-teal-600',
  //     bgGradient: 'from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20'
  //   },
  //   {
  //     id: 3,
  //     slug: 'optimizing-web-performance-developers-guide',
  //     title: "Optimizing Web Performance: A Developer's Guide",
  //     excerpt: 'Essential techniques for improving web performance, from code splitting to image optimization and caching strategies.',
  //     category: 'Web Development',
  //     date: '2023-12-28',
  //     readTime: '10 min read',
  //     image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
  //     tags: ['Performance', 'Optimization', 'Web Development'],
  //     views: 1420,
  //     likes: 112,
  //     color: 'from-purple-500 to-pink-600',
  //     bgGradient: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20'
  //   }
  // ]
  const featuredPosts = [
    {
      id: 1,
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
    },
    {
      id: 9,
      title: 'Figma to Code: Bridging the Gap Between Design and Development',
      excerpt: 'Learn how to efficiently translate Figma designs into pixel-perfect, responsive code using modern CSS and component-based workflows.',
      category: 'UI/UX',
      date: '2024-02-10',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800&h=400&fit=crop',
      tags: ['Figma', 'UI/UX', 'CSS'],
      views: 1340,
      likes: 105,
      color: 'from-violet-500 to-fuchsia-600',
      bgGradient: 'from-violet-50 to-fuchsia-50 dark:from-violet-900/20 dark:to-fuchsia-900/20'
    },
    {
      id: 10,
      title: 'Micro-Interactions: The Secret to Delightful UI',
      excerpt: 'Discover how small, purposeful animations and micro-interactions can dramatically improve user experience and engagement.',
      category: 'UI/UX',
      date: '2024-02-05',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=400&fit=crop',
      tags: ['UI/UX', 'Animation', 'Framer Motion'],
      views: 978,
      likes: 81,
      color: 'from-rose-500 to-pink-600',
      bgGradient: 'from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20'
    },
    {
      id: 11,
      title: 'Tailwind CSS Tips Every UI Developer Should Know',
      excerpt: 'Practical Tailwind CSS tricks, utility patterns, and component recipes that speed up your UI development workflow.',
      category: 'CSS',
      date: '2024-01-28',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?w=800&h=400&fit=crop',
      tags: ['Tailwind CSS', 'CSS', 'UI Development'],
      views: 1520,
      likes: 130,
      color: 'from-sky-500 to-cyan-600',
      bgGradient: 'from-sky-50 to-cyan-50 dark:from-sky-900/20 dark:to-cyan-900/20'
    },
    {
      id: 12,
      title: 'Accessible UI: Building Inclusive Web Experiences',
      excerpt: 'A practical guide to web accessibility — ARIA roles, keyboard navigation, color contrast, and tools to audit your UI.',
      category: 'UI/UX',
      date: '2024-01-22',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=400&fit=crop',
      tags: ['Accessibility', 'UI/UX', 'ARIA'],
      views: 860,
      likes: 74,
      color: 'from-green-500 to-emerald-600',
      bgGradient: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20'
    },
    {
      id: 13,
      title: 'Dark Mode Done Right: CSS Variables & Theming',
      excerpt: 'Implement a robust dark/light mode system using CSS custom properties, Tailwind, and React context without flickering.',
      category: 'CSS',
      date: '2024-01-18',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?w=800&h=400&fit=crop',
      tags: ['CSS', 'Dark Mode', 'Theming'],
      views: 1190,
      likes: 98,
      color: 'from-slate-500 to-gray-700',
      bgGradient: 'from-slate-50 to-gray-100 dark:from-slate-900/20 dark:to-gray-800/20'
    }
  ]
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-dark-300 relative overflow-hidden">
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
        <BlurReveal className="text-center mb-12 sm:mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gray-900 dark:text-white">Latest </span>
            <span className="gradient-text">Blog Posts</span>
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Insights, tutorials, and thoughts on web development and modern technologies
          </motion.p>
        </BlurReveal>

        {/* Featured Posts Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {featuredPosts.map((post, index) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <motion.article
                className={`relative overflow-hidden rounded-2xl bg-white dark:bg-dark-100 border border-gray-200 dark:border-gray-700 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 cursor-pointer group shadow-sm hover:shadow-lg hover:shadow-emerald-500/10 transition-shadow duration-300`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-300" />
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
        </motion.div>

        {/* View All Posts Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="/blog">
            <motion.button
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg shadow-emerald-500/20"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <BookOpen className="w-5 h-5" />
              <span>View All Posts</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}