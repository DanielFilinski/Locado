
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="text-2xl font-bold text-amber-400 mb-4">
              PintaMuebles
            </div>
            <p className="text-gray-300">
              Servicios profesionales de pintura de muebles a domicilio. 
              Transformamos tu hogar con calidad y rapidez.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-2 text-gray-300">
              <p>{t('footer.phone')}: +34 XXX XXX XXX</p>
              <p>{t('footer.email')}: info@pintamuebles.com</p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                WhatsApp
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                Telegram
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                TikTok
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 PintaMuebles. Todos los derechos reservados.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-amber-400 transition-colors">
              {t('footer.privacy')}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
