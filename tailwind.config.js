/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-blue': '#00D4FF',
        'tech-blue': '#0099CC',
        'electric-blue': '#0080FF',
        'deep-blue': '#003366',
        'dark-blue': '#001122',
        'terminal-blue': '#00AAFF',
        'gta-purple': '#8B5FBF',
        'gta-pink': '#FF6B9D',
        'gta-blue': '#4ECDC4',
        'gta-orange': '#FF8C42',
        'gta-yellow': '#FFD23F',
      },
      backgroundImage: {
        'gradient-cyber': 'linear-gradient(135deg, #00D4FF, #0080FF)',
        'gradient-tech': 'linear-gradient(135deg, #0099CC, #00D4FF)',
        'gradient-gta': 'linear-gradient(135deg, #8B5FBF, #FF6B9D, #4ECDC4)',
        'gradient-terminal': 'linear-gradient(180deg, #001122, #003366)',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      animation: {
        'glitch': 'glitch 0.3s infinite',
        'matrix-rain': 'matrix-rain linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'typing': 'typing 3.5s steps(40, end), blink 0.75s step-end infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        'matrix-rain': {
          '0%': { transform: 'translateY(-100vh)', opacity: '1' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 5px #00D4FF' },
          '50%': { boxShadow: '0 0 20px #00D4FF, 0 0 30px #00D4FF' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
      },
      textShadow: {
        'neon': '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor, 0 0 20px currentColor',
      },
      boxShadow: {
        'neon': '0 0 5px currentColor, inset 0 0 5px currentColor',
      },
    },
  },
  plugins: [],
}
