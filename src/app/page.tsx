'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Mail, Github, Linkedin, Twitter, ExternalLink, Calendar, Clock } from 'lucide-react';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.02&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;1&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-block mb-8"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl md:text-3xl font-bold text-white mb-6">
                RA
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 tracking-tight">
              Rohan Anand
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto font-light"
            >
              Software Engineer & Creative Developer
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-base md:text-lg text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Crafting exceptional digital experiences through clean code, innovative design, and thoughtful user experiences.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white text-black px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:bg-gray-100 flex items-center space-x-2"
              >
                <span>View Work</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 px-8 py-4 rounded-lg font-medium transition-all duration-300"
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ArrowDown className="w-6 h-6 text-gray-500 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
                Selected Work
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                A collection of projects that showcase my passion for creating meaningful digital experiences.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "E-Commerce Platform",
                  description: "A modern e-commerce solution with real-time inventory management and seamless payment processing.",
                  tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
                  link: "#",
                  category: "Full-Stack"
                },
                {
                  title: "AI Chat Application",
                  description: "An intelligent chat application powered by machine learning for enhanced user interactions.",
                  tech: ["React", "Python", "TensorFlow", "WebSocket"],
                  link: "#",
                  category: "AI/ML"
                },
                {
                  title: "Task Management System",
                  description: "A collaborative task management platform with real-time updates and team features.",
                  tech: ["Vue.js", "Node.js", "MongoDB", "Socket.io"],
                  link: "#",
                  category: "Collaboration"
                }
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-500 border border-gray-700/50 hover:border-gray-600/50"
                >
                  <div className="mb-4">
                    <span className="text-xs font-medium text-blue-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-medium text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.link} 
                    className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-medium group/link"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
                Latest Thoughts
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Insights, tutorials, and thoughts on technology, design, and development.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Building Scalable React Applications",
                  excerpt: "Learn the best practices for creating maintainable and scalable React applications that grow with your business needs.",
                  date: "2024-01-15",
                  readTime: "8 min read",
                  category: "Development",
                  slug: "building-scalable-react-applications"
                },
                {
                  title: "The Future of Web Development",
                  excerpt: "Exploring emerging trends and technologies that are shaping the future of web development and user experience.",
                  date: "2024-01-10",
                  readTime: "12 min read",
                  category: "Technology",
                  slug: "future-of-web-development"
                },
                {
                  title: "Design Systems in Practice",
                  excerpt: "How to create and maintain effective design systems that improve consistency and developer productivity.",
                  date: "2024-01-05",
                  readTime: "10 min read",
                  category: "Design",
                  slug: "design-systems-in-practice"
                }
              ].map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
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
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <a 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center space-x-2 text-green-400 hover:text-green-300 font-medium group/link"
                  >
                    <span>Read More</span>
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </motion.article>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <motion.a
                href="/blog"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-white text-black px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:bg-gray-100"
              >
                <span>View All Posts</span>
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Let&apos;s Work Together
            </h2>
            
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              I&apos;m always open to discussing new opportunities, interesting projects, and creative collaborations.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <motion.a
                href="mailto:rohan@example.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white text-black px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:bg-gray-100 flex items-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Send Message</span>
              </motion.a>
            </div>
            
            <div className="flex justify-center space-x-8">
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Twitter, href: "https://twitter.com", label: "Twitter" }
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-14 h-14 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800/70 transition-all duration-300 border border-gray-700/50 hover:border-gray-600/50"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800/50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Rohan Anand. Crafted with care using Next.js and modern web technologies.
          </p>
        </div>
      </footer>
    </div>
  );
}
