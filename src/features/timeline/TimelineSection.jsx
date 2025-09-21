import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, Clock, AlertTriangle, Shield, Eye, Gavel } from 'lucide-react';

const TimelineSection = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const timelineEvents = [
    {
      id: 1,
      date: '17 Sep 2022',
      time: '22:00 UTC',
      title: 'Acceso Inicial',
      description: 'Primer acceso no autorizado detectado en sistemas de Rockstar',
      details: 'El atacante logró acceso inicial mediante credenciales comprometidas obtenidas a través de ingeniería social. Se detectaron patrones anómalos de acceso en los logs del sistema.',
      icon: AlertTriangle,
      severity: 'high',
      category: 'breach'
    },
    {
      id: 2,
      date: '18 Sep 2022',
      time: '02:30 UTC',
      title: 'Infiltración en Slack',
      description: 'Acceso a canales internos de comunicación',
      details: 'El atacante accedió a múltiples canales de Slack internos, incluyendo canales de desarrollo y QA. Se observó actividad de reconocimiento y mapeo de la infraestructura interna.',
      icon: Eye,
      severity: 'critical',
      category: 'escalation'
    },
    {
      id: 3,
      date: '18 Sep 2022',
      time: '08:15 UTC',
      title: 'Exfiltración Masiva',
      description: 'Inicio de descarga masiva de archivos multimedia',
      details: 'Comenzó la descarga sistemática de videos de desarrollo, capturas de pantalla y fragmentos de código fuente. Se transfirieron aproximadamente 3TB de datos.',
      icon: Shield,
      severity: 'critical',
      category: 'exfiltration'
    },
    {
      id: 4,
      date: '18 Sep 2022',
      time: '14:20 UTC',
      title: 'Primera Publicación',
      description: 'Aparición de videos filtrados en GTAForums',
      details: 'Los primeros 90 videos de gameplay de GTA VI aparecen en el foro GTAForums. La comunidad gaming mundial reacciona con shock y emoción.',
      icon: Calendar,
      severity: 'high',
      category: 'disclosure'
    },
    {
      id: 5,
      date: '18 Sep 2022',
      time: '16:45 UTC',
      title: 'Notificación a Rockstar',
      description: 'Rockstar Games es notificado oficialmente del breach',
      details: 'El equipo de seguridad de Rockstar confirma la autenticidad de los materiales filtrados y activa protocolos de respuesta a incidentes.',
      icon: AlertTriangle,
      severity: 'medium',
      category: 'response'
    },
    {
      id: 6,
      date: '18 Sep 2022',
      time: '18:00 UTC',
      title: 'Contención',
      description: 'Accesos comprometidos deshabilitados',
      details: 'Se revocan todos los accesos sospechosos, se implementa autenticación multifactor adicional y se inicia auditoría completa de sistemas.',
      icon: Shield,
      severity: 'medium',
      category: 'containment'
    },
    {
      id: 7,
      date: '19 Sep 2022',
      time: '09:30 UTC',
      title: 'Declaración Oficial',
      description: 'Rockstar confirma públicamente el incidente',
      details: 'Rockstar Games publica una declaración oficial confirmando el breach y asegurando que no se vio comprometida información de jugadores.',
      icon: Calendar,
      severity: 'low',
      category: 'communication'
    },
    {
      id: 8,
      date: '19 Sep 2022',
      time: '12:00 UTC',
      title: 'Investigación FBI',
      description: 'FBI inicia investigación criminal',
      details: 'Las autoridades federales estadounidenses inician una investigación criminal formal. Se coordina con autoridades internacionales.',
      icon: Gavel,
      severity: 'medium',
      category: 'investigation'
    },
    {
      id: 9,
      date: '20 Sep 2022',
      time: '15:30 UTC',
      title: 'Arresto',
      description: 'Arresto del sospechoso principal',
      details: 'Un adolescente de 17 años es arrestado en el Reino Unido en conexión con el hack. Se incautan equipos y se inicia proceso legal.',
      icon: Gavel,
      severity: 'low',
      category: 'resolution'
    },
    {
      id: 10,
      date: '14 Dec 2023',
      time: '10:00 UTC',
      title: 'Sentencia',
      description: 'Sentencia final: 5 años en institución segura',
      details: 'El tribunal sentenció al hacker, ahora de 18 años, a permanecer en una institución médica segura por tiempo indefinido debido a su intención declarada de continuar con actividades cibercriminales.',
      icon: Gavel,
      severity: 'low',
      category: 'resolution'
    }
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'text-red-500 border-red-500';
      case 'high': return 'text-orange-500 border-orange-500';
      case 'medium': return 'text-yellow-500 border-yellow-500';
      case 'low': return 'text-green-500 border-green-500';
      default: return 'text-gray-500 border-gray-500';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'breach': return 'bg-red-900/30';
      case 'escalation': return 'bg-orange-900/30';
      case 'exfiltration': return 'bg-purple-900/30';
      case 'disclosure': return 'bg-pink-900/30';
      case 'response': return 'bg-blue-900/30';
      case 'containment': return 'bg-cyan-900/30';
      case 'communication': return 'bg-indigo-900/30';
      case 'investigation': return 'bg-yellow-900/30';
      case 'resolution': return 'bg-green-900/30';
      default: return 'bg-gray-900/30';
    }
  };

  return (
    <section id="timeline" className="full-page-section bg-gradient-to-b from-gray-900 to-black relative overflow-hidden py-8">

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
            Línea de Tiempo del Incidente
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Cronología detallada del hackeo más significativo en la historia de los videojuegos
          </p>
          
          <br />
          <br />
        </motion.div>

        <div className="max-w-7xl mx-auto flex-1 flex flex-col justify-center">
          {/* Timeline principal */}
          <div className="relative px-4 max-h-[70vh] overflow-y-auto">
            {/* Línea central */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyber-blue to-electric-blue shadow-lg shadow-cyber-blue/50"></div>

            {timelineEvents.slice(0, 6).map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'flex-row-reverse' : ''
                }`}
              >
                {/* Contenido del evento */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
                  <motion.div
                    className={`p-8 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 shadow-lg ${getCategoryColor(event.category)} ${getSeverityColor(event.severity)} ${
                      selectedEvent === event.id ? 'ring-2 ring-hacker-cyan' : ''
                    }`}
                    onClick={() => setSelectedEvent(selectedEvent === event.id ? null : event.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center mb-3">
                      <event.icon className={`w-6 h-6 mr-3 ${getSeverityColor(event.severity).split(' ')[0]}`} />
                      <div>
                        <h3 className="text-xl font-bold text-white">{event.title}</h3>
                        <div className="flex items-center text-sm text-gray-400 mt-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{event.date}</span>
                          <Clock className="w-4 h-4 ml-3 mr-1" />
                          <span>{event.time}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed">{event.description}</p>
                    
                    <br />
                    
                    {selectedEvent === event.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="border-t border-gray-600 pt-3 mt-3"
                      >
                        <p className="text-sm text-gray-400">{event.details}</p>
                      </motion.div>
                    )}
                  </motion.div>
                </div>

                {/* Punto central */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-cyber-blue bg-black z-10">
                  <div className="absolute inset-1 rounded-full bg-cyber-blue animate-pulse"></div>
                </div>

                {/* Espacio vacío del otro lado */}
                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Estadísticas finales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 flex justify-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
            <motion.div 
              className="text-center p-8 neon-border rounded-xl bg-black/90 backdrop-blur-sm hover:bg-black/95 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-4xl font-bold text-red-500 mb-3">456 días</div>
              <div className="text-gray-400 text-lg font-mono">Duración total del caso</div>
            </motion.div>
            <motion.div 
              className="text-center p-8 neon-border rounded-xl bg-black/90 backdrop-blur-sm hover:bg-black/95 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-4xl font-bold text-cyber-blue mb-3">$5B+</div>
              <div className="text-gray-400 text-lg font-mono">Impacto económico estimado</div>
            </motion.div>
            <motion.div 
              className="text-center p-8 neon-border rounded-xl bg-black/90 backdrop-blur-sm hover:bg-black/95 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-4xl font-bold text-yellow-500 mb-3">Global</div>
              <div className="text-gray-400 text-lg font-mono">Alcance mediático</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineSection;
