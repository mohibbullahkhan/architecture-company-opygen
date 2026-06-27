'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { blogPosts } from '@/app/api/blog/data';

export default function BlogPostPage({ params }: { params: { id: string } }) {
  // Use static data instead of RTK Query
  const post = blogPosts.find(p => p.id === params.id || p.id === String(params.id));

  if (!post) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <Navbar />
        <h1 className="text-2xl font-bold">Post not found</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <article className="pt-32 pb-24 px-6 md:px-10 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-[#c0392b] font-bold text-sm tracking-widest uppercase mb-4 block">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-[#1a1a1a] mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-gray-500 font-medium">
            <span>{post.date}</span>
            <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
            <span>{post.readTime}</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full aspect-video relative rounded-3xl overflow-hidden mb-16 shadow-xl"
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg max-w-none text-gray-600 prose-headings:text-[#1a1a1a]"
        >
          <p className="text-2xl leading-relaxed font-medium text-[#1a1a1a] mb-8">
            {post.excerpt}
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <h2 className="text-3xl font-bold mt-12 mb-6">The Process</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </motion.div>
      </article>

      <Footer />
    </main>
  );
}
