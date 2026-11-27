// Fisiología · Parcial 2 · Bloque: Sistema nervioso (temas 26-32). Un test de 12 preguntas por tema.
// "correcta" es la posición de la respuesta correcta (0 = primera opción); el motor baraja las opciones.
const fisioP2Nervioso = {
  titulo: "Sistema nervioso",
  tests: [
    {
      id: "fp2-t26",
      tema: "tema-26",
      numero: "26",
      etiqueta: "Tema 26",
      titulo: "Introducción al sistema nervioso",
      preguntas: [
        {
          texto: "¿Qué estructura del diencéfalo actúa como «filtro» que decide qué información sensorial llega a las cortezas sensoriales primarias?",
          opciones: ["El tálamo", "El hipotálamo", "La glándula pineal", "El cuerpo calloso"],
          correcta: 0,
          explicacion: "El tálamo es la principal estación de relevo sensorial y motora y filtra la información que sube a la corteza. El hipotálamo se ocupa de la homeostasis (temperatura, osmolaridad, ingesta, sueño)."
        },
        {
          texto: "En la médula espinal, la sustancia gris…",
          opciones: [
            "Ocupa la zona central (astas anteriores y posteriores) y contiene somas y dendritas sin mielina",
            "Rodea a la sustancia blanca formando la capa más externa, igual que en el encéfalo",
            "Está formada por tractos de axones mielinizados que suben y bajan",
            "Solo existe en los segmentos cervicales y lumbares"
          ],
          correcta: 0,
          explicacion: "En la médula la sustancia gris es central (forma de mariposa) y la blanca, periférica. En el encéfalo es al revés: la gris está en la corteza y en núcleos profundos, y la blanca por debajo."
        },
        {
          texto: "Un nervio espinal es siempre…",
          opciones: [
            "Mixto: su raíz dorsal es sensitiva y su raíz ventral es motora",
            "Sensitivo si sale de la raíz dorsal y motor si sale de la ventral, nunca ambas cosas",
            "Motor, porque la información sensitiva viaja solo por los pares craneales",
            "Mixto: su raíz ventral es sensitiva y su raíz dorsal es motora"
          ],
          correcta: 0,
          explicacion: "Los 31 pares raquídeos son mixtos: la raíz dorsal (posterior) lleva la información aferente y la ventral (anterior) la eferente. Los pares craneales, en cambio, pueden ser sensitivos, motores o mixtos."
        },
        {
          texto: "Un paciente con un ictus en la corteza motora del hemisferio izquierdo presentará debilidad…",
          opciones: [
            "En el hemicuerpo derecho, por el control contralateral de la corteza",
            "En el hemicuerpo izquierdo, porque la corteza controla su mismo lado",
            "En ambos hemicuerpos por igual, gracias al cuerpo calloso",
            "Solo en la cara, porque las extremidades dependen de la médula"
          ],
          correcta: 0,
          explicacion: "El cerebro controla el lado contrario del cuerpo (la vía piramidal cruza en el bulbo). La excepción es el cerebelo, que actúa sobre su mismo lado (control ipsilateral)."
        },
        {
          texto: "¿Qué parte del tronco del encéfalo controla funciones involuntarias como la presión arterial, la deglución y el vómito, y es donde cruzan las pirámides?",
          opciones: ["El bulbo raquídeo", "El mesencéfalo", "La protuberancia", "El cerebelo"],
          correcta: 0,
          explicacion: "El bulbo raquídeo regula PA, respiración, deglución y vómito y es el lugar de la decusación piramidal. El mesencéfalo participa en movimientos oculares y reflejos visuales y auditivos; el puente coordina la respiración."
        },
        {
          texto: "¿Cuál de estos pares craneales es puramente motor?",
          opciones: ["Hipogloso (XII)", "Trigémino (V)", "Glosofaríngeo (IX)", "Vago (X)"],
          correcta: 0,
          explicacion: "El XII mueve la lengua y es motor. El trigémino, el glosofaríngeo y el vago son mixtos (sensitivos y motores)."
        },
        {
          texto: "Paciente con traumatismo craneal que no puede abducir el ojo derecho (no lo lleva hacia fuera). ¿Qué par craneal se sospecha lesionado?",
          opciones: ["El VI, motor ocular externo o abducens", "El IV, troclear", "El II, óptico", "El VII, facial"],
          correcta: 0,
          explicacion: "El abducens (VI) inerva el recto lateral, que lleva el ojo hacia fuera. El III y el IV mueven el ojo en otras direcciones y el II es sensitivo (visión)."
        },
        {
          texto: "En el sistema nervioso periférico, ¿qué neurotransmisor usa la motoneurona somática para contraer el músculo esquelético?",
          opciones: ["Acetilcolina", "Noradrenalina", "Adrenalina", "Dopamina"],
          correcta: 0,
          explicacion: "El sistema somático y el parasimpático usan acetilcolina. La noradrenalina es el neurotransmisor posganglionar simpático y la adrenalina la libera la médula suprarrenal a la sangre."
        },
        {
          texto: "Un reflejo formado por una neurona sensitiva, una interneurona y una neurona motora se llama…",
          opciones: ["Trisináptico o trineuronal", "Monosináptico", "Bisináptico de dos neuronas", "Autónomo visceral"],
          correcta: 0,
          explicacion: "Con interneurona hay tres neuronas (trineuronal). Si solo intervienen la neurona sensitiva y la motora, el reflejo es de dos neuronas, como el reflejo de estiramiento."
        },
        {
          texto: "¿En qué zona de la neurona se genera el potencial de acción cuando la suma de los potenciales postsinápticos supera el umbral?",
          opciones: ["En el segmento inicial del axón", "En las dendritas", "En la terminal sináptica", "En el núcleo del soma"],
          correcta: 0,
          explicacion: "Dendritas y soma reciben e integran (suma espacial y temporal). Si se supera el umbral, el potencial de acción nace en el segmento inicial del axón y viaja hasta la terminal, donde se liberan neurotransmisores."
        },
        {
          texto: "Tras un ictus, una paciente recupera parte de la movilidad de la mano con rehabilitación porque otras áreas corticales asumen esa función. ¿Qué tipo de plasticidad neural es?",
          opciones: [
            "Funcional: reasignación de funciones a otras áreas corticales",
            "Sináptica: cambio en la eficacia de una sinapsis concreta",
            "Estructural: aparición de neuronas nuevas en la zona del infarto",
            "No es plasticidad: es regeneración de los axones lesionados del SNC"
          ],
          correcta: 0,
          explicacion: "La plasticidad funcional es la reasignación de funciones a otras áreas. La sináptica cambia la eficacia de la transmisión y la estructural modifica la arborización dendrítica o crea neuronas (neurogénesis)."
        },
        {
          texto: "Las neuronas de proyección se diferencian de las interneuronas en que…",
          opciones: [
            "Tienen axones largos que salen del área donde está su soma",
            "Tienen un axón corto que no sale del área donde está su soma",
            "No liberan neurotransmisores, solo transmiten señales eléctricas",
            "Solo existen en el sistema nervioso periférico"
          ],
          correcta: 0,
          explicacion: "La diferencia está en la longitud y el recorrido del axón. Las interneuronas tienen axones cortos y locales (abundan en los circuitos locales del cerebelo); los ganglios basales funcionan como circuito de proyección."
        }
      ]
    },
    {
      id: "fp2-t27",
      tema: "tema-27",
      numero: "27",
      etiqueta: "Tema 27",
      titulo: "Principios generales de los sistemas sensoriales",
      preguntas: [
        {
          texto: "¿Qué diferencia hay entre sensación y percepción?",
          opciones: [
            "La sensación es la codificación nerviosa del estímulo; la percepción es su interpretación consciente según la experiencia",
            "La sensación es consciente y la percepción es inconsciente",
            "La percepción ocurre en el receptor y la sensación en la corteza de asociación",
            "Son sinónimos: ambas describen la transducción del estímulo"
          ],
          correcta: 0,
          explicacion: "La sensación representa el estímulo (modalidad, cualidad, intensidad, duración y localización). La percepción es la experiencia consciente e interpretada, que depende de los modelos guardados en las cortezas de asociación."
        },
        {
          texto: "¿Cómo se codifica la intensidad de un estímulo?",
          opciones: [
            "Por la frecuencia de potenciales de acción: a más intensidad, más potenciales por unidad de tiempo",
            "Por la amplitud de cada potencial de acción, que crece con el estímulo",
            "Por el tipo de receptor que se activa",
            "Por la velocidad de conducción del axón"
          ],
          correcta: 0,
          explicacion: "Los potenciales de acción son «todo o nada» y siempre tienen la misma amplitud. Un estímulo más intenso despolariza más el receptor y genera más potenciales por segundo (código de frecuencia)."
        },
        {
          texto: "Por la mañana notas el reloj en la muñeca, pero al rato dejas de sentirlo aunque sigue ahí. ¿Qué explica este fenómeno?",
          opciones: [
            "La adaptación de los receptores fásicos, que disminuyen rápido su frecuencia de descarga ante un estímulo constante",
            "La adaptación de los receptores tónicos, que dejan de responder al instante",
            "La fatiga de la corteza somatosensorial por exceso de estímulos",
            "Una lesión de las fibras C de la muñeca"
          ],
          correcta: 0,
          explicacion: "Los receptores fásicos informan de los cambios y se adaptan rápido; los tónicos informan de forma continua y se adaptan lentamente. Por eso dejas de notar la ropa o el reloj."
        },
        {
          texto: "Si se estimula eléctricamente el nervio óptico, la persona ve destellos de luz aunque no haya luz. ¿Qué principio lo explica?",
          opciones: [
            "El de la línea marcada: activar una vía sensorial siempre produce su sensación, sea cual sea el estímulo",
            "La sinestesia, por mezcla de vías durante el desarrollo",
            "El código de población del tálamo",
            "La adaptación de los fotorreceptores"
          ],
          correcta: 0,
          explicacion: "Cada receptor está unido a una vía concreta que acaba en su corteza. Activar esa vía produce la sensación propia de esa vía aunque el estímulo no sea el adecuado."
        },
        {
          texto: "¿Cuál de estos receptores es secundario?",
          opciones: [
            "Una célula especializada que capta el estímulo y transmite la señal a la neurona sensorial mediante sinapsis",
            "Una terminación nerviosa libre de la piel que detecta el dolor",
            "Un corpúsculo encapsulado que forma parte de la propia neurona sensorial",
            "Un axón mielinizado de tipo Aα"
          ],
          correcta: 0,
          explicacion: "En el receptor secundario intervienen dos células: una especializada que capta el estímulo y la neurona donde nace el potencial de acción, unidas por sinapsis química. En el primario es la propia neurona (terminación libre o encapsulada)."
        },
        {
          texto: "Los nociceptores detectan…",
          opciones: [
            "Estímulos mecánicos, térmicos o químicos de intensidad elevada, potencialmente lesivos",
            "Solo estímulos químicos liberados en la inflamación",
            "Cambios de temperatura dentro del rango no nocivo",
            "Cambios en la longitud del músculo"
          ],
          correcta: 0,
          explicacion: "Los nociceptores responden a estímulos de alta intensidad de distinta naturaleza. Los cambios de temperatura no nocivos los detectan los termorreceptores y el estiramiento muscular, el huso muscular."
        },
        {
          texto: "¿Qué función cumple el tálamo en el procesamiento sensorial?",
          opciones: [
            "Hace de relevo hacia la corteza y filtra la información para evitar una sobrecarga sensorial",
            "Transforma el estímulo en potencial de receptor",
            "Genera la percepción consciente del estímulo",
            "Recibe directamente toda la información olfativa antes de que llegue a la corteza"
          ],
          correcta: 0,
          explicacion: "Los receptores hacen la transducción, el tálamo redirige y filtra, y la corteza (primaria y de asociación) genera la sensación y la percepción. El olfato es la excepción: casi todo llega a la corteza sin pasar por el tálamo."
        },
        {
          texto: "¿Qué es el campo receptor de una neurona sensorial?",
          opciones: [
            "El área del cuerpo o de la retina cuyos estímulos activan esa neurona",
            "El número de sinapsis que forma la neurona en la médula",
            "La zona de la corteza donde termina la vía sensorial",
            "El rango de intensidades al que responde el receptor"
          ],
          correcta: 0,
          explicacion: "El campo receptor sirve para codificar la localización. Los campos contiguos proyectan a áreas contiguas del SNC y forman mapas somatotópicos o retinotópicos."
        },
        {
          texto: "¿Cómo localiza el sistema auditivo el origen de un sonido, ya que no tiene un mapa espacial como la piel?",
          opciones: [
            "Con un código temporal: compara cuándo y con qué intensidad llega el sonido a cada oído",
            "Con un mapa somatotópico de la cóclea",
            "Con el código de líneas marcadas de cada frecuencia",
            "Midiendo la amplitud de los potenciales de acción del nervio auditivo"
          ],
          correcta: 0,
          explicacion: "El mapa auditivo es tonotópico (frecuencias), no espacial. La localización se calcula con la diferencia de tiempo y de intensidad entre los dos oídos."
        },
        {
          texto: "Una persona dice que «ve» colores al oír música. ¿Cómo se llama esto y a qué se debe?",
          opciones: [
            "Sinestesia: las vías de distintas modalidades no se separaron bien durante el desarrollo",
            "Alucinación por lesión del lóbulo occipital",
            "Principio de la línea marcada",
            "Adaptación cruzada de receptores tónicos"
          ],
          correcta: 0,
          explicacion: "En la sinestesia las vías sensoriales están mezcladas y activan a la vez áreas de distintas modalidades (sonido y color) o submodalidades (números y colores)."
        },
        {
          texto: "¿Qué estructura regula el estado de alerta durante el procesamiento sensorial?",
          opciones: ["La formación reticular del tronco encefálico", "El núcleo supraquiasmático", "El sistema límbico", "La corteza somatosensorial secundaria"],
          correcta: 0,
          explicacion: "La formación reticular es una red de neuronas del tronco que regula la alerta. El núcleo supraquiasmático controla los ritmos circadianos y el sistema límbico da la respuesta emocional."
        },
        {
          texto: "¿Qué significa que la corteza pueda modular la información sensorial por vías descendentes?",
          opciones: [
            "Que puede priorizar o atenuar estímulos en el tálamo y en las vías según la atención",
            "Que la corteza manda la orden motora de retirada ante un estímulo",
            "Que la corteza puede activar directamente los receptores periféricos",
            "Que la información sensorial también baja de la corteza a la piel"
          ],
          correcta: 0,
          explicacion: "Las vías descendentes van de las áreas superiores a las inferiores (tálamo, vías sensoriales) y filtran lo que percibimos. Así ignoramos estímulos irrelevantes y nos fijamos en los importantes."
        }
      ]
    },
    {
      id: "fp2-t28",
      tema: "tema-28",
      numero: "28",
      etiqueta: "Tema 28",
      titulo: "Sistema somatosensorial y dolor",
      preguntas: [
        {
          texto: "¿Qué receptor de la piel detecta vibraciones de alta frecuencia, es profundo, tiene un campo receptor grande y se adapta rápido?",
          opciones: ["Corpúsculo de Pacini", "Corpúsculo de Meissner", "Disco de Merkel", "Corpúsculo de Ruffini"],
          correcta: 0,
          explicacion: "Pacini: profundo, campo grande, adaptación rápida, vibración de alta frecuencia. Meissner: superficial, rápido, baja frecuencia. Merkel: superficial, lento, formas y bordes. Ruffini: profundo, lento, estiramiento."
        },
        {
          texto: "¿Por qué la yema del dedo distingue dos puntos muy próximos y la espalda no?",
          opciones: [
            "Porque la yema tiene más receptores, campos receptores pequeños y más superficie en el mapa cortical",
            "Porque la piel de la espalda tiene receptores de adaptación más rápida",
            "Porque la espalda envía la información por el sistema anterolateral",
            "Porque la espalda tiene campos receptores más pequeños que se solapan"
          ],
          correcta: 0,
          explicacion: "La discriminación de dos puntos depende de la densidad de receptores, del tamaño de los campos receptores y de su representación en la corteza. Cuanto más grande el campo, peor se distinguen dos estímulos."
        },
        {
          texto: "El dolor rápido y bien localizado que notas al cortarte viaja sobre todo por fibras…",
          opciones: ["Aδ, mielinizadas", "C, amielínicas", "Aα, de los husos musculares", "Aβ, del tacto fino"],
          correcta: 0,
          explicacion: "El dolor agudo va por fibras Aδ (mielinizadas, más rápidas). El dolor sordo y mal localizado va por fibras C, amielínicas y lentas (0,5-2 m/s)."
        },
        {
          texto: "Paciente con herida por arma blanca que secciona la mitad derecha de la médula torácica. ¿Qué cuadro esperas por debajo de la lesión?",
          opciones: [
            "Pérdida de tacto fino y propiocepción en el lado derecho y de dolor y temperatura en el izquierdo",
            "Pérdida de dolor y temperatura en el lado derecho y de tacto fino en el izquierdo",
            "Pérdida de todas las sensibilidades solo en el lado derecho",
            "Pérdida de tacto fino y propiocepción en ambos lados"
          ],
          correcta: 0,
          explicacion: "Síndrome de Brown-Séquard. La vía de los cordones posteriores cruza en el bulbo (pérdida en el mismo lado). La vía anterolateral cruza en la médula al entrar (pérdida en el lado contrario)."
        },
        {
          texto: "Un paciente con siringomielia (quiste en el canal central de la médula cervical) pierde, en ambos brazos, sobre todo…",
          opciones: [
            "La sensibilidad al dolor y a la temperatura",
            "El tacto fino y la propiocepción",
            "La fuerza muscular, con sensibilidad normal",
            "La audición y el equilibrio"
          ],
          correcta: 0,
          explicacion: "El quiste central daña las fibras que cruzan delante del canal central, que son las de la vía anterolateral (dolor, temperatura, tacto grueso). Los cordones posteriores se respetan al principio."
        },
        {
          texto: "¿Dónde hace su primera sinapsis la vía anterolateral (espinotalámica)?",
          opciones: [
            "En el asta dorsal de la médula, y después cruza la línea media",
            "En los núcleos del bulbo raquídeo, y después cruza la línea media",
            "En el tálamo, sin cruzar",
            "En la corteza somatosensorial primaria"
          ],
          correcta: 0,
          explicacion: "La anterolateral hace sinapsis en el asta dorsal y cruza en la médula. La de los cordones posteriores sube por el mismo lado y hace sinapsis y cruza en el bulbo (lemnisco medial). Las dos llegan al tálamo y de ahí a la corteza contralateral."
        },
        {
          texto: "Un paciente de 70 años presenta dolor quemante y vesículas en una franja del tórax izquierdo que no pasa de la línea media. ¿Qué sospechas y por qué tiene esa distribución?",
          opciones: [
            "Herpes zóster: el virus latente en un ganglio raquídeo se reactiva y afecta a su dermatoma",
            "Dolor referido de origen cardiaco: el corazón comparte neuronas medulares con esa piel",
            "Siringomielia: el quiste afecta a varios segmentos de la médula",
            "Dolor neuropático por miembro fantasma"
          ],
          correcta: 0,
          explicacion: "El virus de la varicela queda latente en los ganglios y, al reactivarse, afecta solo al dermatoma de un nervio raquídeo, que no cruza la línea media."
        },
        {
          texto: "Un paciente con infarto de miocardio refiere dolor en el brazo izquierdo. ¿Qué explica este dolor?",
          opciones: [
            "Los nociceptores del corazón y los de la piel del brazo llegan a las mismas neuronas de la médula y el cerebro lo atribuye a la piel",
            "Una lesión de los nervios periféricos del brazo por la isquemia",
            "La activación de los termorreceptores del brazo por la bradicinina",
            "Una reorganización del mapa somatosensorial por el infarto"
          ],
          correcta: 0,
          explicacion: "Es dolor referido: la información visceral y la cutánea convergen en las mismas neuronas medulares. La isquemia libera bradicinina y ácido láctico, que activan los nociceptores cardiacos."
        },
        {
          texto: "Tras una quemadura, la piel de alrededor duele con solo rozarla con la ropa. ¿Cómo se llama el dolor provocado por un estímulo que normalmente no duele?",
          opciones: ["Alodinia", "Hiperalgesia primaria", "Dolor referido", "Analgesia"],
          correcta: 0,
          explicacion: "La alodinia es dolor ante estímulos no dolorosos (el tacto). La hiperalgesia es una respuesta exagerada a un estímulo que sí es doloroso."
        },
        {
          texto: "¿Por qué el ibuprofeno reduce el dolor de una inflamación?",
          opciones: [
            "Porque inhibe la COX y baja las prostaglandinas que sensibilizan los nociceptores",
            "Porque se une a los receptores opioides de la médula",
            "Porque bloquea los canales de sodio de las fibras C",
            "Porque estimula la liberación de endorfinas en la sustancia gris periacueductal"
          ],
          correcta: 0,
          explicacion: "Las prostaglandinas y la bradicinina causan la sensibilización periférica (hiperalgesia primaria). Los AINE inhiben la ciclooxigenasa y frenan esa sensibilización. Los opioides actúan sobre los receptores opioides."
        },
        {
          texto: "¿Cómo actúa la morfina para reducir el dolor?",
          opciones: [
            "Se une a los receptores opioides de las vías descendentes y la médula, los mismos que usan las endorfinas y encefalinas",
            "Bloquea la ciclooxigenasa e impide que se formen prostaglandinas",
            "Destruye los nociceptores de la zona lesionada",
            "Activa los termorreceptores de frío y enmascara el dolor"
          ],
          correcta: 0,
          explicacion: "El sistema analgésico endógeno usa péptidos opioides (endorfinas, encefalinas) en la sustancia gris periacueductal, los núcleos del rafe y el asta dorsal. La morfina imita a esos péptidos. Ojo: los apuntes llaman «opioides» a la noradrenalina y la serotonina, pero son neurotransmisores de esas vías descendentes, no opioides."
        },
        {
          texto: "Una paciente con ictus parietal derecho se peina y se maquilla solo la mitad derecha y no reconoce su brazo izquierdo como propio. ¿Qué área está afectada?",
          opciones: [
            "La corteza parietal posterior, que construye el esquema corporal: heminegligencia",
            "La corteza somatosensorial primaria izquierda",
            "La corteza somatosensorial secundaria: astereognosia",
            "El cerebelo derecho: ataxia"
          ],
          correcta: 0,
          explicacion: "La corteza parietal posterior integra la información somatosensorial, visual y auditiva para formar el esquema corporal. Si se lesiona aparece la heminegligencia. La astereognosia (no reconocer objetos por el tacto) es de la SII."
        }
      ]
    },
    {
      id: "fp2-t29",
      tema: "tema-29",
      numero: "29",
      etiqueta: "Tema 29",
      titulo: "Visión",
      preguntas: [
        {
          texto: "¿Qué estructura del ojo hace la mayor parte de la refracción de la luz?",
          opciones: ["La córnea, con un 75 % aproximadamente", "El cristalino", "El humor vítreo", "La pupila"],
          correcta: 0,
          explicacion: "La córnea tiene una curvatura fija y aporta la mayor parte de la refracción. El cristalino aporta menos, pero puede cambiar de forma para ajustar el enfoque (acomodación)."
        },
        {
          texto: "Cuando miramos un objeto cercano…",
          opciones: [
            "El parasimpático contrae el músculo ciliar y el cristalino se hace más convexo",
            "El simpático contrae el músculo ciliar y el cristalino se aplana",
            "La córnea aumenta su curvatura para enfocar",
            "La pupila se dilata para que entre más luz"
          ],
          correcta: 0,
          explicacion: "En la acomodación el parasimpático (acetilcolina) contrae el músculo ciliar, el cristalino se abomba y aumenta su poder refractivo. Para mirar lejos el cristalino se aplana."
        },
        {
          texto: "Un paciente llega a urgencias con pupilas muy dilatadas tras consumir cocaína. ¿Qué explica la midriasis?",
          opciones: [
            "La activación simpática del músculo radial del iris",
            "La activación parasimpática del músculo circular del iris",
            "La parálisis del músculo ciliar",
            "Una lesión del nervio óptico"
          ],
          correcta: 0,
          explicacion: "La midriasis es simpática (músculo radial). La miosis es parasimpática (músculo circular), por ejemplo ante una luz intensa en el reflejo fotomotor."
        },
        {
          texto: "Un niño ve borrosa la pizarra pero lee bien de cerca. ¿Qué defecto tiene y qué lente lo corrige?",
          opciones: [
            "Miopía: la imagen de lejos se enfoca delante de la retina y se corrige con lentes cóncavas",
            "Hipermetropía: la imagen se enfoca detrás de la retina y se corrige con lentes convexas",
            "Miopía: la imagen se enfoca detrás de la retina y se corrige con lentes convexas",
            "Presbicia: pérdida de acomodación que se corrige con lentes cóncavas"
          ],
          correcta: 0,
          explicacion: "En la miopía los objetos lejanos se enfocan delante de la retina; la lente cóncava (divergente) lleva el foco hacia atrás. La hipermetropía se corrige con lentes convexas y la presbicia es la pérdida de acomodación con la edad."
        },
        {
          texto: "Sobre los bastones, ¿qué afirmación es correcta?",
          opciones: [
            "Son mucho más numerosos que los conos, predominan en la periferia y permiten la visión con poca luz",
            "Se concentran en la fóvea y dan la máxima agudeza visual",
            "Hay tres tipos según la longitud de onda que captan",
            "Necesitan mucha luz para activarse y se encargan del color"
          ],
          correcta: 0,
          explicacion: "Los bastones (unos 90 millones) son muy sensibles, sirven para la visión nocturna (escotópica) y no ven colores. Los conos (unos 4,5 millones) están en la fóvea y dan la visión diurna, el color y la agudeza."
        },
        {
          texto: "¿Qué ocurre en un bastón cuando recibe luz?",
          opciones: [
            "Baja el GMPc, se cierran los canales de Na⁺ y Ca²⁺, la célula se hiperpolariza y libera menos glutamato",
            "Sube el GMPc, se abren los canales de Na⁺ y la célula se despolariza y libera más glutamato",
            "Se abren canales de K⁺ dependientes de luz y la célula dispara potenciales de acción",
            "La rodopsina se une al retinal y activa la liberación de acetilcolina"
          ],
          correcta: 0,
          explicacion: "En oscuridad el GMPc alto mantiene abiertos los canales CNG, el bastón está despolarizado (−40 mV) y libera glutamato sin parar. La luz activa la rodopsina y la transducina, baja el GMPc, se cierran los canales y la célula se hiperpolariza."
        },
        {
          texto: "Una persona con déficit de vitamina A tiene problemas para ver de noche. ¿Por qué?",
          opciones: [
            "Porque el retinal, cromóforo de la rodopsina, deriva de la vitamina A",
            "Porque la vitamina A es necesaria para la mielina del nervio óptico",
            "Porque sin vitamina A no se produce melatonina",
            "Porque la vitamina A forma el epitelio pigmentario"
          ],
          correcta: 0,
          explicacion: "La rodopsina es opsina más retinal, que deriva de la vitamina A. Sin ella los bastones no regeneran bien el pigmento y aparece la ceguera nocturna."
        },
        {
          texto: "Un paciente con un tumor de hipófisis que comprime el quiasma óptico pierde la visión de las dos mitades externas del campo visual. ¿Por qué?",
          opciones: [
            "Porque en el quiasma cruzan las fibras de la retina nasal de cada ojo, que recogen el campo visual temporal",
            "Porque se lesionan las fibras de la retina temporal, que cruzan en el quiasma",
            "Porque se lesiona la corteza visual primaria de ambos lados",
            "Porque el tumor comprime los dos nervios ópticos por completo"
          ],
          correcta: 0,
          explicacion: "Es la hemianopsia bitemporal (pérdida de la visión periférica). Las fibras nasales, que llevan el campo temporal, se cruzan en el quiasma, justo encima de la hipófisis."
        },
        {
          texto: "Tras un ictus occipital, un paciente no ve los colores aunque distingue formas y movimiento. ¿Qué área está lesionada?",
          opciones: ["V4: acromatopsia", "V5/MT: acinetopsia", "V1: ceguera cortical", "La vía dorsal: agnosia visuoespacial"],
          correcta: 0,
          explicacion: "V4 procesa el color (acromatopsia si se lesiona). V5 procesa el movimiento (acinetopsia). Una lesión de V1 da ceguera cortical y una de la vía ventral, agnosia de objetos como la prosopagnosia."
        },
        {
          texto: "¿Qué hace la vía visual ventral?",
          opciones: [
            "Recorre el lóbulo temporal y sirve para reconocer objetos y caras",
            "Recorre el lóbulo parietal y localiza los objetos en el espacio",
            "Conecta la retina con el núcleo supraquiasmático",
            "Lleva la información del color directamente al tálamo"
          ],
          correcta: 0,
          explicacion: "Vía ventral (temporal): «qué es». Vía dorsal (parietal): «dónde está» y coordinación de movimientos. Si se lesiona la ventral, aparece la prosopagnosia (no reconocer rostros)."
        },
        {
          texto: "Un trabajador de turno de noche duerme mal de día con la persiana abierta. ¿Qué mecanismo fisiológico lo explica?",
          opciones: [
            "La luz llega por el haz retinohipotalámico al núcleo supraquiasmático, que inhibe la liberación de melatonina en la pineal",
            "La luz activa directamente los conos de la glándula pineal",
            "La luz estimula la liberación de melatonina, que mantiene despierto",
            "La luz activa la corteza visual primaria, que inhibe el hipotálamo"
          ],
          correcta: 0,
          explicacion: "Unas células ganglionares especiales de la retina (con melanopsina) informan de la luz al núcleo supraquiasmático. Con luz se frena la melatonina y con oscuridad se libera, lo que facilita el sueño."
        },
        {
          texto: "¿Por qué el daltonismo para el rojo y el verde es más frecuente en hombres?",
          opciones: [
            "Porque los genes de esos pigmentos están en el cromosoma X y los hombres tienen solo uno",
            "Porque los hombres tienen menos conos en la fóvea",
            "Porque la testosterona inhibe los conos M y L",
            "Porque los genes están en el cromosoma Y"
          ],
          correcta: 0,
          explicacion: "Es una herencia ligada al X: con un solo X, una mutación basta para que aparezca. Faltar uno de los tres pigmentos (S, M, L) hace ver solo dos colores (discromatopsia)."
        }
      ]
    },
    {
      id: "fp2-t30",
      tema: "tema-30",
      numero: "30",
      etiqueta: "Tema 30",
      titulo: "Audición y equilibrio",
      preguntas: [
        {
          texto: "¿Qué característica de una onda sonora determina si el sonido es grave o agudo?",
          opciones: ["La frecuencia, medida en Hz", "La intensidad, medida en dB", "La amplitud de la membrana timpánica", "La velocidad de conducción del nervio VIII"],
          correcta: 0,
          explicacion: "La frecuencia da el tono (a más Hz, más agudo). La intensidad (dB) da el volumen. El oído humano oye entre unos 15-20 Hz y 20 000 Hz."
        },
        {
          texto: "En la membrana basilar de la cóclea…",
          opciones: [
            "La base, estrecha y rígida, vibra con frecuencias altas y el vértice, ancho y flácido, con frecuencias bajas",
            "La base vibra con frecuencias bajas y el vértice con frecuencias altas",
            "Toda la membrana vibra igual y la frecuencia se codifica en la corteza",
            "La intensidad se codifica por la zona que vibra y la frecuencia por la amplitud"
          ],
          correcta: 0,
          explicacion: "Es un mapa tonotópico: cada frecuencia hace vibrar una zona concreta. La intensidad se codifica por la amplitud de la vibración y la cantidad de glutamato liberado."
        },
        {
          texto: "¿Qué ocurre en una célula ciliada interna del órgano de Corti cuando sus cilios se inclinan contra la membrana tectoria?",
          opciones: [
            "Se abren canales de K⁺, entra K⁺ desde la endolinfa, la célula se despolariza y libera glutamato",
            "Se cierran canales de Na⁺ y la célula se hiperpolariza",
            "Sale K⁺ hacia la perilinfa y la célula libera acetilcolina",
            "Se genera un potencial de acción en la propia célula ciliada"
          ],
          correcta: 0,
          explicacion: "La endolinfa es muy rica en K⁺, así que al abrirse los canales entra K⁺ y despolariza la célula. Cuanto más se mueven los cilios, más glutamato se libera hacia el nervio auditivo."
        },
        {
          texto: "Un paciente oye peor por un oído tras días con otitis media con líquido. ¿Qué tipo de hipoacusia tiene?",
          opciones: [
            "De transmisión o conducción, porque falla el oído medio",
            "Neurosensorial, por daño de las células ciliadas",
            "Central, por lesión de la corteza auditiva",
            "Presbiacusia"
          ],
          correcta: 0,
          explicacion: "La de transmisión se debe a problemas del oído externo o medio (tapón de cera, otitis, huesecillos). La neurosensorial es de la cóclea o del nervio y suele afectar a frecuencias concretas."
        },
        {
          texto: "Un hombre de 75 años no entiende bien las voces agudas y los timbres. ¿Qué es lo más probable?",
          opciones: [
            "Presbiacusia: hipoacusia neurosensorial de frecuencias altas por la edad",
            "Hipoacusia de transmisión por rigidez del tímpano",
            "Enfermedad de Menière",
            "Lesión del área de Wernicke"
          ],
          correcta: 0,
          explicacion: "La presbiacusia afecta a las frecuencias altas y en el 90 % de los casos es neurosensorial: se degeneran las células ciliadas de la base de la cóclea."
        },
        {
          texto: "¿Qué función tienen los músculos del oído medio que limitan el movimiento de los huesecillos?",
          opciones: [
            "Protegen el oído ante sonidos intensos de baja frecuencia (reflejo de atenuación)",
            "Amplifican los sonidos débiles",
            "Igualan la presión del oído medio con la del exterior",
            "Mueven la endolinfa de los conductos semicirculares"
          ],
          correcta: 0,
          explicacion: "Los huesecillos (martillo, yunque, estribo) amplifican la vibración del tímpano. Sus músculos se contraen ante sonidos muy intensos de baja frecuencia y reducen la transmisión."
        },
        {
          texto: "Un paciente con un tumor en el lóbulo temporal izquierdo oye bien pero no entiende lo que le dicen. ¿Qué área está afectada?",
          opciones: [
            "El área de Wernicke, que asocia los sonidos con conceptos",
            "La corteza auditiva primaria (A1)",
            "Los núcleos cocleares del tronco",
            "La oliva superior"
          ],
          correcta: 0,
          explicacion: "El área de Wernicke recibe señales de la corteza auditiva secundaria e interpreta el lenguaje. La oliva superior compara la información de los dos oídos para localizar el sonido."
        },
        {
          texto: "¿Qué detectan los órganos otolíticos (utrículo y sáculo)?",
          opciones: [
            "La aceleración lineal y la inclinación de la cabeza, gracias a cristales de carbonato cálcico",
            "La rotación de la cabeza, gracias a la cúpula gelatinosa de la cresta ampular",
            "La frecuencia de los sonidos graves",
            "La presión del oído medio"
          ],
          correcta: 0,
          explicacion: "En las máculas del utrículo y el sáculo los otolitos se desplazan con la gravedad y la aceleración lineal. La rotación la detectan los conductos semicirculares, a través de la cúpula y la endolinfa."
        },
        {
          texto: "Una paciente nota que todo le da vueltas durante unos segundos al girarse en la cama, sin pérdida de audición. Tuvo un golpe en la cabeza hace poco. ¿Qué sospechas?",
          opciones: [
            "Vértigo posicional paroxístico benigno: cristales de otolitos desplazados a un conducto semicircular",
            "Enfermedad de Menière por acumulación de endolinfa",
            "Hipoacusia de transmisión",
            "Lesión del cerebelo con ataxia"
          ],
          correcta: 0,
          explicacion: "En el vértigo posicional benigno los otolitos sueltos (tras un traumatismo o una infección) se mueven en un conducto semicircular con los cambios de postura. No afecta a la audición."
        },
        {
          texto: "Un paciente tiene episodios de vértigo, acúfenos e hipoacusia que van y vienen. ¿Cuál es el mecanismo de la enfermedad más probable?",
          opciones: [
            "Aumento de endolinfa que dilata el canal endolinfático y estimula de forma anómala la cóclea y el vestíbulo",
            "Cristales de calcio sueltos en un conducto semicircular",
            "Degeneración de las células ciliadas por la edad",
            "Tapón de cerumen en el conducto auditivo"
          ],
          correcta: 0,
          explicacion: "La enfermedad de Menière une vértigo, acúfenos e hipoacusia por exceso de endolinfa. El exceso de presión altera a la vez el órgano de Corti y los receptores vestibulares."
        },
        {
          texto: "¿Para qué sirve el reflejo vestíbulo-ocular?",
          opciones: [
            "Para mantener la imagen estable en la retina cuando se mueve la cabeza",
            "Para contraer la pupila ante una luz intensa",
            "Para enfocar objetos cercanos",
            "Para girar la cabeza hacia un sonido"
          ],
          correcta: 0,
          explicacion: "Los núcleos vestibulares conectan con los núcleos oculomotores y mueven los ojos en sentido contrario a la cabeza, lo que estabiliza la imagen en la retina."
        },
        {
          texto: "¿Qué afirmación sobre las vías vestibulares es correcta?",
          opciones: [
            "Van a los núcleos vestibulares del bulbo, al cerebelo, a la médula y a la corteza temporoparietal, pero no hay una corteza vestibular primaria",
            "Tienen una corteza vestibular primaria en el lóbulo occipital",
            "No pasan por el nervio VIII, sino por el facial",
            "Terminan solo en la médula espinal"
          ],
          correcta: 0,
          explicacion: "La información vestibular va por el VIII par a los núcleos vestibulares y de ahí al cerebelo (equilibrio), a la médula (postura) y a los núcleos oculomotores. La corteza temporoparietal la usa para el esquema corporal."
        }
      ]
    },
    {
      id: "fp2-t31",
      tema: "tema-31",
      numero: "31",
      etiqueta: "Tema 31",
      titulo: "Gusto y olfato",
      preguntas: [
        {
          texto: "¿Qué sabor tiene el umbral de detección más bajo (se detecta en menor cantidad) y por qué?",
          opciones: [
            "El amargo, porque muchas sustancias amargas son tóxicas",
            "El dulce, porque indica alimentos ricos en energía",
            "El salado, porque el sodio es esencial",
            "El umami, porque detecta proteínas"
          ],
          correcta: 0,
          explicacion: "El amargo (quinina, estricnina) se detecta a concentraciones mínimas como defensa frente a tóxicos. El dulce es de los que necesitan más concentración para detectarse."
        },
        {
          texto: "¿Por qué el picante de la guindilla no es un sabor?",
          opciones: [
            "Porque la capsaicina activa receptores somatosensoriales (nociceptores sensibles al calor), no células gustativas",
            "Porque lo detectan las papilas filiformes",
            "Porque es una mezcla de los sabores ácido y salado",
            "Porque lo percibe el olfato y no el gusto"
          ],
          correcta: 0,
          explicacion: "El picante activa nociceptores sensibles al calor y el frescor del mentol, termorreceptores de frío. Son sensaciones somatosensoriales, no sabores primarios."
        },
        {
          texto: "¿Qué papilas de la lengua no tienen botones gustativos?",
          opciones: ["Las filiformes", "Las caliciformes", "Las fungiformes", "Las foliadas"],
          correcta: 0,
          explicacion: "Las filiformes son las más abundantes y sirven para la textura y mover el alimento. Las caliciformes (posteriores, en V), foliadas (laterales) y fungiformes (punta y bordes) sí tienen botones."
        },
        {
          texto: "¿Qué afirmación sobre el «mapa de los sabores» de la lengua es correcta?",
          opciones: [
            "Es falso: cada botón gustativo tiene receptores para todos los sabores primarios",
            "Es cierto: la punta detecta solo lo dulce y el fondo solo lo amargo",
            "Es cierto solo para el sabor amargo",
            "Es falso porque los sabores los detectan las papilas filiformes"
          ],
          correcta: 0,
          explicacion: "No hay zonas que detecten un solo sabor. Cada botón contiene células para los distintos sabores, aunque cada célula responde a uno."
        },
        {
          texto: "Un paciente con parálisis facial periférica (nervio VII) nota que la comida le sabe «a nada» en la parte delantera de la lengua del lado afectado. ¿Por qué?",
          opciones: [
            "Porque el facial lleva el gusto de los dos tercios anteriores de la lengua",
            "Porque el facial lleva el gusto del tercio posterior de la lengua",
            "Porque el facial inerva las papilas filiformes",
            "Porque el facial lleva la sensibilidad táctil de toda la lengua"
          ],
          correcta: 0,
          explicacion: "Gusto: facial (VII) para los dos tercios anteriores, glosofaríngeo (IX) para el tercio posterior y vago (X) para la faringe y la epiglotis. Todos llegan al núcleo del tracto solitario."
        },
        {
          texto: "¿Dónde está la corteza gustativa primaria?",
          opciones: ["En la ínsula, cerca de la corteza somatosensorial de la lengua", "En el lóbulo occipital", "En la corteza piriforme", "En el hipocampo"],
          correcta: 0,
          explicacion: "La vía gustativa va del núcleo del tracto solitario al tálamo y de ahí a la ínsula. La corteza orbitofrontal interviene en la preferencia por los sabores."
        },
        {
          texto: "¿Qué tiene de especial la vía olfatoria frente al resto de los sentidos?",
          opciones: [
            "La mayor parte de la información llega a la corteza olfatoria sin pasar antes por el tálamo",
            "Es el único sentido que cruza la línea media en el bulbo",
            "No tiene receptores, la detección la hace el bulbo olfatorio",
            "Sus receptores no pueden regenerarse"
          ],
          correcta: 0,
          explicacion: "El olfato no tiene un relevo talámico específico: del bulbo olfatorio va directo a la corteza piriforme y entorrinal. Solo una pequeña parte pasa por el tálamo hacia la corteza orbitofrontal."
        },
        {
          texto: "El olor de un perfume te recuerda de golpe a tu abuela. ¿Qué conexión lo explica?",
          opciones: [
            "Las proyecciones de la corteza olfatoria al hipocampo y al sistema límbico",
            "Las proyecciones del bulbo olfatorio al cerebelo",
            "La conexión del nervio olfatorio con el núcleo del tracto solitario",
            "La sinapsis del olfato en el tálamo antes de llegar a la corteza"
          ],
          correcta: 0,
          explicacion: "La corteza olfatoria proyecta al hipocampo (memoria) y al sistema límbico (emoción). Por eso los olores despiertan recuerdos y emociones con tanta facilidad."
        },
        {
          texto: "Sobre los receptores olfativos, ¿qué es correcto?",
          opciones: [
            "Son neuronas bipolares del epitelio olfatorio que se regeneran a partir de células basales",
            "Son células epiteliales que hacen sinapsis con la neurona olfatoria",
            "Hay cinco tipos, uno por cada olor primario",
            "Se encuentran en la parte inferior de las fosas nasales"
          ],
          correcta: 0,
          explicacion: "Las neuronas olfativas están en la parte superior de las fosas nasales y se regeneran. Hay unos 350 tipos de receptores y no existen olores primarios; cada olor activa una combinación de receptores."
        },
        {
          texto: "Un paciente con COVID ha perdido el olfato y dice que la comida «no sabe igual». ¿Por qué se altera el sabor si el gusto funciona?",
          opciones: [
            "Porque el sabor completo (flavor) combina gusto, olfato y textura en la corteza orbitofrontal",
            "Porque el nervio olfatorio lleva también el gusto de la lengua",
            "Porque los botones gustativos dependen del epitelio olfatorio para regenerarse",
            "Porque el olfato y el gusto comparten la misma corteza primaria"
          ],
          correcta: 0,
          explicacion: "La corteza orbitofrontal integra gusto, olfato, textura y otras señales para dar el sabor completo de los alimentos. Sin olfato se pierden los matices y solo quedan los sabores básicos."
        },
        {
          texto: "¿Qué es la saciedad sensorioespecífica?",
          opciones: [
            "La pérdida de placer por un alimento concreto tras comer bastante de él, que empuja a variar la dieta",
            "La saciedad que produce la leptina del tejido adiposo",
            "La saciedad causada por la distensión del estómago",
            "La aversión a un alimento que sentó mal"
          ],
          correcta: 0,
          explicacion: "Depende de las características sensoriales del alimento y no tanto de sus calorías. Por eso, aunque estés lleno del primer plato, el postre «entra»."
        },
        {
          texto: "¿Qué son los factores no homeostáticos de la ingesta?",
          opciones: [
            "Los que no dependen del balance energético: sabor, aroma, textura y factores sociales y culturales",
            "Las señales del estómago, el intestino, el páncreas y el tejido adiposo",
            "Las hormonas que indican que hay déficit de energía",
            "Los reflejos de deglución y salivación"
          ],
          correcta: 0,
          explicacion: "Los factores homeostáticos informan del estado energético (señales metabólicas). Los no homeostáticos dependen de las propiedades sensoriales del alimento y de hábitos y normas sociales."
        }
      ]
    },
    {
      id: "fp2-t32",
      tema: "tema-32",
      numero: "32",
      etiqueta: "Tema 32",
      titulo: "Sistema motor somático",
      preguntas: [
        {
          texto: "Andar, respirar o masticar sin pensarlo son movimientos…",
          opciones: [
            "Automáticos: rítmicos, generados por generadores centrales de pautas",
            "Reflejos: respuestas estereotipadas a un estímulo sensorial",
            "Voluntarios: planificados según el objetivo",
            "Reflejos monosinápticos de la médula"
          ],
          correcta: 0,
          explicacion: "Los movimientos automáticos son rítmicos y no necesitan que se active un receptor. Los genera un circuito central y pueden ser innatos (andar) o aprendidos (montar en bici)."
        },
        {
          texto: "Para levantar un objeto cada vez más pesado, el sistema nervioso aumenta la fuerza…",
          opciones: [
            "Reclutando unidades motoras de pequeñas a grandes y aumentando la frecuencia de descarga",
            "Reclutando primero las unidades motoras más grandes",
            "Aumentando la amplitud de los potenciales de acción de la motoneurona",
            "Liberando más acetilcolina en cada potencial de acción"
          ],
          correcta: 0,
          explicacion: "Sumación espacial (reclutamiento según el principio del tamaño: primero las pequeñas) y sumación temporal (más frecuencia, hasta el tétanos)."
        },
        {
          texto: "¿Qué forma una unidad motora?",
          opciones: [
            "Una motoneurona alfa y todas las fibras de músculo esquelético que inerva",
            "Una motoneurona y las fibras de músculo liso que inerva",
            "Un huso muscular y su fibra Ia",
            "Todas las motoneuronas que inervan un mismo músculo"
          ],
          correcta: 0,
          explicacion: "La unidad motora es una motoneurona alfa y sus fibras de músculo esquelético. Los apuntes dicen «músculo liso» por error: el sistema motor somático controla el músculo esquelético."
        },
        {
          texto: "Una mujer de 30 años tiene párpados caídos y visión doble que empeoran a lo largo del día y con el esfuerzo, y mejoran con el reposo. ¿Cuál es el mecanismo más probable?",
          opciones: [
            "Anticuerpos contra los receptores nicotínicos de acetilcolina de la placa motora (miastenia gravis)",
            "Degeneración de las motoneuronas de la corteza y la médula (ELA)",
            "Pérdida de neuronas dopaminérgicas de la sustancia negra",
            "Lesión del cerebelo con ataxia"
          ],
          correcta: 0,
          explicacion: "En la miastenia gravis los anticuerpos bloquean o destruyen los receptores de acetilcolina. La debilidad aumenta con la actividad porque cada vez hay menos receptores disponibles."
        },
        {
          texto: "Al golpear el tendón rotuliano, la pierna se extiende. ¿Qué ocurre en ese reflejo?",
          opciones: [
            "Los husos del cuádriceps se estiran, activan su motoneurona en una sola sinapsis y una interneurona inhibe a los isquiotibiales",
            "El órgano tendinoso de Golgi inhibe al cuádriceps y se contraen los isquiotibiales",
            "La corteza motora ordena la contracción del cuádriceps",
            "Se activan nociceptores que producen un reflejo de retirada"
          ],
          correcta: 0,
          explicacion: "Es el reflejo osteotendinoso: miotático monosináptico más inhibición recíproca del antagonista por una interneurona inhibidora."
        },
        {
          texto: "¿Qué detecta el órgano tendinoso de Golgi y qué reflejo genera?",
          opciones: [
            "La tensión por contracción excesiva; inhibe la motoneurona alfa y relaja el músculo (miotático inverso)",
            "El estiramiento del músculo; contrae el mismo músculo (miotático)",
            "El dolor; produce la retirada del miembro",
            "La posición de la articulación; contrae el antagonista"
          ],
          correcta: 0,
          explicacion: "El huso muscular detecta el estiramiento (reflejo miotático). El órgano de Golgi, en la unión músculo-tendón, detecta la tensión y protege al músculo relajándolo."
        },
        {
          texto: "Un paciente con lesión medular aguda pierde el tono y los reflejos por debajo de la lesión, y semanas después aparecen hipertonía e hiperreflexia. ¿Cómo se llama la fase inicial?",
          opciones: ["Shock espinal", "Rigidez de descerebración", "Ataxia", "Acinesia"],
          correcta: 0,
          explicacion: "Tras una lesión medular hay primero un shock espinal (flacidez, pérdida de tono) y después hipertonía. Una lesión por encima del tronco da rigidez de descerebración."
        },
        {
          texto: "¿Qué área cortical planifica movimientos aprendidos a partir de representaciones internas, sin estímulos externos, y recibe la información de los ganglios basales?",
          opciones: ["El área motora suplementaria", "La corteza motora primaria (M1)", "La corteza premotora", "La corteza somatosensorial primaria"],
          correcta: 0,
          explicacion: "La premotora usa información sensorial externa (visual, táctil) para guiar el movimiento. La suplementaria planifica desde representaciones internas. M1 ejecuta y su actividad se relaciona con la fuerza y la dirección."
        },
        {
          texto: "¿Dónde cruza la línea media la vía corticoespinal (piramidal)?",
          opciones: ["En las pirámides del bulbo raquídeo", "En el mesencéfalo", "En la médula, en cada segmento", "En el cuerpo calloso"],
          correcta: 0,
          explicacion: "La vía piramidal (corticoespinal y corticobulbar) controla los movimientos voluntarios finos y cruza en el bulbo. Por eso una lesión cortical produce déficit en el lado contrario."
        },
        {
          texto: "Un hombre de 65 años tiene temblor en reposo, rigidez y movimientos lentos y le cuesta empezar a andar. ¿Qué estructura está afectada?",
          opciones: [
            "Las neuronas dopaminérgicas de la sustancia negra compacta (Parkinson)",
            "El estriado, por degeneración hereditaria (Huntington)",
            "El cerebelo",
            "Las motoneuronas de la médula"
          ],
          correcta: 0,
          explicacion: "El Parkinson es un cuadro hipocinético (acinesia, bradicinesia) por pérdida de dopamina. Huntington es hipercinético (corea) por degeneración del estriado. El temblor del cerebelo es intencional, no en reposo."
        },
        {
          texto: "Tras un ictus cerebeloso derecho, un paciente no acierta a tocarse la nariz con el dedo y tiembla al acercarse. ¿Qué lado está afectado y cómo se llama el signo?",
          opciones: [
            "El lado derecho, porque el cerebelo actúa sobre su mismo lado; dismetría con temblor intencional",
            "El lado izquierdo, por control contralateral; dismetría",
            "El lado derecho; temblor de reposo parkinsoniano",
            "Los dos lados por igual; ataxia sensitiva"
          ],
          correcta: 0,
          explicacion: "El cerebelo es la excepción ipsilateral. Su lesión da ataxia: temblor intencional (al moverse, no en reposo), dismetría (el movimiento se queda corto o se pasa) y dificultad para movimientos rápidos alternantes."
        },
        {
          texto: "En la ELA, ¿qué neuronas se degeneran?",
          opciones: [
            "Las de la corteza motora y las motoneuronas del tronco del encéfalo y la médula",
            "Solo las neuronas sensitivas de los ganglios raquídeos",
            "Las neuronas dopaminérgicas de la sustancia negra",
            "Los receptores de acetilcolina de la placa motora"
          ],
          correcta: 0,
          explicacion: "La esclerosis lateral amiotrófica afecta a la primera y a la segunda motoneurona: debilidad y atrofia progresivas que acaban impidiendo tragar y respirar. La sensibilidad se respeta."
        }
      ]
    }
  ]
};
