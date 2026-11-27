// Fisiología · Parcial 2 · Bloque: Sistema endocrino (temas 33-41). Un test de 12 preguntas por tema.
// "correcta" es la posición de la respuesta correcta (0 = primera opción); el motor baraja las opciones.
const fisioP2Endocrino = {
  titulo: "Sistema endocrino",
  tests: [
    {
      id: "fp2-t33",
      tema: "tema-33",
      numero: "33",
      etiqueta: "Tema 33",
      titulo: "Introducción al sistema endocrino",
      preguntas: [
        {
          texto: "Una sustancia liberada al líquido extracelular que actúa sobre células vecinas sin pasar a la circulación tiene una acción…",
          opciones: ["Paracrina", "Endocrina", "Autocrina", "Neurocrina"],
          correcta: 0,
          explicacion: "Endocrina: viaja por la sangre a distancia. Paracrina: actúa sobre células cercanas. Autocrina: actúa sobre la misma célula que la secreta."
        },
        {
          texto: "Un paciente tiene niveles altos de una hormona en sangre pero presenta los síntomas de su déficit. ¿Qué explicación es la más probable?",
          opciones: [
            "Un fallo de los receptores de las células diana: sin receptor funcional la hormona no actúa",
            "Que la hormona se elimina demasiado rápido por el riñón",
            "Una retroalimentación positiva que inhibe la glándula",
            "Que la hormona no puede viajar por la sangre sin transportador"
          ],
          correcta: 0,
          explicacion: "El receptor es tan necesario como la hormona: perderlo produce los mismos síntomas que la falta de hormona. Es lo que pasa, por ejemplo, en la resistencia a la insulina."
        },
        {
          texto: "¿Qué característica diferencia la comunicación endocrina de la nerviosa?",
          opciones: [
            "La endocrina es más lenta (minutos), difusa y prolongada",
            "La endocrina es más rápida y precisa",
            "La endocrina viaja por nervios específicos",
            "La endocrina tiene efectos breves que desaparecen en segundos"
          ],
          correcta: 0,
          explicacion: "El sistema nervioso usa vías específicas y su respuesta es inmediata, localizada y breve. El endocrino usa la sangre y su respuesta es retardada, difusa y duradera."
        },
        {
          texto: "En el eje hipotálamo-hipófisis-suprarrenal, ¿qué hace el cortisol sobre la CRH y la ACTH?",
          opciones: [
            "Las inhibe (retroalimentación negativa)",
            "Las estimula (retroalimentación positiva)",
            "Inhibe la ACTH pero estimula la CRH",
            "No las modifica: el cortisol solo actúa en los tejidos"
          ],
          correcta: 0,
          explicacion: "La hormona final del eje inhibe las hormonas que la estimularon, en el hipotálamo y en la hipófisis. Así se mantiene estable su nivel."
        },
        {
          texto: "¿Cuál de estos es un ejemplo de retroalimentación positiva?",
          opciones: [
            "La liberación de oxitocina durante el parto por la presión de la cabeza del bebé sobre el cuello del útero",
            "La inhibición de la insulina cuando baja la glucemia",
            "La inhibición de la TSH por la T4",
            "La inhibición de la LH por la testosterona"
          ],
          correcta: 0,
          explicacion: "En el parto, más presión libera más oxitocina, que da más contracciones y más presión. El ciclo se detiene al salir el bebé. La retroalimentación negativa es la más habitual."
        },
        {
          texto: "Un culturista se inyecta testosterona durante meses. ¿Qué le puede pasar en los testículos?",
          opciones: [
            "Atrofia e infertilidad, porque la testosterona exógena inhibe la GnRH, la LH y la FSH",
            "Hipertrofia, porque la testosterona estimula su crecimiento",
            "Nada, porque la testosterona exógena no actúa sobre el eje",
            "Más producción de espermatozoides"
          ],
          correcta: 0,
          explicacion: "El exceso de testosterona frena el hipotálamo y la hipófisis. Sin LH y FSH, el testículo deja de recibir su estímulo trófico: se atrofia (hipogonadismo) y produce menos espermatozoides."
        },
        {
          texto: "Sobre las hormonas esteroideas, ¿qué es correcto?",
          opciones: [
            "Derivan del colesterol, viajan con transportador y su receptor suele estar dentro de la célula",
            "Se almacenan en vesículas ya fabricadas y se liberan en segundos",
            "Son hidrosolubles y viajan libres por la sangre",
            "Derivan de la tirosina y actúan sobre receptores de membrana"
          ],
          correcta: 0,
          explicacion: "Las esteroideas (suprarrenales, gonadales, vitamina D) se sintetizan al momento a partir del colesterol, por eso responden más lento. Las peptídicas se guardan en vesículas, viajan libres y usan receptores de membrana."
        },
        {
          texto: "¿De qué aminoácido derivan las catecolaminas y las hormonas tiroideas?",
          opciones: ["Tirosina", "Triptófano", "Arginina", "Glutamato"],
          correcta: 0,
          explicacion: "La tirosina da lugar a las hormonas tiroideas y a las catecolaminas (adrenalina, noradrenalina, dopamina). La melatonina deriva del triptófano."
        },
        {
          texto: "El cortisol es máximo al despertar y mínimo antes de dormir. ¿Qué tipo de ritmo sigue y quién lo controla?",
          opciones: [
            "Circadiano, controlado por el núcleo supraquiasmático",
            "Pulsátil, controlado por la hipófisis",
            "Episódico, ligado a las comidas",
            "Mensual, ligado al ciclo ovárico"
          ],
          correcta: 0,
          explicacion: "El núcleo supraquiasmático, sincronizado con la luz que llega desde la retina, marca el ritmo de unas 24 horas. La insulina es episódica (comidas) y la LH es pulsátil."
        },
        {
          texto: "Analítica: T4 baja, TSH alta y TRH alta. ¿Dónde está el problema?",
          opciones: [
            "En la tiroides: hipotiroidismo primario",
            "En la hipófisis: hipotiroidismo secundario",
            "En el hipotálamo: hipotiroidismo terciario",
            "Es un hipertiroidismo primario"
          ],
          correcta: 0,
          explicacion: "Si falla la glándula, la T4 baja y deja de frenar el eje: TSH y TRH suben. Si fallara la hipófisis, la TSH estaría baja; si fallara el hipotálamo, las tres estarían bajas."
        },
        {
          texto: "Analítica: T4 alta, TSH alta y TRH baja. ¿Cuál es el origen más probable?",
          opciones: [
            "Un tumor de hipófisis que secreta TSH (hiperfunción secundaria)",
            "Una hiperfunción primaria de la tiroides",
            "Un hipotiroidismo primario",
            "Una hiperfunción del hipotálamo"
          ],
          correcta: 0,
          explicacion: "La hipófisis secreta TSH de forma autónoma y sube la T4; la T4 alta frena el hipotálamo y baja la TRH. En la hiperfunción primaria la TSH estaría baja."
        },
        {
          texto: "¿Qué hormona produce el corazón y para qué sirve?",
          opciones: [
            "El péptido natriurético auricular, que ayuda a eliminar sodio",
            "La eritropoyetina, que estimula la formación de eritrocitos",
            "La renina, que activa la angiotensina",
            "La leptina, que reduce el apetito"
          ],
          correcta: 0,
          explicacion: "Varios órganos no glandulares producen hormonas: corazón (péptido natriurético), riñón (eritropoyetina), hígado (IGF-I), tejido adiposo (leptina, adiponectina) y tubo digestivo (gastrina, secretina, CCK)."
        }
      ]
    },
    {
      id: "fp2-t34",
      tema: "tema-34",
      numero: "34",
      etiqueta: "Tema 34",
      titulo: "Páncreas endocrino y balance energético",
      preguntas: [
        {
          texto: "¿Qué células de los islotes de Langerhans son más numerosas y qué secretan?",
          opciones: ["Las β, insulina", "Las α, glucagón", "Las δ, somatostatina", "Las α, insulina"],
          correcta: 0,
          explicacion: "Las β (insulina) son las más abundantes. Las α secretan glucagón y las δ somatostatina, que inhibe de forma paracrina a la insulina y al glucagón."
        },
        {
          texto: "¿Cómo hace la insulina que el músculo y el tejido adiposo capten glucosa?",
          opciones: [
            "Hace que las vesículas con GLUT4 se fusionen con la membrana",
            "Abre canales de glucosa dependientes de voltaje",
            "Fabrica GLUT2 nuevos en el núcleo",
            "Activa una bomba de sodio-glucosa en la membrana"
          ],
          correcta: 0,
          explicacion: "La insulina se une a su receptor de membrana y lleva los GLUT4 a la superficie celular. Sin insulina, la glucosa intracelular de estas células es casi nula aunque haya hiperglucemia."
        },
        {
          texto: "¿Cuál de estos procesos NO estimula la insulina?",
          opciones: ["La gluconeogénesis hepática", "La glucogenogénesis", "La lipogénesis", "La síntesis de proteínas en el músculo"],
          correcta: 0,
          explicacion: "La insulina es anabólica: guarda glucosa como glucógeno, grasa como triglicéridos y forma proteínas. La gluconeogénesis la inhibe; la estimulan el glucagón y otras hormonas contrarreguladoras."
        },
        {
          texto: "¿Por qué la glucosa tomada por boca provoca más secreción de insulina que la misma cantidad por vía intravenosa?",
          opciones: [
            "Porque el intestino libera incretinas (GLP-1, GIP) que potencian la secreción de insulina",
            "Porque el simpático se activa al comer y estimula la insulina",
            "Porque la somatostatina intestinal estimula a las células β",
            "Porque la glucosa oral se absorbe más rápido que la intravenosa"
          ],
          correcta: 0,
          explicacion: "Las incretinas avisan al páncreas de que llega comida. El parasimpático también estimula la insulina; el simpático y la somatostatina la inhiben."
        },
        {
          texto: "Un niño de 8 años llega con poliuria, polidipsia, polifagia, pérdida de peso y aliento afrutado. ¿Qué esperas encontrar en la analítica?",
          opciones: [
            "Hiperglucemia, insulina baja o indetectable y cuerpos cetónicos",
            "Hiperglucemia con hiperinsulinemia",
            "Hipoglucemia con insulina alta",
            "Glucemia normal y orina hipoosmótica"
          ],
          correcta: 0,
          explicacion: "Es una diabetes tipo 1: destrucción autoinmune de las células β. Sin insulina, las células usan grasa (pérdida de peso y cetonas) y proteínas. Un paciente tipo 1 sin tratar nunca tendría hiperinsulinemia."
        },
        {
          texto: "Paciente de 55 años, obeso, con glucemia en ayunas de 140 mg/dl e insulina en sangre elevada. ¿Cuál es el mecanismo principal?",
          opciones: [
            "Resistencia a la insulina: el páncreas secreta, pero las células no responden",
            "Destrucción autoinmune de las células β",
            "Déficit de ADH",
            "Exceso de somatostatina pancreática"
          ],
          correcta: 0,
          explicacion: "En la diabetes tipo 2 hay hiperglucemia con hiperinsulinemia: como la glucosa no baja, el páncreas sigue estimulado. El tratamiento busca aumentar la sensibilidad a la insulina, y los hábitos saludables son lo más eficaz."
        },
        {
          texto: "Una persona con glucemia en ayunas de 112 mg/dl se encuentra en una situación de…",
          opciones: ["Prediabetes (100-125 mg/dl)", "Normoglucemia (60-125 mg/dl)", "Diabetes establecida", "Hipoglucemia"],
          correcta: 0,
          explicacion: "En ayunas lo normal es menos de 100 mg/dl. Entre 100 y 125 se habla de prediabetes y por encima de 125 de diabetes."
        },
        {
          texto: "¿En qué se diferencia la poliuria de la diabetes mellitus de la de la diabetes insípida?",
          opciones: [
            "En la mellitus la orina lleva glucosa y es más osmótica; en la insípida es diluida por falta de ADH",
            "En la mellitus la orina es diluida por falta de ADH; en la insípida lleva glucosa",
            "En las dos la orina es igual de hipoosmótica",
            "La insípida se debe a resistencia a la insulina"
          ],
          correcta: 0,
          explicacion: "En la mellitus la glucosa supera la capacidad de reabsorción del riñón y arrastra agua (diuresis osmótica). En la insípida falta ADH, el colector no reabsorbe agua y la orina es abundante e hipoosmótica."
        },
        {
          texto: "¿Por qué el glucagón actúa sobre todo en el hígado?",
          opciones: [
            "Porque la sangre del páncreas llega primero al hígado por la circulación portal",
            "Porque el músculo no tiene glucógeno",
            "Porque solo el hígado tiene receptores de membrana",
            "Porque el glucagón no puede viajar por la circulación general"
          ],
          correcta: 0,
          explicacion: "El glucagón llega por la vena porta al hígado, donde activa la glucogenólisis y la gluconeogénesis. Si la hipoglucemia se alarga, estimula también la formación de cuerpos cetónicos para el cerebro."
        },
        {
          texto: "Un paciente diabético tipo 1 se pone la insulina y después sale a correr sin comer. ¿Qué hormonas contrarreguladoras intentarán evitar la hipoglucemia?",
          opciones: [
            "Glucagón, adrenalina, cortisol y GH",
            "Insulina, somatostatina y leptina",
            "Solo la adrenalina",
            "Leptina y adiponectina"
          ],
          correcta: 0,
          explicacion: "Para bajar la glucemia solo existe la insulina, pero para subirla hay varias hormonas hiperglucemiantes que se potencian entre sí. El glucagón actúa a diario y las demás en situaciones de necesidad extra."
        },
        {
          texto: "Una atleta pierde mucho peso y deja de tener la regla. ¿Qué mecanismo hormonal lo explica?",
          opciones: [
            "Con poca grasa baja la leptina, que es un estímulo para la GnRH, y se frena el eje gonadal",
            "El exceso de leptina inhibe directamente el ovario",
            "La ghrelina alta bloquea los receptores de estrógenos",
            "La insulina alta inhibe la LH"
          ],
          correcta: 0,
          explicacion: "La leptina informa de las reservas grasas. Sin reservas, el cuerpo no está preparado para un embarazo: baja la GnRH y aparece la amenorrea. Por la misma razón, las niñas con más peso suelen empezar antes la pubertad."
        },
        {
          texto: "¿Por qué muchas personas obesas tienen hambre a pesar de tener la leptina muy alta?",
          opciones: [
            "Porque desarrollan resistencia a la leptina: bajan sus receptores, incluso en el hipotálamo",
            "Porque la leptina en exceso estimula el apetito",
            "Porque el tejido adiposo deja de producir leptina",
            "Porque la ghrelina inhibe la producción de leptina"
          ],
          correcta: 0,
          explicacion: "Con hiperleptinemia, los receptores disminuyen y el cerebro deja de recibir la señal de saciedad. Además baja la adiponectina, lo que favorece la resistencia a la insulina (relación con la diabetes tipo 2 y el síndrome metabólico)."
        }
      ]
    },
    {
      id: "fp2-t35",
      tema: "tema-35",
      numero: "35",
      etiqueta: "Tema 35",
      titulo: "Control hormonal del calcio",
      preguntas: [
        {
          texto: "Una paciente operada de tiroides ayer nota hormigueo en los labios y, al inflar el manguito de tensión, se le contrae la mano en espasmo. ¿Qué sospechas?",
          opciones: [
            "Hipocalcemia por lesión de las paratiroides (signo de Trousseau)",
            "Hipercalcemia por exceso de PTH",
            "Hiperpotasemia por la cirugía",
            "Una lesión del nervio cubital por el manguito"
          ],
          correcta: 0,
          explicacion: "Las paratiroides están detrás de la tiroides y pueden dañarse en la cirugía. Sin PTH baja el calcio y aumenta la excitabilidad neuromuscular: hormigueos, tetania, convulsiones."
        },
        {
          texto: "¿Por qué la hipocalcemia produce tetania?",
          opciones: [
            "Porque aumenta la excitabilidad de las células nerviosas y musculares",
            "Porque disminuye la excitabilidad y el músculo se queda contraído",
            "Porque el calcio bajo impide la relajación del músculo liso",
            "Porque provoca hiperfosfatemia que bloquea la placa motora"
          ],
          correcta: 0,
          explicacion: "Con poco calcio extracelular las membranas se excitan con más facilidad y aparecen espasmos. La hipercalcemia hace lo contrario: enlentece las respuestas nerviosas."
        },
        {
          texto: "¿Cuál es la acción principal de la PTH?",
          opciones: [
            "Estimular la resorción ósea por los osteoclastos para liberar calcio a la sangre",
            "Aumentar directamente la absorción intestinal de calcio",
            "Depositar calcio en el hueso",
            "Aumentar la excreción renal de calcio"
          ],
          correcta: 0,
          explicacion: "La PTH saca calcio del hueso, aumenta su reabsorción en el riñón y activa la vitamina D. La absorción intestinal la aumenta solo de forma indirecta, a través del calcitriol."
        },
        {
          texto: "En el riñón, la PTH…",
          opciones: [
            "Aumenta la reabsorción de calcio y la eliminación de fosfato",
            "Aumenta la eliminación de calcio y la reabsorción de fosfato",
            "Aumenta la reabsorción de los dos",
            "No actúa sobre el riñón"
          ],
          correcta: 0,
          explicacion: "La PTH disminuye la calciuria y aumenta la fosfaturia. Además estimula la 1-α-hidroxilasa renal, que forma la vitamina D activa."
        },
        {
          texto: "¿Qué consecuencias tendría un hiperparatiroidismo mantenido?",
          opciones: [
            "Hipercalcemia, osteoporosis y más vitamina D activa",
            "Hipocalcemia, tetania y huesos más densos",
            "Hiperfosfatemia y raquitismo",
            "Calcemia normal porque la calcitonina lo compensa todo"
          ],
          correcta: 0,
          explicacion: "El exceso de PTH saca calcio del hueso (osteoporosis), sube el calcio en sangre y activa más vitamina D. La hipercalcemia puede dar cálculos renales, poliuria y deshidratación."
        },
        {
          texto: "¿Dónde se forma la vitamina D activa (calcitriol)?",
          opciones: [
            "En el riñón, por hidroxilación en el carbono 1, estimulada por la PTH",
            "En la piel, por los rayos UV",
            "En el hígado, por hidroxilación en el carbono 25",
            "En el intestino, al absorberla de la dieta"
          ],
          correcta: 0,
          explicacion: "Piel (7-dehidrocolesterol → colecalciferol con UV) → hígado (25-hidroxivitamina D, la reserva circulante) → riñón (1,25-dihidroxivitamina D, la forma activa)."
        },
        {
          texto: "Un paciente con insuficiencia renal crónica tiende a la hipocalcemia. ¿Por qué?",
          opciones: [
            "Porque el riñón dañado no hace la segunda hidroxilación y falta vitamina D activa",
            "Porque el riñón dañado produce demasiada calcitonina",
            "Porque no se forma 25-hidroxivitamina D",
            "Porque el riñón elimina toda la PTH"
          ],
          correcta: 0,
          explicacion: "Sin la 1-α-hidroxilación renal no hay calcitriol, y sin calcitriol se absorbe poco calcio en el intestino. Por eso a estos pacientes se les da la forma ya activa."
        },
        {
          texto: "¿Cuál es el efecto principal de la vitamina D activa?",
          opciones: [
            "Aumentar la absorción intestinal de calcio y fosfato",
            "Aumentar la excreción renal de calcio",
            "Estimular la secreción de PTH",
            "Inhibir la mineralización del hueso"
          ],
          correcta: 0,
          explicacion: "El calcitriol actúa sobre todo en el intestino y también aumenta la reabsorción renal de calcio. Además frena la secreción de PTH (retroalimentación negativa)."
        },
        {
          texto: "Un niño con piernas arqueadas y deformidades en el tórax, que apenas sale a la calle y toma poca leche, probablemente tiene…",
          opciones: [
            "Raquitismo por déficit de vitamina D",
            "Osteomalacia por exceso de calcitonina",
            "Osteoporosis por exceso de PTH",
            "Acromegalia"
          ],
          correcta: 0,
          explicacion: "Sin vitamina D no se absorben bien el calcio y el fosfato y el hueso en crecimiento no se mineraliza. En niños se llama raquitismo y en adultos osteomalacia."
        },
        {
          texto: "¿Qué células producen la calcitonina y cuándo se secreta?",
          opciones: [
            "Las células C parafoliculares de la tiroides, cuando sube el calcio",
            "Las paratiroides, cuando baja el calcio",
            "Las células foliculares de la tiroides, cuando baja el calcio",
            "El riñón, cuando sube el fosfato"
          ],
          correcta: 0,
          explicacion: "La calcitonina hace lo contrario que la PTH: deposita calcio en el hueso y aumenta su excreción renal. Fisiológicamente tiene poca importancia."
        },
        {
          texto: "¿Por qué se añade EDTA a algunos tubos de análisis de sangre?",
          opciones: [
            "Porque atrapa el calcio y así la sangre no coagula",
            "Porque aporta calcio para que la sangre coagule",
            "Porque destruye las plaquetas",
            "Porque inactiva la PTH de la muestra"
          ],
          correcta: 0,
          explicacion: "El calcio extracelular es necesario para la coagulación. El EDTA es un quelante: retiene el calcio y la muestra no coagula."
        },
        {
          texto: "Un paciente con hipercalcemia grave puede presentar…",
          opciones: [
            "Cálculos renales, poliuria, deshidratación y respuestas nerviosas lentas",
            "Tetania y convulsiones",
            "Signo de Trousseau positivo",
            "Aumento de la excitabilidad neuromuscular"
          ],
          correcta: 0,
          explicacion: "La hipercalcemia (más de 10,5 mg/dl) enlentece las respuestas nerviosas y favorece cálculos y poliuria. La tetania y el signo de Trousseau son de la hipocalcemia (menos de 8,5 mg/dl)."
        }
      ]
    },
    {
      id: "fp2-t36",
      tema: "tema-36",
      numero: "36",
      etiqueta: "Tema 36",
      titulo: "Hipotálamo e hipófisis",
      preguntas: [
        {
          texto: "¿Qué hormonas libera la neurohipófisis y dónde se fabrican?",
          opciones: [
            "ADH y oxitocina, fabricadas en neuronas magnocelulares del hipotálamo",
            "ADH y oxitocina, fabricadas en la propia neurohipófisis",
            "GH y prolactina, fabricadas en el hipotálamo",
            "TSH y ACTH, fabricadas en neuronas parvocelulares"
          ],
          correcta: 0,
          explicacion: "La neurohipófisis solo almacena y libera. Las neuronas magnocelulares tienen axones largos que llegan hasta ella y llevan la ADH y la oxitocina ya fabricadas."
        },
        {
          texto: "¿Para qué sirve el sistema porta hipotálamo-hipofisario?",
          opciones: [
            "Para llevar las hormonas liberadoras de las neuronas parvocelulares directamente a la adenohipófisis",
            "Para llevar la ADH a la sangre general",
            "Para llevar las hormonas de la adenohipófisis al hipotálamo",
            "Para conectar la neurohipófisis con el riñón"
          ],
          correcta: 0,
          explicacion: "Une dos lechos capilares: el del hipotálamo y el de la adenohipófisis. Por eso basta con muy poca cantidad de hormona hipotalámica, que no se diluye en la circulación general."
        },
        {
          texto: "¿Cuál es el principal estímulo para la secreción de ADH?",
          opciones: [
            "El aumento de la osmolaridad plasmática detectado por los osmorreceptores",
            "El aumento de la volemia",
            "La bajada de la osmolaridad",
            "La subida del potasio"
          ],
          correcta: 0,
          explicacion: "Basta con que la osmolaridad suba un 1 % (lo normal es unos 285 mOsm/L). Una bajada importante de la volemia (más del 10 %) detectada por barorreceptores también la estimula."
        },
        {
          texto: "¿Cómo actúa la ADH en el riñón?",
          opciones: [
            "Inserta acuaporinas en el conducto colector para que se reabsorba agua y se concentre la orina",
            "Abre canales de sodio en el túbulo proximal",
            "Aumenta el filtrado glomerular",
            "Hace que el conducto colector sea impermeable al agua"
          ],
          correcta: 0,
          explicacion: "Sin ADH el conducto colector es impermeable al agua y la orina sale diluida. Con ADH entran acuaporinas, el agua pasa por ósmosis a la sangre y hay antidiuresis."
        },
        {
          texto: "Tras un traumatismo craneal, un paciente orina 8 litros al día de orina muy diluida y tiene mucha sed. Su glucemia es normal. ¿Qué sospechas?",
          opciones: [
            "Diabetes insípida central por déficit de ADH",
            "Diabetes mellitus tipo 1",
            "Exceso de ADH",
            "Hiperaldosteronismo"
          ],
          correcta: 0,
          explicacion: "El traumatismo puede dañar el hipotálamo o la neurohipófisis. Sin ADH no se reabsorbe agua: mucha orina hipoosmótica sin glucosa y sed intensa."
        },
        {
          texto: "¿Por qué una hemorragia grave estimula la secreción de ADH?",
          opciones: [
            "Porque los barorreceptores detectan la caída de presión y la ADH retiene agua y produce vasoconstricción",
            "Porque la hemorragia aumenta la osmolaridad",
            "Porque la ADH estimula la formación de hematíes",
            "No la estimula; la ADH solo responde a la osmolaridad"
          ],
          correcta: 0,
          explicacion: "Una bajada de volemia de más del 10 % activa los barorreceptores del seno carotídeo y el cayado aórtico. La ADH a dosis altas tiene efecto vasoconstrictor (vasopresina) y dirige la sangre al corazón y al cerebro."
        },
        {
          texto: "Una madre lactante nota que le sale leche al oír llorar a su bebé. ¿Qué hormona lo explica?",
          opciones: [
            "La oxitocina, que contrae las células que rodean los alvéolos y conductos mamarios",
            "La prolactina, que contrae los conductos",
            "Los estrógenos, que estimulan la producción de leche",
            "La ADH, que aumenta el volumen de leche"
          ],
          correcta: 0,
          explicacion: "La oxitocina produce la eyección de la leche y responde a estímulos nerviosos: la succión, el llanto, el olor del bebé. La prolactina es la que estimula la producción de leche."
        },
        {
          texto: "¿Qué tiene de especial el control de la prolactina?",
          opciones: [
            "No forma parte de un eje: está inhibida de forma continua por la dopamina del hipotálamo",
            "La estimula una hormona liberadora específica (PRH)",
            "Se produce en la neurohipófisis",
            "La regula la retroalimentación positiva de los estrógenos"
          ],
          correcta: 0,
          explicacion: "La prolactina es la única hormona de la adenohipófisis que no forma parte de un eje. Si baja la dopamina (por ejemplo, con la succión), sube la prolactina."
        },
        {
          texto: "Un paciente con un fármaco antipsicótico que bloquea los receptores de dopamina presenta secreción de leche por las mamas. ¿Por qué?",
          opciones: [
            "Porque al bloquear la dopamina deja de inhibirse la prolactina",
            "Porque el fármaco estimula la oxitocina",
            "Porque el fármaco tiene efecto estrogénico directo",
            "Porque aumenta la TSH"
          ],
          correcta: 0,
          explicacion: "La dopamina mantiene frenada la prolactina. Si se bloquea su efecto, sube la prolactina y puede aparecer galactorrea, también en hombres."
        },
        {
          texto: "¿Por qué un tumor de hipófisis puede producir alteraciones de la visión?",
          opciones: [
            "Porque al crecer sale de la silla turca y comprime el quiasma óptico",
            "Porque la hipófisis produce hormonas que actúan sobre la retina",
            "Porque destruye el núcleo supraquiasmático",
            "Porque comprime el lóbulo occipital"
          ],
          correcta: 0,
          explicacion: "La hipófisis está en la silla turca del esfenoides, justo debajo del quiasma. Su compresión afecta típicamente a la visión periférica."
        },
        {
          texto: "¿Qué hormona hipotalámica inhibe la secreción de GH?",
          opciones: ["Somatostatina", "GHRH", "TRH", "Dopamina"],
          correcta: 0,
          explicacion: "La GHRH estimula la GH y la somatostatina la inhibe. La TRH estimula la TSH y la dopamina inhibe la prolactina."
        },
        {
          texto: "Sobre la oxitocina, ¿qué afirmación es correcta?",
          opciones: [
            "También la tienen los hombres e interviene en los vínculos afectivos y la contracción de los conductos genitales",
            "Solo existe en mujeres durante el parto y la lactancia",
            "Su vida media en sangre es de varios días",
            "Es la hormona que produce la leche en la mama"
          ],
          correcta: 0,
          explicacion: "La oxitocina tiene una vida media de 3-5 minutos. Además del parto y la eyección de leche, participa en la sociabilidad, la confianza y el bienestar en ambos sexos."
        }
      ]
    },
    {
      id: "fp2-t37",
      tema: "tema-37",
      numero: "37",
      etiqueta: "Tema 37",
      titulo: "Eje somatotropo",
      preguntas: [
        {
          texto: "¿Dónde se produce sobre todo el IGF-I circulante y qué lo estimula?",
          opciones: ["En el hígado, estimulado por la GH", "En la hipófisis, estimulado por la GHRH", "En el hueso, estimulado por la insulina", "En el páncreas, estimulado por la glucosa"],
          correcta: 0,
          explicacion: "El hígado es el principal productor de IGF-I sérico. Muchos tejidos lo fabrican también a nivel local (acción paracrina), como el cartílago de crecimiento."
        },
        {
          texto: "Durante el ayuno, ¿qué efecto tiene la GH sobre el metabolismo?",
          opciones: [
            "Moviliza grasa (lipólisis) y reduce la captación de glucosa, ahorrando glucosa: es diabetógena",
            "Estimula la captación de glucosa por el músculo, como la insulina",
            "Estimula la lipogénesis en el tejido adiposo",
            "Inhibe la gluconeogénesis hepática"
          ],
          correcta: 0,
          explicacion: "Cuando glucemia e insulina están bajas, la GH hace que músculo y grasa usen ácidos grasos y no glucosa, y estimula la gluconeogénesis y la cetogénesis. Así sube la glucemia."
        },
        {
          texto: "¿Por qué no sirve de mucho una sola medición de GH en sangre para diagnosticar su déficit?",
          opciones: [
            "Porque se secreta en pulsos cada 2-3 horas y el resultado depende de si coincide con un pico",
            "Porque la GH tiene una vida media de varios días",
            "Porque la GH no circula por la sangre",
            "Porque la GH solo se secreta durante el día"
          ],
          correcta: 0,
          explicacion: "La GH es pulsátil y sus pulsos son mayores por la noche, en el sueño profundo. Por eso suele medirse el IGF-I o se hacen pruebas de estímulo."
        },
        {
          texto: "¿Cuál de estos factores aumenta la secreción de GH?",
          opciones: ["La hipoglucemia", "La hiperglucemia", "La obesidad", "El estrés mantenido con cortisol alto"],
          correcta: 0,
          explicacion: "Aumentan la GH: GHRH, sueño, ejercicio, estrés agudo, hipoglucemia, ghrelina y algunos aminoácidos (arginina). La disminuyen: somatostatina, IGF-I, envejecimiento, hiperglucemia, obesidad y cortisol mantenido."
        },
        {
          texto: "Un niño que duerme muy poco y mal crece menos que sus compañeros. ¿Qué relación fisiológica lo explica?",
          opciones: [
            "La mayor secreción de GH ocurre por la noche, durante el sueño profundo",
            "La GH solo se secreta al hacer ejercicio",
            "La melatonina inhibe directamente la GH",
            "El sueño aumenta la somatostatina"
          ],
          correcta: 0,
          explicacion: "Los pulsos nocturnos de GH son los más grandes, sobre todo en el sueño profundo. Por eso dormir bien es clave para crecer en la infancia."
        },
        {
          texto: "¿Qué hormona del estómago vacío estimula la GH y además da hambre?",
          opciones: ["La ghrelina", "La leptina", "La gastrina", "La colecistocinina"],
          correcta: 0,
          explicacion: "La ghrelina es la única hormona orexigénica conocida: aumenta el apetito y la secreción de GH para mantener la glucemia."
        },
        {
          texto: "Si se administra IGF-I a una persona, ¿qué ocurre con la GHRH y la GH?",
          opciones: [
            "Disminuyen por retroalimentación negativa",
            "Aumentan porque el IGF-I estimula el eje",
            "No cambian porque el IGF-I no forma parte del eje",
            "La GHRH sube y la GH baja"
          ],
          correcta: 0,
          explicacion: "El IGF-I frena el eje en el hipotálamo y en la hipófisis. A la vez estimula el crecimiento del músculo esquelético."
        },
        {
          texto: "Un adulto de 45 años nota que le aprietan los anillos, le ha crecido la mandíbula y ha cambiado de número de zapato. ¿Qué sospechas?",
          opciones: [
            "Acromegalia: exceso de GH después del cierre de los cartílagos de crecimiento",
            "Gigantismo: exceso de GH en la infancia",
            "Enanismo hipofisario",
            "Hipotiroidismo"
          ],
          correcta: 0,
          explicacion: "En el adulto los huesos largos ya no crecen en longitud, pero sí crecen los huesos cortos y membranosos (prognatismo), las partes acras y los tejidos blandos (lengua, hígado)."
        },
        {
          texto: "¿Por qué los pacientes con exceso de GH tienden a la diabetes?",
          opciones: [
            "Porque la GH estimula la gluconeogénesis y reduce la captación de glucosa por músculo y grasa",
            "Porque la GH destruye las células β del páncreas",
            "Porque la GH estimula el glucagón exclusivamente",
            "Porque la GH aumenta la eliminación de insulina por el riñón"
          ],
          correcta: 0,
          explicacion: "El exceso de GH produce resistencia a la insulina y glucemias altas. Además, la GH y el IGF-I estimulan la división celular, por eso estos pacientes tienen más tendencia a tumores."
        },
        {
          texto: "Una niña de 6 años mide 92 cm, tiene poca masa muscular y su desarrollo es lento. Tras 15 meses de tratamiento con GH alcanza una talla normal. ¿Qué tenía?",
          opciones: ["Enanismo hipofisario por déficit de GH", "Acromegalia", "Cretinismo por falta de yodo", "Exceso de cortisol"],
          correcta: 0,
          explicacion: "El déficit de GH en la infancia produce baja estatura, poca masa muscular y poco desarrollo. El tratamiento con GH funciona mientras las epífisis siguen abiertas."
        },
        {
          texto: "¿Por qué el estrés crónico puede frenar el crecimiento de un niño?",
          opciones: [
            "Porque el cortisol mantenido inhibe la secreción de GH",
            "Porque el estrés aumenta la GH y se agota la hipófisis",
            "Porque el cortisol estimula el cierre inmediato de las epífisis",
            "Porque el estrés aumenta la producción de IGF-I"
          ],
          correcta: 0,
          explicacion: "El estrés agudo aumenta la GH, pero el crónico (cortisol alto) la inhibe. El cortisol inhibe la GH, la TSH, la ACTH, la LH y la FSH."
        },
        {
          texto: "En la vida adulta, con las placas de crecimiento cerradas, la GH…",
          opciones: [
            "Sigue siendo importante para mantener la densidad ósea, la masa muscular y la renovación de los tejidos",
            "Deja de secretarse por completo",
            "Solo actúa sobre el crecimiento de los huesos largos",
            "Pasa a ser una hormona hipoglucemiante"
          ],
          correcta: 0,
          explicacion: "La GH se secreta menos con la edad, pero sigue manteniendo el hueso, el músculo y el metabolismo. Su máximo es justo antes de la pubertad."
        }
      ]
    },
    {
      id: "fp2-t38",
      tema: "tema-38",
      numero: "38",
      etiqueta: "Tema 38",
      titulo: "Eje tiroideo",
      preguntas: [
        {
          texto: "¿Qué hormona tiroidea se secreta en mayor cantidad y cuál es la forma activa?",
          opciones: [
            "Se secreta sobre todo T4, pero la activa es la T3",
            "Se secreta sobre todo T3, que es también la activa",
            "Se secreta sobre todo T4, que es también la activa",
            "Se secretan en igual cantidad y las dos son igual de activas"
          ],
          correcta: 0,
          explicacion: "Por cada T3 se liberan unas 10 T4. Las desyodasas de los tejidos quitan un yodo a la T4 y la convierten en T3, que es la que actúa sobre los receptores nucleares."
        },
        {
          texto: "¿Por qué el tratamiento con levotiroxina (T4) no tiene que ser estricto a la misma hora cada día?",
          opciones: [
            "Porque la T4 tiene una vida media larga, de unos 6-7 días, al ir unida a transportadores",
            "Porque la T4 se almacena en el hígado durante meses",
            "Porque la T4 no necesita convertirse en T3",
            "Porque la T4 actúa sobre receptores de membrana de efecto inmediato"
          ],
          correcta: 0,
          explicacion: "La T4 va muy unida a proteínas y dura unos 6,2 días en sangre. La T3 se une más débilmente y dura alrededor de un día."
        },
        {
          texto: "¿Dónde están los receptores de la T3?",
          opciones: ["En el núcleo, y cambian la expresión de genes", "En la membrana, unidos a proteína G", "En el aparato de Golgi", "Solo en la tiroides"],
          correcta: 0,
          explicacion: "La T3 entra en la célula y actúa sobre receptores nucleares, aumentando o disminuyendo la expresión de genes. Actúa sobre casi todas las células del organismo."
        },
        {
          texto: "¿Qué TSH esperas en un paciente al que se le ha extirpado la tiroides y que todavía no toma tratamiento?",
          opciones: [
            "Alta, porque falta la retroalimentación negativa de las hormonas tiroideas",
            "Baja, porque no hay glándula a la que estimular",
            "Normal, porque la TSH no depende de la tiroides",
            "Indetectable"
          ],
          correcta: 0,
          explicacion: "Sin T4 ni T3 nada frena el hipotálamo ni la hipófisis, así que la TRH y la TSH suben mucho."
        },
        {
          texto: "Una mujer de 40 años refiere cansancio, frío constante, estreñimiento, piel seca, pelo ralo y aumento de peso. ¿Qué cuadro sugiere?",
          opciones: ["Hipotiroidismo", "Hipertiroidismo", "Enfermedad de Cushing", "Diabetes insípida"],
          correcta: 0,
          explicacion: "Las hormonas tiroideas aumentan el metabolismo basal y la producción de calor. Si faltan, baja el metabolismo: intolerancia al frío, letargia, poca sudoración, piel seca, gasto cardiaco bajo y aumento de peso."
        },
        {
          texto: "Una paciente presenta nerviosismo, insomnio, taquicardia, sudoración, intolerancia al calor y pérdida de peso aunque come mucho. ¿Qué esperas en la analítica si el origen es la tiroides?",
          opciones: [
            "T4 alta y TSH baja",
            "T4 baja y TSH alta",
            "T4 alta y TSH alta",
            "T4 baja y TSH baja"
          ],
          correcta: 0,
          explicacion: "Es un hipertiroidismo primario: la glándula produce de más y la T4 alta frena la TSH. Si el origen fuera un tumor hipofisario productor de TSH, las dos estarían altas."
        },
        {
          texto: "En una zona con poco yodo en la dieta, mucha gente tiene el cuello agrandado. ¿Por qué?",
          opciones: [
            "Porque sin yodo baja la T4, sube la TSH y esta estimula el crecimiento de la tiroides (bocio)",
            "Porque el yodo inhibe el crecimiento de la tiroides",
            "Porque sin yodo la tiroides produce demasiada T4",
            "Porque falta calcitonina"
          ],
          correcta: 0,
          explicacion: "La TSH no solo estimula la secreción: también hace crecer la glándula. Con TSH alta mantenida aparece la hipertrofia. La sal yodada acabó con el bocio endémico en España."
        },
        {
          texto: "¿Qué proteína sintetiza la célula folicular y sirve como almacén de hormonas en el coloide?",
          opciones: ["La tiroglobulina", "La albúmina", "La transcortina", "La globulina fijadora de hormonas sexuales"],
          correcta: 0,
          explicacion: "La tiroglobulina se yoda en el coloide. Cuando llega la TSH, la célula la endocita y los lisosomas la rompen para liberar T3 y T4 a la sangre."
        },
        {
          texto: "¿Por qué la prueba del talón busca el hipotiroidismo congénito en todos los recién nacidos?",
          opciones: [
            "Porque si no se trata pronto produce cretinismo: retraso mental irreversible y del crecimiento",
            "Porque el hipotiroidismo congénito produce gigantismo",
            "Porque se cura sola con la lactancia",
            "Porque afecta solo a la talla al nacer"
          ],
          correcta: 0,
          explicacion: "Las hormonas tiroideas son esenciales para la mielinización y el desarrollo de la corteza y el cerebelo. El niño nace con talla normal, pero si no se trata el daño cerebral es irreversible."
        },
        {
          texto: "¿Por qué es importante el yodo durante el embarazo?",
          opciones: [
            "Porque las hormonas tiroideas son necesarias para el desarrollo cerebral del feto",
            "Porque el yodo es necesario para fabricar insulina fetal",
            "Porque el yodo evita la diabetes gestacional",
            "Porque el yodo sustituye a la vitamina D"
          ],
          correcta: 0,
          explicacion: "Sin yodo no se fabrican hormonas tiroideas funcionales y el feto puede sufrir cretinismo. Por eso se recomiendan suplementos de yodo en el embarazo."
        },
        {
          texto: "¿Qué efecto tienen las hormonas tiroideas sobre el corazón?",
          opciones: [
            "Aumentan la frecuencia y la fuerza de contracción y bajan la resistencia vascular",
            "Disminuyen la frecuencia cardiaca y la contractilidad",
            "Aumentan la resistencia vascular sistémica",
            "No actúan sobre el corazón"
          ],
          correcta: 0,
          explicacion: "Aumentan el gasto cardiaco para llevar más oxígeno y sustratos a los tejidos. Por eso el hipertiroidismo da taquicardia y el hipotiroidismo, gasto cardiaco bajo."
        },
        {
          texto: "¿Qué hormona del eje tiroideo libera el hipotálamo?",
          opciones: ["TRH, que estimula la TSH en la adenohipófisis", "TSH, que estimula la tiroides", "GHRH, que estimula la TSH", "CRH, que estimula la TSH"],
          correcta: 0,
          explicacion: "TRH (hipotálamo) → TSH (adenohipófisis) → T4 y T3 (tiroides). Ojo: los apuntes llaman a la TRH «hormona liberadora de somatotropa», pero es la hormona liberadora de tirotropina."
        }
      ]
    },
    {
      id: "fp2-t39",
      tema: "tema-39",
      numero: "39",
      etiqueta: "Tema 39",
      titulo: "Glándulas suprarrenales",
      preguntas: [
        {
          texto: "¿Qué produce cada capa de la corteza suprarrenal, de fuera a dentro?",
          opciones: [
            "Glomerular: aldosterona; fascicular: cortisol; reticular: andrógenos",
            "Glomerular: cortisol; fascicular: aldosterona; reticular: adrenalina",
            "Glomerular: andrógenos; fascicular: cortisol; reticular: aldosterona",
            "Glomerular: adrenalina; fascicular: aldosterona; reticular: cortisol"
          ],
          correcta: 0,
          explicacion: "Las tres capas derivan del colesterol y producen esteroides. La médula, de origen nervioso, produce catecolaminas (adrenalina y noradrenalina)."
        },
        {
          texto: "¿Qué estímulos aumentan directamente la secreción de aldosterona?",
          opciones: [
            "La angiotensina II y la hiperpotasemia",
            "La ACTH y la hipopotasemia",
            "La ADH y la hiponatremia",
            "La CRH y la hipercalcemia"
          ],
          correcta: 0,
          explicacion: "La aldosterona no sigue un eje. La estimulan la angiotensina II (sistema renina-angiotensina ante una bajada de presión) y el potasio alto."
        },
        {
          texto: "Un paciente tiene un tumor que produce aldosterona en exceso. ¿Qué cuadro esperas?",
          opciones: [
            "Hipertensión con potasio bajo",
            "Hipotensión con potasio alto",
            "Hipoglucemia y cara de luna",
            "Deshidratación con sodio bajo"
          ],
          correcta: 0,
          explicacion: "La aldosterona reabsorbe sodio (y con él agua) en el colector y elimina potasio. Su exceso sube la volemia y la presión y baja el potasio."
        },
        {
          texto: "¿Cómo afecta el cortisol a la glucemia?",
          opciones: [
            "La sube: estimula la gluconeogénesis y reduce la captación de glucosa por músculo y grasa",
            "La baja: estimula la captación de glucosa por GLUT4",
            "No la modifica",
            "La baja porque estimula la insulina"
          ],
          correcta: 0,
          explicacion: "El cortisol es hiperglucemiante: lipólisis, proteólisis muscular y gluconeogénesis a partir de aminoácidos y glicerol. Además protege los almacenes de glucógeno hepático."
        },
        {
          texto: "Una paciente con artritis reumatoide lleva meses con corticoides orales a dosis altas. Presenta cara redonda, grasa en la nuca, abdomen grande con estrías violáceas y brazos y piernas delgados. ¿Qué tiene?",
          opciones: [
            "Síndrome de Cushing por exceso de glucocorticoides",
            "Enfermedad de Addison",
            "Hipotiroidismo",
            "Acromegalia"
          ],
          correcta: 0,
          explicacion: "El exceso crónico de glucocorticoides redistribuye la grasa (cara de luna, giba de búfalo, abdomen), destruye proteínas (estrías, debilidad, extremidades delgadas) y da hipertensión, osteoporosis e infecciones."
        },
        {
          texto: "¿Por qué un paciente con corticoides crónicos tiene más riesgo de infecciones y sus heridas cicatrizan mal?",
          opciones: [
            "Porque el cortisol inhibe la respuesta inmunitaria e inflamatoria y la proliferación de fibroblastos y el colágeno",
            "Porque el cortisol destruye la médula ósea",
            "Porque el cortisol aumenta la inflamación",
            "Porque el cortisol baja la glucemia"
          ],
          correcta: 0,
          explicacion: "El cortisol inhibe la división de los linfocitos, la inflamación y la formación de colágeno. Por eso las cremas de corticoide se aplican alrededor de la zona inflamada, no sobre la herida."
        },
        {
          texto: "¿Por qué no se puede suspender de golpe un tratamiento largo con corticoides?",
          opciones: [
            "Porque el eje está frenado (CRH y ACTH bajas) y la suprarrenal atrofiada no produce cortisol suficiente",
            "Porque el cortisol se acumula y produce una crisis de Cushing",
            "Porque provoca hipercalcemia",
            "Porque la ACTH se dispara y produce hipertensión"
          ],
          correcta: 0,
          explicacion: "Los corticoides externos inhiben la CRH y la ACTH. Sin ACTH, la corteza se hipotrofia. Si se retiran bruscamente puede aparecer una insuficiencia suprarrenal aguda; hay que bajar la dosis poco a poco."
        },
        {
          texto: "Un paciente presenta cansancio, debilidad, hipotensión, náuseas, pérdida de peso y piel oscurecida. Tiene ACTH muy alta. ¿Qué sospechas?",
          opciones: [
            "Enfermedad de Addison: destrucción autoinmune de la corteza suprarrenal",
            "Síndrome de Cushing",
            "Feocromocitoma",
            "Hiperaldosteronismo"
          ],
          correcta: 0,
          explicacion: "En el Addison falta cortisol y aldosterona (hipotensión, debilidad). Sin cortisol que la frene, la ACTH sube mucho. Se trata con glucocorticoides y mineralocorticoides sintéticos."
        },
        {
          texto: "¿Por qué la médula suprarrenal se considera un ganglio simpático modificado?",
          opciones: [
            "Porque recibe la neurona preganglionar (acetilcolina) y sus células liberan adrenalina y noradrenalina a la sangre",
            "Porque produce acetilcolina que va a la sangre",
            "Porque deriva del mesodermo como la corteza",
            "Porque produce cortisol en respuesta a la ACTH"
          ],
          correcta: 0,
          explicacion: "Sus células cromafines hacen de neurona posganglionar sin axón: en vez de liberar el neurotransmisor en un órgano, lo vierten a la sangre como hormona (alrededor de un 80 % adrenalina)."
        },
        {
          texto: "Durante el ejercicio, ¿qué efecto tiene la adrenalina?",
          opciones: [
            "Broncodilatación, más frecuencia y fuerza cardiaca, vasodilatación muscular y aumento de la glucemia",
            "Broncoconstricción y bajada de la frecuencia cardiaca",
            "Vasoconstricción muscular y vasodilatación digestiva",
            "Estimula la insulina y baja la glucemia"
          ],
          correcta: 0,
          explicacion: "La adrenalina prepara para el esfuerzo: más oxígeno (bronquios, corazón, flujo muscular) y más glucosa (glucogenólisis, lipólisis, gluconeogénesis y estímulo del glucagón)."
        },
        {
          texto: "¿Cuándo es máximo el cortisol en una persona sana con horario normal?",
          opciones: ["Por la mañana temprano, al despertar", "A medianoche", "Después de comer", "Es constante durante el día"],
          correcta: 0,
          explicacion: "El cortisol sigue un ritmo circadiano con un máximo al despertar y un mínimo antes de dormir. El estrés puede predominar sobre este ritmo y sobre la retroalimentación."
        },
        {
          texto: "En una mujer, un exceso de andrógenos suprarrenales se notaría sobre todo por…",
          opciones: [
            "Aumento del vello y acné",
            "Aumento de la presión arterial",
            "Hipoglucemia",
            "No se nota nada, como en los hombres"
          ],
          correcta: 0,
          explicacion: "En la mujer los andrógenos suprarrenales son el 50 % de los circulantes, así que su exceso se nota (hirsutismo, acné). En el hombre apenas se nota porque los testículos ya producen mucha testosterona."
        }
      ]
    },
    {
      id: "fp2-t40",
      tema: "tema-40",
      numero: "40",
      etiqueta: "Tema 40",
      titulo: "Hormonas sexuales masculinas",
      preguntas: [
        {
          texto: "¿Qué hace la LH en el testículo?",
          opciones: [
            "Estimula a las células de Leydig para producir testosterona",
            "Estimula a las células de Sertoli para producir inhibina",
            "Estimula directamente la meiosis de las espermatogonias",
            "Inhibe la producción de testosterona"
          ],
          correcta: 0,
          explicacion: "LH → Leydig → testosterona. FSH → Sertoli → apoyo a la espermatogénesis e inhibina. Los apuntes del eje gonadal dicen que en el hombre solo actúa la FSH y en la mujer solo la LH, pero en los dos sexos actúan ambas."
        },
        {
          texto: "¿Qué hormona inhibe de forma selectiva la FSH sin afectar a la LH?",
          opciones: ["La inhibina, producida por las células de Sertoli", "La testosterona", "La dihidrotestosterona", "El estradiol"],
          correcta: 0,
          explicacion: "La inhibina frena sobre todo la FSH en la hipófisis. La testosterona frena la LH y la GnRH."
        },
        {
          texto: "¿Qué función tienen las células de Sertoli?",
          opciones: [
            "Nutrir y proteger las células espermáticas y formar la barrera hematotesticular",
            "Producir testosterona en respuesta a la LH",
            "Fabricar el líquido de la próstata",
            "Convertir testosterona en estradiol en el hueso"
          ],
          correcta: 0,
          explicacion: "Las células de Sertoli rodean las células germinales y, unidas entre sí, forman la barrera hematotesticular. Así el sistema inmunitario no ataca a las células haploides, que reconocería como extrañas."
        },
        {
          texto: "Tras un traumatismo testicular que rompe la barrera hematotesticular, un hombre puede volverse estéril. ¿Por qué?",
          opciones: [
            "Porque el sistema inmunitario reconoce como extrañas las células haploides y las ataca",
            "Porque deja de producirse LH",
            "Porque las células de Leydig se convierten en Sertoli",
            "Porque la testosterona se transforma en estradiol"
          ],
          correcta: 0,
          explicacion: "Las células germinales haploides son distintas a las del resto del cuerpo. Si la barrera se rompe, el sistema inmunitario puede atacarlas mientras dure la alteración."
        },
        {
          texto: "¿Qué enzima convierte la testosterona en dihidrotestosterona (DHT), un andrógeno más potente?",
          opciones: ["La 5α-reductasa", "La aromatasa", "La 1-α-hidroxilasa", "La desyodasa"],
          correcta: 0,
          explicacion: "La 5α-reductasa está, por ejemplo, en la próstata y el folículo piloso. La aromatasa (en glía, hueso y tejido adiposo) convierte la testosterona en estradiol."
        },
        {
          texto: "Un hombre de 65 años con hiperplasia benigna de próstata empieza un fármaco que también frena la caída del pelo. ¿Qué inhibe probablemente?",
          opciones: [
            "La 5α-reductasa, porque la DHT estimula el crecimiento prostático y la alopecia",
            "La aromatasa, porque los estrógenos hacen crecer la próstata",
            "Los receptores de LH",
            "La síntesis de colesterol"
          ],
          correcta: 0,
          explicacion: "La DHT es unas cinco veces más potente que la testosterona sobre el receptor de andrógenos. Inhibir la 5α-reductasa reduce la próstata y frena la alopecia androgénica."
        },
        {
          texto: "¿Por qué los testículos están en el escroto?",
          opciones: [
            "Porque la espermatogénesis necesita una temperatura algo menor que la del abdomen",
            "Porque así producen más testosterona",
            "Para estar más cerca de la próstata",
            "Porque en el abdomen no les llega la LH"
          ],
          correcta: 0,
          explicacion: "El testículo desciende de la cavidad abdominal al escroto para tener la temperatura adecuada para producir espermatozoides."
        },
        {
          texto: "¿Cuánto dura aproximadamente la maduración completa de un espermatozoide?",
          opciones: ["Unos 65 días", "Unos 14 días", "Unas 24 horas", "Unos 6 meses"],
          correcta: 0,
          explicacion: "La maduración dura unos 65 días, pero se producen espermatozoides cada día (unos 200 millones). Las espermatogonias quedan paradas desde antes del nacimiento hasta la pubertad."
        },
        {
          texto: "¿Cómo viaja la testosterona por la sangre?",
          opciones: [
            "Unida sobre todo a la SHBG y a la albúmina; solo un 1-2 % va libre, que es la activa",
            "Libre en su mayoría, porque es hidrosoluble",
            "Unida a la transcortina",
            "Dentro de los eritrocitos"
          ],
          correcta: 0,
          explicacion: "Como esteroide necesita transportador: alrededor de un 70 % con SHBG, un 28 % con albúmina y un 1-2 % libre. La fracción libre entra en la célula y se une al receptor de andrógenos del citoplasma."
        },
        {
          texto: "¿Por qué los hombres tienen un hematocrito más alto que las mujeres?",
          opciones: [
            "Porque la testosterona estimula la eritropoyesis y la secreción de eritropoyetina",
            "Porque los estrógenos destruyen eritrocitos",
            "Porque los hombres tienen menos plasma",
            "Porque la DHT aumenta la vida media de los hematíes"
          ],
          correcta: 0,
          explicacion: "La testosterona induce la diferenciación eritroide en la médula y la secreción de eritropoyetina. También aumenta la masa muscular y ósea, engrosa las cuerdas vocales y baja el colesterol HDL."
        },
        {
          texto: "¿Qué determina que la gónada indiferenciada del embrión se convierta en testículo?",
          opciones: [
            "El gen SRY del cromosoma Y, que expresa el factor de diferenciación testicular",
            "La presencia de estrógenos maternos",
            "La hormona antimülleriana de la madre",
            "La LH fetal"
          ],
          correcta: 0,
          explicacion: "Con SRY la médula de la gónada forma células de Leydig (testosterona) y de Sertoli (hormona antimülleriana). Si algo falla, la diferenciación se dirige hacia el fenotipo femenino."
        },
        {
          texto: "¿Qué hace la hormona antimülleriana de las células de Sertoli en el embrión masculino?",
          opciones: [
            "Hace que desaparezcan los conductos de Müller, que formarían útero y trompas",
            "Estimula el desarrollo de los conductos de Müller",
            "Estimula la producción de testosterona",
            "Forma el pene y el escroto"
          ],
          correcta: 0,
          explicacion: "La hormona antimülleriana hace que los conductos de Müller regresen, y la testosterona desarrolla los de Wolff. Ojo: los apuntes dicen que «estimula» los conductos de Müller, pero su efecto es hacerlos desaparecer."
        }
      ]
    },
    {
      id: "fp2-t41",
      tema: "tema-41",
      numero: "41",
      etiqueta: "Tema 41",
      titulo: "Hormonas femeninas, embarazo y lactancia",
      preguntas: [
        {
          texto: "¿Qué desencadena la ovulación hacia el día 14 del ciclo?",
          opciones: [
            "Un pico de LH causado por la retroalimentación positiva de unos estrógenos muy altos",
            "Una caída brusca de la LH",
            "Un pico de progesterona del cuerpo lúteo",
            "Una subida de la prolactina"
          ],
          correcta: 0,
          explicacion: "Durante casi toda la fase folicular los estrógenos frenan la FSH y la LH. Cuando superan un umbral, pasan a estimularlas (retroalimentación positiva) y aparece el pico de LH que rompe el folículo."
        },
        {
          texto: "¿Qué hormona predomina en la fase lútea y qué efecto tiene sobre el endometrio?",
          opciones: [
            "La progesterona, que lo hace secretor y lo prepara para la implantación",
            "Los estrógenos, que lo hacen proliferar",
            "La FSH, que lo descama",
            "La LH, que lo engrosa"
          ],
          correcta: 0,
          explicacion: "Fase folicular: los estrógenos hacen proliferar el endometrio. Fase lútea: la progesterona del cuerpo lúteo lo vuelve secretor, rico en nutrientes y vasos."
        },
        {
          texto: "Una mujer que mide su temperatura basal cada mañana observa que sube unas décimas a mitad de ciclo y se mantiene alta hasta la regla. ¿Qué explica la subida?",
          opciones: [
            "El ligero efecto termogénico de la progesterona tras la ovulación",
            "El pico de estrógenos antes de la ovulación",
            "La caída de la FSH",
            "La menstruación"
          ],
          correcta: 0,
          explicacion: "La progesterona sube la temperatura basal unas décimas (unos 0,3-0,5 °C, no 5 °C como dicen los apuntes). Por eso esa subida indica que ya ha habido ovulación."
        },
        {
          texto: "¿Por qué se produce la menstruación si no hay embarazo?",
          opciones: [
            "Porque el cuerpo lúteo degenera a los 14 días y caen de golpe los estrógenos y la progesterona",
            "Porque sube mucho la progesterona",
            "Porque el pico de LH rompe el endometrio",
            "Porque la hCG destruye el cuerpo lúteo"
          ],
          correcta: 0,
          explicacion: "Sin hCG, el cuerpo lúteo se convierte en cuerpo albicans. Al faltar las hormonas, el endometrio pierde su riego y se descama."
        },
        {
          texto: "¿Qué detecta un test de embarazo y para qué sirve esa hormona?",
          opciones: [
            "La hCG, que se une a los receptores de LH y mantiene el cuerpo lúteo produciendo progesterona",
            "La progesterona, que produce el embrión",
            "La LH, que sube en el embarazo",
            "La prolactina, que impide la menstruación"
          ],
          correcta: 0,
          explicacion: "El blastocisto produce hCG, que «rescata» el cuerpo lúteo. Se detecta en sangre materna a las 24 h de la implantación y se elimina por la orina."
        },
        {
          texto: "¿Quién produce sobre todo la progesterona y los estrógenos a partir del segundo trimestre del embarazo?",
          opciones: ["La placenta", "El cuerpo lúteo", "La hipófisis materna", "El ovario fetal"],
          correcta: 0,
          explicacion: "Primer trimestre: cuerpo lúteo (mantenido por la hCG). Segundo: placenta. Tercero: placenta con ayuda del feto, cuya suprarrenal fabrica DHEA (unidad maternofetoplacentaria)."
        },
        {
          texto: "¿Por qué los anticonceptivos hormonales combinados impiden la ovulación?",
          opciones: [
            "Porque los estrógenos y progestágenos frenan la GnRH, la FSH y la LH y no hay pico de LH",
            "Porque destruyen los ovocitos",
            "Porque estimulan el pico de LH antes de tiempo",
            "Porque bloquean los receptores de progesterona"
          ],
          correcta: 0,
          explicacion: "Mantienen una retroalimentación negativa constante sobre el hipotálamo y la hipófisis: el folículo no madura y no se produce el pico de LH."
        },
        {
          texto: "Una mujer de 52 años lleva un año sin regla. ¿Qué esperas en sus análisis?",
          opciones: [
            "FSH y LH altas, porque los ovarios ya no producen estrógenos que las frenen",
            "FSH y LH bajas, porque la hipófisis envejece",
            "Estrógenos altos y FSH baja",
            "Progesterona alta"
          ],
          correcta: 0,
          explicacion: "En la menopausia se acaban los folículos y bajan mucho los estrógenos. Se pierde la retroalimentación negativa y suben la FSH y la LH."
        },
        {
          texto: "¿Por qué durante el embarazo la mama no produce leche aunque la prolactina esté alta?",
          opciones: [
            "Porque los estrógenos y la progesterona altos inhiben la producción de leche",
            "Porque la prolactina no actúa hasta el parto",
            "Porque falta la oxitocina",
            "Porque la dopamina está muy alta"
          ],
          correcta: 0,
          explicacion: "La leche empieza a producirse cuando, tras expulsar la placenta, caen los estrógenos y la progesterona y la prolactina sigue alta."
        },
        {
          texto: "¿Por qué la lactancia materna suele producir amenorrea?",
          opciones: [
            "Porque la prolactina alta inhibe el eje gonadal",
            "Porque la oxitocina inhibe el ovario",
            "Porque los estrógenos están muy altos",
            "Porque la succión estimula la dopamina"
          ],
          correcta: 0,
          explicacion: "La succión inhibe la dopamina, sube la prolactina y esta frena la GnRH y la ovulación. Aun así, no es un método anticonceptivo seguro."
        },
        {
          texto: "¿Qué papel tiene el cortisol al final del embarazo?",
          opciones: [
            "Madura los pulmones del feto (surfactante) y participa en el inicio del parto",
            "Inhibe el parto para que el embarazo llegue a término",
            "Mantiene el cuerpo lúteo",
            "Produce la eyección de la leche"
          ],
          correcta: 0,
          explicacion: "La placenta produce CRH y aquí el cortisol se estimula a sí mismo (retroalimentación positiva). Madura los ejes, el pulmón y el aparato digestivo del feto y, junto con la caída de progesterona y la subida de prostaglandinas, desencadena el parto."
        },
        {
          texto: "Durante el parto, ¿cuándo sube la oxitocina en la sangre materna?",
          opciones: [
            "Después de que el parto haya empezado, por la presión del feto sobre el cuello uterino",
            "Semanas antes del parto, para prepararlo",
            "Solo cuando ya ha salido la placenta",
            "No sube; el parto depende solo de las prostaglandinas"
          ],
          correcta: 0,
          explicacion: "Antes del parto aumentan las prostaglandinas y la relación estradiol/progesterona, que hacen al útero más sensible a la oxitocina. La oxitocina sube cuando ya hay presión sobre el cérvix."
        }
      ]
    }
  ]
};
