// Fisiología · Parcial 2 · Bloque: Sistema digestivo (temas 43-49). Un test de 12 preguntas por tema.
// "correcta" es la posición de la respuesta correcta (0 = primera opción); el motor baraja las opciones.
const fisioP2Digestivo = {
  titulo: "Sistema digestivo",
  tests: [
    {
      id: "fp2-t43",
      tema: "tema-43",
      numero: "43",
      etiqueta: "Tema 43",
      titulo: "Masticación, deglución y secreción salival",
      preguntas: [
        {
          texto: "Ver y oler la comida activa el tubo digestivo antes de comer. ¿Cómo se llama esta fase y qué sistema la media?",
          opciones: [
            "Fase cefálica, mediada por el parasimpático",
            "Fase oral, mediada por el simpático",
            "Fase gástrica, mediada por hormonas",
            "Fase cefálica, mediada por el simpático"
          ],
          correcta: 0,
          explicacion: "En la fase cefálica los estímulos cognitivos (pensamiento, olor, vista, sonido) activan el parasimpático, que estimula las secreciones salival, gástrica, pancreática y biliar y relaja el esfínter de Oddi."
        },
        {
          texto: "¿Qué ion es el más abundante en la saliva estimulada y para qué sirve?",
          opciones: [
            "El bicarbonato, que neutraliza los ácidos de los alimentos",
            "El cloruro, que acidifica el bolo",
            "El sodio, que da el sabor salado",
            "El calcio, que digiere el almidón"
          ],
          correcta: 0,
          explicacion: "La saliva es alcalina: el tampón bicarbonato (y el fosfato) neutraliza los alimentos ácidos y protege el esmalte. El calcio ayuda a que los dientes no pierdan su propio calcio."
        },
        {
          texto: "¿Qué macronutriente empieza a digerirse en la boca y cuál no?",
          opciones: [
            "Empiezan los hidratos de carbono (amilasa) y las grasas (lipasa); las proteínas no",
            "Empiezan las proteínas (pepsina); los hidratos de carbono no",
            "Solo se digieren las proteínas",
            "En la boca no hay digestión química, solo mecánica"
          ],
          correcta: 0,
          explicacion: "La saliva tiene α-amilasa (ptialina) y lipasa. No hay ninguna enzima capaz de digerir proteínas: su digestión empieza en el estómago con la pepsina."
        },
        {
          texto: "Un paciente de 80 años con boca seca por atrofia de las glándulas salivales tiene muchas caries e infecciones bucales. ¿Por qué?",
          opciones: [
            "Porque le faltan los componentes antimicrobianos de la saliva (lisozima, lactoferrina, IgA) y su efecto tampón",
            "Porque la saliva escasa es más ácida y fabrica más bacterias",
            "Porque le sobra amilasa, que daña el esmalte",
            "Porque no puede producir sarro"
          ],
          correcta: 0,
          explicacion: "En la xerostomía faltan la lisozima, la lactoferrina, la peroxidasa, la IgA y los tampones. Sin esa protección química y antimicrobiana aumentan las caries y las infecciones."
        },
        {
          texto: "¿Qué glándula salival produce la mayor parte de la saliva cuando estamos comiendo?",
          opciones: [
            "La parótida, con saliva serosa rica en amilasa",
            "La submandibular, con saliva mucosa",
            "La sublingual, con saliva serosa",
            "Las glándulas menores de los labios"
          ],
          correcta: 0,
          explicacion: "Con flujo estimulado, la parótida da un 60 % de la saliva. En reposo predomina la submandibular (70 %), que es mixta. La sublingual es mucosa."
        },
        {
          texto: "¿Qué sistema controla realmente la secreción salival?",
          opciones: [
            "El parasimpático: si se cortan sus fibras, las glándulas se atrofian",
            "El simpático: si se cortan sus fibras, deja de producirse saliva",
            "Las hormonas gastrointestinales",
            "El sistema nervioso entérico"
          ],
          correcta: 0,
          explicacion: "En la saliva no intervienen hormonas. El parasimpático (VII y IX) da una saliva abundante y acuosa. El simpático da poca saliva espesa y viscosa, y si se corta no pasa nada."
        },
        {
          texto: "Antes de un examen notas la boca seca y te cuesta tragar una galleta. ¿Qué lo explica?",
          opciones: [
            "La activación simpática, que produce poca saliva, densa y rica en proteínas",
            "La activación parasimpática, que reduce la saliva",
            "La falta de amilasa salival",
            "La liberación de gastrina por el estrés"
          ],
          correcta: 0,
          explicacion: "Con estrés o miedo el simpático libera noradrenalina sobre receptores β: sale saliva escasa y viscosa, así que tragar alimentos secos se hace difícil."
        },
        {
          texto: "¿Qué nervio lleva la orden parasimpática a la glándula parótida?",
          opciones: ["El glosofaríngeo (IX)", "El facial (VII)", "El vago (X)", "El trigémino (V)"],
          correcta: 0,
          explicacion: "El IX inerva la parótida y el VII las submandibulares y sublinguales. Las dos órdenes salen de los núcleos salivatorios del bulbo."
        },
        {
          texto: "¿Qué fase de la deglución es voluntaria?",
          opciones: ["La fase oral", "La fase faríngea", "La fase esofágica", "Ninguna: toda la deglución es refleja"],
          correcta: 0,
          explicacion: "En la fase oral decidimos tragar y la lengua lleva el bolo a la orofaringe. Al tocar los pilares anteriores se dispara el reflejo deglutorio: las fases faríngea y esofágica son involuntarias."
        },
        {
          texto: "Un paciente con ictus del tronco del encéfalo tose y se atraganta cada vez que bebe agua. ¿Qué fase de la deglución falla y qué riesgo tiene?",
          opciones: [
            "La fase faríngea, controlada por el centro de la deglución del bulbo: riesgo de aspiración a la vía aérea",
            "La fase oral, controlada por la corteza: riesgo de reflujo",
            "La fase esofágica: riesgo de úlcera",
            "Ninguna: es un problema de la saliva"
          ],
          correcta: 0,
          explicacion: "En la fase faríngea se eleva el paladar blando, la epiglotis tapa la laringe, se cierra la glotis y se inhibe la respiración. Si falla, el líquido pasa a la vía aérea (disfagia orofaríngea, neumonía por aspiración)."
        },
        {
          texto: "¿Cuál de estas sustancias relaja el esfínter esofágico inferior y favorece el reflujo?",
          opciones: ["La progesterona", "La gastrina", "La acetilcolina", "La motilina"],
          correcta: 0,
          explicacion: "Lo cierran la gastrina, la motilina, la acetilcolina y la noradrenalina. Lo relajan la secretina, la CCK, el VIP, el NO, la progesterona, la cafeína, el chocolate, el alcohol y la nicotina."
        },
        {
          texto: "Una embarazada de 30 semanas tiene ardor después de las comidas. ¿Qué lo explica sobre todo?",
          opciones: [
            "La progesterona alta disminuye el tono del esfínter esofágico inferior",
            "La progesterona aumenta la secreción de ácido",
            "Los estrógenos cierran el píloro",
            "La oxitocina relaja el esófago"
          ],
          correcta: 0,
          explicacion: "La progesterona relaja el esfínter esofágico inferior y el ácido sube al esófago. Ojo: los apuntes dicen «esfínter esofágico superior», pero el que importa para el reflujo es el inferior."
        }
      ]
    },
    {
      id: "fp2-t44",
      tema: "tema-44",
      numero: "44",
      etiqueta: "Tema 44",
      titulo: "Motilidad y secreción gástrica",
      preguntas: [
        {
          texto: "¿Qué células gástricas secretan el ácido clorhídrico y el factor intrínseco?",
          opciones: ["Las parietales u oxínticas", "Las principales", "Las células G", "Las células mucosas del cuello"],
          correcta: 0,
          explicacion: "Parietales: HCl y factor intrínseco. Principales: pepsinógeno y lipasa gástrica. G: gastrina. D: somatostatina. ECL: histamina."
        },
        {
          texto: "Un paciente con gastritis atrófica autoinmune tiene anemia y hormigueos en las piernas. ¿Qué mecanismo lo explica?",
          opciones: [
            "Al destruirse las células parietales falta factor intrínseco y no se absorbe la vitamina B12 (anemia perniciosa)",
            "Falta pepsina y no se absorbe el hierro",
            "Sobra ácido y se destruyen los eritrocitos",
            "Falta gastrina y no se forma hemoglobina"
          ],
          correcta: 0,
          explicacion: "El factor intrínseco se une a la B12 para que se absorba en el íleon. Sin él aparece anemia perniciosa, con síntomas neurológicos por el déficit de B12."
        },
        {
          texto: "¿Qué tres sustancias estimulan a la célula parietal para secretar HCl?",
          opciones: [
            "Acetilcolina, gastrina e histamina",
            "Secretina, CCK y somatostatina",
            "Histamina, secretina y GIP",
            "Gastrina, somatostatina y prostaglandinas"
          ],
          correcta: 0,
          explicacion: "La acetilcolina (vago, receptor M3), la gastrina (células G) y la histamina (células ECL, receptor H2) actúan en sinergia. Si se bloquea una de ellas, baja mucho la producción de ácido."
        },
        {
          texto: "¿Cómo actúa el omeprazol?",
          opciones: [
            "Inhibe la bomba de protones de la célula parietal",
            "Bloquea los receptores H2 de histamina",
            "Bloquea los receptores M3 de acetilcolina",
            "Neutraliza el ácido ya secretado"
          ],
          correcta: 0,
          explicacion: "El omeprazol bloquea el paso final de la secreción de ácido. La ranitidina, la famotidina y la cimetidina bloquean los receptores H2."
        },
        {
          texto: "¿Por qué los AINE (ibuprofeno, aspirina) pueden producir úlceras gástricas?",
          opciones: [
            "Porque inhiben la COX-1 y bajan las prostaglandinas que protegen la mucosa",
            "Porque estimulan directamente la secreción de gastrina",
            "Porque destruyen las uniones estrechas del epitelio",
            "Porque favorecen la infección por Helicobacter pylori"
          ],
          correcta: 0,
          explicacion: "Las prostaglandinas aumentan el moco y el bicarbonato, producen vasodilatación y reducen el ácido. Sin ellas, la barrera se debilita. La causa más frecuente de úlcera es Helicobacter pylori (90 %)."
        },
        {
          texto: "¿Qué hace que el estómago no se digiera a sí mismo?",
          opciones: [
            "Las uniones estrechas, la capa de moco con bicarbonato y las prostaglandinas",
            "Que la pepsina solo es activa a pH neutro",
            "Que el ácido se neutraliza en cuanto se secreta",
            "Que las células gástricas no tienen proteínas"
          ],
          correcta: 0,
          explicacion: "Las uniones estrechas impiden el paso del ácido entre las células, la capa de moco y bicarbonato mantiene un pH cercano a 7 junto al epitelio y las prostaglandinas refuerzan esa barrera."
        },
        {
          texto: "¿En qué fase de la secreción gástrica se produce la mayor parte del jugo gástrico?",
          opciones: [
            "En la fase gástrica, alrededor de un 60 %",
            "En la fase cefálica, alrededor de un 60 %",
            "En la fase intestinal, alrededor de un 30 %",
            "Las tres fases aportan lo mismo"
          ],
          correcta: 0,
          explicacion: "Fase cefálica: 30 %. Fase gástrica: 60 % (distensión con reflejos largos y cortos, y péptidos que estimulan la gastrina). Fase intestinal: 5-10 %, sobre todo de inhibición."
        },
        {
          texto: "Cuando el pH del antro baja a 2-3, ¿qué mecanismo frena la secreción de ácido?",
          opciones: [
            "Las células D liberan somatostatina, que inhibe a las células G, parietales y ECL",
            "Las células G liberan más gastrina",
            "Las células ECL liberan más histamina",
            "El vago libera más acetilcolina"
          ],
          correcta: 0,
          explicacion: "La somatostatina es el freno local: corta la gastrina, la histamina y el ácido para proteger la mucosa. En la fase cefálica, en cambio, el vago inhibe a las células D."
        },
        {
          texto: "¿Qué ocurre cuando el quimo ácido y graso llega al duodeno?",
          opciones: [
            "Se libera secretina, CCK y GIP, que inhiben la secreción y la motilidad gástricas",
            "Se libera gastrina, que acelera el vaciamiento gástrico",
            "Se activa el parasimpático y aumenta la secreción de ácido",
            "Se abre por completo el píloro"
          ],
          correcta: 0,
          explicacion: "Es el reflejo enterogástrico: el duodeno, que es un tubo pequeño, frena al estómago para recibir el quimo poco a poco. Se inhibe el parasimpático y se liberan hormonas inhibidoras."
        },
        {
          texto: "¿Por qué el estómago puede recibir hasta 4 litros de comida sin que aumente mucho su presión?",
          opciones: [
            "Por la relajación receptiva y la acomodación del fundus y el cuerpo, mediadas por el vago",
            "Porque el antro se contrae y empuja la comida al duodeno",
            "Porque el píloro se abre al llenarse",
            "Porque la gastrina relaja todo el estómago"
          ],
          correcta: 0,
          explicacion: "El estómago proximal es un reservorio muy distensible: se relaja antes de que llegue el alimento (relajación receptiva) y se sigue expandiendo al llegar (acomodación)."
        },
        {
          texto: "¿Qué partículas pasan del estómago al duodeno en el vaciamiento?",
          opciones: [
            "Solo partículas pequeñas, de 1-2 mm; el resto vuelve hacia atrás (retropropulsión)",
            "Todo el contenido a la vez al abrirse el píloro",
            "Solo los líquidos; los sólidos se quedan en el estómago",
            "Partículas de cualquier tamaño, porque el píloro está siempre abierto"
          ],
          correcta: 0,
          explicacion: "El peristaltismo antral (unas 3 ondas por minuto) empuja el quimo contra el píloro casi cerrado. Pasa poco al duodeno y el resto vuelve hacia atrás, lo que tritura y mezcla el alimento."
        },
        {
          texto: "Un paciente con vagotomía tendrá…",
          opciones: [
            "Menos secreción de ácido y menos motilidad gástrica",
            "Más secreción de ácido por falta de freno",
            "Más vaciamiento gástrico",
            "Más gastrina y más histamina"
          ],
          correcta: 0,
          explicacion: "El vago estimula la secreción (acetilcolina, histamina, gastrina vía GRP) y la motilidad gástrica. Al cortarlo baja la producción de ácido; se usaba antes para tratar úlceras."
        }
      ]
    },
    {
      id: "fp2-t45",
      tema: "tema-45",
      numero: "45",
      etiqueta: "Tema 45",
      titulo: "Motilidad y secreción intestinal",
      preguntas: [
        {
          texto: "¿Qué estructuras multiplican la superficie de absorción del intestino delgado?",
          opciones: [
            "Pliegues circulares (×3), vellosidades (×10) y microvellosidades (×20)",
            "Haustras, tenias y criptas",
            "Glándulas de Brunner y células de Paneth",
            "Solo las microvellosidades"
          ],
          correcta: 0,
          explicacion: "Gracias a estas estructuras el intestino delgado tiene unos 200 m² de superficie. El colon no tiene vellosidades y tiene unos 25 m²."
        },
        {
          texto: "¿Qué estructuras del duodeno secretan mucho bicarbonato para neutralizar el ácido del estómago?",
          opciones: ["Las glándulas de Brunner", "Las células de Paneth", "Las células caliciformes", "Los enterocitos del íleon"],
          correcta: 0,
          explicacion: "Las glándulas de Brunner solo están en el duodeno. Las células de Paneth liberan lisozima y las caliciformes, moco."
        },
        {
          texto: "¿Qué enzima del borde en cepillo del duodeno activa el tripsinógeno pancreático?",
          opciones: ["La enteroquinasa (enteropeptidasa)", "La pepsina", "La lactasa", "La secretina"],
          correcta: 0,
          explicacion: "La enteroquinasa convierte el tripsinógeno en tripsina, y la tripsina activa al resto de zimógenos del jugo pancreático. Así las enzimas no se activan dentro del páncreas."
        },
        {
          texto: "¿Qué movimiento del intestino delgado mezcla el quimo con las secreciones, sin hacerlo avanzar apenas?",
          opciones: [
            "Las contracciones segmentarias del músculo circular",
            "El peristaltismo",
            "Los movimientos de masa",
            "La relajación receptiva"
          ],
          correcta: 0,
          explicacion: "La segmentación mezcla y pone el quimo en contacto con la pared; es más frecuente en el duodeno que en el íleon. El peristaltismo hace avanzar el contenido."
        },
        {
          texto: "En un paciente con sección completa de los nervios simpáticos y parasimpáticos del intestino, ¿qué ocurre con la motilidad intestinal?",
          opciones: [
            "Sigue habiendo segmentación y peristaltismo gracias al sistema nervioso entérico",
            "Se paraliza por completo",
            "Solo queda el peristaltismo inverso",
            "Se convierte en movimientos de masa continuos"
          ],
          correcta: 0,
          explicacion: "El sistema nervioso entérico es el regulador principal de la secreción y la motilidad del intestino delgado. El autónomo solo lo modula (el parasimpático aumenta y el simpático disminuye)."
        },
        {
          texto: "¿Qué efecto tiene la secretina sobre la motilidad intestinal?",
          opciones: ["La disminuye", "La aumenta", "No la modifica", "Produce movimientos de masa"],
          correcta: 0,
          explicacion: "La gastrina y la CCK aumentan la motilidad intestinal; la secretina la disminuye."
        },
        {
          texto: "¿Qué hormona liberan las células enteroendocrinas del duodeno cuando llega quimo ácido?",
          opciones: ["Secretina", "Colecistocinina", "Gastrina", "Ghrelina"],
          correcta: 0,
          explicacion: "El ácido (H⁺) estimula a las células S a liberar secretina. Las grasas y los aminoácidos estimulan a las células I a liberar CCK."
        },
        {
          texto: "¿Dónde se producen la mayor parte de la digestión y la absorción en el intestino delgado?",
          opciones: ["En el duodeno y el yeyuno", "En el íleon", "En el ciego", "En el estómago"],
          correcta: 0,
          explicacion: "El duodeno (5 %) y el yeyuno (40 %) concentran la digestión y la absorción. El íleon (55 %) es clave para absorber la vitamina B12 y reabsorber las sales biliares."
        },
        {
          texto: "¿A dónde vierten la bilis y el jugo pancreático?",
          opciones: [
            "Al duodeno, a través del esfínter de Oddi",
            "Al estómago, a través del píloro",
            "Al yeyuno, por el conducto de Santorini",
            "Al íleon, por el colédoco"
          ],
          correcta: 0,
          explicacion: "El colédoco (hígado y vesícula) y el conducto de Wirsung (páncreas) se unen en la ampolla de Vater y desembocan en el duodeno por el esfínter de Oddi."
        },
        {
          texto: "¿Para qué sirven las células madre (stem) de las criptas intestinales?",
          opciones: [
            "Para renovar continuamente el resto de células del epitelio",
            "Para producir bicarbonato",
            "Para secretar enzimas pancreáticas",
            "Para absorber las grasas"
          ],
          correcta: 0,
          explicacion: "El epitelio intestinal se renueva muy rápido. Por eso los tratamientos que atacan a las células que se dividen, como la quimioterapia, dañan el intestino y producen diarrea y mucositis."
        },
        {
          texto: "¿Qué estímulos aumentan la secreción del jugo intestinal?",
          opciones: [
            "La distensión del intestino por el quimo y su acidez o hipertonicidad",
            "La activación del simpático",
            "El ayuno prolongado",
            "La somatostatina"
          ],
          correcta: 0,
          explicacion: "Los estímulos locales actúan a través del sistema nervioso entérico. El parasimpático aumenta la secreción y el simpático la reduce."
        },
        {
          texto: "¿Qué función tiene el moco del jugo intestinal?",
          opciones: [
            "Facilitar el tránsito y proteger la mucosa del ácido y la pepsina",
            "Digerir los disacáridos",
            "Absorber el agua",
            "Activar el tripsinógeno"
          ],
          correcta: 0,
          explicacion: "El jugo intestinal (1,5-2 L al día) es isotónico y alcalino. Su moco, que producen las células caliciformes y las glándulas de Brunner, lubrica y protege, y las lisozimas e inmunoglobulinas lo defienden de microbios."
        }
      ]
    },
    {
      id: "fp2-t46",
      tema: "tema-46",
      numero: "46",
      etiqueta: "Tema 46",
      titulo: "Páncreas exocrino",
      preguntas: [
        {
          texto: "¿Qué células del páncreas exocrino secretan el líquido rico en bicarbonato?",
          opciones: ["Las células ductales (y centroacinares)", "Las células acinares", "Las células β", "Las células δ"],
          correcta: 0,
          explicacion: "Las células acinares producen las enzimas; las ductales, el componente acuoso con bicarbonato que neutraliza el quimo ácido (jugo con pH de 8-8,5)."
        },
        {
          texto: "¿Por qué las enzimas del páncreas se secretan como zimógenos inactivos?",
          opciones: [
            "Para que no digieran el propio páncreas",
            "Porque necesitan el pH ácido del estómago para formarse",
            "Porque así viajan por la sangre",
            "Porque solo se activan en el colon"
          ],
          correcta: 0,
          explicacion: "El tripsinógeno, el quimotripsinógeno y otros se activan en el duodeno. Además, el páncreas tiene un inhibidor de la tripsina por si se activa antes de tiempo."
        },
        {
          texto: "¿Qué hormona estimula sobre todo la secreción pancreática de agua y bicarbonato?",
          opciones: [
            "La secretina, liberada por la llegada de ácido al duodeno",
            "La CCK, liberada por la llegada de grasas",
            "La gastrina, liberada por la distensión del estómago",
            "La insulina"
          ],
          correcta: 0,
          explicacion: "Secretina → células ductales → agua y bicarbonato. CCK → células acinares → enzimas. El GRP potencia el efecto de las dos."
        },
        {
          texto: "Tras una comida grasa, ¿qué hormona produce una gran liberación de enzimas pancreáticas?",
          opciones: ["La colecistocinina (CCK)", "La secretina", "La somatostatina", "El glucagón"],
          correcta: 0,
          explicacion: "Las grasas y los péptidos en el duodeno estimulan a las células I a liberar CCK, que actúa sobre el receptor CCK-A de los acinos. Además inhibe la secreción de ácido y la gastrina."
        },
        {
          texto: "¿En qué fase se produce la mayor parte de la secreción pancreática?",
          opciones: [
            "En la fase intestinal, alrededor de un 70 %",
            "En la fase cefálica, alrededor de un 70 %",
            "En la fase gástrica, alrededor de un 50 %",
            "Todas por igual"
          ],
          correcta: 0,
          explicacion: "Fase cefálica: 20 % (vago, rica en enzimas). Fase gástrica: 10 % (reflejo vagovagal y gastrina). Fase intestinal: 70 % (secretina y CCK)."
        },
        {
          texto: "Un paciente con cálculos biliares presenta dolor epigástrico intenso irradiado a la espalda, vómitos y amilasa y lipasa muy elevadas. ¿Qué sospechas?",
          opciones: [
            "Pancreatitis aguda: las enzimas se activan dentro del páncreas y lo digieren",
            "Úlcera gástrica perforada",
            "Colecistitis sin afectación pancreática",
            "Déficit de secretina"
          ],
          correcta: 0,
          explicacion: "La causa más frecuente es un cálculo biliar que obstruye la salida del conducto pancreático. Otras causas: alcohol, virus, traumatismos, hipercalcemia e hiperlipidemia."
        },
        {
          texto: "¿Qué enzima pancreática necesita a la colipasa para actuar?",
          opciones: ["La lipasa pancreática", "La amilasa", "La tripsina", "La ribonucleasa"],
          correcta: 0,
          explicacion: "La colipasa ancla la lipasa a las gotas de grasa emulsionadas por las sales biliares. Otras enzimas lipolíticas son la fosfolipasa A2 y la carboxilesterasa."
        },
        {
          texto: "Un paciente con pancreatitis crónica por alcohol tiene heces abundantes, pálidas, grasientas y malolientes, y pierde peso. ¿Qué le ocurre?",
          opciones: [
            "Esteatorrea por falta de enzimas pancreáticas, sobre todo de lipasa",
            "Diarrea por intolerancia a la lactosa",
            "Estreñimiento por falta de secretina",
            "Ictericia por hemólisis"
          ],
          correcta: 0,
          explicacion: "Sin lipasa pancreática no se digieren los triglicéridos y aparecen grasas en las heces. Se trata con enzimas pancreáticas por boca con las comidas."
        },
        {
          texto: "¿Dónde desemboca el conducto pancreático principal (de Wirsung)?",
          opciones: [
            "Se une al colédoco en la ampolla de Vater y llega al duodeno por el esfínter de Oddi",
            "Directamente en el estómago",
            "En la vesícula biliar",
            "En el yeyuno, lejos del colédoco"
          ],
          correcta: 0,
          explicacion: "Bilis y jugo pancreático llegan juntos al duodeno. El conducto de Santorini es un conducto accesorio que se usa si el principal se bloquea."
        },
        {
          texto: "¿Qué porcentaje del páncreas corresponde al páncreas endocrino?",
          opciones: ["Solo un 2-3 %", "Alrededor del 50 %", "Alrededor del 85 %", "El 100 %"],
          correcta: 0,
          explicacion: "Los islotes de Langerhans son solo un 2-3 % del órgano. Los acinos y sus conductos forman la mayor parte (alrededor del 85 %)."
        },
        {
          texto: "¿Qué efecto tiene el simpático sobre la secreción pancreática?",
          opciones: [
            "La inhibe mediante noradrenalina",
            "La estimula mediante acetilcolina",
            "La estimula mediante VIP",
            "No actúa sobre el páncreas exocrino"
          ],
          correcta: 0,
          explicacion: "El parasimpático (vago: acetilcolina y VIP) estimula la secreción pancreática; el simpático (noradrenalina) la inhibe."
        },
        {
          texto: "¿Qué tipo de jugo pancreático se secreta en la fase cefálica?",
          opciones: [
            "Poco volumen y rico en enzimas, por acción del vago",
            "Mucho volumen y rico en bicarbonato, por acción de la secretina",
            "Solo agua, sin enzimas",
            "No hay secreción pancreática en la fase cefálica"
          ],
          correcta: 0,
          explicacion: "La acetilcolina y el VIP del vago estimulan sobre todo a las células acinares. El gran volumen acuoso con bicarbonato llega en la fase intestinal con la secretina."
        }
      ]
    },
    {
      id: "fp2-t47",
      tema: "tema-47",
      numero: "47",
      etiqueta: "Tema 47",
      titulo: "Función digestiva del hígado",
      preguntas: [
        {
          texto: "¿Qué componente de la bilis emulsiona las grasas?",
          opciones: [
            "Las sales biliares, que son anfipáticas",
            "La bilirrubina conjugada",
            "Las enzimas lipolíticas de la bilis",
            "El bicarbonato"
          ],
          correcta: 0,
          explicacion: "Las sales biliares rompen las gotas de grasa en gotas pequeñas y forman micelas que llevan los lípidos hasta la mucosa. La bilis no tiene enzimas."
        },
        {
          texto: "¿De qué molécula derivan los ácidos biliares primarios?",
          opciones: ["Del colesterol", "De la bilirrubina", "De la glucosa", "De los aminoácidos aromáticos"],
          correcta: 0,
          explicacion: "El hígado fabrica los primarios (cólico y quenodesoxicólico) a partir del colesterol. Las bacterias del intestino los transforman en secundarios (desoxicólico, litocólico)."
        },
        {
          texto: "¿Qué es la circulación enterohepática de las sales biliares?",
          opciones: [
            "La reabsorción del 95 % de las sales biliares en el íleon y su vuelta al hígado por la vena porta",
            "El paso de la bilis desde el hígado a la vesícula",
            "La eliminación de todas las sales biliares por las heces en cada comida",
            "El paso de las sales biliares a la linfa"
          ],
          correcta: 0,
          explicacion: "Cada sal biliar se recicla unas 20 veces antes de eliminarse por las heces. Por eso una resección o enfermedad del íleon terminal hace que se pierdan sales biliares."
        },
        {
          texto: "A un paciente le han quitado el íleon terminal. ¿Qué problemas son esperables?",
          opciones: [
            "Pérdida de sales biliares con malabsorción de grasas y déficit de vitamina B12",
            "Déficit de hierro aislado",
            "Pérdida de la secreción de gastrina",
            "Hiperglucemia"
          ],
          correcta: 0,
          explicacion: "En el íleon se reabsorben activamente las sales biliares y se absorbe la B12 unida al factor intrínseco. Sin íleon se pierden ambas."
        },
        {
          texto: "¿Qué hormona contrae la vesícula biliar tras una comida grasa?",
          opciones: ["La colecistocinina (CCK)", "La secretina", "La gastrina", "La somatostatina"],
          correcta: 0,
          explicacion: "La CCK contrae la vesícula y relaja el esfínter de Oddi. La secretina estimula a los conductos biliares a secretar agua y bicarbonato."
        },
        {
          texto: "Un paciente con cálculos en la vesícula tiene dolor en el hipocondrio derecho que aparece una hora después de comer fritos. ¿Por qué aparece el dolor tras comidas grasas?",
          opciones: [
            "Porque las grasas liberan CCK, que contrae la vesícula contra el cálculo",
            "Porque las grasas estimulan la secreción de ácido",
            "Porque las grasas relajan la vesícula",
            "Porque las grasas aumentan la bilirrubina"
          ],
          correcta: 0,
          explicacion: "La vesícula se contrae con la CCK y suele vaciarse alrededor de una hora después de una comida grasa. Si hay un cálculo obstruyendo, aparece el cólico biliar."
        },
        {
          texto: "¿Qué hace la vesícula biliar con la bilis en los periodos entre comidas?",
          opciones: [
            "La almacena y la concentra entre 5 y 20 veces absorbiendo agua y electrolitos",
            "La diluye añadiendo agua",
            "La transforma en ácidos biliares secundarios",
            "La vierte continuamente al duodeno"
          ],
          correcta: 0,
          explicacion: "Con el esfínter de Oddi cerrado, la bilis se guarda en la vesícula (unos 60 mL) y se concentra. Por eso la bilis vesicular es más concentrada que la hepática."
        },
        {
          texto: "Paciente con ictericia, orina oscura y heces de color masilla (acólicas). ¿Qué tipo de problema sugiere?",
          opciones: [
            "Una obstrucción de la vía biliar: la bilirrubina conjugada no llega al intestino",
            "Una hemólisis acelerada",
            "Un exceso de sales biliares",
            "Un déficit de secretina"
          ],
          correcta: 0,
          explicacion: "Si la bilis no llega al intestino, las heces pierden color. La bilirrubina conjugada es hidrosoluble y se elimina por la orina, que se oscurece."
        },
        {
          texto: "¿Cuál de estas funciones NO realiza el hígado?",
          opciones: [
            "Sintetizar las inmunoglobulinas",
            "Sintetizar la mayoría de las proteínas plasmáticas",
            "Hacer gluconeogénesis",
            "Detoxificar fármacos y hormonas"
          ],
          correcta: 0,
          explicacion: "El hígado fabrica casi todas las proteínas plasmáticas (albúmina, factores de coagulación…), pero no las inmunoglobulinas, que producen las células plasmáticas."
        },
        {
          texto: "¿Por qué la bilis tiene un pH alcalino?",
          opciones: [
            "Porque los conductos biliares le añaden agua y bicarbonato, sobre todo con la secretina",
            "Porque contiene lipasa alcalina",
            "Porque contiene amoniaco",
            "Porque los hepatocitos secretan hidróxido sódico"
          ],
          correcta: 0,
          explicacion: "Las células de los conductos biliares añaden agua y bicarbonato, lo que ayuda a neutralizar el ácido que llega al duodeno. La secretina potencia esta secreción."
        },
        {
          texto: "¿Por qué el colesterol puede formar cálculos en la bilis?",
          opciones: [
            "Porque es poco soluble y, si hay demasiado respecto a las sales biliares, precipita",
            "Porque la bilis tiene enzimas que lo cristalizan",
            "Porque el colesterol se transforma en bilirrubina",
            "Porque la vesícula añade calcio al colesterol"
          ],
          correcta: 0,
          explicacion: "La bilis es una vía de eliminación del colesterol. El colesterol y la bilirrubina pueden precipitar y formar cálculos, sobre todo si la bilis está muy concentrada."
        },
        {
          texto: "¿Qué tipo de capilares tiene el hígado?",
          opciones: [
            "Sinusoides, muy permeables",
            "Continuos, como los del cerebro",
            "Fenestrados, como los del riñón",
            "No tiene capilares, solo canalículos"
          ],
          correcta: 0,
          explicacion: "Los sinusoides hepáticos son muy permeables, lo que facilita el intercambio con los hepatocitos. A diferencia de las nefronas, los lobulillos hepáticos sí se regeneran."
        }
      ]
    },
    {
      id: "fp2-t48",
      tema: "tema-48",
      numero: "48",
      etiqueta: "Tema 48",
      titulo: "Digestión y absorción intestinal",
      preguntas: [
        {
          texto: "¿Cómo entra la glucosa desde la luz intestinal al enterocito?",
          opciones: [
            "Por transporte activo secundario junto con el Na⁺ (SGLT1)",
            "Por GLUT4, que depende de la insulina",
            "Por difusión simple",
            "Por endocitosis"
          ],
          correcta: 0,
          explicacion: "Glucosa y galactosa entran junto con el sodio y salen a la sangre por GLUT2. La fructosa entra y sale por difusión facilitada. La absorción intestinal de glucosa no depende de la insulina."
        },
        {
          texto: "¿Por qué el suero oral de rehidratación lleva glucosa además de sodio?",
          opciones: [
            "Porque la glucosa y el sodio se absorben juntos y arrastran agua",
            "Porque la glucosa sustituye al sodio perdido",
            "Porque la glucosa frena la diarrea al estimular la insulina",
            "Porque la glucosa da sabor y no tiene más función"
          ],
          correcta: 0,
          explicacion: "El cotransporte sodio-glucosa sigue funcionando en muchas diarreas. Al absorberse los dos solutos, el agua los sigue por ósmosis."
        },
        {
          texto: "Una persona tiene hinchazón, gases y diarrea cada vez que toma leche. ¿Qué le falta?",
          opciones: [
            "Lactasa del borde en cepillo",
            "Amilasa pancreática",
            "Lipasa pancreática",
            "Factor intrínseco"
          ],
          correcta: 0,
          explicacion: "Sin lactasa, la lactosa no se divide en glucosa y galactosa, llega al colon, retiene agua y las bacterias la fermentan (gases)."
        },
        {
          texto: "¿Dónde empieza la digestión de las proteínas y qué enzima la inicia?",
          opciones: [
            "En el estómago, con la pepsina",
            "En la boca, con la ptialina",
            "En el duodeno, con la tripsina",
            "En el colon, con las bacterias"
          ],
          correcta: 0,
          explicacion: "El HCl y la pepsina digieren el 10-15 % de las proteínas. Después actúan las proteasas pancreáticas y, al final, las peptidasas del borde en cepillo y las de dentro del enterocito."
        },
        {
          texto: "¿Cómo llegan a la sangre los lípidos absorbidos?",
          opciones: [
            "Se empaquetan en quilomicrones, pasan a la linfa y llegan a la sangre por la vena subclavia",
            "Pasan directamente a la vena porta como ácidos grasos libres",
            "Se absorben unidos a la albúmina",
            "Se transforman en glucosa en el enterocito"
          ],
          correcta: 0,
          explicacion: "En el enterocito se vuelven a formar triglicéridos y se empaquetan en quilomicrones. Estos van por los vasos linfáticos y el conducto torácico hasta la vena subclavia."
        },
        {
          texto: "Un paciente con obstrucción de la vía biliar puede tener déficit de…",
          opciones: [
            "Vitaminas A, D, E y K, por mala absorción de las grasas",
            "Vitamina C",
            "Vitamina B12 exclusivamente",
            "Ácido fólico exclusivamente"
          ],
          correcta: 0,
          explicacion: "Sin sales biliares no se forman micelas y no se absorben bien las grasas ni las vitaminas liposolubles. El déficit de vitamina K puede alterar la coagulación."
        },
        {
          texto: "¿Qué es la esteatorrea?",
          opciones: [
            "La presencia de grasa en las heces por mala digestión o absorción de los lípidos",
            "La presencia de sangre en las heces",
            "La diarrea por exceso de lactosa",
            "La presencia de proteínas en la orina"
          ],
          correcta: 0,
          explicacion: "Aparece si faltan sales biliares, enzimas pancreáticas (pancreatitis) o si la mucosa intestinal está lesionada. Las heces son grasientas y hay pérdida de peso."
        },
        {
          texto: "¿Por qué el almidón no se digiere del todo con la amilasa?",
          opciones: [
            "Porque la amilasa no corta los enlaces α-1,6 de las ramificaciones ni los α-1,4 terminales, y quedan dextrinas, maltosa y maltotriosa",
            "Porque la amilasa solo funciona a pH ácido",
            "Porque la amilasa solo corta los enlaces β",
            "Porque la amilasa necesita sales biliares"
          ],
          correcta: 0,
          explicacion: "La amilasa salival (40 %) y la pancreática (60 %) rompen el almidón en fragmentos. Las oligosacaridasas y disacaridasas del borde en cepillo terminan el trabajo hasta monosacáridos."
        },
        {
          texto: "Un niño de una zona pobre con una dieta casi sin proteínas tiene edemas, abdomen hinchado, retraso del crecimiento y atrofia muscular. ¿Qué tiene?",
          opciones: [
            "Kwashiorkor: el déficit de proteínas produce hipoproteinemia y edemas",
            "Raquitismo por falta de vitamina D",
            "Escorbuto por falta de vitamina C",
            "Intolerancia a la lactosa"
          ],
          correcta: 0,
          explicacion: "Con pocas proteínas en la dieta el hígado fabrica poca albúmina. Baja la presión oncótica del plasma y el líquido sale a los tejidos (edemas)."
        },
        {
          texto: "¿Cómo se absorbe el agua en el intestino?",
          opciones: [
            "De forma pasiva, siguiendo a los nutrientes y electrolitos que se absorben",
            "Por una bomba de agua que consume ATP",
            "Solo en el colon",
            "Por endocitosis"
          ],
          correcta: 0,
          explicacion: "El agua se mueve por ósmosis: cuando se absorbe un soluto, el agua lo acompaña. La mayor parte se absorbe en el intestino delgado y el colon recupera otra parte."
        },
        {
          texto: "¿Qué ocurre con una pequeña cantidad de péptidos que se absorben enteros?",
          opciones: [
            "Pueden provocar respuestas alérgicas",
            "Se transforman en glucosa",
            "Se eliminan intactos por la orina",
            "Forman los quilomicrones"
          ],
          correcta: 0,
          explicacion: "Casi todas las proteínas se absorben como aminoácidos. Algunos péptidos pasan enteros y el sistema inmunitario puede reconocerlos, lo que explica algunas alergias alimentarias."
        },
        {
          texto: "¿Qué efecto tiene la fibra de la dieta?",
          opciones: [
            "Aumenta la saciedad y el crecimiento bacteriano del colon y disminuye la absorción de colesterol",
            "Se digiere en el intestino delgado y aporta glucosa",
            "Aumenta la absorción de grasas",
            "Disminuye el volumen de las heces"
          ],
          correcta: 0,
          explicacion: "La fibra (celulosa, lignina, pectina) no se digiere. Las bacterias del colon la fermentan; además se une a los ácidos biliares y reduce la absorción de grasas y colesterol."
        }
      ]
    },
    {
      id: "fp2-t49",
      tema: "tema-49",
      numero: "49",
      etiqueta: "Tema 49",
      titulo: "Intestino grueso y defecación",
      preguntas: [
        {
          texto: "¿Qué función tiene la microbiota del colon?",
          opciones: [
            "Fermentar la fibra, producir vitamina K y algunas del grupo B y transformar la bilirrubina",
            "Digerir las proteínas de la dieta",
            "Absorber la glucosa",
            "Producir sales biliares primarias"
          ],
          correcta: 0,
          explicacion: "Las bacterias producen ácidos grasos de cadena corta, vitamina K y vitaminas B y convierten la bilirrubina en urobilinógenos. Ojo: la B12 que fabrican en el colon apenas se absorbe, porque se absorbe en el íleon."
        },
        {
          texto: "Un paciente que lleva semanas con antibióticos de amplio espectro presenta sangrado de encías y un tiempo de coagulación alargado. ¿Qué mecanismo puede explicarlo?",
          opciones: [
            "Los antibióticos reducen la microbiota que produce vitamina K, necesaria para varios factores de coagulación",
            "Los antibióticos destruyen las plaquetas",
            "Los antibióticos aumentan la absorción de vitamina K",
            "Los antibióticos estimulan la fibrinólisis"
          ],
          correcta: 0,
          explicacion: "Parte de la vitamina K procede de las bacterias del colon. Si se reduce la microbiota y la dieta es pobre, puede faltar vitamina K para fabricar los factores de coagulación."
        },
        {
          texto: "¿En qué se diferencia el colon del intestino delgado?",
          opciones: [
            "No tiene vellosidades, no absorbe nutrientes y secreta K⁺ de forma activa",
            "Tiene más vellosidades y absorbe la mayor parte de los nutrientes",
            "Tiene más superficie de absorción",
            "Secreta enzimas digestivas"
          ],
          correcta: 0,
          explicacion: "El colon mide 1,5-2 m, tiene unos 25 m² de superficie y absorbe agua (400-1000 mL al día) y NaCl. Es clave para conservar el agua del cuerpo."
        },
        {
          texto: "Un paciente con diarrea intensa durante varios días presenta debilidad muscular y arritmias. ¿Qué alteración electrolítica es probable?",
          opciones: [
            "Hipopotasemia, porque las heces líquidas arrastran el K⁺ y el bicarbonato que secreta el colon",
            "Hiperpotasemia por reabsorción de K⁺ en el colon",
            "Hipercalcemia",
            "Hipernatremia por pérdida de sodio"
          ],
          correcta: 0,
          explicacion: "La secreción del colon es rica en K⁺ y HCO₃⁻. En la diarrea se pierden en exceso: hipopotasemia (debilidad, arritmias) y acidosis metabólica."
        },
        {
          texto: "¿Qué movimiento del colon empuja el contenido hacia el recto y provoca el deseo de defecar?",
          opciones: [
            "Los movimientos de masa, sobre todo después de las comidas (reflejo gastrocólico)",
            "Las contracciones haustrales",
            "El peristaltismo inverso",
            "La segmentación del íleon"
          ],
          correcta: 0,
          explicacion: "Los movimientos de masa son contracciones fuertes que recorren largas distancias, 2-5 veces al día. Las haustraciones mezclan y favorecen la absorción."
        },
        {
          texto: "¿Por qué muchos bebés y niños necesitan ir al baño justo después de comer?",
          opciones: [
            "Por el reflejo gastrocólico: la llegada de comida al estómago provoca movimientos de masa en el colon",
            "Porque la comida pasa directamente del estómago al recto",
            "Porque la gastrina relaja el esfínter externo",
            "Porque el simpático se activa al comer"
          ],
          correcta: 0,
          explicacion: "La distensión del estómago y el duodeno activa reflejos largos vagales que estimulan los movimientos de masa. El contenido llega al recto y aparece el deseo de defecar."
        },
        {
          texto: "¿Qué esfínter anal se puede controlar de forma voluntaria?",
          opciones: ["El externo", "El interno", "Los dos", "Ninguno"],
          correcta: 0,
          explicacion: "El esfínter interno es involuntario y se relaja cuando se distiende el recto. El externo es voluntario y permite retrasar la defecación."
        },
        {
          texto: "¿Por qué se recomienda que un paciente con un infarto reciente no haga esfuerzos al defecar?",
          opciones: [
            "Porque la maniobra de Valsalva aumenta mucho la presión intratorácica e intraabdominal y altera el retorno venoso y la presión arterial",
            "Porque la defecación libera adrenalina en grandes cantidades",
            "Porque el esfínter externo comprime las arterias coronarias",
            "Porque defecar baja la glucemia"
          ],
          correcta: 0,
          explicacion: "En la defecación se hace una espiración forzada con la glotis cerrada (Valsalva). Ese cambio brusco de presiones puede ser peligroso en cardiópatas; por eso se usan laxantes suaves."
        },
        {
          texto: "¿Qué sistema activa la motilidad del colon y cuál la inhibe?",
          opciones: [
            "La activan el parasimpático, la gastrina y la CCK; la inhiben el simpático, la secretina y los opiáceos",
            "La activa el simpático; la inhibe el parasimpático",
            "La activa la secretina; la inhibe la CCK",
            "La activan los opiáceos; la inhibe la acetilcolina"
          ],
          correcta: 0,
          explicacion: "Por eso los pacientes tratados con morfina u otros opiáceos se estriñen con frecuencia y necesitan laxantes."
        },
        {
          texto: "¿De qué depende sobre todo el tiempo que el contenido permanece en el colon?",
          opciones: [
            "De la cantidad de fibra de la dieta",
            "De la cantidad de proteínas",
            "De la bilirrubina",
            "De la insulina"
          ],
          correcta: 0,
          explicacion: "Las heces suelen expulsarse en un máximo de 72 h, aunque parte puede quedarse una semana o más. La fibra aumenta el volumen y acelera el tránsito."
        },
        {
          texto: "¿Qué componente forma la mayor parte de las heces?",
          opciones: [
            "El agua, alrededor de tres cuartas partes",
            "Las bacterias, alrededor del 75 %",
            "Las grasas, alrededor del 50 %",
            "La fibra, alrededor del 90 %"
          ],
          correcta: 0,
          explicacion: "Unos ¾ son agua. Del ¼ sólido, alrededor de un 30 % son bacterias, un 10-20 % sustancias inorgánicas, un 10-20 % grasas, un 2-3 % proteínas y el resto fibra no digerible."
        },
        {
          texto: "Tras la defecación, ¿qué ocurre en el reflejo de cierre?",
          opciones: [
            "Se contraen los esfínteres interno y externo y el elevador del ano y se relaja la musculatura rectal",
            "Se relajan los dos esfínteres de forma mantenida",
            "Se contrae el recto y se abre el esfínter interno",
            "Se cierra la glotis y aumenta la presión abdominal"
          ],
          correcta: 0,
          explicacion: "Cuando cesa el estímulo de los receptores del recto, el canal anal se cierra, la presión abdominal vuelve a la normalidad y se reabre la glotis."
        }
      ]
    }
  ]
};
