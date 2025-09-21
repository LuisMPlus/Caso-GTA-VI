import { motion } from 'framer-motion';
import { useState } from 'react';
import { Play, Image, FileText, Download, Lock, Eye, AlertTriangle } from 'lucide-react';

const EvidenceGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedEvidence, setSelectedEvidence] = useState(null);

  const evidenceData = [
    {
      id: 1,
      title: 'GTA VI Gameplay - Heist Mechanics',
      type: 'video',
      category: 'gameplay',
      size: '2.1 GB',
      duration: '12:34',
      description: 'Video filtrado mostrando mecánicas de atracos en Vice City',
      thumbnail: '/api/placeholder/400/225',
      classification: 'CONFIDENTIAL',
      leaked_date: '2022-09-18',
      views: '2.3M',
      authenticity: 'VERIFIED'
    },
    {
      id: 2,
      title: 'Vice City Map Exploration',
      type: 'video',
      category: 'world',
      size: '3.2 GB',
      duration: '18:45',
      description: 'Exploración detallada del mapa de Vice City recreado',
      thumbnail: '/api/placeholder/400/225',
      classification: 'TOP SECRET',
      leaked_date: '2022-09-18',
      views: '4.1M',
      authenticity: 'VERIFIED'
    },
    {
      id: 3,
      title: 'Character Customization System',
      type: 'video',
      category: 'characters',
      size: '1.5 GB',
      duration: '08:22',
      description: 'Sistema avanzado de personalización de personajes',
      thumbnail: '/api/placeholder/400/225',
      classification: 'CONFIDENTIAL',
      leaked_date: '2022-09-18',
      views: '1.8M',
      authenticity: 'VERIFIED'
    },
    {
      id: 4,
      title: 'Player Controller Source Code',
      type: 'code',
      category: 'technical',
      size: '45 KB',
      description: 'Fragmento del código fuente del controlador de jugador',
      thumbnail: '/api/placeholder/400/225',
      classification: 'TOP SECRET',
      leaked_date: '2022-09-18',
      lines: '1,247',
      authenticity: 'VERIFIED'
    },
    {
      id: 5,
      title: 'Economy System Documentation',
      type: 'document',
      category: 'technical',
      size: '2.3 MB',
      description: 'Documentación interna del sistema económico del juego',
      thumbnail: '/api/placeholder/400/225',
      classification: 'CONFIDENTIAL',
      leaked_date: '2022-09-18',
      pages: '87',
      authenticity: 'VERIFIED'
    },
    {
      id: 6,
      title: 'Lucia Character Model',
      type: 'image',
      category: 'characters',
      size: '12 MB',
      description: 'Modelo 3D de alta resolución de Lucia, protagonista femenina',
      thumbnail: '/api/placeholder/400/225',
      classification: 'CONFIDENTIAL',
      leaked_date: '2022-09-18',
      resolution: '4K',
      authenticity: 'VERIFIED'
    },
    {
      id: 7,
      title: 'Internal Slack Conversations',
      type: 'chat',
      category: 'communications',
      size: '892 KB',
      description: 'Conversaciones internas filtradas del equipo de desarrollo',
      thumbnail: '/api/placeholder/400/225',
      classification: 'TOP SECRET',
      leaked_date: '2022-09-18',
      messages: '147',
      authenticity: 'VERIFIED'
    },
    {
      id: 8,
      title: 'Build Server Logs',
      type: 'logs',
      category: 'technical',
      size: '156 MB',
      description: 'Logs de compilación y testing del sistema de build',
      thumbnail: '/api/placeholder/400/225',
      classification: 'INTERNAL',
      leaked_date: '2022-09-18',
      entries: '45,892',
      authenticity: 'VERIFIED'
    }
  ];

  const categories = [
    { id: 'all', name: 'Todas', count: evidenceData.length },
    { id: 'gameplay', name: 'Gameplay', count: evidenceData.filter(e => e.category === 'gameplay').length },
    { id: 'world', name: 'Mundo', count: evidenceData.filter(e => e.category === 'world').length },
    { id: 'characters', name: 'Personajes', count: evidenceData.filter(e => e.category === 'characters').length },
    { id: 'technical', name: 'Técnico', count: evidenceData.filter(e => e.category === 'technical').length },
    { id: 'communications', name: 'Comunicaciones', count: evidenceData.filter(e => e.category === 'communications').length }
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case 'video': return Play;
      case 'image': return Image;
      case 'document': return FileText;
      case 'code': return FileText;
      case 'chat': return FileText;
      case 'logs': return FileText;
      default: return FileText;
    }
  };

  const getClassificationColor = (classification) => {
    switch (classification) {
      case 'TOP SECRET': return 'text-red-500 border-red-500 bg-red-900/20';
      case 'CONFIDENTIAL': return 'text-orange-500 border-orange-500 bg-orange-900/20';
      case 'INTERNAL': return 'text-yellow-500 border-yellow-500 bg-yellow-900/20';
      default: return 'text-gray-500 border-gray-500 bg-gray-900/20';
    }
  };

  const filteredEvidence = selectedCategory === 'all' 
    ? evidenceData 
    : evidenceData.filter(item => item.category === selectedCategory);

  return (
    <section id="evidence" className="full-page-section bg-gradient-to-b from-black to-gray-900 relative overflow-hidden py-8">

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
            Evidencias Recopiladas
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Archivo digital de todos los materiales filtrados durante el incidente
          </p>
          
          <br />
          <br />
        </motion.div>

        {/* Filtros de categoría */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg border-2 transition-all duration-300 font-mono ${
                selectedCategory === category.id
                  ? 'border-cyber-blue bg-cyber-blue/20 text-cyber-blue'
                  : 'border-gray-600 bg-black/50 text-gray-400 hover:border-electric-blue hover:text-electric-blue'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </motion.div>

        {/* Grid de evidencias */}
        <div className="max-w-7xl mx-auto flex-1 flex flex-col justify-center">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-h-[60vh] overflow-y-auto"
          >
          {filteredEvidence.map((evidence, index) => {
            const IconComponent = getTypeIcon(evidence.type);
            return (
              <motion.div
                key={evidence.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-black/90 border border-gray-700 rounded-lg overflow-hidden hover:border-cyber-blue transition-all duration-300 cursor-pointer group backdrop-blur-sm"
                onClick={() => setSelectedEvidence(evidence)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Thumbnail */}
                <div className="relative h-32 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <IconComponent className="w-12 h-12 text-cyber-blue group-hover:text-electric-blue transition-colors duration-300" />
                  
                  {/* Clasificación */}
                  <div className={`absolute top-2 right-2 px-2 py-1 text-xs font-bold border rounded ${getClassificationColor(evidence.classification)}`}>
                    {evidence.classification}
                  </div>

                  {/* Overlay de hover */}
                  <div className="absolute inset-0 bg-hacker-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Información */}
                <div className="p-4">
                  <h3 className="text-sm font-bold text-white mb-2 line-clamp-2 group-hover:text-hacker-green transition-colors duration-300">
                    {evidence.title}
                  </h3>
                  
                  <p className="text-xs text-gray-400 mb-4 line-clamp-2 leading-relaxed">
                    {evidence.description}
                  </p>
                  
                  <br />

                  {/* Metadatos */}
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Tamaño:</span>
                      <span className="text-cyber-blue">{evidence.size}</span>
                    </div>
                    
                    {evidence.duration && (
                      <div className="flex justify-between">
                        <span className="text-gray-500">Duración:</span>
                        <span className="text-cyber-blue">{evidence.duration}</span>
                      </div>
                    )}
                    
                    {evidence.views && (
                      <div className="flex justify-between">
                        <span className="text-gray-500">Vistas:</span>
                        <span className="text-cyber-blue">{evidence.views}</span>
                      </div>
                    )}

                    <div className="flex justify-between">
                      <span className="text-gray-500">Filtrado:</span>
                      <span className="text-orange-400">{evidence.leaked_date}</span>
                    </div>

                    <div className="flex justify-between items-center pt-2 border-t border-gray-700">
                      <span className="text-green-400 text-xs flex items-center">
                        <Lock className="w-3 h-3 mr-1" />
                        {evidence.authenticity}
                      </span>
                      <button className="text-cyber-blue hover:text-white transition-colors">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
          </motion.div>
        </div>

        {/* Modal de evidencia detallada */}
        {selectedEvidence && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
            onClick={() => setSelectedEvidence(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-gray-900 border border-hacker-green rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-hacker-green">{selectedEvidence.title}</h3>
                <button
                  onClick={() => setSelectedEvidence(null)}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>

              <div className={`inline-block px-3 py-1 text-sm font-bold border rounded mb-4 ${getClassificationColor(selectedEvidence.classification)}`}>
                {selectedEvidence.classification}
              </div>

              <p className="text-gray-300 mb-6">{selectedEvidence.description}</p>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Tipo:</span>
                  <span className="ml-2 text-white">{selectedEvidence.type.toUpperCase()}</span>
                </div>
                <div>
                  <span className="text-gray-500">Tamaño:</span>
                  <span className="ml-2 text-cyber-blue">{selectedEvidence.size}</span>
                </div>
                <div>
                  <span className="text-gray-500">Fecha de filtración:</span>
                  <span className="ml-2 text-orange-400">{selectedEvidence.leaked_date}</span>
                </div>
                <div>
                  <span className="text-gray-500">Estado:</span>
                  <span className="ml-2 text-green-400">{selectedEvidence.authenticity}</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-red-900/20 border border-red-500/50 rounded-lg">
                <div className="flex items-center mb-2">
                  <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
                  <span className="text-red-400 font-semibold">ADVERTENCIA LEGAL</span>
                </div>
                <p className="text-sm text-gray-300">
                  Este material fue obtenido ilegalmente y su distribución puede violar las leyes de derechos de autor. 
                  La visualización es únicamente con fines educativos y de análisis forense.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Estadísticas de la galería */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 flex justify-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl">
            <motion.div 
              className="text-center p-8 neon-border rounded-xl bg-black/90 backdrop-blur-sm hover:bg-black/95 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-3xl font-bold text-cyber-blue mb-2">8</div>
              <div className="text-base text-gray-400 font-mono">Evidencias</div>
            </motion.div>
            <motion.div 
              className="text-center p-8 neon-border rounded-xl bg-black/90 backdrop-blur-sm hover:bg-black/95 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-3xl font-bold text-cyber-blue mb-2">6.2TB</div>
              <div className="text-base text-gray-400 font-mono">Datos Totales</div>
            </motion.div>
            <motion.div 
              className="text-center p-8 neon-border rounded-xl bg-black/90 backdrop-blur-sm hover:bg-black/95 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-base text-gray-400 font-mono">Verificado</div>
            </motion.div>
            <motion.div 
              className="text-center p-8 neon-border rounded-xl bg-black/90 backdrop-blur-sm hover:bg-black/95 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-3xl font-bold text-red-500 mb-2">TOP SECRET</div>
              <div className="text-base text-gray-400 font-mono">Clasificación</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EvidenceGallery;
