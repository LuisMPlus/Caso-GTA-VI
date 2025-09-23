import MatrixRain from "../components/animations/MatrixRain";
import HeroSection from "../features/hero/HeroSection";
import TimelineSection from "../features/timeline/TimelineSection";
import CaseSection from "../features/case/CaseSection";

const IndexPage = () => {
  return (
    <div className="relative bg-dark-blue text-white min-h-screen">
      {/* Efecto Matrix Rain de fondo */}
      <MatrixRain intensity={15} speed={1.5} />

      {/* Contenido principal */}
      <div className="relative z-10">
        <HeroSection />
        <CaseSection />
        <TimelineSection />

        {/* Sección del Tweet de Confirmación */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-cyber-blue">
              Confirmación Oficial
            </h2>
            <div className="bg-dark-gray/30 backdrop-blur-sm rounded-xl  p-6">
              <div className="max-w-lg mx-auto">
                <img
                  src="/assets/imgs/tweet-rockstar-confirmacion.jpg"
                  alt="Tweet de Rockstar confirmando el hackeo de GTA VI"
                  className="w-full mx-auto rounded-lg shadow-2xl border border-cyber-blue/30 hover:border-cyber-blue/70 hover:scale-105 hover:shadow-3xl transition-all duration-500 ease-out cursor-pointer"
                />
              </div>

              <p className="text-gray-300 mt-4 text-sm">
                Tweet oficial de Rockstar Games confirmando el incidente de
                seguridad
                <br />
                <a
                  href="https://x.com/RockstarGames/status/1571849091860029455"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyber-blue hover:text-white transition-colors duration-300 underline"
                >
                  Ver tweet original
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default IndexPage;
