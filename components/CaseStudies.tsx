'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const caseStudies = [
  {
    id: 1,
    title: 'Fulham Town Hall extension',
    description: 'Improvement on the floor plan and layout of a loft apartment in Paris to maximise the use of space and additional.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
    clipId: 'caseWave1'
  },
  {
    id: 2,
    title: 'The White Apartment',
    description: 'Redefining Urban Elegance: Bridging Heritage and Modern Living in an Iconic Residential Landmark.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
    clipId: 'caseWave2'
  }
];

export function CaseStudies() {
  return (
    <section className="w-full bg-gradient-to-b from-[#f5f5f5] to-[#ffffff] pt-24 pb-32">
      
      {/* SVG Definitions for the notched masks */}
      <svg width="0" height="0" className="absolute hidden">
        <defs>
          <clipPath id="caseWave1" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 L 0.15,0 C 0.225,0 0.225,0.08 0.3,0.08 L 0.7,0.08 C 0.775,0.08 0.775,0 0.85,0 L 1,0 L 1,1 L 0.85,1 C 0.775,1 0.775,0.92 0.7,0.92 L 0.3,0.92 C 0.225,0.92 0.225,1 0.15,1 L 0,1 Z" />
          </clipPath>
          <clipPath id="caseWave2" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 L 0.12,0 C 0.19,0 0.19,0.08 0.26,0.08 L 0.74,0.08 C 0.81,0.08 0.81,0 0.88,0 L 1,0 L 1,1 L 0.88,1 C 0.81,1 0.81,0.92 0.74,0.92 L 0.26,0.92 C 0.19,0.92 0.19,1 0.12,1 L 0,1 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6 relative">
          <h3 className="text-[13px] text-gray-900 font-bold tracking-wide flex items-center">
            <span className="inline-block mr-3 text-gray-900 text-[18px] leading-none mb-0.5">•</span>
            Recent case studies
          </h3>
          {/* Floating red dot */}
          <div className="w-[5px] h-[5px] bg-[#e74c3c] rounded-full absolute right-[10%] md:right-[25%]" />
        </div>

        {/* Case Studies List */}
        <div className="w-full flex flex-col">
          {caseStudies.map((study, index) => (
            <div key={study.id} className="w-full flex flex-col">
              
              <hr className="border-t border-gray-300" />
              
              <motion.div 
                className="w-full flex flex-col md:flex-row py-10 md:py-14 items-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                
                {/* Left Col (Text) */}
                <div className="w-full md:w-[45%] pr-0 md:pr-10 flex flex-col justify-center">
                  <h4 className="text-[24px] md:text-[19px] font-bold text-[#1a1a1a] tracking-tight">{study.title}</h4>
                  <p className="text-[14px] md:text-[11px] text-gray-500 font-medium leading-[1.7] mt-3 max-w-full md:max-w-[340px]">
                    {study.description}
                  </p>
                  
                  <button className="flex items-center gap-[24px] border-[1.5px] border-[#1a1a1a] rounded-full p-1 pl-6 hover:bg-[#1a1a1a] hover:text-white transition-colors group w-fit mt-6 md:mt-8">
                    <span className="text-current text-[11px] font-bold tracking-wide">View more</span>
                    <div className="bg-[#1a1a1a] rounded-full w-[34px] h-[34px] flex items-center justify-center group-hover:bg-white transition-colors">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white group-hover:text-[#1a1a1a]" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </div>
                  </button>
                </div>

                {/* Right Col (Image) */}
                <div className="w-full md:w-[55%] mt-8 md:mt-0 relative flex justify-end">
                  <div 
                    className="relative w-full aspect-video md:aspect-[21/9] overflow-hidden bg-gray-100" 
                    style={{ clipPath: `url(#${study.clipId})`, WebkitClipPath: `url(#${study.clipId})` }}
                  >
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-1000 ease-out"
                      sizes="(max-width: 768px) 100vw, 55vw"
                    />
                  </div>
                </div>

              </motion.div>
            </div>
          ))}
          
          <hr className="border-t border-gray-300" />
        </div>

      </div>
    </section>
  );
}
