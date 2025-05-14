import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import Logo from './logo';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from 'lucide-react';

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

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={cn(
      "fixed w-full z-50 transition-all duration-300",
      isScrolled 
        ? "bg-white/90 backdrop-blur-sm shadow-md" 
        : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center space-x-2">
            <Logo 
              showText={true} 
              textColor={isScrolled ? 'text-gray-900' : 'text-white'} 
              secondaryTextColor={isScrolled ? 'text-secondary' : 'text-gray-200'}
            />
          </a>
        </Link>
        
        <button 
          onClick={toggleMobileMenu}
          className="block md:hidden"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <X className={isScrolled ? "text-gray-800" : "text-white"} size={24} />
          ) : (
            <Menu className={isScrolled ? "text-gray-800" : "text-white"} size={24} />
          )}
        </button>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#services" 
            className={cn(
              "font-medium relative group transition-colors duration-200",
              isScrolled ? "text-gray-700 hover:text-primary" : "text-white hover:text-accent"
            )}
          >
            Services
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-300"></span>
          </a>
          <a 
            href="#solutions" 
            className={cn(
              "font-medium relative group transition-colors duration-200",
              isScrolled ? "text-gray-700 hover:text-primary" : "text-white hover:text-accent"
            )}
          >
            Solutions
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-300"></span>
          </a>
          <a 
            href="#case-studies" 
            className={cn(
              "font-medium relative group transition-colors duration-200",
              isScrolled ? "text-gray-700 hover:text-primary" : "text-white hover:text-accent"
            )}
          >
            Case Studies
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-300"></span>
          </a>
          <a 
            href="#about" 
            className={cn(
              "font-medium relative group transition-colors duration-200",
              isScrolled ? "text-gray-700 hover:text-primary" : "text-white hover:text-accent"
            )}
          >
            About Us
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-300"></span>
          </a>
          <a 
            href="#contact" 
            className="group flex items-center px-5 py-2 bg-primary text-white font-semibold rounded-md hover:bg-primary/90 transition-all duration-300 shadow-md"
          >
            Contact Us
            <ChevronDown className="ml-1 h-4 w-4 transform group-hover:rotate-180 transition-transform duration-300" />
          </a>
        </nav>
      </div>
      
      {/* Mobile Menu Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden",
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={closeMobileMenu}
      ></div>
      
      {/* Mobile Menu */}
      <div className={cn(
        "fixed top-[76px] left-0 right-0 bottom-0 bg-white z-50 transition-transform duration-300 transform md:hidden overflow-auto",
        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="container mx-auto px-4 py-6">
          <nav className="flex flex-col space-y-6">
            <a 
              href="#services" 
              className="text-gray-800 hover:text-primary font-medium py-2 text-lg border-b border-gray-100 pb-3 transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              Services
            </a>
            <a 
              href="#solutions" 
              className="text-gray-800 hover:text-primary font-medium py-2 text-lg border-b border-gray-100 pb-3 transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              Solutions
            </a>
            <a 
              href="#case-studies" 
              className="text-gray-800 hover:text-primary font-medium py-2 text-lg border-b border-gray-100 pb-3 transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              Case Studies
            </a>
            <a 
              href="#about" 
              className="text-gray-800 hover:text-primary font-medium py-2 text-lg border-b border-gray-100 pb-3 transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              About Us
            </a>
            <a 
              href="#contact" 
              className="mt-4 px-5 py-4 bg-primary text-white font-semibold rounded-md hover:bg-primary/90 transition-colors duration-200 shadow-md text-center text-lg"
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
