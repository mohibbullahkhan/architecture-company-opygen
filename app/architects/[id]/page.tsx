'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { architects } from '@/app/api/architects/data';

export default function ArchitectPage({ params }: { params: { id: string } }) {
  // Use static data instead of RTK Query
  const architect = architects.find(a => a.id === params.id || a.id === String(params.id));

  if (!architect) {
    return (
      <main className="min-h-screen bg-[#f9f9f9] flex items-center justify-center">
        <Navbar />
        <h1 className="text-2xl font-bold">Architect not found</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f9f9f9]">
      <Navbar />

      <section className="pt-32 pb-24 px-6 md:px-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full md:w-2/5 aspect-[3/4] relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src={architect.image}
              alt={architect.name}
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full md:w-3/5 pt-8"
          >
            <h1 className="text-5xl md:text-7xl font-display italic font-bold mb-4">{architect.name}</h1>
            <h2 className="text-xl text-[#c0392b] font-bold uppercase tracking-widest mb-8">{architect.specialty}</h2>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              {architect.bio}
            </p>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6 border-b border-gray-200 pb-2">Location</h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-white border border-gray-200 px-6 py-2 rounded-full text-sm font-bold text-[#1a1a1a]">
                  {architect.location}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
