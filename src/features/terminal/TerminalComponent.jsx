import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import TypewriterText from '../../components/animations/TypewriterText';

const TerminalComponent = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [currentPath] = useState('/home/investigator');
  const [isProcessing, setIsProcessing] = useState(false);
  const terminalRef = useRef(null);

  const commands = {
    help: {
      description: 'Muestra los comandos disponibles',
      execute: () => [
        'Comandos disponibles:',
        '  help          - Muestra esta ayuda',
        '  ls            - Lista archivos y directorios',
        '  cat [archivo] - Muestra el contenido de un archivo',
        '  analyze       - Inicia análisis de la brecha de seguridad',
        '  timeline      - Muestra línea de tiempo del incidente',
        '  evidence      - Lista evidencias recopiladas',
        '  clear         - Limpia la terminal',
        '  whoami        - Información del usuario actual',
        '  pwd           - Muestra directorio actual',
        ''
      ]
    },
    ls: {
      description: 'Lista archivos del directorio actual',
      execute: () => [
        'total 47',
        'drwxr-xr-x 2 investigator gta6team 4096 Sep 18 14:32 leaked_videos/',
        '-rw-r--r-- 1 investigator gta6team 2048 Sep 18 15:45 breach_report.txt',
        '-rw-r--r-- 1 investigator gta6team 1024 Sep 18 16:20 source_fragments.cpp',
        '-rw-r--r-- 1 investigator gta6team 512  Sep 18 17:10 timeline.log',
        'drwxr-xr-x 2 investigator gta6team 4096 Sep 18 18:00 evidence/',
        '-rw-r--r-- 1 investigator gta6team 256  Sep 19 09:15 suspects.json',
        '-rwx------ 1 investigator gta6team 4096 Sep 19 10:30 decrypt_tool*',
        ''
      ]
    },
    pwd: {
      description: 'Muestra el directorio actual',
      execute: () => [currentPath, '']
    },
    whoami: {
      description: 'Información del usuario',
      execute: () => [
        'investigator',
        'Especialista en Ciberseguridad - Equipo de Respuesta a Incidentes',
        'Clearance Level: CLASSIFIED',
        'Active since: 2022-09-18 14:00:00 UTC',
        ''
      ]
    },
    analyze: {
      description: 'Análisis de la brecha',
      execute: () => [
        'Iniciando análisis forense...',
        '[████████████████████████████████] 100%',
        '',
        'RESUMEN DEL ANÁLISIS:',
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        'Vector de ataque: Social Engineering + Slack Infiltration',
        'Método de acceso: Credenciales comprometidas',
        'Sistemas afectados: Confluence, Slack, Build servers',
        'Datos extraídos: ~90 videos, código fuente parcial',
        'Tiempo de permanencia: ~48 horas',
        'Estado: CONTENIDO - Accesos revocados',
        '',
        'Recomendaciones implementadas:',
        '✓ Rotación de credenciales',
        '✓ Autenticación multifactor reforzada',
        '✓ Auditoría completa de accesos',
        '✓ Monitoreo mejorado',
        ''
      ]
    },
    timeline: {
      description: 'Timeline del incidente',
      execute: () => [
        'LÍNEA DE TIEMPO - INCIDENTE GTA VI',
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        '2022-09-17 22:00 UTC - Primer acceso no autorizado detectado',
        '2022-09-18 02:30 UTC - Infiltración en canales Slack internos',
        '2022-09-18 08:15 UTC - Descarga masiva de archivos iniciada',
        '2022-09-18 14:20 UTC - Primeros videos aparecen en GTAForums',
        '2022-09-18 16:45 UTC - Rockstar Games notificado del breach',
        '2022-09-18 18:00 UTC - Accesos comprometidos deshabilitados',
        '2022-09-19 09:30 UTC - Declaración oficial de Rockstar',
        '2022-09-19 12:00 UTC - FBI inicia investigación',
        '2022-09-20 15:30 UTC - Arresto del sospechoso principal',
        '2023-12-14 10:00 UTC - Sentencia: 5 años de prisión',
        ''
      ]
    },
    evidence: {
      description: 'Lista de evidencias',
      execute: () => [
        'EVIDENCIAS RECOPILADAS',
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        '📁 leaked_videos/ (90 archivos .mp4)',
        '   ├── gta6_gameplay_01.mp4 (2.1 GB)',
        '   ├── gta6_heist_mechanics.mp4 (1.8 GB)',
        '   ├── vice_city_exploration.mp4 (3.2 GB)',
        '   └── character_customization.mp4 (1.5 GB)',
        '',
        '📄 Fragmentos de código fuente:',
        '   ├── player_controller.cpp (parcial)',
        '   ├── economy_system.js (fragmento)',
        '   └── map_loader.py (incompleto)',
        '',
        '💬 Logs de comunicación Slack (47 mensajes)',
        '🔐 Credenciales comprometidas (hash SHA-256)',
        '🌐 Direcciones IP de origen (VPN/Tor)',
        '📱 Metadatos de dispositivos móviles',
        ''
      ]
    },
    'cat breach_report.txt': {
      description: 'Muestra el reporte de la brecha',
      execute: () => [
        'REPORTE CONFIDENCIAL - BRECHA DE SEGURIDAD GTA VI',
        '═══════════════════════════════════════════════════',
        'Fecha: 18 de Septiembre, 2022',
        'Clasificación: TOP SECRET',
        'Preparado por: Equipo de Respuesta a Incidentes',
        '',
        'RESUMEN EJECUTIVO:',
        'Un atacante no identificado logró acceso no autorizado',
        'a sistemas internos de Rockstar Games mediante técnicas',
        'de ingeniería social y compromiso de credenciales.',
        '',
        'El impacto incluye la filtración de aproximadamente 90',
        'videos de desarrollo del próximo título "Grand Theft',
        'Auto VI", así como fragmentos de código fuente.',
        '',
        'ACCIONES INMEDIATAS TOMADAS:',
        '- Revocación de todos los accesos comprometidos',
        '- Implementación de autenticación multifactor',
        '- Contacto con autoridades competentes',
        '- Monitoreo continuo de canales de filtración',
        '',
        '[CLASIFICADO] - Más detalles en anexo_tecnico.pdf',
        ''
      ]
    },
    clear: {
      description: 'Limpia la terminal',
      execute: () => {
        setHistory([]);
        return [];
      }
    }
  };

  const processCommand = async (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    setIsProcessing(true);
    
    // Simular delay de procesamiento
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const commandEntry = {
      input: cmd,
      output: [],
      timestamp: new Date().toLocaleTimeString()
    };

    if (trimmedCmd === '') {
      commandEntry.output = [''];
    } else if (commands[trimmedCmd]) {
      commandEntry.output = commands[trimmedCmd].execute();
    } else if (trimmedCmd.startsWith('cat ')) {
      const filename = trimmedCmd.substring(4);
      if (commands[`cat ${filename}`]) {
        commandEntry.output = commands[`cat ${filename}`].execute();
      } else {
        commandEntry.output = [`cat: ${filename}: No such file or directory`, ''];
      }
    } else {
      commandEntry.output = [
        `Command '${cmd}' not found. Type 'help' for available commands.`,
        ''
      ];
    }

    setHistory(prev => [...prev, commandEntry]);
    setIsProcessing(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() && !isProcessing) {
      processCommand(input);
      setInput('');
    }
  };

  useEffect(() => {
    if (terminalRef.current && history.length > 0) {
      // Solo hacer scroll dentro del terminal, no en la página completa
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    // Comando de bienvenida automático
    const welcomeTimeout = setTimeout(() => {
      setHistory([{
        input: '',
        output: [
          '╔══════════════════════════════════════════════════╗',
          '║         GTA VI BREACH INVESTIGATION TERMINAL     ║',
          '║              CLASSIFIED ACCESS ONLY              ║',
          '╚══════════════════════════════════════════════════╝',
          '',
          'Bienvenido al sistema de investigación forense.',
          'Escribe "help" para ver los comandos disponibles.',
          'Escribe "analyze" para iniciar el análisis del incidente.',
          ''
        ],
        timestamp: new Date().toLocaleTimeString()
      }]);
    }, 2000); // Aumentar el delay para dar tiempo a que la página se cargue completamente

    return () => clearTimeout(welcomeTimeout);
  }, []);

  return (
    <section id="terminal" className="full-page-section bg-gradient-to-b from-black to-gray-900 py-8">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto flex flex-col justify-center h-full"
        >
          <div className="text-center mb-8">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              Terminal de Investigación
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Interfaz de línea de comandos para explorar los detalles del incidente
            </p>
            
            <br />
            <br />
          </div>
          
          <div className="flex justify-center">
            <div className="terminal scanlines relative shadow-2xl max-w-5xl w-full">
            <div 
              ref={terminalRef}
              className="h-96 overflow-y-auto mb-4 font-mono text-sm"
            >
              <AnimatePresence>
                {history.map((entry, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-2"
                  >
                    {entry.input && (
                      <div className="flex items-center">
                        <span className="text-hacker-cyan mr-2">
                          investigator@gta6-forensics:~$
                        </span>
                        <span className="text-white">{entry.input}</span>
                      </div>
                    )}
                    {entry.output.map((line, lineIndex) => (
                      <div key={lineIndex} className="text-terminal-green pl-4">
                        {line}
                      </div>
                    ))}
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {isProcessing && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-yellow-500"
                >
                  <TypewriterText 
                    text="Procesando comando..." 
                    speed={50}
                  />
                </motion.div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="flex items-center">
                <span className="text-cyber-blue mr-2 font-mono">
                investigator@gta6-forensics:~$
              </span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-white font-mono"
                placeholder="Escribe un comando..."
                disabled={isProcessing}
              />
              <div className="w-2 h-5 bg-cyber-blue animate-pulse ml-1" />
            </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TerminalComponent;
