import { getAllPosts } from '@/lib/markdown';
import BlogListClient from './BlogListClient';

export default function BlogPage() {
  const blogPosts = getAllPosts();
  return <BlogListClient blogPosts={blogPosts} />;
} 