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
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Cloud Architecture</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Cybersecurity Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Custom Software Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Edge Computing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Data Analytics & AI</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-gray-400"></i>
                <span className="text-gray-400">
                  {contactInfo.address.line1}<br/>{contactInfo.address.line2}
                </span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone mt-1 mr-3 text-gray-400"></i>
                <span className="text-gray-400">{contactInfo.phone}</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-3 text-gray-400"></i>
                <span className="text-gray-400">{contactInfo.email}</span>
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
