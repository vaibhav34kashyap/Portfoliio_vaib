'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowLeft, Eye, Heart, Share2, User } from 'lucide-react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const blogPosts = [
  {
    id: 1,
    slug: 'building-modern-react-applications-nextjs-14',
    title: 'Building Modern React Applications with Next.js 14',
    excerpt: 'Explore the latest features of Next.js 14 and how to build performant React applications with server components and app router.',
    category: 'Next.js',
    date: '2024-01-15',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop',
    tags: ['Next.js', 'React', 'Server Components'],
    views: 1250,
    likes: 89,
    color: 'from-blue-500 to-purple-600',
    content: `Next.js 14 brings exciting new features that revolutionize how we build React applications. In this comprehensive guide, we'll explore the latest capabilities and learn how to leverage them for better performance and developer experience.

## What's New in Next.js 14

Next.js 14 introduces several groundbreaking features:

### 1. Turbopack (Beta)
The new Rust-based bundler that's up to 700x faster than Webpack for local development.

### 2. Server Actions (Stable)
Server Actions are now stable, allowing you to run server-side code directly from your components.

### 3. Partial Prerendering (Preview)
A new rendering model that combines the benefits of static and dynamic rendering.

## Getting Started

To create a new Next.js 14 project, simply run the following command and you'll be up and running in minutes.

## App Router Benefits

The App Router provides several advantages including nested layouts, server components, streaming, and suspense integration for better loading states.

## Performance Optimizations

Next.js 14 includes several performance improvements like improved image optimization, better bundle splitting, enhanced caching strategies, and optimized server components.

## Conclusion

Next.js 14 represents a significant step forward in React development. With its improved performance, better developer experience, and powerful new features, it's the perfect choice for modern web applications.`
  },
  {
    id: 2,
    slug: 'advanced-react-hooks-custom-hooks',
    title: 'Advanced React Hooks: Custom Hooks for Better Code',
    excerpt: 'Learn how to create powerful custom React hooks that make your code more reusable, maintainable, and elegant.',
    category: 'React',
    date: '2024-01-10',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop',
    tags: ['React', 'Hooks', 'JavaScript'],
    views: 980,
    likes: 67,
    color: 'from-emerald-500 to-teal-600',
    content: `Custom hooks are one of React's most powerful features, allowing you to extract component logic into reusable functions. Let's explore how to create effective custom hooks.

## What are Custom Hooks?

Custom hooks are JavaScript functions that start with "use", can call other hooks, and allow you to share stateful logic between components.

## Creating Your First Custom Hook

Let's start with a simple example - a counter hook that provides increment, decrement, and reset functionality.

## Advanced Custom Hooks

We can create more sophisticated hooks like useLocalStorage for persistent state and useFetch for data fetching with loading and error states.

## Best Practices

1. Keep hooks focused with single responsibility
2. Use descriptive names that make the purpose clear
3. Return objects for multiple values for easier destructuring
4. Handle edge cases and error states properly
5. Test your hooks thoroughly

## Conclusion

Custom hooks are a powerful way to share logic between components while keeping your code clean and maintainable. Start simple and gradually build more complex hooks as you identify patterns in your applications.`
  }
]

export default function BlogPost({ params }) {
  const post = blogPosts.find(p => p.slug === params.slug)
  
  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white dark:bg-dark-300">
      <Header />
      
      <main className="pt-0">
  
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <Link 
                href="/blog"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
              
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className={`px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r ${post.color} text-white`}>
                  {post.category}
                </span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {post.title}
              </motion.h1>
              
              <motion.div 
                className="flex items-center justify-center gap-6 text-white/80"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>Mohit Singh Rawat</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span suppressHydrationWarning>
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

     
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 dark:hidden bg-[linear-gradient(rgba(16,185,129,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.07)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
          <div className="absolute inset-0 hidden dark:block bg-[linear-gradient(rgba(156,163,175,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(156,163,175,0.15)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-4 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-3">
                  <motion.article 
                    className="prose prose-lg dark:prose-invert max-w-none"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-6">
                      {post.content.split('\n\n').map((paragraph, index) => {
                        if (paragraph.startsWith('## ')) {
                          return <h2 key={index} className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">{paragraph.replace('## ', '')}</h2>
                        }
                        if (paragraph.startsWith('### ')) {
                          return <h3 key={index} className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">{paragraph.replace('### ', '')}</h3>
                        }
                        return <p key={index} className="text-lg leading-relaxed">{paragraph}</p>
                      })}
                    </div>
                  </motion.article>
                  
                  {/* Tags */}
                  <motion.div 
                    className="flex flex-wrap gap-3 mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </motion.div>
                </div>

       
                <div className="lg:col-span-1">
                  <motion.div 
                    className="sticky top-24 space-y-6"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    {/* Stats */}
                    <div className="bg-white dark:bg-dark-100 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Article Stats</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                            <Eye className="w-4 h-4" />
                            <span>Views</span>
                          </div>
                          <span className="font-medium text-gray-900 dark:text-white">{post.views}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                            <Heart className="w-4 h-4" />
                            <span>Likes</span>
                          </div>
                          <span className="font-medium text-gray-900 dark:text-white">{post.likes}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-dark-100 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Share Article</h3>
                      <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors shadow-lg shadow-emerald-500/20">
                        <Share2 className="w-4 h-4" />
                        Share
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}