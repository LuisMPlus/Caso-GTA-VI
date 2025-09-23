import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-t border-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo/Title */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-[#ffb90f] to-[#E68B4E] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">GTA</span>
            </div>
            <span className="text-white font-semibold text-lg">Caso GTA VI</span>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Análisis Legal del Hackeo GTA VI - Trabajo Académico
            </p>
          </div>

          {/* University/Course Info */}
          <div className="text-right">
            <p className="text-gray-400 text-sm">
              Legislación en Informática
            </p>
            <p className="text-gray-500 text-xs">
              FI UNJu
            </p>
          </div>
        </div>

        {/* Divider line */}
        <div className="mt-4 pt-4 border-t border-gray-800">
          <p className="text-center text-gray-500 text-xs">
            Este sitio fue desarrollado con fines educativos para el análisis legal del caso de hackeo de GTA VI
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;