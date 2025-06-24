
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { toast } from '@/hooks/use-toast';

const HeroSection = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    comment: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "¡Solicitud enviada!",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    setFormData({ name: '', phone: '', comment: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-amber-50 to-orange-100 pt-20">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=1920&q=80)'
        }}
      ></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              {t('hero.subtitle')}
            </p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder={t('hero.form.name')}
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder={t('hero.form.phone')}
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <textarea
                  name="comment"
                  placeholder={t('hero.form.comment')}
                  value={formData.comment}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-amber-800 text-white py-3 px-6 rounded-lg font-semibold hover:bg-amber-900 transition-colors transform hover:scale-105"
              >
                {t('hero.form.submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
