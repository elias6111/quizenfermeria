// Tests de Fisiología · Bloque II (hematología, temas 7 a 9).
// Cada test es corto: unas 10 preguntas de un solo tema.
// "correcta" es la posición de la respuesta correcta (0 = primera opción).
const fisiologiaBloque2 = {
  titulo: "Bloque II · Hematología",
  tests: [
    /* ---------- Tema 7: propiedades de la sangre y hematíes ---------- */
    {
      id: "t07",
      numero: "7",
      titulo: "Propiedades de la sangre y hematíes",
      preguntas: [
        {
          texto: "¿Qué diferencia al suero del plasma?",
          opciones: [
            "El suero contiene las células de la sangre",
            "El suero no tiene fibrinógeno ni factores de coagulación",
            "El suero tiene más proteínas que el plasma",
            "El plasma se obtiene sin anticoagulante"
          ],
          correcta: 1,
          explicacion: "El plasma se obtiene con anticoagulante y conserva el fibrinógeno. El suero se obtiene sin anticoagulante: la sangre coagula y el fibrinógeno y los factores se gastan en formar la fibrina."
        },
        {
          texto: "¿Qué es el hematocrito y cuál es su valor normal aproximado?",
          opciones: [
            "La concentración de hemoglobina; 15 g/dL",
            "El número de leucocitos; 7.000/µL",
            "El porcentaje del volumen de sangre que ocupan las células; ≈ 44 %",
            "El porcentaje de plasma; ≈ 90 %"
          ],
          correcta: 2,
          explicacion: "El hematocrito es el porcentaje del volumen sanguíneo ocupado por las células (sobre todo hematíes): ≈ 44 %. Baja en la anemia y sube en la policitemia o la deshidratación."
        },
        {
          texto: "La volemia normal de un adulto es aproximadamente…",
          opciones: ["El 8 % del peso corporal (5-6 L)", "El 20 % del peso corporal", "El 60 % del peso corporal", "2 litros"],
          correcta: 0,
          explicacion: "La sangre supone ≈ 8 % del peso (normovolemia), unos 5-6 L. Por encima es hipervolemia y por debajo, hipovolemia."
        },
        {
          texto: "¿Qué células derivan del precursor linfoide?",
          opciones: ["Hematíes y plaquetas", "Neutrófilos y eosinófilos", "Monocitos", "Linfocitos B, T y NK"],
          correcta: 3,
          explicacion: "El precursor linfoide solo da linfocitos (B, T y NK). Todos los demás elementos (hematíes, plaquetas, granulocitos y monocitos) salen del precursor mieloide."
        },
        {
          texto: "¿Dónde se forman las células sanguíneas desde el 5.º mes de vida fetal?",
          opciones: ["En el saco vitelino", "En el hígado", "En la médula ósea roja", "En el bazo"],
          correcta: 2,
          explicacion: "1.er trimestre: saco vitelino; 2.º trimestre: hígado (con el bazo); desde el 5.º mes y durante toda la vida: médula ósea roja."
        },
        {
          texto: "¿Qué órgano produce la mayor parte de la eritropoyetina y ante qué estímulo?",
          opciones: [
            "El hígado, ante la anemia ferropénica",
            "El riñón, ante la hipoxia",
            "La médula ósea, ante el ejercicio",
            "El bazo, ante la destrucción de hematíes"
          ],
          correcta: 1,
          explicacion: "El riñón fabrica el 85-90 % de la EPO cuando detecta hipoxia (hemorragia, anemia, enfermedad pulmonar, altitud…). La EPO estimula la formación de hematíes en la médula."
        },
        {
          texto: "«El glóbulo rojo termina de madurar en la médula ósea roja.» ¿Verdadero o falso?",
          opciones: [
            "Falso: sale como reticulocito y termina de madurar en la sangre en unos 2 días",
            "Verdadero: sale completamente maduro",
            "Falso: madura en el bazo",
            "Verdadero: madura en el hígado"
          ],
          correcta: 0,
          explicacion: "El reticulocito ya no tiene núcleo, sale a la circulación y en unos 2 días se convierte en eritrocito maduro en la sangre."
        },
        {
          texto: "¿Cuánto vive un hematíe y dónde se destruye principalmente?",
          opciones: ["7 días; en el hígado", "30 días; en la médula ósea", "1 año; en el riñón", "120 días; en el bazo"],
          correcta: 3,
          explicacion: "El hematíe vive ≈ 120 días; al perder elasticidad se rompe y los macrófagos del bazo lo fagocitan (hemocatéresis). El hierro se reutiliza y el resto del hemo da bilirrubina."
        },
        {
          texto: "Un paciente tiene una anemia con hematíes pequeños (VCM bajo). ¿Cuál es la causa más probable?",
          opciones: ["Déficit de vitamina B12", "Déficit de hierro", "Déficit de ácido fólico", "Hemorragia aguda"],
          correcta: 1,
          explicacion: "La anemia microcítica es típica de la ferropenia. La macrocítica (hematíes grandes) se debe al déficit de B12 o ácido fólico; las hemorragias agudas suelen dar anemia normocítica."
        },
        {
          texto: "Si un hematíe se coloca en un medio hipotónico…",
          opciones: [
            "Se arruga (crenación)",
            "No le pasa nada",
            "Entra agua, se hincha y puede estallar (hemólisis)",
            "Pierde la hemoglobina por transporte activo"
          ],
          correcta: 2,
          explicacion: "En un medio hipotónico el agua entra en el hematíe, que se hincha y puede romperse (hemólisis). En un medio hipertónico sale agua y se arruga (crenación)."
        }
      ]
    },

    /* ---------- Tema 8 (1): leucocitos e inmunidad ---------- */
    {
      id: "t08",
      numero: "8",
      titulo: "Leucocitos e inmunidad",
      preguntas: [
        {
          texto: "¿En qué se transforma el monocito cuando sale de la sangre a los tejidos?",
          opciones: ["En linfocito", "En macrófago", "En neutrófilo", "En célula plasmática"],
          correcta: 1,
          explicacion: "El monocito circula ≈ 70 horas; cuando sale a los tejidos (diapédesis) se convierte en macrófago, un fagocito potente y presentador de antígeno."
        },
        {
          texto: "¿Dónde maduran los linfocitos T?",
          opciones: ["En la médula ósea", "En el bazo", "En el timo", "En los ganglios linfáticos"],
          correcta: 2,
          explicacion: "Órganos linfoides primarios: la médula ósea (linfocitos B) y el timo (linfocitos T). Los secundarios (bazo, ganglios, amígdalas) son donde se activan."
        },
        {
          texto: "Los linfocitos T CD8⁺ (citotóxicos) reconocen antígenos presentados en…",
          opciones: ["El MHC de clase I", "El MHC de clase II", "Los anticuerpos IgM", "El complemento"],
          correcta: 0,
          explicacion: "CD8⁺ + MHC I (presente en todas las células nucleadas) y CD4⁺ + MHC II (solo en células presentadoras). Truco: 4 × 2 = 8 y 8 × 1 = 8."
        },
        {
          texto: "¿Qué anticuerpo es el primero en producirse ante una infección?",
          opciones: ["IgG", "IgA", "IgE", "IgM"],
          correcta: 3,
          explicacion: "La IgM es la primera (respuesta primaria). Es un pentámero muy grande que no atraviesa la placenta. La IgG aparece después y predomina en la respuesta secundaria."
        },
        {
          texto: "¿Qué inmunoglobulina atraviesa la placenta y protege al feto?",
          opciones: ["IgM", "IgG", "IgA", "IgE"],
          correcta: 1,
          explicacion: "La IgG es la única que cruza la placenta (inmunidad pasiva natural). La IgA pasa al bebé con la leche materna."
        },
        {
          texto: "¿Qué células de la inmunidad innata destruyen células infectadas por virus con perforinas, sin necesidad de activación previa?",
          opciones: ["Linfocitos B", "Linfocitos T cooperadores", "Células natural killer (NK)", "Eosinófilos"],
          correcta: 2,
          explicacion: "Las NK reconocen células infectadas o tumorales y las matan con perforinas (poros) y granzimas (apoptosis). Atacan a la célula infectada, no al virus directamente."
        },
        {
          texto: "¿Cuáles son los cuatro signos clásicos de la inflamación?",
          opciones: [
            "Fiebre, tos, dolor y edema",
            "Rubor, calor, tumor y dolor",
            "Palidez, frío, hinchazón y picor",
            "Rubor, fiebre, pus y prurito"
          ],
          correcta: 1,
          explicacion: "Tétrada de Celso: rubor (enrojecimiento), calor, tumor (hinchazón) y dolor. Se deben a la vasodilatación y al aumento de permeabilidad que producen la histamina y otros mediadores."
        },
        {
          texto: "¿Qué sustancia liberada por los macrófagos actúa sobre el hipotálamo y produce fiebre?",
          opciones: ["La histamina", "La interleucina-1", "La perforina", "La IgE"],
          correcta: 1,
          explicacion: "Los macrófagos liberan interleucina-1, que llega al hipotálamo y sube el punto de ajuste de la temperatura. La fiebre frena el crecimiento de algunos microorganismos."
        },
        {
          texto: "¿Qué diferencia la respuesta humoral secundaria de la primaria?",
          opciones: [
            "La secundaria es más lenta y débil",
            "La secundaria produce sobre todo IgM",
            "La secundaria no necesita linfocitos B",
            "La secundaria es rápida, intensa y duradera, con predominio de IgG"
          ],
          correcta: 3,
          explicacion: "Gracias a la memoria, la respuesta secundaria aparece en 2-3 días (frente a ≈ 2 semanas), es mucho más intensa, dura meses y produce sobre todo IgG."
        },
        {
          texto: "Un paciente recibe un suero con anticuerpos ya formados. ¿Qué tipo de inmunidad adquiere?",
          opciones: [
            "Activa natural, con memoria",
            "Activa artificial, con memoria",
            "Pasiva artificial: inmediata, fugaz y sin memoria",
            "Pasiva natural, permanente"
          ],
          correcta: 2,
          explicacion: "El suero aporta anticuerpos hechos: inmunidad pasiva artificial, inmediata pero sin memoria. La vacuna introduce antígenos y genera inmunidad activa artificial con memoria."
        }
      ]
    },

    /* ---------- Tema 8 (2): grupos sanguíneos ---------- */
    {
      id: "t08b",
      numero: "8",
      titulo: "Grupos sanguíneos AB0 y Rh",
      preguntas: [
        {
          texto: "¿Qué grupo sanguíneo se considera donante universal de hematíes?",
          opciones: ["AB", "A", "B", "0"],
          correcta: 3,
          explicacion: "El grupo 0 no tiene antígenos A ni B en sus hematíes, así que no reacciona con los anticuerpos anti-A ni anti-B del receptor."
        },
        {
          texto: "¿Qué anticuerpos tiene en el plasma una persona del grupo A?",
          opciones: ["Anti-A", "Anti-B", "Anti-A y anti-B", "Ninguno"],
          correcta: 1,
          explicacion: "Se tienen anticuerpos naturales contra el antígeno que no se posee: el grupo A tiene anti-B; el B, anti-A; el 0, los dos; y el AB, ninguno."
        },
        {
          texto: "Una persona del grupo AB puede recibir hematíes de…",
          opciones: ["Solo del grupo AB", "Solo del grupo 0", "Todos los grupos (receptor universal)", "Solo de A y B"],
          correcta: 2,
          explicacion: "El grupo AB no tiene anticuerpos anti-A ni anti-B, así que puede recibir hematíes de cualquier grupo AB0."
        },
        {
          texto: "Al tipar una sangre, aglutina con el anti-A y no aglutina con el anti-B. ¿De qué grupo es?",
          opciones: ["A", "B", "AB", "0"],
          correcta: 0,
          explicacion: "Aglutina con anti-A → tiene antígeno A; no aglutina con anti-B → no tiene antígeno B. Es del grupo A. Si aglutinara con los dos sería AB; con ninguno, 0."
        },
        {
          texto: "¿A qué clase pertenecen los anticuerpos naturales anti-A y anti-B?",
          opciones: ["IgG", "IgA", "IgE", "IgM"],
          correcta: 3,
          explicacion: "Son IgM: muy grandes, aglutinan rápido a temperatura ambiente y no atraviesan la placenta. Los anti-Rh, en cambio, son IgG."
        },
        {
          texto: "¿Qué codifica el alelo 0 del gen AB0?",
          opciones: [
            "La transferasa que añade galactosa",
            "Una transferasa sin actividad",
            "La transferasa que añade N-acetilgalactosamina",
            "El antígeno D"
          ],
          correcta: 1,
          explicacion: "El alelo A codifica la transferasa A (añade N-acetilgalactosamina), el B la transferasa B (añade galactosa) y el 0 una transferasa sin actividad: queda solo el antígeno H."
        },
        {
          texto: "¿Qué antígeno define que una persona sea Rh positiva?",
          opciones: ["El antígeno C", "El antígeno H", "El antígeno D", "El antígeno E"],
          correcta: 2,
          explicacion: "El sistema Rh tiene muchos antígenos, pero el más importante es el D: tenerlo es ser Rh⁺ (≈ 85 % de la población). Rh⁺ es dominante."
        },
        {
          texto: "¿Tiene una persona Rh negativa anticuerpos anti-Rh de forma natural?",
          opciones: [
            "Sí, siempre, desde el nacimiento",
            "Solo si es del grupo 0",
            "Sí, de tipo IgM",
            "No: los desarrolla si se expone a sangre Rh positiva"
          ],
          correcta: 3,
          explicacion: "Los Rh⁻ no tienen anti-Rh de forma natural; los fabrican tras exponerse a sangre Rh⁺ (transfusión, parto). Son IgG."
        },
        {
          texto: "¿En qué situación puede aparecer la eritroblastosis fetal?",
          opciones: [
            "Madre Rh⁻ con feto Rh⁺, en un embarazo posterior al de sensibilización",
            "Madre Rh⁺ con feto Rh⁻ en el primer embarazo",
            "Madre del grupo AB con feto del grupo 0",
            "Madre y feto Rh⁻"
          ],
          correcta: 0,
          explicacion: "La madre Rh⁻ se sensibiliza (sobre todo en el parto del primer hijo Rh⁺) y fabrica anti-Rh IgG. En el siguiente embarazo con feto Rh⁺, esos anticuerpos cruzan la placenta y destruyen sus hematíes. Se previene con gammaglobulina anti-D."
        },
        {
          texto: "¿Por qué los anticuerpos anti-Rh pueden dañar al feto y los anti-A no?",
          opciones: [
            "Porque los anti-Rh son IgM",
            "Porque los anti-Rh son IgG y atraviesan la placenta; los anti-A son IgM y no la atraviesan",
            "Porque el feto no tiene antígenos A",
            "Porque los anti-A solo existen en el grupo AB"
          ],
          correcta: 1,
          explicacion: "Las IgG (anti-Rh) cruzan la placenta; las IgM (anti-A y anti-B), por su gran tamaño, no."
        }
      ]
    },

    /* ---------- Tema 9: plaquetas y hemostasia ---------- */
    {
      id: "t09",
      numero: "9",
      titulo: "Plaquetas y hemostasia",
      preguntas: [
        {
          texto: "¿De qué células proceden las plaquetas?",
          opciones: ["De los linfocitos", "De los megacariocitos de la médula ósea", "De los reticulocitos", "De las células endoteliales"],
          correcta: 1,
          explicacion: "Las plaquetas son fragmentos sin núcleo de los megacariocitos de la médula ósea. Cada megacariocito da 2.000-4.000 plaquetas."
        },
        {
          texto: "¿Cuál es la vida media de una plaqueta?",
          opciones: ["120 días", "1 día", "Unos 7 días", "Unos 30 días"],
          correcta: 2,
          explicacion: "Las plaquetas viven unos 7 días y después se destruyen en el bazo y el hígado. El hematíe vive 120 días."
        },
        {
          texto: "¿Qué dos fenómenos forman la hemostasia primaria?",
          opciones: [
            "Espasmo vascular y formación del tapón plaquetario",
            "Formación de fibrina y fibrinólisis",
            "Vía extrínseca y vía intrínseca",
            "Activación del factor X y de la trombina"
          ],
          correcta: 0,
          explicacion: "La hemostasia primaria actúa en los primeros minutos: vasoconstricción refleja (espasmo vascular) y tapón plaquetario. La coagulación (fibrina) es la hemostasia secundaria."
        },
        {
          texto: "¿A qué se adhieren las plaquetas cuando se lesiona un vaso?",
          opciones: ["Al endotelio sano", "A los hematíes", "A la fibrina ya formada", "Al colágeno del subendotelio dañado"],
          correcta: 3,
          explicacion: "Las plaquetas no se pegan al endotelio intacto: se adhieren al colágeno del subendotelio expuesto, se activan y liberan sustancias que reclutan más plaquetas."
        },
        {
          texto: "¿Qué sustancias favorecen la agregación plaquetaria?",
          opciones: [
            "Óxido nítrico y prostaciclina",
            "Tromboxano A₂, ADP y trombina",
            "Plasmina y t-PA",
            "Heparina y vitamina K"
          ],
          correcta: 1,
          explicacion: "El TXA₂, el ADP y la trombina reclutan y agregan plaquetas. El óxido nítrico y la prostaciclina del endotelio sano hacen lo contrario: limitan la extensión del tapón."
        },
        {
          texto: "Comparando las dos vías de la coagulación…",
          opciones: [
            "La intrínseca se activa por el factor tisular y es la más rápida",
            "Las dos tardan lo mismo",
            "La extrínseca se activa por el factor tisular, ante un daño grave, y es la más rápida",
            "La extrínseca solo actúa en el endotelio sin romper"
          ],
          correcta: 2,
          explicacion: "La vía extrínseca la activa el factor tisular cuando el vaso se rompe (daño grave) y es rápida (≈ 15 s). La intrínseca se activa por contacto con el endotelio dañado pero no roto y es más lenta (1-6 min)."
        },
        {
          texto: "¿Qué enzima convierte el fibrinógeno en fibrina?",
          opciones: ["La trombina", "La plasmina", "El factor tisular", "La protrombina"],
          correcta: 0,
          explicacion: "Las dos vías convergen en el factor X, que (con Ca²⁺) transforma la protrombina en trombina; la trombina convierte el fibrinógeno en fibrina, que forma la red del coágulo."
        },
        {
          texto: "¿Por qué el déficit de vitamina K produce hemorragias?",
          opciones: [
            "Porque destruye las plaquetas",
            "Porque impide la fibrinólisis",
            "Porque bloquea la vasoconstricción",
            "Porque el hígado la necesita para fabricar la protrombina y otros factores de coagulación"
          ],
          correcta: 3,
          explicacion: "El hígado sintetiza la protrombina, el fibrinógeno y otros factores, y necesita vitamina K para fabricar la protrombina y varios de ellos. Por eso las hepatopatías y el déficit de vitamina K alteran la coagulación."
        },
        {
          texto: "Además de la vitamina K y los factores de coagulación, ¿qué ion es imprescindible para formar la red de fibrina?",
          opciones: ["K⁺", "Ca²⁺", "Na⁺", "Cl⁻"],
          correcta: 1,
          explicacion: "La coagulación es dependiente de calcio: sin Ca²⁺ no se forma la trombina ni la red de fibrina. Por eso los tubos de analítica usan anticoagulantes que captan el calcio (citrato, EDTA)."
        },
        {
          texto: "¿Qué ocurre en la fibrinólisis?",
          opciones: [
            "Se forma el tapón plaquetario",
            "El fibrinógeno se transforma en fibrina",
            "El t-PA convierte el plasminógeno en plasmina, que degrada la fibrina y disuelve el coágulo",
            "Las plaquetas se adhieren al colágeno"
          ],
          correcta: 2,
          explicacion: "La fibrinólisis se activa a la vez que la coagulación: el activador tisular del plasminógeno (t-PA) forma plasmina, que degrada la fibrina (y los factores V y VIII) y restablece la circulación."
        }
      ]
    },

    /* ---------- Repaso del bloque II ---------- */
    {
      id: "r2",
      numero: "R",
      titulo: "Repaso del bloque II",
      preguntas: [
        {
          texto: "«La célula madre pluripotencial mieloide puede dar lugar a linfocitos.» ¿Verdadero o falso?",
          opciones: [
            "Verdadero",
            "Falso: los linfocitos solo proceden del precursor linfoide",
            "Verdadero, pero solo los NK",
            "Falso: los linfocitos proceden del timo"
          ],
          correcta: 1,
          explicacion: "Los precursores mieloide y linfoide son multipotenciales: el linfoide solo da linfocitos y el mieloide da todo lo demás."
        },
        {
          texto: "¿Qué factor estimula de forma específica la formación de plaquetas?",
          opciones: ["Eritropoyetina", "Interleucina-5", "Trombopoyetina", "Interleucina-1"],
          correcta: 2,
          explicacion: "La trombopoyetina (TPO) estimula la producción de plaquetas (también la IL-11). La EPO estimula los hematíes y la IL-5, los eosinófilos."
        },
        {
          texto: "¿Qué vitamina es necesaria para la síntesis del grupo hemo?",
          opciones: ["Vitamina B6 (piridoxina)", "Vitamina B12", "Vitamina K", "Vitamina C"],
          correcta: 0,
          explicacion: "La B6 ayuda a sintetizar el grupo hemo. El ácido fólico (B9) y la B12 son necesarios para la síntesis de ADN de los precursores."
        },
        {
          texto: "En la hemocatéresis, ¿qué ocurre con el hierro del grupo hemo?",
          opciones: [
            "Se elimina por la orina",
            "Se transforma en bilirrubina",
            "Se pierde en las heces",
            "Se almacena como ferritina y se reutiliza en la médula ósea"
          ],
          correcta: 3,
          explicacion: "La globina se degrada a aminoácidos, el hierro se guarda como ferritina y se reutiliza, y el resto del hemo se transforma en bilirrubina, que se elimina por la bilis."
        },
        {
          texto: "¿Qué leucocito es el principal encargado de destruir parásitos?",
          opciones: ["El neutrófilo", "El eosinófilo", "El linfocito B", "El basófilo"],
          correcta: 1,
          explicacion: "Los eosinófilos destruyen la membrana de los parásitos con el contenido de sus gránulos. La IgE también participa en la defensa frente a gusanos."
        },
        {
          texto: "Una analítica muestra neutrófilos altos y macrófagos bajos. Según los apuntes, ¿qué indica?",
          opciones: [
            "Que la infección todavía está en curso",
            "Que la infección ya ha pasado",
            "Que hay una alergia",
            "Que hay una anemia"
          ],
          correcta: 0,
          explicacion: "Los neutrófilos llegan primero. Neutrófilos altos y macrófagos bajos → infección en curso; neutrófilos bajos y macrófagos altos → la infección está pasando."
        },
        {
          texto: "¿En qué células se expresa el MHC de clase II?",
          opciones: [
            "En todas las células nucleadas",
            "En los hematíes",
            "Solo en las células presentadoras de antígeno del sistema inmune",
            "Solo en las neuronas"
          ],
          correcta: 2,
          explicacion: "El MHC II solo está en células presentadoras (macrófagos, dendríticas, linfocitos B) y presenta antígenos externos a los CD4⁺. El MHC I está en todas las células nucleadas."
        },
        {
          texto: "¿Qué enfermedad destruye los linfocitos T CD4⁺ y deja al paciente sin capacidad de coordinar la respuesta inmune?",
          opciones: ["La anemia ferropénica", "La eritroblastosis fetal", "La hemofilia", "El sida (VIH)"],
          correcta: 3,
          explicacion: "El VIH infecta y destruye los linfocitos T CD4⁺ (cooperadores), por lo que falla toda la respuesta adaptativa y aparecen infecciones oportunistas."
        },
        {
          texto: "El endotelio sano que rodea la lesión libera óxido nítrico y prostaciclina. ¿Para qué?",
          opciones: [
            "Para acelerar la coagulación",
            "Para limitar la extensión del tapón plaquetario",
            "Para activar el factor X",
            "Para producir vasoconstricción"
          ],
          correcta: 1,
          explicacion: "El NO y la prostaciclina (PGI₂) tienen acción antiagregante: impiden que el tapón se extienda más allá de la zona lesionada."
        },
        {
          texto: "La aspirina es antiagregante porque…",
          opciones: [
            "Activa la plasmina",
            "Es un antagonista de la vitamina K",
            "Inhibe la síntesis de tromboxano A₂ en las plaquetas",
            "Destruye el fibrinógeno"
          ],
          correcta: 2,
          explicacion: "La aspirina bloquea la síntesis de tromboxano A₂, uno de los agentes que agregan las plaquetas. El acenocumarol (Sintrom®), en cambio, es antagonista de la vitamina K."
        }
      ]
    }
  ]
};
