import { notFound } from 'next/navigation';
import BlogPostClient from './BlogPostClient';
import { getPostBySlug, getAllPosts, getPostSlugs } from '@/lib/markdown';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function BlogPost(props: any) {
  const params = props.params instanceof Promise ? await props.params : props.params;
  const { slug } = params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  const allPosts = getAllPosts();
  return <BlogPostClient post={post} allPosts={allPosts} />;
}

export function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map(slug => ({ slug }));
} 