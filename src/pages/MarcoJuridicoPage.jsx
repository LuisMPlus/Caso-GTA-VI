import { motion } from "framer-motion";
import {
  Scale,
  BookOpen,
  Gavel,
  FileText,
  Users,
  Shield,
  Building,
  AlertTriangle,
  Search,
} from "lucide-react";
import { MARCO_JURIDICO_CONTENT } from "../data/marcoJuridico";
import { useState } from "react";

const MarcoJuridicoPage = () => {
  const {
    pageHeader,
    leyJerarquia,
    estructuraLegal,
    derechosIntervinientes,
    consideracionesEspeciales,
    marcoJuridicoAplicable,
    procedimientoInvestigativo,
  } = MARCO_JURIDICO_CONTENT;

  const [expandedDelito, setExpandedDelito] = useState(null);

  const toggleDelito = (index) => {
    setExpandedDelito(expandedDelito === index ? null : index);
  };

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
            <Scale className="w-16 h-16 text-yellow-400 mr-4" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
              {pageHeader.title}
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            {pageHeader.subtitle}
          </p>
        </motion.div>

        {/* Sección 1: La Ley y la jerarquía normativa */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 mb-12"
        >
          <div className="flex items-center mb-6">
            <BookOpen className="w-12 h-12 text-blue-400 mr-4" />
            <h2 className="text-3xl font-bold text-blue-400">
              {leyJerarquia.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-gray-300 mb-4">{leyJerarquia.concepto}</p>
              <p className="text-gray-300">{leyJerarquia.organizacion}</p>
            </div>
            <div className="flex justify-center">
              <img
                src={leyJerarquia.imagen}
                alt="Pirámide Jurídica Argentina"
                className="max-w-full h-auto rounded-lg border border-gray-600"
              />
            </div>
          </div>

          <div className="bg-gray-700/50 rounded-lg p-6">
            <h4 className="text-xl font-bold text-green-400 mb-4">
              {leyJerarquia.aplicacionCaso.argentina.title}
            </h4>
            <ul className="space-y-2">
              {leyJerarquia.aplicacionCaso.argentina.puntos.map(
                (punto, index) => (
                  <li key={index} className="text-gray-300 text-sm">
                    • {punto}
                  </li>
                )
              )}
            </ul>
          </div>
        </motion.div>

        {/* Sección 2: Estructura Legal Argentina */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 mb-12"
        >
          <div className="flex items-center mb-6">
            <Building className="w-12 h-12 text-purple-400 mr-4" />
            <h2 className="text-3xl font-bold text-purple-400">
              {estructuraLegal.title}
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-gray-300">{estructuraLegal.definicion}</p>
            <p className="text-gray-300">{estructuraLegal.principios}</p>
            <p className="text-gray-300">{estructuraLegal.estadoDerecho}</p>

            <div className="bg-gray-700/50 rounded-lg p-6">
              <h4 className="text-xl font-bold text-yellow-400 mb-4">
                {estructuraLegal.aplicacionPoderes.title}
              </h4>
              <p className="text-gray-300 mb-6">
                {estructuraLegal.aplicacionPoderes.intro}
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {estructuraLegal.aplicacionPoderes.poderes.map(
                  (poder, index) => (
                    <div key={index} className="bg-gray-600/50 rounded-lg p-4">
                      <h5 className="font-bold text-blue-300 mb-2">
                        {poder.nombre}:
                      </h5>
                      <p className="text-gray-300 text-sm">{poder.funcion}</p>
                    </div>
                  )
                )}
              </div>

              <h5 className="font-bold text-green-400 mb-3">
                El Estado de Derecho asegura que:
              </h5>
              <ul className="space-y-1">
                {estructuraLegal.aplicacionPoderes.normasyGarantias.map(
                  (garantia, index) => (
                    <li key={index} className="text-gray-300 text-sm">
                      • {garantia}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Sección 3: Derechos Intervinientes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 mb-12"
        >
          <div className="flex items-center mb-6">
            <Shield className="w-12 h-12 text-green-400 mr-4" />
            <h2 className="text-3xl font-bold text-green-400">
              {derechosIntervinientes.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {derechosIntervinientes.areas.map((area, index) => (
              <div key={index} className="bg-gray-700/50 rounded-lg p-6">
                <h4 className="text-lg font-bold text-blue-300 mb-3">
                  {area.nombre}
                </h4>
                <p className="text-gray-300 text-sm">{area.descripcion}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Sección 4: Consideraciones Especiales */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 mb-12"
        >
          <div className="flex items-center mb-6">
            <AlertTriangle className="w-12 h-12 text-orange-400 mr-4" />
            <h2 className="text-3xl font-bold text-orange-400">
              {consideracionesEspeciales.title}
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-700/50 rounded-lg p-6">
              <h4 className="text-lg font-bold text-red-400 mb-3">
                Autismo y Responsabilidad Penal
              </h4>
              <p className="text-gray-300">
                {consideracionesEspeciales.autismo}
              </p>
            </div>

            <div className="bg-gray-700/50 rounded-lg p-6">
              <h4 className="text-lg font-bold text-blue-400 mb-3">
                Menor de Edad
              </h4>
              <p className="text-gray-300 mb-3">
                {consideracionesEspeciales.menorEdad.intro}
              </p>
              <ul className="space-y-1">
                {consideracionesEspeciales.menorEdad.reglas.map(
                  (regla, index) => (
                    <li key={index} className="text-gray-300">
                      • {regla}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Sección 5: Marco Jurídico Aplicable */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 mb-12"
        >
          <div className="flex items-center mb-6">
            <Gavel className="w-12 h-12 text-red-400 mr-4" />
            <h2 className="text-3xl font-bold text-red-400">
              {marcoJuridicoAplicable.title}
            </h2>
          </div>

          <div className="space-y-4">
            {marcoJuridicoAplicable.delitos.map((delito, index) => (
              <div
                key={index}
                className="border border-gray-600 rounded-lg overflow-hidden"
              >
                <div
                  className="bg-gray-700/50 p-4 cursor-pointer hover:bg-gray-600/50 transition-colors"
                  onClick={() => toggleDelito(index)}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-lg font-bold text-yellow-400">
                        {delito.titulo}
                      </h4>
                      <p className="text-red-300 font-semibold">
                        {delito.penaSimple}
                      </p>
                      <p className="text-gray-300 text-sm">
                        {delito.explicacion}
                      </p>
                    </div>
                    <div className="text-2xl text-gray-400">
                      {expandedDelito === index ? "−" : "+"}
                    </div>
                  </div>
                </div>

                {expandedDelito === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="bg-gray-800/50 p-6 border-t border-gray-600"
                  >
                    <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                      {delito.texto}
                    </p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Sección 6: Procedimiento Investigativo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 mb-12"
        >
          <div className="flex items-center mb-6">
            <Search className="w-12 h-12 text-cyan-400 mr-4" />
            <h2 className="text-3xl font-bold text-cyan-400">{procedimientoInvestigativo.title}</h2>
          </div>
          
          <div className="space-y-6">
            <p className="text-gray-300">{procedimientoInvestigativo.concepto}</p>
            
            <div className="bg-gray-700/50 rounded-lg p-6">
              <h4 className="text-xl font-bold text-yellow-400 mb-6">{procedimientoInvestigativo.subtitulo}</h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                {procedimientoInvestigativo.etapas.map((etapa, index) => (
                  <div key={index} className="bg-gray-600/50 rounded-lg p-4">
                    <h5 className="font-bold text-blue-300 mb-2">{etapa.titulo}</h5>
                    <p className="text-gray-300 text-sm">{etapa.descripcion}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MarcoJuridicoPage;
