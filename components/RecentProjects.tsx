'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'Relax Building',
    author: 'Cameron William',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Easy Tower Central',
    author: 'Cindy Natelia',
    image: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Business Building',
    author: 'Bramoto Hudsen',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop', // Fixed Image
  },
  {
    id: 4,
    title: 'Sweet Interior',
    author: 'Kaira Listya',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop',
  }
];

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax effect for the image
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <Link href={`/projects/${project.id}`} className={`block w-full ${index % 2 !== 0 ? 'md:translate-y-16' : ''}`}>
      <motion.div 
        ref={ref}
        className={`group relative w-full aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] cursor-pointer`}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }} // smooth spring-like easing
      >
        {/* Image with Parallax */}
        <motion.div style={{ y }} className="absolute inset-0 w-full h-[130%] -top-[15%]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-1000 ease-[0.25,1,0.5,1] group-hover:scale-[1.08]"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </motion.div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/95 via-[#1a1a1a]/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-700 ease-in-out" />
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-[0.25,1,0.5,1]">
          <motion.div
            initial={false}
            className="overflow-hidden"
          >
            <h3 className="text-[18px] md:text-[22px] font-bold text-white mb-2 tracking-tight font-sans">
              {project.title}
            </h3>
          </motion.div>
          
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="h-[1px] w-4 bg-[#e74c3c] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 delay-100 ease-[0.25,1,0.5,1]" />
            <p className="text-[13px] md:text-[14px] text-gray-300 font-medium tracking-wide opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 delay-100 ease-[0.25,1,0.5,1]">
              by {project.author}
            </p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export function RecentProjects() {
  return (
    <section id="projects" className="bg-[#f9f9f9] w-full pt-10 overflow-hidden">
      <div className="pt-24 pb-32 px-6 md:px-10 max-w-[1400px] mx-auto relative">
        
        {/* Floating Red Dots (Decorative) */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[5px] h-[5px] bg-[#e74c3c] rounded-full top-[15%] right-[40%] hidden md:block" 
        />
        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute w-[4px] h-[4px] bg-[#e74c3c] rounded-full top-[25%] right-[25%] hidden md:block" 
        />

        {/* Top Row (3 columns) */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16 lg:mb-24 items-start lg:items-center">
          
          {/* Col 1 */}
          <div className="lg:w-1/3">
            <motion.h2 
              className="flex flex-col leading-[0.85]"
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            >
              <span className="text-[50px] md:text-[75px] font-black text-[#1a1a1a] font-sans tracking-tighter">Recent</span>
              <span className="text-[55px] md:text-[85px] font-display italic text-[#1a1a1a] tracking-tight">Projects</span>
            </motion.h2>
          </div>

          {/* Col 2 */}
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-[13px] text-gray-500 leading-[1.8] max-w-[320px] font-medium">
              After completing your year 12 education and earning the necessary scores, you may apply for a bachelor&apos;s degree in architecture. To qualify, students can complete one of three entrance exams.
            </p>
          </motion.div>

          {/* Col 3 */}
          <motion.div 
            className="lg:w-1/3 w-full flex justify-start lg:justify-end items-center mt-4 lg:mt-0"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link href="/projects" className="flex items-center gap-[24px] border-[1.5px] border-[#1a1a1a] rounded-full p-1.5 pl-8 hover:bg-[#1a1a1a] hover:text-white transition-colors duration-500 group h-fit">
              <span className="text-current text-[13px] font-bold tracking-wide">View All</span>
              <div className="bg-[#1a1a1a] rounded-full w-[44px] h-[44px] flex items-center justify-center group-hover:bg-white group-hover:border-white transition-colors duration-500">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white group-hover:text-[#1a1a1a]" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </div>
            </Link>
          </motion.div>

        </div>

        {/* Project Cards Grid - Masonry effect on Desktop/Tablet */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:pb-16">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
