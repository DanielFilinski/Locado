
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { toast } from '@/hooks/use-toast';

const ContactFormSection = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    furnitureType: '',
    comment: '',
    consent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      toast({
        title: "Error",
        description: "Debe aceptar la política de privacidad",
        variant: "destructive"
      });
      return;
    }
    
    console.log('Contact form submitted:', formData);
    toast({
      title: "¡Solicitud enviada!",
      description: "Nos pondremos en contacto contigo en 10 minutos.",
    });
    setFormData({
      name: '',
      phone: '',
      furnitureType: '',
      comment: '',
      consent: false
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-amber-800 to-orange-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('contact.title')}
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder={t('contact.form.name')}
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
                    placeholder={t('contact.form.phone')}
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              
              <div>
                <select
                  name="furnitureType"
                  value={formData.furnitureType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                >
                  <option value="">{t('contact.form.furniture')}</option>
                  <option value="kitchen">Muebles de cocina</option>
                  <option value="doors">Puertas</option>
                  <option value="wardrobes">Armarios</option>
                  <option value="furniture">Otros muebles</option>
                </select>
              </div>
              
              <div>
                <textarea
                  name="comment"
                  placeholder={t('contact.form.comment')}
                  value={formData.comment}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                />
              </div>
              
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="consent"
                  id="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
                  required
                />
                <label htmlFor="consent" className="text-sm text-gray-600">
                  {t('contact.form.consent')}
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full bg-amber-800 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-amber-900 transition-colors transform hover:scale-105"
              >
                {t('contact.form.submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
