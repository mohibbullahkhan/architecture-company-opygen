'use client';

import { useState } from 'react';
import Image from 'next/image';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    // Simulate submission
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', projectType: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative w-full h-[45vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2000&auto=format&fit=crop"
          alt="Contact Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Decorative red dots */}
        <div className="absolute top-[40%] right-[20%] w-2.5 h-2.5 bg-[#c0392b] rounded-full hidden md:block" />
        <div className="absolute top-[70%] left-[30%] w-1.5 h-1.5 bg-[#c0392b] rounded-full hidden md:block" />
        
        <div className="absolute bottom-12 left-12 md:left-24 z-10">
          <h1 className="text-6xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9]">Get In</h1>
          <h2 className="text-6xl md:text-7xl italic font-display text-white tracking-tight">Touch</h2>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-20">
          
          {/* Left: Contact Info */}
          <div className="w-full md:w-1/2">
            <h3 className="text-xs text-gray-500 font-bold tracking-wide uppercase flex items-center gap-2 mb-8">
              <span className="w-1.5 h-1.5 bg-[#c0392b] rounded-full inline-block" />
              Contact Details
            </h3>
            
            <hr className="border-t border-gray-200" />
            
            {[
              { label: 'LOCATION', value: '123 Architecture Ave, New York, NY 10001' },
              { label: 'EMAIL', value: 'hello@dnoin.inc' },
              { label: 'PHONE', value: '+1 (555) 000-0000' },
              { label: 'WORKING HOURS', value: 'Mon–Fri, 9:00AM – 6:00PM' },
            ].map((info) => (
              <div key={info.label}>
                <div className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <span className="text-xs text-gray-400 uppercase tracking-widest">{info.label}</span>
                  <span className="text-sm font-bold text-gray-900">{info.value}</span>
                </div>
                <hr className="border-t border-gray-200" />
              </div>
            ))}

            <div className="mt-8 flex flex-wrap items-center gap-6">
              {['Instagram', 'LinkedIn', 'Twitter', 'Behance'].map((social) => (
                <a key={social} href="#" className="group flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-[#c0392b] transition-colors">
                  {social}
                  <span className="text-gray-400 group-hover:text-[#c0392b] transition-colors">↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="w-full md:w-1/2">
            {isSubmitted && (
              <div className="mb-8 p-4 bg-green-50 border border-green-200 text-green-800 text-sm font-medium rounded-lg">
                Thank you! Your message has been received. We will get back to you shortly.
              </div>
            )}
            
            <div className="flex flex-col">
              
              <div className="mb-8">
                <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Your Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full border-b border-gray-300 py-3 text-sm text-gray-900 bg-transparent outline-none focus:border-gray-900 transition-colors placeholder:text-gray-300"
                />
              </div>

              <div className="mb-8">
                <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full border-b border-gray-300 py-3 text-sm text-gray-900 bg-transparent outline-none focus:border-gray-900 transition-colors placeholder:text-gray-300"
                />
              </div>

              <div className="mb-8">
                <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Project Type</label>
                <input 
                  type="text" 
                  placeholder="Residential / Commercial"
                  value={formData.projectType}
                  onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                  className="w-full border-b border-gray-300 py-3 text-sm text-gray-900 bg-transparent outline-none focus:border-gray-900 transition-colors placeholder:text-gray-300"
                />
              </div>

              <div className="mb-10">
                <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full border-b border-gray-300 py-3 text-sm text-gray-900 bg-transparent outline-none focus:border-gray-900 transition-colors placeholder:text-gray-300 resize-none"
                />
              </div>

              <button 
                onClick={handleSubmit}
                className="bg-black text-white rounded-full px-8 py-3.5 text-sm font-medium w-full text-center hover:bg-gray-800 transition-colors"
              >
                Send Message ›
              </button>

            </div>
          </div>
          
        </div>
      </section>

      {/* Map / Studio Image */}
      <section className="w-full">
        <hr className="border-t border-gray-200 max-w-6xl mx-auto mb-16" />
        
        <div 
          className="relative w-full h-72 overflow-hidden bg-gray-100"
          style={{ clipPath: 'url(#topWaveClip)', WebkitClipPath: 'url(#topWaveClip)' }}
        >
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
            alt="Studio"
            fill
            className="object-cover"
          />
        </div>
        <div className="text-center mt-4 mb-20">
          <p className="text-xs text-gray-400 tracking-wide">
            <span className="font-bold mr-2">•</span>
            Visit our studio
          </p>
        </div>
      </section>

      {/* SVG Definitions */}
      <svg width="0" height="0" className="absolute hidden">
        <defs>
          {/* Wave top, flat bottom */}
          <clipPath id="topWaveClip" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 L 0.42,0 C 0.46,0 0.46,0.12 0.50,0.12 C 0.54,0.12 0.54,0 0.58,0 L 1,0 L 1,1 L 0,1 Z" />
          </clipPath>
        </defs>
      </svg>

      <Footer />
    </main>
  );
}
