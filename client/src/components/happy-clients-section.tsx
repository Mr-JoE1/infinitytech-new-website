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
                    className="max-h-12 max-w-full mb-3 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  <p className="text-sm font-medium text-gray-800">{client.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Client testimonial highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
            <p className="text-gray-700 mb-4">
              "Infinity Technologies delivered our complex IoT solution on time and exceeded our expectations. Their expertise in embedded systems and cloud integration is remarkable."
            </p>
            <div className="flex items-center">
              <div className="bg-blue-100 text-blue-800 w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3">DD</div>
              <div>
                <p className="font-medium">Ahmed Al-Mansoori</p>
                <p className="text-sm text-gray-500">Digital Dubai</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
            <p className="text-gray-700 mb-4">
              "The team at Infinity Tech consistently delivered high-quality engineering solutions for our smart mobility platform. Their technical expertise and attention to detail are unmatched."
            </p>
            <div className="flex items-center">
              <div className="bg-green-100 text-green-800 w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3">RI</div>
              <div>
                <p className="font-medium">Mohammed Al-Saud</p>
                <p className="text-sm text-gray-500">RIDEX, Saudi Arabia</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
            <p className="text-gray-700 mb-4">
              "Infinity Technologies' embedded systems expertise helped us launch our healthcare device on time and under budget. Their engineering team is world-class."
            </p>
            <div className="flex items-center">
              <div className="bg-purple-100 text-purple-800 w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3">PH</div>
              <div>
                <p className="font-medium">Sarah Johnson</p>
                <p className="text-sm text-gray-500">Perigon Health</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add client scroll animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HappyClientsSection;