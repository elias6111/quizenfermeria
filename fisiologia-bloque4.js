// Tests de Fisiología · Bloque IV (sistema renal, temas 16 a 19).
// Cada test es corto: unas 10 preguntas de un solo tema.
// "correcta" es la posición de la respuesta correcta (0 = primera opción).
const fisiologiaBloque4 = {
  titulo: "Bloque IV · Sistema renal",
  tests: [
    /* ---------- Tema 16: principios básicos de la función renal ---------- */
    {
      id: "t16",
      numero: "16",
      titulo: "Principios básicos de la función renal",
      preguntas: [
        {
          texto: "¿Cuál de estas NO es una función del riñón?",
          opciones: [
            "Producir eritropoyetina",
            "Activar la vitamina D",
            "Producir bilis",
            "Regular el equilibrio ácido-base"
          ],
          correcta: 2,
          explicacion: "El riñón regula agua y electrolitos, excreta desechos, regula el pH y la presión arterial, hace gluconeogénesis en ayuno y fabrica EPO, renina y vitamina D activa. La bilis la produce el hígado."
        },
        {
          texto: "¿Qué es la nefrona?",
          opciones: [
            "La unidad funcional del riñón; hay ≈ 1,25 millones por riñón y no se regeneran",
            "La cápsula que rodea al riñón",
            "Un tipo de célula del túbulo colector",
            "La arteria que entra en el glomérulo"
          ],
          correcta: 0,
          explicacion: "La nefrona es la unidad funcional: ≈ 1,25 millones por riñón. No se regeneran, así que cualquier daño reduce su número."
        },
        {
          texto: "¿Qué estructuras forman el corpúsculo renal (de Malpighi)?",
          opciones: [
            "El túbulo proximal y el asa de Henle",
            "La pelvis y los cálices",
            "La mácula densa y las células granulares",
            "El glomérulo y la cápsula de Bowman"
          ],
          correcta: 3,
          explicacion: "Corpúsculo renal = glomérulo (ovillo de capilares) + cápsula de Bowman. El túbulo renal está formado por túbulo proximal, asa de Henle, túbulo distal y conducto colector."
        },
        {
          texto: "¿Qué son los podocitos?",
          opciones: [
            "Células de la capa visceral de la cápsula de Bowman que abrazan los capilares glomerulares",
            "Células que secretan renina",
            "Células del túbulo proximal ricas en mitocondrias",
            "Células del conducto colector sensibles a la ADH"
          ],
          correcta: 0,
          explicacion: "Los podocitos forman la capa visceral (interna) de la cápsula de Bowman; entre sus prolongaciones (pedicelos) quedan las hendiduras de filtración."
        },
        {
          texto: "¿Qué tienen de especial las nefronas yuxtamedulares?",
          opciones: [
            "Son el 85 % de las nefronas",
            "Tienen el asa de Henle muy corta",
            "Tienen asas de Henle largas y vasos rectos, y permiten concentrar la orina",
            "No tienen glomérulo"
          ],
          correcta: 2,
          explicacion: "Las yuxtamedulares (15 %) tienen el glomérulo junto a la médula, asas largas que penetran en ella y vasos rectos: son las que permiten formar orina concentrada. Las corticales son el 85 %."
        },
        {
          texto: "¿Qué células del aparato yuxtaglomerular secretan renina?",
          opciones: [
            "Las células de la mácula densa",
            "Las células granulares de la arteriola aferente",
            "Los podocitos",
            "Las células mesangiales extraglomerulares"
          ],
          correcta: 1,
          explicacion: "Las células granulares (yuxtaglomerulares), en la pared de la arteriola aferente, secretan renina. La mácula densa detecta el NaCl del líquido tubular."
        },
        {
          texto: "¿Qué porcentaje del gasto cardiaco recibe el riñón?",
          opciones: ["≈ 5 %", "≈ 50 %", "≈ 1 %", "≈ 20 % (1,1 L/min)"],
          correcta: 3,
          explicacion: "Los riñones reciben ≈ 20 % del gasto cardiaco, unos 1,1 L/min, aunque pesen menos del 0,5 % del peso corporal."
        },
        {
          texto: "¿Qué peculiaridad tiene la circulación renal?",
          opciones: [
            "La sangre pasa por dos redes capilares en serie: el glomérulo y los capilares peritubulares",
            "No tiene arteriolas",
            "La vena renal desemboca en la aorta",
            "Solo tiene capilares en la médula"
          ],
          correcta: 0,
          explicacion: "Arteriola aferente → glomérulo (filtración) → arteriola eferente → capilares peritubulares (reabsorción y secreción) → venas."
        },
        {
          texto: "¿Qué inervación recibe el riñón?",
          opciones: [
            "Sobre todo parasimpática, por el vago",
            "Solo somática",
            "Simpática; no tiene inervación parasimpática relevante",
            "No tiene inervación"
          ],
          correcta: 2,
          explicacion: "El riñón solo recibe simpático (plexo celíaco). Ante una bajada de presión, produce vasoconstricción, estimula la renina y aumenta la reabsorción de Na⁺ para conservar la volemia."
        },
        {
          texto: "¿Cuál es la fórmula correcta de la excreción de una sustancia?",
          opciones: [
            "Excreción = filtración + reabsorción − secreción",
            "Excreción = filtración − reabsorción + secreción",
            "Excreción = secreción − filtración",
            "Excreción = reabsorción − secreción"
          ],
          correcta: 1,
          explicacion: "Lo que se excreta es lo filtrado, menos lo que se reabsorbe (vuelve a la sangre), más lo que se secreta (pasa de la sangre al túbulo)."
        }
      ]
    },

    /* ---------- Tema 17 (1): filtración glomerular ---------- */
    {
      id: "t17",
      numero: "17",
      titulo: "Filtración glomerular",
      preguntas: [
        {
          texto: "¿Cuál es la tasa de filtración glomerular normal?",
          opciones: ["≈ 1,1 L/min", "≈ 605 mL/min", "≈ 1,5 L/día", "≈ 125 mL/min (180 L/día)"],
          correcta: 3,
          explicacion: "TFG ≈ 125 mL/min = 180 L/día. 1,1 L/min es el flujo sanguíneo renal, 605 mL/min el flujo plasmático renal y 1,5 L/día la orina."
        },
        {
          texto: "¿Qué capa de la barrera de filtración impide principalmente el paso de las células sanguíneas?",
          opciones: ["El endotelio fenestrado del capilar", "La lámina basal", "Los podocitos", "La mácula densa"],
          correcta: 0,
          explicacion: "El endotelio tiene poros de 50-100 nm que dejan pasar el plasma pero no las células. Si hay hematíes en la orina (hematuria) es que falla la barrera."
        },
        {
          texto: "¿Por qué la albúmina prácticamente no se filtra?",
          opciones: [
            "Porque es muy pequeña",
            "Porque es grande y tiene carga negativa, como la barrera de filtración",
            "Porque se reabsorbe en el asa de Henle",
            "Porque tiene carga positiva"
          ],
          correcta: 1,
          explicacion: "La barrera frena por tamaño (> 70.000 Da no pasan) y por carga: la lámina basal es negativa y repele a las proteínas negativas como la albúmina."
        },
        {
          texto: "A igual tamaño, ¿qué sustancias se filtran mejor?",
          opciones: ["Los aniones", "Las neutras", "Los cationes", "Todas igual"],
          correcta: 2,
          explicacion: "Como la barrera tiene carga negativa, el orden de filtración a igual tamaño es: catión > neutra > anión."
        },
        {
          texto: "Con estos valores, ¿cuál es la presión neta de filtración? Hidrostática glomerular 60, oncótica glomerular 32, hidrostática de Bowman 18 y oncótica de Bowman 0 mmHg.",
          opciones: ["110 mmHg", "46 mmHg", "28 mmHg", "10 mmHg"],
          correcta: 3,
          explicacion: "PNF = 60 − 32 − 18 + 0 = 10 mmHg. Solo la hidrostática del capilar (y la oncótica de Bowman, que es 0) favorecen la filtración."
        },
        {
          texto: "¿Qué ocurre con la TFG si se contrae la arteriola eferente?",
          opciones: [
            "Aumenta, porque sube la presión dentro del glomérulo",
            "Disminuye, porque entra menos sangre",
            "No cambia",
            "Se hace cero"
          ],
          correcta: 0,
          explicacion: "Al contraer la eferente la sangre «se embalsa» en el glomérulo y sube la presión hidrostática: aumenta la TFG. Contraer la aferente tiene el efecto contrario."
        },
        {
          texto: "¿Entre qué valores de presión arterial media se autorregula la TFG?",
          opciones: ["40-80 mmHg", "80-180 mmHg", "120-250 mmHg", "No se autorregula"],
          correcta: 1,
          explicacion: "Entre 80 y 180 mmHg el riñón mantiene la TFG y el flujo renal casi constantes modificando sobre todo la resistencia de la arteriola aferente."
        },
        {
          texto: "¿En qué consiste la respuesta miogénica?",
          opciones: [
            "La mácula densa detecta el NaCl",
            "El simpático contrae las arteriolas",
            "Al aumentar la presión, la arteriola aferente se estira y se contrae de forma refleja",
            "La angiotensina II contrae la eferente"
          ],
          correcta: 2,
          explicacion: "Es una propiedad del músculo liso: al estirarse por el aumento de presión entra Ca²⁺ y se contrae, aumenta la resistencia y no entra más sangre de la cuenta."
        },
        {
          texto: "En la retroalimentación tubuloglomerular, ¿qué detecta la mácula densa?",
          opciones: [
            "La presión arterial",
            "La concentración de glucosa",
            "La concentración de ADH",
            "La concentración de NaCl en el líquido tubular"
          ],
          correcta: 3,
          explicacion: "Si baja la TFG llega menos NaCl a la mácula densa, que provoca dilatación de la aferente (y secreción de renina) para recuperar la filtración."
        },
        {
          texto: "¿Cuál de estas sustancias AUMENTA la TFG?",
          opciones: ["La endotelina", "El péptido natriurético auricular", "La noradrenalina", "La activación simpática"],
          correcta: 1,
          explicacion: "Los péptidos natriuréticos dilatan la aferente y contraen la eferente: suben la TFG. El NO y las prostaglandinas también vasodilatan. Endotelina, catecolaminas y simpático la reducen."
        }
      ]
    },

    /* ---------- Tema 17 (2): reabsorción, secreción y aclaramiento ---------- */
    {
      id: "t17b",
      numero: "17",
      titulo: "Transporte tubular y aclaramiento",
      preguntas: [
        {
          texto: "¿Dónde se reabsorbe la mayor parte del filtrado (≈ 67 % del Na⁺ y del agua)?",
          opciones: ["En el túbulo proximal", "En el asa de Henle", "En el túbulo distal", "En el conducto colector"],
          correcta: 0,
          explicacion: "El túbulo proximal reabsorbe ≈ 67 % de Na⁺, Cl⁻, K⁺ y agua y el 100 % de la glucosa y los aminoácidos. Es también donde más se secreta."
        },
        {
          texto: "«En el asa gruesa de Henle se reabsorbe un 2 % de la glucosa.» ¿Verdadero o falso?",
          opciones: [
            "Verdadero",
            "Falso: toda la glucosa se reabsorbe en el túbulo proximal",
            "Falso: la glucosa se reabsorbe en el colector",
            "Verdadero, y el resto se excreta"
          ],
          correcta: 1,
          explicacion: "El 100 % de la glucosa filtrada se reabsorbe en el túbulo proximal, por cotransporte con Na⁺ (activo secundario). Si aparece en la orina (glucosuria), sospecha de diabetes."
        },
        {
          texto: "¿Cómo es el líquido tubular al salir del túbulo proximal?",
          opciones: ["Hipoosmótico", "Hiperosmótico", "Isoosmótico respecto al plasma, pero con distinta composición", "Sin agua"],
          correcta: 2,
          explicacion: "En el proximal el agua sigue al soluto, así que el líquido sigue siendo isoosmótico (≈ 300 mOsm), aunque ya no contiene glucosa ni aminoácidos."
        },
        {
          texto: "¿Qué reabsorbe la rama descendente delgada del asa de Henle?",
          opciones: ["Solo NaCl", "Glucosa", "Bicarbonato", "Solo agua (por acuaporinas 1)"],
          correcta: 3,
          explicacion: "La rama descendente es permeable al agua e impermeable a los solutos: pierde agua y el líquido se concentra. La ascendente hace lo contrario."
        },
        {
          texto: "¿Qué característica tiene la rama ascendente del asa de Henle?",
          opciones: [
            "Es impermeable al agua y reabsorbe NaCl (en la gruesa, con el transportador NKCC2)",
            "Reabsorbe el 15 % del agua",
            "Es permeable al agua gracias a la ADH",
            "Secreta glucosa"
          ],
          correcta: 0,
          explicacion: "La rama ascendente es impermeable al agua y reabsorbe sal (en la gruesa, NKCC2: 1 Na⁺, 1 K⁺ y 2 Cl⁻). Por eso el líquido que llega al túbulo distal es hipoosmótico."
        },
        {
          texto: "En las células principales del colector, ¿qué hace la aldosterona?",
          opciones: [
            "Inserta acuaporinas 2",
            "Aumenta la reabsorción de Na⁺ (canales ENaC) y la secreción de K⁺",
            "Secreta H⁺",
            "Reabsorbe glucosa"
          ],
          correcta: 1,
          explicacion: "La aldosterona aumenta los canales ENaC y las bombas Na⁺/K⁺: se reabsorbe más Na⁺ y se secreta más K⁺. Las acuaporinas 2 dependen de la ADH."
        },
        {
          texto: "¿Qué hacen las células intercaladas α del túbulo colector?",
          opciones: [
            "Secretan bicarbonato y alcalinizan la orina",
            "Reabsorben agua",
            "Secretan H⁺ a la orina y devuelven bicarbonato a la sangre",
            "Fabrican renina"
          ],
          correcta: 2,
          explicacion: "Las intercaladas α acidifican la orina (secretan H⁺); las β hacen lo contrario (secretan HCO₃⁻), cuando sobra base."
        },
        {
          texto: "¿Qué sustancia tiene un aclaramiento igual a la TFG y sirve para medirla?",
          opciones: ["La glucosa", "La urea", "La penicilina", "La inulina"],
          correcta: 3,
          explicacion: "La inulina se filtra libremente y no se reabsorbe ni se secreta: su aclaramiento (125 mL/min) es la TFG. El de la glucosa es 0, el de la urea menor y el de la penicilina mayor."
        },
        {
          texto: "¿Por qué el aclaramiento de la penicilina es mayor que la TFG?",
          opciones: [
            "Porque se reabsorbe por completo",
            "Porque además de filtrarse se secreta en el túbulo",
            "Porque no se filtra",
            "Porque se fabrica en el riñón"
          ],
          correcta: 1,
          explicacion: "La penicilina se filtra y además se secreta activamente en el túbulo proximal (transportadores de aniones orgánicos): se depura más plasma del que se filtra."
        },
        {
          texto: "¿Qué indica una creatinina plasmática elevada?",
          opciones: [
            "Que la TFG está disminuida (el riñón filtra menos)",
            "Que la masa muscular es baja",
            "Que el riñón filtra demasiado",
            "Que hay deshidratación sin daño renal, siempre"
          ],
          correcta: 0,
          explicacion: "La creatinina se produce a ritmo constante en el músculo y se elimina sobre todo por filtración: si el riñón filtra menos, se acumula en sangre. Una creatinina baja sugiere poca masa muscular."
        }
      ]
    },

    /* ---------- Tema 18 (1): agua, ADH y sodio ---------- */
    {
      id: "t18",
      numero: "18",
      titulo: "Regulación del agua y del sodio",
      preguntas: [
        {
          texto: "En un adulto en reposo, ¿por dónde se pierde la mayor parte del agua al día?",
          opciones: ["Por las heces", "Por la orina (≈ 1,5 L)", "Por la respiración", "Por el sudor"],
          correcta: 1,
          explicacion: "De ≈ 2,5 L/día que se pierden: orina 1,5 L, sudor y respiración (pérdidas insensibles) 0,9 L y heces 0,1 L."
        },
        {
          texto: "¿Dónde se sintetiza y dónde se libera la ADH (vasopresina)?",
          opciones: [
            "Se sintetiza y se libera en la adenohipófisis",
            "Se sintetiza en el riñón y se libera en la sangre",
            "Se sintetiza en el hipotálamo y se libera en la neurohipófisis",
            "Se sintetiza en la corteza suprarrenal"
          ],
          correcta: 2,
          explicacion: "La ADH es un péptido de 9 aminoácidos que fabrican neuronas del hipotálamo y que se almacena y libera en la hipófisis posterior (neurohipófisis)."
        },
        {
          texto: "¿Cómo actúa la ADH en el riñón?",
          opciones: [
            "Inserta acuaporinas 2 en las células principales del colector y aumenta la reabsorción de agua",
            "Aumenta la reabsorción de Na⁺ en el asa de Henle",
            "Aumenta la filtración glomerular",
            "Secreta potasio"
          ],
          correcta: 0,
          explicacion: "La ADH hace permeables al agua el túbulo distal final y el colector (acuaporinas 2): se reabsorbe agua y la orina sale concentrada."
        },
        {
          texto: "¿Cuál es el estímulo más potente para la secreción de ADH?",
          opciones: [
            "Una bajada de la presión arterial del 1 %",
            "La ingesta de alcohol",
            "El péptido natriurético auricular",
            "Un aumento de la osmolaridad plasmática, aunque sea solo del 1 %"
          ],
          correcta: 3,
          explicacion: "Los osmorreceptores del hipotálamo responden a cambios de solo un 1 % en la osmolaridad. Las bajadas de volumen o presión también estimulan la ADH, pero hace falta que sean mayores (≈ 5-10 %)."
        },
        {
          texto: "¿Por qué el alcohol hace orinar más?",
          opciones: [
            "Porque aumenta la ADH",
            "Porque inhibe la secreción de ADH",
            "Porque aumenta la aldosterona",
            "Porque aumenta la reabsorción de agua"
          ],
          correcta: 1,
          explicacion: "El alcohol y el péptido natriurético auricular inhiben la ADH: el colector se vuelve impermeable al agua y se orina mucho (orina diluida)."
        },
        {
          texto: "¿Qué osmolalidad máxima puede alcanzar la orina en presencia de ADH?",
          opciones: ["50 mOsm/kg", "300 mOsm/kg", "1.200 mOsm/kg", "5.000 mOsm/kg"],
          correcta: 2,
          explicacion: "Con ADH la orina se concentra hasta ≈ 1.200 mOsm/kg (la osmolalidad de la punta de la papila). Sin ADH puede bajar hasta ≈ 50 mOsm/kg."
        },
        {
          texto: "Cuando falta agua, ¿qué se activa primero, la ADH o la sed?",
          opciones: [
            "La sed, siempre antes",
            "Las dos a la vez",
            "Ninguna de las dos",
            "La ADH; cuando ya está al máximo aparece la sed"
          ],
          correcta: 3,
          explicacion: "La ADH tiene un umbral más bajo: primero se intenta conservar agua. Si no basta, se dispara la sed para reponerla. El riñón solo puede conservar agua, no fabricarla."
        },
        {
          texto: "¿Cuál es el orden correcto del sistema renina-angiotensina-aldosterona?",
          opciones: [
            "Renina (riñón) → angiotensinógeno (hígado) → angiotensina I → ECA (pulmón) → angiotensina II → aldosterona",
            "Aldosterona → renina → angiotensina II → angiotensina I",
            "ECA (riñón) → renina (pulmón) → angiotensina I → aldosterona",
            "Angiotensina II → renina → angiotensinógeno → aldosterona"
          ],
          correcta: 0,
          explicacion: "La renina transforma el angiotensinógeno (del hígado) en angiotensina I; la ECA, sobre todo en el pulmón, la convierte en angiotensina II, que estimula la aldosterona de la corteza suprarrenal."
        },
        {
          texto: "¿Cuál de estos NO es un efecto de la angiotensina II?",
          opciones: [
            "Vasoconstricción",
            "Estimular la secreción de ADH y la sed",
            "Estimular la aldosterona",
            "Aumentar la excreción de sodio"
          ],
          correcta: 3,
          explicacion: "La angiotensina II sube la presión: vasoconstricción (sobre todo de la eferente), más simpático, ADH, sed, aldosterona y reabsorción de NaCl. Lo que aumenta la excreción de sodio son los péptidos natriuréticos."
        },
        {
          texto: "¿Cuándo se liberan los péptidos natriuréticos (ANP y BNP) y qué hacen?",
          opciones: [
            "Ante una hemorragia; retienen sodio",
            "Cuando el corazón se distiende por exceso de volumen; aumentan la excreción de NaCl y agua",
            "En la deshidratación; estimulan la ADH",
            "Ante una bajada de la presión; activan la renina"
          ],
          correcta: 1,
          explicacion: "Se liberan al estirarse las aurículas (ANP) y los ventrículos (BNP) y hacen lo contrario del SRAA: ↑ TFG, ↓ renina, aldosterona y ADH → se pierde NaCl y agua."
        }
      ]
    },

    /* ---------- Tema 18 (2): equilibrio ácido-base ---------- */
    {
      id: "t18b",
      numero: "18",
      titulo: "Equilibrio ácido-base",
      preguntas: [
        {
          texto: "¿Cuál es el pH normal del plasma?",
          opciones: ["6,8-7,0", "7,0-7,2", "7,35-7,45", "7,6-7,8"],
          correcta: 2,
          explicacion: "El pH plasmático normal es 7,35-7,45 (≈ 7,4). Por debajo de 7,35 hay acidosis y por encima de 7,45, alcalosis. Fuera de 6,8-7,8 no es posible sobrevivir."
        },
        {
          texto: "¿Qué consecuencia neurológica tiene la acidosis grave?",
          opciones: [
            "Depresión del sistema nervioso central (las neuronas se vuelven menos excitables)",
            "Hiperexcitabilidad y tetania",
            "Hipertermia",
            "Ninguna"
          ],
          correcta: 0,
          explicacion: "En la acidosis las neuronas son menos excitables: depresión del SNC, coma y parada del centro respiratorio. En la alcalosis se vuelven hiperexcitables (hormigueos, tetania)."
        },
        {
          texto: "¿Cuál es la primera línea de defensa frente a los cambios de pH?",
          opciones: ["El riñón", "El sistema respiratorio", "Los sistemas amortiguadores (tampones)", "El hígado"],
          correcta: 2,
          explicacion: "Los tampones actúan al instante neutralizando H⁺ (sin eliminarlo); luego el pulmón (minutos-horas, eliminando CO₂) y por último el riñón (horas-días, lento pero el más potente)."
        },
        {
          texto: "¿Cuál es el principal amortiguador del plasma?",
          opciones: ["El fosfato", "La hemoglobina", "La albúmina", "El bicarbonato"],
          correcta: 3,
          explicacion: "El tampón bicarbonato (24-28 mEq/L) es el principal del líquido extracelular. En el interior de las células predominan las proteínas y los fosfatos."
        },
        {
          texto: "¿Dónde se reabsorbe la mayor parte del bicarbonato filtrado?",
          opciones: ["En el túbulo proximal (≈ 80 %)", "En el asa de Henle (≈ 80 %)", "En el colector (≈ 80 %)", "No se reabsorbe"],
          correcta: 0,
          explicacion: "Prácticamente no se pierde bicarbonato por la orina: ≈ 80 % se reabsorbe en el proximal, 10 % en el asa gruesa y el 10 % restante en el distal y el colector."
        },
        {
          texto: "¿Qué enzima es clave para reabsorber bicarbonato en el túbulo?",
          opciones: ["La renina", "La anhidrasa carbónica", "La ECA", "La plasmina"],
          correcta: 1,
          explicacion: "La anhidrasa carbónica convierte el H₂CO₃ en CO₂ y H₂O (y al revés en la célula), lo que permite recuperar un HCO₃⁻ por cada H⁺ secretado."
        },
        {
          texto: "¿Qué mecanismos permiten al riñón fabricar bicarbonato nuevo en la acidosis?",
          opciones: [
            "La reabsorción de glucosa y de aminoácidos",
            "La secreción de K⁺",
            "La filtración de proteínas",
            "La acidificación del tampón fosfato (acidez titulable) y la excreción de amonio (NH₄⁺)"
          ],
          correcta: 3,
          explicacion: "El H⁺ secretado se elimina unido al fosfato (HPO₄²⁻ → H₂PO₄⁻) o como amonio, y por cada uno se genera un HCO₃⁻ nuevo que pasa a la sangre."
        },
        {
          texto: "¿Qué sistema corrige el pH más rápido, el respiratorio o el renal?",
          opciones: [
            "El renal, en minutos",
            "El respiratorio (minutos-horas); el renal es lento (horas-días)",
            "Los dos tardan días",
            "Ninguno corrige el pH"
          ],
          correcta: 1,
          explicacion: "El pulmón ajusta el CO₂ con la ventilación en minutos; el riñón, que maneja H⁺ y HCO₃⁻, tarda horas o días pero tiene más capacidad."
        },
        {
          texto: "¿Cuándo actúan las células intercaladas β?",
          opciones: [
            "Cuando sobra base: secretan bicarbonato a la orina y reabsorben H⁺",
            "En la acidosis, secretando H⁺",
            "Cuando falta agua",
            "Solo durante el ayuno"
          ],
          correcta: 0,
          explicacion: "Las intercaladas β actúan en situaciones de exceso de base (alcalosis): expulsan HCO₃⁻ a la orina. Las α, que trabajan con dieta normal o acidosis, secretan H⁺."
        },
        {
          texto: "Un paciente tiene un pH de 7,30. ¿Cómo se llama esta situación?",
          opciones: ["Alcalosis", "pH normal", "Acidosis (acidemia)", "Hipernatremia"],
          correcta: 2,
          explicacion: "Un pH por debajo de 7,35 es acidosis o acidemia; por encima de 7,45, alcalosis o alcalemia."
        }
      ]
    },

    /* ---------- Tema 19: micción ---------- */
    {
      id: "t19",
      numero: "19",
      titulo: "Micción",
      preguntas: [
        {
          texto: "¿Qué tipo de control tiene el esfínter uretral interno?",
          opciones: ["Voluntario", "Involuntario (es un engrosamiento del detrusor)", "Lo controla el nervio pudendo", "No tiene control nervioso"],
          correcta: 1,
          explicacion: "El esfínter interno es un engrosamiento del detrusor y se controla de forma involuntaria (SNA). El externo es voluntario y lo inerva el nervio pudendo."
        },
        {
          texto: "¿Qué sistema predomina durante la fase de llenado de la vejiga?",
          opciones: [
            "El parasimpático",
            "El somático exclusivamente",
            "Ninguno: es pasivo",
            "El simpático: relaja el detrusor y contrae el esfínter interno"
          ],
          correcta: 3,
          explicacion: "En el llenado domina el simpático (origen lumbar): la noradrenalina relaja el detrusor (receptores β) y contrae el esfínter interno (receptores α)."
        },
        {
          texto: "¿Qué produce la contracción del músculo detrusor para vaciar la vejiga?",
          opciones: [
            "La acetilcolina del parasimpático sacro",
            "La noradrenalina del simpático",
            "El nervio pudendo",
            "La ADH"
          ],
          correcta: 0,
          explicacion: "El parasimpático (médula sacra, nervios pélvicos) libera acetilcolina, que contrae el detrusor; además relaja el esfínter interno. Truco: «Parasimpático = Pis»."
        },
        {
          texto: "¿Qué nervio controla el esfínter uretral externo?",
          opciones: ["El vago", "El nervio pélvico", "El nervio pudendo", "El frénico"],
          correcta: 2,
          explicacion: "El nervio pudendo (somático, de la médula sacra) mantiene contraído el esfínter externo; para orinar se inhibe de forma voluntaria."
        },
        {
          texto: "¿Con qué volumen aproximado aparece la primera sensación de ganas de orinar?",
          opciones: ["50 mL", "150 mL", "600 mL", "1.000 mL"],
          correcta: 1,
          explicacion: "Según los apuntes, hacia los 150 mL aparecen la primera sensación y pequeñas contracciones miccionales, que van aumentando con el llenado."
        },
        {
          texto: "¿Dónde está el centro nervioso superior más importante que facilita o inhibe la micción?",
          opciones: ["En el cerebelo", "En el hipotálamo", "En la médula cervical", "En el tronco del encéfalo, sobre todo en la protuberancia"],
          correcta: 3,
          explicacion: "La micción es un reflejo medular controlado por centros facilitadores e inhibidores del tronco del encéfalo (protuberancia) y por la corteza cerebral."
        },
        {
          texto: "¿Cuál de estas sustancias NO debe aparecer en la orina normal?",
          opciones: ["Urea", "Sodio", "Glucosa", "Agua"],
          correcta: 2,
          explicacion: "En la orina normal hay agua, urea y electrolitos, con pH 5-7. No debe haber glucosa (glucosuria), proteínas, sangre, leucocitos, bilirrubina ni cuerpos cetónicos."
        },
        {
          texto: "¿Cómo se llama la presencia de bilirrubina en la orina?",
          opciones: ["Coluria", "Piuria", "Hematuria", "Cetonuria"],
          correcta: 0,
          explicacion: "Coluria = bilirrubina; piuria = leucocitos (pus); hematuria = sangre; cetonuria = cuerpos cetónicos; proteinuria = proteínas; glucosuria = glucosa."
        },
        {
          texto: "En la vejiga atónica…",
          opciones: [
            "La vejiga se vacía con micciones frecuentes y abundantes",
            "El cerebro no recibe la información del llenado y la orina sale gota a gota por rebosamiento",
            "El esfínter externo está siempre abierto desde el nacimiento",
            "No se produce orina"
          ],
          correcta: 1,
          explicacion: "Al lesionarse las fibras sensitivas, el cerebro no sabe cuándo está llena la vejiga, no activa el parasimpático y la orina sale gota a gota."
        },
        {
          texto: "¿Qué se modifica en la orina al pasar por los uréteres y la vejiga?",
          opciones: [
            "Se reabsorbe agua",
            "Se secreta potasio",
            "Se concentra por acción de la ADH",
            "Nada: son impermeables y solo la transportan y almacenan"
          ],
          correcta: 3,
          explicacion: "Uréteres y vejiga son impermeables: no cambian la composición de la orina. Todo el ajuste se hace en la nefrona."
        }
      ]
    },

    /* ---------- Repaso del bloque IV ---------- */
    {
      id: "r4",
      numero: "R",
      titulo: "Repaso del bloque IV",
      preguntas: [
        {
          texto: "¿Qué diferencia hay entre secreción y excreción renal?",
          opciones: [
            "Son lo mismo",
            "Secreción: de la sangre al túbulo; excreción: eliminación con la orina",
            "Secreción: del túbulo a la sangre; excreción: filtración",
            "Excreción: solo ocurre en el glomérulo"
          ],
          correcta: 1,
          explicacion: "La secreción pasa sustancias del capilar peritubular al túbulo; la excreción es la salida final de la orina al exterior."
        },
        {
          texto: "¿Qué segmento de la nefrona solo reabsorbe y no secreta?",
          opciones: ["El túbulo proximal", "El túbulo distal", "El conducto colector", "El asa de Henle"],
          correcta: 3,
          explicacion: "Glomérulo: solo filtración; túbulo proximal, distal y colector: reabsorción y secreción; asa de Henle: solo reabsorción."
        },
        {
          texto: "¿Por qué baja la presión oncótica en la cápsula de Bowman hasta casi 0 mmHg?",
          opciones: [
            "Porque el filtrado normal casi no tiene proteínas",
            "Porque el filtrado tiene mucha glucosa",
            "Porque la presión hidrostática es muy alta",
            "Porque se reabsorbe todo el sodio"
          ],
          correcta: 0,
          explicacion: "Las proteínas no atraviesan la barrera de filtración, así que en el espacio de Bowman no generan presión oncótica (salvo en enfermedades con proteinuria)."
        },
        {
          texto: "La angiotensina II contrae sobre todo la arteriola eferente. ¿Qué efecto tiene esto en la TFG cuando baja la presión arterial?",
          opciones: [
            "La reduce a cero",
            "Ayuda a mantenerla, porque sube la presión dentro del glomérulo",
            "No tiene efecto",
            "La reduce porque entra menos sangre"
          ],
          correcta: 1,
          explicacion: "Al contraer la salida del glomérulo sube su presión hidrostática y se preserva la filtración aunque la presión arterial haya bajado."
        },
        {
          texto: "Un paciente tiene la creatinina plasmática alta. ¿Qué es lo más probable?",
          opciones: [
            "Que tiene mucha masa muscular y el riñón sano siempre",
            "Que su TFG está disminuida",
            "Que filtra demasiado",
            "Que ha bebido mucha agua"
          ],
          correcta: 1,
          explicacion: "Si el riñón filtra menos, la creatinina no se elimina y sube en sangre: es el marcador clínico habitual de la función renal."
        },
        {
          texto: "¿Qué líquido llega al túbulo distal desde la rama ascendente gruesa del asa de Henle?",
          opciones: ["Isoosmótico", "Hiperosmótico", "Hipoosmótico", "Sin solutos"],
          correcta: 2,
          explicacion: "La rama ascendente reabsorbe NaCl pero no agua, así que el líquido que sale está diluido (hipoosmótico). Que la orina final sea concentrada o no depende de la ADH."
        },
        {
          texto: "Una persona suda mucho en una maratón y no bebe. ¿Cómo será su orina?",
          opciones: [
            "Abundante y diluida",
            "Normal",
            "Con glucosa",
            "Escasa y concentrada, con densidad alta"
          ],
          correcta: 3,
          explicacion: "Balance de agua negativo → sube la osmolaridad → se libera ADH → se reabsorbe agua en el colector → poca orina, hiperosmótica y de densidad elevada."
        },
        {
          texto: "¿Qué hormona aumenta la secreción de K⁺ en la orina?",
          opciones: ["La aldosterona", "La ADH", "El péptido natriurético", "La eritropoyetina"],
          correcta: 0,
          explicacion: "La aldosterona aumenta la reabsorción de Na⁺ y, a la vez, la secreción de K⁺ en las células principales. Por eso su exceso produce hipopotasemia."
        },
        {
          texto: "¿Qué enzima convierte la angiotensina I en angiotensina II y dónde actúa sobre todo?",
          opciones: [
            "La renina, en el riñón",
            "La anhidrasa carbónica, en el hematíe",
            "La enzima conversora de angiotensina (ECA), en el pulmón",
            "La plasmina, en el hígado"
          ],
          correcta: 2,
          explicacion: "La ECA, abundante en el endotelio pulmonar, transforma la angiotensina I en II. Los IECA (enalapril, captopril) bloquean esta enzima y bajan la presión."
        },
        {
          texto: "En la fase de vaciamiento de la vejiga…",
          opciones: [
            "Se activa el simpático y se contrae el esfínter interno",
            "Se activa el parasimpático, se contrae el detrusor y se relaja voluntariamente el esfínter externo",
            "Se contrae el esfínter externo",
            "El detrusor se relaja"
          ],
          correcta: 1,
          explicacion: "Para orinar, los centros superiores activan el parasimpático (contracción del detrusor y apertura del esfínter interno), inhiben el simpático y el pudendo, y se abre el externo."
        }
      ]
    }
  ]
};
