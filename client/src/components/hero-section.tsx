import React from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const HeroSection: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section 
      id="hero" 
      ref={ref}
      className={`hero-gradient pt-28 pb-20 md:pt-40 md:pb-32 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Edge to Cloud <span className="text-accent">Inventors</span> & <span className="text-secondary">Consultants</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl">
              We develop, supply & integrate cutting-edge technology solutions that drive innovation and business growth.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#contact" 
                className="px-8 py-4 bg-primary text-white font-semibold rounded-md hover:bg-primary/90 transition-colors duration-200 shadow-lg text-center text-lg"
              >
                Get Started
              </a>
              <a 
                href="#services" 
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 font-semibold rounded-md hover:bg-white/20 transition-colors duration-200 text-center text-lg"
              >
                Explore Solutions
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img 
              src="https://images.unsplash.com/photo-1545987796-200677ee1011?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600" 
              alt="Abstract representation of cloud technology" 
              className="rounded-xl shadow-2xl max-w-full h-auto" 
              loading="eager" 
              width="600"
              height="600"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
