import React, { useState } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { services } from '@/data/services';
import { ArrowRight, CheckCircle2, Plus, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
  index: number;
  onExpand: (service: Service) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  service, 
  index,
  onExpand
}) => {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });
  
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
        <div className={`w-16 h-16 rounded-full ${service.iconBgClass} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
          <i className={`fas ${service.icon} text-2xl ${service.learnMoreColor}`}></i>
        </div>
        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
        <p className="text-gray-600 mb-6">{service.description}</p>
        
        <button 
          onClick={() => onExpand(service)}
          className={`${service.learnMoreColor} font-medium inline-flex items-center transition-all duration-300 group-hover:translate-x-1`}
        >
          View details <Plus className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

const ServiceDetail: React.FC<{ service: Service; onClose: () => void }> = ({ service, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-3xl w-full max-h-[80vh] overflow-auto shadow-2xl animate-in fade-in duration-300">
        <div className="relative p-6 md:p-8">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>
          
          <div className="flex items-center mb-6">
            <div className={`w-12 h-12 rounded-full ${service.iconBgClass} flex items-center justify-center mr-4`}>
              <i className={`fas ${service.icon} text-xl ${service.learnMoreColor}`}></i>
            </div>
            <h3 className="text-2xl font-bold">{service.title}</h3>
          </div>
          
          <p className="text-gray-700 mb-8">{service.description}</p>
          
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-4 text-gray-800">Key Features</h4>
            <ul className="space-y-3">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle2 className={`${service.learnMoreColor} flex-shrink-0 mr-3 h-5 w-5 mt-0.5`} />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="text-center">
            <a 
              href="#contact" 
              onClick={onClose}
              className={`px-6 py-3 bg-${service.learnMoreColor.replace('text-', '')} text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 inline-flex items-center shadow-md hover:shadow-lg`}
            >
              Inquire about this service
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>({ threshold: 0.1 });
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  
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
            Edge-to-Cloud Expertise
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Professional <span className="text-primary">Engineering</span> Services
          </h2>
          <p className="text-gray-600 text-lg">
            From custom embedded systems to fully orchestrated Cloud-Edge AI pipelines, we craft resilient solutions that power tomorrow's smart devices—today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              onExpand={setSelectedService}
            />
          ))}
        </div>
        
        {/* Industry badges - showing our focus areas */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-8">Industries We Empower</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: 'Road Safety Technology', bg: 'bg-red-100', text: 'text-red-700' },
              { name: 'Smart Agriculture', bg: 'bg-green-100', text: 'text-green-700' },
              { name: 'Healthcare Devices', bg: 'bg-blue-100', text: 'text-blue-700' },
              { name: 'Automotive', bg: 'bg-gray-100', text: 'text-gray-700' },
              { name: 'Energy & Utilities', bg: 'bg-yellow-100', text: 'text-yellow-700' },
              { name: 'Consumer Electronics', bg: 'bg-purple-100', text: 'text-purple-700' },
              { name: 'Logistics & Supply Chain', bg: 'bg-indigo-100', text: 'text-indigo-700' },
            ].map((industry, index) => (
              <div
                key={index}
                className={`${industry.bg} ${industry.text} px-4 py-2 rounded-full text-sm font-medium`}
              >
                {industry.name}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Service detail modal */}
      {selectedService && (
        <ServiceDetail 
          service={selectedService} 
          onClose={() => setSelectedService(null)} 
        />
      )}
    </section>
  );
};

export default ServicesSection;
