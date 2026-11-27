// Bioquímica · Parcial 2 · Tema 8 (I): Glúcidos, estructura y función.
// "correcta" es la posición de la respuesta correcta (0 = primera opción). "imagen" es opcional.
const bioqP2Tema08Estructura = {
  titulo: "Tema 8 (I) · Glúcidos: estructura y función",
  tests: [
    {
      id: "p2-t08a-1",
      tema: "tema-08-1",
      numero: "1",
      etiqueta: "Test 1",
      titulo: "Funciones, clasificación e isomería",
      preguntas: [
        {
          texto: "¿Cuál de estas es una función general de los glúcidos?",
          opciones: ["Energética", "Estructural", "Informativa", "Todas las anteriores"],
          correcta: 3,
          explicacion: "Energética y de reserva (glucógeno, almidón), estructural (celulosa, quitina) e informativa (forman parte de nucleótidos, ácidos nucleicos y coenzimas como el NAD⁺)."
        },
        {
          texto: "¿Cuál es el polisacárido de reserva de las células animales?",
          opciones: ["Glucógeno", "Almidón", "Celulosa", "Quitina"],
          correcta: 0,
          explicacion: "El glucógeno es la reserva animal (hígado y músculo); el almidón, la vegetal."
        },
        {
          texto: "La gluconeogénesis es…",
          opciones: [
            "La formación de glucosa nueva a partir de compuestos no glucídicos",
            "La degradación del glucógeno a glucosa",
            "La destrucción de la glucosa para obtener ATP",
            "La síntesis de glucógeno a partir de glucosa"
          ],
          correcta: 0,
          explicacion: "Gluconeogénesis: glucosa desde lactato, aminoácidos y glicerol (sobre todo en el hígado, en hipoglucemia). Glucogenólisis: rotura del glucógeno. Glucólisis: degradación de la glucosa."
        },
        {
          texto: "Señala la opción INCORRECTA sobre la clasificación de los glúcidos:",
          opciones: [
            "Un oligosacárido está formado por más de 20 monosacáridos",
            "Un disacárido está formado por dos monosacáridos",
            "Un polisacárido tiene más de 10 monosacáridos",
            "Los heterósidos tienen una parte no glucídica"
          ],
          correcta: 0,
          explicacion: "Oligosacáridos: de 2-3 a 10 monosacáridos. Polisacáridos: más de 10. Los holósidos solo tienen osas; los heterósidos, además, una fracción no glucídica."
        },
        {
          texto: "¿Cómo se clasifica la glucosa?",
          opciones: ["Aldohexosa", "Cetohexosa", "Aldopentosa", "Cetopentosa"],
          correcta: 0,
          explicacion: "La glucosa tiene 6 carbonos (hexosa) y un grupo aldehído (aldosa). La fructosa es una cetohexosa y la ribosa una aldopentosa."
        },
        {
          texto: "¿Cuáles son los monosacáridos más sencillos?",
          opciones: [
            "Gliceraldehído y dihidroxiacetona (triosas)",
            "Glucosa y fructosa",
            "Ribosa y desoxirribosa",
            "Eritrosa y treosa"
          ],
          correcta: 0,
          explicacion: "Las triosas (3 C): el gliceraldehído (aldotriosa) y la dihidroxiacetona (cetotriosa)."
        },
        {
          texto: "Glucosa y galactosa solo se diferencian en la posición del OH del carbono 4. Son…",
          opciones: ["Epímeros", "Enantiómeros", "Anómeros", "Isómeros de función"],
          correcta: 0,
          explicacion: "Los epímeros difieren en un solo carbono quiral. Glucosa y galactosa: epímeros en C4; glucosa y manosa: en C2. Galactosa y manosa difieren en dos carbonos, así que no son epímeros."
        },
        {
          texto: "Según la proyección de Fischer, ¿este gliceraldehído es D o L?",
          imagen: { src: "img/bioquimica-p2/gliceraldehido.svg", alt: "Proyección de Fischer del gliceraldehído con el OH a la derecha" },
          opciones: [
            "D, porque el OH del carbono quiral está a la derecha",
            "L, porque el OH está a la derecha",
            "D, porque el grupo aldehído está arriba",
            "No se puede saber sin medir la luz polarizada"
          ],
          correcta: 0,
          explicacion: "D-gliceraldehído: OH del carbono quiral a la derecha; L: a la izquierda. En azúcares más largos se mira el carbono quiral más alejado del carbonilo. D/L no indica hacia dónde desvía la luz (eso es +/−)."
        },
        {
          texto: "¿Cuántos estereoisómeros tiene la glucosa (4 carbonos quirales)?",
          opciones: ["4", "8", "12", "16"],
          correcta: 3,
          explicacion: "Con n carbonos quirales hay 2ⁿ estereoisómeros: 2⁴ = 16."
        },
        {
          texto: "¿Qué son los enantiómeros?",
          opciones: [
            "Imágenes especulares no superponibles",
            "Isómeros que difieren en un solo carbono",
            "Isómeros con distintos grupos funcionales",
            "Formas α y β de un azúcar cíclico"
          ],
          correcta: 0,
          explicacion: "Los enantiómeros (D y L) son imágenes en el espejo. Los diastereoisómeros (como los epímeros o los anómeros α y β) no lo son."
        },
        {
          texto: "Un monosacárido que desvía el plano de la luz polarizada hacia la izquierda es…",
          opciones: ["Levógiro (−)", "Dextrógiro (+)", "De la serie L obligatoriamente", "Ópticamente inactivo"],
          correcta: 0,
          explicacion: "Dextrógiro (+) a la derecha, levógiro (−) a la izquierda. Es una propiedad distinta de la serie D/L."
        },
        {
          texto: "Fructosa, glucosa, manosa y galactosa tienen la misma fórmula (C₆H₁₂O₆) pero distinta estructura. Son…",
          opciones: ["Isómeros", "Polímeros", "Anómeros entre sí", "Enantiómeros entre sí"],
          correcta: 0,
          explicacion: "Misma fórmula química y diferente estructura = isómeros."
        }
      ]
    },
    {
      id: "p2-t08a-2",
      tema: "tema-08-1",
      numero: "2",
      etiqueta: "Test 2",
      titulo: "Formas cíclicas y derivados de los monosacáridos",
      preguntas: [
        {
          texto: "Cuando el grupo aldehído de una aldosa reacciona con un OH de la misma molécula se forma…",
          opciones: ["Un hemiacetal", "Un hemicetal", "Un enlace O-glucosídico", "Un éster fosfato"],
          correcta: 0,
          explicacion: "Aldehído + alcohol → hemiacetal; cetona + alcohol → hemicetal. Así se forma el anillo y aparece el carbono anomérico."
        },
        {
          texto: "¿Qué anómero de la glucopiranosa está dibujado (fíjate en el OH señalado)?",
          imagen: { src: "img/bioquimica-p2/glucopiranosa.svg", alt: "Proyección de Haworth de la glucopiranosa con el OH del carbono 1 hacia abajo" },
          opciones: [
            "α, porque el OH del carbono anomérico está por debajo del plano",
            "β, porque el OH del carbono anomérico está por debajo del plano",
            "α, porque el CH₂OH está arriba",
            "L, porque el OH está abajo"
          ],
          correcta: 0,
          explicacion: "En la proyección de Haworth: α = OH del C1 hacia abajo; β = hacia arriba (mismo lado que el CH₂OH)."
        },
        {
          texto: "Un azúcar con un anillo de seis miembros (5 C + 1 O) es una…",
          opciones: ["Piranosa", "Furanosa", "Pentosa", "Cetosa"],
          correcta: 0,
          explicacion: "Piranosa: anillo de 6 (casi toda la glucosa en solución). Furanosa: anillo de 5 (4 C + 1 O), como la fructosa en la sacarosa."
        },
        {
          texto: "¿Qué es la mutarrotación?",
          opciones: [
            "La interconversión de los anómeros α y β en disolución",
            "El paso de D a L",
            "La oxidación del carbono anomérico",
            "La hidrólisis de un disacárido"
          ],
          correcta: 0,
          explicacion: "En agua, α y β se interconvierten a través de la forma abierta hasta un equilibrio: ≈ 65 % β y 35 % α en la glucosa."
        },
        {
          texto: "En la proyección de Fischer, los enlaces horizontales…",
          opciones: [
            "Salen hacia el lector",
            "Se alejan del lector",
            "Están en el plano del papel",
            "Representan dobles enlaces"
          ],
          correcta: 0,
          explicacion: "Horizontales hacia el lector y verticales hacia dentro del papel."
        },
        {
          texto: "El ácido glucurónico, que se forma al oxidar el CH₂OH terminal de la glucosa, es un…",
          opciones: ["Ácido urónico", "Ácido aldónico", "Ácido aldárico", "Alditol"],
          correcta: 0,
          explicacion: "Urónicos: oxidación del último carbono. Aldónicos: del C1 (aldehído). Aldáricos: de ambos extremos."
        },
        {
          texto: "¿Para qué usa el hígado el ácido glucurónico?",
          opciones: [
            "Para conjugar bilirrubina, fármacos y esteroides y hacerlos más solubles para eliminarlos",
            "Para almacenar glucosa",
            "Para sintetizar colesterol",
            "Como fuente principal de energía"
          ],
          correcta: 0,
          explicacion: "La glucuronidación aumenta la hidrosolubilidad y ayuda a eliminar desechos. Lo verás de nuevo con la bilirrubina (tema 12)."
        },
        {
          texto: "¿Qué alditol se usa por vía intravenosa como diurético y para bajar la presión intracraneal?",
          opciones: ["Manitol", "Sorbitol", "Eritritol", "Glicerol"],
          correcta: 0,
          explicacion: "El manitol se usa como diurético osmótico (edema cerebral, presión intraocular). Los alditoles salen de reducir el carbonilo; el sorbitol y el eritritol son edulcorantes."
        },
        {
          texto: "La glucosamina y la galactosamina son…",
          opciones: ["Aminoazúcares", "Desoxiazúcares", "Ácidos urónicos", "Alditoles"],
          correcta: 0,
          explicacion: "En los aminoazúcares un OH se sustituye por un grupo amino (suelen estar acetilados). Son componentes de polisacáridos estructurales y de la matriz del cartílago."
        },
        {
          texto: "¿Qué desoxiazúcar forma parte del ADN?",
          opciones: ["2-desoxirribosa", "Fucosa", "Ramnosa", "Ribosa"],
          correcta: 0,
          explicacion: "En los desoxiazúcares un OH se sustituye por H. La 2-desoxirribosa es la del ADN; la fucosa y la ramnosa forman parte de glucoproteínas y glucolípidos."
        },
        {
          texto: "Señala la asociación correcta:",
          opciones: [
            "β-L-fucosa — desoxiazúcar",
            "D-xilitol — aminoazúcar",
            "Glucosa-1-fosfato — alditol",
            "Ácido N-acetilmurámico — desoxiazúcar"
          ],
          correcta: 0,
          explicacion: "Fucosa: desoxiazúcar. Xilitol: polialcohol. Glucosa-1-P: éster fosfato. Ácido N-acetilmurámico: aminoazúcar."
        },
        {
          texto: "La ouabaína, que inhibe la bomba Na⁺/K⁺ y se usa en cardiología, es un…",
          opciones: ["Glucósido", "Alditol", "Glucosaminoglucano", "Ácido urónico"],
          correcta: 0,
          explicacion: "Los glucósidos se forman al unir el OH anomérico con el OH de otro compuesto. Otro ejemplo: la amigdalina de las almendras amargas, que libera cianuro."
        }
      ]
    },
    {
      id: "p2-t08a-3",
      tema: "tema-08-1",
      numero: "3",
      etiqueta: "Test 3",
      titulo: "Disacáridos, polisacáridos y glucoproteínas",
      preguntas: [
        {
          texto: "Los carbonos anoméricos que participan en un enlace O-glucosídico…",
          opciones: [
            "Pierden su carácter reductor",
            "Ganan carácter reductor",
            "Se convierten en carbonos no quirales",
            "Se oxidan a ácido"
          ],
          correcta: 0,
          explicacion: "El monosacárido que conserva libre su carbono anomérico es el extremo reductor; el otro, el no reductor."
        },
        {
          texto: "¿Qué disacárido NO es reductor?",
          opciones: ["Sacarosa", "Maltosa", "Lactosa", "Celobiosa"],
          correcta: 0,
          explicacion: "Sacarosa (α1→β2) y trehalosa (α1→α1) unen los dos carbonos anoméricos: no reductoras. Maltosa, lactosa, celobiosa y gentiobiosa sí son reductoras."
        },
        {
          texto: "La sacarosa está formada por…",
          opciones: ["Glucosa + fructosa (α1→β2)", "Glucosa + galactosa (β1→4)", "Glucosa + glucosa (α1→4)", "Glucosa + glucosa (β1→4)"],
          correcta: 0,
          explicacion: "Sacarosa: azúcar de mesa, glucosa + fructosa. Lactosa: galactosa + glucosa β(1→4). Maltosa: glucosa + glucosa α(1→4). Celobiosa: glucosa + glucosa β(1→4)."
        },
        {
          texto: "La intolerancia a la lactosa se debe a…",
          opciones: [
            "Déficit de lactasa, que no rompe el enlace β(1→4) galactosa-glucosa",
            "Exceso de lactasa",
            "Déficit de sacarasa",
            "Alergia a la proteína de la leche"
          ],
          correcta: 0,
          explicacion: "Sin lactasa la lactosa queda en la luz intestinal, arrastra agua por ósmosis y produce diarrea y flatulencia."
        },
        {
          texto: "¿Qué disacárido sale de la digestión del almidón por la amilasa?",
          opciones: ["Maltosa", "Sacarosa", "Lactosa", "Trehalosa"],
          correcta: 0,
          explicacion: "La maltosa (azúcar de malta) es glucosa-α(1→4)-glucosa y procede de la hidrólisis del almidón y el glucógeno."
        },
        {
          texto: "La amilosa es…",
          opciones: [
            "Un polímero lineal de glucosas α(1→4) con forma de hélice",
            "Un polímero ramificado con enlaces α(1→6)",
            "Un polímero lineal de glucosas β(1→4)",
            "Un polímero de N-acetilglucosamina"
          ],
          correcta: 0,
          explicacion: "El almidón tiene amilosa (lineal, helicoidal) y amilopectina (ramificada con α(1→4) y α(1→6), una rama cada 10-20 restos)."
        },
        {
          texto: "¿En qué se diferencia el glucógeno de la amilopectina?",
          opciones: [
            "El glucógeno está más ramificado (una rama cada 8-10 restos)",
            "El glucógeno usa enlaces β(1→4)",
            "El glucógeno no tiene enlaces α(1→6)",
            "El glucógeno es lineal"
          ],
          correcta: 0,
          explicacion: "Los dos usan α(1→4) y α(1→6), pero el glucógeno está más ramificado: más extremos no reductores para movilizar glucosa rápido."
        },
        {
          texto: "¿Por qué los humanos no podemos digerir la celulosa?",
          opciones: [
            "Porque nuestras enzimas no rompen los enlaces β(1→4)",
            "Porque es un polímero de fructosa",
            "Porque está muy ramificada",
            "Porque no tiene glucosa"
          ],
          correcta: 0,
          explicacion: "La celulosa es glucosa unida por enlaces β(1→4): lineal, rígida y resistente. Las enzimas que rompen el almidón (α) no la rompen."
        },
        {
          texto: "La quitina, del exoesqueleto de los artrópodos, es un polímero de…",
          opciones: ["N-acetil-β-D-glucosamina", "α-D-glucosa", "Ácido hialurónico", "Galactosa"],
          correcta: 0,
          explicacion: "Es como la celulosa, pero con el OH del C2 sustituido por un grupo amino acetilado."
        },
        {
          texto: "¿Qué glucosaminoglucano es un anticoagulante natural que actúa a través de la antitrombina III?",
          opciones: ["Heparina", "Ácido hialurónico", "Condroitín sulfato", "Queratán sulfato"],
          correcta: 0,
          explicacion: "La heparina, muy sulfatada, se une a la antitrombina III y el complejo inhibe las enzimas de la coagulación."
        },
        {
          texto: "¿Qué glucosaminoglucano da viscosidad a los humores del ojo y lubrica las articulaciones?",
          opciones: ["Ácido hialurónico", "Heparina", "Dermatán sulfato", "Quitina"],
          correcta: 0,
          explicacion: "El ácido hialurónico retiene mucha agua: matriz de cartílagos y tendones, humor vítreo y acuoso. El condroitín sulfato abunda en cartílago y se usa en la artrosis."
        },
        {
          texto: "Sobre las mucopolisacaridosis, señala la correcta:",
          opciones: [
            "Son enfermedades de depósito por fallo de las enzimas que degradan glucosaminoglucanos",
            "Se deben a un exceso de síntesis de glucógeno",
            "Todas se heredan ligadas al sexo",
            "No afectan a los lisosomas"
          ],
          correcta: 0,
          explicacion: "Los glucosaminoglucanos se acumulan en los lisosomas y los tejidos. Son autosómicas recesivas salvo el síndrome de Hunter, ligado al X."
        }
      ]
    }
  ]
};
