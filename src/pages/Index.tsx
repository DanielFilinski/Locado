
import { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import GallerySection from '../components/GallerySection';
import ProcessSection from '../components/ProcessSection';
import WhyUsSection from '../components/WhyUsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactFormSection from '../components/ContactFormSection';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { LanguageProvider } from '../context/LanguageContext';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <ProcessSection />
        <WhyUsSection />
        <TestimonialsSection />
        <ContactFormSection />
        <Footer />
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
};

export default Index;
