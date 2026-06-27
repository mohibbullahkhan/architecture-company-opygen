'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

const text = "The art and science of designing buildings and nonbuilding structures. The style of design and method of construction of buildings and other physical structures.";

function Word({ children, progress, range }: { children: string, progress: MotionValue<number>, range: [number, number] }) {
  // Interpolates color from gray-300 to a dark black
  const color = useTransform(progress, range, ["#d1d5db", "#1a1a1a"]);
  
  return (
    <motion.span style={{ color, transition: "color 0.1s ease-out" }}>
      {children}
    </motion.span>
  );
}

export function AboutUs() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 50%"]
  });

  const words = text.split(" ");

  return (
    <section id="about" className="bg-white w-full">
      {/* Top Divider */}
      <hr className="border-t border-gray-200" />
      
      <div className="py-24 px-6 md:px-10 max-w-[1400px] mx-auto flex flex-col md:flex-row gap-12 md:gap-0">
        
        {/* Left Column - 25% */}
        <div className="md:w-1/4 pt-4">
          <span className="text-[13px] text-gray-900 font-bold tracking-wide flex items-center">
            <span className="inline-block mr-3 text-gray-900 text-lg leading-none mb-0.5">•</span>
            About Us
          </span>
        </div>

        {/* Right Column - 75% */}
        <div className="md:w-3/4">
          <div ref={ref} className="relative">
            <p className="text-[32px] md:text-[44px] font-bold leading-[1.25] tracking-[-0.02em] max-w-[900px] font-sans flex flex-wrap">
              {words.map((word, i) => {
                const start = i / words.length;
                const end = start + (1 / words.length);
                return (
                  <span key={i} className="inline-block mr-2 md:mr-3 mb-1">
                    <Word progress={scrollYProgress} range={[start, end]}>
                      {word}
                    </Word>
                  </span>
                );
              })}
            </p>
            {/* Red Dot placed under the text */}
            <motion.div 
              className="w-2 h-2 bg-[#e74c3c] rounded-full mt-6 ml-[180px]"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.5, type: "spring" }}
            />
          </div>
        </div>

      </div>

      {/* Bottom Divider */}
      <hr className="border-t border-gray-200" />
    </section>
  );
}
