import React from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { services } from '@/data/services';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

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
      className={cn(
        "group relative h-full rounded-xl overflow-hidden transition-all duration-500 transform shadow-md hover:shadow-xl",
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Background gradient border */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Content */}
      <div className="relative bg-white p-8 h-full border border-gray-100 rounded-xl m-[2px] transition-all duration-300 z-10">
        <div className={`w-16 h-16 rounded-full ${iconBgClass} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
          <i className={`fas ${icon} text-2xl ${learnMoreColor}`}></i>
        </div>
        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <a 
          href={`#${title.toLowerCase().replace(/\s+/g, '-')}`} 
          className={`${learnMoreColor} font-medium inline-flex items-center transition-all duration-300 group-hover:translate-x-1`}
        >
          Learn more <ArrowRight className="ml-2 h-4 w-4" />
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
      className={`py-20 bg-white relative ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
    >
      {/* Background shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
            Expert Technology Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Comprehensive Solutions for Your <span className="text-primary">Business Needs</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Our technology solutions are designed to meet your specific business requirements and drive digital transformation across your organization.
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
