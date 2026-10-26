// Tests de Fisiología · Bloque I (fisiología general, temas 1 a 6).
// Cada test es corto: unas 10 preguntas de un solo tema.
// "correcta" es la posición de la respuesta correcta (0 = primera opción).
const fisiologiaBloque1 = {
  titulo: "Bloque I · Fisiología general",
  tests: [
    /* ---------- Tema 1: introducción a la fisiología ---------- */
    {
      id: "t01",
      numero: "1",
      titulo: "Introducción a la fisiología",
      preguntas: [
        {
          texto: "¿A quién se considera el padre de la fisiología moderna?",
          opciones: ["Claude Bernard", "William Harvey", "Karl Landsteiner", "Walter Cannon"],
          correcta: 1,
          explicacion: "Según los apuntes, el padre de la fisiología moderna es William Harvey. Landsteiner es quien descubrió el sistema AB0 (tema 8)."
        },
        {
          texto: "¿Qué es el medio interno?",
          opciones: [
            "El líquido intracelular",
            "El citoplasma de las células nerviosas",
            "El líquido extracelular que rodea a las células",
            "La sangre arterial exclusivamente"
          ],
          correcta: 2,
          explicacion: "El medio interno es el líquido extracelular: rodea a las células, tiene una composición parecida al agua de mar y debe mantenerse muy estable."
        },
        {
          texto: "La homeostasis se mantiene principalmente mediante…",
          opciones: [
            "Retroalimentación negativa: la respuesta revierte el cambio",
            "Retroalimentación positiva: la respuesta amplifica el cambio",
            "Transporte activo de agua",
            "La acción exclusiva del sistema endocrino"
          ],
          correcta: 0,
          explicacion: "La homeostasis se regula sobre todo con bucles de retroalimentación negativa: si una variable sube, la respuesta la hace bajar y al revés. El centro de control actúa a través del sistema nervioso o del endocrino."
        },
        {
          texto: "¿Cuál es el orden correcto de un mecanismo homeostático?",
          opciones: [
            "Respuesta → detección → integración → equilibrio",
            "Integración → detección → respuesta → equilibrio",
            "Detección → respuesta → integración → equilibrio",
            "Desequilibrio → detección → integración → respuesta → equilibrio"
          ],
          correcta: 3,
          explicacion: "Un receptor detecta el desequilibrio, el centro de control integra la información y da una orden, el efector responde y se recupera el equilibrio."
        },
        {
          texto: "¿Qué sustancia atraviesa libremente la bicapa lipídica de la membrana?",
          opciones: ["El ion sodio", "La glucosa", "El CO₂", "Los aminoácidos"],
          correcta: 2,
          explicacion: "Los gases (O₂, CO₂) y las moléculas hidrófobas pequeñas pasan libremente. Los iones, la glucosa y los aminoácidos necesitan canales o transportadores."
        },
        {
          texto: "¿Por dónde atraviesa principalmente el agua la membrana celular?",
          opciones: ["Por la bomba Na⁺/K⁺", "Por las acuaporinas", "Por los receptores de membrana", "Por difusión libre a través de los fosfolípidos"],
          correcta: 1,
          explicacion: "Aunque es pequeña, el agua es polar y la bicapa es prácticamente impermeable a ella: pasa por proteínas canal específicas llamadas acuaporinas."
        },
        {
          texto: "¿Qué caracteriza al transporte activo?",
          opciones: [
            "Va a favor de gradiente y no gasta energía",
            "Solo lo usan los gases",
            "Es el que usa el agua para pasar por las acuaporinas",
            "Va en contra de gradiente y requiere energía"
          ],
          correcta: 3,
          explicacion: "El transporte activo mueve sustancias en contra de su gradiente y necesita energía (ATP), como la bomba Na⁺/K⁺. El pasivo va a favor de gradiente y no gasta energía."
        },
        {
          texto: "Una molécula se une a un receptor, no lo activa e impide que se una el ligando. Es un…",
          opciones: ["Agonista", "Antagonista", "Segundo mensajero", "Neurotransmisor"],
          correcta: 1,
          explicacion: "El antagonista ocupa el receptor sin activarlo y bloquea al ligando: no hay acción. El agonista, en cambio, se une al mismo receptor y lo activa."
        },
        {
          texto: "Comparando los dos grandes sistemas de comunicación del organismo…",
          opciones: [
            "El nervioso es más rápido; el endocrino es más lento y general",
            "El endocrino es más rápido porque usa la sangre",
            "Los dos tienen la misma velocidad",
            "El nervioso solo actúa sobre glándulas"
          ],
          correcta: 0,
          explicacion: "La comunicación nerviosa es la más rápida. La endocrina (hormonas por la sangre) es más lenta y llega de forma general a todas las células diana."
        },
        {
          texto: "¿Qué es una célula diana?",
          opciones: [
            "La que fabrica la hormona",
            "Cualquier célula del líquido extracelular",
            "La que tiene receptores específicos para una hormona y responde a ella",
            "Una célula que ha perdido sus receptores"
          ],
          correcta: 2,
          explicacion: "La célula diana es la que posee receptores específicos a los que se une la hormona para ejercer su función."
        }
      ]
    },

    /* ---------- Tema 2: líquidos corporales ---------- */
    {
      id: "t02",
      numero: "2",
      titulo: "Líquidos corporales",
      preguntas: [
        {
          texto: "En un adulto, el agua corporal total supone aproximadamente…",
          opciones: ["El 40 % del peso", "El 20 % del peso", "El 80 % del peso", "El 60 % del peso"],
          correcta: 3,
          explicacion: "El agua corporal total es ≈ 60 % del peso (2/3). De ella, el LIC supone el 40 % del peso y el LEC el 20 %."
        },
        {
          texto: "Una persona pesa 70 kg. ¿Cuál es aproximadamente su volumen de líquido extracelular?",
          opciones: ["42 L", "28 L", "14 L", "3,5 L"],
          correcta: 2,
          explicacion: "LEC = 0,2 × peso = 0,2 × 70 = 14 L. El agua total sería 42 L (0,6 × 70), el LIC 28 L y el plasma 3,5 L (LEC/4)."
        },
        {
          texto: "¿Qué fracción del líquido extracelular corresponde al plasma?",
          opciones: ["1/4", "3/4", "1/2", "2/3"],
          correcta: 0,
          explicacion: "Plasma = LEC/4; el líquido intersticial es el resto, LEC × 3/4."
        },
        {
          texto: "¿Qué iones predominan en el líquido extracelular?",
          opciones: ["Potasio y fosfato", "Sodio y cloro", "Calcio y magnesio", "Potasio y proteínas"],
          correcta: 1,
          explicacion: "En el LEC predominan el Na⁺ y el Cl⁻ («sal», como el agua de mar). En el LIC predomina el K⁺. Cada compartimento es eléctricamente neutro."
        },
        {
          texto: "¿Quién tiene, en proporción, menos agua corporal?",
          opciones: ["Un recién nacido", "Un niño de 5 años", "Un hombre joven", "Una mujer adulta"],
          correcta: 3,
          explicacion: "Las mujeres tienen más grasa corporal y se acercan al 50 % de agua (≈ 10 % menos que el hombre). Cuanto más joven, más agua."
        },
        {
          texto: "En la ósmosis, el agua se mueve…",
          opciones: [
            "Desde la solución más diluida a la más concentrada",
            "Desde la solución más concentrada a la más diluida",
            "Siempre hacia el interior de la célula",
            "Gastando ATP"
          ],
          correcta: 0,
          explicacion: "La ósmosis es el paso pasivo de agua a través de una membrana semipermeable desde donde hay menos soluto hacia donde hay más, para igualar concentraciones."
        },
        {
          texto: "¿Qué osmolaridad tiene una solución de NaCl 0,15 M?",
          opciones: ["150 mOsm/L", "300 mOsm/L", "450 mOsm/L", "15 mOsm/L"],
          correcta: 1,
          explicacion: "El NaCl se disocia en 2 partículas (Na⁺ y Cl⁻): 2 × 0,15 = 0,3 Osm/L = 300 mOsm/L. Una glucosa 0,15 M, que no se disocia, tendría 150 mOsm/L."
        },
        {
          texto: "Si un hematíe se coloca en una solución hipertónica…",
          opciones: [
            "Entra agua y se hincha",
            "No cambia de volumen",
            "Sale agua y se encoge",
            "Gana sodio y estalla"
          ],
          correcta: 2,
          explicacion: "En una solución hipertónica hay más solutos no permeables fuera: el agua sale de la célula y esta se encoge (crenación). En una hipotónica entra agua y se hincha (hemólisis)."
        },
        {
          texto: "¿Cuál de estas soluciones es isotónica?",
          opciones: ["Agua destilada", "NaCl al 3 %", "Glucosa al 20 %", "NaCl al 0,9 %"],
          correcta: 3,
          explicacion: "El suero fisiológico (NaCl 0,9 %) y la glucosa al 5 % son isotónicos: la célula no cambia de volumen. El agua destilada (0 mOsm) es hipotónica."
        },
        {
          texto: "¿Qué genera la presión oncótica (coloidosmótica) del plasma?",
          opciones: [
            "La presión de la sangre en el capilar",
            "Las proteínas plasmáticas",
            "El sodio del líquido intersticial",
            "La glucosa disuelta"
          ],
          correcta: 1,
          explicacion: "La presión oncótica la producen las proteínas del plasma (sobre todo la albúmina), que retienen agua dentro del vaso. La presión hidrostática es la que ejerce la sangre y tiende a sacar líquido."
        }
      ]
    },

    /* ---------- Temas 3 y 4: potenciales eléctricos ---------- */
    {
      id: "t03",
      numero: "3–4",
      titulo: "Potenciales eléctricos",
      preguntas: [
        {
          texto: "¿Qué valor aproximado tiene el potencial de membrana en reposo de una neurona?",
          opciones: ["+40 mV", "0 mV", "−70 mV", "−150 mV"],
          correcta: 2,
          explicacion: "En reposo el interior es negativo, entre −60 y −80 mV (≈ −70 mV). +40 mV es el pico del potencial de acción."
        },
        {
          texto: "En reposo, la membrana es mucho más permeable a…",
          opciones: ["El potasio", "El sodio", "El calcio", "El cloro"],
          correcta: 0,
          explicacion: "Gracias a los canales pasivos de K⁺ siempre abiertos, la membrana en reposo es mucho más permeable al potasio. Por eso el Vm de reposo está cerca del potencial de equilibrio del K⁺ (≈ −90 mV)."
        },
        {
          texto: "¿Cómo funciona la bomba Na⁺/K⁺?",
          opciones: [
            "Mete 3 Na⁺ y saca 2 K⁺ sin gastar energía",
            "Saca 3 Na⁺ y mete 2 K⁺ gastando ATP",
            "Saca 2 Na⁺ y mete 3 K⁺ gastando ATP",
            "Intercambia Na⁺ por Ca²⁺"
          ],
          correcta: 1,
          explicacion: "Es una bomba electrógena: saca 3 Na⁺ y mete 2 K⁺ gastando ATP. Acumula más cargas positivas fuera y ayuda a que el interior sea negativo."
        },
        {
          texto: "¿Qué ecuación se usa para calcular el potencial de membrana en reposo?",
          opciones: ["La de Nernst", "La de Henderson-Hasselbalch", "La de Laplace", "La de Goldman"],
          correcta: 3,
          explicacion: "La ecuación de Nernst calcula el potencial de equilibrio de un solo ion; la de Goldman, el potencial de membrana en reposo teniendo en cuenta varios iones y su permeabilidad."
        },
        {
          texto: "¿Cuál de estos estímulos es hiperpolarizante?",
          opciones: ["La entrada de Na⁺", "La entrada de Ca²⁺", "La entrada de Cl⁻", "La apertura de canales de Na⁺ dependientes de voltaje"],
          correcta: 2,
          explicacion: "Hiperpolarizan (hacen el Vm más negativo) la salida de K⁺ y la entrada de Cl⁻. Despolarizan la entrada de Na⁺ y de Ca²⁺."
        },
        {
          texto: "¿Qué característica es propia del potencial de acción y NO del potencial local?",
          opciones: [
            "Puede ser hiperpolarizante",
            "Se suma espacial y temporalmente",
            "Se propaga con decremento",
            "Responde según la ley del «todo o nada»"
          ],
          correcta: 3,
          explicacion: "El potencial de acción tiene umbral, es «todo o nada», no se suma, se propaga sin decremento y tiene periodo refractario. Los potenciales locales sí se suman y se propagan con decremento."
        },
        {
          texto: "¿Qué provoca la fase de despolarización del potencial de acción neuronal?",
          opciones: [
            "La apertura de canales de Na⁺ dependientes de voltaje y la entrada de Na⁺",
            "La salida de K⁺ por canales dependientes de voltaje",
            "La activación de la bomba Na⁺/K⁺",
            "La entrada de Cl⁻"
          ],
          correcta: 0,
          explicacion: "Al alcanzar el umbral (≈ −50 mV) se abren los canales de Na⁺ dependientes de voltaje y entra Na⁺ hasta ≈ +40 mV. La repolarización se debe a la salida de K⁺."
        },
        {
          texto: "¿Por qué hay una fase de hiperpolarización al final del potencial de acción?",
          opciones: [
            "Porque entra demasiado Na⁺",
            "Porque los canales de K⁺ se cierran lentamente y sale K⁺ de más",
            "Porque se para la bomba Na⁺/K⁺",
            "Porque entra Ca²⁺"
          ],
          correcta: 1,
          explicacion: "Los canales de K⁺ dependientes de voltaje se cierran con retraso: sale más K⁺ del necesario y el Vm queda un momento por debajo del de reposo."
        },
        {
          texto: "Durante el periodo refractario relativo…",
          opciones: [
            "Es imposible generar otro potencial de acción",
            "Los canales de Na⁺ están abiertos permanentemente",
            "Se puede generar otro potencial de acción con un estímulo más intenso de lo normal",
            "La célula está en reposo absoluto"
          ],
          correcta: 2,
          explicacion: "En el periodo refractario absoluto no se puede disparar otro potencial de acción con ningún estímulo; en el relativo sí, pero solo con un estímulo supraumbral. A mayor periodo refractario, menor frecuencia de disparo."
        },
        {
          texto: "La conducción saltatoria…",
          opciones: [
            "Se da en axones sin mielina y es la más lenta",
            "Ocurre en axones mielinizados, con canales de Na⁺ en los nodos de Ranvier, y es la más rápida",
            "Es típica de la esclerosis múltiple",
            "Permite que el impulso viaje en las dos direcciones"
          ],
          correcta: 1,
          explicacion: "En los axones mielinizados los canales de Na⁺ están solo en los nodos de Ranvier y el impulso «salta» de uno a otro: es la conducción más rápida. La mielina la forman las células de Schwann (SNP) y los oligodendrocitos (SNC)."
        }
      ]
    },

    /* ---------- Tema 5: transmisión sináptica ---------- */
    {
      id: "t05",
      numero: "5",
      titulo: "Transmisión sináptica",
      preguntas: [
        {
          texto: "¿Qué estructura permite la sinapsis eléctrica?",
          opciones: ["Las vesículas sinápticas", "Los receptores metabotrópicos", "Las uniones GAP", "La hendidura sináptica de 20-40 nm"],
          correcta: 2,
          explicacion: "Las sinapsis eléctricas se forman por uniones GAP (canales comunicantes) que conectan los citoplasmas: la corriente pasa directamente, sin retardo. Son típicas de los cardiomiocitos."
        },
        {
          texto: "¿Qué diferencia a la sinapsis química de la eléctrica?",
          opciones: [
            "La química no tiene retardo sináptico",
            "La química usa neurotransmisores y tiene un retardo de 1-5 ms",
            "La química tiene continuidad citoplasmática",
            "La química solo existe en el corazón"
          ],
          correcta: 1,
          explicacion: "La sinapsis química usa neurotransmisores, no hay continuidad entre las células, la hendidura es mayor (20-40 nm) y hay un retardo de 1-5 ms. Es la mayoría de las sinapsis."
        },
        {
          texto: "¿Qué ion, al entrar en el terminal presináptico, desencadena la liberación del neurotransmisor?",
          opciones: ["Ca²⁺", "Na⁺", "K⁺", "Cl⁻"],
          correcta: 0,
          explicacion: "El potencial de acción abre canales de Ca²⁺ dependientes de voltaje; la entrada de Ca²⁺ hace que las vesículas se fusionen con la membrana y liberen el neurotransmisor por exocitosis."
        },
        {
          texto: "¿Cómo se libera el neurotransmisor a la hendidura sináptica?",
          opciones: ["Por difusión simple a través de la membrana", "Por la bomba Na⁺/K⁺", "Por endocitosis", "Por exocitosis de las vesículas sinápticas"],
          correcta: 3,
          explicacion: "Las vesículas que contienen el neurotransmisor se fusionan con la membrana del terminal y vierten su contenido al espacio sináptico (exocitosis)."
        },
        {
          texto: "Los receptores ionotrópicos…",
          opciones: [
            "Están acoplados a proteínas G y son lentos",
            "Son canales iónicos dependientes de ligando y dan respuestas rápidas",
            "Solo existen en las glándulas",
            "Necesitan segundos mensajeros"
          ],
          correcta: 1,
          explicacion: "Los ionotrópicos son canales que se abren al unirse el neurotransmisor: cambian el Vm directamente y la respuesta es rápida. Los metabotrópicos van acoplados a proteína G, usan segundos mensajeros y son lentos."
        },
        {
          texto: "¿Cuál es el principal neurotransmisor excitador del sistema nervioso central?",
          opciones: ["GABA", "Glicina", "Glutamato", "Acetilcolina"],
          correcta: 2,
          explicacion: "El glutamato es el principal excitador del SNC: al unirse a su receptor entra Na⁺ y la célula se despolariza. El GABA es el principal inhibidor del cerebro."
        },
        {
          texto: "¿Cómo inhibe el GABA a la neurona postsináptica?",
          opciones: [
            "Abriendo canales de Cl⁻: entra cloro y la célula se hiperpolariza",
            "Abriendo canales de Na⁺",
            "Bloqueando la bomba Na⁺/K⁺",
            "Aumentando la entrada de Ca²⁺"
          ],
          correcta: 0,
          explicacion: "El GABA abre canales de cloro: entra Cl⁻, el Vm se hace más negativo (hiperpolarización) y se aleja del umbral de disparo."
        },
        {
          texto: "¿Qué ocurre en la potenciación sináptica a largo plazo (LTP)?",
          opciones: [
            "Se retiran receptores de la membrana postsináptica",
            "La sinapsis deja de funcionar",
            "Desaparece el retardo sináptico",
            "Se colocan más receptores en la membrana postsináptica y la respuesta es mayor"
          ],
          correcta: 3,
          explicacion: "En la LTP aumentan los receptores postsinápticos y la respuesta se hace mayor; en la depresión a largo plazo (LTD) disminuyen. Es la base celular del aprendizaje y la memoria."
        },
        {
          texto: "Una neurona recibe a la vez señales excitadoras e inhibidoras. ¿Cuándo disparará un potencial de acción?",
          opciones: [
            "Siempre que reciba glutamato",
            "Cuando la suma de todas las señales alcance el umbral (≈ −50 mV)",
            "Solo si no recibe ningún GABA",
            "Nunca, porque se anulan"
          ],
          correcta: 1,
          explicacion: "Los potenciales postsinápticos se suman en la neurona; si la despolarización resultante alcanza el umbral (≈ −50 mV) en el cono axónico, se genera el potencial de acción."
        },
        {
          texto: "¿Cuál de estas afirmaciones sobre la sinapsis es correcta?",
          opciones: [
            "El flujo de información es bidireccional",
            "Una neurona solo puede hacer sinapsis con otra neurona",
            "Una misma neurona puede ser postsináptica de una y presináptica de otra",
            "Cada neurotransmisor tiene un único tipo de receptor"
          ],
          correcta: 2,
          explicacion: "El flujo es unidireccional; una neurona puede conectar con otra neurona, una fibra muscular o una glándula; y un mismo neurotransmisor puede tener varios receptores distintos."
        }
      ]
    },

    /* ---------- Tema 6: sistema nervioso autónomo ---------- */
    {
      id: "t06",
      numero: "6",
      titulo: "Sistema nervioso autónomo",
      preguntas: [
        {
          texto: "¿De qué segmentos del SNC sale el sistema nervioso simpático?",
          opciones: [
            "Del tronco del encéfalo y de la médula sacra",
            "De la médula torácica y lumbar (T1-L2)",
            "Solo de la médula cervical",
            "De la corteza cerebral"
          ],
          correcta: 1,
          explicacion: "El simpático tiene origen toracolumbar (T1-L2). El parasimpático es craneosacro: pares III, VII, IX y X y médula sacra (S2-S4)."
        },
        {
          texto: "¿Qué neurotransmisor libera la neurona postganglionar parasimpática?",
          opciones: ["Noradrenalina", "Adrenalina", "Dopamina", "Acetilcolina"],
          correcta: 3,
          explicacion: "La postganglionar parasimpática libera acetilcolina sobre receptores muscarínicos. La simpática libera noradrenalina sobre receptores α y β."
        },
        {
          texto: "En todos los ganglios autónomos (simpáticos y parasimpáticos), la neurona preganglionar libera…",
          opciones: [
            "Acetilcolina sobre receptores nicotínicos",
            "Noradrenalina sobre receptores α",
            "Acetilcolina sobre receptores muscarínicos",
            "Adrenalina sobre receptores β"
          ],
          correcta: 0,
          explicacion: "Todas las preganglionares son colinérgicas y actúan sobre receptores nicotínicos (ionotrópicos) de la neurona postganglionar."
        },
        {
          texto: "¿Qué nervio transporta aproximadamente el 75 % de las fibras parasimpáticas?",
          opciones: ["El facial", "El glosofaríngeo", "El vago", "El motor ocular común"],
          correcta: 2,
          explicacion: "El nervio vago (X par) lleva ≈ 75 % de las fibras parasimpáticas: corazón, pulmones y la mayor parte del aparato digestivo."
        },
        {
          texto: "En el simpático, ¿cómo son los axones de las neuronas pre y postganglionar?",
          opciones: [
            "Preganglionar larga y postganglionar corta",
            "Las dos largas",
            "Las dos cortas",
            "Preganglionar corta y postganglionar larga"
          ],
          correcta: 3,
          explicacion: "Los ganglios simpáticos están junto a la médula (cadena paravertebral), así que la preganglionar es corta y la postganglionar larga. En el parasimpático es al revés: los ganglios están cerca o dentro del órgano."
        },
        {
          texto: "¿Cuál de estos efectos es propio del parasimpático?",
          opciones: ["Midriasis", "Broncodilatación", "Miosis y reducción de la frecuencia cardiaca", "Aumento de la glucogenólisis"],
          correcta: 2,
          explicacion: "El parasimpático («reposo y digestión») produce miosis, baja la frecuencia cardiaca, broncoconstricción, salivación y activa la digestión. Lo demás son efectos simpáticos."
        },
        {
          texto: "Las glándulas sudoríparas son una excepción del SNA porque…",
          opciones: [
            "Solo reciben parasimpático",
            "Reciben simpático pero su postganglionar libera acetilcolina sobre receptores muscarínicos",
            "No tienen ninguna inervación",
            "Las inerva el sistema somático"
          ],
          correcta: 1,
          explicacion: "La sudoración y la piloerección dependen del simpático, pero la neurona postganglionar libera acetilcolina que actúa sobre receptores muscarínicos."
        },
        {
          texto: "¿Qué es la médula adrenal?",
          opciones: [
            "Un ganglio simpático modificado cuyas células cromafines liberan adrenalina (80 %) y noradrenalina (20 %)",
            "La parte de la glándula suprarrenal que fabrica cortisol",
            "Un ganglio parasimpático",
            "Una parte de la médula espinal lumbar"
          ],
          correcta: 0,
          explicacion: "La médula adrenal es un ganglio simpático modificado: sus células cromafines liberan a la sangre adrenalina (80 %) y noradrenalina (20 %), con un efecto más lento pero más duradero. El cortisol lo fabrica la corteza suprarrenal."
        },
        {
          texto: "El simpático produce vasodilatación en el músculo esquelético y vasoconstricción en otros territorios. ¿Por qué?",
          opciones: [
            "Porque libera sustancias distintas en cada vaso",
            "Porque el parasimpático actúa en el músculo",
            "Porque los vasos musculares no tienen inervación",
            "Porque hay receptores distintos: β₂ dilatan y α contraen"
          ],
          correcta: 3,
          explicacion: "La misma sustancia produce efectos opuestos según el receptor: los β₂ de las arteriolas musculares dilatan y los α del resto del cuerpo contraen. Así la sangre se redirige a los músculos."
        },
        {
          texto: "¿Qué estructura es el principal centro regulador del SNA (temperatura, agua, alimentación)?",
          opciones: ["El cerebelo", "El hipotálamo", "La corteza motora", "La médula sacra"],
          correcta: 1,
          explicacion: "El hipotálamo regula el SNA y controla la temperatura, el equilibrio hídrico y la alimentación; envía órdenes al tronco del encéfalo y a la médula espinal."
        }
      ]
    },

    /* ---------- Repaso del bloque I ---------- */
    {
      id: "r1",
      numero: "R",
      titulo: "Repaso del bloque I",
      preguntas: [
        {
          texto: "¿Qué volumen de líquido intracelular tiene una persona de 50 kg?",
          opciones: ["10 L", "20 L", "30 L", "12,5 L"],
          correcta: 1,
          explicacion: "LIC = 0,4 × peso = 0,4 × 50 = 20 L. El agua total serían 30 L y el LEC 10 L."
        },
        {
          texto: "¿Qué osmolaridad tiene una disolución de CaCl₂ 0,2 M?",
          opciones: ["200 mOsm/L", "400 mOsm/L", "600 mOsm/L", "800 mOsm/L"],
          correcta: 2,
          explicacion: "El CaCl₂ se disocia en 3 partículas (1 Ca²⁺ y 2 Cl⁻): 3 × 0,2 = 0,6 Osm/L = 600 mOsm/L."
        },
        {
          texto: "Si a un cultivo celular le aumentamos mucho la concentración de Na⁺ extracelular, ¿cambiará el potencial de membrana?",
          opciones: [
            "No, porque en reposo solo importa el K⁺",
            "No, porque la bomba lo compensa al instante",
            "Solo si la célula es una neurona",
            "Sí, porque cambia la concentración de uno de los iones que generan el potencial"
          ],
          correcta: 3,
          explicacion: "El potencial de membrana depende de las concentraciones de los iones a ambos lados y de su permeabilidad. Aunque el K⁺ sea más permeable, cambiar el Na⁺ modifica el potencial."
        },
        {
          texto: "¿Dónde se genera normalmente el potencial de acción en una neurona?",
          opciones: ["En el cono axónico (segmento inicial del axón)", "En el terminal presináptico", "En las dendritas", "En la vaina de mielina"],
          correcta: 0,
          explicacion: "La zona de disparo es el cono axónico, que tiene gran densidad de canales de Na⁺ dependientes de voltaje. Desde ahí se propaga sin decremento hasta el terminal."
        },
        {
          texto: "¿Qué enfermedad desmielinizante afecta al sistema nervioso periférico y suele aparecer tras una infección?",
          opciones: ["Esclerosis múltiple", "Esclerosis lateral amiotrófica", "Síndrome de Guillain-Barré", "Enfermedad de Parkinson"],
          correcta: 2,
          explicacion: "El síndrome de Guillain-Barré afecta al SNP, a menudo tras una infección (Campylobacter jejuni), y sus déficits suelen revertir. La esclerosis múltiple es autoinmune y afecta al SNC."
        },
        {
          texto: "Un fármaco bloquea los receptores muscarínicos. ¿Qué efecto cabe esperar?",
          opciones: [
            "Más salivación",
            "Bradicardia",
            "Miosis",
            "Taquicardia y boca seca (se bloquean los efectos parasimpáticos)"
          ],
          correcta: 3,
          explicacion: "Los receptores muscarínicos median los efectos parasimpáticos. Si se bloquean, predomina el simpático: sube la frecuencia cardiaca, baja la salivación y se dilata la pupila (como con la atropina)."
        },
        {
          texto: "¿Qué tipo de receptor es el nicotínico?",
          opciones: ["Un receptor acoplado a proteína G", "Un receptor ionotrópico (canal iónico)", "Un receptor intracelular", "Un receptor adrenérgico"],
          correcta: 1,
          explicacion: "El receptor nicotínico de acetilcolina es un canal iónico (ionotrópico). Los muscarínicos y los adrenérgicos están acoplados a proteínas G."
        },
        {
          texto: "En situación de estrés intenso, ¿cuál de estas respuestas NO esperarías?",
          opciones: ["Broncodilatación", "Aumento de la glucogenólisis", "Aumento de la motilidad digestiva", "Midriasis"],
          correcta: 2,
          explicacion: "En el estrés se activa el simpático: midriasis, taquicardia, broncodilatación, glucogenólisis y lipólisis, y se frena la digestión (vasoconstricción abdominal)."
        },
        {
          texto: "¿Qué sistema nervioso puede controlar el intestino incluso de forma independiente del SNC?",
          opciones: ["El sistema nervioso entérico", "El sistema somático", "El sistema límbico", "El cerebelo"],
          correcta: 0,
          explicacion: "El sistema nervioso entérico (plexos mientérico, para la motilidad, y submucoso, para la secreción) puede funcionar de forma autónoma, aunque lo regulan el simpático y el parasimpático."
        },
        {
          texto: "En la sinapsis química, ¿qué ocurre inmediatamente después de que el Ca²⁺ entra en el terminal presináptico?",
          opciones: [
            "El neurotransmisor se une a su receptor",
            "Se abren los canales de Cl⁻",
            "Se genera un potencial de acción en la postsináptica",
            "Las vesículas se fusionan con la membrana y liberan el neurotransmisor"
          ],
          correcta: 3,
          explicacion: "Orden: llega el potencial de acción → se abren canales de Ca²⁺ → entra Ca²⁺ → exocitosis de las vesículas → el neurotransmisor difunde y se une a su receptor → respuesta postsináptica."
        }
      ]
    }
  ]
};
