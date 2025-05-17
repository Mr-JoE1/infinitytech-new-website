import React from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { clients } from '@/data/clients';

const HappyClientsSection: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  
  return (
    <section 
      id="clients" 
      ref={ref}
      className={`py-20 bg-gray-50 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-secondary/10 rounded-full text-secondary font-medium text-sm mb-4">
            Trusted Partners
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-secondary">Satisfied</span> Clients
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're proud to have partnered with leading organizations in GCC and around the world, 
            delivering exceptional technology solutions that drive real business impact.
          </p>
        </div>
        
        {/* Clients logo carousel with animation */}
        <div className="relative overflow-hidden py-10">
          <div className="client-carousel flex animate-scroll">
            {/* Duplicate the array for infinite scroll effect */}
            {[...clients, ...clients].map((client, index) => (
              <div 
                key={index} 
                className="client-logo-item flex-shrink-0 px-8 w-60"
              >
                <div className="bg-white rounded-lg shadow-md p-6 h-32 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                  <img 
                    src={client.logo} 
                    alt={`${client.name} logo`}
                    className="max-h-12 max-w-full mb-3 object-contain transition-all duration-300"
                  />
                  <p className="text-sm font-medium text-gray-800">{client.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Client testimonial highlights */}  
      </div>
      {/* Client scroll animation is added via CSS in index.css */}
    </section>
  );
};

export default HappyClientsSection;