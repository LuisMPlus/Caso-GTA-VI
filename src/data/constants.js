// Paleta de colores del proyecto
export const COLORS = {
  primary: '#ffb90f',    // Amarillo dorado
  secondary: '#E68B4E',  // Naranja
  accent: '#4EADE6',     // Azul claro
  dark: '#566066',       // Gris oscuro
  muted: '#666156'       // Gris topo
};

// Información del caso GTA VI
export const GTA_VI_CASE = [
  {
    id: 1,
    title: "Origen del ataque",
    content: "En septiembre de 2022, antes de que Rockstar Games anunciara oficialmente detalles de Grand Theft Auto VI (GTA VI), un hacker británico de 17 años llamado Arion Kurtaj accedió a los servidores internos de la empresa. Desde la habitación de un hotel, usando solo un celular, un televisor y un Amazon Fire Stick, extrajo y publicó en internet material sensible del juego en desarrollo. Se sospecha que el acceso inicial se logró mediante el robo de credenciales de un trabajador de Rockstar, lo que le permitió entrar a las plataformas internas de comunicación y desarrollo.",
    image: "/assets/imgs/origen-ataque.jpg", // Imagen del origen del ataque
    color: COLORS.primary
  },
  {
    id: 2,
    title: "Desarrollo del caso",
    content: "Arion Kurtaj, un joven de 17 años con autismo severo y miembro del grupo de cibercriminales Lapsus$, fue identificado como el principal responsable de la filtración. Utilizando herramientas básicas como un Amazon Fire TV Stick, un teléfono móvil y un televisor de hotel, Kurtaj accedió a los sistemas internos de Rockstar Games. A pesar de estar bajo arresto domiciliario por delitos previos, logró evadir las restricciones y publicó el material filtrado en línea. En diciembre de 2023, un tribunal británico determinó que Kurtaj era incapaz de enfrentar un juicio debido a su condición, por lo que fue internado indefinidamente en un hospital psiquiátrico seguro.",
    image: "/assets/imgs/desarrollo-caso.jpg", // Imagen del desarrollo
    color: COLORS.secondary
  },
  {
    id: 3,
    title: "Consecuencias legales y financieras",
    content: "La filtración causó un daño significativo a Rockstar Games, tanto en términos de reputación como financieros. Además de la pérdida de control sobre la información confidencial del juego, la empresa enfrentó costos asociados con la mejora de sus sistemas de seguridad y la gestión de la crisis de relaciones públicas. El incidente también resaltó las vulnerabilidades en la protección de datos sensibles y la necesidad de medidas más estrictas en la ciberseguridad dentro de la industria del videojuego.",
    image: "/assets/imgs/consecuencias-legales.jpg", // Imagen de las consecuencias
    color: COLORS.accent
  }
];

// Línea de tiempo del hackeo de GTA VI
export const TIMELINE_EVENTS = [
  {
    id: 1,
    icon: "🔍",
    title: "Rumores iniciales",
    subtitle: "Meses antes de la filtración",
    description: "Comienzan a circular especulaciones sobre GTA VI en foros como Reddit y Twitter. Se difunden supuestas imágenes conceptuales y detalles filtrados, aunque sin confirmación oficial.",
    details: "Los rumores incluían supuestas filtraciones de empleados, imágenes de desarrollo temprano y especulaciones sobre la ubicación del juego. La comunidad gaming estaba ansiosa por cualquier información oficial.",
    date: "Meses antes",
    time: "Continuo",
    image: "/assets/imgs/origen-ataque.jpg", // Imagen de rumores
    color: COLORS.muted,
    severity: 'low',
    category: 'background'
  },
  {
    id: 2,
    icon: "💥",
    title: "Filtración masiva",
    subtitle: "18 de septiembre de 2022",
    description: "Aparecen en línea archivos confidenciales: videos de gameplay, documentos internos y fragmentos de código fuente. Se cree que el acceso se logró mediante una cuenta de desarrollador comprometida o una brecha interna.",
    details: "Más de 90 videos de desarrollo interno fueron publicados, mostrando gameplay inédito, mecánicas del juego y entornos. Los archivos incluían código fuente y documentación técnica confidencial.",
    date: "18 Sep 2022",
    time: "14:20 UTC",
    image: "/assets/imgs/origen-ataque.jpg", // Imagen de la filtración
    color: COLORS.primary,
    severity: 'critical',
    category: 'breach'
  },
  {
    id: 3,
    icon: "🌐",
    title: "Difusión viral",
    subtitle: "Horas después de la filtración",
    description: "Los archivos se comparten en foros encriptados, luego en Reddit, Discord, Twitter y TikTok. Los clips se vuelven virales en cuestión de horas, generando una ola de atención global.",
    details: "La noticia se extendió rápidamente a través de las redes sociales. Gaming influencers y medios especializados comenzaron a cubrir la filtración, amplificando su alcance mundial.",
    date: "18 Sep 2022",
    time: "16:00 UTC",
    image: "/assets/imgs/desarrollo-caso.jpg", // Imagen de difusión
    color: COLORS.secondary,
    severity: 'high',
    category: 'disclosure'
  },
  {
    id: 4,
    icon: "🧨",
    title: "Escalada del incidente",
    subtitle: "Días posteriores",
    description: "Se publica un video completo de jugabilidad, mostrando funciones nuevas. La filtración llega a medios tradicionales, convirtiéndose en un tema de debate sobre ciberseguridad en la industria.",
    details: "Los medios mainstream comenzaron a reportar sobre el hackeo. Se publicaron análisis técnicos del material filtrado y debates sobre las implicaciones para la industria del videojuego.",
    date: "19-20 Sep 2022",
    time: "Varios",
    image: "/assets/imgs/desarrollo-caso.jpg", // Imagen de escalada
    color: COLORS.accent,
    severity: 'high',
    category: 'escalation'
  },
  {
    id: 5,
    icon: "🐦",
    title: "Confirmación oficial de Rockstar",
    subtitle: "Respuesta de la empresa",
    description: "Rockstar Games confirma oficialmente el hackeo a través de un comunicado en Twitter, reconociendo la filtración y asegurando que no afectará el desarrollo del juego.",
    details: "El comunicado oficial de Rockstar confirmó la autenticidad del material filtrado, pero aseguró que el desarrollo del juego continuaría sin retrasos significativos. También mencionaron mejoras en seguridad.",
    date: "19 Sep 2022",
    time: "09:30 UTC",
    image: "/assets/imgs/tweet-rockstar-confirmacion.jpg", // Imagen del tweet de Rockstar
    color: COLORS.dark,
    severity: 'medium',
    category: 'response'
  },
  {
    id: 6,
    icon: "⚖️",
    title: "Consecuencias legales",
    subtitle: "Arresto y proceso judicial",
    description: "Arion Kurtaj es arrestado y posteriormente sentenciado. En diciembre de 2023, un tribunal británico determinó que era incapaz de enfrentar un juicio debido a su condición.",
    details: "El proceso legal incluyó la evaluación psicológica del menor, considerando su autismo severo. Finalmente fue internado indefinidamente en un hospital psiquiátrico seguro debido a su intención declarada de continuar con actividades cibercriminales.",
    date: "Sep 2022 - Dec 2023",
    time: "Proceso extendido",
    image: "/assets/imgs/consecuencias-legales.jpg", // Imagen de consecuencias legales
    color: COLORS.muted,
    severity: 'medium',
    category: 'resolution'
  }
];

// Información general del proyecto
export const PROJECT_INFO = {
  title: "Caso GTA VI - Análisis Legal del Hackeo",
  subtitle: "Estudio del caso de ciberseguridad más mediático de la industria del videojuego",
  description: "Análisis completo del hackeo de Grand Theft Auto VI por parte del grupo Lapsus$ y sus implicaciones legales y financieras."
};