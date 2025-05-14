import React, { useEffect } from 'react';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import StatsSection from '@/components/stats-section';
import ServicesSection from '@/components/services-section';
import SolutionsSection from '@/components/solutions-section';
import CaseStudiesSection from '@/components/case-studies-section';
import TestimonialsSection from '@/components/testimonials-section';
import AboutSection from '@/components/about-section';
import CTASection from '@/components/cta-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import { Helmet } from 'react-helmet-async';

const Home: React.FC = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (!targetId) return;
        
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 80, // Offset for fixed header
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Infinity Technologies Ltd | Edge to Cloud Inventors & Consultants</title>
        <meta name="description" content="Infinity Technologies Ltd - Edge to cloud inventors and consultants. We develop, supply & integrate cutting-edge technology solutions." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Infinity Technologies Ltd",
            "url": "https://infinitytechnologies.com",
            "logo": "https://infinitytechnologies.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-555-123-4567",
              "contactType": "customer service",
              "availableLanguage": ["English"]
            },
            "sameAs": [
              "https://www.linkedin.com/company/infinity-technologies",
              "https://twitter.com/infinitytech",
              "https://www.facebook.com/infinitytechnologies"
            ]
          })}
        </script>
      </Helmet>
      
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <SolutionsSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <AboutSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
