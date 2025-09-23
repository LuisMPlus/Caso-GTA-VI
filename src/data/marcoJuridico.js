export const MARCO_JURIDICO_CONTENT = {
  pageHeader: {
    title: "Marco Jurídico Argentino",
    subtitle: "La Ley y la jerarquía normativa aplicable al caso GTA VI"
  },

  leyJerarquia: {
    title: "La Ley y la jerarquía normativa",
    concepto: "La ley es la norma jurídica escrita dictada por la autoridad competente, con carácter general, obligatorio y permanente.",
    organizacion: "El sistema jurídico se organiza en un orden jerárquico: en la cima está la Constitución Nacional, seguida de los tratados internacionales de derechos humanos, las leyes nacionales, los decretos del Poder Ejecutivo, las resoluciones administrativas y, finalmente, las disposiciones particulares.",
    imagen: "/assets/imgs/piramide-juridica.jpg",
    aplicacionCaso: {
      reinoUnido: {
        title: "En el Reino Unido (caso real):",
        puntos: [
          "Se aplicaron leyes específicas como el Computer Misuse Act de 1990, que sanciona el acceso no autorizado a sistemas informáticos.",
          "También influyen tratados internacionales como el Convenio de Budapest sobre Ciberdelincuencia, que facilita la cooperación entre países.",
          "Todo ello respetando el marco de los derechos fundamentales garantizados por la Constitución británica y el sistema europeo de derechos humanos."
        ]
      },
      argentina: {
        title: "Si hubiera ocurrido en Argentina:",
        puntos: [
          "La Constitución Nacional sería el marco superior, garantizando derechos fundamentales tanto de la empresa afectada como del acusado (debido proceso, derecho de defensa, etc.).",
          "En el plano legal, el Código Penal argentino contempla los delitos informáticos en el artículo 153 bis, que sanciona a quien acceda indebidamente a un sistema o a quien utilice indebidamente datos informáticos.",
          "La Ley 26.388 (2008) incorporó delitos específicos vinculados con el acceso ilegítimo a sistemas y la alteración o robo de datos digitales.",
          "Además, Argentina es parte de tratados internacionales que buscan proteger la propiedad intelectual y garantizar la cooperación en materia de ciberdelincuencia.",
          "A nivel reglamentario, también intervendría la Ley de Protección de Datos Personales (Ley 25.326), si se comprobara que credenciales o datos personales fueron comprometidos."
        ]
      }
    }
  },

  estructuraLegal: {
    title: "Estructura Legal Argentina y el Estado de Derecho",
    definicion: "La Estructura Legal Argentina se organiza bajo la Constitución Nacional, que es la norma suprema del ordenamiento jurídico. De ella derivan los poderes del Estado y las normas de menor jerarquía.",
    principios: "El sistema se basa en la división de poderes (Ejecutivo, Legislativo y Judicial), el principio de supremacía constitucional y el respeto de los derechos fundamentales reconocidos tanto en la propia Constitución como en los tratados internacionales de derechos humanos con jerarquía constitucional (art. 75 inc. 22).",
    estadoDerecho: "El Estado de Derecho implica que todas las personas, incluidas las autoridades y funcionarios públicos, deben actuar conforme a la ley, asegurando un marco de legalidad, justicia y control de los abusos de poder.",
    aplicacionPoderes: {
      title: "Aplicado al caso de la filtración de GTA VI:",
      intro: "Si el delito hubiera ocurrido en Argentina, el proceso estaría enmarcado en el Estado de Derecho, lo que significa que el hacker sería investigado y juzgado conforme a las leyes vigentes, con pleno respeto al debido proceso y a la defensa en juicio.",
      poderes: [
        {
          nombre: "Poder Legislativo",
          funcion: "estableció las normas que regulan los delitos informáticos (Ley 26.388, que reformó el Código Penal)."
        },
        {
          nombre: "Poder Judicial",
          funcion: "sería el encargado de interpretar y aplicar estas normas al caso concreto, determinando responsabilidades y sanciones."
        },
        {
          nombre: "Poder Ejecutivo",
          funcion: "a través de las fuerzas de seguridad especializadas en delitos tecnológicos (como la Dirección de Cibercrimen de la Policía Federal Argentina), investigaría y aportaría pruebas."
        }
      ],
      normasyGarantias: [
        "Normas de protección de derechos de autor (Ley 11.723)",
        "Normas que regulan la protección de datos personales (Ley 25.326)",
        "La sanción al hacker no sea arbitraria, sino dictada en base a normas jurídicas",
        "La empresa afectada (Rockstar) pueda reclamar legalmente la reparación de los daños ocasionados",
        "Se respeten las garantías individuales del acusado, incluso frente a la gravedad del delito"
      ]
    }
  },

  derechosIntervinientes: {
    title: "Derechos intervinientes:",
    areas: [
      {
        nombre: "Derecho Penal",
        descripcion: "El chantaje, el acceso ilegítimo al sistema informático VIOLAN EL CÓDIGO PENAL ARGENTINO."
      },
      {
        nombre: "Derecho Procesal",
        descripcion: "Interviene en la investigación del caso, la persecución, y el enjuiciamiento de estos delitos"
      },
      {
        nombre: "Derechos constitucionales",
        descripcion: "El estado está actuando para el cumplimiento de las leyes, el aseguramiento de que al enjuiciado se le respeten sus derechos humanos. Por ejemplo: El trato digno y el respeto a la integridad (art 18 CN, art. 5 CADH)."
      },
      {
        nombre: "Derechos Patrimoniales o creditorios",
        descripcion: "DERECHOS INTELECTUALES: El código fuente, el juego en sí mismo se ve como un patrimonio intelectual."
      }
    ]
  },

  consideracionesEspeciales: {
    title: "Consideraciones especiales:",
    autismo: "Si el autismo impide comprender la criminalidad del acto, se aplicaría inimputabilidad por incapacidad (art. 34 CP).",
    menorEdad: {
      intro: "Kurtaj tenía 17 años. En Argentina se aplica la Ley 22.278 de Régimen Penal de la Minoridad:",
      reglas: [
        "Menores de 16 años: inimputables (no hay responsabilidad penal).",
        "16 y 17 años: imputables sólo si el delito tiene pena mínima mayor a 2 años de prisión."
      ]
    }
  },

  marcoJuridicoAplicable: {
    title: "Marco jurídico argentino aplicable",
    delitos: [
      {
        titulo: "Artículo 183 - Código Penal",
        penaSimple: "Pena: 15 días a 6 meses de prisión",
        explicacion: "Por alterar, destruir o dañar sistemas informáticos",
        texto: "En la misma pena incurrirá el que alterare, destruyere o inutilizare datos, documentos, programas o sistemas informáticos; o vendiere, distribuyere, hiciere circular o introdujere en un sistema informático, cualquier programa destinado a causar daños. (Párrafo incorporado por art. 10 de la Ley N° 26.388, B.O. 25/6/2008)"
      },
      {
        titulo: "Artículo 168 - Código Penal (Extorsión)",
        penaSimple: "Pena: 5 a 10 años de prisión",
        explicacion: "Por obligar a entregar algo mediante intimidación",
        texto: "Será reprimido con reclusión o prisión de cinco a diez años el que, con intimidación… obligare a otro a entregar, enviar, depositar o poner a su disposición o a la de un tercero, cosas, dinero o documentos que produzcan efectos jurídicos"
      },
      {
        titulo: "Artículo 153 - Código Penal",
        penaSimple: "Pena: 15 días a 6 meses de prisión",
        explicacion: "Por acceder indebidamente a comunicaciones privadas",
        texto: "Será reprimido con prisión de quince (15) días a seis (6) meses el que abriere o accediere indebidamente a una comunicación electrónica, una carta, un pliego cerrado, un despacho telegráfico, telefónico o de otra naturaleza, que no le esté dirigido; o se apoderare indebidamente de una comunicación electrónica, una carta, un pliego, un despacho u otro papel privado, aunque no esté cerrado; o indebidamente suprimiere o desviare de su destino una correspondencia o una comunicación electrónica que no le esté dirigida.\n\nEn la misma pena incurrirá el que indebidamente interceptare o captare comunicaciones electrónicas o telecomunicaciones provenientes de cualquier sistema de carácter privado o de acceso restringido.\n\nLa pena será de prisión de un (1) mes a un (1) año, si el autor además comunicare a otro o publicare el contenido de la carta, escrito, despacho o comunicación electrónica.\n\nSi el hecho lo cometiere un funcionario público que abusare de sus funciones, sufrirá además, inhabilitación especial por el doble del tiempo de la condena.\n\nSe sospecha que lo hizo mediante una cuenta de desarrollador comprometida, lo que implica acceso no autorizado a sistemas informáticos. En este caso se aplicaría la violación del art 153."
      },
      {
        titulo: "Artículo 153 BIS - Código Penal",
        penaSimple: "Pena: 15 días a 6 meses de prisión (básica) / 1 mes a 1 año (agravada)",
        explicacion: "Por acceso no autorizado a sistemas informáticos",
        texto: "Será reprimido con prisión de quince (15) días a seis (6) meses, si no resultere un delito más severamente penado, el que a sabiendas accediere por cualquier medio, sin la debida autorización o excediendo la que posea, a un sistema o dato informático de acceso restringido.\n\nLa pena será de un (1) mes a un (1) año de prisión cuando el acceso fuese en perjuicio de un sistema o dato informático de un organismo público estatal o de un proveedor de servicios públicos o de servicios financieros."
      },
      {
        titulo: "Artículo 210 - Código Penal (Asociación ilícita)",
        penaSimple: "Pena: 3 a 10 años de prisión (miembros) / mínimo 5 años (jefes)",
        explicacion: "Por pertenecer a un grupo de ciberdelincuentes",
        texto: "Será reprimido con prisión o reclusión de tres a diez años, el que tomare parte en una asociación o banda de tres o más personas destinada a cometer delitos por el solo hecho de ser miembro de la asociación. Para los jefes u organizadores de la asociación el mínimo de la pena será de cinco años de prisión o reclusión."
      },
      {
        titulo: "Ley 11.723 de Propiedad Intelectual",
        penaSimple: "Protección de derechos de autor sobre software",
        explicacion: "Protege el videojuego como obra intelectual",
        texto: "Artículo 1°. — A los efectos de la presente Ley, las obras científicas, literarias y artísticas comprenden los escritos de toda naturaleza y extensión, entre ellos los programas de computación fuente y objeto; las compilaciones de datos o de otros materiales; las obras dramáticas, composiciones musicales, dramático-musicales; las cinematográficas, coreográficas y pantomímicas; las obras de dibujo, pintura, escultura, arquitectura; modelos y obras de arte o ciencia aplicadas al comercio o a la industria; los impresos, planos y mapas; los plásticos, fotografías, grabados y fonogramas, en fin, toda producción científica, literaria, artística o didáctica sea cual fuere el procedimiento de reproducción."
      }
    ]
  },

  procedimientoInvestigativo: {
    title: "Procedimiento investigativo en Argentina",
    concepto: "El derecho procesal es una rama del derecho público que regula cómo se lleva a cabo un proceso judicial. Es decir, establece las normas, etapas, actos y procedimientos que deben seguirse para que un tribunal pueda impartir justicia de manera legítima y ordenada.",
    subtitulo: "Procedimiento investigativo en Argentina (caso GTA VI)",
    etapas: [
      {
        titulo: "Denuncia",
        descripcion: "Presentada en la Fiscalía especializada en ciberdelitos (UFECI). Se aporta material filtrado y links."
      },
      {
        titulo: "Peritos y cadena de custodia",
        descripcion: "Informáticos forenses hacen imágenes de discos/dispositivos. Todo se sella y documenta para preservar validez judicial."
      },
      {
        titulo: "Medidas cautelares",
        descripcion: "Allanamientos digitales/físicos. Bloqueo de cuentas, accesos y fondos vinculados."
      },
      {
        titulo: "Evidencia técnica",
        descripcion: "Logs, IPs, accesos, backups. Copias certificadas de foros y archivos filtrados."
      },
      {
        titulo: "Cooperación internacional",
        descripcion: "Solicitudes a Google, Microsoft, Discord, etc."
      },
      {
        titulo: "Etapas procesales",
        descripcion: "Investigación preliminar → instrucción → acusación → juicio."
      }
    ]
  }
};