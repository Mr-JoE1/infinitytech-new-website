import React from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const CTASection: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  
  return (
    <section 
      ref={ref}
      className={`py-16 bg-primary ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Technology?
        </h2>
        <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
          Partner with Infinity Technologies to develop, supply, and integrate cutting-edge solutions that will drive your business forward.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a 
            href="#contact" 
            className="px-8 py-4 bg-white text-primary font-semibold rounded-md hover:bg-gray-100 transition-colors duration-200 text-center text-lg"
          >
            Get Started
          </a>
          <a 
            href="#" 
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-md hover:bg-white/10 transition-colors duration-200 text-center text-lg"
          >
            Schedule a Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
