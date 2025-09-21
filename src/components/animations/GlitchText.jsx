import { useState, useEffect } from 'react';

const GlitchText = ({ 
  text, 
  className = '', 
  intensity = 0.1, 
  colors = ['#00FF41', '#FF0000', '#0000FF', '#FFFF00'],
  duration = 3000 
}) => {
  const [isGlitching, setIsGlitching] = useState(false);
  const [glitchText, setGlitchText] = useState(text);

  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?~`';
  
  const generateGlitchText = (originalText) => {
    return originalText
      .split('')
      .map(char => {
        if (Math.random() < intensity) {
          return glitchChars[Math.floor(Math.random() * glitchChars.length)];
        }
        return char;
      })
      .join('');
  };

  useEffect(() => {
    const triggerGlitch = () => {
      setIsGlitching(true);
      
      // Crear múltiples frames de glitch
      let frameCount = 0;
      const maxFrames = 8;
      
      const glitchInterval = setInterval(() => {
        setGlitchText(generateGlitchText(text));
        frameCount++;
        
        if (frameCount >= maxFrames) {
          clearInterval(glitchInterval);
          setGlitchText(text);
          setIsGlitching(false);
        }
      }, 50);
    };

    const randomDelay = Math.random() * duration + 1000;
    const timeout = setTimeout(triggerGlitch, randomDelay);

    const interval = setInterval(() => {
      triggerGlitch();
    }, duration);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, intensity, duration]);

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <span 
      className={`${className} relative inline-block transition-all duration-75 ${
        isGlitching ? 'animate-pulse' : ''
      }`}
      style={{
        color: isGlitching ? getRandomColor() : undefined,
        textShadow: isGlitching 
          ? `2px 0 ${getRandomColor()}, -2px 0 ${getRandomColor()}, 0 2px ${getRandomColor()}, 0 -2px ${getRandomColor()}`
          : undefined,
        transform: isGlitching 
          ? `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)` 
          : 'none'
      }}
    >
      {glitchText}
      {isGlitching && (
        <>
          <span 
            className="absolute top-0 left-0 opacity-70 mix-blend-multiply"
            style={{
              color: getRandomColor(),
              transform: 'translate(-2px, 0)',
              clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)'
            }}
          >
            {glitchText}
          </span>
          <span 
            className="absolute top-0 left-0 opacity-70 mix-blend-multiply"
            style={{
              color: getRandomColor(),
              transform: 'translate(2px, 0)',
              clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)'
            }}
          >
            {glitchText}
          </span>
        </>
      )}
    </span>
  );
};

export default GlitchText;
