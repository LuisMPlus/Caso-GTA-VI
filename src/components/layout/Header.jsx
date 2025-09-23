import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Scale, User, FileText, BookOpen } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    {
      name: 'Inicio',
      path: '/',
      icon: BookOpen,
      description: 'Caso GTA VI'
    },
    {
      name: 'Derecho y Persona',
      path: '/derecho-persona',
      icon: User,
      description: 'Aspectos personales'
    },
    {
      name: 'Marco Jurídico',
      path: '/marco-juridico',
      icon: Scale,
      description: 'Legislación argentina'
    },
    {
      name: 'Cierre',
      path: '/cierre',
      icon: FileText,
      description: 'Conclusiones'
    }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 shadow-2xl">
      <div className="container  px-4 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo/Título mejorado */}
          <Link to="/" className="flex items-center  hover:opacity-90 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#ffb90f] via-[#E68B4E] to-[#4EADE6] flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
              <Scale className="w-7 h-7 text-white drop-shadow-sm" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl lg:text-3xl font-bold text-white tracking-tight leading-tight">
                Caso GTA VI
              </h1>
              <p className="text-sm text-gray-300 font-medium hidden sm:block">
                Análisis Legal Completo
              </p>
            </div>
          </Link>

          {/* Navegación Desktop mejorada */}
          <nav className="hidden lg:flex items-center ">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    group relative flex items-center space-x-3 px-6 py-3 mx-1 rounded-xl font-semibold text-sm
                    transition-all duration-300 ease-out transform hover:scale-105
                    ${isActive(item.path)
                      ? 'bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/25'
                      : 'text-gray-200 hover:text-white hover:bg-gray-800/70 hover:shadow-md'
                    }
                  `}
                >
                  <Icon className={`w-5 h-5 transition-all duration-300 ${
                    isActive(item.path) ? 'text-white' : 'text-gray-300 group-hover:text-white'
                  }`} />
                  <span className="whitespace-nowrap">{item.name}</span>
                  
                  {/* Indicador activo */}
                  {isActive(item.path) && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-sm"></div>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Botón menú móvil mejorado */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 rounded-2xl text-gray-300 hover:text-white hover:bg-gray-800/70 transition-all duration-300 hover:scale-105"
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Menú móvil mejorado */}
        <div className={`
          lg:hidden overflow-hidden transition-all duration-400 ease-in-out
          ${isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}
        `}>
          <div className="py-4 border-t border-gray-700/40 bg-gray-900/90 backdrop-blur-lg">
            <nav className="space-y-2 px-4">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`
                      flex items-center space-x-4 px-4 py-3 rounded-xl transition-all duration-300
                      ${isActive(item.path)
                        ? 'bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white shadow-lg'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/70'
                      }
                    `}
                  >
                    <Icon className={`w-5 h-5 flex-shrink-0 ${
                      isActive(item.path) ? 'text-white' : 'text-gray-400'
                    }`} />
                    <div className="flex-1">
                      <div className="font-semibold">{item.name}</div>
                      <div className={`text-sm ${
                        isActive(item.path) ? 'text-white/80' : 'text-gray-400'
                      }`}>
                        {item.description}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;