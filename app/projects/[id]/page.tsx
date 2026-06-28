'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { projects } from '@/app/api/projects/data';

export default function SingleProjectPage({ params }: { params: { id: string } }) {
  // Use static data instead of RTK Query
  const project = projects.find(p => p.id === params.id || p.id === String(params.id));
  const relatedProjects = projects.filter(p => p.category === project?.category && p.id !== project?.id).slice(0, 3);

  if (!project) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <Navbar />
        <p className="text-gray-500 font-medium text-2xl mt-20">Project not found.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative w-full h-[70vh] overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        
        <div className="absolute bottom-16 left-12 md:left-24 z-10 flex flex-col items-start">
          <div className="flex gap-4 items-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9]">{project.name.split(' ')[0]}</h1>
            <h2 className="text-5xl md:text-7xl italic font-sans text-white tracking-tight">{project.name.split(' ').slice(1).join(' ')}</h2>
          </div>
          <p className="text-sm text-white/70 tracking-wide mt-4">
            {project.location}
          </p>
          <div className="mt-4 border border-white text-white text-xs rounded-full px-4 py-1.5 uppercase tracking-widest font-bold">
            {project.category}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 px-10 max-w-6xl mx-auto">
        
        {/* Info Row */}
        <div className="grid grid-cols-3 gap-8 mb-16">
          {[
            { label: 'CLIENT', value: project.client },
            { label: 'YEAR', value: project.year },
            { label: 'AREA', value: project.area },
          ].map((info, idx) => (
            <div key={info.label} className={`flex flex-col gap-2 ${idx !== 2 ? 'border-r border-gray-200' : ''}`}>
              <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">{info.label}</span>
              <span className="text-sm font-bold text-gray-900">{info.value}</span>
            </div>
          ))}
        </div>
        
        <hr className="border-t border-gray-200" />

        {/* Description */}
        <div className="py-20 flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="md:w-1/4">
            <h3 className="text-xs text-gray-500 font-bold tracking-wide uppercase flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-[#c0392b] rounded-full inline-block" />
              About Project
            </h3>
          </div>
          <div className="md:w-3/4">
            <p className="text-2xl md:text-4xl font-bold text-gray-900 leading-snug tracking-tight">
              {project.description}
            </p>
          </div>
        </div>

        <hr className="border-t border-gray-200" />

        {/* Image Gallery */}
        <div className="py-20">
          <h3 className="text-xs text-gray-500 font-bold tracking-wide uppercase flex items-center gap-3 mb-12">
            <span className="w-1.5 h-1.5 bg-[#c0392b] rounded-full inline-block" />
            Project Gallery
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1000&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1600566753086-00f18efc2294?q=80&w=1000&auto=format&fit=crop'
            ].map((img, idx) => (
              <motion.div
                key={idx}
                className={`relative w-full ${idx % 2 === 0 ? 'h-64 md:mt-16' : 'h-80'} overflow-hidden bg-gray-100`}
                style={{ clipPath: 'url(#galleryWave)', WebkitClipPath: 'url(#galleryWave)' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Image
                  src={img}
                  alt={`Gallery Image ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
        
        <hr className="border-t border-gray-200" />

        {/* Related Projects */}
        <div className="py-20">
          <h3 className="text-xs text-gray-500 font-bold tracking-wide uppercase flex items-center gap-3 mb-12">
            <span className="w-1.5 h-1.5 bg-[#c0392b] rounded-full inline-block" />
            Related Projects
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProjects?.map((related, idx) => (
              <motion.div
                key={related.id}
                className="flex flex-col group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link href={`/projects/${related.id}`}>
                  <div 
                    className="relative w-full h-72 overflow-hidden bg-gray-100 mb-5"
                    style={{ clipPath: 'url(#galleryWave)', WebkitClipPath: 'url(#galleryWave)' }}
                  >
                    <Image
                      src={related.image}
                      alt={related.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>
                  <h4 className="text-[15px] font-bold text-[#1a1a1a]">{related.name}</h4>
                  <p className="text-xs text-gray-400 mt-1">{related.location}</p>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Link href="/projects">
              <button className="bg-[#1a1a1a] text-white rounded-full px-8 py-3 text-sm font-bold tracking-wide hover:bg-gray-800 transition-colors">
                View All Projects ›
              </button>
            </Link>
          </div>
        </div>

      </section>

      {/* SVG Definitions */}
      <svg width="0" height="0" className="absolute hidden">
        <defs>
          <clipPath id="galleryWave" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 L 0.2,0 C 0.3,0 0.3,0.06 0.4,0.06 L 0.6,0.06 C 0.7,0.06 0.7,0 0.8,0 L 1,0 L 1,1 L 0.8,1 C 0.7,1 0.7,0.94 0.6,0.94 L 0.4,0.94 C 0.3,0.94 0.3,1 0.2,1 L 0,1 Z" />
          </clipPath>
        </defs>
      </svg>

      <Footer />
    </main>
  );
}
