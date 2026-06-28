'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Architects } from '@/components/Architects';
import { ProjectCategoriesHero } from '@/components/ProjectCategoriesHero';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop"
          alt="About Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Floating red dots */}
        <div className="absolute top-[30%] left-[20%] w-2 h-2 bg-[#c0392b] rounded-full hidden md:block" />
        <div className="absolute top-[60%] right-[30%] w-2.5 h-2.5 bg-[#c0392b] rounded-full hidden md:block" />
        
        <div className="absolute bottom-16 left-12 md:left-24 z-10">
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9]" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>About</h1>
          <h2 className="text-6xl md:text-8xl italic text-white tracking-tight" style={{ fontFamily: 'var(--font-playfair), serif' }}>DNOIN.INC</h2>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="md:w-1/4">
            <h3 className="text-sm text-gray-500 font-bold tracking-wide uppercase flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-[#c0392b] rounded-full inline-block" />
              Our Story
            </h3>
          </div>
          <div className="md:w-3/4">
            <p className="text-2xl md:text-4xl font-bold text-gray-900 leading-snug tracking-tight">
              Founded in 2010, DNOIN.INC has been redefining architectural boundaries across North America. We believe every structure tells a story.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-t border-gray-200" />

      {/* Stats Row */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {[
            { value: '250+', label: 'Projects' },
            { value: '15+', label: 'Years' },
            { value: '40+', label: 'Awards' },
            { value: '12', label: 'Countries' },
          ].map((stat, idx) => (
            <motion.div 
              key={stat.label}
              className={`flex flex-col items-center justify-center text-center ${idx !== 3 ? 'md:border-r border-gray-200' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h4 className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">{stat.value}</h4>
              <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team / Architects */}
      <div className="pt-24 pb-8">
        <Architects />
      </div>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-10">
          <div className="grid md:grid-cols-3 gap-16 md:gap-8">
            {[
              { num: '01', title: 'Precision', desc: 'Every line, every angle, every material choice is meticulously planned and executed with absolute precision to ensure structural integrity and aesthetic perfection.' },
              { num: '02', title: 'Sustainability', desc: 'We build for the future. Our designs prioritize energy efficiency, renewable materials, and a minimal carbon footprint without compromising on luxury.' },
              { num: '03', title: 'Innovation', desc: 'Pushing the boundaries of what is possible in modern architecture through cutting-edge technology, parametric design, and bold conceptual thinking.' }
            ].map((val, idx) => (
              <motion.div 
                key={val.num}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <div className="text-[120px] font-bold text-gray-200 leading-none absolute -top-12 -left-6 z-0 select-none">
                  {val.num}
                </div>
                <div className="relative z-10 pt-12">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">{val.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{val.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <ProjectCategoriesHero line1="Our" line2="Expertise" />

      <Footer />
    </main>
  );
}
