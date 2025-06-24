
import { Search, Package, Paintbrush, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ProcessSection = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: <Search className="h-12 w-12 text-amber-800" />,
      title: t('process.step1'),
      number: '01'
    },
    {
      icon: <Package className="h-12 w-12 text-amber-800" />,
      title: t('process.step2'),
      number: '02'
    },
    {
      icon: <Paintbrush className="h-12 w-12 text-amber-800" />,
      title: t('process.step3'),
      number: '03'
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-amber-800" />,
      title: t('process.step4'),
      number: '04'
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('process.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="relative mb-6">
                <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 bg-amber-800 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-amber-300 to-orange-300 transform translate-x-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
