'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Share2, Tag } from 'lucide-react';
import Link from 'next/link';
import { BlogPost } from '@/lib/markdown';

export default function BlogPostClient({ post, allPosts }: { post: BlogPost, allPosts: BlogPost[] }) {
  const slug = post.slug;
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
            href="/blog"
            className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Blog</span>
          </Link>
          
          <div className="mb-6">
            <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-4xl">
            {post.excerpt}
          </p>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
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
            
            <button className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>
          
          {post.tags && (
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag: string) => (
                <span 
                  key={tag}
                  className="inline-flex items-center space-x-1 bg-gray-800/50 text-gray-300 px-3 py-1 rounded-full text-xs font-medium"
                >
                  <Tag className="w-3 h-3" />
                  <span>{tag}</span>
                </span>
              ))}
            </div>
          )}
        </motion.div>

        {/* Article Content */}
        <motion.article
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div 
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-white prose-headings:font-light
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
              prose-strong:text-white prose-strong:font-medium
              prose-code:text-green-400 prose-code:bg-gray-800/50 prose-code:px-2 prose-code:py-1 prose-code:rounded
              prose-pre:bg-gray-900/50 prose-pre:border prose-pre:border-gray-800/50
              prose-blockquote:border-l-blue-400 prose-blockquote:text-gray-400
              prose-ul:text-gray-300 prose-ol:text-gray-300
              prose-li:mb-2"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.article>

        {/* Related Posts */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24"
        >
          <h2 className="text-2xl font-light text-white mb-8">Related Posts</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts
              .filter(p => p.slug !== slug)
              .slice(0, 3)
              .map((relatedPost) => (
                <Link 
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group block"
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/50 transition-all duration-500 border border-gray-700/30 hover:border-gray-600/50"
                  >
                    <div className="mb-4">
                      <span className="text-xs font-medium text-green-400 uppercase tracking-wider">
                        {relatedPost.category}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-medium text-white mb-3 group-hover:text-green-400 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 leading-relaxed line-clamp-2 text-sm">
                      {relatedPost.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(relatedPost.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-3 h-3" />
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 