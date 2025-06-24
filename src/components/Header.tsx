
import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-amber-800">
              PintaMuebles
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-amber-800 transition-colors">
              {t('nav.services')}
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-amber-800 transition-colors">
              {t('nav.gallery')}
            </button>
            <button onClick={() => scrollToSection('process')} className="text-gray-700 hover:text-amber-800 transition-colors">
              {t('nav.process')}
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-amber-800 transition-colors">
              {t('nav.testimonials')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-amber-800 transition-colors">
              {t('nav.contact')}
            </button>
          </nav>

          {/* Language Switcher and CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4 text-gray-600" />
              <select 
                value={language} 
                onChange={(e) => setLanguage(e.target.value as 'es' | 'en')}
                className="text-sm border rounded px-2 py-1 bg-white"
              >
                <option value="es">ES</option>
                <option value="en">EN</option>
              </select>
            </div>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-amber-800 text-white px-6 py-2 rounded-lg hover:bg-amber-900 transition-colors"
            >
              {t('nav.order')}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-amber-800"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 hover:text-amber-800">
                {t('nav.services')}
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-left text-gray-700 hover:text-amber-800">
                {t('nav.gallery')}
              </button>
              <button onClick={() => scrollToSection('process')} className="text-left text-gray-700 hover:text-amber-800">
                {t('nav.process')}
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-left text-gray-700 hover:text-amber-800">
                {t('nav.testimonials')}
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-amber-800">
                {t('nav.contact')}
              </button>
              <div className="flex items-center justify-between pt-4 border-t">
                <div className="flex items-center space-x-2">
                  <Globe className="h-4 w-4 text-gray-600" />
                  <select 
                    value={language} 
                    onChange={(e) => setLanguage(e.target.value as 'es' | 'en')}
                    className="text-sm border rounded px-2 py-1 bg-white"
                  >
                    <option value="es">ES</option>
                    <option value="en">EN</option>
                  </select>
                </div>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-amber-800 text-white px-4 py-2 rounded-lg hover:bg-amber-900 transition-colors"
                >
                  {t('nav.order')}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
