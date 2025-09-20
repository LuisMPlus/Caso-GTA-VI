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
    image: "/api/placeholder/600/400", // Placeholder para imagen del origen del ataque
    color: COLORS.primary
  },
  {
    id: 2,
    title: "Desarrollo del caso",
    content: "Arion Kurtaj, un joven de 17 años con autismo severo y miembro del grupo de cibercriminales Lapsus$, fue identificado como el principal responsable de la filtración. Utilizando herramientas básicas como un Amazon Fire TV Stick, un teléfono móvil y un televisor de hotel, Kurtaj accedió a los sistemas internos de Rockstar Games. A pesar de estar bajo arresto domiciliario por delitos previos, logró evadir las restricciones y publicó el material filtrado en línea. En diciembre de 2023, un tribunal británico determinó que Kurtaj era incapaz de enfrentar un juicio debido a su condición, por lo que fue internado indefinidamente en un hospital psiquiátrico seguro.",
    image: "/api/placeholder/600/400", // Placeholder para imagen del desarrollo
    color: COLORS.secondary
  },
  {
    id: 3,
    title: "Consecuencias legales y financieras",
    content: "La filtración causó un daño significativo a Rockstar Games, tanto en términos de reputación como financieros. Además de la pérdida de control sobre la información confidencial del juego, la empresa enfrentó costos asociados con la mejora de sus sistemas de seguridad y la gestión de la crisis de relaciones públicas. El incidente también resaltó las vulnerabilidades en la protección de datos sensibles y la necesidad de medidas más estrictas en la ciberseguridad dentro de la industria del videojuego.",
    image: "/api/placeholder/600/400", // Placeholder para imagen de las consecuencias
    color: COLORS.accent
  }
];

// Información general del proyecto
export const PROJECT_INFO = {
  title: "Caso GTA VI - Análisis Legal del Hackeo",
  subtitle: "Estudio del caso de ciberseguridad más mediático de la industria del videojuego",
  description: "Análisis completo del hackeo de Grand Theft Auto VI por parte del grupo Lapsus$ y sus implicaciones legales y financieras."
};