'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCategoriesHeroProps {
  line1?: string;
  line2?: string;
}

const categories = [
  {
    id: '01',
    name: "Interior Design",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop",
    desc: "Crafting intimate spaces that balance aesthetic beauty with functional everyday living."
  },
  {
    id: '02',
    name: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop",
    desc: "Designing iconic workspaces and retail environments that inspire productivity."
  },
  {
    id: '03',
    name: "Landscape",
    image: "https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=2000&auto=format&fit=crop",
    desc: "Blending natural environments with architectural structures in perfect harmony."
  },
  {
    id: '04',
    name: "Civic",
    image: "https://images.unsplash.com/photo-1523634921620-22ba31558eb8?q=80&w=2000&auto=format&fit=crop",
    desc: "Building enduring public spaces that serve communities and stand the test of time."
  },
  {
    id: '05',
    name: "Residential",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop",
    desc: "Creating bespoke homes tailored to the unique lifestyles of our clients."
  }
];

export function ProjectCategoriesHero({ 
  line1 = "Project", 
  line2 = "Categories" 
}: ProjectCategoriesHeroProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="relative w-full min-h-[900px] bg-[#1a1a1a] overflow-hidden flex items-center py-24">
      {/* Dynamic Backgrounds */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIdx}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Image
            src={categories[activeIdx].image}
            alt={categories[activeIdx].name}
            fill
            className="object-cover opacity-50"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/95 via-[#1a1a1a]/70 to-transparent z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-[#1a1a1a]/30 z-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-16">
        
        {/* Left Side: Title & Description */}
        <div className="md:w-5/12 w-full flex flex-col pt-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-[#e74c3c]" />
              <span className="text-[#e74c3c] font-bold tracking-[0.2em] uppercase text-[13px]">Our Expertise</span>
            </div>
            
            <h2 className="flex flex-col mb-10">
              <span className="text-5xl sm:text-6xl md:text-[70px] lg:text-[90px] font-black text-white tracking-tighter leading-[0.9]" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                {line1}
              </span>
              <span className="text-5xl sm:text-6xl md:text-[75px] lg:text-[100px] italic text-white tracking-tight leading-[0.9] pl-6 md:pl-10" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                {line2}<span className="text-[#e74c3c] font-black" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>.</span>
              </span>
            </h2>

            <div className="h-[80px] md:h-[100px]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeIdx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="text-gray-300 text-[14px] md:text-[16px] lg:text-[18px] font-medium leading-relaxed max-w-full md:max-w-[420px]"
                >
                  {categories[activeIdx].desc}
                </motion.p>
              </AnimatePresence>
            </div>
            
            <Link href="/projects" className="mt-4 md:mt-8 flex items-center gap-[16px] md:gap-[24px] border-[1.5px] border-white/30 rounded-full p-1.5 pl-6 md:pl-8 hover:bg-white/10 hover:border-white transition-all duration-300 group w-fit">
              <span className="text-white text-[12px] md:text-[13px] font-bold tracking-wide">Explore All Projects</span>
              <div className="bg-white rounded-full w-[36px] h-[36px] md:w-[46px] md:h-[46px] flex items-center justify-center group-hover:scale-105 transition-transform">
                <svg width="16" height="16" className="md:w-[18px] md:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Right Side: Interactive List */}
        <div className="md:w-6/12 flex flex-col w-full mt-10 md:mt-0">
          <div className="flex flex-col border-t border-white/10">
            {categories.map((cat, idx) => (
              <motion.div
                key={cat.id}
                className="group relative border-b border-white/10 py-6 md:py-10 cursor-pointer overflow-hidden flex items-center justify-between"
                onMouseEnter={() => setActiveIdx(idx)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                {/* Background hover effect block */}
                <div 
                  className={`absolute inset-0 bg-[#e74c3c]/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out origin-left ${activeIdx === idx ? 'translate-x-0 bg-[#e74c3c]/10' : ''}`}
                />
                
                <div className="relative z-10 flex items-center gap-6 md:gap-8 px-2 md:px-8">
                  <span className={`text-[11px] md:text-[13px] font-bold tracking-[0.2em] transition-colors duration-500 ${activeIdx === idx ? 'text-[#e74c3c]' : 'text-gray-500'}`}>
                    {cat.id}
                  </span>
                  <h3 className={`text-2xl sm:text-3xl md:text-5xl font-sans font-black tracking-tighter transition-all duration-500 ${activeIdx === idx ? 'text-white translate-x-4 md:translate-x-8' : 'text-white/40 group-hover:text-white group-hover:translate-x-2'}`}>
                    {cat.name}
                  </h3>
                </div>

                <div className="relative z-10 px-2 md:px-8 overflow-hidden">
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className={`md:w-[36px] md:h-[36px] transition-all duration-500 ${activeIdx === idx ? 'text-[#e74c3c] translate-x-0 opacity-100' : 'text-white/30 -translate-x-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-white'}`}
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
