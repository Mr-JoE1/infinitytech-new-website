import React, { useEffect } from 'react';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import StatsSection from '@/components/stats-section';
import ServicesSection from '@/components/services-section';
import SolutionsSection from '@/components/solutions-section';
import CaseStudiesSection from '@/components/case-studies-section';
import HappyClientsSection from '@/components/happy-clients-section';
import TestimonialsSection from '@/components/testimonials-section';
import AboutSection from '@/components/about-section';
import CTASection from '@/components/cta-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import WhatsAppButton from '@/components/whatsapp-button';
import { Helmet } from 'react-helmet-async';

const Home: React.FC = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e: Event) => {
        e.preventDefault();
        
        const target = e.currentTarget as HTMLAnchorElement;
        const targetId = target.getAttribute('href');
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
        <title>Infinity Technologies Ltd | Edge‑to‑Cloud Innovators | GCC & UAE Embedded Systems</title>
        <meta name="description" content="Leading embedded systems & IoT experts in UAE, KSA & Egypt. From IoT hardware to cloud solutions, we deliver end-to-end embedded engineering with offices in Abu Dhabi & Egypt." />
        <meta name="keywords" content="embedded systems UAE, IoT solutions GCC, edge-to-cloud, hardware engineering Dubai, embedded firmware developers, PCB design Abu Dhabi, industrial IoT KSA" />
        
        {/* Geo Tags */}
        <meta name="geo.region" content="AE" />
        <meta name="geo.placename" content="Abu Dhabi" />
        <meta name="geo.position" content="24.466667;54.366669" />
        <meta name="ICBM" content="24.466667, 54.366669" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Infinity Technologies Ltd | Edge‑to‑Cloud Innovators" />
        <meta property="og:description" content="Expert embedded systems & IoT solutions across GCC. Engineering team with headquarters in Egypt and branch office in Abu Dhabi, UAE." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://infinitytechnologies.com" />
        <meta property="og:image" content="https://infinitytechnologies.com/logo.png" />
        <meta property="og:locale" content="en_AE" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@infinitytech100" />
        <meta name="twitter:title" content="Infinity Technologies | Edge-to-Cloud Innovators" />
        <meta name="twitter:description" content="Custom embedded systems, IoT solutions & edge computing experts serving GCC, Europe & Americas." />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Infinity Technologies Ltd",
            "url": "https://infinitytechnologies.com",
            "logo": "https://infinitytechnologies.com/logo.png",
            "description": "Edge-to-Cloud embedded systems experts specializing in IoT, firmware development, and hardware design with offices in UAE and Egypt.",
            "address": [
              {
                "@type": "PostalAddress",
                "addressCountry": "United Arab Emirates",
                "addressLocality": "Abu Dhabi",
                "addressRegion": "Abu Dhabi",
                "streetAddress": "Abu Dhabi Branch Office",
                "telephone": "+971503693357"
              },
              {
                "@type": "PostalAddress",
                "addressCountry": "Egypt",
                "addressLocality": "Cairo",
                "streetAddress": "Head Office",
                "telephone": "+201060449214"
              }
            ],
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+971503693357",
                "contactType": "customer service",
                "areaServed": "UAE",
                "availableLanguage": ["English", "Arabic"]
              },
              {
                "@type": "ContactPoint",
                "telephone": "+201060449214",
                "contactType": "customer service",
                "areaServed": "Egypt",
                "availableLanguage": ["English", "Arabic"]
              }
            ],
            "sameAs": [
              "https://www.linkedin.com/company/infinitytech100",
              "https://x.com/infinitytech100",
              "https://www.facebook.com/infinitytech100/",
              "https://www.youtube.com/@infinitytech100"
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
        <HappyClientsSection />
        <TestimonialsSection />
        <AboutSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Home;
