'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';

const caseStudies = [
  {
    id: '1',
    title: 'Fulham Town Hall extension',
    description: 'Improvements at the then-start and future of a loft apartment on how to maximize the use of space and individual character',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80',
  },
  {
    id: '2',
    title: 'The White Apartment',
    description: 'Architectural Film Magazine Bridging Heritage and Modern Living on to Some Residential Landmark',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
  },
];

export default function CaseStudyPage({ params }: { params: { id: string } }) {
  // Use static data instead of RTK Query
  const study = caseStudies.find(s => s.id === params.id || s.id === String(params.id));

  if (!study) {
    return (
      <main className="min-h-screen bg-[#1a1a1a] text-white flex items-center justify-center">
        <Navbar />
        <h1 className="text-2xl font-bold">Case Study not found</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f9f9f9]">
      <Navbar />

      <section className="relative w-full h-[60vh] min-h-[500px]">
        <Image
          src={study.image}
          alt={study.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center px-6 max-w-4xl"
          >
            <span className="text-[#c0392b] font-bold tracking-widest uppercase mb-4 block">Case Study {study.id}</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">{study.title}</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">{study.description}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-10 max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl p-10 md:p-16 shadow-xl -mt-32 relative z-10">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">Project Overview</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-12">
            The {study.title} required innovative thinking and meticulous planning to achieve the desired outcome. 
            Our team focused on delivering high-quality architectural solutions while adhering to strict environmental 
            and structural standards. This project stands as a testament to our commitment to excellence.
          </p>

          <div className="grid md:grid-cols-3 gap-8 border-t border-gray-200 pt-12">
            <div>
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Category</h4>
              <p className="text-lg font-bold text-[#1a1a1a]">Architecture</p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Completion</h4>
              <p className="text-lg font-bold text-[#1a1a1a]">2024</p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Client</h4>
              <p className="text-lg font-bold text-[#1a1a1a]">Confidential</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
