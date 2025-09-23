import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, Clock, ChevronRight, AlertTriangle } from 'lucide-react';
import { TIMELINE_EVENTS } from '../../data/constants';

const TimelineSection = () => {
  const [expandedEvent, setExpandedEvent] = useState(null);

  const timelineEvents = TIMELINE_EVENTS;

  const getSeverityIcon = (severity) => {
    switch (severity) {
      case 'critical': return '🔴';
      case 'high': return '🟠';
      case 'medium': return '🟡';
      case 'low': return '🟢';
      default: return '⚪';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'border-red-500 bg-red-500/10';
      case 'high': return 'border-orange-500 bg-orange-500/10';
      case 'medium': return 'border-yellow-500 bg-yellow-500/10';
      case 'low': return 'border-green-500 bg-green-500/10';
      default: return 'border-gray-500 bg-gray-500/10';
    }
  };

  return (
    <section id="timeline" className="bg-gradient-to-b from-gray-900 via-gray-900 to-black py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Línea de Tiempo del Incidente
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cronología detallada del hackeo que sacudió a la industria de los videojuegos
          </p>
        </motion.div>

        <div className=" mx-auto">
          {/* Timeline en zigzag con línea central */}
          <div className="relative">
            {/* Línea central vertical */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#ffb90f] via-[#E68B4E] to-[#4EADE6] shadow-lg hidden md:block"></div>
            {/* Línea izquierda para móvil */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ffb90f] via-[#E68B4E] to-[#4EADE6] shadow-lg md:hidden"></div>

            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:justify-start justify-start' : 'md:justify-end justify-start'
                }`}
              >
                {/* Contenido del evento */}
                <div className={`md:w-5/12 w-full ${
                  index % 2 === 0 ? 'md:pr-8 ml-20 md:ml-0' : 'md:pl-8 ml-20 md:ml-0'
                }`}>
                  <motion.div
                    className={`
                      p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer
                      ${getSeverityColor(event.severity)}
                      hover:scale-105 hover:shadow-xl
                      ${expandedEvent === event.id ? 'ring-2 ring-[#ffb90f]/50' : ''}
                      ${index % 2 === 0 ? 'md:text-left text-left' : 'md:text-right text-left'}
                    `}
                    onClick={() => setExpandedEvent(expandedEvent === event.id ? null : event.id)}
                    whileHover={{ y: -3 }}
                  >
                    {/* Header del evento */}
                    <div className={`flex items-start mb-4 ${
                      index % 2 === 0 ? 'md:flex-row flex-row' : 'md:flex-row-reverse flex-row'
                    }`}>
                      <div className={`flex items-center space-x-3 ${
                        index % 2 === 0 ? 'md:space-x-3 space-x-3' : 'md:flex-row-reverse md:space-x-reverse flex-row space-x-3'
                      }`}>
                        <span className="text-2xl">{event.icon}</span>
                        <div className={index % 2 === 0 ? 'md:text-left text-left' : 'md:text-right text-left'}>
                          <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
                          <div className={`flex items-center text-sm text-gray-400 space-x-3 ${
                            index % 2 === 0 ? 'md:justify-start justify-start' : 'md:justify-end md:flex-row-reverse md:space-x-reverse justify-start flex-row space-x-3'
                          }`}>
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {event.date}
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {event.time}
                            </div>
                            <div className="flex items-center">
                              <span className="mr-1">{getSeverityIcon(event.severity)}</span>
                              <span className="capitalize">{event.severity}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedEvent === event.id ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                        className={index % 2 === 0 ? 'md:ml-auto ml-auto' : 'md:mr-auto ml-auto'}
                      >
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </motion.div>
                    </div>

                    {/* Descripción */}
                    <p className="text-gray-300 leading-relaxed mb-3">
                      {event.description}
                    </p>

                    {/* Detalles expandibles */}
                    {expandedEvent === event.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-gray-600 pt-4 mt-4"
                      >
                        <div className="bg-gray-800/50 p-4 rounded-lg">
                          <h4 className="font-semibold text-white mb-2 flex items-center">
                            <AlertTriangle className="w-4 h-4 mr-2 text-yellow-500" />
                            Detalles del Incidente
                          </h4>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {event.details}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </div>

                {/* Punto central en la línea - Desktop */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-gray-900 bg-gradient-to-r from-[#ffb90f] to-[#E68B4E] shadow-lg z-10 hidden md:block">
                  <div className="absolute inset-1 rounded-full bg-gradient-to-r from-[#ffb90f] to-[#E68B4E] animate-pulse"></div>
                </div>

                {/* Punto izquierdo en la línea - Móvil */}
                <div className="absolute left-6 w-6 h-6 rounded-full border-4 border-gray-900 bg-gradient-to-r from-[#ffb90f] to-[#E68B4E] shadow-lg z-10 md:hidden">
                  <div className="absolute inset-1 rounded-full bg-gradient-to-r from-[#ffb90f] to-[#E68B4E] animate-pulse"></div>
                </div>

                {/* Línea conectora al punto central - Solo Desktop */}
                <div className={`absolute top-1/2 transform -translate-y-1/2 h-0.5 bg-gradient-to-r hidden md:block ${
                  index % 2 === 0 
                    ? 'right-1/2 mr-3 from-transparent to-[#ffb90f] w-8' 
                    : 'left-1/2 ml-3 from-[#ffb90f] to-transparent w-8'
                }`}></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Estadísticas finales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div 
              className="text-center p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-[#ffb90f]/50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-3xl font-bold text-red-400 mb-2">456 días</div>
              <div className="text-gray-400 text-sm">Duración total del caso</div>
            </motion.div>
            <motion.div 
              className="text-center p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-[#ffb90f]/50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-3xl font-bold text-[#4EADE6] mb-2">$5B+</div>
              <div className="text-gray-400 text-sm">Impacto económico estimado</div>
            </motion.div>
            <motion.div 
              className="text-center p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-[#ffb90f]/50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-3xl font-bold text-[#ffb90f] mb-2">Global</div>
              <div className="text-gray-400 text-sm">Alcance mediático</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineSection;
