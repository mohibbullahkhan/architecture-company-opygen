'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    id: 0,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    title1: "Building",
    title2: "Beyond",
    text: "According to Vitruvius, the architect should strive to fulfill\neach of these three attributes as well as possible."
  },
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    title1: "Modern",
    title2: "Design",
    text: "Creating sustainable, beautiful, and functional spaces\nthat inspire and elevate everyday life."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
    title1: "Future",
    title2: "Vision",
    text: "Pushing the boundaries of architectural innovation\nwith cutting-edge technology and materials."
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[700px] md:min-h-[900px] bg-[#1a1a1a] overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image 
            src={slide.image} 
            alt={slide.title1}
            fill
            className="object-cover object-center opacity-85"
            priority={index === 0}
          />
        </div>
      ))}
      
      {/* Dark overlay gradients for contrast */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 md:via-black/30 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 md:from-black/80 via-black/30 md:via-black/10 to-transparent pointer-events-none" />

      {/* Decorative Red Dots */}
      <div className="absolute w-[6px] h-[6px] bg-[#e74c3c] rounded-full top-[30%] left-[45%] z-10 hidden md:block" />
      <div className="absolute w-[5px] h-[5px] bg-[#e74c3c] rounded-full top-[40%] left-[30%] z-10 hidden md:block" />
      <div className="absolute w-[5px] h-[5px] bg-[#e74c3c] rounded-full top-[50%] left-[38%] z-10 hidden md:block" />

      {/* Main Content Container */}
      <div className="relative z-10 w-full h-full max-w-[1920px] mx-auto">
        
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
          >
            {/* Top Left Quote */}
            <div className="absolute top-[25%] md:top-[32%] left-[30px] md:left-[100px] max-w-[280px] md:max-w-[400px]">
              <p className="text-white text-[13px] md:text-[14px] font-medium leading-[1.8] tracking-wide" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                {slide.text.split('\n').map((line, i) => (
                  <span key={i}>{line}<br/></span>
                ))}
              </p>
            </div>

            {/* Main Headline */}
            <div className="absolute bottom-[20%] md:bottom-[22%] left-[30px] md:left-[100px]">
              <h1 className="flex flex-col">
                <span className="text-white text-[70px] sm:text-[90px] md:text-[150px] font-black font-sans tracking-tighter leading-[0.8] mb-2 md:mb-2" style={{ textShadow: '0 4px 16px rgba(0,0,0,0.4)' }}>
                  {slide.title1}
                </span>
                <div className="flex items-end pl-[30px] sm:pl-[50px] md:pl-[150px]">
                  <span className="text-white text-[80px] sm:text-[100px] md:text-[170px] font-display italic tracking-tighter leading-[0.8] relative pr-3 md:pr-6" style={{ textShadow: '0 4px 16px rgba(0,0,0,0.4)' }}>
                    {slide.title2}<span className="text-[#e74c3c] absolute bottom-[10px] md:bottom-[24px] -right-[5px] md:-right-[12px] text-[20px] md:text-[40px] leading-none font-sans font-bold">.</span>
                  </span>
                  
                  <button className="relative -top-[4px] md:-top-[16px] left-[10px] md:left-[20px] flex items-center gap-[12px] md:gap-[24px] border-[1.5px] border-white/80 rounded-full p-1 md:p-1.5 pl-4 md:pl-8 hover:bg-white/10 transition-colors group bg-white/5 backdrop-blur-sm shadow-lg">
                    <span className="text-white text-[11px] md:text-[14px] font-semibold tracking-wide hidden sm:block">Contact us</span>
                    <div className="bg-white rounded-full w-[36px] h-[36px] md:w-[46px] md:h-[46px] flex items-center justify-center">
                      <svg width="16" height="16" className="md:w-[18px] md:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </div>
                  </button>
                </div>
              </h1>
            </div>
          </div>
        ))}

        {/* Static Bottom Right Text */}
        <div className="absolute bottom-[24%] right-[100px] max-w-[300px] hidden lg:block">
          <h3 className="text-white font-bold text-[34px] font-sans leading-[1.1] mb-4">Architecture<br/>can mean</h3>
          <p className="text-gray-200 text-[14px] font-medium leading-relaxed opacity-90">
            A general term to describe buildings<br/>
            and other physical structures.
          </p>
        </div>
      </div>

      {/* Bottom Mask */}
      <div className="absolute bottom-0 left-0 right-0 w-full flex justify-center items-end z-20 px-4 md:px-0">
        <div className="w-full h-[30px] bg-white absolute bottom-0 left-0 right-0" />
        <div className="relative w-full max-w-[650px] h-[60px] md:h-[86px] bg-white rounded-t-[30px] md:rounded-t-[40px] flex justify-center items-start pt-[20px] md:pt-[34px]">
          {/* Left inverted corner */}
          <div className="absolute bottom-0 -left-[20px] md:-left-[40px] w-[20px] md:w-[40px] h-[20px] md:h-[40px] bg-transparent rounded-br-[20px] md:rounded-br-[40px] shadow-[10px_10px_0_10px_white] md:shadow-[20px_20px_0_20px_white]" />
          {/* Right inverted corner */}
          <div className="absolute bottom-0 -right-[20px] md:-right-[40px] w-[20px] md:w-[40px] h-[20px] md:h-[40px] bg-transparent rounded-bl-[20px] md:rounded-bl-[40px] shadow-[-10px_10px_0_10px_white] md:shadow-[-20px_20px_0_20px_white]" />

          {/* Pagination Dots (Interactive) */}
          <div className="flex items-center gap-[10px] md:gap-[14px]">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2 md:h-2.5 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'w-8 md:w-10 bg-[#1a1a1a]' : 'w-2 md:w-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
