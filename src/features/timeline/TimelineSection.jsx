import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, Clock, ChevronRight, AlertTriangle } from "lucide-react";
import { TIMELINE_EVENTS } from "../../data/constants";

const TimelineSection = () => {
  const [expandedEvent, setExpandedEvent] = useState(null);

  return (
    <section id="timeline" className="bg-gradient-to-b from-gray-900 via-gray-900 to-black py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white">
            Línea de Tiempo del Incidente
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Cronología detallada del hackeo que sacudió a la industria de los videojuegos
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#ffb90f] via-[#E68B4E] to-[#4EADE6] shadow-lg hidden lg:block"></div>
            <div className="absolute left-3 sm:left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ffb90f] via-[#E68B4E] to-[#4EADE6] shadow-lg lg:hidden"></div>

            {TIMELINE_EVENTS.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-start mb-6 md:mb-8 lg:mb-12 ${
                  index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'
                } justify-start`}
              >
                <div className={`w-full lg:w-5/12 ${
                  index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'
                } ml-8 sm:ml-10 lg:ml-0`}>
                  <motion.div
                    className="p-3 sm:p-4 lg:p-6 rounded-xl border-2 border-gray-700 bg-gray-800/50 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-xl"
                    onClick={() => setExpandedEvent(expandedEvent === event.id ? null : event.id)}
                    whileHover={{ y: -3 }}
                  >
                    <div className="flex items-start justify-between mb-3 sm:mb-4">
                      <div className="flex items-start space-x-2 sm:space-x-3 flex-1 min-w-0">
                        <span className="text-lg sm:text-xl lg:text-2xl mt-1 flex-shrink-0">{event.icon}</span>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm sm:text-base lg:text-xl font-bold text-white mb-2 leading-tight pr-2">{event.title}</h3>
                          <div className="flex flex-col space-y-1">
                            <div className="flex items-center text-xs sm:text-sm text-gray-400">
                              <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
                              <span className="truncate">{event.date}</span>
                            </div>
                            <div className="flex items-center text-xs sm:text-sm text-gray-400">
                              <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
                              <span className="truncate">{event.time}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedEvent === event.id ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-2 flex-shrink-0"
                      >
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                      </motion.div>
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-3 text-xs sm:text-sm lg:text-base">
                      {event.description}
                    </p>

                    {expandedEvent === event.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-gray-600 pt-3 sm:pt-4 mt-3 sm:mt-4"
                      >
                        <div className="bg-gray-700/50 p-3 sm:p-4 rounded-lg">
                          <h4 className="font-semibold text-white mb-2 flex items-center text-xs sm:text-sm lg:text-base">
                            <AlertTriangle className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-yellow-500 flex-shrink-0" />
                            Detalles del Incidente
                          </h4>
                          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                            {event.details}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </div>

                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 lg:w-6 lg:h-6 rounded-full border-2 lg:border-4 border-gray-900 bg-gradient-to-r from-[#ffb90f] to-[#E68B4E] shadow-lg z-10 hidden lg:block">
                  <div className="absolute inset-0.5 lg:inset-1 rounded-full bg-gradient-to-r from-[#ffb90f] to-[#E68B4E] animate-pulse"></div>
                </div>

                {/* Línea conectora al punto central - Solo Desktop */}
                <div className={`absolute top-1/2 transform -translate-y-1/2 h-0.5 bg-gradient-to-r hidden lg:block ${
                  index % 2 === 0 
                    ? 'right-1/2 mr-3 from-transparent to-[#ffb90f] w-6 lg:w-8' 
                    : 'left-1/2 ml-3 from-[#ffb90f] to-transparent w-6 lg:w-8'
                }`}></div>

                <div className="absolute left-1 sm:left-2 w-4 h-4 rounded-full border-2 border-gray-900 bg-gradient-to-r from-[#ffb90f] to-[#E68B4E] shadow-lg z-10 lg:hidden">
                  <div className="absolute inset-0.5 rounded-full bg-gradient-to-r from-[#ffb90f] to-[#E68B4E] animate-pulse"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 md:mt-12 lg:mt-20"
        >
          
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineSection;
