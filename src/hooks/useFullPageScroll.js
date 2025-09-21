import { useState, useEffect, useCallback } from 'react';

export const useFullPageScroll = (sections) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToSection = useCallback((sectionIndex) => {
    if (isScrolling || sectionIndex < 0 || sectionIndex >= sections.length) return;

    setIsScrolling(true);
    setCurrentSection(sectionIndex);

    const element = document.getElementById(sections[sectionIndex]);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }

    // Evitar múltiples scrolls rápidos
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  }, [sections, isScrolling]);

  const handleWheel = useCallback((e) => {
    e.preventDefault();
    
    if (isScrolling) return;

    if (e.deltaY > 0) {
      // Scroll hacia abajo
      scrollToSection(currentSection + 1);
    } else {
      // Scroll hacia arriba
      scrollToSection(currentSection - 1);
    }
  }, [currentSection, scrollToSection, isScrolling]);

  const handleKeyDown = useCallback((e) => {
    if (isScrolling) return;

    switch (e.key) {
      case 'ArrowDown':
      case 'PageDown':
        e.preventDefault();
        scrollToSection(currentSection + 1);
        break;
      case 'ArrowUp':
      case 'PageUp':
        e.preventDefault();
        scrollToSection(currentSection - 1);
        break;
      case 'Home':
        e.preventDefault();
        scrollToSection(0);
        break;
      case 'End':
        e.preventDefault();
        scrollToSection(sections.length - 1);
        break;
      default:
        break;
    }
  }, [currentSection, scrollToSection, isScrolling, sections.length]);

  useEffect(() => {
    // Deshabilitar scroll nativo
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    // Agregar event listeners
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    // Prevenir scroll en móvil
    const preventTouch = (e) => {
      if (e.touches.length > 1) return;
      e.preventDefault();
    };

    document.addEventListener('touchmove', preventTouch, { passive: false });

    return () => {
      // Restaurar scroll nativo
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';

      // Remover event listeners
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('touchmove', preventTouch);
    };
  }, [handleWheel, handleKeyDown]);

  return {
    currentSection,
    scrollToSection,
    isScrolling
  };
};
