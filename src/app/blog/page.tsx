'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const blogPosts = [
  {
    title: "Building Scalable React Applications",
    excerpt: "Learn the best practices for creating maintainable and scalable React applications that grow with your business needs. This comprehensive guide covers architecture patterns, state management, performance optimization, and testing strategies.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Development",
    slug: "building-scalable-react-applications",
    featured: true
  },
  {
    title: "The Future of Web Development",
    excerpt: "Exploring emerging trends and technologies that are shaping the future of web development and user experience. From AI-powered tools to new frameworks and methodologies.",
    date: "2024-01-10",
    readTime: "12 min read",
    category: "Technology",
    slug: "future-of-web-development",
    featured: false
  },
  {
    title: "Design Systems in Practice",
    excerpt: "How to create and maintain effective design systems that improve consistency and developer productivity. Real-world examples and implementation strategies.",
    date: "2024-01-05",
    readTime: "10 min read",
    category: "Design",
    slug: "design-systems-in-practice",
    featured: false
  },
  {
    title: "Performance Optimization Techniques",
    excerpt: "Advanced techniques for optimizing web application performance, including code splitting, lazy loading, and modern optimization strategies.",
    date: "2024-01-01",
    readTime: "15 min read",
    category: "Performance",
    slug: "performance-optimization-techniques",
    featured: false
  },
  {
    title: "Modern CSS Architecture",
    excerpt: "Exploring modern CSS architecture patterns, including CSS-in-JS, utility-first approaches, and component-based styling methodologies.",
    date: "2023-12-28",
    readTime: "11 min read",
    category: "CSS",
    slug: "modern-css-architecture",
    featured: false
  },
  {
    title: "TypeScript Best Practices",
    excerpt: "Essential TypeScript patterns and best practices for building robust, maintainable applications with better developer experience.",
    date: "2023-12-25",
    readTime: "9 min read",
    category: "Development",
    slug: "typescript-best-practices",
    featured: false
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <Link 
            href="/"
            className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
          
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6">
            Blog
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            Thoughts, tutorials, and insights on technology, design, and development. 
            Exploring the latest trends and sharing practical knowledge.
          </p>
        </motion.div>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map((post, index) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-800/50">
              <div className="mb-6">
                <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">
                  Featured • {post.category}
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-light text-white mb-6 leading-tight">
                {post.title}
              </h2>
              
              <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-4xl">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
              
              <Link 
                href={`/blog/${post.slug}`}
                className="inline-flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-gray-100 group"
              >
                <span>Read Full Article</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.article>
        ))}

        {/* All Posts Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl font-light text-white mb-8">All Posts</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 hover:bg-gray-800/50 transition-all duration-500 border border-gray-700/30 hover:border-gray-600/50"
              >
                <div className="mb-4">
                  <span className="text-xs font-medium text-green-400 uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-medium text-white mb-3 group-hover:text-green-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center space-x-2 text-green-400 hover:text-green-300 font-medium group/link"
                >
                  <span>Read More</span>
                  <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 