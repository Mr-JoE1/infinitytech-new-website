import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import Logo from './logo';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={cn(
      "fixed w-full bg-white/90 backdrop-blur-sm z-50 transition-all duration-300",
      isScrolled ? "shadow-sm" : ""
    )}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center space-x-2">
            <Logo showText={true} />
          </a>
        </Link>
        
        <button 
          onClick={toggleMobileMenu}
          className="block md:hidden text-gray-800"
          aria-label="Toggle mobile menu"
        >
          <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </button>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-gray-700 hover:text-primary font-medium transition-colors duration-200">
            Services
          </a>
          <a href="#solutions" className="text-gray-700 hover:text-primary font-medium transition-colors duration-200">
            Solutions
          </a>
          <a href="#case-studies" className="text-gray-700 hover:text-primary font-medium transition-colors duration-200">
            Case Studies
          </a>
          <a href="#about" className="text-gray-700 hover:text-primary font-medium transition-colors duration-200">
            About Us
          </a>
          <a href="#contact" className="px-5 py-2 bg-primary text-white font-semibold rounded-md hover:bg-primary/90 transition-colors duration-200 shadow-md">
            Contact Us
          </a>
        </nav>
      </div>
      
      <div className={cn(
        "md:hidden w-full bg-white border-t border-gray-100",
        mobileMenuOpen ? "block" : "hidden"
      )}>
        <div className="container mx-auto px-4 py-3">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#services" 
              className="text-gray-700 hover:text-primary font-medium py-2 transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              Services
            </a>
            <a 
              href="#solutions" 
              className="text-gray-700 hover:text-primary font-medium py-2 transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              Solutions
            </a>
            <a 
              href="#case-studies" 
              className="text-gray-700 hover:text-primary font-medium py-2 transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              Case Studies
            </a>
            <a 
              href="#about" 
              className="text-gray-700 hover:text-primary font-medium py-2 transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              About Us
            </a>
            <a 
              href="#contact" 
              className="px-5 py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary/90 transition-colors duration-200 shadow-md text-center"
              onClick={closeMobileMenu}
            >
              Contact Us
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
