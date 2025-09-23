export const CIERRE_CONTENT = {
  pageHeader: {
    title: "Cierre",
    subtitle: "Conclusiones y reflexiones finales sobre el caso GTA VI"
  },

  integrantes: [
    {
      nombre: "NICOLÁS DANIEL TARITOLAY",
      imagen: "/assets/imgs/grupo1.jpg"
    },
    {
      nombre: "ENZO DEMIAN ARAMAYO", 
      imagen: "/assets/imgs/grupo2.jpg"
    },
    {
      nombre: "ALEX GABRIEL CALATAYUD",
      imagen: "/assets/imgs/grupo3.jpg"
    },
    {
      nombre: "LUIS CARLOS MANUEL MAMANÍ",
      imagen: "/assets/imgs/grupo4.jpg"
    },
    {
      nombre: "FRANCO GABRIEL ORTEGA",
      imagen: "/assets/imgs/grupo5.jpg"
    }
  ],

  seccionesAnalisis: [
    {
      id: "brechas-vulnerabilidades",
      titulo: "Brechas y Vulnerabilidades de Seguridad",
      icono: "Shield",
      iconColor: "red-400",
      imagen: "/assets/imgs/ciberseguridad.webp",
      contenido: {
        parrafo1: "Uno de los problemas más evidentes revelados por la fuga fue la presencia de brechas de seguridad en los sistemas internos de Rockstar. A menudo, las brechas ocurren debido a vulnerabilidades pasadas por alto en seguridad de red o controles de acceso débiles. En este caso, insiders o actores maliciosos explotaron estas debilidades para acceder a archivos confidenciales. Es un recordatorio sobrio de que la ciberseguridad no es una solución única, sino un proceso continuo.",
        parrafo2: "Muchas empresas subestiman la importancia de autenticación multifactor y auditorías de seguridad regulares. La fuga de GTA 6 subraya lo crítico que es implementar medidas de seguridad en capas, especialmente al manejar activos sensibles de desarrollo. El incidente también resaltó la necesidad de protocolos internos estrictos, limitando el acceso solo al personal esencial."
      }
    },
    {
      id: "impacto-rockstar",
      titulo: "Impacto en Rockstar y la Comunidad de Videojuegos",
      icono: "Users",
      iconColor: "blue-400",
      imagen: "/assets/imgs/videojuegos.webp",
      contenido: {
        parrafo1: "Las consecuencias fueron más allá de las vulnerabilidades técnicas. Para Rockstar, la fuga causó daños reputacionales significativos y alteró los cronogramas de desarrollo. La emoción de los fans se convirtió en frustración, especialmente cuando las fugas revelaron contenido incompleto o en etapas tempranas. Esta situación demostró cómo las fugas pueden socavar la confianza y complicar las estrategias de marketing.",
        parrafo2: "Para la comunidad de videojuegos en general, fue un llamado de atención sobre la vigilancia digital. El incidente alimentó discusiones sobre proteger la propiedad intelectual y respetar el arduo trabajo de los desarrolladores. También generó un debate sobre cómo equilibrar la transparencia con la seguridad, especialmente cuando las fugas a veces revelan inadvertidamente conocimientos valiosos sobre próximos títulos."
      }
    },
    {
      id: "seguridad-digital",
      titulo: "Lo Que Nos Dice la Fuga Sobre la Seguridad Digital en los Videojuegos",
      icono: "AlertTriangle",
      iconColor: "yellow-400",
      imagen: "/assets/imgs/ciberseguridad-videojuego.webp",
      contenido: {
        parrafo1: "La fuga de GTA 6 ilustra vívidamente que la seguridad digital es una batalla constante. A medida que las empresas de videojuegos impulsan proyectos más innovadores y expansivos, la superficie de ataque crece. Los hackers e insiders siempre buscan vulnerabilidades, dejando claro que ningún sistema es invulnerable.",
        parrafo2: "Este incidente también enfatiza la importancia de medidas de seguridad proactivas. Esperar a que ocurra una brecha ya no es una opción. En cambio, las empresas deben adoptar una mentalidad preventiva, aprovechando la tecnología y la capacitación para mantenerse por delante de las amenazas. La fuga de GTA 6 sirve como un recordatorio de que proteger los activos creativos requiere vigilancia, inversión y una cultura de conciencia en seguridad."
      }
    }
  ]
};