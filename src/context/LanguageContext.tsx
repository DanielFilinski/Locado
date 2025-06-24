
import React, { createContext, useContext, useState } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  es: {
    // Header
    'nav.services': 'Servicios',
    'nav.gallery': 'Ejemplos de trabajos',
    'nav.process': 'Proceso productivo',
    'nav.testimonials': 'Testimonios',
    'nav.contact': 'Contactos',
    'nav.order': 'Solicitar pintura',
    
    // Hero Section
    'hero.title': 'Pintura de muebles a domicilio — como nuevos en 2-3 días',
    'hero.subtitle': 'Pintura a domicilio: puertas, muebles de cocina, armarios y otros muebles',
    'hero.form.name': 'Nombre',
    'hero.form.phone': 'Teléfono',
    'hero.form.comment': 'Comentario',
    'hero.form.submit': 'Obtener consulta',
    
    // Services
    'services.title': 'Servicios: ¿Qué pintamos?',
    'services.kitchen': 'Muebles de cocina y conjuntos',
    'services.doors': 'Puertas interiores',
    'services.wardrobes': 'Armarios y vestidores',
    'services.furniture': 'Cómodas, mesas, sillas',
    'services.all': 'Todos los muebles modulares y de madera',
    'services.materials': 'Cualquier material: madera maciza, MDF, chapa, melamina, etc.',
    
    // Gallery
    'gallery.title': 'Ejemplos de trabajos (antes/después)',
    'gallery.before': 'Antes',
    'gallery.after': 'Después',
    
    // Process
    'process.title': 'Cómo trabajamos',
    'process.step1': 'Inspección y preparación',
    'process.step2': 'Empaquetado/aislamiento de la zona',
    'process.step3': 'Imprimación y pintura',
    'process.step4': 'Montaje e inspección final',
    
    // Why Us
    'whyus.title': 'Por qué nos eligen',
    'whyus.home': 'Trabajo a domicilio',
    'whyus.quality': 'Alta calidad',
    'whyus.speed': 'Plazos más cortos (2-3 días)',
    'whyus.colors': '300+ colores RAL/NCS',
    'whyus.clean': 'No ensuciamos nada',
    'whyus.masters': 'Limpiamos después, maestros educados',
    
    // Testimonials
    'testimonials.title': 'Testimonios de clientes',
    
    // Contact Form
    'contact.title': 'Deje una solicitud: nos pondremos en contacto con usted en 10 minutos',
    'contact.form.name': 'Nombre',
    'contact.form.phone': 'Teléfono',
    'contact.form.furniture': 'Tipo de mueble',
    'contact.form.comment': 'Comentario',
    'contact.form.consent': 'Acepto la política de privacidad',
    'contact.form.submit': 'Enviar solicitud',
    
    // Footer
    'footer.phone': 'Teléfono',
    'footer.email': 'Email',
    'footer.privacy': 'Política de privacidad',
  },
  en: {
    // Header
    'nav.services': 'Services',
    'nav.gallery': 'Portfolio',
    'nav.process': 'Process',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    'nav.order': 'Order Painting',
    
    // Hero Section
    'hero.title': 'Home Furniture Painting — Like New in 2-3 Days',
    'hero.subtitle': 'Home painting: doors, kitchen furniture, wardrobes and other furniture',
    'hero.form.name': 'Name',
    'hero.form.phone': 'Phone',
    'hero.form.comment': 'Comment',
    'hero.form.submit': 'Get Consultation',
    
    // Services
    'services.title': 'Services: What We Paint',
    'services.kitchen': 'Kitchen furniture and sets',
    'services.doors': 'Interior doors',
    'services.wardrobes': 'Wardrobes and dressing rooms',
    'services.furniture': 'Dressers, tables, chairs',
    'services.all': 'All modular and wooden furniture',
    'services.materials': 'Any materials: solid wood, MDF, veneer, laminate, etc.',
    
    // Gallery
    'gallery.title': 'Portfolio (before/after)',
    'gallery.before': 'Before',
    'gallery.after': 'After',
    
    // Process
    'process.title': 'How We Work',
    'process.step1': 'Inspection and preparation',
    'process.step2': 'Area packaging/isolation',
    'process.step3': 'Priming and painting',
    'process.step4': 'Assembly and final inspection',
    
    // Why Us
    'whyus.title': 'Why Choose Us',
    'whyus.home': 'Work at home',
    'whyus.quality': 'High quality',
    'whyus.speed': 'Shortest terms (2-3 days)',
    'whyus.colors': '300+ RAL/NCS colors',
    'whyus.clean': 'We don\'t mess anything',
    'whyus.masters': 'Clean up after ourselves, polite masters',
    
    // Testimonials
    'testimonials.title': 'Client Testimonials',
    
    // Contact Form
    'contact.title': 'Leave a request - we will contact you within 10 minutes',
    'contact.form.name': 'Name',
    'contact.form.phone': 'Phone',
    'contact.form.furniture': 'Furniture type',
    'contact.form.comment': 'Comment',
    'contact.form.consent': 'I agree to the privacy policy',
    'contact.form.submit': 'Submit Request',
    
    // Footer
    'footer.phone': 'Phone',
    'footer.email': 'Email',
    'footer.privacy': 'Privacy Policy',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
