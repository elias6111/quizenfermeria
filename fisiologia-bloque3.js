// Tests de Fisiología · Bloque III (sistema circulatorio, temas 10 a 15).
// Cada test es corto: unas 10 preguntas de un solo tema.
// "correcta" es la posición de la respuesta correcta (0 = primera opción).
const fisiologiaBloque3 = {
  titulo: "Bloque III · Sistema circulatorio",
  tests: [
    /* ---------- Tema 10: introducción al sistema cardiovascular ---------- */
    {
      id: "t10",
      numero: "10",
      titulo: "Introducción al sistema cardiovascular",
      preguntas: [
        {
          texto: "¿Cuál es el recorrido de la circulación mayor o sistémica?",
          opciones: [
            "Ventrículo derecho → arteria pulmonar → pulmones → aurícula izquierda",
            "Ventrículo izquierdo → aorta → tejidos → venas cavas → aurícula derecha",
            "Aurícula izquierda → aorta → tejidos → ventrículo derecho",
            "Ventrículo izquierdo → venas cavas → tejidos → aurícula derecha"
          ],
          correcta: 1,
          explicacion: "La sangre oxigenada sale del VI por la aorta, irriga todos los tejidos (salvo el intercambio pulmonar) y vuelve desoxigenada por las venas cavas a la AD."
        },
        {
          texto: "¿Qué tipo de sangre lleva la arteria pulmonar?",
          opciones: [
            "Sangre rica en oxígeno hacia los pulmones",
            "Sangre rica en oxígeno hacia el corazón",
            "Sangre pobre en oxígeno desde el ventrículo derecho hacia los pulmones",
            "Linfa"
          ],
          correcta: 2,
          explicacion: "«Arteria» indica que la sangre sale del corazón. La arteria pulmonar lleva sangre desoxigenada del VD a los pulmones; las venas pulmonares devuelven sangre oxigenada a la AI."
        },
        {
          texto: "¿Qué válvula separa la aurícula izquierda del ventrículo izquierdo?",
          opciones: ["La tricúspide", "La aórtica", "La pulmonar", "La mitral (bicúspide)"],
          correcta: 3,
          explicacion: "La mitral (2 valvas) está entre AI y VI; la tricúspide (3 valvas), entre AD y VD. Aórtica y pulmonar son las semilunares, entre ventrículos y arterias."
        },
        {
          texto: "¿Qué produce los ruidos cardiacos que se oyen al auscultar?",
          opciones: [
            "El cierre de las válvulas",
            "La apertura de las válvulas",
            "La contracción de las aurículas",
            "El paso de la sangre por los capilares"
          ],
          correcta: 0,
          explicacion: "La apertura es lenta y silenciosa; el cierre brusco hace vibrar los velos y la sangre, y eso es lo que se oye."
        },
        {
          texto: "¿Qué estructuras impiden que las válvulas auriculoventriculares se den la vuelta (prolapso) hacia la aurícula?",
          opciones: ["Las bolsas semilunares", "Las cuerdas tendinosas y los músculos papilares", "El pericardio", "El septo interventricular"],
          correcta: 1,
          explicacion: "Las cuerdas tendinosas, tensadas por los músculos papilares, sujetan las valvas AV durante la sístole y evitan el prolapso."
        },
        {
          texto: "Durante la diástole ventricular…",
          opciones: [
            "Las válvulas AV están cerradas y las semilunares abiertas",
            "Todas las válvulas están abiertas",
            "El ventrículo se vacía",
            "Las válvulas AV están abiertas y las semilunares cerradas: el ventrículo se llena"
          ],
          correcta: 3,
          explicacion: "En diástole el ventrículo se relaja y se llena: AV abiertas, semilunares cerradas. En sístole es al revés: AV cerradas y semilunares abiertas."
        },
        {
          texto: "¿Qué determina que una válvula cardiaca se abra o se cierre?",
          opciones: [
            "Las órdenes del nervio vago",
            "La contracción de los músculos papilares",
            "La diferencia de presión a ambos lados de la válvula",
            "La concentración de calcio"
          ],
          correcta: 2,
          explicacion: "Las válvulas se mueven de forma pasiva por diferencias de presión: por ejemplo, la AV se abre si la presión auricular supera a la ventricular."
        },
        {
          texto: "¿Cuál es el gasto cardiaco aproximado de un adulto en reposo?",
          opciones: ["0,5 L/min", "5 L/min", "25 L/min", "70 mL/min"],
          correcta: 1,
          explicacion: "El gasto cardiaco en reposo es ≈ 5 L/min y puede llegar a ≈ 25 L/min en ejercicio intenso. El de ambos ventrículos es el mismo, porque el circuito es cerrado."
        },
        {
          texto: "Según la ley de Ohm aplicada a la circulación, el flujo es…",
          opciones: [
            "Directamente proporcional al gradiente de presión e inversamente proporcional a la resistencia",
            "Directamente proporcional a la resistencia",
            "Independiente de la presión",
            "Proporcional a la presión absoluta, no al gradiente"
          ],
          correcta: 0,
          explicacion: "Q = ΔP / R. El flujo depende de la diferencia de presión (no de la presión absoluta) y disminuye cuanto mayor es la resistencia."
        },
        {
          texto: "¿Qué vasos regulan cuánta sangre llega a cada tejido según sus necesidades?",
          opciones: ["Las grandes arterias", "Los capilares", "Las arteriolas", "Las venas cavas"],
          correcta: 2,
          explicacion: "Las arteriolas actúan como «grifos»: se relajan (abren) si el tejido necesita más sangre y se contraen si necesita menos."
        }
      ]
    },

    /* ---------- Tema 11: actividad eléctrica cardíaca ---------- */
    {
      id: "t11",
      numero: "11",
      titulo: "Actividad eléctrica cardíaca",
      preguntas: [
        {
          texto: "¿Cuál es el orden de las capas de la pared cardiaca de dentro afuera?",
          opciones: [
            "Epicardio → miocardio → endocardio",
            "Miocardio → endocardio → epicardio",
            "Endocardio → miocardio → epicardio",
            "Pericardio → endocardio → miocardio"
          ],
          correcta: 2,
          explicacion: "El endocardio está en contacto con la sangre, el miocardio es el músculo que bombea y el epicardio es la capa externa fina. Todo ello envuelto por el pericardio."
        },
        {
          texto: "¿Qué caracteriza a las células marcapasos (de respuesta lenta)?",
          opciones: [
            "Tienen un potencial de reposo estable a −90 mV",
            "Su potencial de reposo es inestable, con pendiente: se despolarizan solas (automatismo)",
            "Representan el 99 % de las células del corazón",
            "Tienen muchos canales rápidos de Na⁺"
          ],
          correcta: 1,
          explicacion: "Las células marcapasos (1 %) no tienen un reposo real: su potencial sube poco a poco hasta el umbral y disparan solas. Las contráctiles (99 %) tienen un reposo estable a −90 mV."
        },
        {
          texto: "¿A qué se debe la fase de meseta (fase 2) del potencial de acción de las células contráctiles?",
          opciones: [
            "A la entrada de Ca²⁺ equilibrada con la salida de K⁺",
            "A la entrada masiva de Na⁺",
            "A la bomba Na⁺/K⁺",
            "A la entrada de Cl⁻"
          ],
          correcta: 0,
          explicacion: "En la meseta entra Ca²⁺ y sale K⁺ en la misma proporción. Alarga el potencial y el periodo refractario, lo que impide que el corazón se tetanice."
        },
        {
          texto: "¿Dónde se origina normalmente el impulso eléctrico del corazón?",
          opciones: ["En el nodo auriculoventricular", "En el haz de His", "En las fibras de Purkinje", "En el nodo sinoauricular"],
          correcta: 3,
          explicacion: "El nodo sinoauricular (SA), en la parte superior de la aurícula derecha, es el marcapasos principal (60-80 lpm)."
        },
        {
          texto: "¿Cuál es la función del retardo en el nodo auriculoventricular?",
          opciones: [
            "Aumentar la frecuencia cardiaca",
            "Permitir que las aurículas terminen de contraerse antes que los ventrículos",
            "Repolarizar las aurículas",
            "Generar el segundo ruido cardiaco"
          ],
          correcta: 1,
          explicacion: "El nodo AV enlentece el impulso para que aurículas y ventrículos no se contraigan a la vez: primero se vacían las aurículas y luego se contraen los ventrículos."
        },
        {
          texto: "Si falla el nodo sinusal, ¿qué marcapasos toma el mando y a qué frecuencia aproximada?",
          opciones: [
            "El haz de His, a 100 lpm",
            "Las fibras de Purkinje, a 120 lpm",
            "El nodo AV, a unos 45 lpm",
            "Ninguno: el corazón se para"
          ],
          correcta: 2,
          explicacion: "Hay marcapasos de seguridad: nodo SA 60-80 lpm, nodo AV ≈ 45 lpm y haz de His 25-30 lpm. Si falla uno, actúa el siguiente, más lento."
        },
        {
          texto: "¿Qué efecto tiene la estimulación del nervio vago sobre el corazón?",
          opciones: [
            "Disminuye la frecuencia cardiaca (libera acetilcolina en los nodos)",
            "Aumenta la frecuencia y la fuerza",
            "Aumenta solo la fuerza de contracción",
            "Genera el impulso eléctrico"
          ],
          correcta: 0,
          explicacion: "El parasimpático (vago) libera acetilcolina en los nodos SA y AV y baja la frecuencia. El simpático (noradrenalina) aumenta frecuencia y fuerza. El SNA modula, no genera, el latido."
        },
        {
          texto: "En el ECG, ¿qué representa el complejo QRS?",
          opciones: [
            "La despolarización auricular",
            "La repolarización ventricular",
            "El retraso en el nodo AV",
            "La despolarización ventricular"
          ],
          correcta: 3,
          explicacion: "Onda P: despolarización auricular; QRS: despolarización ventricular (y oculta la repolarización auricular); onda T: repolarización ventricular."
        },
        {
          texto: "¿Qué hallazgo del ECG es típico de un infarto agudo?",
          opciones: ["Ausencia de onda P", "Elevación del segmento ST", "Intervalo RR irregular", "Ausencia de complejos QRS"],
          correcta: 1,
          explicacion: "El infarto agudo produce elevación del ST. La ausencia de P con QRS irregulares es fibrilación auricular, y la ausencia de QRS con ondas caóticas es fibrilación ventricular."
        },
        {
          texto: "¿A qué velocidad corre normalmente el papel del electrocardiógrafo?",
          opciones: ["10 mm/s", "50 cm/s", "25 mm/s", "100 mm/s"],
          correcta: 2,
          explicacion: "El papel milimetrado corre a 25 mm/s: voltaje en el eje Y y tiempo en el eje X. La distancia RR sirve para calcular la frecuencia cardiaca."
        }
      ]
    },

    /* ---------- Tema 12: ciclo cardíaco ---------- */
    {
      id: "t12",
      numero: "12",
      titulo: "Ciclo cardíaco",
      preguntas: [
        {
          texto: "Con una frecuencia de 75 lpm, ¿cuánto dura aproximadamente un ciclo cardiaco?",
          opciones: ["0,8 s", "0,3 s", "1,5 s", "75 s"],
          correcta: 0,
          explicacion: "La duración del ciclo es la inversa de la frecuencia: 60 s / 75 = 0,8 s (≈ 0,3 s de sístole y 0,5 s de diástole). A más frecuencia, ciclo más corto."
        },
        {
          texto: "Si el volumen telediastólico es 120 mL y el telesistólico 50 mL, ¿cuál es el volumen sistólico?",
          opciones: ["170 mL", "50 mL", "70 mL", "120 mL"],
          correcta: 2,
          explicacion: "VS = VTD − VTS = 120 − 50 = 70 mL: la sangre que sale del ventrículo en cada latido."
        },
        {
          texto: "¿Cuál es el valor normal aproximado de la fracción de eyección?",
          opciones: ["20 %", "40 %", "100 %", "60 %"],
          correcta: 3,
          explicacion: "FE = VS / VTD ≈ 70 / 120 ≈ 60 %. Se mide con ecocardiografía; una FEVI baja (p. ej., 40 %) indica disfunción sistólica."
        },
        {
          texto: "Durante la contracción isovolumétrica…",
          opciones: [
            "Las válvulas AV están abiertas y el ventrículo se llena",
            "Todas las válvulas están cerradas y la presión ventricular sube sin cambiar el volumen",
            "La válvula aórtica está abierta y sale sangre",
            "El volumen del ventrículo disminuye rápidamente"
          ],
          correcta: 1,
          explicacion: "Al empezar la sístole se cierran las AV (1.er ruido), pero la presión aún no supera la de la aorta: las cuatro válvulas están cerradas, la presión sube y el volumen no cambia."
        },
        {
          texto: "¿Qué produce el primer ruido cardiaco?",
          opciones: [
            "El cierre de las válvulas aórtica y pulmonar",
            "La apertura de la mitral",
            "El cierre de las válvulas mitral y tricúspide al inicio de la sístole",
            "La contracción de las aurículas"
          ],
          correcta: 2,
          explicacion: "1.er ruido: cierre de las AV (mitral y tricúspide) al inicio de la sístole ventricular, grave y algo largo. 2.º ruido: cierre de las semilunares al final de la sístole, seco y corto."
        },
        {
          texto: "¿Cuándo se cierran las válvulas semilunares?",
          opciones: [
            "Cuando la presión en la arteria supera la del ventrículo, al final de la sístole",
            "Cuando la presión del ventrículo supera la de la aurícula",
            "Durante la sístole auricular",
            "Durante el llenado ventricular rápido"
          ],
          correcta: 0,
          explicacion: "Al terminar la eyección, la presión del ventrículo cae por debajo de la de la aorta y la pulmonar: las semilunares se cierran (2.º ruido) y empieza la relajación isovolumétrica."
        },
        {
          texto: "¿Cómo se llena principalmente el ventrículo?",
          opciones: [
            "Solo gracias a la sístole auricular",
            "Por la contracción de los músculos papilares",
            "Por la presión de la aorta",
            "De forma pasiva (≈ 2/3); la sístole auricular aporta el último tercio"
          ],
          correcta: 3,
          explicacion: "Cuando se abren las AV la sangre entra de forma pasiva; la contracción auricular (tras la onda P) solo completa el último tercio del llenado."
        },
        {
          texto: "¿Qué fórmula da el gasto cardiaco?",
          opciones: [
            "Frecuencia cardiaca × volumen sistólico",
            "Volumen telediastólico − volumen telesistólico",
            "Presión arterial × resistencia",
            "Volumen sistólico / volumen telediastólico"
          ],
          correcta: 0,
          explicacion: "Gasto cardiaco = FC × VS (≈ 75 × 70 mL ≈ 5 L/min). VTD − VTS da el volumen sistólico y VS/VTD, la fracción de eyección."
        },
        {
          texto: "¿Qué establece la ley de Frank-Starling?",
          opciones: [
            "A más frecuencia, menor gasto",
            "Cuanto más se distiende el ventrículo durante el llenado, con más fuerza se contrae",
            "El corazón bombea siempre la misma cantidad de sangre",
            "La poscarga aumenta el volumen sistólico"
          ],
          correcta: 1,
          explicacion: "A mayor volumen telediastólico (precarga), mayor estiramiento de las fibras y mayor fuerza de contracción: el corazón bombea la sangre que le llega."
        },
        {
          texto: "¿Qué es la poscarga?",
          opciones: [
            "La sangre que llega al corazón",
            "La fuerza propia del miocardio",
            "La resistencia que debe vencer el ventrículo para expulsar la sangre",
            "El volumen que queda tras la sístole"
          ],
          correcta: 2,
          explicacion: "Precarga = sangre que llega (llenado); poscarga = resistencia a vencer para eyectar (depende de las arterias); contractilidad = fuerza del miocardio."
        }
      ]
    },

    /* ---------- Tema 13: sistema arterial ---------- */
    {
      id: "t13",
      numero: "13",
      titulo: "Sistema arterial",
      preguntas: [
        {
          texto: "¿Qué capa de la pared arterial es gruesa y está formada por músculo liso?",
          opciones: ["La íntima", "La adventicia", "El endotelio", "La túnica media"],
          correcta: 3,
          explicacion: "La túnica media, de músculo liso, es gruesa en las arterias y permite la vasoconstricción y la vasodilatación. La íntima es el endotelio y la adventicia, la capa protectora externa."
        },
        {
          texto: "¿Qué característica tienen las venas y NO las arterias?",
          opciones: ["Válvulas", "Endotelio", "Túnica media gruesa", "Presión alta"],
          correcta: 0,
          explicacion: "Las venas tienen válvulas antirreflujo y una túnica media fina. Las arterias no tienen válvulas y su media es gruesa."
        },
        {
          texto: "¿Para qué sirven la distensibilidad y la elasticidad de las grandes arterias?",
          opciones: [
            "Para aumentar la presión diastólica a 120 mmHg",
            "Para convertir el bombeo intermitente del corazón en un flujo continuo",
            "Para impedir el reflujo de sangre",
            "Para aumentar la resistencia periférica"
          ],
          correcta: 1,
          explicacion: "En sístole las arterias se distienden y almacenan sangre; en diástole se retraen y la empujan. Así el flujo capilar es continuo y el corazón trabaja menos."
        },
        {
          texto: "¿Qué consecuencia tiene que las arterias se vuelvan rígidas?",
          opciones: ["Hipotensión", "Varices", "Hipertensión arterial", "Disminución de la presión diferencial"],
          correcta: 2,
          explicacion: "Si las arterias pierden distensibilidad y elasticidad (edad, arteriosclerosis) no amortiguan la sístole y aumenta la presión arterial."
        },
        {
          texto: "¿De qué depende la presión arterial?",
          opciones: [
            "Del gasto cardiaco y de la resistencia periférica total",
            "Solo de la frecuencia cardiaca",
            "Solo del volumen de las venas",
            "De la presión oncótica"
          ],
          correcta: 0,
          explicacion: "PA = gasto cardiaco (FC × VS) × resistencia periférica total. Si aumenta cualquiera de los dos, sube la presión."
        },
        {
          texto: "Un paciente tiene una tensión de 120/80 mmHg. ¿Cuál es su presión arterial media aproximada?",
          opciones: ["100 mmHg", "40 mmHg", "110 mmHg", "93 mmHg"],
          correcta: 3,
          explicacion: "PAM = PAD + 1/3 (PAS − PAD) = 80 + 40/3 ≈ 93 mmHg. La presión diferencial (PAS − PAD) sería 40 mmHg."
        },
        {
          texto: "¿Cuál es el factor que más influye en la resistencia de un vaso?",
          opciones: ["La longitud del vaso", "El radio del vaso, que influye elevado a la cuarta potencia", "La viscosidad de la sangre", "La presión venosa"],
          correcta: 1,
          explicacion: "R ∝ 1/r⁴: si el radio se reduce a la mitad, la resistencia se multiplica por 16. La longitud y la viscosidad también aumentan la resistencia, pero mucho menos."
        },
        {
          texto: "¿Qué vasos ofrecen la mayor resistencia al flujo y regulan el flujo de cada lecho?",
          opciones: ["La aorta", "Las arteriolas", "Los capilares", "Las vénulas"],
          correcta: 1,
          explicacion: "Las arteriolas son los vasos de resistencia: cambiando su diámetro (músculo liso de la media) regulan el flujo de cada tejido y la presión arterial."
        },
        {
          texto: "¿Dónde se encuentran los barorreceptores que controlan la presión arterial?",
          opciones: [
            "En el seno carotídeo y el cayado aórtico",
            "En los capilares pulmonares",
            "En el nodo sinusal",
            "En las venas de las piernas"
          ],
          correcta: 0,
          explicacion: "Los barorreceptores (receptores de estiramiento) están en el seno carotídeo y el cayado aórtico, e informan al bulbo raquídeo."
        },
        {
          texto: "Si la presión arterial sube bruscamente, el barorreflejo produce…",
          opciones: [
            "Más actividad simpática y taquicardia",
            "Vasoconstricción generalizada",
            "Inhibición del simpático y activación del parasimpático: baja la FC y se dilatan los vasos",
            "Liberación de adrenalina"
          ],
          correcta: 2,
          explicacion: "Al subir la PA los barorreceptores se estiran más; el bulbo frena el simpático y activa el parasimpático, y la presión vuelve a bajar. Si la PA baja, ocurre lo contrario."
        }
      ]
    },

    /* ---------- Tema 14: circulación venosa ---------- */
    {
      id: "t14",
      numero: "14",
      titulo: "Circulación venosa",
      preguntas: [
        {
          texto: "En comparación con las arterias, las venas son…",
          opciones: [
            "Menos distensibles y más elásticas",
            "Más distensibles y menos elásticas",
            "Iguales en distensibilidad",
            "De pared más gruesa"
          ],
          correcta: 1,
          explicacion: "Las venas tienen la pared fina, soportan menos presión, se distienden con facilidad (almacenan sangre) y les cuesta recuperar la forma (menos elásticas)."
        },
        {
          texto: "¿Dónde se encuentra la mayor parte del volumen de sangre?",
          opciones: ["En las arterias", "En los capilares", "En el corazón", "En las venas"],
          correcta: 3,
          explicacion: "Por su gran distensibilidad, las venas son el principal reservorio de sangre: contienen más que arterias y arteriolas juntas."
        },
        {
          texto: "¿Qué relación existe entre el retorno venoso y el gasto cardiaco?",
          opciones: [
            "Son iguales (≈ 5 L/min)",
            "El retorno venoso es el doble",
            "El gasto cardiaco siempre es mayor",
            "No tienen relación"
          ],
          correcta: 0,
          explicacion: "El circuito es cerrado: toda la sangre que sale vuelve. El corazón no puede bombear más de lo que le llega, y la ley de Frank-Starling ajusta ambos."
        },
        {
          texto: "Cuando se contraen los músculos de la pierna (bomba muscular)…",
          opciones: [
            "Se abre la válvula distal y se cierra la proximal",
            "Se cierran las dos válvulas",
            "Se cierra la válvula distal y la sangre sale por la proximal hacia el corazón",
            "La sangre baja hacia el pie"
          ],
          correcta: 2,
          explicacion: "Al comprimir la vena sube la presión: la válvula distal se cierra (la sangre no baja) y la proximal se abre (la sangre sube). Al relajarse, se abre la distal y se cierra la proximal."
        },
        {
          texto: "¿Cómo influye la inspiración en el retorno venoso?",
          opciones: [
            "Lo dificulta porque sube la presión torácica",
            "No influye",
            "Lo detiene durante la apnea",
            "Lo favorece: baja la presión torácica y sube la abdominal, y la sangre es aspirada hacia la aurícula derecha"
          ],
          correcta: 3,
          explicacion: "Es la bomba respiratoria: en la inspiración el tórax se expande (↓ presión) y el diafragma comprime el abdomen (↑ presión), así que la sangre pasa hacia la aurícula derecha."
        },
        {
          texto: "¿Qué efecto tiene el sistema nervioso simpático sobre las venas?",
          opciones: [
            "Venodilatación, que reduce el retorno",
            "Venoconstricción, que moviliza la sangre almacenada hacia el corazón",
            "Cierra las válvulas venosas",
            "Ninguno"
          ],
          correcta: 1,
          explicacion: "La noradrenalina contrae el músculo liso venoso (venoconstricción) y desplaza hacia el corazón la sangre almacenada: aumenta el retorno venoso."
        },
        {
          texto: "¿Qué causa las varices?",
          opciones: [
            "La incompetencia de las válvulas venosas, con acumulación de sangre e hipertensión venosa",
            "El exceso de bomba muscular",
            "La vasoconstricción arterial",
            "La falta de linfa"
          ],
          correcta: 0,
          explicacion: "Si las válvulas no cierran bien, la sangre se acumula, la vena se dilata y la presión venosa y capilar suben, con salida de líquido a los tejidos."
        },
        {
          texto: "¿Por qué hay más válvulas venosas en las piernas que en otras zonas?",
          opciones: [
            "Porque las piernas tienen más arterias",
            "Porque allí la sangre va a mayor velocidad",
            "Porque tienen que vencer la gravedad para que la sangre suba al corazón",
            "Porque no tienen bomba muscular"
          ],
          correcta: 2,
          explicacion: "La gravedad dificulta que la sangre de los miembros inferiores suba; las válvulas son un mecanismo antirreflujo que lo compensa."
        },
        {
          texto: "Un paciente que lleva días encamado se marea al levantarse de golpe. ¿Por qué?",
          opciones: [
            "Porque le sube la presión arterial",
            "Porque tiene demasiada sangre en el cerebro",
            "Por un exceso de actividad simpática",
            "Porque la sangre se acumula en las piernas, baja el retorno venoso y llega menos sangre al cerebro"
          ],
          correcta: 3,
          explicacion: "Es una hipotensión ortostática: con el simpático poco activo, la gravedad acumula sangre en las piernas, disminuye el retorno y el gasto, y el cerebro recibe menos sangre."
        },
        {
          texto: "¿Qué recomendación es correcta para prevenir ese mareo?",
          opciones: [
            "Levantarse muy rápido para activar el corazón",
            "Sentarse primero y levantarse despacio",
            "Contener la respiración al levantarse",
            "Tumbarse con la cabeza más alta que las piernas"
          ],
          correcta: 1,
          explicacion: "Se previene sentándose primero y levantándose despacio. Si ya se ha mareado: tumbarlo con las piernas elevadas o hacerle caminar (bomba muscular)."
        }
      ]
    },

    /* ---------- Tema 15: capilares y sistema linfático ---------- */
    {
      id: "t15",
      numero: "15",
      titulo: "Capilares y sistema linfático",
      preguntas: [
        {
          texto: "¿Cómo es la pared de un capilar?",
          opciones: [
            "Tiene tres túnicas y músculo liso",
            "Solo una capa de endotelio sobre una membrana basal, sin músculo",
            "Tiene válvulas y mucho tejido elástico",
            "Está formada por cartílago"
          ],
          correcta: 1,
          explicacion: "Los capilares tienen solo endotelio y membrana basal: al no tener músculo no regulan su diámetro, pero su pared tan fina permite el intercambio."
        },
        {
          texto: "¿Qué estructuras deciden si entra sangre en una red capilar?",
          opciones: ["Las válvulas venosas", "Los esfínteres precapilares", "Las vénulas", "Los barorreceptores"],
          correcta: 1,
          explicacion: "Los esfínteres precapilares, entre la arteriola y el capilar, se abren o cierran según las necesidades del tejido. La noradrenalina los cierra."
        },
        {
          texto: "¿Qué sustancias producen vasodilatación local cuando aumenta el metabolismo de un tejido?",
          opciones: [
            "Noradrenalina y angiotensina II",
            "Oxígeno y glucosa",
            "Adenosina, CO₂, K⁺, H⁺ e histamina",
            "Endotelina y tromboxano"
          ],
          correcta: 2,
          explicacion: "Al subir el metabolismo se acumulan CO₂, H⁺, K⁺, adenosina y fosfatos de adenosina, que dilatan los vasos y aumentan el flujo (autorregulación)."
        },
        {
          texto: "¿Cuál es el mecanismo principal de intercambio de gases y solutos en los capilares?",
          opciones: ["La difusión", "La pinocitosis", "El transporte activo", "La fagocitosis"],
          correcta: 0,
          explicacion: "La mayoría de solutos y los gases difunden a favor de gradiente, sin gasto de energía. La filtración/reabsorción redistribuye el líquido y la pinocitosis transporta vesículas."
        },
        {
          texto: "¿Qué fuerza empuja el líquido desde el capilar hacia el intersticio?",
          opciones: [
            "La presión oncótica del plasma",
            "La presión hidrostática del capilar",
            "La contracción de los linfáticos",
            "La presión osmótica intracelular"
          ],
          correcta: 1,
          explicacion: "La presión hidrostática (la de la sangre) empuja líquido hacia fuera; la presión oncótica de las proteínas plasmáticas tiende a retenerlo o reabsorberlo."
        },
        {
          texto: "Cada día se filtran unos 20 L en los capilares y se reabsorben unos 18 L. ¿Qué pasa con el resto?",
          opciones: [
            "Se elimina por la orina",
            "Se queda en el intersticio de forma permanente",
            "Pasa a las células",
            "Lo recoge el sistema linfático (≈ 2 L/día) y lo devuelve a la sangre"
          ],
          correcta: 3,
          explicacion: "Se reabsorbe ≈ 90 % y el ≈ 10 % restante (≈ 2 L/día) lo recogen los vasos linfáticos, que lo devuelven a las venas próximas a las clavículas."
        },
        {
          texto: "¿Cuál de estas situaciones favorece la aparición de edema?",
          opciones: [
            "Un aumento de las proteínas plasmáticas",
            "Una disminución de la presión hidrostática capilar",
            "Una disminución de las proteínas plasmáticas (p. ej., desnutrición o hepatopatía)",
            "Un buen drenaje linfático"
          ],
          correcta: 2,
          explicacion: "Si bajan las proteínas del plasma baja la presión oncótica y se reabsorbe menos líquido. También dan edema el aumento de la presión hidrostática, de la permeabilidad o la obstrucción linfática."
        },
        {
          texto: "¿Cómo son los vasos linfáticos?",
          opciones: [
            "Conductos ciegos, muy permeables y con válvulas, que acaban desembocando en venas",
            "Un circuito cerrado igual que el sanguíneo",
            "Arterias pequeñas sin endotelio",
            "Vasos sin válvulas que van del corazón a los tejidos"
          ],
          correcta: 0,
          explicacion: "Empiezan en fondo de saco en los tejidos, tienen uniones laxas (recogen proteínas), válvulas y músculo liso, pasan por los ganglios y desembocan en las venas cercanas a las clavículas."
        },
        {
          texto: "¿Cuál de estas NO es una función del sistema linfático?",
          opciones: [
            "Devolver a la sangre el líquido y las proteínas filtrados",
            "Defensa frente a infecciones",
            "Absorción de grasas en el intestino",
            "Bombear la sangre arterial"
          ],
          correcta: 3,
          explicacion: "El sistema linfático drena líquido y proteínas, participa en la defensa (ganglios) y absorbe las grasas intestinales. No bombea sangre."
        },
        {
          texto: "¿Qué es la metaarteriola?",
          opciones: [
            "Un tipo de capilar con músculo",
            "Un vaso linfático",
            "El atajo que conecta la arteriola con la vénula sin pasar por la red capilar",
            "La parte final de la aorta"
          ],
          correcta: 2,
          explicacion: "Cuando el metabolismo es bajo y los esfínteres están cerrados, la sangre pasa por la metaarteriola directamente a la vénula (flujo no nutricional)."
        }
      ]
    },

    /* ---------- Repaso del bloque III ---------- */
    {
      id: "r3",
      numero: "R",
      titulo: "Repaso del bloque III",
      preguntas: [
        {
          texto: "¿Por qué la pared del ventrículo izquierdo es más gruesa que la del derecho?",
          opciones: [
            "Porque recibe más sangre",
            "Porque tiene que bombear con más presión a toda la circulación sistémica",
            "Porque contiene el nodo sinusal",
            "Porque tiene la válvula tricúspide"
          ],
          correcta: 1,
          explicacion: "El VI impulsa la sangre a todo el cuerpo con alta presión; el VD solo la envía a los pulmones, un circuito de baja presión y resistencia."
        },
        {
          texto: "¿Qué propiedad cardiaca se refiere a la fuerza de contracción?",
          opciones: ["Cronotropismo", "Dromotropismo", "Batmotropismo", "Inotropismo"],
          correcta: 3,
          explicacion: "Inotropismo = fuerza; cronotropismo = frecuencia; dromotropismo = velocidad de conducción; batmotropismo = excitabilidad."
        },
        {
          texto: "En el ECG, ¿por qué no se ve la repolarización auricular?",
          opciones: [
            "Porque queda oculta dentro del complejo QRS",
            "Porque no existe",
            "Porque coincide con la onda T",
            "Porque ocurre antes de la onda P"
          ],
          correcta: 0,
          explicacion: "La repolarización auricular ocurre a la vez que la despolarización ventricular; como el ventrículo tiene mucha más masa, queda enmascarada por el QRS."
        },
        {
          texto: "¿Qué ocurre en la fase de relajación isovolumétrica?",
          opciones: [
            "Se abren las válvulas AV y entra sangre",
            "La presión ventricular sube con las válvulas cerradas",
            "Todas las válvulas están cerradas y la presión ventricular cae sin cambiar el volumen",
            "Sale la sangre por la aorta"
          ],
          correcta: 2,
          explicacion: "Tras cerrarse las semilunares (2.º ruido), el ventrículo se relaja con todas las válvulas cerradas: baja la presión y el volumen no cambia, hasta que se abren las AV."
        },
        {
          texto: "En una arteria, el radio se reduce a la mitad. ¿Qué le pasa a la resistencia?",
          opciones: ["Se duplica", "Se multiplica por 4", "Se reduce a la mitad", "Se multiplica por 16"],
          correcta: 3,
          explicacion: "La resistencia es inversamente proporcional al radio elevado a la cuarta potencia: (1/2)⁴ = 1/16, así que la resistencia se multiplica por 16."
        },
        {
          texto: "Al tomar la tensión con fonendo, ¿qué marca la presión sistólica?",
          opciones: [
            "La desaparición de los ruidos",
            "La aparición del primer ruido de Korotkoff al desinflar el manguito",
            "La onda dicrótica",
            "El pulso radial máximo"
          ],
          correcta: 1,
          explicacion: "La sistólica corresponde al primer ruido de Korotkoff, cuando la sangre vuelve a pasar por la arteria al desinflar el manguito. El método palpatorio solo da la sistólica."
        },
        {
          texto: "¿Por qué caminar mejora el retorno venoso?",
          opciones: [
            "Porque activa la bomba muscular de las piernas",
            "Porque relaja las venas",
            "Porque abre los esfínteres precapilares",
            "Porque reduce el gasto cardiaco"
          ],
          correcta: 0,
          explicacion: "Al contraerse, los músculos de la pierna exprimen las venas y, gracias a las válvulas, empujan la sangre hacia el corazón."
        },
        {
          texto: "¿Por dónde pasa el impulso justo después del nodo auriculoventricular?",
          opciones: ["Por el nodo sinusal", "Por las vías internodales", "Por el haz de His", "Por las fibras de Purkinje"],
          correcta: 2,
          explicacion: "Orden: nodo SA → aurículas y vías internodales → nodo AV → haz de His (por el tabique) → fibras de Purkinje → ventrículos."
        },
        {
          texto: "¿Por qué la circulación en los capilares es tan lenta?",
          opciones: [
            "Porque los capilares tienen válvulas",
            "Porque la presión es más alta que en la aorta",
            "Porque no tienen endotelio",
            "Porque el área de sección total es enorme, y así da tiempo al intercambio"
          ],
          correcta: 3,
          explicacion: "Aunque cada capilar es diminuto, juntos suman un área de sección enorme; la velocidad disminuye y hay tiempo para el intercambio con los tejidos."
        },
        {
          texto: "Tras extirpar los ganglios axilares, una paciente presenta hinchazón en ese brazo. ¿Cómo se llama?",
          opciones: ["Varices", "Linfedema", "Trombosis arterial", "Hemólisis"],
          correcta: 1,
          explicacion: "La obstrucción o pérdida del drenaje linfático produce linfedema. En ese brazo se evita tomar la tensión y hacer punciones."
        }
      ]
    }
  ]
};
