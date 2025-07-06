'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Share2, Tag } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const blogPosts = [
  {
    title: "Building Scalable React Applications",
    excerpt: "Learn the best practices for creating maintainable and scalable React applications that grow with your business needs.",
    content: `
      <p>Building scalable React applications requires careful consideration of architecture, state management, and performance optimization. In this comprehensive guide, we'll explore the key principles and patterns that make React applications maintainable and scalable.</p>
      
      <h2>Architecture Patterns</h2>
      <p>When building large-scale React applications, it's essential to establish clear architectural patterns from the beginning. This includes organizing components, managing state, and structuring your codebase for long-term maintainability.</p>
      
      <h3>Component Organization</h3>
      <p>Organize your components in a way that reflects their purpose and scope. Consider using a feature-based folder structure where related components, hooks, and utilities are grouped together.</p>
      
      <h2>State Management</h2>
      <p>Choose the right state management solution based on your application's complexity. For simple applications, React's built-in state might be sufficient. For more complex applications, consider using Context API, Redux, or Zustand.</p>
      
      <h3>Performance Optimization</h3>
      <p>Implement performance optimizations such as React.memo, useMemo, and useCallback to prevent unnecessary re-renders. Use code splitting and lazy loading to reduce bundle size and improve initial load times.</p>
      
      <h2>Testing Strategies</h2>
      <p>Establish comprehensive testing strategies including unit tests, integration tests, and end-to-end tests. Use tools like Jest, React Testing Library, and Cypress to ensure your application is reliable and maintainable.</p>
      
      <p>By following these best practices, you can create React applications that are not only functional but also scalable and maintainable for the long term.</p>
    `,
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Development",
    slug: "building-scalable-react-applications",
    tags: ["React", "JavaScript", "Architecture", "Performance"]
  },
  {
    title: "The Future of Web Development",
    excerpt: "Exploring emerging trends and technologies that are shaping the future of web development and user experience.",
    content: `
      <p>The landscape of web development is constantly evolving, with new technologies and methodologies emerging at a rapid pace. Let's explore the trends that are shaping the future of web development.</p>
      
      <h2>AI-Powered Development</h2>
      <p>Artificial intelligence is revolutionizing how we build web applications. From AI-powered code generation to intelligent testing and debugging, AI tools are becoming an integral part of the development workflow.</p>
      
      <h3>New Frameworks and Tools</h3>
      <p>Frameworks like Next.js, Remix, and SvelteKit are pushing the boundaries of what's possible with web applications. These tools provide better performance, developer experience, and user experience out of the box.</p>
      
      <h2>Web Components and Micro Frontends</h2>
      <p>Web Components are becoming more popular as a way to create reusable, framework-agnostic components. This trend is closely related to the rise of micro frontends, which allow teams to work independently on different parts of an application.</p>
      
      <h3>Performance and Accessibility</h3>
      <p>Performance and accessibility are becoming increasingly important as web applications become more complex. Tools and techniques for optimizing performance and ensuring accessibility are evolving rapidly.</p>
      
      <p>The future of web development is exciting and full of possibilities. By staying current with these trends, developers can build better applications and provide better user experiences.</p>
    `,
    date: "2024-01-10",
    readTime: "12 min read",
    category: "Technology",
    slug: "future-of-web-development",
    tags: ["Web Development", "AI", "Frameworks", "Trends"]
  },
  {
    title: "Design Systems in Practice",
    excerpt: "How to create and maintain effective design systems that improve consistency and developer productivity.",
    content: `
      <p>Design systems are essential for creating consistent, scalable user interfaces. They provide a foundation for design and development teams to work efficiently and maintain quality across products.</p>
      
      <h2>What is a Design System?</h2>
      <p>A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications. It includes design tokens, components, patterns, and guidelines.</p>
      
      <h3>Design Tokens</h3>
      <p>Design tokens are the atomic elements of a design system. They include colors, typography, spacing, and other visual properties that define the look and feel of your application.</p>
      
      <h2>Component Library</h2>
      <p>The component library is the heart of a design system. It contains reusable UI components that follow consistent patterns and can be easily customized and extended.</p>
      
      <h3>Documentation and Guidelines</h3>
      <p>Comprehensive documentation is crucial for the success of a design system. It should include usage guidelines, examples, and best practices for each component.</p>
      
      <h2>Implementation Strategies</h2>
      <p>Implementing a design system requires careful planning and coordination between design and development teams. Start small, iterate frequently, and gather feedback from users and developers.</p>
      
      <p>By investing in a well-designed and maintained design system, organizations can improve consistency, reduce development time, and create better user experiences.</p>
    `,
    date: "2024-01-05",
    readTime: "10 min read",
    category: "Design",
    slug: "design-systems-in-practice",
    tags: ["Design Systems", "UI/UX", "Components", "Consistency"]
  }
];

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

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
              {post.tags.map((tag) => (
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
            {blogPosts
              .filter(p => p.slug !== post.slug)
              .slice(0, 3)
              .map((relatedPost, index) => (
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