import React from 'react';
import Logo from './logo';
import { contactInfo } from '@/data/contact-info';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Logo showText={true} textColor="text-white" secondaryTextColor="text-secondary" size="sm" animated={false} />
            </div>
            <p className="text-gray-400 mb-6">
              Providing innovative technology solutions that empower businesses to thrive in the digital age.
            </p>
            <div className="flex space-x-4">
              {contactInfo.socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url} 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={link.name}
                >
                  <i className={`fab ${link.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-200">Services</a></li>
              <li><a href="#solutions" className="text-gray-400 hover:text-white transition-colors duration-200">Solutions</a></li>
              <li><a href="#case-studies" className="text-gray-400 hover:text-white transition-colors duration-200">Case Studies</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Expertise</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-200">Embedded Systems</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-200">Hardware & PCB Design</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-200">IoT & Connectivity</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-200">Cloud Architecture</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-200">AI/ML & Edge Intelligence</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-200">Mobile & Dashboard Apps</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-6">
              {/* UAE Office */}
              <li>
                <div className="flex items-start mb-1">
                  <i className="fas fa-map-marker-alt mt-1 mr-3 text-secondary"></i>
                  <span className="text-gray-500 font-bold">UAE Branch Office</span>
                </div>
                <div className="ml-6 text-gray-400 mb-2">12 AlMushrif St, Abu Dhabi, UAE</div>
                <div className="ml-6 flex items-center text-gray-400">
                  <i className="fas fa-phone mr-2 text-gray-500"></i>
                  <span>{contactInfo.offices[1].phone}</span>
                </div>
              </li>
              
              {/* Egypt Office */}
              <li>
                <div className="flex items-start mb-1">
                  <i className="fas fa-map-marker-alt mt-1 mr-3 text-primary"></i>
                  
                  <span className="text-gray-500 font-bold">Egypt Head Office</span>
                  </div>
                <div className="ml-6 text-gray-400 mb-2">37 Sekket Elswis St, El-Wailly, Cairo , EG , Egypt</div>
                <div className="ml-6 flex items-center text-gray-400">
                  <i className="fas fa-phone mr-2 text-gray-500"></i>
                  <span>{contactInfo.offices[0].phone}</span>
                </div>
              </li>
              
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-3 text-gray-400"></i>
                <a href={`mailto:${contactInfo.email}`} className="text-gray-400 hover:text-gray-600 transition-colors duration-200">{contactInfo.email}</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">&copy; {new Date().getFullYear()} Infinity Technologies Ltd. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
