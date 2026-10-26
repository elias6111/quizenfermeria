// Tests de Fisiología · Bloque V (sistema respiratorio, temas 20 a 25).
// Cada test es corto: unas 10 preguntas de un solo tema.
// "correcta" es la posición de la respuesta correcta (0 = primera opción).
const fisiologiaBloque5 = {
  titulo: "Bloque V · Sistema respiratorio",
  tests: [
    /* ---------- Tema 20: introducción al sistema respiratorio ---------- */
    {
      id: "t20",
      numero: "20",
      titulo: "Introducción al sistema respiratorio",
      preguntas: [
        {
          texto: "¿Qué es la respiración externa o pulmonar?",
          opciones: [
            "El intercambio de aire entre la atmósfera y los pulmones",
            "El intercambio de O₂ y CO₂ entre el alvéolo y la sangre",
            "El intercambio de gases entre la sangre y las células",
            "Las reacciones de la mitocondria que producen ATP"
          ],
          correcta: 1,
          explicacion: "Ventilación: atmósfera ↔ pulmones. Respiración externa: alvéolo ↔ sangre. Respiración interna: sangre ↔ células. Respiración celular: reacciones que consumen O₂ y producen ATP y CO₂."
        },
        {
          texto: "¿Qué estructura separa las vías respiratorias superiores de las inferiores?",
          opciones: ["La epiglotis", "La carina", "El cartílago cricoides", "El diafragma"],
          correcta: 2,
          explicacion: "El cartílago cricoides marca el límite: por encima, nariz, faringe y laringe; por debajo, tráquea y árbol bronquial."
        },
        {
          texto: "¿Cuál de estas NO es una función de la nariz?",
          opciones: ["Calentar el aire a 37 °C", "Humedecer el aire", "Filtrar partículas", "Intercambiar O₂ con la sangre"],
          correcta: 3,
          explicacion: "La nariz acondiciona el aire: lo filtra (pelos, cilios), lo humedece (moco) y lo calienta (mucha vascularización y cornetes). El intercambio solo ocurre en los alvéolos."
        },
        {
          texto: "¿Qué forma el espacio muerto anatómico?",
          opciones: [
            "La zona de conducción (tráquea, bronquios y bronquiolos), que no intercambia gases",
            "Los alvéolos sin riego sanguíneo",
            "El espacio pleural",
            "Los sacos alveolares"
          ],
          correcta: 0,
          explicacion: "Las vías de conducción, hasta los bronquiolos terminales, solo conducen y acondicionan el aire: el aire que se queda en ellas (≈ 150 mL) no participa en el intercambio."
        },
        {
          texto: "¿Qué estructuras tienen cartílago?",
          opciones: [
            "Los bronquiolos terminales",
            "Los alvéolos",
            "La tráquea y los bronquios",
            "Los bronquiolos respiratorios"
          ],
          correcta: 2,
          explicacion: "Tráquea y bronquios tienen cartílago (semirrígidos, siempre abiertos). Los bronquiolos no tienen cartílago pero sí mucho músculo liso, con el que regulan el calibre."
        },
        {
          texto: "¿Qué células fabrican el surfactante pulmonar?",
          opciones: ["Los neumocitos tipo I", "Los neumocitos tipo II", "Los macrófagos alveolares", "Las células caliciformes"],
          correcta: 1,
          explicacion: "Los neumocitos tipo II (cúbicos) sintetizan el surfactante. Los tipo I (planos y finos) son la superficie de difusión de los gases."
        },
        {
          texto: "¿Qué efecto tiene el parasimpático sobre los bronquios?",
          opciones: [
            "Broncodilatación por receptores β₂",
            "Ninguno",
            "Relajación del músculo liso",
            "Broncoconstricción mediada por acetilcolina"
          ],
          correcta: 3,
          explicacion: "El parasimpático (acetilcolina) contrae el músculo liso bronquial y aumenta el moco. El simpático (β₂) produce broncodilatación."
        },
        {
          texto: "¿Cuántos lóbulos tiene el pulmón derecho?",
          opciones: ["Dos", "Tres", "Cuatro", "Uno"],
          correcta: 1,
          explicacion: "El pulmón derecho tiene 3 lóbulos (fisuras horizontal y oblicua) y el izquierdo 2 (solo fisura oblicua)."
        },
        {
          texto: "¿Qué ocurre en un neumotórax?",
          opciones: [
            "Entra aire en el espacio pleural, se pierde la presión negativa y el pulmón colapsa",
            "Se acumula sangre en los alvéolos",
            "Se obstruye la tráquea",
            "Se destruyen los neumocitos tipo II"
          ],
          correcta: 0,
          explicacion: "La presión negativa del espacio pleural mantiene el pulmón expandido. Si entra aire, la presión se iguala a la atmosférica y el pulmón se colapsa por su elasticidad."
        },
        {
          texto: "¿Cuál es la función de la circulación bronquial?",
          opciones: [
            "Realizar el intercambio de gases",
            "Llevar sangre desoxigenada a los alvéolos",
            "Nutrir el propio tejido pulmonar con sangre oxigenada de la aorta",
            "Devolver la linfa al corazón"
          ],
          correcta: 2,
          explicacion: "La circulación bronquial (arterias bronquiales, ramas de la aorta) nutre bronquios y parénquima. La pulmonar (VD → arteria pulmonar) es la que hace el intercambio de gases."
        }
      ]
    },

    /* ---------- Tema 21: volúmenes y capacidades pulmonares ---------- */
    {
      id: "t21",
      numero: "21",
      titulo: "Volúmenes y capacidades pulmonares",
      preguntas: [
        {
          texto: "¿Cuál es el volumen corriente aproximado de un adulto en reposo?",
          opciones: ["150 mL", "500 mL", "1.500 mL", "3.000 mL"],
          correcta: 1,
          explicacion: "El volumen corriente (aire de una respiración normal) es ≈ 500 mL. 150 mL es el espacio muerto anatómico y 1.500 mL, el volumen residual."
        },
        {
          texto: "¿Qué es el volumen residual?",
          opciones: [
            "El aire que se moviliza en reposo",
            "El aire extra que se puede inspirar",
            "El aire que se puede espirar de forma forzada",
            "El aire que queda en el pulmón tras una espiración forzada"
          ],
          correcta: 3,
          explicacion: "El volumen residual (≈ 1.500 mL) nunca sale del pulmón; por eso no se puede medir con espirometría."
        },
        {
          texto: "¿Qué volúmenes forman la capacidad vital?",
          opciones: [
            "Volumen corriente + volumen inspiratorio de reserva + volumen espiratorio de reserva",
            "Volumen corriente + volumen residual",
            "Volumen espiratorio de reserva + volumen residual",
            "Todos los volúmenes"
          ],
          correcta: 0,
          explicacion: "CV = VC + VRI + VRE (≈ 4,5 L): todo el aire que se puede movilizar. Si se suma el volumen residual se obtiene la capacidad pulmonar total (≈ 6 L)."
        },
        {
          texto: "¿Qué es la capacidad residual funcional?",
          opciones: [
            "Volumen corriente + volumen inspiratorio de reserva",
            "Volumen espiratorio de reserva + volumen residual: el aire que queda tras una espiración normal",
            "La capacidad vital menos el volumen corriente",
            "El aire espirado en el primer segundo"
          ],
          correcta: 1,
          explicacion: "CRF = VRE + VR ≈ 3 L. La capacidad inspiratoria es VC + VRI (≈ 3,5 L)."
        },
        {
          texto: "¿Cuál de estos parámetros NO puede medirse con una espirometría?",
          opciones: ["El volumen corriente", "La capacidad vital", "La capacidad pulmonar total", "El FEV1"],
          correcta: 2,
          explicacion: "Todo lo que incluye el volumen residual (VR, CRF y CPT) no se mide con espirómetro: necesita pletismografía o técnicas de dilución de gases."
        },
        {
          texto: "¿Cómo se calcula el índice de Tiffeneau?",
          opciones: [
            "FEV1 / CVF × 100",
            "CVF / FEV1 × 100",
            "VC × FR",
            "CV − VR"
          ],
          correcta: 0,
          explicacion: "Tiffeneau = FEV1 (volumen espirado en el primer segundo) / capacidad vital forzada × 100. Su valor normal es ≈ 80 %."
        },
        {
          texto: "Una espirometría muestra CVF 99 % y FEV1 75 % de los valores de referencia, con Tiffeneau bajo. ¿Qué patrón es?",
          opciones: ["Restrictivo", "Normal", "Mixto", "Obstructivo"],
          correcta: 3,
          explicacion: "La capacidad está conservada pero sale menos aire en el primer segundo: patrón obstructivo (asma, bronquitis, EPOC)."
        },
        {
          texto: "¿Qué enfermedad produce típicamente un patrón restrictivo?",
          opciones: ["El asma", "La EPOC", "La fibrosis pulmonar", "La bronquitis aguda"],
          correcta: 2,
          explicacion: "En el patrón restrictivo el pulmón no se expande bien y baja la CVF (con Tiffeneau normal): fibrosis, cáncer de pulmón, enfermedades neuromusculares."
        },
        {
          texto: "¿Cuál es la frecuencia respiratoria normal de un adulto en reposo?",
          opciones: ["5-10 rpm", "12-20 rpm", "30-40 rpm", "40-60 rpm"],
          correcta: 1,
          explicacion: "En el adulto, 12-20 rpm (15-20 en los apuntes). Más de 20 es taquipnea y menos de 12, bradipnea. En el recién nacido la frecuencia es mucho mayor (30-80)."
        },
        {
          texto: "¿Qué patrón respiratorio es típico de la cetoacidosis diabética?",
          opciones: ["Cheyne-Stokes", "Biot", "Bradipnea", "Kussmaul: respiración profunda y rápida, sin pausas"],
          correcta: 3,
          explicacion: "La respiración de Kussmaul es profunda y rápida: el organismo elimina CO₂ para compensar la acidosis. Cheyne-Stokes alterna ciclos crecientes y decrecientes con apneas."
        }
      ]
    },

    /* ---------- Tema 22: mecánica y ventilación pulmonar ---------- */
    {
      id: "t22",
      numero: "22",
      titulo: "Mecánica y ventilación pulmonar",
      preguntas: [
        {
          texto: "Según la ley de Boyle, si el volumen del tórax aumenta…",
          opciones: [
            "La presión alveolar aumenta y sale aire",
            "La presión alveolar no cambia",
            "La presión alveolar disminuye y entra aire",
            "Aumenta la presión pleural"
          ],
          correcta: 2,
          explicacion: "A temperatura constante, presión y volumen son inversamente proporcionales: al expandirse el tórax baja la presión alveolar por debajo de la atmosférica y entra el aire."
        },
        {
          texto: "¿Qué presión tiene normalmente el espacio pleural en reposo?",
          opciones: ["+3 mmHg", "0 mmHg", "−3 mmHg (negativa)", "+760 mmHg relativos"],
          correcta: 2,
          explicacion: "La pleura tiene presión subatmosférica (≈ −3 mmHg) porque el pulmón tiende a retraerse y el tórax a expandirse. En la inspiración baja a ≈ −6 mmHg."
        },
        {
          texto: "Durante la inspiración, la presión alveolar es aproximadamente…",
          opciones: ["−1 mmHg", "+1 mmHg", "−6 mmHg", "0 mmHg"],
          correcta: 0,
          explicacion: "Inspiración: alveolar −1 mmHg (entra aire) y pleural −6 mmHg. Espiración: alveolar +1 mmHg (sale aire). Sin flujo: alveolar 0 mmHg."
        },
        {
          texto: "¿Qué músculos actúan en la espiración en reposo?",
          opciones: [
            "Los intercostales internos y los abdominales",
            "Los escalenos",
            "El esternocleidomastoideo",
            "Ninguno: es pasiva, por relajación de los inspiratorios y retracción elástica del pulmón"
          ],
          correcta: 3,
          explicacion: "La espiración tranquila es pasiva. Los intercostales internos y los abdominales solo intervienen en la espiración forzada."
        },
        {
          texto: "¿Cuál es el principal músculo de la inspiración?",
          opciones: ["Los intercostales internos", "El diafragma", "El recto abdominal", "El trapecio"],
          correcta: 1,
          explicacion: "En la inspiración tranquila se contraen el diafragma (el principal) y los intercostales externos. En la forzada se añaden escalenos y esternocleidomastoideo."
        },
        {
          texto: "Según la ley de Laplace (P = 2T/r), ¿qué alvéolos tienden más a colapsarse?",
          opciones: [
            "Los más grandes",
            "Los que tienen más surfactante",
            "Todos por igual",
            "Los más pequeños, porque la presión de retracción es mayor cuanto menor es el radio"
          ],
          correcta: 3,
          explicacion: "La presión de retracción es inversamente proporcional al radio: los alvéolos pequeños colapsarían si no fuera por el surfactante, que reduce la tensión superficial."
        },
        {
          texto: "¿Qué hace el surfactante pulmonar?",
          opciones: [
            "Reduce la tensión superficial, evita el colapso alveolar y aumenta la distensibilidad",
            "Aumenta la tensión superficial",
            "Transporta oxígeno a la sangre",
            "Produce broncoconstricción"
          ],
          correcta: 0,
          explicacion: "El surfactante (sobre todo DPPC, producido por los neumocitos II) se coloca entre las moléculas de agua y reduce la tensión superficial: los alvéolos no colapsan y cuesta menos inspirar."
        },
        {
          texto: "Ante un parto prematuro programado, ¿qué se administra para prevenir el síndrome de dificultad respiratoria del recién nacido?",
          opciones: ["Salbutamol al bebé", "Corticoides a la madre", "Oxígeno puro a la madre", "Adrenalina al bebé"],
          correcta: 1,
          explicacion: "Los corticoides prenatales aceleran la maduración de los neumocitos tipo II del feto. Si el parto no se ha podido programar, se da surfactante exógeno al bebé."
        },
        {
          texto: "Con una frecuencia de 12 rpm, un volumen corriente de 500 mL y un espacio muerto de 150 mL, ¿cuál es la ventilación alveolar?",
          opciones: ["6 L/min", "1,8 L/min", "4,2 L/min", "7,8 L/min"],
          correcta: 2,
          explicacion: "Ventilación alveolar = FR × (VC − espacio muerto) = 12 × 350 mL = 4,2 L/min. La ventilación pulmonar total sería 12 × 500 = 6 L/min."
        },
        {
          texto: "¿Cuál es la PO₂ del aire en la tráquea, una vez humidificado?",
          opciones: ["≈ 160 mmHg", "≈ 150 mmHg", "≈ 100 mmHg", "≈ 40 mmHg"],
          correcta: 1,
          explicacion: "El vapor de agua (47 mmHg) ocupa parte de la presión: (760 − 47) × 0,21 ≈ 150 mmHg. En la atmósfera es ≈ 160 y en el alvéolo ≈ 100 mmHg."
        }
      ]
    },

    /* ---------- Tema 23: circulación pulmonar e intercambio de gases ---------- */
    {
      id: "t23",
      numero: "23",
      titulo: "Circulación pulmonar e intercambio de gases",
      preguntas: [
        {
          texto: "¿Cuáles son las presiones parciales de la sangre venosa que llega al pulmón?",
          opciones: [
            "PO₂ 100 y PCO₂ 40 mmHg",
            "PO₂ 40 y PCO₂ 46 mmHg",
            "PO₂ 150 y PCO₂ 0 mmHg",
            "PO₂ 60 y PCO₂ 60 mmHg"
          ],
          correcta: 1,
          explicacion: "La sangre venosa llega con PO₂ ≈ 40 y PCO₂ ≈ 46 mmHg; el alvéolo tiene PO₂ 100 y PCO₂ 40, así que el O₂ entra en la sangre y el CO₂ sale."
        },
        {
          texto: "¿Cuál es el valor normal aproximado de la relación ventilación/perfusión (V/Q)?",
          opciones: ["0,2", "0,8", "2", "5"],
          correcta: 1,
          explicacion: "V/Q = ventilación alveolar (≈ 4,2 L/min) / flujo pulmonar (≈ 5 L/min) ≈ 0,8."
        },
        {
          texto: "En una embolia pulmonar, ¿qué le ocurre a la relación V/Q de la zona afectada?",
          opciones: [
            "Disminuye, porque no llega aire",
            "No cambia",
            "Aumenta, porque llega aire pero no sangre (espacio muerto alveolar)",
            "Se hace negativa"
          ],
          correcta: 2,
          explicacion: "El émbolo impide la perfusión: hay ventilación sin riego, la V/Q aumenta (tiende a infinito) y esa zona se comporta como espacio muerto."
        },
        {
          texto: "Si un bronquio se obstruye y el alvéolo sigue recibiendo sangre, ¿qué ocurre con la V/Q?",
          opciones: [
            "Disminuye (tiende a 0): es un cortocircuito o shunt",
            "Aumenta",
            "Se mantiene en 0,8",
            "Aumenta el espacio muerto anatómico"
          ],
          correcta: 0,
          explicacion: "Sin ventilación pero con perfusión, la V/Q tiende a 0: la sangre pasa por ese alvéolo sin oxigenarse (cortocircuito). Ocurre en el asma o con tapones de moco."
        },
        {
          texto: "¿Qué ley explica que el CO₂ necesite un gradiente de presión mucho menor que el O₂ para difundir?",
          opciones: ["La ley de Boyle", "La ley de Dalton", "La ley de Laplace", "La ley de Henry (solubilidad)"],
          correcta: 3,
          explicacion: "Según la ley de Henry, lo que se disuelve depende de la presión parcial y de la solubilidad. El CO₂ es ≈ 24 veces más soluble que el O₂, así que con 46 → 40 mmHg le basta."
        },
        {
          texto: "Según la ley de Fick, ¿qué factor DISMINUYE la difusión de un gas?",
          opciones: [
            "Una mayor diferencia de presión",
            "Una mayor superficie de intercambio",
            "Un mayor espesor de la membrana alvéolo-capilar",
            "Una mayor solubilidad"
          ],
          correcta: 2,
          explicacion: "La difusión es proporcional a la diferencia de presión, la solubilidad y la superficie, e inversamente proporcional al espesor de la membrana."
        },
        {
          texto: "¿Qué alteración de la difusión produce el enfisema?",
          opciones: [
            "Disminución de la superficie de intercambio por destrucción de alvéolos",
            "Aumento de la superficie",
            "Aumento de la presión alveolar de O₂",
            "Disminución del espesor de la membrana"
          ],
          correcta: 0,
          explicacion: "El enfisema destruye paredes alveolares: hay menos superficie de intercambio y la difusión disminuye."
        },
        {
          texto: "¿Qué tienen en común la fibrosis pulmonar y el edema pulmonar en cuanto a la difusión?",
          opciones: [
            "Las dos aumentan la superficie",
            "Las dos aumentan el espesor de la membrana alvéolo-capilar y reducen la difusión",
            "Las dos mejoran la oxigenación",
            "Las dos producen neumotórax"
          ],
          correcta: 1,
          explicacion: "La fibrosis engruesa la membrana (y reduce la distensibilidad) y el edema la engruesa con líquido: en ambos casos difunde peor el O₂."
        },
        {
          texto: "¿Qué ocurre cuando un alvéolo recibe poco oxígeno?",
          opciones: [
            "Sus vasos se dilatan para recibir más sangre",
            "Aumenta la presión alveolar",
            "Se produce surfactante en exceso",
            "Se produce vasoconstricción hipóxica y la sangre se desvía a alvéolos mejor ventilados"
          ],
          correcta: 3,
          explicacion: "La vasoconstricción hipóxica pulmonar desvía la sangre hacia los alvéolos bien ventilados y así se aprovecha mejor el gasto cardiaco."
        },
        {
          texto: "¿En qué zona del pulmón se produce la mayor parte del intercambio de gases en bipedestación?",
          opciones: ["En el vértice", "En la base", "En la tráquea", "En los bronquios principales"],
          correcta: 1,
          explicacion: "La base tiene muchos alvéolos pequeños y muchos capilares: recibe más ventilación y mucha más perfusión. En el vértice, con poca perfusión, la V/Q es más alta."
        }
      ]
    },

    /* ---------- Tema 24: transporte de gases ---------- */
    {
      id: "t24",
      numero: "24",
      titulo: "Transporte de gases",
      preguntas: [
        {
          texto: "¿Cuál es la principal forma de transporte del CO₂ en la sangre?",
          opciones: [
            "Disuelto en el plasma (70 %)",
            "Unido a la hemoglobina (70 %)",
            "Como bicarbonato (≈ 70 %)",
            "Unido a la albúmina"
          ],
          correcta: 2,
          explicacion: "CO₂: ≈ 70 % como bicarbonato, ≈ 23 % unido a la Hb (carbaminohemoglobina) y ≈ 7 % disuelto."
        },
        {
          texto: "¿Qué enzima del hematíe convierte el CO₂ y el agua en H⁺ y bicarbonato?",
          opciones: ["La anhidrasa carbónica", "La ECA", "La renina", "La hemoglobina reductasa"],
          correcta: 0,
          explicacion: "La anhidrasa carbónica cataliza CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻. En el plasma la reacción es muy lenta; en el hematíe, muy rápida."
        },
        {
          texto: "¿Qué porcentaje del O₂ viaja unido a la hemoglobina?",
          opciones: ["≈ 50 %", "≈ 70 %", "≈ 1,5 %", "≈ 98,5 %"],
          correcta: 3,
          explicacion: "El O₂ es poco soluble: el 98,5 % viaja como oxihemoglobina y solo el 1,5 % disuelto en el plasma."
        },
        {
          texto: "¿Qué determina la presión parcial de O₂ (PO₂) de la sangre?",
          opciones: [
            "El O₂ total, unido y disuelto",
            "Solo el O₂ disuelto en el plasma",
            "Solo el O₂ unido a la hemoglobina",
            "La concentración de hemoglobina"
          ],
          correcta: 1,
          explicacion: "La presión parcial la ejerce únicamente el gas disuelto, que es además el único que puede difundir a las células."
        },
        {
          texto: "¿Cuál es la saturación de oxígeno normal de una persona sana?",
          opciones: ["75 %", "85-90 %", "95-98 %", "Exactamente 100 %"],
          correcta: 2,
          explicacion: "Lo normal es 95-98 %; nunca exactamente 100 %, porque hay una pequeña mezcla con sangre poco oxigenada (circulación bronquial)."
        },
        {
          texto: "La sangre venosa que vuelve de los tejidos en reposo (PO₂ ≈ 40 mmHg), ¿qué saturación tiene?",
          opciones: ["≈ 25 %", "≈ 50 %", "≈ 75 %", "≈ 100 %"],
          correcta: 2,
          explicacion: "Con PO₂ de 40 mmHg la hemoglobina sigue saturada ≈ 75 % (3 de 4 sitios ocupados): en reposo solo suelta ≈ 1 O₂ por molécula y queda una gran reserva."
        },
        {
          texto: "¿Qué factor desplaza la curva de disociación de la hemoglobina a la derecha (la Hb suelta más O₂)?",
          opciones: [
            "Un descenso de la temperatura",
            "Un descenso del CO₂",
            "Un aumento del pH",
            "Un aumento de CO₂, de H⁺, de la temperatura o del 2,3-BPG"
          ],
          correcta: 3,
          explicacion: "Todo lo que aumenta en un músculo que trabaja (CO₂, H⁺, temperatura, 2,3-BPG) baja la afinidad y desplaza la curva a la derecha: se libera más O₂ a los tejidos."
        },
        {
          texto: "Un paciente hipoventila. ¿Qué trastorno ácido-base desarrolla?",
          opciones: ["Acidosis respiratoria", "Alcalosis respiratoria", "Alcalosis metabólica", "Ninguno"],
          correcta: 0,
          explicacion: "Al hipoventilar retiene CO₂, que forma H⁺: baja el pH (acidosis respiratoria). La hiperventilación elimina CO₂ en exceso y produce alcalosis respiratoria."
        },
        {
          texto: "¿Por qué es tan peligroso el monóxido de carbono?",
          opciones: [
            "Porque oxida el hierro a Fe³⁺",
            "Porque se une a la hemoglobina con ≈ 250 veces más afinidad que el O₂ y ocupa sus sitios",
            "Porque destruye los hematíes",
            "Porque bloquea la anhidrasa carbónica"
          ],
          correcta: 1,
          explicacion: "El CO forma carboxihemoglobina con una afinidad ≈ 250 veces mayor que la del O₂ y reduce mucho la capacidad de transporte. El pulsioxímetro convencional no lo detecta."
        },
        {
          texto: "En el alvéolo, ¿en qué forma pasa el CO₂ de la sangre al aire?",
          opciones: [
            "Como bicarbonato",
            "Unido a la hemoglobina",
            "Solo como CO₂ disuelto",
            "Como ácido carbónico"
          ],
          correcta: 2,
          explicacion: "Solo difunde el CO₂ disuelto. Al irse al alvéolo, baja en el plasma, la Hb suelta su CO₂ y el bicarbonato vuelve a CO₂ (la reacción se desplaza a la izquierda)."
        }
      ]
    },

    /* ---------- Tema 25: regulación de la respiración ---------- */
    {
      id: "t25",
      numero: "25",
      titulo: "Regulación de la respiración",
      preguntas: [
        {
          texto: "¿Dónde se encuentra el centro que establece el ritmo básico de la respiración automática?",
          opciones: ["En la corteza cerebral", "En el bulbo raquídeo (tronco del encéfalo)", "En el cerebelo", "En el hipotálamo"],
          correcta: 1,
          explicacion: "La respiración automática la controla el tronco del encéfalo; el ritmo básico se genera en el bulbo raquídeo. La respiración voluntaria depende de la corteza."
        },
        {
          texto: "¿Qué grupo de neuronas controla la inspiración en reposo?",
          opciones: [
            "El grupo respiratorio ventral",
            "El centro neumotáxico",
            "El grupo respiratorio dorsal",
            "La corteza motora"
          ],
          correcta: 2,
          explicacion: "El grupo dorsal activa el diafragma y los intercostales externos en la inspiración en reposo. El ventral interviene en la respiración forzada."
        },
        {
          texto: "¿Qué función tiene el centro neumotáxico?",
          opciones: [
            "Inhibir al grupo dorsal para cortar la inspiración",
            "Producir la tos",
            "Detectar la PO₂",
            "Contraer los músculos abdominales"
          ],
          correcta: 0,
          explicacion: "El centro neumotáxico (protuberancia) frena al grupo dorsal: termina la inspiración y empieza la espiración. Junto con el dorsal genera el ritmo involuntario."
        },
        {
          texto: "¿Cuándo entra en acción el grupo respiratorio ventral?",
          opciones: [
            "En el sueño profundo",
            "Solo durante la deglución",
            "Nunca en personas sanas",
            "En la respiración forzada (ejercicio): activa los músculos accesorios y espiratorios"
          ],
          correcta: 3,
          explicacion: "El grupo ventral es solo eferente: activa escalenos y ECOM (inspiración forzada) e intercostales internos y abdominales (espiración forzada)."
        },
        {
          texto: "¿Qué detectan los quimiorreceptores centrales?",
          opciones: [
            "La PO₂ arterial",
            "Los H⁺ del líquido cefalorraquídeo, que dependen de la PCO₂",
            "La presión arterial",
            "El estiramiento del pulmón"
          ],
          correcta: 1,
          explicacion: "El CO₂ atraviesa la barrera hematoencefálica y en el LCR forma H⁺, que estimulan a los quimiorreceptores centrales: aumenta la ventilación. Es el principal estímulo en condiciones normales."
        },
        {
          texto: "¿Dónde están los quimiorreceptores periféricos?",
          opciones: [
            "En el bulbo raquídeo",
            "En los alvéolos",
            "En los cuerpos carotídeos y aórticos",
            "En la tráquea"
          ],
          correcta: 2,
          explicacion: "Los periféricos están en los cuerpos carotídeos (bifurcación de la carótida) y aórticos (cayado de la aorta)."
        },
        {
          texto: "¿Por debajo de qué PO₂ arterial se activan claramente los quimiorreceptores periféricos?",
          opciones: ["100 mmHg", "80 mmHg", "40 mmHg", "60 mmHg"],
          correcta: 3,
          explicacion: "Con PO₂ normal (≈ 100 mmHg) apenas envían impulsos; se activan con fuerza cuando la PO₂ baja de 60 mmHg (altitud, enfermedad pulmonar)."
        },
        {
          texto: "¿Por qué el CO₂ es el regulador más potente de la respiración?",
          opciones: [
            "Porque atraviesa la barrera hematoencefálica y acidifica el LCR, estimulando los quimiorreceptores centrales",
            "Porque es más abundante que el O₂ en el aire",
            "Porque estimula los barorreceptores",
            "Porque relaja el diafragma"
          ],
          correcta: 0,
          explicacion: "Los H⁺ de la sangre casi no cruzan la barrera hematoencefálica, pero el CO₂ sí; en el LCR forma H⁺ que estimulan el centro respiratorio."
        },
        {
          texto: "¿Qué ocurre si el pulmón se distiende en exceso durante una inspiración muy profunda?",
          opciones: [
            "Se produce un estornudo",
            "Los mecanorreceptores de estiramiento inhiben al grupo dorsal y se corta la inspiración",
            "Se activa el grupo ventral para inspirar más",
            "Aumenta la frecuencia cardiaca"
          ],
          correcta: 1,
          explicacion: "Es el reflejo de Hering-Breuer: los receptores de estiramiento de las vías aéreas frenan la inspiración para no dañar el pulmón."
        },
        {
          texto: "¿Por qué en un paciente con EPOC y retención crónica de CO₂ se administra oxígeno a bajo flujo?",
          opciones: [
            "Porque el oxígeno es tóxico para el pulmón con EPOC siempre",
            "Porque el oxígeno a alto flujo produce neumotórax",
            "Porque su estímulo respiratorio depende más de la hipoxia (quimiorreceptores periféricos)",
            "Porque no tiene quimiorreceptores periféricos"
          ],
          correcta: 2,
          explicacion: "Con CO₂ alto de forma crónica, los centrales se «acostumbran» y la respiración depende más de la hipoxia. Corregirla bruscamente puede deprimir la ventilación; se busca una saturación de ≈ 88-92 %."
        }
      ]
    },

    /* ---------- Repaso del bloque V ---------- */
    {
      id: "r5",
      numero: "R",
      titulo: "Repaso del bloque V",
      preguntas: [
        {
          texto: "¿Qué es la capacidad pulmonar total?",
          opciones: [
            "La suma de todos los volúmenes (capacidad vital + volumen residual), ≈ 6 L",
            "El volumen corriente por la frecuencia",
            "El aire que queda tras una espiración normal",
            "El aire espirado en el primer segundo"
          ],
          correcta: 0,
          explicacion: "CPT = VC + VRI + VRE + VR = CV + VR ≈ 6 L. No se puede medir con espirometría porque incluye el volumen residual."
        },
        {
          texto: "¿Por qué respirar de forma rápida y superficial es poco eficaz?",
          opciones: [
            "Porque aumenta el surfactante",
            "Porque en cada respiración ≈ 150 mL se quedan en el espacio muerto y llega menos aire a los alvéolos",
            "Porque aumenta la PO₂ alveolar",
            "Porque disminuye el espacio muerto"
          ],
          correcta: 1,
          explicacion: "Con volúmenes corrientes pequeños, una gran parte de cada respiración se queda en el espacio muerto y la ventilación alveolar cae."
        },
        {
          texto: "¿Cuál es la PO₂ alveolar normal a nivel del mar?",
          opciones: ["≈ 160 mmHg", "≈ 150 mmHg", "≈ 100 mmHg", "≈ 40 mmHg"],
          correcta: 2,
          explicacion: "Atmósfera ≈ 160, tráquea ≈ 150, alvéolo ≈ 100 mmHg (y PCO₂ alveolar ≈ 40). La sangre arterial se iguala con el alvéolo."
        },
        {
          texto: "En la altitud, ¿qué ocurre con la FiO₂ (fracción inspirada de O₂)?",
          opciones: [
            "Baja al 10 %",
            "Sube al 30 %",
            "Depende de la temperatura",
            "Sigue siendo del 21 %, aunque baje la presión atmosférica y la PO₂"
          ],
          correcta: 3,
          explicacion: "El aire siempre tiene un 21 % de O₂. Lo que baja con la altura es la presión atmosférica y, con ella, la presión parcial de O₂."
        },
        {
          texto: "Un paciente con asma recibe salbutamol. ¿Cómo actúa?",
          opciones: [
            "Es un agonista β₂ que produce broncodilatación",
            "Es un antihistamínico",
            "Bloquea los receptores β₂",
            "Estimula el parasimpático"
          ],
          correcta: 0,
          explicacion: "El salbutamol activa los receptores β₂ del músculo liso bronquial y lo relaja: broncodilatación. La histamina y la acetilcolina producen broncoconstricción."
        },
        {
          texto: "¿Qué células del alvéolo son la principal superficie de difusión de los gases?",
          opciones: ["Los neumocitos tipo II", "Los macrófagos alveolares", "Los neumocitos tipo I", "Las células de Clara"],
          correcta: 2,
          explicacion: "Los neumocitos tipo I son planos y muy finos, están fusionados con el capilar y forman la mayor parte de la superficie alveolar: ahí difunden los gases."
        },
        {
          texto: "Durante el ejercicio intenso, el músculo recibe más O₂ porque…",
          opciones: [
            "La Hb aumenta su afinidad por el O₂",
            "Baja la PO₂ venosa y aumentan el CO₂, los H⁺ y la temperatura, y la curva se desplaza a la derecha",
            "Aumenta el O₂ disuelto en el plasma al 50 %",
            "Disminuye el gasto cardiaco"
          ],
          correcta: 1,
          explicacion: "En el músculo activo la PO₂ cae (≈ 30 mmHg) en la zona empinada de la curva, y el CO₂, los H⁺ y el calor bajan la afinidad: la Hb suelta mucho más O₂."
        },
        {
          texto: "¿Qué nervio lleva la información de los cuerpos carotídeos al tronco del encéfalo?",
          opciones: ["El vago", "El frénico", "El facial", "El glosofaríngeo"],
          correcta: 3,
          explicacion: "Los cuerpos carotídeos envían su información por el glosofaríngeo (IX) y los aórticos, por el vago (X)."
        },
        {
          texto: "Un paciente con una crisis de ansiedad hiperventila. ¿Qué le ocurre?",
          opciones: [
            "Retiene CO₂ y entra en acidosis",
            "Su PO₂ alveolar baja",
            "Elimina demasiado CO₂, baja la PCO₂ y desarrolla alcalosis respiratoria",
            "No cambia nada"
          ],
          correcta: 2,
          explicacion: "La hiperventilación sube la PO₂ alveolar y baja la PCO₂: al perder CO₂ (ácido) el pH sube. Puede notar hormigueos por la alcalosis."
        },
        {
          texto: "¿Qué produce la irritación de las fosas nasales?",
          opciones: ["Tos", "Estornudo", "Bostezo", "Hipo"],
          correcta: 1,
          explicacion: "Los receptores de irritación de las fosas nasales producen el estornudo; los de las vías respiratorias y alvéolos, la tos."
        }
      ]
    }
  ]
};
