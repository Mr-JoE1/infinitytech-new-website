import React from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const AboutSection: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  
  return (
    <section 
      id="about" 
      ref={ref}
      className={`py-20 bg-white ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Infinity Technologies</h2>
            <p className="text-gray-700 mb-6">
              Infinity Technologies is a leading provider of innovative technology solutions that enable businesses to thrive in the digital age. With over 15 years of experience, we have established ourselves as trusted advisors to organizations across various industries.
            </p>
            <p className="text-gray-700 mb-6">
              Our team of experts combines deep technical knowledge with business acumen to deliver solutions that address complex challenges and drive measurable results. We pride ourselves on our collaborative approach, working closely with clients to understand their unique needs and develop tailored strategies.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-semibold text-lg mb-2">Our Mission</h4>
                <p className="text-gray-600">
                  To empower organizations through innovative technology solutions that drive growth and create sustainable competitive advantage.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Our Vision</h4>
                <p className="text-gray-600">
                  To be the trusted technology partner for forward-thinking organizations in their digital transformation journey.
                </p>
              </div>
            </div>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary/90 transition-colors duration-200 inline-block"
            >
              Work With Us
            </a>
          </div>
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Diverse team of technology professionals collaborating in a modern office environment" 
              className="rounded-xl shadow-lg w-full h-auto" 
              loading="lazy" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
