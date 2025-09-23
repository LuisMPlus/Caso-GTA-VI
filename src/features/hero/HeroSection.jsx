import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import TypewriterText from '../../components/animations/TypewriterText';
import GlitchText from '../../components/animations/GlitchText';
import { Shield, AlertTriangle, Terminal, Code } from 'lucide-react';

const HeroSection = () => {
  const [showSubtext, setShowSubtext] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-20 min-h-screen">

      {/* Overlay de gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-7xl mx-auto"
        >
        {/* Header con información del sistema */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="terminal mb-12 text-left max-w-3xl mx-auto">
            <div className="flex justify-between items-center mb-3 text-sm">
              <span className="text-cyber-blue">root@gta6-investigation:~$</span>
              <span className="text-gray-400">
                {currentTime.toLocaleString()}
              </span>
            </div>
            <TypewriterText
              text="analyzing_breach_data --target=rockstar_games --incident=gta6_leak"
              speed={30}
              className="text-terminal-blue"
              onComplete={() => setShowSubtext(true)}
            />
          </div>
        </motion.div>

        {/* Título principal */}
        <motion.div variants={itemVariants} className="mb-20 flex flex-col items-center justify-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 text-white text-center">
            <GlitchText 
              text="GTA VI"
              className="block"
              intensity={0.05}
              colors={['#00D4FF', '#0080FF', '#8B5FBF', '#FF6B9D']}
            />
          </h1>
          <div className="text-2xl md:text-4xl lg:text-5xl font-semibold text-cyber-blue mb-6 text-center">
            <GlitchText 
              text="BREACH ANALYSIS"
              intensity={0.03}
              colors={['#00D4FF', '#FF6B9D']}
            />
          </div>
          
          <br />
          
          <div className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl text-center leading-relaxed">
            El hackeo más grande en la historia de los videojuegos
          </div>
        </motion.div>

        {/* Estadísticas del incidente */}
        {showSubtext && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-20"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <motion.div 
                className="neon-border p-6 rounded-xl bg-black/90 backdrop-blur-sm hover:bg-black/95 transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Shield className="w-10 h-10 text-cyber-blue mb-4 mx-auto group-hover:text-electric-blue transition-colors duration-300" />
                <div className="text-3xl font-bold text-cyber-blue mb-2">90+</div>
                <div className="text-sm text-gray-400 font-mono">Videos Filtrados</div>
              </motion.div>
              
              <motion.div 
                className="neon-border p-6 rounded-xl bg-black/90 backdrop-blur-sm hover:bg-black/95 transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <AlertTriangle className="w-10 h-10 text-red-500 mb-4 mx-auto group-hover:text-red-400 transition-colors duration-300" />
                <div className="text-3xl font-bold text-red-500 mb-2">$5B</div>
                <div className="text-sm text-gray-400 font-mono">Impacto Estimado</div>
              </motion.div>
              
              <motion.div 
                className="neon-border p-6 rounded-xl bg-black/90 backdrop-blur-sm hover:bg-black/95 transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Terminal className="w-10 h-10 text-electric-blue mb-4 mx-auto group-hover:text-cyber-blue transition-colors duration-300" />
                <div className="text-3xl font-bold text-electric-blue mb-2">48h</div>
                <div className="text-sm text-gray-400 font-mono">Duración del Breach</div>
              </motion.div>
              
              <motion.div 
                className="neon-border p-6 rounded-xl bg-black/90 backdrop-blur-sm hover:bg-black/95 transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Code className="w-10 h-10 text-yellow-500 mb-4 mx-auto group-hover:text-yellow-400 transition-colors duration-300" />
                <div className="text-3xl font-bold text-yellow-500 mb-2">3TB</div>
                <div className="text-sm text-gray-400 font-mono">Datos Comprometidos</div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Botón de acción */}
        <motion.div variants={itemVariants} className="flex justify-center mb-20">
          <button className="group relative px-12 py-6 bg-gradient-cyber text-black font-bold text-xl rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 shadow-2xl">
            <span className="relative z-10">INICIAR INVESTIGACIÓN</span>
            <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-cyber-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </motion.div>

        {/* Advertencia de seguridad */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center"
        >
          <div className="p-6 border border-red-500/50 rounded-xl bg-red-900/20 max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center mb-3">
              <AlertTriangle className="w-6 h-6 text-red-500 mr-2" />
              <span className="text-red-400 font-semibold text-lg">AVISO DE SEGURIDAD</span>
            </div>
            <p className="text-base text-gray-300 leading-relaxed">
              Este sitio contiene información sobre el análisis del incidente de seguridad de GTA VI 
              <br /><br />
              con fines educativos y de investigación en ciberseguridad.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Efectos de partículas */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-hacker-green rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
