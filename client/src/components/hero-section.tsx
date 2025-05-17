import React from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section 
      id="hero" 
      ref={ref}
      className={`relative overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 pt-28 pb-20 md:pt-40 md:pb-32 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
    >
      {/* Accent circles */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/10 filter blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-secondary/10 filter blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-accent/5 filter blur-3xl"></div>
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <div className="inline-block px-4 py-1 bg-primary/10 backdrop-blur-sm rounded-full text-primary font-medium text-sm mb-6">
              Edge‑to‑Cloud Innovators | Full‑Stack Embedded & Consulting
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span className="block">Bridging</span>
              <span className="text-primary">Physical</span>
              <span> & </span>
              <span className="text-secondary">Digital</span>
              <span> Worlds</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-xl">
              A tight‑knit squad of engineers and hardware maestros crafting resilient solutions that power tomorrow's smart devices—today.
            </p>
            <div className="space-y-2 mb-8 max-w-xl">
              <p className="text-base md:text-lg text-gray-300 flex items-start">
                <span className="text-primary text-xl mr-2">✓</span>
                <span>Rapid prototyping in just 2 weeks</span>
              </p>
              <p className="text-base md:text-lg text-gray-300 flex items-start">
                <span className="text-primary text-xl mr-2">✓</span>
                <span>Top 3% Upwork Agency | 95% Job Success</span>
              </p>
              <p className="text-base md:text-lg text-gray-300 flex items-start">
                <span className="text-primary text-xl mr-2">✓</span>
                <span>End-to-End Security from bootloader to cloud</span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#contact" 
                className="group flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-md hover:bg-primary/90 transition-all duration-300 shadow-lg text-center text-lg"
              >
                Free Technical Consultation
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a 
                href="#services" 
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 font-semibold rounded-md hover:bg-white/20 transition-colors duration-200 text-center text-lg"
              >
                View Engineering Services
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-accent/80 filter blur-sm"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-secondary/50 filter blur-sm"></div>
              
              {/* Main image - circuit board or embedded system */}
              <img 
                src={new URL("../assets/others/hero-img.jpg", import.meta.url).href} 
                alt="Edge-to-Cloud technology innovation" 
                className="rounded-xl shadow-2xl max-w-full h-auto border-4 border-white/10" 
                loading="eager" 
                width="600"
                height="600"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
