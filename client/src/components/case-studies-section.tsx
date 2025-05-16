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
          <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
            Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-primary">Global</span> Impact</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how our engineering expertise and embedded solutions have transformed businesses across GCC, Europe, and the Americas.
          </p>
          
          {/* Region filter */}
          <div className="flex flex-wrap justify-center mt-8 gap-2">
            {['All', 'UAE', 'KSA', 'EG', 'USA'].map((region) => (
              <button 
                key={region}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  region === 'All' 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
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
                      
                      {/* Location badge */}
                      {'location' in study && (
                        <div className="mb-3">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            <i className="fas fa-map-marker-alt mr-1"></i>
                            {study.location}
                          </span>
                        </div>
                      )}
                      
                      <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                      <p className="text-gray-600 mb-4">{study.description}</p>
                      
                      {/* Skills badges */}
                      {'skills' in study && study.skills && (
                        <div className="flex flex-wrap gap-1 mb-4">
                          {study.skills.map((skill, i) => (
                            <span key={i} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary">
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      <a href="#contact" className="text-primary font-medium inline-flex items-center">
                        Request similar solution <i className="fas fa-arrow-right ml-2"></i>
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
