// Constantes para la página de Derecho y Persona
export const DERECHO_CONTENT = {
  derechoSociedad: {
    title: "El Derecho y la vida en sociedad",
    subtitle: "Normas para la convivencia digital",
    description: "El derecho organiza la convivencia social en entornos físicos y digitales",
    fullText: `El derecho surge como un conjunto de normas destinadas a organizar la convivencia social, estableciendo lo que está permitido y lo que está prohibido. En una sociedad moderna y tecnológica, como la actual, el derecho no solo regula las relaciones físicas entre las personas, sino también las digitales.

El caso de la filtración de Grand Theft Auto VI demuestra cómo una conducta antisocial —el acceso indebido a sistemas informáticos y la difusión de información confidencial— afecta a la vida en sociedad en múltiples niveles: empresas, trabajadores y millones de usuarios. La moral ya reprocha la acción por ser deshonesta y dañina; sin embargo, es el derecho el que otorga el marco de coerción y sanción para prevenir y castigar estas conductas.

Si un hecho similar ocurriera en Argentina, se pondría en marcha el sistema legal para mantener el orden social y jurídico, aplicando el Código Penal en materia de delitos informáticos y la Ley de Protección de Datos Personales. Así, el derecho cumple su función esencial: garantizar la seguridad, la confianza y la paz social, incluso en entornos digitales globalizados.`,
    keyPoints: [
      "Regula relaciones físicas y digitales",
      "Marca diferencias entre permitido y prohibido",
      "Proporciona marco de coerción y sanción",
      "Garantiza seguridad y paz social"
    ]
  },
  
  derechoObjetivoSubjetivo: {
    title: "Derecho objetivo y subjetivo",
    subtitle: "Normas generales vs. facultades individuales",
    description: "Distinción entre las leyes aplicables a todos y los derechos individuales",
    fullText: `El derecho objetivo se entiende como el conjunto de normas jurídicas que regulan la conducta de los individuos en la sociedad. Son reglas de cumplimiento obligatorio, respaldadas por el poder coercitivo del Estado. Por otro lado, el derecho subjetivo se refiere a la facultad que tiene una persona para exigir o ejercer determinados derechos frente a los demás, reconocidos por el ordenamiento jurídico.

En el caso de la filtración de Grand Theft Auto VI, el derecho objetivo se refleja en las leyes que sancionan delitos informáticos, como el acceso ilegítimo a sistemas de información, el robo de credenciales o la difusión de datos confidenciales. Estas normas tienen como fin proteger el orden social y las actividades económicas.

A su vez, aparecen los derechos subjetivos:
- Rockstar Games, como empresa, posee el derecho subjetivo a proteger su propiedad intelectual, sus secretos comerciales y a reclamar ante la justicia por los daños ocasionados.
- Los trabajadores de la empresa tienen derecho a que sus credenciales, datos e identidades no sean utilizados de manera ilícita.
- Incluso los consumidores y jugadores poseen el derecho a un acceso seguro y legítimo a los productos de la empresa, sin que se vean afectados por filtraciones que distorsionen la experiencia del juego o expongan información personal.`,
    objetivo: {
      title: "Derecho Objetivo",
      description: "Normas obligatorias para todos",
      examples: ["Leyes contra delitos informáticos", "Sanciones por acceso ilegítimo", "Protección de datos confidenciales"]
    },
    subjetivo: {
      title: "Derecho Subjetivo",
      description: "Facultades individuales reconocidas",
      examples: ["Rockstar: Proteger propiedad intelectual", "Trabajadores: Protección de credenciales", "Usuarios: Acceso seguro y legítimo"]
    }
  },
  
  derechoPublicoPrivado: {
    title: "Derecho público y derecho privado",
    subtitle: "Estado vs. particulares",
    description: "Diferencias entre regulación estatal y relaciones entre privados",
    fullText: `El derecho público regula las relaciones en las que interviene el Estado como poder soberano, imponiendo normas de carácter general e interés colectivo (por ejemplo, el derecho penal, constitucional o administrativo). El derecho privado, en cambio, regula las relaciones entre particulares, sean personas físicas o jurídicas, basadas en la igualdad jurídica (como los contratos, la propiedad o la responsabilidad civil).

En el caso de la filtración de Grand Theft Auto VI:

Derecho público:
- El hackeo cometido por Arion Kurtaj se encuadra dentro del derecho penal como delito informático. Aquí interviene el Estado, a través de sus tribunales, para investigar, sancionar y proteger el orden público.
- También se vincula con el derecho internacional, ya que los delitos cibernéticos suelen traspasar fronteras, exigiendo cooperación entre distintos Estados.

Derecho privado:
- Rockstar Games, como empresa privada, puede accionar legalmente contra el responsable o incluso contra terceros que hubiesen utilizado la información filtrada, reclamando indemnizaciones por daños y perjuicios.
- El derecho privado también regula la propiedad intelectual del juego, que fue vulnerada por la filtración, y protege los intereses económicos de la compañía frente al uso indebido de su creación.`,
    publico: {
      title: "Derecho Público",
      description: "El Estado interviene como autoridad",
      examples: ["Derecho penal: Investigación del delito", "Derecho internacional: Cooperación entre Estados", "Tribunales: Sanción y protección del orden"]
    },
    privado: {
      title: "Derecho Privado",
      description: "Relaciones entre particulares",
      examples: ["Propiedad intelectual vulnerada", "Indemnizaciones por daños", "Protección de intereses económicos"]
    }
  },

  personasJuridicas: {
    title: "Personas en el Derecho",
    subtitle: "Análisis de los sujetos jurídicos involucrados",
    description: "Estudio de las personas jurídicas y humanas en el caso GTA VI",
    fullText: `En el caso de la filtración de GTA VI, encontramos dos tipos de sujetos de derecho claramente diferenciados: la persona jurídica (Rockstar Games) y la persona humana (el hacker). Cada uno con derechos, obligaciones y responsabilidades específicas según el ordenamiento jurídico.`,
    personaJuridica: {
      title: "Persona Jurídica: Rockstar Games",
      description: "Empresa desarrolladora con capacidad jurídica plena",
      image: "/assets/imgs/rockstar.webp",
      characteristics: [
        "Persona jurídica privada según Código Civil y Comercial (Art. 141)",
        "Capacidad jurídica para adquirir derechos y contraer obligaciones",
        "Patrimonio incluye activos digitales y derechos sobre el juego",
        "Puede accionar judicialmente por daños y perjuicios"
      ],
      derechos: [
        "Propiedad intelectual sobre GTA VI",
        "Protección de sistemas informáticos",
        "Defensa de patrimonio intangible",
        "Reclamación por daños económicos"
      ]
    },
    personaHumana: {
      title: "Persona Humana: El Hacker",
      description: "Individuo responsable del acceso ilegítimo",
      image: "/assets/imgs/hacker.webp",
      characteristics: [
        "Titular de derechos pero responsable penal y civil",
        "Si es menor, capacidad de hecho limitada (Art. 24)",
        "Actuaría bajo representación legal en procesos",
        "Imputabilidad según madurez para comprender ilicitud"
      ],
      responsabilidades: [
        "Violación de derechos patrimoniales",
        "Acceso ilegítimo a sistemas protegidos",
        "Divulgación no autorizada de contenido",
        "Daños económicos a la empresa"
      ]
    },
    aspectosLegales: [
      {
        title: "Capacidad y Responsabilidad",
        description: "El hacker ejerció capacidad de hecho para acceso ilegal, violando derechos patrimoniales de Rockstar"
      },
      {
        title: "Patrimonio y Propiedad Intelectual",
        description: "Los clips filtrados forman parte del patrimonio intangible protegido por leyes de PI"
      },
      {
        title: "Domicilio y Jurisdicción",
        description: "El domicilio de ambas partes determina jurisdicción e intervención del derecho internacional"
      }
    ]
  }
};