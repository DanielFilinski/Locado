
import { Home, Award, Clock, Palette, Shield, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const WhyUsSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Home className="h-8 w-8 text-amber-800" />,
      title: t('whyus.home')
    },
    {
      icon: <Award className="h-8 w-8 text-amber-800" />,
      title: t('whyus.quality')
    },
    {
      icon: <Clock className="h-8 w-8 text-amber-800" />,
      title: t('whyus.speed')
    },
    {
      icon: <Palette className="h-8 w-8 text-amber-800" />,
      title: t('whyus.colors')
    },
    {
      icon: <Shield className="h-8 w-8 text-amber-800" />,
      title: t('whyus.clean')
    },
    {
      icon: <Users className="h-8 w-8 text-amber-800" />,
      title: t('whyus.masters')
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('whyus.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-full p-4">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
