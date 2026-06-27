'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const architects = [
  {
    id: 1,
    name: 'Max Abramovitz',
    description: 'Hathor, relief on capitals at Philae island, southern Egypt.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Cameron Williamson',
    description: 'Brighton, Brighton and Hove, United Kingdom',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Pietro Belluschi',
    description: 'Cushion capital and early English Gothic foliated capital.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=256&auto=format&fit=crop'
  }
];

export function Architects() {
  const [hoveredId, setHoveredId] = useState<number>(2);

  return (
    <section className="w-full bg-gradient-to-b from-[#f9f9f9] to-[#f2f2f2] pt-20 md:pt-32 pb-24 md:pb-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        
        {/* Top Heading Row */}
        <div className="flex flex-col md:flex-row w-full mb-8 md:mb-0">
          <div className="w-full md:w-[30%] pt-2 mb-4 md:mb-0">
            <h3 className="text-[13px] text-gray-900 font-bold tracking-wide flex items-center">
              <span className="inline-block mr-3 text-gray-900 text-[18px] leading-none mb-0.5">•</span>
              Our Architects
            </h3>
          </div>
          <div className="w-full md:w-[70%] border-b border-gray-300"></div>
        </div>

        {/* Architect Rows */}
        <div className="flex flex-col w-full">
          {architects.map((arch) => {
            const isHovered = hoveredId === arch.id;
            return (
              <Link 
                href={`/architects/${arch.id}`}
                key={arch.id}
                className="flex flex-col md:flex-row w-full group cursor-pointer border-b md:border-none border-gray-200"
                onMouseEnter={() => setHoveredId(arch.id)}
              >
                {/* Left Column (Image Container) */}
                <div className="w-full md:w-[30%] flex justify-start md:justify-end pr-0 md:pr-16 items-center py-6 md:py-0 order-2 md:order-1">
                  <motion.div 
                    initial={false}
                    animate={{ opacity: isHovered ? 1 : 0.4, scale: isHovered ? 1 : 0.95 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="relative w-20 h-20 md:w-24 md:h-24"
                  >
                    <Image
                      src={arch.image}
                      alt={arch.name}
                      fill
                      className={`object-cover shadow-lg ${isHovered ? 'md:block' : 'md:hidden'}`}
                      sizes="(max-width: 768px) 80px, 96px"
                    />
                  </motion.div>
                </div>

                {/* Right Column (Text Data) */}
                <div className="w-full md:w-[70%] md:border-b border-gray-300 py-6 md:py-10 flex flex-col md:flex-row items-start md:items-center justify-between transition-colors duration-300 gap-4 md:gap-0 order-1 md:order-2">
                  
                  {/* Name */}
                  <div className="w-full md:w-[35%]">
                    <h4 className={`text-[20px] md:text-[17px] tracking-tight transition-all duration-300 font-sans ${isHovered ? 'text-[#1a1a1a] font-bold' : 'text-gray-400 font-semibold'}`}>
                      {arch.name}
                    </h4>
                  </div>
                  
                  {/* Description */}
                  <div className={`w-full md:w-[45%] flex items-start text-[13px] md:text-[11px] leading-[1.6] transition-all duration-300 ${isHovered ? 'text-[#1a1a1a] font-bold' : 'text-gray-400 font-medium'}`}>
                    <span className="mr-2 mt-[1px] hidden md:inline">•</span>
                    <p>{arch.description}</p>
                  </div>
                  
                  {/* Link */}
                  <div className="w-full md:w-[20%] text-left md:text-right mt-2 md:mt-0">
                    <span className={`text-[12px] md:text-[11px] tracking-wide transition-all duration-300 underline md:no-underline ${isHovered ? 'text-[#1a1a1a] font-bold' : 'text-gray-400 font-medium'}`}>
                      View Profile
                    </span>
                  </div>

                  </div>
                </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
