import { motion } from 'framer-motion';
import { useState } from 'react';
import { GTA_VI_CASE } from '../../data/constants';

const CaseSection = () => {
  const [selectedCase, setSelectedCase] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="case-analysis" className="bg-gradient-to-b from-black to-gray-900 relative overflow-hidden py-16 min-h-screen">
      <div className="container mx-auto px-6 relative z-10">
        {/* Título de la sección */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-blue-400 bg-clip-text text-transparent">
            Análisis del Caso
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Desglose completo de los tres aspectos fundamentales del hackeo de GTA VI
          </p>
        </motion.div>

        {/* Grid de casos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {GTA_VI_CASE.map((caseItem, index) => (
            <motion.div
              key={caseItem.id}
              variants={cardVariants}
              className="group"
            >
              <div 
                className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden hover:border-gray-500 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedCase(selectedCase === caseItem.id ? null : caseItem.id)}
              >
                {/* Imagen */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={caseItem.image}
                    alt={caseItem.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay sutil solo en las esquinas */}
                  <div className="absolute top-2 right-2">
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                      style={{ 
                        backgroundColor: caseItem.color
                      }}
                    >
                      {caseItem.id}
                    </div>
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <div 
                    className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4"
                    style={{ 
                      backgroundColor: caseItem.color + '20', 
                      color: caseItem.color 
                    }}
                  >
                    Etapa {caseItem.id}
                  </div>
                  
                  <h3 
                    className="text-xl font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-500 group-hover:bg-clip-text transition-all duration-300"
                  >
                    {caseItem.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {caseItem.content.substring(0, 150)}...
                  </p>

                  <button
                    className="text-blue-400 hover:text-blue-300 text-sm font-semibold flex items-center transition-colors"
                  >
                    {selectedCase === caseItem.id ? 'Ocultar detalles' : 'Leer más'}
                    <span className="ml-1">{selectedCase === caseItem.id ? '▼' : '▶'}</span>
                  </button>

                  {/* Contenido expandido */}
                  {selectedCase === caseItem.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t border-gray-600"
                    >
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {caseItem.content}
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Estadísticas adicionales */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
        >
          <div className="text-center p-4 bg-gray-800/30 rounded-lg border border-gray-700">
            <div className="text-3xl font-bold text-yellow-500 mb-2">90+</div>
            <div className="text-gray-400 text-sm">Videos filtrados</div>
          </div>
          <div className="text-center p-4 bg-gray-800/30 rounded-lg border border-gray-700">
            <div className="text-3xl font-bold text-orange-500 mb-2">3TB</div>
            <div className="text-gray-400 text-sm">Datos extraídos</div>
          </div>
          <div className="text-center p-4 bg-gray-800/30 rounded-lg border border-gray-700">
            <div className="text-3xl font-bold text-blue-400 mb-2">17</div>
            <div className="text-gray-400 text-sm">Años del hacker</div>
          </div>
          <div className="text-center p-4 bg-gray-800/30 rounded-lg border border-gray-700">
            <div className="text-3xl font-bold text-purple-500 mb-2">Global</div>
            <div className="text-gray-400 text-sm">Impacto mediático</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseSection;