
import { PaintBucket, DoorOpen, Home, Armchair, Layers } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <PaintBucket className="h-12 w-12 text-amber-800" />,
      title: t('services.kitchen')
    },
    {
      icon: <DoorOpen className="h-12 w-12 text-amber-800" />,
      title: t('services.doors')
    },
    {
      icon: <Home className="h-12 w-12 text-amber-800" />,
      title: t('services.wardrobes')
    },
    {
      icon: <Armchair className="h-12 w-12 text-amber-800" />,
      title: t('services.furniture')
    },
    {
      icon: <Layers className="h-12 w-12 text-amber-800" />,
      title: t('services.all')
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('services.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {service.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-600 italic bg-amber-50 px-8 py-4 rounded-lg inline-block">
            {t('services.materials')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
