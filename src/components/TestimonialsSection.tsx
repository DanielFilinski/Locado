
import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const TestimonialsSection = () => {
  const { t } = useLanguage();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'María González',
      location: 'Madrid',
      text: 'Excelente trabajo. Transformaron completamente mi cocina en solo 3 días. Los trabajadores fueron muy profesionales y limpiaron todo perfectamente.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b5c1?auto=format&fit=crop&w=100&q=80'
    },
    {
      name: 'Carlos Rodríguez',
      location: 'Barcelona',
      text: 'Increíble servicio. Mis puertas parecían nuevas después del trabajo. Muy recomendable, cumplieron todos los plazos prometidos.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80'
    },
    {
      name: 'Ana Martín',
      location: 'Valencia',
      text: 'Quedé fascinada con el resultado. El armario de mi dormitorio quedó como nuevo. El trato fue excelente desde el primer momento.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('testimonials.title')}
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-xl">
            <div className="text-center">
              <img
                src={testimonials[currentTestimonial].avatar}
                alt={testimonials[currentTestimonial].name}
                className="w-20 h-20 rounded-full mx-auto mb-6 shadow-lg"
              />
              
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-amber-500 fill-current" />
                ))}
              </div>

              <blockquote className="text-xl text-gray-700 mb-6 italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              <div className="text-lg font-semibold text-gray-900">
                {testimonials[currentTestimonial].name}
              </div>
              <div className="text-amber-800">
                {testimonials[currentTestimonial].location}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronLeft className="h-6 w-6 text-amber-800" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronRight className="h-6 w-6 text-amber-800" />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-amber-800' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
