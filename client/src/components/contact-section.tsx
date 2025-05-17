import React from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import ContactForm from './contact-form';
import { contactInfo } from '@/data/contact-info';

const ContactSection: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  
  return (
    <section 
      id="contact" 
      ref={ref}
      className={`py-20 bg-white ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2>
            <p className="text-gray-700 mb-8">
              Ready to discuss your technology needs? Fill out the form, and one of our experts will get in touch with you shortly. We look forward to hearing about your project.
            </p>
            
            <div className="space-y-6 mb-10">
              {/* UAE Office */}
              <div className="flex items-start bg-white shadow-md p-4 rounded-lg border-l-4 border-secondary">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-map-marker-alt text-secondary"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">{contactInfo.offices[1].name}</h4>
                  <p className="text-gray-600 mb-2">{contactInfo.offices[1].address.line2}</p>
                  <div className="flex items-center text-gray-600">
                    <i className="fas fa-phone mr-2"></i>
                    <span>{contactInfo.offices[1].phone}</span>
                  </div>
                </div>
              </div>
              
              {/* Egypt Office */}
              <div className="flex items-start bg-white shadow-md p-4 rounded-lg border-l-4 border-primary">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-map-marker-alt text-primary"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">{contactInfo.offices[0].name}</h4>
                  <p className="text-gray-600 mb-2">{contactInfo.offices[0].address.line2}</p>
                  <div className="flex items-center text-gray-600">
                    <i className="fas fa-phone mr-2"></i>
                    <span>{contactInfo.offices[0].phone}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-envelope text-primary"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Email Us</h4>
                  <p className="text-gray-600">{contactInfo.email}</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              {contactInfo.socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url} 
                  className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors duration-200"
                  aria-label={link.name}
                >
                  <i className={`fab ${link.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
