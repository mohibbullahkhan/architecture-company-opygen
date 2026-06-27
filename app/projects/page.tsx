'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useGetProjectsQuery } from '@/store/api/constructionApi';

const categories = ['All', 'Interior Design', 'Commercial', 'Landscape', 'Civic', 'Residential'];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const { data: projects, isLoading } = useGetProjectsQuery(
    activeCategory === 'All' ? undefined : activeCategory
  );

  return (
    <main className="min-h-screen bg-[#f9f9f9]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[450px] flex flex-col items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop"
          alt="Projects Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center flex flex-col items-center pt-24 md:pt-32"
        >
          <div className="flex flex-col mb-4">
            <h1 className="text-5xl md:text-[80px] font-black text-white tracking-tighter leading-[0.9]">Our</h1>
            <h2 className="text-5xl md:text-[90px] italic font-display text-white tracking-tight leading-[0.9] pr-4">Projects</h2>
          </div>
          <div className="mt-4 text-[11px] text-white/80 font-bold tracking-[0.2em] uppercase flex items-center gap-3">
            <span>Home</span> <span className="w-4 h-[1px] bg-white/50" /> <span>Projects</span>
          </div>
        </motion.div>
      </section>

      {/* Filter Bar */}
      <div className="w-full bg-[#f9f9f9] sticky top-0 z-40 border-b border-gray-200/60 backdrop-blur-md bg-[#f9f9f9]/80">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-6 overflow-x-auto hide-scrollbar">
          <div className="flex items-center gap-3 md:gap-4 min-w-max">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-6 py-2.5 text-[13px] font-bold transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#1a1a1a] text-white shadow-md scale-105'
                    : 'bg-white text-gray-500 border-[1.5px] border-gray-200 hover:border-[#1a1a1a] hover:text-[#1a1a1a]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="py-20 md:py-32 px-6 md:px-10 max-w-[1400px] mx-auto">
        {isLoading ? (
          <div className="w-full h-64 flex items-center justify-center">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="w-8 h-8 border-2 border-gray-300 border-t-[#1a1a1a] rounded-full"
            />
          </div>
        ) : (
          <>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
              layout
            >
              <AnimatePresence mode="popLayout">
                {projects?.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.5, delay: (idx % 6) * 0.1 }}
                    className="group relative flex flex-col cursor-pointer overflow-hidden rounded-[32px] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-shadow duration-500 aspect-[4/5] w-full"
                  >
                    <Link href={`/projects/${project.id}`} className="block w-full h-full relative">
                      {/* Image */}
                      <div className="absolute inset-0 w-full h-full overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-[0.25,1,0.5,1]"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/95 via-[#1a1a1a]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                      
                      {/* Content */}
                      <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end pointer-events-none">
                        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-[0.25,1,0.5,1]">
                          <h3 className="text-[20px] font-bold text-white mb-2 tracking-tight font-sans">
                            {project.name}
                          </h3>
                          <div className="flex items-center gap-3">
                            <div className="h-[1px] w-4 bg-[#e74c3c] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 delay-100 ease-[0.25,1,0.5,1]" />
                            <p className="text-[13px] text-gray-300 font-medium tracking-wide opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 delay-100 ease-[0.25,1,0.5,1]">
                              {project.location}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-6 right-6">
                        <span className="bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full px-4 py-1.5 text-[11px] font-bold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          {project.category}
                        </span>
                      </div>
                    </Link>

                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
            

          </>
        )}
      </section>

      <Footer />
    </main>
  );
}
