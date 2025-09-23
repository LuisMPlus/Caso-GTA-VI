import { motion } from 'framer-motion';
import { CheckCircle, Shield, Users, AlertTriangle } from 'lucide-react';
import { CIERRE_CONTENT } from '../data/cierre';

const CierrePage = () => {
  const { pageHeader, integrantes, seccionesAnalisis } = CIERRE_CONTENT;

  return (
    <div className="relative bg-gradient-to-b from-gray-900 to-black text-white min-h-screen pt-16">
      <div className="container mx-auto px-6 py-16">
        {/* Header de la página */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <CheckCircle className="w-16 h-16 text-green-400 mr-4" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              {pageHeader.title}
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            {pageHeader.subtitle}
          </p>
        </motion.div>

        {/* Sección de Integrantes del Grupo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 mb-12"
        >
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-8">
            👥 Integrantes del Grupo
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {integrantes.map((integrante, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-gray-700/50 rounded-lg p-6 text-center border border-gray-600 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20"
              >
                <div className="mb-4 overflow-hidden rounded-lg border-2 border-gray-500">
                  <img 
                    src={integrante.imagen} 
                    alt={integrante.nombre}
                    className="w-full h-48 object-cover object-center hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMzc0MTUxIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0iY2VudHJhbCIgZmlsbD0iIzlDQTNBRiIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0Ij5JbWFnZW4gbm8gZGlzcG9uaWJsZTwvdGV4dD4KPC9zdmc+';
                    }}
                  />
                </div>
                <h3 className="text-sm font-semibold text-white text-center leading-tight px-2">
                  {integrante.nombre}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Secciones de Análisis */}
        {seccionesAnalisis.map((seccion, index) => {
          const IconComponent = { Shield, Users, AlertTriangle }[seccion.icono];
          return (
            <motion.div
              key={seccion.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 mb-12"
            >
              <div className="flex items-center mb-6">
                <IconComponent className={`w-12 h-12 text-${seccion.iconColor} mr-4`} />
                <h2 className={`text-3xl font-bold text-${seccion.iconColor}`}>
                  {seccion.titulo}
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="space-y-6 text-gray-300">
                  <p className="leading-relaxed">
                    {seccion.contenido.parrafo1}
                  </p>
                  <p className="leading-relaxed">
                    {seccion.contenido.parrafo2}
                  </p>
                </div>
                
                <div className="flex justify-center">
                  <div className="overflow-hidden rounded-lg border-2 border-gray-600 hover:border-${seccion.iconColor} transition-colors duration-300">
                    <img 
                      src={seccion.imagen} 
                      alt={seccion.titulo}
                      className="w-full max-w-md h-64 object-cover hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMzc0MTUxIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0iY2VudHJhbCIgZmlsbD0iIzlDQTNBRiIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2Ij5JbWFnZW4gbm8gZGlzcG9uaWJsZTwvdGV4dD4KPC9zdmc+';
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Mensaje final */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center p-8 bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-xl border border-green-600/30 mb-12"
        >
          <h3 className="text-2xl font-bold text-green-400 mb-4">🎯 Análisis Completado</h3>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Este análisis integral del caso GTA VI nos proporciona valiosas lecciones sobre ciberseguridad, 
            derecho digital y las complejas implicaciones legales en la era tecnológica moderna.
          </p>
        </motion.div>

        {/* Sección del QR Code */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center p-8 bg-gray-800/50 rounded-xl border border-gray-700"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
            📱 Accede a esta Investigación
          </h3>
          <p className="text-gray-300 mb-8 text-lg">
            Escanea el código QR para visitar esta página desde tu dispositivo móvil
          </p>
          <div className="flex justify-center">
            <div className="bg-white p-6 rounded-xl shadow-2xl">
              <img 
                src="/assets/imgs/qr.png" 
                alt="QR Code para acceder a la investigación del caso GTA VI"
                className="w-48 h-48 sm:w-56 sm:h-56 mx-auto"
              />
            </div>
          </div>
          <p className="text-gray-400 mt-6 text-sm">
            Código QR con enlace directo a la investigación completa
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default CierrePage;