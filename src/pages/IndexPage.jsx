import MatrixRain from '../components/animations/MatrixRain';
import HeroSection from '../features/hero/HeroSection';
import TimelineSection from '../features/timeline/TimelineSection';
import CaseSection from '../features/case/CaseSection';

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
      </div>
    </div>
  );
};

export default IndexPage;