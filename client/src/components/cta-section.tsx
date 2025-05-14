import React from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { CalendarDays, ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  
  return (
    <section 
      ref={ref}
      className={`relative py-20 overflow-hidden ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-white opacity-10 rounded-full"></div>
        <div className="absolute top-1/2 -left-32 w-96 h-96 bg-white opacity-5 rounded-full"></div>
        <div className="absolute -bottom-20 right-1/4 w-80 h-80 bg-white opacity-10 rounded-full"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-20 left-1/4 w-8 h-8 bg-accent/30 rotate-45"></div>
        <div className="absolute bottom-32 right-1/3 w-12 h-12 border-4 border-white/20 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-10 h-10 border-4 border-white/10"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium text-sm mb-6">
            Take Your Business to the Next Level
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your 
            <span className="relative inline-block mx-2">
              Technology?
              <span className="absolute bottom-2 left-0 w-full h-2 bg-accent/50 -z-10"></span>
            </span>
          </h2>
          
          <p className="text-white text-xl mb-10 max-w-3xl mx-auto opacity-90">
            Partner with Infinity Technologies to develop, supply, and integrate cutting-edge solutions that will drive your business forward in today's competitive landscape.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-6">
            <a 
              href="#contact" 
              className="group px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 text-center text-lg flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            
            <a 
              href="#contact" 
              className="group px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 text-center text-lg flex items-center justify-center"
            >
              <CalendarDays className="mr-2 h-5 w-5" />
              Schedule a Demo
            </a>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8">
            <div className="flex flex-col items-center">
              <div className="text-white/90 font-bold text-5xl mb-1">15+</div>
              <div className="text-white/70 text-sm">Years of Experience</div>
            </div>
            <div className="w-px h-16 bg-white/20"></div>
            <div className="flex flex-col items-center">
              <div className="text-white/90 font-bold text-5xl mb-1">250+</div>
              <div className="text-white/70 text-sm">Projects Delivered</div>
            </div>
            <div className="w-px h-16 bg-white/20"></div>
            <div className="flex flex-col items-center">
              <div className="text-white/90 font-bold text-5xl mb-1">98%</div>
              <div className="text-white/70 text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
