// Preguntas del cuestionario Bioquimica 3, agrupadas en partes por dificultad.
// "correcta" es la posición de la respuesta correcta (0 = primera opción).
// "imagen" es opcional: { src, alt } con un esquema que acompaña a la pregunta.
const partes = [
  /* ==========================================================================
     PARTE 1: FÁCIL
     ========================================================================== */
  {
    titulo: "Parte 1 · Fácil",
    preguntas: [
      /* ---------- Tema 12: nucleósidos, nucleótidos y metabolismo ---------- */
      {
        texto: "¿Qué componentes forman un nucleósido?",
        opciones: [
          "Base nitrogenada + pentosa + ácido fosfórico",
          "Base nitrogenada + pentosa",
          "Pentosa + ácido fosfórico",
          "Dos bases nitrogenadas unidas por puentes de hidrógeno"
        ],
        correcta: 1,
        explicacion: "Nucleósido = base nitrogenada + azúcar (ribosa o 2-desoxirribosa). Cuando además se esterifica con ácido fosfórico se obtiene el nucleótido."
      },
      {
        texto: "¿Cuáles son las bases nitrogenadas púricas que forman los ácidos nucleicos?",
        opciones: ["Citosina y timina", "Uracilo y citosina", "Adenina y guanina", "Timina y uracilo"],
        correcta: 2,
        explicacion: "Las bases púricas (A y G) derivan de la purina, un doble anillo. Las pirimidínicas (C, T y U) derivan de la pirimidina, un único anillo. Truco: «AG» púricas, «TC» (y U) pirimidínicas."
      },
      {
        texto: "¿Qué base nitrogenada aparece en el ARN pero no en el ADN?",
        opciones: ["Timina", "Adenina", "Citosina", "Uracilo"],
        correcta: 3,
        explicacion: "El ARN lleva uracilo en lugar de timina. La adenina, la guanina y la citosina están en ambos ácidos nucleicos; la timina es exclusiva del ADN."
      },
      {
        texto: "¿Cuál es el producto final del catabolismo de las purinas en el ser humano, que se excreta?",
        opciones: ["Ácido úrico", "Urea", "β-alanina", "Amoniaco libre"],
        correcta: 0,
        explicacion: "La hipoxantina y la xantina procedentes de AMP y GMP se transforman en ácido úrico, el producto final del catabolismo de las purinas en humanos. La β-alanina es un producto de la degradación de pirimidinas."
      },

      /* ---------- Tema 13: ácidos nucleicos ---------- */
      {
        texto: "Según el modelo de Watson y Crick, ¿cómo es la doble hélice del ADN?",
        opciones: [
          "Levógira, con cadenas paralelas",
          "Dextrógira, con cadenas antiparalelas y complementarias",
          "Dextrógira, con cadenas paralelas e idénticas",
          "Levógira, con las bases en el exterior"
        ],
        correcta: 1,
        explicacion: "La doble hélice es dextrógira, con dos cadenas antiparalelas (una 5'→3' y otra 3'→5') y complementarias. Las bases quedan en el interior y el esqueleto de fosfato y desoxirribosa, en el exterior."
      },
      {
        texto: "¿Cuántos puentes de hidrógeno se forman entre la guanina y la citosina?",
        opciones: ["1", "2", "3", "4"],
        correcta: 2,
        explicacion: "G≡C forma 3 puentes de hidrógeno y A=T forma 2. Por eso las zonas ricas en A-T son más débiles y más fáciles de separar."
      },
      {
        texto: "¿Qué tipo de ARN transporta los aminoácidos hasta los ribosomas?",
        opciones: ["ARN de transferencia (ARNt)", "ARN mensajero (ARNm)", "ARN ribosómico (ARNr)", "ARN nuclear pequeño (snRNA)"],
        correcta: 0,
        explicacion: "El ARNt transporta los aminoácidos al ribosoma; hay tipos específicos para cada aminoácido. El ARNm lleva la información del ADN y el ARNr es el principal componente de los ribosomas."
      },
      {
        texto: "¿Qué proteínas básicas forman la cromatina junto con el ADN?",
        opciones: ["Albúminas", "Queratinas", "Inmunoglobulinas", "Histonas"],
        correcta: 3,
        explicacion: "Las histonas son proteínas básicas, ricas en lisina y arginina (con carga positiva), que interaccionan con el ADN (ácido) y constituyen el primer paso de su empaquetamiento en cromatina."
      },

      /* ---------- Tema 14: biosíntesis de proteínas ---------- */
      {
        texto: "¿Cuál es el codón de inicio de la traducción y qué aminoácido codifica?",
        opciones: ["UAA, triptófano", "UGA, metionina", "AUG, glicina", "AUG, metionina"],
        correcta: 3,
        explicacion: "La traducción empieza en el codón AUG, que codifica la metionina, el aminoácido iniciador. Normalmente se elimina después por una aminopeptidasa durante la maduración de la proteína."
      },
      {
        texto: "¿Cómo se llama el proceso por el que a partir del ADN se obtiene una copia de ARN?",
        opciones: ["Replicación", "Traducción", "Transcripción", "Proteólisis"],
        correcta: 2,
        explicacion: "Replicación: ADN → ADN. Transcripción: ADN → ARN. Traducción: ARN → proteína. Los tres procesos forman el dogma central de la biología molecular."
      },
      {
        texto: "¿Cuáles son los codones de terminación (STOP)?",
        opciones: ["AUG, GUG y UUG", "GAA, GAG y GAC", "UAA, UAG y UGA", "UUU, UUC y UUA"],
        correcta: 2,
        explicacion: "UAA, UAG y UGA no codifican ningún aminoácido: los factores de liberación los reconocen y se libera la cadena proteica."
      },

      /* ---------- Tema 15: introducción a la genética médica ---------- */
      {
        texto: "¿Cuántos cromosomas tiene una célula somática humana?",
        opciones: [
          "46: 22 pares de autosomas y 1 par de cromosomas sexuales",
          "23: 22 autosomas y 1 cromosoma sexual",
          "44 autosomas y 4 cromosomas sexuales",
          "48, organizados en 24 pares"
        ],
        correcta: 0,
        explicacion: "Tenemos 46 cromosomas (23 pares): los autosomas, del par 1 al 22, y los sexuales, X e Y. Los gametos son haploides y tienen 23."
      },
      {
        texto: "¿De quién se hereda el ADN mitocondrial?",
        opciones: ["Solo del padre", "De ambos progenitores por igual", "Solo de la madre", "Del progenitor del mismo sexo"],
        correcta: 2,
        explicacion: "El ADN mitocondrial (circular) se hereda solo de la madre: el espermatozoide lleva sus mitocondrias en la cola, que queda fuera del óvulo en la fecundación."
      },
      {
        texto: "Una variante del ADN presente en más del 1% de la población se denomina:",
        opciones: ["Mutación", "Polimorfismo", "Aneuploidía", "Translocación"],
        correcta: 1,
        explicacion: "Polimorfismo: más del 1% de la población (los más frecuentes son los SNP). Mutación: menos del 1%. El término «mutación» se refiere solo a la frecuencia; no implica que sea perjudicial."
      },
      {
        texto: "¿Cuál de los cromosomas del esquema es acrocéntrico?",
        imagen: {
          src: "img/bioquimica3/tipos-cromosomas.svg",
          alt: "Tres cromosomas A, B y C con el centrómero en distinta posición: en el centro, algo desplazado y casi en el extremo"
        },
        opciones: ["A", "B", "C", "Ninguno: los tres son metacéntricos"],
        correcta: 2,
        explicacion: "En el acrocéntrico (C) el centrómero está casi en el extremo, así que apenas tiene brazo p. A es metacéntrico (centrómero en el centro) y B es submetacéntrico (ligeramente desplazado)."
      },

      /* ---------- Tema 16: mutaciones y modelos de herencia ---------- */
      {
        texto: "¿Qué es un individuo homocigoto para un gen?",
        opciones: [
          "El que tiene dos alelos iguales para ese gen",
          "El que tiene dos alelos distintos para ese gen",
          "El que tiene una sola copia del gen, como los varones para el cromosoma X",
          "El que no expresa ese gen en ninguna célula"
        ],
        correcta: 0,
        explicacion: "Homocigoto: dos alelos iguales. Heterocigoto: dos alelos distintos. Los varones son hemicigotos para los genes del cromosoma X porque solo tienen una copia."
      },
      {
        texto: "¿Qué alteración cromosómica causa el síndrome de Down?",
        opciones: ["Trisomía 13", "Trisomía 18", "Monosomía del X", "Trisomía 21"],
        correcta: 3,
        explicacion: "Trisomía 21: síndrome de Down. Trisomía 13: Patau. Trisomía 18: Edwards. Monosomía X (X0): Turner."
      },
      {
        texto: "¿Cuál de estas enfermedades se hereda de forma recesiva ligada al cromosoma X?",
        opciones: ["Acondroplasia", "Hemofilia", "Fibrosis quística", "Síndrome de Rett"],
        correcta: 1,
        explicacion: "Las hemofilias, el daltonismo y la distrofia muscular de Duchenne/Becker son recesivas ligadas al X. La acondroplasia es autosómica dominante, la fibrosis quística autosómica recesiva y el síndrome de Rett está ligado al X dominante."
      },

      /* ---------- Tema 17: técnicas genéticas de laboratorio ---------- */
      {
        texto: "¿Para qué sirve principalmente la PCR (reacción en cadena de la polimerasa)?",
        opciones: [
          "Para ordenar los cromosomas según su tamaño",
          "Para obtener un gran número de copias de un fragmento concreto de ADN",
          "Para teñir las bandas G de los cromosomas",
          "Para cortar los intrones del ARN"
        ],
        correcta: 1,
        explicacion: "La PCR amplifica un fragmento de ADN delimitado por los cebadores, obteniendo millones de copias (hasta unos 40 ciclos) para después secuenciarlo o detectar mutaciones o patógenos."
      },
      {
        texto: "¿Qué técnica ordena los cromosomas según su tamaño y morfología para detectar alteraciones en su número o grandes cambios estructurales?",
        opciones: ["PCR cuantitativa", "Secuenciación de Sanger", "Cariotipo", "Secuenciación de alto rendimiento (NGS)"],
        correcta: 2,
        explicacion: "El cariotipo ordena los cromosomas en un ideograma. Detecta cambios en el número de copias y anomalías grandes (deleciones, inserciones, translocaciones) y se usa en el diagnóstico prenatal."
      },

      /* ---------- Temas 18 y 19: inmunogenética ---------- */
      {
        texto: "¿Qué rama de la inmunidad adaptativa controla las infecciones intracelulares y qué células la movilizan?",
        opciones: [
          "Humoral, mediante linfocitos B",
          "Celular, mediante linfocitos T",
          "Innata, mediante células natural killer",
          "Humoral, mediante el sistema del complemento"
        ],
        correcta: 1,
        explicacion: "El sistema celular (linfocitos T) controla las infecciones intracelulares, como virus y parásitos. El humoral (linfocitos B) controla las extracelulares, como bacterias y virus circulantes."
      },
      {
        texto: "¿Qué inmunoglobulina predomina en las mucosas, la saliva, las lágrimas y la leche materna?",
        opciones: ["IgD", "IgG", "IgA", "IgE"],
        correcta: 2,
        explicacion: "La IgA protege las mucosas respiratoria y gastrointestinal y pasa al bebé con la leche materna. Ayuda a aglutinar el antígeno para neutralizarlo."
      }
    ]
  },

  /* ==========================================================================
     PARTE 2: MEDIA
     ========================================================================== */
  {
    titulo: "Parte 2 · Media",
    preguntas: [
      /* ---------- Tema 12: nucleósidos, nucleótidos y metabolismo ---------- */
      {
        texto: "En el esquema del nucleótido, ¿qué enlace (?) une la base púrica (3) al carbono 1' de la pentosa (2), y a través de qué átomo de la base?",
        imagen: {
          src: "img/bioquimica3/nucleotido.svg",
          alt: "Esquema de un nucleótido: fosfato (1), pentosa (2) y base púrica (3); el enlace entre la base y el carbono 1' está marcado con un interrogante"
        },
        opciones: [
          "Enlace fosfodiéster, a través del N1",
          "Enlace β-N-glucosídico, a través del N9",
          "Enlace fosfoéster, a través del N9",
          "Enlace β-N-glucosídico, a través del N1"
        ],
        correcta: 1,
        explicacion: "La base se une al C1' del azúcar por un enlace β-N-glucosídico, liberando agua. Las bases púricas lo hacen por el N9 y las pirimidínicas por el N1. El fosfato (1) se une al C5' por un enlace fosfoéster."
      },
      {
        texto: "¿Qué ventaja tiene la vía de recuperación (salvamento) de nucleótidos frente a la vía de novo?",
        opciones: [
          "Es más rápida y de bajo coste energético, porque recicla bases ya existentes",
          "Da autonomía respecto a la dieta, porque construye las bases desde cero",
          "Se produce solo en el hígado y es más lenta",
          "Parte del carbamoil-fosfato y no necesita PRPP"
        ],
        correcta: 0,
        explicacion: "La vía de recuperación recicla bases y nucleósidos (se recupera el 90% de las purinas libres): es rápida y barata. La de novo da autonomía, pero es más lenta, más costosa y se produce en el hígado."
      },
      {
        texto: "¿Qué molécula es el precursor común de la vía de recuperación y de la vía de novo de las purinas?",
        opciones: [
          "Carbamoil-fosfato",
          "Inosín monofosfato (IMP)",
          "Orotato",
          "PRPP (5-fosforribosil-1-pirofosfato)"
        ],
        correcta: 3,
        explicacion: "El PRPP es ribosa-5-fosfato activada con un pirofosfato en el C1' (aportado por el ATP) gracias a la PRPP sintetasa. En la síntesis de pirimidinas también interviene, pero a mitad de la ruta y no como precursor."
      },
      {
        texto: "¿Qué enzima de la vía de recuperación convierte la hipoxantina en IMP y la guanina en GMP?",
        opciones: ["APRT", "HGPRT", "Ribonucleótido reductasa", "Timidilato sintasa"],
        correcta: 1,
        explicacion: "La HGPRT (hipoxantina-guanina fosforribosil transferasa) une la hipoxantina o la guanina al PRPP. La APRT hace lo mismo con la adenina para formar AMP."
      },

      /* ---------- Tema 13: ácidos nucleicos ---------- */
      {
        texto: "¿Qué ocurre con la absorción de luz ultravioleta (260 nm) cuando el ADN se desnaturaliza?",
        opciones: [
          "Disminuye, porque las bases quedan protegidas en el interior",
          "No cambia, porque la absorción depende solo de los fosfatos",
          "Desaparece por completo",
          "Aumenta (efecto hipercrómico), porque las bases quedan expuestas"
        ],
        correcta: 3,
        explicacion: "Las bases aromáticas absorben luz UV. En la doble hélice están protegidas en el interior y absorben menos; al separarse las cadenas quedan expuestas y el pico sube. Así se detecta si el ADN se ha desnaturalizado."
      },
      {
        texto: "¿Qué caracteriza a la forma Z del ADN?",
        opciones: [
          "Es una hélice levógira",
          "Es una hélice dextrógira idéntica a la forma B",
          "Es monocatenaria",
          "Solo aparece en el ARN"
        ],
        correcta: 0,
        explicacion: "Entre las formas A y B las diferencias son mínimas (ambas dextrógiras). La forma Z se distingue porque su hélice es levógira: gira hacia la izquierda."
      },
      {
        texto: "¿Cómo está formado el octámero de histonas del nucleosoma?",
        opciones: [
          "4 H1 y 4 H5",
          "2 H1, 2 H2A, 2 H3 y 2 H4",
          "2 H2A, 2 H2B, 2 H3 y 2 H4",
          "8 H3"
        ],
        correcta: 2,
        explicacion: "El octámero tiene dos copias de H2A, H2B, H3 y H4, y el ADN da 1 vuelta y ¾ a su alrededor. La H1 queda fuera, cohesiona el nucleosoma con el ADN enlazante y estabiliza el solenoide."
      },
      {
        texto: "¿Qué brazo del ARNt señala la letra A y qué función tiene?",
        imagen: {
          src: "img/bioquimica3/arnt.svg",
          alt: "Esquema de un ARN de transferencia en hoja de trébol con cuatro brazos marcados A, B, C y D; el brazo A termina en el extremo 3' con la secuencia ACC"
        },
        opciones: [
          "Brazo del anticodón: reconoce el codón del ARNm",
          "Brazo aceptor: une el aminoácido activado en su extremo 3'",
          "Brazo de la dihidrouridina: se une al ribosoma",
          "Brazo aceptor: se une al codón de inicio AUG"
        ],
        correcta: 1,
        explicacion: "El ARNt tiene forma de hoja de trébol. El brazo aceptor (A) une el aminoácido en su extremo 3', donde está la secuencia ACC. En el brazo inferior (B) está el anticodón, complementario al codón del ARNm."
      },

      /* ---------- Tema 14: biosíntesis de proteínas ---------- */
      {
        texto: "¿Por qué se dice que la replicación del ADN es semiconservativa?",
        opciones: [
          "Porque cada molécula hija tiene una cadena original y una cadena nueva",
          "Porque se conserva la molécula original intacta y se crea otra totalmente nueva",
          "Porque las moléculas hijas mezclan fragmentos viejos y nuevos en cada cadena",
          "Porque solo se copia la mitad de los genes"
        ],
        correcta: 0,
        explicacion: "En el modelo semiconservativo cada ADN hijo conserva una cadena molde original y otra recién sintetizada. El modelo conservativo y el dispersivo (opciones 2 y 3) se descartaron."
      },
      {
        texto: "¿Cómo se llaman los fragmentos señalados con X y qué enzima los une al final de la replicación?",
        imagen: {
          src: "img/bioquimica3/horquilla.svg",
          alt: "Horquilla de replicación: arriba una hebra nueva continua; abajo varios fragmentos cortos con ARN cebador, señalados con la letra X"
        },
        opciones: [
          "Fragmentos de Okazaki; los une la ADN ligasa",
          "Exones; los une la ARN polimerasa",
          "Fragmentos de Okazaki; los une la helicasa",
          "Cebadores de ARN; los une la primasa"
        ],
        correcta: 0,
        explicacion: "La ADN polimerasa solo sintetiza en sentido 5'→3', así que la hebra retardada se copia de forma discontinua en fragmentos de Okazaki, cada uno con su ARN cebador. La ADN polimerasa I cambia el cebador por ADN y la ligasa une los fragmentos."
      },
      {
        texto: "¿Qué modificaciones sufre el pre-ARNm eucariota en sus extremos durante la maduración?",
        opciones: [
          "Se le añade una metionina en 5' y una lisina en 3'",
          "Se eliminan los exones de ambos extremos",
          "Caperuza (CAP) de 7-metilguanosina en 5' y cola de poli-A en 3'",
          "Se metilan las citosinas de los dos extremos"
        ],
        correcta: 2,
        explicacion: "El extremo 5' recibe la caperuza CAP (m7G) y el 3' la cola de poliadeninas. Así el ARNm queda protegido de las enzimas en el citoplasma. Además, el splicing elimina los intrones y une los exones."
      },
      {
        texto: "¿Cómo se degradan las proteínas intracelulares en el citoplasma?",
        opciones: [
          "Por enzimas lisosomales sin necesidad de marcaje",
          "Por el sistema ubiquitina-proteosoma: la ubiquitina las marca y el proteosoma las degrada",
          "Por la ARN polimerasa",
          "Por la acción de la ADN ligasa"
        ],
        correcta: 1,
        explicacion: "En el citoplasma, la ubiquitina marca las proteínas que se van a degradar y el proteosoma las rompe (destaca la secuencia PEST). En los lisosomas se degradan sobre todo las proteínas extracelulares."
      },

      /* ---------- Tema 15: introducción a la genética médica ---------- */
      {
        texto: "Un cambio de base convierte el codón TCG en TAG. ¿Qué tipo de mutación es?",
        opciones: [
          "Silenciosa",
          "De cambio de sentido (missense)",
          "Sin sentido (nonsense)",
          "De cambio de marco de lectura"
        ],
        correcta: 2,
        explicacion: "TAG es un codón de parada (UAG en el ARNm), así que es una mutación sin sentido: la lectura se detiene. Si ocurre al principio del gen, la proteína prácticamente no se forma."
      },
      {
        texto: "¿Qué es la heteroplasmia?",
        opciones: [
          "Que todas las mitocondrias de una persona tengan el mismo ADNmt",
          "Que coexistan mitocondrias con mutaciones en su ADNmt y mitocondrias sin ellas",
          "Que el ADN mitocondrial se herede de ambos progenitores",
          "Que un cromosoma tenga tres copias"
        ],
        correcta: 1,
        explicacion: "Heteroplasmia: mezcla de mitocondrias con y sin mutación (un tipo de mosaicismo). Homoplasmia: todas las mitocondrias tienen el mismo ADNmt."
      },
      {
        texto: "¿Qué efecto tiene la metilación de la citosina de un gen?",
        opciones: [
          "Activa permanentemente el gen",
          "Cambia la secuencia de bases del gen",
          "Impide que el gen se lea y se exprese, aunque puede revertirse por desmetilación",
          "Rompe la doble hélice del ADN"
        ],
        correcta: 2,
        explicacion: "La metilación (CH₃ en la posición 5 de la citosina) es un mecanismo epigenético: no cambia la secuencia, pero impide que se lea el gen. Es reversible por desmetilación."
      },

      /* ---------- Tema 16: mutaciones y modelos de herencia ---------- */
      {
        texto: "¿Qué modelo de herencia es compatible con este árbol genealógico?",
        imagen: {
          src: "img/bioquimica3/arbol-genealogico.svg",
          alt: "Árbol genealógico: padre y madre sanos con tres hijos; solo la hija del medio está afectada"
        },
        opciones: [
          "Autosómica dominante",
          "Ligada al X dominante",
          "Ligada al X recesiva",
          "Autosómica recesiva: ambos padres son portadores"
        ],
        correcta: 3,
        explicacion: "Unos padres sanos con una hija afectada indican herencia recesiva, y los dos progenitores son portadores heterocigotos. No puede ser recesiva ligada al X: el padre tendría que estar afectado para que lo esté su hija."
      },
      {
        texto: "De 80 personas con una mutación patológica, 60 presentan síntomas. ¿Cuál es la penetrancia?",
        opciones: [
          "75%: penetrancia incompleta",
          "100%: penetrancia completa",
          "60%: expresividad variable",
          "25%: penetrancia incompleta"
        ],
        correcta: 0,
        explicacion: "Penetrancia = (portadores con clínica / portadores de la mutación) × 100 = 60/80 × 100 = 75%. Al ser menor del 100%, es incompleta. No hay que confundirla con la expresividad, que es la gravedad de los síntomas."
      },
      {
        texto: "La hemocromatosis hereditaria es autosómica recesiva, pero es unas 4 veces más frecuente en hombres. ¿Por qué?",
        opciones: [
          "Porque el gen está en el cromosoma Y",
          "Porque las mujeres pierden hierro cada mes con la menstruación",
          "Porque los hombres son hemicigotos para el gen",
          "Porque la mutación solo se transmite de padre a hijo"
        ],
        correcta: 1,
        explicacion: "El gen está en la región HLA del cromosoma 6 y afecta a ambos sexos por igual, pero la menstruación hace que las mujeres eliminen hierro. Se trata con sangrías o donaciones periódicas."
      },

      /* ---------- Tema 17: técnicas genéticas de laboratorio ---------- */
      {
        texto: "En esta PCR en tiempo real, ¿qué paciente tiene mayor carga viral?",
        imagen: {
          src: "img/bioquimica3/pcr-tiempo-real.svg",
          alt: "Curvas de PCR en tiempo real de cuatro pacientes: B cruza el umbral hacia el ciclo 8, A hacia el 13, C hacia el 20 y D permanece plana"
        },
        opciones: ["A", "B", "C", "D"],
        correcta: 1,
        explicacion: "Cuanto más virus hay, menos ciclos hacen falta para que la fluorescencia supere el umbral. B lo cruza primero (ciclo 8), así que tiene más carga viral que A y C, aunque los tres son positivos. D es negativo."
      },
      {
        texto: "El SARS-CoV-2 es un virus de ARN y queremos saber cuánto virus hay. ¿Qué tipo de PCR se usa?",
        opciones: [
          "PCR convencional sobre ADN",
          "PCR con transcriptasa inversa en tiempo real (RT-qPCR)",
          "Array CGH",
          "Hibridación in situ fluorescente (FISH)"
        ],
        correcta: 1,
        explicacion: "Como es ARN, se necesita la transcriptasa inversa para pasarlo a ADN complementario (RT). Para cuantificar el virus se usa la PCR en tiempo real o cuantitativa (qPCR) con sondas fluorescentes."
      },

      /* ---------- Temas 18 y 19: inmunogenética ---------- */
      {
        texto: "¿Dónde se localizan los genes del complejo mayor de histocompatibilidad (MHC/HLA)?",
        opciones: [
          "En el brazo largo del cromosoma 21",
          "En el ADN mitocondrial",
          "En el cromosoma X",
          "En el brazo corto del cromosoma 6 (6p)"
        ],
        correcta: 3,
        explicacion: "El MHC se codifica por más de 200 genes en 6p, organizados en las regiones de clase I, II y III. Cualquier alteración en esta zona puede producir defectos de la inmunidad."
      },
      {
        texto: "¿En qué células se encuentran las moléculas del MHC de clase I?",
        opciones: [
          "Solo en las células presentadoras de antígeno",
          "Solo en los linfocitos B",
          "En todas las células nucleadas, excepto neuronas y trofoblastos",
          "Solo en los eritrocitos"
        ],
        correcta: 2,
        explicacion: "El MHC I está en todas las células nucleadas (salvo neuronas y trofoblastos) y se une a los linfocitos T citotóxicos. El MHC II está en las células presentadoras de antígeno y activa a los T colaboradores."
      }
    ]
  },

  /* ==========================================================================
     PARTE 3: DIFÍCIL
     ========================================================================== */
  {
    titulo: "Parte 3 · Difícil",
    preguntas: [
      /* ---------- Tema 12: nucleósidos, nucleótidos y metabolismo ---------- */
      {
        texto: "En la síntesis de novo de purinas, a partir del IMP, ¿qué se necesita para formar AMP y GMP?",
        opciones: [
          "AMP: aspartato y GTP (vía adenilsuccinato); GMP: NAD⁺ y ATP (vía XMP)",
          "AMP: NAD⁺ y ATP (vía XMP); GMP: aspartato y GTP (vía adenilsuccinato)",
          "Ambos necesitan carbamoil-fosfato y CTP",
          "AMP: glutamina y UTP; GMP: fumarato y CTP"
        ],
        correcta: 0,
        explicacion: "IMP → adenilsuccinato (con aspartato y GTP, enzima adenilsuccinato sintetasa) → AMP + fumarato. IMP → XMP (IMP deshidrogenasa, con NAD⁺) → GMP (con ATP). Por eso el exceso de AMP genera ATP para la rama del GMP y viceversa."
      },
      {
        texto: "¿Cuál es el precursor de la síntesis de novo de pirimidinas y qué enzima lo forma?",
        opciones: [
          "PRPP, formado por la PRPP sintetasa",
          "Carbamoil-fosfato, formado por la carbamoil-fosfato sintetasa I mitocondrial",
          "Carbamoil-fosfato, formado por la carbamoil-fosfato sintetasa II citosólica",
          "Orotato, formado por la aspartato carbamoil transferasa"
        ],
        correcta: 2,
        explicacion: "El carbamoil-fosfato se forma a partir de CO₂, glutamina y fosfato mediante la CPS II, que está en el citosol. La CPS I es mitocondrial e interviene en el ciclo de la urea."
      },
      {
        texto: "En la regulación de la síntesis de nucleótidos de pirimidina, ¿qué efecto tiene un exceso de CTP?",
        opciones: [
          "Estimula la carbamoil-fosfato sintetasa II",
          "Inhibe la aspartato carbamoil transferasa",
          "Inhibe la PRPP sintetasa",
          "Estimula la conversión de UMP en OMP"
        ],
        correcta: 1,
        explicacion: "El exceso de CTP inhibe la aspartato carbamoil transferasa (primer paso clave), el de UTP inhibe la CPS II (formación del precursor) y el exceso de PRPP estimula la ruta."
      },
      {
        texto: "¿Cómo se obtiene el dTMP necesario para el ADN?",
        opciones: [
          "Por una ruta específica de novo exclusiva de los desoxinucleótidos",
          "La timidilato sintasa reduce el TMP a dTMP con tiorredoxina",
          "Directamente a partir de la β-alanina",
          "La ribonucleótido reductasa (con tiorredoxina) forma dUMP y la timidilato sintasa lo metila a dTMP"
        ],
        correcta: 3,
        explicacion: "No existe una ruta propia para los desoxinucleótidos: la ribonucleótido reductasa cambia el OH del C2' por H usando tiorredoxina. Como el ADN no lleva uracilo, la timidilato sintasa añade un metilo al dUMP y forma dTMP."
      },

      /* ---------- Tema 13: ácidos nucleicos ---------- */
      {
        texto: "Un ADN bicatenario tiene un 30% de adenina. ¿Qué porcentaje de guanina tendrá?",
        opciones: ["30%", "70%", "20%", "40%"],
        correcta: 2,
        explicacion: "Según Chargaff, A = T y G = C. Si A = 30%, T = 30%, así que G + C = 40% y G = 20%."
      },
      {
        texto: "¿Qué afirmación sobre la histona H1 es correcta?",
        opciones: [
          "Forma parte del octámero central del nucleosoma",
          "Es la histona más conservada entre especies",
          "Es la que menos aminoácidos modificados tiene",
          "Es la más larga (más de 200 aminoácidos), queda fuera del nucleosoma y estabiliza el solenoide"
        ],
        correcta: 3,
        explicacion: "La H1 duplica en longitud al resto, es la más diferente y la que más aminoácidos modificados tiene. Queda fuera del octámero y cohesiona el nucleosoma y el solenoide. H3 y H4 son las más constantes entre especies, y la H2A es la que menos aminoácidos modificados tiene."
      },

      /* ---------- Tema 14: biosíntesis de proteínas ---------- */
      {
        texto: "En la iniciación de la replicación en E. coli, ¿por qué la proteína DnaA consigue abrir el ADN en el origen OriC?",
        opciones: [
          "Porque OriC es rico en pares A-T, que tienen solo 2 puentes de hidrógeno",
          "Porque OriC es rico en pares G-C, que se separan antes",
          "Porque DnaA tiene actividad ligasa",
          "Porque en OriC no hay puentes de hidrógeno"
        ],
        correcta: 0,
        explicacion: "La DnaA, gastando ATP, reconoce OriC y se acumula provocando una distorsión. La zona es rica en A-T (2 puentes de H), más débil y fácil de separar. Después la helicasa DnaB sigue desenrollando y las SSB estabilizan las cadenas sueltas."
      },
      {
        texto: "¿Qué función tiene el factor σ (sigma) de la ARN polimerasa de E. coli?",
        opciones: [
          "Sintetizar el ARN cebador",
          "Reconocer el promotor y asegurar la unión a él; solo la holoenzima con σ puede iniciar la transcripción",
          "Terminar la transcripción desestabilizando el complejo",
          "Corregir los errores de la ARN polimerasa"
        ],
        correcta: 1,
        explicacion: "El núcleo de la polimerasa (α₂ββ'ω) necesita el factor σ para reconocer el promotor (secuencia consenso TTGACA… TATAAT). Cuanto más se parezca el promotor a esa secuencia, más fuerte es."
      },
      {
        texto: "Si la ARN polimerasa incorpora un nucleótido erróneo durante la transcripción, ¿qué ocurre?",
        opciones: [
          "La ADN polimerasa I lo corrige",
          "La ARN polimerasa lo repara con su actividad exonucleasa 3'→5'",
          "No puede repararlo: se detiene la copia y se desecha la molécula errónea",
          "Se ignora y siempre se traduce igual"
        ],
        correcta: 2,
        explicacion: "Hay un sistema de chequeo cada 10 nucleótidos, pero la ARN polimerasa no puede reparar errores. Si detecta uno, detiene la copia y desecha el ARN. Las ADN polimerasas, en cambio, sí corrigen (actividad 3'→5')."
      },

      /* ---------- Tema 15: introducción a la genética médica ---------- */
      {
        texto: "¿Cuántos cromosomas tiene el portador equilibrado de una translocación robertsoniana 14;21?",
        opciones: ["47", "46", "45", "44"],
        correcta: 2,
        explicacion: "Dos cromosomas acrocéntricos (13, 14, 15, 21 o 22) pierden sus brazos cortos y se fusionan, así que el cariotipo tiene 45 cromosomas. El portador es sano, pero su descendencia puede tener monosomías o trisomías, como el síndrome de Down."
      },
      {
        texto: "Se produce una deleción de 3 nucleótidos consecutivos dentro de un exón. ¿Cuál es el efecto más probable?",
        opciones: [
          "Se pierde un aminoácido, pero el marco de lectura se mantiene",
          "Cambia el marco de lectura y todos los aminoácidos siguientes",
          "Es siempre una mutación silenciosa",
          "Se pierde el cromosoma entero"
        ],
        correcta: 0,
        explicacion: "Las mutaciones de cambio de marco se deben a deleciones o inserciones de un número de nucleótidos que no es múltiplo de tres. Si se pierden 3 (un codón), se pierde un aminoácido pero el resto se lee bien."
      },
      {
        texto: "Un feto tiene un cariotipo 69,XXY. ¿Qué tipo de anomalía es?",
        opciones: [
          "Aneuploidía: síndrome de Klinefelter",
          "Trisomía del par sexual",
          "Translocación robertsoniana",
          "Euploidía: triploidía (3n), incompatible con la vida"
        ],
        correcta: 3,
        explicacion: "69 = 3 × 23: tiene tres juegos completos de cromosomas (triploidía), que es un múltiplo exacto y por tanto una euploidía. Conlleva aborto espontáneo. El síndrome de Klinefelter es 47,XXY."
      },
      {
        texto: "Una madre lactante, metabolizadora ultrarrápida por CYP2D6, toma codeína para la tos. ¿Qué riesgo hay para el bebé?",
        opciones: [
          "Ninguno, porque la codeína es un fármaco activo que se inactiva rápido",
          "Intoxicación por morfina, porque la codeína es un profármaco que la madre convierte muy rápido en morfina",
          "Que la codeína no haga efecto en la madre",
          "Déficit de vitamina D en el bebé"
        ],
        correcta: 1,
        explicacion: "La codeína es un profármaco que el CYP2D6 hepático convierte en morfina. En una metabolizadora ultrarrápida se forma mucha morfina, que pasa a la leche y puede intoxicar al bebé. Es un ejemplo clave de farmacogenética."
      },

      /* ---------- Tema 16: mutaciones y modelos de herencia ---------- */
      {
        texto: "Un padre afectado por una enfermedad dominante ligada al X (por ejemplo, el raquitismo hipofosfatémico) tiene hijos con una mujer sana. ¿Qué se espera?",
        opciones: [
          "Todas las hijas afectadas y ningún hijo afectado",
          "Todos los hijos varones afectados y ninguna hija",
          "El 50% de hijos e hijas afectados",
          "Ningún descendiente afectado"
        ],
        correcta: 0,
        explicacion: "El padre transmite su único X a todas sus hijas, que estarán afectadas porque basta un alelo alterado. A sus hijos les da el Y, así que no heredan la enfermedad de él."
      },
      {
        texto: "La estenosis pilórica es mucho más frecuente en varones (1/200) que en mujeres (1/1000). Según el modelo del umbral, ¿qué significa esto?",
        opciones: [
          "Que es una enfermedad ligada al cromosoma Y",
          "Que los varones tienen un umbral de susceptibilidad más bajo: necesitan menos factores para que aparezca",
          "Que las mujeres tienen un umbral más bajo",
          "Que es monogénica con penetrancia completa"
        ],
        correcta: 1,
        explicacion: "En los rasgos cualitativos multifactoriales la predisposición es continua, pero la enfermedad solo aparece si se supera el umbral. Un umbral más bajo en varones significa que con menos factores causales ya la desarrollan."
      },
      {
        texto: "Una enfermedad afecta al 6% de los familiares de los pacientes y al 2% de la población general. ¿Cuánto vale λ y qué indica?",
        opciones: [
          "λ = 0,33: no hay agregación familiar",
          "λ = 4: penetrancia completa",
          "λ = 3: hay agregación familiar",
          "λ = 1: el riesgo es igual al de la población"
        ],
        correcta: 2,
        explicacion: "λ = proporción de familiares afectados / proporción de afectados en la población = 6 / 2 = 3. Si λ > 1, hay agregación familiar. Para separar el efecto genético del ambiental se usan estudios de gemelos monocigóticos y de adoptados."
      },

      /* ---------- Tema 17: técnicas genéticas de laboratorio ---------- */
      {
        texto: "En este array CGH (ADN de control en rojo y del paciente en verde), ¿qué indican los puntos de los cromosomas 21 y X?",
        imagen: {
          src: "img/bioquimica3/array-cgh.svg",
          alt: "Resultado de array CGH: los puntos del cromosoma 21 quedan por encima de la banda normal y los del cromosoma X por debajo"
        },
        opciones: [
          "Pérdida en el 21 y ganancia en el X",
          "Ganancia (duplicación) en el 21 y pérdida (deleción) en el X",
          "Los dos son normales porque tienen el mismo número de puntos",
          "Una translocación equilibrada entre el 21 y el X"
        ],
        correcta: 1,
        explicacion: "Entre las dos líneas amarillas está la normalidad. Si los puntos suben (verde), hay más ADN del paciente que de control: ganancia. Si bajan (rojo), hay más ADN de control: pérdida. Es justo el ejemplo de los apuntes: ganancia en el 21 y pérdida en el X."
      },
      {
        texto: "En la secuenciación de Sanger, en la posición marcada (?) aparecen dos picos superpuestos, de G y de A. ¿Qué indica?",
        imagen: {
          src: "img/bioquimica3/sanger.svg",
          alt: "Electroferograma de secuenciación Sanger; en la posición marcada con interrogante se superponen un pico de G y otro de A"
        },
        opciones: [
          "Que el paciente es homocigoto G/G",
          "Que la muestra está contaminada y hay que repetirla siempre",
          "Que el paciente es heterocigoto (G/A) en esa posición",
          "Que hay una deleción de esa base"
        ],
        correcta: 2,
        explicacion: "Un único pico en una posición indica homocigosis; dos picos superpuestos indican heterocigosis (un alelo con G y el otro con A). Después se compara con el ADN control para ver si es una variante."
      },

      /* ---------- Temas 18 y 19: inmunogenética ---------- */
      {
        texto: "En la recombinación somática de las inmunoglobulinas, ¿qué segmentos se combinan en cada cadena?",
        opciones: [
          "Cadena pesada: V y J; cadena ligera: V, D y J",
          "Las dos cadenas usan solo segmentos D",
          "Cadena pesada: V, D y J; cadena ligera: V y J (sin segmentos D)",
          "Cadena pesada: solo C; cadena ligera: solo V"
        ],
        correcta: 2,
        explicacion: "La cadena pesada combina V (más de 80), D (al menos 30) y J (6); la ligera solo V y J. Las recombinasas codificadas por RAG1 y RAG2 eliminan el ADN entre los segmentos durante la maduración del linfocito B."
      },
      {
        texto: "¿Qué mecanismo de diversidad de las inmunoglobulinas NO se da en los receptores de los linfocitos T (TCR)?",
        opciones: [
          "La recombinación somática V(D)J",
          "La diversidad de unión",
          "La combinación de distintas cadenas",
          "La hipermutación somática"
        ],
        correcta: 3,
        explicacion: "Los TCR comparten casi todos los mecanismos de diversidad de las Ig, excepto la hipermutación somática. Esto ayuda a no generar linfocitos T que reaccionen contra las propias células. Además, los TCR nunca se secretan."
      },
      {
        texto: "¿Con qué enfermedad se asocia el alelo HLA-B27?",
        opciones: ["Espondilitis anquilosante", "Diabetes tipo 1", "Narcolepsia", "Fibrosis quística"],
        correcta: 0,
        explicacion: "HLA-B27 (MHC de clase I) se asocia a la espondilitis anquilosante. HLA-DQB1 se asocia a la diabetes tipo 1, y HLA-DR y HLA-DQ a la narcolepsia."
      },
      {
        texto: "¿Cómo actúan los fármacos inhibidores de puntos de control inmunitario frente al cáncer?",
        opciones: [
          "Bloquean receptores como CTLA-4 y PD-1, impidiendo que el tumor «apague» a los linfocitos T",
          "Inyectan la vacuna BCG directamente en el tumor",
          "Destruyen las células del timo",
          "Aumentan la expresión de MHC de clase II en todas las células"
        ],
        correcta: 0,
        explicacion: "Algunos tumores activan los puntos de control para inactivar a los linfocitos T. Al bloquear CTLA-4 y PD-1, se impide esa inhibición y los linfocitos siguen atacando al cáncer. La BCG en el cáncer de vejiga es una inmunoterapia activa inespecífica."
      }
    ]
  }
];

const preguntas = partes.flatMap((parte) => parte.preguntas);

const formulario = document.getElementById("cuestionario");
const resultado = document.getElementById("resultado");
const botonCorregir = document.getElementById("corregir");
const botonReiniciar = document.getElementById("reiniciar");
const ventana = document.getElementById("ventana");
const ventanaTexto = document.getElementById("ventana-texto");
const botonCerrar = document.getElementById("cerrar");

/* ---------- Construir el cuestionario ---------- */
function crearCuestionario() {
  let i = 0;

  partes.forEach((parte) => {
    const titulo = document.createElement("h2");
    titulo.className = "parte-titulo";
    titulo.textContent = parte.titulo;
    formulario.append(titulo);

    parte.preguntas.forEach((p) => {
      formulario.append(crearPregunta(p, i));
      i++;
    });
  });
}

function crearPregunta(p, i) {
  const tarjeta = document.createElement("article");
  tarjeta.className = "pregunta";

  const cabecera = document.createElement("div");
  cabecera.className = "pregunta-cabecera";

  const numero = document.createElement("span");
  numero.className = "pregunta-numero";
  numero.textContent = `Pregunta ${i + 1} de ${preguntas.length}`;

  const botonExplicacion = document.createElement("button");
  botonExplicacion.type = "button";
  botonExplicacion.className = "boton-explicacion";
  botonExplicacion.textContent = "Explicación";
  botonExplicacion.addEventListener("click", () => abrirExplicacion(p.explicacion));

  cabecera.append(numero, botonExplicacion);

  const texto = document.createElement("p");
  texto.className = "pregunta-texto";
  texto.textContent = p.texto;

  tarjeta.append(cabecera, texto);

  if (p.imagen) {
    const imagen = document.createElement("img");
    imagen.className = "pregunta-imagen";
    imagen.src = p.imagen.src;
    imagen.alt = p.imagen.alt;
    imagen.loading = "lazy";
    tarjeta.append(imagen);
  }

  const grupo = document.createElement("fieldset");
  grupo.className = "opciones";

  p.opciones.forEach((opcion, j) => {
    const etiqueta = document.createElement("label");
    etiqueta.className = "opcion";

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = `pregunta-${i}`;
    radio.value = j;
    radio.addEventListener("change", () => marcarSeleccion(grupo));

    const marca = document.createElement("span");
    marca.className = "marca";
    marca.setAttribute("aria-hidden", "true");

    const contenido = document.createElement("span");
    contenido.textContent = opcion;

    etiqueta.append(radio, marca, contenido);
    grupo.append(etiqueta);
  });

  tarjeta.append(grupo);
  return tarjeta;
}

/* ---------- Selección (azul) ---------- */
function marcarSeleccion(grupo) {
  grupo.querySelectorAll(".opcion").forEach((etiqueta) => {
    const marcada = etiqueta.querySelector("input").checked;
    etiqueta.classList.toggle("seleccionada", marcada);
  });
}

/* ---------- Corregir (verde / rojo) ---------- */
function corregir() {
  let aciertos = 0;

  document.querySelectorAll(".opciones").forEach((grupo, i) => {
    const etiquetas = grupo.querySelectorAll(".opcion");

    etiquetas.forEach((etiqueta, j) => {
      const radio = etiqueta.querySelector("input");
      etiqueta.classList.remove("seleccionada", "correcta", "incorrecta");

      if (j === preguntas[i].correcta) {
        etiqueta.classList.add("correcta");
        if (radio.checked) aciertos++;
      } else if (radio.checked) {
        etiqueta.classList.add("incorrecta");
      }

      radio.disabled = true;
    });
  });

  formulario.classList.add("corregido");
  resultado.textContent = `Has acertado ${aciertos} de ${preguntas.length}`;
  botonCorregir.hidden = true;
  botonReiniciar.hidden = false;
}

/* ---------- Volver a intentar ---------- */
function reiniciar() {
  formulario.reset();
  formulario.classList.remove("corregido");

  document.querySelectorAll(".opcion").forEach((etiqueta) => {
    etiqueta.classList.remove("seleccionada", "correcta", "incorrecta");
    etiqueta.querySelector("input").disabled = false;
  });

  resultado.textContent = "";
  botonCorregir.hidden = false;
  botonReiniciar.hidden = true;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ---------- Ventana de explicación ---------- */
function abrirExplicacion(texto) {
  ventanaTexto.textContent = texto;
  ventana.showModal();
}

botonCerrar.addEventListener("click", () => ventana.close());

// Cerrar al hacer clic fuera de la ventana
ventana.addEventListener("click", (evento) => {
  if (evento.target === ventana) ventana.close();
});

botonCorregir.addEventListener("click", corregir);
botonReiniciar.addEventListener("click", reiniciar);

crearCuestionario();
