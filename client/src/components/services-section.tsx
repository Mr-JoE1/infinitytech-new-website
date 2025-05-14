import React from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { services } from '@/data/services';

interface ServiceCardProps {
  icon: string;
  iconBgClass: string;
  title: string;
  description: string;
  learnMoreColor: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  iconBgClass, 
  title, 
  description, 
  learnMoreColor,
  index 
}) => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  
  return (
    <div 
      ref={ref} 
      className={`gradient-border overflow-hidden transition-all duration-500 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="bg-white p-8 h-full">
        <div className={`w-16 h-16 rounded-full ${iconBgClass} flex items-center justify-center mb-6`}>
          <i className={`fas ${icon} text-2xl ${learnMoreColor}`}></i>
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a href="#" className={`${learnMoreColor} font-medium inline-flex items-center`}>
          Learn more <i className="fas fa-arrow-right ml-2"></i>
        </a>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  
  return (
    <section 
      id="services" 
      ref={ref}
      className={`py-20 bg-white ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive technology solutions designed to meet your specific business needs and drive digital transformation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              iconBgClass={service.iconBgClass}
              title={service.title}
              description={service.description}
              learnMoreColor={service.learnMoreColor}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
