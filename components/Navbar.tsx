'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar({ theme = 'dark' }: { theme?: 'dark' | 'light' }) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    // Trigger on mount
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'Projects', path: '/projects' },
    { name: 'About us', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const isLight = theme === 'light' || scrolled;

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[60] h-[80px] md:h-[100px] flex items-start px-6 md:px-12 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="w-full max-w-[1920px] mx-auto flex justify-between items-center md:items-start h-full relative">
          
          {/* Logo */}
          <div className="flex-1 md:pt-[30px] pt-4 flex items-center h-full md:h-auto">
            <Link href="/" className={`text-[18px] md:text-[20px] font-bold tracking-[0.15em] uppercase font-sans transition-colors ${isLight ? 'text-[#1a1a1a]' : 'text-white'}`}>
              DNOIN.INC
            </Link>
          </div>

          {/* Center Nav Island (Desktop Only) */}
          <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 h-[76px]">
            <div className={`relative w-[700px] h-full rounded-b-[40px] flex justify-center items-center pt-2 transition-colors ${scrolled ? 'bg-transparent' : 'bg-white'}`}>
              {/* Left inverted corner - Hide when scrolled */}
              <div className={`absolute top-0 -left-[40px] w-[40px] h-[40px] bg-transparent rounded-tr-[40px] shadow-[20px_-20px_0_20px_white] transition-opacity ${scrolled ? 'opacity-0' : 'opacity-100'}`} />
              {/* Right inverted corner - Hide when scrolled */}
              <div className={`absolute top-0 -right-[40px] w-[40px] h-[40px] bg-transparent rounded-tl-[40px] shadow-[-20px_-20px_0_20px_white] transition-opacity ${scrolled ? 'opacity-0' : 'opacity-100'}`} />
              
              <div className="flex items-center gap-[60px] text-[#1a1a1a] text-[13px] tracking-wide">
                {navLinks.map(link => {
                  const isActive = pathname.startsWith(link.path) && link.path !== '/' || (pathname === '/' && link.path === '/');
                  return (
                    <Link 
                      key={link.path} 
                      href={link.path} 
                      className={`${isActive ? 'font-black' : 'font-semibold text-gray-500'} hover:text-[#c0392b] transition-colors`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right CTA (Desktop) */}
          <div className="hidden lg:flex flex-1 justify-end pt-[22px]">
            <Link href="/contact" className={`flex items-center gap-[18px] border-[1.5px] rounded-full p-1 pl-7 transition-colors group h-fit ${isLight ? 'border-[#1a1a1a]/20 hover:bg-[#1a1a1a]/5' : 'border-white/80 hover:bg-white/10'}`}>
              <span className={`text-[13px] font-bold tracking-[0.05em] ${isLight ? 'text-[#1a1a1a]' : 'text-white'}`}>Let&apos;s Talk</span>
              <div className={`rounded-full p-2.5 transition-colors ${isLight ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={isLight ? 'white' : 'black'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </div>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex-1 flex justify-end pt-4 h-full items-center md:items-start md:h-auto">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 z-[70] relative ${isLight && !isMobileMenuOpen ? 'text-[#1a1a1a]' : 'text-white'}`}
            >
              {isMobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h16M4 6h16M4 18h16"/></svg>
              )}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#1a1a1a] z-[55] lg:hidden flex flex-col justify-center items-center px-6"
          >
            <div className="flex flex-col gap-8 text-center w-full">
              {navLinks.map((link, i) => {
                const isActive = pathname.startsWith(link.path);
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link 
                      href={link.path} 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-3xl font-display italic tracking-wider ${isActive ? 'text-white' : 'text-gray-400'}`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
              
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 mx-auto flex items-center gap-[18px] border-[1.5px] border-white/80 rounded-full p-2 pl-8 hover:bg-white/10 transition-colors w-fit"
              >
                <span className="text-white text-[14px] font-semibold tracking-wide">Get started</span>
                <div className="bg-white rounded-full w-[40px] h-[40px] flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </div>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
