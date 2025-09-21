
import { useEffect } from 'react';
import Navbar from './components/ui/Navbar';
import SectionDots from './components/ui/SectionDots';
import MatrixRain from './components/animations/MatrixRain';
import HeroSection from './features/hero/HeroSection';
import TimelineSection from './features/timeline/TimelineSection';
import EvidenceGallery from './features/evidence/EvidenceGallery';
import TerminalComponent from './features/terminal/TerminalComponent';
import { useFullPageScroll } from './hooks/useFullPageScroll';
import './styles/globals.css';

function App() {
  const sections = ['hero', 'timeline', 'evidence', 'terminal'];
  const { currentSection, scrollToSection, isScrolling } = useFullPageScroll(sections);

  useEffect(() => {
    // Asegurar que la página comience desde arriba
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <div className="relative bg-dark-blue text-white">
      {/* Navbar */}
      <Navbar onSectionClick={scrollToSection} />
      
      {/* Navegación por puntos */}
      <SectionDots 
        sections={sections}
        currentSection={currentSection}
        onSectionClick={scrollToSection}
      />
      
      {/* Efecto Matrix Rain de fondo */}
      <MatrixRain intensity={15} speed={1.5} />
      
      {/* Contenido principal con scroll controlado */}
      <div className="relative z-10">
        <HeroSection />
        <TimelineSection />
        <EvidenceGallery />
        <TerminalComponent />
      </div>
      
      {/* Indicador de scroll */}
      {isScrolling && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-black/80 px-4 py-2 rounded-lg">
          <div className="text-cyber-blue font-mono">Navegando...</div>
        </div>
      )}
    </div>
  );
}

export default App
