import { motion } from 'framer-motion';

const SectionDots = ({ sections, currentSection, onSectionClick }) => {
  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-3">
      {sections.map((section, index) => (
        <motion.button
          key={section}
          onClick={() => onSectionClick(index)}
          className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
            currentSection === index
              ? 'bg-cyber-blue border-cyber-blue scale-125'
              : 'bg-transparent border-gray-400 hover:border-cyber-blue'
          }`}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          title={getSectionName(section)}
        >
          <span className="sr-only">{getSectionName(section)}</span>
        </motion.button>
      ))}
    </div>
  );
};

const getSectionName = (sectionId) => {
  const names = {
    'hero': 'Inicio',
    'timeline': 'Timeline',
    'evidence': 'Evidencias',
    'terminal': 'Terminal'
  };
  return names[sectionId] || sectionId;
};

export default SectionDots;
