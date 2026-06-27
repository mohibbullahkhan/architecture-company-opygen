'use client';



export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-20 md:pt-24 pb-12 w-full mt-10 md:mt-20 relative overflow-hidden">
      
      {/* Subtle Top Border/Notch if desired, but we'll stick to a clean flat top or subtle curved top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/20" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 md:mb-20">
          
          {/* Brand & Intro (Col 1-5) */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="text-xl md:text-2xl font-bold tracking-widest uppercase mb-6 text-white">
                DNOIN.INC
              </h2>
              <p className="text-gray-400 text-[13px] font-medium leading-[1.8] max-w-full md:max-w-[320px]">
                The art and science of designing buildings and nonbuilding structures. The style of design and method of construction of buildings and other physical structures.
              </p>
            </div>
            
            <div className="mt-12 md:mt-0">
              <h3 className="text-4xl md:text-6xl font-display italic text-white mb-4">
                Let&apos;s build <br/>together.
              </h3>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1" />

          {/* Links 1 (Col 7-8) */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] font-bold tracking-widest uppercase text-white/50 mb-6 md:mb-8">Navigation</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="text-[14px] font-medium text-white hover:text-gray-300 transition-colors">Projects</a></li>
              <li><a href="#" className="text-[14px] font-medium text-white hover:text-gray-300 transition-colors">About Us</a></li>
              <li><a href="#" className="text-[14px] font-medium text-white hover:text-gray-300 transition-colors">Blog</a></li>
              <li><a href="#" className="text-[14px] font-medium text-white hover:text-gray-300 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact (Col 10-12) */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] font-bold tracking-widest uppercase text-white/50 mb-6 md:mb-8">Contact Us</h4>
            <ul className="flex flex-col gap-4 text-[14px] font-medium text-white">
              <li className="text-gray-300">New York, NY 10012, US</li>
              <li><a href="mailto:hello@dnoin.inc" className="hover:text-gray-300 transition-colors">hello@dnoin.inc</a></li>
              <li><a href="tel:+1234567890" className="hover:text-gray-300 transition-colors">+ 01 234 567 89</a></li>
            </ul>

            <div className="mt-10 md:mt-12 flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#1a1a1a] transition-all">
                {/* Dummy social icons */}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#1a1a1a] transition-all">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-[11px] text-gray-500 font-medium text-center md:text-left gap-4 md:gap-0">
          <p>© {new Date().getFullYear()} DNOIN.INC. All rights reserved.</p>
          <div className="flex gap-6 mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
