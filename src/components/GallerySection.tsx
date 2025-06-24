
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const GallerySection = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const galleryItems = [
    {
      before: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&q=80',
      after: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80',
      description: 'Cocina rústica transformada'
    },
    {
      before: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80',
      after: 'https://images.unsplash.com/photo-1483058712412-e9573fc25ebb?auto=format&fit=crop&w=800&q=80',
      description: 'Puerta de entrada renovada'
    },
    {
      before: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80',
      after: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&q=80',
      description: 'Armario empotrado modernizado'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('gallery.title')}
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8">
              {/* Before */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('gallery.before')}</h3>
                <img
                  src={galleryItems[currentSlide].before}
                  alt="Before"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              
              {/* After */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-amber-800 mb-4">{t('gallery.after')}</h3>
                <img
                  src={galleryItems[currentSlide].after}
                  alt="After"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
            
            <div className="bg-gray-50 px-8 py-4 text-center">
              <p className="text-lg font-medium text-gray-700">
                {galleryItems[currentSlide].description}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronLeft className="h-6 w-6 text-amber-800" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronRight className="h-6 w-6 text-amber-800" />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-amber-800' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
