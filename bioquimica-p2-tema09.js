// Bioquímica · Parcial 2 · Tema 9: Lípidos, estructura y función.
// "correcta" es la posición de la respuesta correcta (0 = primera opción). "imagen" es opcional.
const bioqP2Tema09 = {
  titulo: "Tema 9 · Lípidos: estructura y función",
  tests: [
    {
      id: "p2-t09-1",
      tema: "tema-09",
      numero: "1",
      etiqueta: "Test 1",
      titulo: "Ácidos grasos, triglicéridos y fosfolípidos",
      preguntas: [
        {
          texto: "¿Por qué los lípidos son la reserva energética más eficaz?",
          opciones: [
            "Dan unas 9 kcal/g frente a las 4 kcal/g de glúcidos y proteínas, con poco peso",
            "Porque son muy solubles en agua",
            "Porque se oxidan sin oxígeno",
            "Porque no necesitan enzimas para degradarse"
          ],
          correcta: 0,
          explicacion: "Son moléculas muy reducidas e hidrófobas: almacenan mucha energía en poco peso (≈ 9 kcal/g)."
        },
        {
          texto: "Los lípidos se dividen en saponificables e insaponificables según…",
          opciones: [
            "Si contienen ácidos grasos y forman jabones con una hidrólisis alcalina",
            "Su punto de fusión",
            "Si tienen o no fósforo",
            "Si son de origen animal o vegetal"
          ],
          correcta: 0,
          explicacion: "Saponificables: tienen ácidos grasos (simples: acilglicéridos y ceras; complejos: fosfolípidos y glucolípidos). Insaponificables: terpenos, esteroides y eicosanoides."
        },
        {
          texto: "¿Por qué los ácidos grasos son moléculas anfipáticas?",
          opciones: [
            "Tienen una cadena hidrocarbonada apolar y un grupo carboxilo polar",
            "Tienen dos grupos carboxilo",
            "Son totalmente solubles en agua",
            "Tienen carga positiva en la cadena"
          ],
          correcta: 0,
          explicacion: "La cola apolar es hidrófoba y la cabeza COOH es hidrófila: por eso forman micelas y bicapas."
        },
        {
          texto: "¿Qué significa la notación C18:1Δ9?",
          opciones: [
            "18 carbonos, 1 doble enlace en el carbono 9",
            "18 dobles enlaces y 1 carbono en la posición 9",
            "9 carbonos con 18 hidrógenos",
            "Ácido graso saturado de 18 carbonos"
          ],
          correcta: 0,
          explicacion: "Número de carbonos : número de dobles enlaces y, con Δ, la posición. C18:1Δ9 es el ácido oleico."
        },
        {
          texto: "¿Qué ácido graso tiene el punto de fusión más bajo?",
          opciones: [
            "Linolénico (18 C, 3 dobles enlaces)",
            "Esteárico (18 C, saturado)",
            "Palmítico (16 C, saturado)",
            "Araquídico (20 C, saturado)"
          ],
          correcta: 0,
          explicacion: "Más dobles enlaces = más codos = peor empaquetamiento = menor punto de fusión (líquidos). En los saturados, más larga la cadena, mayor punto de fusión."
        },
        {
          texto: "¿Cuáles son los ácidos grasos esenciales para el ser humano?",
          opciones: ["Linoleico y linolénico", "Palmítico y esteárico", "Oleico y palmitoleico", "Araquidónico y oleico"],
          correcta: 0,
          explicacion: "No podemos sintetizarlos. Del linoleico se obtiene el araquidónico; del linolénico, EPA y DHA. Araquidónico y EPA son precursores de los eicosanoides."
        },
        {
          texto: "¿Qué nos dice el nombre «eicosatetraenoico» del ácido araquidónico?",
          opciones: [
            "20 carbonos, 4 dobles enlaces y grupo ácido",
            "14 carbonos y 4 grupos ácido",
            "20 carbonos saturados",
            "4 carbonos y 20 dobles enlaces"
          ],
          correcta: 0,
          explicacion: "Eicosa = 20 C; -tetraen- = 4 dobles enlaces; -oico = ácido carboxílico."
        },
        {
          texto: "Un triglicérido está formado por…",
          opciones: [
            "Glicerol + 3 ácidos grasos unidos por enlaces éster",
            "Esfingosina + 3 ácidos grasos",
            "Glicerol + 2 ácidos grasos + fosfato",
            "Colesterol + 3 ácidos grasos"
          ],
          correcta: 0,
          explicacion: "Son ésteres de glicerina. Son la principal reserva energética (adipocitos) y también aíslan y protegen los órganos."
        },
        {
          texto: "¿Qué son las ceras?",
          opciones: [
            "Ésteres de ácidos grasos de cadena larga con alcoholes monohidroxilados de cadena larga",
            "Triglicéridos con ácidos grasos insaturados",
            "Derivados del isopreno",
            "Fosfolípidos de membrana"
          ],
          correcta: 0,
          explicacion: "Son sólidas e insolubles en agua: impermeabilizan hojas, frutos, plumas y pelaje."
        },
        {
          texto: "En un fosfoglicérido, ¿qué suele haber en la posición 2 del glicerol?",
          opciones: [
            "Un ácido graso insaturado (p. ej., araquidónico)",
            "Un ácido graso saturado",
            "El grupo fosfato",
            "Un azúcar"
          ],
          correcta: 0,
          explicacion: "C1: ácido graso saturado; C2: insaturado; C3: fosfato unido a un alcohol (colina, etanolamina, serina, inositol…)."
        },
        {
          texto: "¿Qué fosfolipasa hidroliza el enlace señalado con el número 2?",
          imagen: { src: "img/bioquimica-p2/fosfolipasas.svg", alt: "Fosfoglicérido con cuatro enlaces éster numerados" },
          opciones: ["Fosfolipasa A2", "Fosfolipasa A1", "Fosfolipasa C", "Fosfolipasa D"],
          correcta: 0,
          explicacion: "A1 corta el éster de C1 (1); A2 el de C2 (2); C el de C3 con el fosfato (3); D el del fosfato con el alcohol (4)."
        },
        {
          texto: "Las fosfatidilcolinas también se llaman…",
          opciones: ["Lecitinas", "Cefalinas", "Cerebrósidos", "Gangliósidos"],
          correcta: 0,
          explicacion: "Fosfatidilcolinas = lecitinas (carga neta neutra). Fosfatidiletanolaminas y fosfatidilserinas = cefalinas (las de serina tienen carga negativa)."
        },
        {
          texto: "¿Qué función tiene el surfactante pulmonar (rico en fosfolípidos)?",
          opciones: [
            "Disminuir la tensión superficial para que los alvéolos no se colapsen al espirar",
            "Aumentar la tensión superficial alveolar",
            "Transportar oxígeno en sangre",
            "Formar el moco bronquial"
          ],
          correcta: 0,
          explicacion: "Su síntesis madura tarde en el feto: su falta causa el síndrome de dificultad respiratoria del recién nacido (prematuros)."
        }
      ]
    },
    {
      id: "p2-t09-2",
      tema: "tema-09",
      numero: "2",
      etiqueta: "Test 2",
      titulo: "Esfingolípidos, vitaminas liposolubles, colesterol y eicosanoides",
      preguntas: [
        {
          texto: "¿Qué es una ceramida?",
          opciones: [
            "Esfingosina + un ácido graso unido por enlace amida",
            "Glicerol + dos ácidos grasos",
            "Colesterol esterificado",
            "Un azúcar unido a un fosfato"
          ],
          correcta: 0,
          explicacion: "La ceramida es la base de todos los esfingolípidos: esfingomielinas, cerebrósidos y gangliósidos. Abundan en el sistema nervioso."
        },
        {
          texto: "El déficit de esfingomielinasa produce la enfermedad de…",
          opciones: ["Niemann-Pick", "Gaucher", "Tay-Sachs", "Zellweger"],
          correcta: 0,
          explicacion: "Esfingolipidosis: Niemann-Pick (esfingomielinasa), Gaucher (β-glucosidasa, cerebrósidos), Tay-Sachs (β-hexosaminidasa, gangliósidos)."
        },
        {
          texto: "Un cerebrósido está formado por…",
          opciones: [
            "Ceramida + un monosacárido (glucosa o galactosa)",
            "Ceramida + fosfato + colina",
            "Ceramida + una cadena de azúcares con ácido siálico",
            "Glicerol + galactosa"
          ],
          correcta: 0,
          explicacion: "Cerebrósido: ceramida + 1 monosacárido. Gangliósido: ceramida + cadena de azúcares con ácido N-acetilneuramínico (NANA). Esfingomielina: ceramida + fosfato + colina."
        },
        {
          texto: "La enfermedad de Tay-Sachs se debe al déficit de…",
          opciones: ["β-hexosaminidasa, con acumulación de gangliósidos", "Esfingomielinasa", "β-glucosidasa", "Lipasa pancreática"],
          correcta: 0,
          explicacion: "Los gangliósidos (p. ej., GM2) no se degradan y se acumulan, sobre todo en el cerebro."
        },
        {
          texto: "¿Qué tipo de lípidos son las vitaminas A, E y K?",
          opciones: ["Derivados del isopreno (terpenos)", "Fosfolípidos", "Eicosanoides", "Acilglicéridos"],
          correcta: 0,
          explicacion: "Son lípidos insaponificables formados por unidades de isopreno (5 C). La vitamina A es un diterpeno (20 C)."
        },
        {
          texto: "El déficit de vitamina A provoca…",
          opciones: [
            "Ceguera nocturna (nictalopía) y xeroftalmia",
            "Raquitismo",
            "Hemorragias",
            "Anemia perniciosa"
          ],
          correcta: 0,
          explicacion: "El retinal forma la rodopsina (visión en la oscuridad). Al ser liposoluble, su exceso también es tóxico (hepatomegalia, alopecia…)."
        },
        {
          texto: "¿Cuál es el antioxidante natural liposoluble más importante, que protege la membrana de los hematíes?",
          opciones: ["Vitamina E (α-tocoferol)", "Vitamina K", "Vitamina D", "Vitamina A"],
          correcta: 0,
          explicacion: "Su carencia acorta la vida de los hematíes (anemia en el recién nacido) y altera la espermatogénesis."
        },
        {
          texto: "La vitamina K es necesaria para formar los factores de coagulación…",
          opciones: ["II, VII, IX y X", "I, V, VIII y XIII", "VIII y IX solamente", "XI y XII"],
          correcta: 0,
          explicacion: "Factores II (protrombina), VII, IX y X, además de la osteocalcina del hueso. Su carencia causa hemorragias."
        },
        {
          texto: "¿Dónde ocurren las dos hidroxilaciones que activan la vitamina D3?",
          opciones: [
            "Primero en el hígado (C25, calcidiol) y luego en el riñón (C1, calcitriol)",
            "Primero en el riñón y luego en el hígado",
            "Las dos en la piel",
            "En el intestino"
          ],
          correcta: 0,
          explicacion: "La piel forma colecalciferol desde el 7-dehidrocolesterol con luz UV. Hígado → 25-OH (calcidiol); riñón → 1,25-(OH)₂ (calcitriol, la forma activa)."
        },
        {
          texto: "El déficit de vitamina D en niños produce…",
          opciones: ["Raquitismo", "Osteomalacia", "Escorbuto", "Nictalopía"],
          correcta: 0,
          explicacion: "En niños, raquitismo; en adultos, osteomalacia (desmineralización del hueso)."
        },
        {
          texto: "¿De qué molécula derivan las hormonas esteroideas, los ácidos biliares y la vitamina D3?",
          opciones: ["Del colesterol", "Del ácido araquidónico", "Del glicerol", "Del isopreno directamente"],
          correcta: 0,
          explicacion: "El colesterol (27 C, ciclopentanoperhidrofenantreno) da estabilidad a las membranas y es precursor de hormonas esteroideas, ácidos biliares y vitamina D3."
        },
        {
          texto: "¿Cuál es la principal diferencia funcional entre prostaglandinas y tromboxanos?",
          opciones: [
            "Los tromboxanos favorecen la agregación plaquetaria y los trombos; muchas prostaglandinas la inhiben",
            "Las prostaglandinas solo se forman en los hematíes",
            "Los tromboxanos son vasodilatadores y antiinflamatorios",
            "No derivan del ácido araquidónico"
          ],
          correcta: 0,
          explicacion: "Ambos son eicosanoides (20 C) del ácido araquidónico. Tromboxanos: anillo de 6 con O, proagregantes. Prostaglandinas: anillo de 5; dolor, fiebre, inflamación, contracción uterina, vasodilatación."
        },
        {
          texto: "¿Qué enzima inicia la vía que da lugar a los leucotrienos?",
          opciones: ["Lipooxigenasa", "Prostaglandina sintasa (ciclooxigenasa)", "Fosfolipasa C", "HMG-CoA reductasa"],
          correcta: 0,
          explicacion: "La prostaglandina sintasa inicia la vía de prostaglandinas, prostaciclinas y tromboxanos; la lipooxigenasa, la de los leucotrienos (células inmunitarias, inflamación)."
        }
      ]
    }
  ]
};
