// Bioquímica · Parcial 2 · Tema 12 (II): Metabolismo de la hemoglobina.
// "correcta" es la posición de la respuesta correcta (0 = primera opción). "imagen" es opcional.
const bioqP2Tema12Hemoglobina = {
  titulo: "Tema 12 (II) · Metabolismo de la hemoglobina",
  tests: [
    {
      id: "p2-t12b-1",
      tema: "tema-12-2",
      numero: "1",
      etiqueta: "Test 1",
      titulo: "Síntesis del grupo hemo y porfirias",
      preguntas: [
        {
          texto: "¿Qué estructura tiene el grupo hemo?",
          opciones: [
            "Un anillo tetrapirrólico (porfirina) con un hierro ferroso",
            "Un anillo de purina con magnesio",
            "Una cadena de cuatro aminoácidos",
            "Un esteroide con hierro"
          ],
          correcta: 0,
          explicacion: "Además de en la hemoglobina y la mioglobina, hay grupo hemo en citocromos, catalasa y peroxidasa."
        },
        {
          texto: "¿Con qué dos moléculas empieza la síntesis del grupo hemo?",
          opciones: ["Glicina + succinil-CoA", "Glutamato + acetil-CoA", "Aspartato + oxalacetato", "Alanina + piruvato"],
          correcta: 0,
          explicacion: "Glicina + succinil-CoA → ácido δ-aminolevulínico (ALA), en la mitocondria. El succinil-CoA viene del ciclo de Krebs."
        },
        {
          texto: "¿Cuál es la enzima del paso limitante de la síntesis del hemo y quién la inhibe?",
          opciones: [
            "δ-ALA sintasa, inhibida alostéricamente por el propio hemo",
            "Ferroquelatasa, inhibida por el hierro",
            "Porfobilinógeno sintasa, inhibida por la glicina",
            "Hemo oxigenasa, inhibida por la bilirrubina"
          ],
          correcta: 0,
          explicacion: "Es el primer paso (mitocondria) y el hemo frena su propia síntesis por retroinhibición."
        },
        {
          texto: "¿En qué compartimentos celulares ocurre la síntesis del hemo?",
          opciones: [
            "Empieza en la mitocondria, sigue en el citoplasma y termina en la mitocondria",
            "Solo en el citoplasma",
            "Solo en el retículo endoplásmico",
            "En el núcleo"
          ],
          correcta: 0,
          explicacion: "ALA en la mitocondria; porfobilinógeno → uroporfirinógeno III → coproporfirinógeno III en el citoplasma; protoporfirina y entrada del Fe²⁺ en la mitocondria."
        },
        {
          texto: "¿Qué paso de la síntesis del hemo inhibe el plomo?",
          opciones: [
            "La formación de porfobilinógeno (desplaza al zinc)",
            "La formación de ALA",
            "La entrada del hierro",
            "La salida del coproporfirinógeno"
          ],
          correcta: 0,
          explicacion: "Dos moléculas de ALA forman el porfobilinógeno en una reacción dependiente de zinc; el plomo desplaza al zinc y la bloquea."
        },
        {
          texto: "¿Dónde se sintetiza más grupo hemo?",
          opciones: [
            "En las células eritroides de la médula ósea (hemoglobina) y en el hígado (citocromos)",
            "En el bazo",
            "En el riñón",
            "En el músculo"
          ],
          correcta: 0,
          explicacion: "Todos los tejidos lo sintetizan, pero sobre todo la médula ósea y el hígado."
        },
        {
          texto: "¿Qué proteína transporta el hierro en el plasma hasta la médula ósea?",
          opciones: ["Transferrina", "Ferritina", "Albúmina", "Haptoglobina"],
          correcta: 0,
          explicacion: "La transferrina lo transporta; la ferritina lo almacena. El hierro se incorpora al hemo en forma ferrosa (Fe²⁺)."
        },
        {
          texto: "¿Qué son las porfirias?",
          opciones: [
            "Enfermedades, casi siempre hereditarias, por fallo de una enzima de la síntesis del hemo",
            "Infecciones de la médula ósea",
            "Déficits de hierro en la dieta",
            "Fallos en la degradación de la globina"
          ],
          correcta: 0,
          explicacion: "Se acumulan porfirinas, que dañan sobre todo el sistema nervioso y la piel."
        },
        {
          texto: "¿Cómo se sintetiza la globina?",
          opciones: [
            "Por la biosíntesis de proteínas habitual (traducción en los ribosomas)",
            "A partir del grupo hemo",
            "Por la ruta de las pentosas",
            "A partir del colesterol"
          ],
          correcta: 0,
          explicacion: "La globina es una proteína; su síntesis está coordinada con la del hemo y ligada a la eritropoyesis."
        },
        {
          texto: "¿Qué porcentaje de la hemoglobina se degrada cada día aproximadamente?",
          opciones: ["Alrededor del 1 %", "El 50 %", "El 10 %", "Nada: la hemoglobina no se recambia"],
          correcta: 0,
          explicacion: "Unos glóbulos rojos mueren cada día (viven ≈ 120 días) y esa pérdida se compensa con síntesis nueva."
        }
      ]
    },
    {
      id: "p2-t12b-2",
      tema: "tema-12-2",
      numero: "2",
      etiqueta: "Test 2",
      titulo: "Degradación del hemo, bilirrubina e ictericias",
      preguntas: [
        {
          texto: "¿Dónde se degrada principalmente el grupo hemo?",
          opciones: [
            "En las células reticuloendoteliales del bazo, el hígado y la médula ósea",
            "En el riñón",
            "En el intestino",
            "En el propio eritrocito circulante"
          ],
          correcta: 0,
          explicacion: "El hemo pierde el hierro (que se reutiliza) y se forman los pigmentos biliares."
        },
        {
          texto: "¿Cuál es el orden de la degradación del hemo?",
          imagen: { src: "img/bioquimica-p2/degradacion-hemo.svg", alt: "Esquema de la degradación del hemo hasta estercobilina y urobilina" },
          opciones: [
            "Hemo → biliverdina → bilirrubina → bilirrubina conjugada → urobilinógeno",
            "Hemo → bilirrubina → biliverdina → urobilinógeno",
            "Hemo → urobilinógeno → bilirrubina → biliverdina",
            "Hemo → bilirrubina conjugada → biliverdina → estercobilina"
          ],
          correcta: 0,
          explicacion: "Biliverdina (verde) → bilirrubina (amarilla) → conjugación en el hígado → bilis → intestino → urobilinógeno → estercobilina (heces) o urobilina (orina)."
        },
        {
          texto: "En el esquema (punto 1), ¿cómo viaja por la sangre la bilirrubina no conjugada?",
          imagen: { src: "img/bioquimica-p2/degradacion-hemo.svg", alt: "Esquema de la degradación del hemo con el punto 1 en la bilirrubina no conjugada" },
          opciones: [
            "Unida a la albúmina, porque es insoluble en agua",
            "Disuelta libremente en el plasma",
            "Dentro de los quilomicrones",
            "Unida a la transferrina"
          ],
          correcta: 0,
          explicacion: "La albúmina resuelve su insolubilidad y evita que entre en otros tejidos y sea tóxica."
        },
        {
          texto: "¿Qué ocurre en el hígado con la bilirrubina (punto 2 del esquema)?",
          imagen: { src: "img/bioquimica-p2/degradacion-hemo.svg", alt: "Esquema de la degradación del hemo con el punto 2 en la conjugación hepática" },
          opciones: [
            "Se conjuga con dos moléculas de ácido glucurónico (diglucurónido)",
            "Se oxida a biliverdina",
            "Se une al hierro",
            "Se convierte en urobilina"
          ],
          correcta: 0,
          explicacion: "La conjugación la hace hidrosoluble para eliminarla por la bilis."
        },
        {
          texto: "¿Qué pigmento da el color pardo a las heces?",
          opciones: ["Estercobilina", "Urobilina", "Biliverdina", "Bilirrubina conjugada"],
          correcta: 0,
          explicacion: "Las bacterias intestinales transforman la bilirrubina en urobilinógeno y luego en estercobilina (vía mayoritaria, heces)."
        },
        {
          texto: "¿Qué ocurre con el urobilinógeno que se reabsorbe en el intestino (10-15 %)?",
          opciones: [
            "Una parte vuelve al hígado (circulación enterohepática) y otra se elimina por la orina como urobilina",
            "Se acumula en la piel",
            "Se convierte en hemo de nuevo",
            "Se elimina por el pulmón"
          ],
          correcta: 0,
          explicacion: "En el riñón se filtra y se oxida a urobilina, que da color amarillo a la orina."
        },
        {
          texto: "¿A partir de qué concentración de bilirrubina aparece la ictericia?",
          opciones: ["2-2,5 mg/dl", "0,2 mg/dl", "20 mg/dl", "80 mg/dl"],
          correcta: 0,
          explicacion: "La bilirrubina se deposita en tejidos ricos en fibras elásticas: se ve primero en la conjuntiva y el paladar."
        },
        {
          texto: "Una anemia hemolítica produce una ictericia…",
          opciones: [
            "Prehepática, con aumento de bilirrubina no conjugada",
            "Posthepática, con aumento de bilirrubina conjugada",
            "Hepática, por destrucción de hepatocitos",
            "Que no altera la bilirrubina"
          ],
          correcta: 0,
          explicacion: "Se rompen tantos hematíes que el hígado no da abasto para conjugar: sube la no conjugada. También puede subir si hay poca albúmina."
        },
        {
          texto: "Un cálculo en el colédoco o un cáncer de cabeza de páncreas produce una ictericia…",
          opciones: [
            "Posthepática (colestasis), con aumento de bilirrubina conjugada",
            "Prehepática, con aumento de no conjugada",
            "Hepática por hepatitis",
            "Por déficit de albúmina"
          ],
          correcta: 0,
          explicacion: "La bilirrubina ya está conjugada pero no puede salir a la bilis y vuelve a la sangre."
        },
        {
          texto: "¿Qué enfermedades causan típicamente una ictericia hepática?",
          opciones: [
            "Hepatitis viral, hepatitis crónica y cirrosis",
            "Anemia hemolítica",
            "Coledocolitiasis",
            "Cáncer de cabeza de páncreas"
          ],
          correcta: 0,
          explicacion: "El daño de los hepatocitos o de los conductillos del hígado altera la conjugación y la excreción. El síndrome de Gilbert, por una conjugación hepática algo deficiente, eleva la bilirrubina no conjugada."
        }
      ]
    }
  ]
};
