import React, { useState, useRef, useEffect } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { caseStudies } from '@/data/case-studies';

interface CarouselControlsProps {
  onPrev: () => void;
  onNext: () => void;
  isMobile?: boolean;
}

const CarouselControls: React.FC<CarouselControlsProps> = ({ onPrev, onNext, isMobile = false }) => {
  if (isMobile) {
    return (
      <div className="flex justify-center mt-6 md:hidden">
        <button 
          onClick={onPrev}
          className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-800 focus:outline-none mx-2"
          aria-label="Previous slide"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button 
          onClick={onNext}
          className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-800 focus:outline-none mx-2"
          aria-label="Next slide"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    );
  }
  
  return (
    <>
      <button 
        onClick={onPrev}
        className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-800 focus:outline-none z-10 carousel-prev hidden md:flex"
        aria-label="Previous slide"
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button 
        onClick={onNext}
        className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-800 focus:outline-none z-10 carousel-next hidden md:flex"
        aria-label="Next slide"
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </>
  );
};

const CaseStudiesSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const slidesContainerRef = useRef<HTMLDivElement>(null);
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  
  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };
    
    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);
  
  const maxSlide = Math.max(0, caseStudies.length - slidesPerView);
  
  const handlePrev = () => {
    setCurrentSlide((prev) => Math.max(0, prev - 1));
  };
  
  const handleNext = () => {
    setCurrentSlide((prev) => Math.min(maxSlide, prev + 1));
  };
  
  useEffect(() => {
    if (slidesContainerRef.current) {
      const slidePercentage = -(currentSlide * (100 / slidesPerView));
      slidesContainerRef.current.style.transform = `translateX(${slidePercentage}%)`;
    }
  }, [currentSlide, slidesPerView]);
  
  return (
    <section 
      id="case-studies" 
      ref={ref}
      className={`py-20 bg-white ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Case Studies</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how our solutions have helped organizations across various industries achieve their technology goals.
          </p>
        </div>
        
        <div className="case-study-carousel relative">
          <div className="overflow-hidden">
            <div 
              ref={slidesContainerRef}
              className="case-study-slides flex transition-transform duration-500 ease-in-out"
            >
              {caseStudies.map((study, index) => (
                <div key={index} className="case-study-slide w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-48 object-cover" 
                      loading="lazy" 
                    />
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <span className={`px-3 py-1 ${study.categoryBg} ${study.categoryText} rounded-full text-xs font-medium`}>
                          {study.category}
                        </span>
                        <span className="ml-auto text-sm text-gray-500">ROI: {study.roi}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                      <p className="text-gray-600 mb-4">{study.description}</p>
                      <a href="#" className="text-primary font-medium inline-flex items-center">
                        Read case study <i className="fas fa-arrow-right ml-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <CarouselControls onPrev={handlePrev} onNext={handleNext} />
          <CarouselControls onPrev={handlePrev} onNext={handleNext} isMobile={true} />
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
