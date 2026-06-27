'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useGetBlogPostsQuery } from '@/store/api/constructionApi';

export default function BlogPage() {
  const { data: posts, isLoading } = useGetBlogPostsQuery();

  const featuredPost = posts?.[0];
  const gridPosts = posts?.slice(1);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative w-full h-[45vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2000&auto=format&fit=crop"
          alt="Blog Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 text-center flex flex-col items-center pt-24">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-2">Our</h1>
          <h2 className="text-5xl md:text-7xl italic font-display text-white tracking-tight">Journal</h2>
          <p className="mt-6 text-sm text-white/70 font-medium tracking-wide">
            Insights, stories and architecture news
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 px-10 max-w-6xl mx-auto">
        {isLoading ? (
          <div className="py-20 text-center text-gray-500 text-sm">Loading journal...</div>
        ) : featuredPost && (
          <div className="flex flex-col md:flex-row gap-12 items-center">
            
            {/* Left: Image (60%) */}
            <div className="w-full md:w-[60%]">
              <div 
                className="relative w-full h-[400px] overflow-hidden bg-gray-100 group cursor-pointer"
                style={{ clipPath: 'url(#blogWave1)', WebkitClipPath: 'url(#blogWave1)' }}
              >
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>

            {/* Right: Content (40%) */}
            <div className="w-full md:w-[40%] pl-0 md:pl-8">
              <h3 className="text-xs text-gray-500 font-bold tracking-wide uppercase flex items-center gap-2 mb-6">
                <span className="w-1.5 h-1.5 bg-[#c0392b] rounded-full inline-block" />
                Featured Post
              </h3>
              <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-3 hover:text-[#c0392b] transition-colors cursor-pointer">
                {featuredPost.title}
              </h2>
              <p className="text-xs text-gray-400 font-medium tracking-wide mb-5 uppercase">{featuredPost.date} — {featuredPost.readTime} Read</p>
              <p className="text-sm text-gray-500 leading-relaxed mb-8">
                {featuredPost.excerpt}
              </p>
              
              <button className="flex items-center gap-[24px] border-[1.5px] border-[#1a1a1a] rounded-full p-1 pl-6 hover:bg-gray-50 transition-colors group w-fit">
                <span className="text-[#1a1a1a] text-[11px] font-bold tracking-wide">Read More</span>
                <div className="bg-[#1a1a1a] rounded-full w-[34px] h-[34px] flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </div>
              </button>
            </div>
            
          </div>
        )}
      </section>

      <div className="max-w-6xl mx-auto px-10">
        <hr className="border-t border-gray-200" />
      </div>

      {/* Blog Grid */}
      <section className="py-16 px-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {gridPosts?.map((post, idx) => (
            <motion.div 
              key={post.id}
              className="flex flex-col group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div 
                className="relative w-full h-56 overflow-hidden bg-gray-100 mb-6"
                style={{ clipPath: 'url(#blogWave2)', WebkitClipPath: 'url(#blogWave2)' }}
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="flex justify-start mb-4">
                <span className="bg-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-widest rounded-full px-4 py-1.5">
                  {post.category}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 leading-snug mb-2 group-hover:text-[#c0392b] transition-colors">
                {post.title}
              </h3>
              <p className="text-xs text-gray-400 font-medium mb-3">
                {post.date} — {post.readTime}
              </p>
              <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-4">
                {post.excerpt}
              </p>
              <div className="mt-auto flex items-center text-[12px] font-bold text-[#1a1a1a] gap-2">
                <span className="underline decoration-2 underline-offset-4">Read More</span>
                <span className="text-lg leading-none">›</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="w-full bg-gray-50 py-24">
        <div className="max-w-4xl mx-auto px-10 text-center">
          <h3 className="text-xs text-gray-500 font-bold tracking-wide uppercase flex items-center justify-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 bg-[#c0392b] rounded-full inline-block" />
            Stay Updated
          </h3>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">Architecture</h2>
          <h2 className="text-5xl md:text-6xl italic font-display text-gray-900 mb-6">Insights</h2>
          
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mt-10">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 rounded-full px-6 py-3 border border-gray-300 bg-white text-sm text-gray-900 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all placeholder:text-gray-400"
            />
            <button className="bg-[#1a1a1a] text-white rounded-full px-8 py-3 text-sm font-bold tracking-wide hover:bg-gray-800 transition-colors">
              Subscribe ›
            </button>
          </div>
        </div>
      </section>

      {/* SVG Definitions */}
      <svg width="0" height="0" className="absolute hidden">
        <defs>
          <clipPath id="blogWave1" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 L 0.2,0 C 0.3,0 0.3,0.04 0.4,0.04 L 0.6,0.04 C 0.7,0.04 0.7,0 0.8,0 L 1,0 L 1,1 L 0.8,1 C 0.7,1 0.7,0.96 0.6,0.96 L 0.4,0.96 C 0.3,0.96 0.3,1 0.2,1 L 0,1 Z" />
          </clipPath>
          <clipPath id="blogWave2" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 L 0.15,0 C 0.25,0 0.25,0.06 0.35,0.06 L 0.65,0.06 C 0.75,0.06 0.75,0 0.85,0 L 1,0 L 1,1 L 0.85,1 C 0.75,1 0.75,0.94 0.65,0.94 L 0.35,0.94 C 0.25,0.94 0.25,1 0.15,1 L 0,1 Z" />
          </clipPath>
        </defs>
      </svg>

      <Footer />
    </main>
  );
}
