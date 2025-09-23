import { motion } from 'framer-motion';
import { User, Scale, Users, Building, Shield, Eye, FileText, Globe } from 'lucide-react';
import { useState } from 'react';
import { DERECHO_CONTENT } from '../data/derechoPersona';

const DerechoPersonaPage = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  const sections = [
    {
      id: 'sociedad',
      data: DERECHO_CONTENT.derechoSociedad,
      icon: Users,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'objetivo-subjetivo',
      data: DERECHO_CONTENT.derechoObjetivoSubjetivo,
      icon: Scale,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'publico-privado',
      data: DERECHO_CONTENT.derechoPublicoPrivado,
      icon: Building,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'personas-juridicas',
      data: DERECHO_CONTENT.personasJuridicas,
      icon: User,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <div className="relative bg-gradient-to-b from-gray-900 to-black text-white min-h-screen">
      <div className="container mx-auto px-6 py-16">
        {/* Header de la página */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <User className="w-16 h-16 text-[#ffb90f] mr-4" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-[#ffb90f] via-[#E68B4E] to-[#4EADE6] bg-clip-text text-transparent">
              Derecho y Persona
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Análisis de los conceptos fundamentales del derecho aplicados al caso GTA VI
          </p>
        </motion.div>

        {/* Secciones principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group cursor-pointer"
                onClick={() => setSelectedSection(selectedSection === section.id ? null : section.id)}
              >
                <div className={`
                  p-8 rounded-2xl border-2 border-gray-700 transition-all duration-300
                  hover:border-[#ffb90f]/50 hover:shadow-xl hover:shadow-[#ffb90f]/20
                  ${selectedSection === section.id ? 'border-[#ffb90f] shadow-xl shadow-[#ffb90f]/30' : ''}
                  bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm
                `}>
                  {/* Icono y título */}
                  <div className="flex items-center mb-6">
                    <div className={`
                      w-16 h-16 rounded-xl bg-gradient-to-r ${section.color}
                      flex items-center justify-center shadow-lg
                    `}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-2xl font-bold text-white">{section.data.title}</h3>
                      <p className="text-[#ffb90f] font-medium">{section.data.subtitle}</p>
                    </div>
                  </div>

                  {/* Descripción */}
                  <p className="text-gray-300 mb-4">{section.data.description}</p>

                  {/* Indicador de expansión */}
                  <div className="flex items-center text-[#ffb90f] font-semibold">
                    <span>Ver detalles</span>
                    <motion.div
                      animate={{ rotate: selectedSection === section.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-2"
                    >
                      ▼
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Contenido expandido */}
        {selectedSection && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-2xl p-8 border border-[#ffb90f]/30">
              {selectedSection === 'sociedad' && (
                <div>
                  <h3 className="text-3xl font-bold mb-6 text-[#ffb90f]">{DERECHO_CONTENT.derechoSociedad.title}</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold mb-4 text-white">Puntos Clave:</h4>
                      <ul className="space-y-3">
                        {DERECHO_CONTENT.derechoSociedad.keyPoints.map((point, idx) => (
                          <li key={idx} className="flex items-start text-gray-300">
                            <Shield className="w-5 h-5 text-[#4EADE6] mr-3 mt-0.5 flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-gray-900/50 p-6 rounded-xl">
                      <h4 className="text-lg font-semibold mb-3 text-[#E68B4E]">Aplicación al Caso GTA VI:</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        La filtración demuestra cómo una conducta antisocial digital afecta múltiples niveles sociales, 
                        requiriendo la intervención del derecho para mantener el orden y la confianza en entornos globalizados.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {selectedSection === 'objetivo-subjetivo' && (
                <div>
                  <h3 className="text-3xl font-bold mb-6 text-[#ffb90f]">{DERECHO_CONTENT.derechoObjetivoSubjetivo.title}</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-purple-900/20 p-6 rounded-xl border border-purple-500/30">
                      <div className="flex items-center mb-4">
                        <FileText className="w-6 h-6 text-purple-400 mr-3" />
                        <h4 className="text-xl font-semibold text-purple-300">{DERECHO_CONTENT.derechoObjetivoSubjetivo.objetivo.title}</h4>
                      </div>
                      <p className="text-gray-300 mb-4">{DERECHO_CONTENT.derechoObjetivoSubjetivo.objetivo.description}</p>
                      <ul className="space-y-2">
                        {DERECHO_CONTENT.derechoObjetivoSubjetivo.objetivo.examples.map((example, idx) => (
                          <li key={idx} className="text-sm text-purple-200">• {example}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-pink-900/20 p-6 rounded-xl border border-pink-500/30">
                      <div className="flex items-center mb-4">
                        <User className="w-6 h-6 text-pink-400 mr-3" />
                        <h4 className="text-xl font-semibold text-pink-300">{DERECHO_CONTENT.derechoObjetivoSubjetivo.subjetivo.title}</h4>
                      </div>
                      <p className="text-gray-300 mb-4">{DERECHO_CONTENT.derechoObjetivoSubjetivo.subjetivo.description}</p>
                      <ul className="space-y-2">
                        {DERECHO_CONTENT.derechoObjetivoSubjetivo.subjetivo.examples.map((example, idx) => (
                          <li key={idx} className="text-sm text-pink-200">• {example}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {selectedSection === 'publico-privado' && (
                <div>
                  <h3 className="text-3xl font-bold mb-6 text-[#ffb90f]">{DERECHO_CONTENT.derechoPublicoPrivado.title}</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-orange-900/20 p-6 rounded-xl border border-orange-500/30">
                      <div className="flex items-center mb-4">
                        <Globe className="w-6 h-6 text-orange-400 mr-3" />
                        <h4 className="text-xl font-semibold text-orange-300">{DERECHO_CONTENT.derechoPublicoPrivado.publico.title}</h4>
                      </div>
                      <p className="text-gray-300 mb-4">{DERECHO_CONTENT.derechoPublicoPrivado.publico.description}</p>
                      <ul className="space-y-2">
                        {DERECHO_CONTENT.derechoPublicoPrivado.publico.examples.map((example, idx) => (
                          <li key={idx} className="text-sm text-orange-200">• {example}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-red-900/20 p-6 rounded-xl border border-red-500/30">
                      <div className="flex items-center mb-4">
                        <Building className="w-6 h-6 text-red-400 mr-3" />
                        <h4 className="text-xl font-semibold text-red-300">{DERECHO_CONTENT.derechoPublicoPrivado.privado.title}</h4>
                      </div>
                      <p className="text-gray-300 mb-4">{DERECHO_CONTENT.derechoPublicoPrivado.privado.description}</p>
                      <ul className="space-y-2">
                        {DERECHO_CONTENT.derechoPublicoPrivado.privado.examples.map((example, idx) => (
                          <li key={idx} className="text-sm text-red-200">• {example}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              {selectedSection === 'personas-juridicas' && (
                <div>
                  <h3 className="text-3xl font-bold mb-6 text-[#ffb90f]">{DERECHO_CONTENT.personasJuridicas.title}</h3>
                  
                  {/* Comparación de personas */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* Persona Jurídica */}
                    <div className="bg-green-900/20 p-6 rounded-xl border border-green-500/30">
                      <div className="flex items-center mb-4">
                        <Building className="w-6 h-6 text-green-400 mr-3" />
                        <h4 className="text-xl font-semibold text-green-300">{DERECHO_CONTENT.personasJuridicas.personaJuridica.title}</h4>
                      </div>
                      
                      <div className="flex items-center mb-4">
                        <img 
                          src={DERECHO_CONTENT.personasJuridicas.personaJuridica.image} 
                          alt="Rockstar Games"
                          className="w-20 h-20 rounded-lg object-cover mr-4"
                        />
                        <p className="text-gray-300 text-sm">{DERECHO_CONTENT.personasJuridicas.personaJuridica.description}</p>
                      </div>

                      <div className="mb-4">
                        <h5 className="text-green-200 font-semibold mb-2">Características:</h5>
                        <ul className="space-y-1">
                          {DERECHO_CONTENT.personasJuridicas.personaJuridica.characteristics.map((char, idx) => (
                            <li key={idx} className="text-xs text-green-100">• {char}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="text-green-200 font-semibold mb-2">Derechos:</h5>
                        <ul className="space-y-1">
                          {DERECHO_CONTENT.personasJuridicas.personaJuridica.derechos.map((derecho, idx) => (
                            <li key={idx} className="text-xs text-green-100">• {derecho}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Persona Humana */}
                    <div className="bg-emerald-900/20 p-6 rounded-xl border border-emerald-500/30">
                      <div className="flex items-center mb-4">
                        <User className="w-6 h-6 text-emerald-400 mr-3" />
                        <h4 className="text-xl font-semibold text-emerald-300">{DERECHO_CONTENT.personasJuridicas.personaHumana.title}</h4>
                      </div>
                      
                      <div className="flex items-center mb-4">
                        <img 
                          src={DERECHO_CONTENT.personasJuridicas.personaHumana.image} 
                          alt="Hacker"
                          className="w-20 h-20 rounded-lg object-cover mr-4"
                        />
                        <p className="text-gray-300 text-sm">{DERECHO_CONTENT.personasJuridicas.personaHumana.description}</p>
                      </div>

                      <div className="mb-4">
                        <h5 className="text-emerald-200 font-semibold mb-2">Características:</h5>
                        <ul className="space-y-1">
                          {DERECHO_CONTENT.personasJuridicas.personaHumana.characteristics.map((char, idx) => (
                            <li key={idx} className="text-xs text-emerald-100">• {char}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="text-emerald-200 font-semibold mb-2">Responsabilidades:</h5>
                        <ul className="space-y-1">
                          {DERECHO_CONTENT.personasJuridicas.personaHumana.responsabilidades.map((resp, idx) => (
                            <li key={idx} className="text-xs text-emerald-100">• {resp}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Aspectos legales adicionales */}
                  <div className="bg-gray-900/50 p-6 rounded-xl">
                    <h4 className="text-lg font-semibold mb-4 text-[#E68B4E]">Aspectos Legales Relevantes:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {DERECHO_CONTENT.personasJuridicas.aspectosLegales.map((aspecto, idx) => (
                        <div key={idx} className="bg-gray-800/50 p-4 rounded-lg">
                          <h5 className="font-semibold text-white mb-2">{aspecto.title}</h5>
                          <p className="text-gray-300 text-sm">{aspecto.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Conclusión */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
        >
          <Eye className="w-12 h-12 text-[#4EADE6] mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-white">Síntesis del Análisis</h3>
          <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
            El caso GTA VI ilustra perfectamente cómo el derecho moderno debe adaptarse a los desafíos digitales, 
            manteniendo el equilibrio entre la protección de derechos individuales y el orden social en un mundo interconectado.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default DerechoPersonaPage;