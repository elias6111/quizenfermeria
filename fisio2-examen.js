// Fisiología · Parcial 2 · Examen general: 40 preguntas de todos los temas, con lo más importante.
// Cada pregunta lleva su "tema" (archivo del apunte) para Mis fallos y Test a medida.
const fisio2Examen = {
  titulo: "Examen general",
  tests: [
    {
      id: "p2-examen",
      numero: "E",
      etiqueta: "Todos los temas",
      titulo: "Examen general del parcial",
      preguntas: [
        /* ---------- Tema 7 ---------- */
        {
          tema: "tema-07",
          texto: "Señale la opción INCORRECTA sobre las enzimas:",
          opciones: [
            "Modifican la constante de equilibrio de la reacción",
            "Disminuyen la energía de activación",
            "Se recuperan intactas al final de la reacción",
            "La mayoría son proteínas"
          ],
          correcta: 0,
          explicacion: "Las enzimas aceleran la reacción pero no cambian el equilibrio."
        },
        {
          tema: "tema-07",
          texto: "Una enzima de la clase 1 según la clasificación EC es una…",
          opciones: ["Oxidorreductasa", "Transferasa", "Hidrolasa", "Ligasa"],
          correcta: 0,
          explicacion: "1 oxidorreductasas, 2 transferasas, 3 hidrolasas, 4 liasas, 5 isomerasas, 6 ligasas, 7 translocasas."
        },
        {
          tema: "tema-07",
          texto: "Respecto a la constante de Michaelis (Km), es cierto que:",
          opciones: [
            "Cuanto mayor es la Km, menor es la afinidad de la enzima por el sustrato",
            "Cuanto mayor es la Km, mayor es la afinidad",
            "Es la velocidad máxima de la reacción",
            "No depende del sustrato"
          ],
          correcta: 0,
          explicacion: "La Km es la [S] a la que se alcanza la mitad de la Vmáx: una Km alta indica poca afinidad."
        },
        {
          tema: "tema-07",
          texto: "¿Qué tipo de inhibición muestra la gráfica de Lineweaver-Burk (las rectas cortan el eje x en el mismo punto)?",
          imagen: { src: "img/fisiologia2/lineweaver-no-competitiva.svg", alt: "Rectas de Lineweaver-Burk que cortan el eje 1/[S] en el mismo punto" },
          opciones: [
            "No competitiva: baja la Vmáx y la Km no cambia",
            "Competitiva: sube la Km y la Vmáx no cambia",
            "Acompetitiva: solo se une al complejo ES",
            "No hay inhibición"
          ],
          correcta: 0,
          explicacion: "Mismo corte con el eje x (−1/Km) = misma Km; el corte con el eje y (1/Vmáx) sube = Vmáx menor."
        },
        {
          tema: "tema-07",
          texto: "La activación de un zimógeno por proteólisis limitada es un mecanismo de…",
          opciones: [
            "Modificación covalente irreversible",
            "Modificación covalente reversible",
            "Regulación alostérica",
            "Inhibición competitiva"
          ],
          correcta: 0,
          explicacion: "Se corta un fragmento de la cadena y la enzima pasa de inactiva a activa, siempre en el mismo sentido."
        },
        {
          tema: "tema-07",
          texto: "Señale la asociación vitamina-coenzima INCORRECTA:",
          opciones: ["B1 — FAD", "B3 — NAD⁺", "B5 — coenzima A", "B6 — piridoxal fosfato"],
          correcta: 0,
          explicacion: "El FAD deriva de la B2 (riboflavina). La B1 (tiamina) da la tiamina pirofosfato (TPP)."
        },
        /* ---------- Tema 8 (I) ---------- */
        {
          tema: "tema-08-1",
          texto: "D-glucosa y D-manosa son…",
          opciones: ["Epímeros en C2", "Epímeros en C4", "Enantiómeros", "Anómeros"],
          correcta: 0,
          explicacion: "Glucosa-manosa: epímeros en C2. Glucosa-galactosa: epímeros en C4."
        },
        {
          tema: "tema-08-1",
          texto: "Sobre la ciclación de la glucosa, señale la correcta:",
          opciones: [
            "Se forma un hemiacetal y aparece un nuevo carbono quiral, el anomérico",
            "Se forma un hemicetal porque la glucosa es una cetosa",
            "En disolución predomina la forma lineal",
            "Los anómeros α y β son enantiómeros"
          ],
          correcta: 0,
          explicacion: "La glucosa es una aldosa (hemiacetal). En disolución predomina la forma cíclica, y α y β son diastereoisómeros."
        },
        {
          tema: "tema-08-1",
          texto: "La lactosa está formada por…",
          opciones: ["Galactosa y glucosa con enlace β(1→4)", "Glucosa y fructosa con enlace α(1→2)", "Dos glucosas α(1→4)", "Dos glucosas β(1→4)"],
          correcta: 0,
          explicacion: "Es el azúcar de la leche y es reductora. La hidroliza la lactasa."
        },
        {
          tema: "tema-08-1",
          texto: "¿Qué tienen en común el almidón, el glucógeno y la celulosa?",
          opciones: [
            "Son polímeros de glucosa",
            "Tienen enlaces β(1→4)",
            "Son ramificados",
            "Son reservas de energía animal"
          ],
          correcta: 0,
          explicacion: "Los tres son de glucosa, pero difieren en el enlace: α en almidón y glucógeno (reservas), β(1→4) en celulosa (estructural)."
        },
        {
          tema: "tema-08-1",
          texto: "Señale la opción correcta sobre los derivados de los monosacáridos:",
          opciones: [
            "La desoxirribosa del ADN es un desoxiazúcar",
            "El ácido glucurónico es un aminoazúcar",
            "El sorbitol es un ácido urónico",
            "La glucosamina es un alditol"
          ],
          correcta: 0,
          explicacion: "Glucurónico: ácido urónico. Sorbitol: alditol. Glucosamina: aminoazúcar."
        },
        /* ---------- Tema 8 (II) ---------- */
        {
          tema: "tema-08-2",
          texto: "¿Cuántas reacciones irreversibles tiene la glucólisis?",
          opciones: ["1", "3", "7", "10"],
          correcta: 1,
          explicacion: "3 irreversibles (hexoquinasa, PFK-1, piruvato quinasa) y 7 reversibles."
        },
        {
          tema: "tema-08-2",
          texto: "Señale la opción INCORRECTA sobre la glucólisis:",
          opciones: [
            "Necesita oxígeno para funcionar",
            "Ocurre en el citoplasma",
            "Produce ATP por fosforilación a nivel de sustrato",
            "Todos sus intermediarios, salvo glucosa y piruvato, son ésteres fosfóricos"
          ],
          correcta: 0,
          explicacion: "La glucólisis funciona sin oxígeno (anaerobia → lactato); con oxígeno el piruvato continúa en la mitocondria."
        },
        {
          tema: "tema-08-2",
          texto: "¿Qué transportador GLUT es dependiente de insulina?",
          opciones: ["GLUT4", "GLUT1", "GLUT2", "GLUT5"],
          correcta: 0,
          explicacion: "GLUT4 en músculo y tejido adiposo."
        },
        {
          tema: "tema-08-2",
          texto: "El complejo piruvato deshidrogenasa necesita las coenzimas…",
          opciones: [
            "TPP, ácido lipoico, CoA, FAD y NAD⁺",
            "Biotina y ATP",
            "PLP y NADPH",
            "Solo NAD⁺"
          ],
          correcta: 0,
          explicacion: "5 coenzimas: TPP (B1), lipoico, CoA (B5), FAD (B2) y NAD⁺ (B3). La biotina es de la piruvato carboxilasa."
        },
        {
          tema: "tema-08-2",
          texto: "¿Qué intermediario del ciclo de Krebs se usa para sintetizar el grupo hemo?",
          imagen: { src: "img/fisiologia2/krebs.svg", alt: "Ciclo de Krebs con sus intermediarios" },
          opciones: ["Succinil-CoA", "Citrato", "Fumarato", "Malato"],
          correcta: 0,
          explicacion: "Glicina + succinil-CoA → ALA, primer paso de la síntesis del hemo (tema 12)."
        },
        {
          tema: "tema-08-2",
          texto: "En la cadena respiratoria, ¿qué molécula lleva los electrones del complejo III al IV?",
          imagen: { src: "img/fisiologia2/cadena-respiratoria.svg", alt: "Cadena transportadora de electrones" },
          opciones: ["Citocromo c", "Coenzima Q (ubiquinona)", "FADH₂", "ATP sintasa"],
          correcta: 0,
          explicacion: "La coenzima Q lleva electrones de I y II al III; el citocromo c, del III al IV."
        },
        {
          tema: "tema-08-2",
          texto: "¿Cuántos ATP se obtienen de una glucosa en anaerobiosis frente a aerobiosis (valores reales)?",
          opciones: ["2 frente a 30-32", "2 frente a 2", "36 frente a 38", "4 frente a 12"],
          correcta: 0,
          explicacion: "La glucólisis anaerobia solo rinde 2 ATP; la oxidación completa, 30-32 (o 36-38 con los valores teóricos de 3 y 2 ATP)."
        },
        {
          tema: "tema-08-2",
          texto: "La ruta de las pentosas fosfato…",
          opciones: [
            "Produce NADPH y ribosa-5-P sin formar ni gastar ATP",
            "Produce 2 ATP por glucosa",
            "Ocurre en la mitocondria",
            "Es muy activa en el músculo esquelético"
          ],
          correcta: 0,
          explicacion: "Es citoplasmática, empieza en la G6P y es activa en hígado, adiposo, riñón y eritrocito."
        },
        {
          tema: "tema-08-2",
          texto: "¿Qué enzima, presente en el hígado y ausente en el músculo, permite liberar glucosa a la sangre?",
          opciones: ["Glucosa-6-fosfatasa", "Hexoquinasa", "Glucógeno fosforilasa", "Fosfoglucomutasa"],
          correcta: 0,
          explicacion: "Por eso el glucógeno hepático mantiene la glucemia y el muscular solo sirve de combustible al músculo."
        },
        {
          tema: "tema-08-2",
          texto: "¿Cuál de estos NO es un precursor de la gluconeogénesis?",
          opciones: ["Ácidos grasos de cadena par", "Lactato", "Glicerol", "Alanina"],
          correcta: 0,
          explicacion: "Los ácidos grasos de cadena par solo dan acetil-CoA, que no puede convertirse en glucosa. Lactato, glicerol, alanina y piruvato sí."
        },
        /* ---------- Tema 9 ---------- */
        {
          tema: "tema-09",
          texto: "¿Cuál de estos lípidos es insaponificable?",
          opciones: ["Colesterol", "Triglicérido", "Lecitina", "Esfingomielina"],
          correcta: 0,
          explicacion: "Los insaponificables no tienen ácidos grasos: terpenos (vitaminas A, E, K), esteroides (colesterol) y eicosanoides."
        },
        {
          tema: "tema-09",
          texto: "La enfermedad de Gaucher se debe al acúmulo de…",
          opciones: ["Cerebrósidos (déficit de β-glucosidasa)", "Esfingomielina", "Gangliósidos", "Glucógeno"],
          correcta: 0,
          explicacion: "Gaucher: cerebrósidos. Niemann-Pick: esfingomielina. Tay-Sachs: gangliósidos."
        },
        {
          tema: "tema-09",
          texto: "La forma activa de la vitamina D es…",
          opciones: ["Calcitriol (1,25-dihidroxicolecalciferol)", "Calcidiol (25-hidroxicolecalciferol)", "7-dehidrocolesterol", "Ergosterol"],
          correcta: 0,
          explicacion: "Piel (UV) → colecalciferol → hígado (C25) → calcidiol → riñón (C1) → calcitriol."
        },
        {
          tema: "tema-09",
          texto: "¿De qué ácido graso derivan la mayoría de los eicosanoides?",
          opciones: ["Ácido araquidónico", "Ácido palmítico", "Ácido esteárico", "Ácido oleico"],
          correcta: 0,
          explicacion: "Prostaglandinas, tromboxanos y leucotrienos se forman a partir de ácidos grasos de 20 C como el araquidónico (y el EPA)."
        },
        /* ---------- Tema 10 ---------- */
        {
          tema: "tema-10",
          texto: "Señale la opción correcta sobre la lipasa pancreática:",
          opciones: [
            "Necesita colipasa y sales biliares y libera 2-monoacilglicérido y 2 ácidos grasos",
            "Actúa sobre todo en el estómago a pH 2",
            "Hidroliza solo el enlace de C2",
            "Su déficit leve (por debajo del 90 %) ya causa malabsorción"
          ],
          correcta: 0,
          explicacion: "Se secreta en exceso: solo si cae por debajo del 10 % de lo normal hay malabsorción."
        },
        {
          tema: "tema-10",
          texto: "¿Qué sistema permite a los acil-CoA de cadena larga entrar en la matriz mitocondrial?",
          opciones: [
            "La lanzadera de carnitina (carnitina aciltransferasas I y II)",
            "La lanzadera malato-aspartato",
            "El transportador GLUT1",
            "La ATP sintasa"
          ],
          correcta: 0,
          explicacion: "CAT I (fuera) → acilcarnitina → translocasa → CAT II (dentro) → acil-CoA."
        },
        {
          tema: "tema-10",
          texto: "En la β-oxidación, el primer paso de cada vuelta lo cataliza la acil-CoA deshidrogenasa, que produce…",
          imagen: { src: "img/fisiologia2/beta-oxidacion.svg", alt: "Las cuatro reacciones de la β-oxidación" },
          opciones: ["FADH₂", "NADH", "NADPH", "ATP"],
          correcta: 0,
          explicacion: "Paso 1: FADH₂; paso 3 (3-hidroxiacil-CoA deshidrogenasa): NADH."
        },
        {
          tema: "tema-10",
          texto: "Compare la β-oxidación con la síntesis de ácidos grasos. Señale la INCORRECTA:",
          opciones: [
            "Las dos ocurren en la matriz mitocondrial",
            "La síntesis usa NADPH y la β-oxidación genera NADH y FADH₂",
            "La síntesis usa ACP como portador del acilo y la β-oxidación usa CoA",
            "La síntesis añade unidades de 2 C desde malonil-CoA"
          ],
          correcta: 0,
          explicacion: "La síntesis es citosólica; la β-oxidación, mitocondrial. Además, cada una inhibe a la otra."
        },
        {
          tema: "tema-10",
          texto: "La cetogénesis ocurre en…",
          opciones: [
            "Las mitocondrias del hígado",
            "El citoplasma del músculo",
            "El cerebro",
            "El tejido adiposo"
          ],
          correcta: 0,
          explicacion: "El hígado fabrica los cuerpos cetónicos pero no los usa; los exporta a corazón, músculo y cerebro."
        },
        {
          tema: "tema-10",
          texto: "La HMG-CoA reductasa…",
          opciones: [
            "Es la enzima reguladora de la síntesis de colesterol; la insulina la estimula",
            "Forma acetoacetato en la cetogénesis",
            "Es la enzima reguladora de la síntesis de ácidos grasos",
            "Está inhibida por la insulina"
          ],
          correcta: 0,
          explicacion: "Convierte HMG-CoA en mevalonato. La HMG-CoA liasa es la de la cetogénesis; la acetil-CoA carboxilasa, la de los ácidos grasos."
        },
        /* ---------- Tema 11 ---------- */
        {
          tema: "tema-11",
          texto: "La aspartato transaminasa (AST o GOT) transforma el aspartato en…",
          opciones: ["Oxalacetato", "Piruvato", "Fumarato", "Glutamina"],
          correcta: 0,
          explicacion: "El amino pasa al α-cetoglutarato, que se convierte en glutamato."
        },
        {
          tema: "tema-11",
          texto: "Sobre el ciclo de la urea, señale la INCORRECTA:",
          opciones: [
            "Ocurre sobre todo en el riñón",
            "Empieza con la carbamoil fosfato sintetasa I mitocondrial",
            "Un nitrógeno de la urea procede del aspartato",
            "Sirve para eliminar el amoníaco"
          ],
          correcta: 0,
          explicacion: "El ciclo de la urea es hepático; el riñón solo excreta la urea."
        },
        {
          tema: "tema-11",
          texto: "¿Qué aminoacidopatía produce secundariamente un déficit de tirosina?",
          opciones: ["Fenilcetonuria", "Tirosinemia", "Homocistinuria", "Enfermedad de la orina con olor a jarabe de arce"],
          correcta: 0,
          explicacion: "La tirosina sale de la fenilalanina: si esta no se convierte, falta tirosina."
        },
        /* ---------- Tema 12 (I) ---------- */
        {
          tema: "tema-12-1",
          texto: "¿Qué bases nitrogenadas son pirimidinas?",
          opciones: ["Citosina, timina y uracilo", "Adenina y guanina", "Adenina, citosina y timina", "Guanina y uracilo"],
          correcta: 0,
          explicacion: "Pirimidinas: C, T, U (un anillo). Purinas: A y G (dos anillos)."
        },
        {
          tema: "tema-12-1",
          texto: "Señale la diferencia correcta entre la síntesis de novo de purinas y de pirimidinas:",
          opciones: [
            "En las purinas el anillo se construye sobre el PRPP; en las pirimidinas primero se forma la base y luego se une al PRPP",
            "Las dos parten del carbamoil fosfato",
            "Las pirimidinas se construyen sobre el PRPP desde el principio",
            "Las purinas no necesitan PRPP"
          ],
          correcta: 0,
          explicacion: "Purinas: PRPP → … → IMP → AMP/GMP. Pirimidinas: carbamoil fosfato → orotato → OMP (con PRPP) → UMP."
        },
        {
          tema: "tema-12-1",
          texto: "Un aumento de ácido úrico en sangre (gota) se relaciona con…",
          opciones: [
            "El catabolismo de las purinas",
            "El catabolismo de las pirimidinas",
            "El ciclo de la urea",
            "La degradación del hemo"
          ],
          correcta: 0,
          explicacion: "Hipoxantina y xantina → ácido úrico, producto final de las purinas en el ser humano."
        },
        {
          tema: "tema-12-1",
          texto: "¿Qué enzima forma el dTMP a partir del dUMP?",
          opciones: ["Timidilato sintasa", "Ribonucleótido reductasa", "HGPRT", "Aspartato carbamoil transferasa"],
          correcta: 0,
          explicacion: "Añade un metilo al dUMP. La ribonucleótido reductasa es la que quita el OH del C2'."
        },
        /* ---------- Tema 12 (II) ---------- */
        {
          tema: "tema-12-2",
          texto: "El primer paso de la síntesis del grupo hemo…",
          opciones: [
            "Ocurre en la mitocondria y es el paso limitante (δ-ALA sintasa)",
            "Ocurre en el citoplasma con glutamato y acetil-CoA",
            "Lo inhibe el plomo desplazando al zinc",
            "Es la incorporación del hierro"
          ],
          correcta: 0,
          explicacion: "Glicina + succinil-CoA → ALA. El plomo bloquea el paso siguiente (porfobilinógeno)."
        },
        {
          tema: "tema-12-2",
          texto: "Un paciente con ictericia por cálculos en el colédoco tendrá elevada en sangre…",
          opciones: ["Bilirrubina conjugada", "Bilirrubina no conjugada", "Biliverdina", "Estercobilina"],
          correcta: 0,
          explicacion: "Ictericia posthepática (obstructiva): la bilirrubina ya conjugada no sale por la bilis y pasa a la sangre."
        }
      ]
    }
  ]
};
