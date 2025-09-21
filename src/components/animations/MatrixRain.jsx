import { useEffect, useRef } from 'react';

const MatrixRain = ({ intensity = 50, speed = 1 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const columns = Math.floor(container.offsetWidth / 20);
    const drops = [];

    // Inicializar las gotas
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    const createDrop = () => {
      const drop = document.createElement('div');
      drop.className = 'matrix-char';
      drop.textContent = characters[Math.floor(Math.random() * characters.length)];
      drop.style.left = Math.random() * container.offsetWidth + 'px';
      drop.style.animationDuration = (Math.random() * 3 + 2) / speed + 's';
      drop.style.fontSize = Math.random() * 10 + 10 + 'px';
      drop.style.opacity = Math.random() * 0.3 + 0.1;
      
      container.appendChild(drop);

      // Remover el elemento después de la animación
      setTimeout(() => {
        if (container.contains(drop)) {
          container.removeChild(drop);
        }
      }, (5000 / speed));
    };

    // Crear gotas a intervalos regulares
    const interval = setInterval(() => {
      if (Math.random() < intensity / 100) {
        createDrop();
      }
    }, 100);

    return () => {
      clearInterval(interval);
      // Limpiar elementos restantes
      const chars = container.querySelectorAll('.matrix-char');
      chars.forEach(char => {
        if (container.contains(char)) {
          container.removeChild(char);
        }
      });
    };
  }, [intensity, speed]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{
        background: 'radial-gradient(circle at center, transparent 0%, rgba(10, 10, 10, 0.8) 100%)'
      }}
    />
  );
};

export default MatrixRain;
