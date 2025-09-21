import { useState, useEffect } from 'react';

const TypewriterText = ({ 
  text, 
  speed = 50, 
  delay = 0, 
  className = '', 
  onComplete = null,
  cursor = true,
  loop = false
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, currentIndex === 0 ? delay : speed);

      return () => clearTimeout(timeout);
    } else if (!isComplete) {
      setIsComplete(true);
      if (onComplete) onComplete();
      
      if (loop) {
        setTimeout(() => {
          setDisplayedText('');
          setCurrentIndex(0);
          setIsComplete(false);
        }, 2000);
      }
    }
  }, [currentIndex, text, speed, delay, onComplete, isComplete, loop]);

  useEffect(() => {
    if (cursor) {
      const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 530);

      return () => clearInterval(cursorInterval);
    }
  }, [cursor]);

  return (
    <span className={`${className} font-mono`}>
      {displayedText}
      {cursor && (
        <span 
          className={`inline-block w-0.5 h-5 ml-1 bg-hacker-green transition-opacity duration-100 ${
            showCursor ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
    </span>
  );
};

export default TypewriterText;
