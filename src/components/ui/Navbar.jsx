import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Shield, Terminal, Clock, Database, GraduationCap } from 'lucide-react';
import GlitchText from '../animations/GlitchText';

const Navbar = ({ onSectionClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', sectionIndex: 0, icon: Shield },
    { name: 'Timeline', sectionIndex: 1, icon: Clock },
    { name: 'Evidencias', sectionIndex: 2, icon: Database },
    { name: 'Terminal', sectionIndex: 3, icon: Terminal },
  ];

  const handleNavClick = (sectionIndex) => {
    if (onSectionClick) {
      onSectionClick(sectionIndex);
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/98 backdrop-blur-lg border-b border-hacker-green/30' 
          : 'bg-black/20 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo y título académico */}
          <motion.div 
            className="flex items-center space-x-4"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center space-x-3">
              <GraduationCap className="w-8 h-8 text-cyber-blue" />
              <div className="flex flex-col">
                <span className="text-xs text-gray-400 font-mono">
                  LEGISLACIÓN - INGENIERÍA INFORMÁTICA
                </span>
                <div className="text-lg font-bold">
                  <GlitchText 
                    text="GTA VI BREACH"
                    className="text-white"
                    intensity={0.02}
                    colors={['#00D4FF', '#0080FF']}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navegación desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item.sectionIndex)}
                className="group flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-cyber-blue/10 hover:text-cyber-blue"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                <item.icon className="w-4 h-4 transition-colors duration-300 group-hover:text-electric-blue" />
                <span className="font-mono text-sm">{item.name}</span>
              </motion.button>
            ))}
          </div>

          {/* Status indicator */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 px-3 py-1 bg-red-900/30 border border-red-500/50 rounded-full">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-mono text-red-400">CLASSIFIED</span>
            </div>
            <div className="text-xs text-gray-400 font-mono">
              {new Date().toLocaleDateString('es-ES')}
            </div>
          </div>

          {/* Botón móvil */}
          <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-cyber-blue/10 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-cyber-blue" />
            ) : (
              <Menu className="w-6 h-6 text-cyber-blue" />
            )}
          </motion.button>
        </div>

        {/* Menú móvil */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2 border-t border-gray-700">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item.sectionIndex)}
                className="flex items-center space-x-3 w-full px-4 py-3 rounded-lg hover:bg-hacker-green/10 hover:text-cyber-blue transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                transition={{ delay: index * 0.1 }}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-mono">{item.name}</span>
              </motion.button>
            ))}
            
            <div className="mt-4 pt-4 border-t border-gray-700">
              <div className="flex items-center justify-center space-x-2 px-4 py-2 bg-red-900/30 border border-red-500/50 rounded-lg">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-mono text-red-400">CLASSIFIED ACCESS</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Línea de progreso de scroll */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-cyber origin-left"
        style={{
          scaleX: scrolled ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.nav>
  );
};

export default Navbar;
