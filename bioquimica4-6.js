// Preguntas del cuestionario de prueba.
// "correcta" es la posición de la respuesta correcta (0 = primera opción).
const preguntas = [
  /* ==========================================================================
     TEMA 1: GENERALIDADES DE LAS BIOMOLÉCULAS INORGÁNICAS Y AGUA
     ========================================================================== */
  {
    texto: "¿Cuál es la geometría y distribución de cargas en la molécula de agua que explica su dipolaridad?",
    opciones: [
      "Geometría lineal con carga neutra homogénea",
      "Carga parcial negativa en el oxígeno y carga parcial positiva en los hidrógenos",
      "Carga parcial positiva en el oxígeno y carga parcial negativa en los hidrógenos",
      "Geometría apolar con enlaces iónicos coordinados"
    ],
    correcta: 1,
    explicacion: "Al ser el oxígeno más electronegativo que el hidrógeno, atrae fuertemente los electrones del enlace covalente, generando una densidad de carga parcial negativa en el oxígeno y positiva en los hidrógenos[cite: 26]."
  },
  {
    texto: "¿Con cuántas moléculas de agua adyacentes puede unirse una molécula de agua mediante puentes de hidrógeno?",
    opciones: ["2", "4", "6", "8"],
    correcta: 1,
    explicacion: "Cada molécula de agua tiene la capacidad de formar puentes de hidrógeno intermoleculares con otras 4 moléculas de agua vecinas[cite: 27]."
  },
  {
    texto: "¿A qué temperatura alcanza el agua su máxima densidad?",
    opciones: ["0 °C", "4 °C", "37 °C", "100 °C"],
    correcta: 1,
    explicacion: "El agua alcanza su máxima densidad en estado líquido a los 4 °C debido al empaquetamiento molecular y la disposición de sus enlaces de hidrógeno[cite: 27]."
  },
  {
    texto: "¿Qué nombre recibe la disposición supramolecular que adoptan las moléculas anfipáticas en medio acuoso dejando sus colas apolares hacia el interior?",
    opciones: ["Esferas de solvatación", "Micelas o bicapas", "Disoluciones coloidales ácidas", "Complejos prostéticos"],
    correcta: 1,
    explicacion: "Las sustancias anfipáticas organizan sus regiones hidrófobas hacia el interior aislado y sus cabezas polares hacia el agua formando micelas, bicapas o monocapas[cite: 28]."
  },
  {
    texto: "¿Cuál es el principal tampón o sistema amortiguador del pH en la sangre y plasma humano?",
    opciones: ["Tampón Fosfato", "Tampón Bicarbonato", "Tampón Hemoglobina intracelular", "Tampón Sulfato"],
    correcta: 1,
    explicacion: "El sistema tampón bicarbonato ($HCO_3^- / H_2CO_3$) es el amortiguador fisiológico predominante en el medio extracelular y la sangre[cite: 29, 31]."
  },
  {
    texto: "¿Qué alteración del equilibrio ácido-base se produce si un paciente hiperventila expulsando un exceso de $CO_2$?",
    opciones: ["Acidosis metabólica", "Alcalosis metabólica", "Acidosis respiratoria", "Alcalosis respiratoria"],
    correcta: 3,
    explicacion: "La disminución de $CO_2$ gaseoso en sangre por hiperventilación provoca un desplazamiento del equilibrio del tampón reduciendo la concentración de $H^+$, ocasionando una alcalosis respiratoria[cite: 31]."
  },

  /* ==========================================================================
     TEMA 2: AMINOÁCIDOS Y ENLACE PEPTÍDICO
     ========================================================================== */
  {
    texto: "¿Cuál es el único aminoácido proteico que carece de carbono asimétrico ($C_\alpha$) y no presenta estereoisomería D o L?",
    opciones: ["Alanina (Ala)", "Glicina (Gly)", "Prolina (Pro)", "Cisteína (Cys)"],
    correcta: 1,
    explicacion: "La glicina tiene dos átomos de hidrógeno unidos a su carbono alfa, por lo que carece de centro quiral o asimétrico[cite: 33, 36]."
  },
  {
    texto: "¿A qué serie estereoquímica pertenecen todos los aminoácidos presentes de forma natural en las proteínas humanas?",
    opciones: ["Serie D", "Serie L", "Serie Alfa-racémica", "Serie Levógira sintética"],
    correcta: 1,
    explicacion: "Todos los aminoácidos proteicos hallados en la naturaleza y en las proteínas pertenecen a la serie L[cite: 36]."
  },
  {
    texto: "¿Qué aminoácido provoca rigidez estructural y rompe la continuidad de las hélices alfa debido a su estructura cíclica?",
    opciones: ["Triptófano (Trp)", "Histidina (His)", "Prolina (Pro)", "Metionina (Met)"],
    correcta: 2,
    explicacion: "La prolina es un iminoácido cíclico cuya rigidez en la cadena lateral restringe la flexión e impide la formación del puente de hidrógeno adecuado, rompiendo la hélice alfa[cite: 33, 40]."
  },
  {
    texto: "¿Qué enlace covalente se forma tras la oxidación de dos residuos de Cisteína?",
    opciones: ["Enlace amida", "Puente disulfuro (formando Cistina)", "Enlace éster fosfórico", "Enlace glucosídico"],
    correcta: 1,
    explicacion: "Los grupos tiol (-SH) de dos cisteínas se oxidan para constituir un enlace covalente denominado puente disulfuro, dando lugar a la cistina[cite: 34]."
  },
  {
    texto: "¿Cuál de las siguientes parejas de aminoácidos presenta carga positiva (básicos) a pH fisiológico?",
    opciones: ["Ácido aspártico y Ácido glutámico", "Serina y Treonina", "Lisina y Arginina", "Leucina e Isoleucina"],
    correcta: 2,
    explicacion: "La Lisina (Lys) y la Arginina (Arg) poseen grupos laterales cargados positivamente a pH fisiológico[cite: 34]."
  },
  {
    texto: "¿Qué característica geométrica y de rotación presenta el enlace peptídico?",
    opciones: [
      "Es completamente flexible con rotación libre en 360 grados",
      "Posee carácter parcial de doble enlace y plano, lo que impide el giro sobre su propio eje",
      "Es un enlace de hidrógeno débil que se rompe a temperatura corporal",
      "Solo se presenta en conformación cis en todas las proteínas"
    ],
    correcta: 1,
    explicacion: "El enlace peptídico tiene resonancia y carácter parcial de doble enlace, lo que le otorga rigidez plana e impide el giro entre el carbono carbonílico y el nitrógeno amídico[cite: 37]."
  },

  /* ==========================================================================
     TEMA 3: ESTRUCTURA Y CLASIFICACIÓN DE PROTEÍNAS
     ========================================================================== */
  {
    texto: "¿Qué reactivo se utiliza en la reacción de Edman para identificar secuencialmente el residuo N-terminal de una cadena peptídica?",
    opciones: ["Dinitroclorobenceno", "Fenilisotiocianato (PITC)", "Ninhidrina", "Carboxipeptidasa B"],
    correcta: 1,
    explicacion: "El reactivo de Edman es el fenilisotiocianato, el cual marca y libera secuencialmente el aminoácido del extremo N-terminal sin destruir completamente el resto del péptido[cite: 39]."
  },
  {
    texto: "¿Qué parámetros caracterizan a la conformación de la Hélice Alfa en la estructura secundaria?",
    opciones: [
      "Hélice levógira con 2.0 residuos por vuelta",
      "Hélice dextrógira con aproximadamente 3.6 residuos por vuelta y un paso de $5.4\\ \\text{Å}$",
      "Lámina extendida en zig-zag sin enlaces de hidrógeno intracatenarios",
      "Estructura supersecundaria compuesta exclusivamente por prolinas"
    ],
    correcta: 1,
    explicacion: "La hélice alfa es una estructura dextrógira estable con 3.6 residuos por vuelta y un paso de hélice de $5.4\\ \\text{Å}$ ($0.54\\ \\text{nm}$)[cite: 40]."
  },
  {
    texto: "¿Cómo se define la desnaturalización de una proteína?",
    opciones: [
      "La ruptura de los enlaces peptídicos de la estructura primaria",
      "La pérdida de la estructura terciaria (y secundaria/cuaternaria) manteniendo intacta la estructura primaria",
      "La disociación reversible de subunidades sin alterar el plegamiento tridimensional",
      "El paso de proteína fibrosa a globular mediante agentes reductores"
    ],
    correcta: 1,
    explicacion: "La desnaturalización implica la pérdida de las estructuras superior tridimensional (terciaria/cuaternaria) y de la función biológica, sin hidrolizar los enlaces peptídicos de la estructura primaria[cite: 42]."
  },
  {
    texto: "¿Cómo se denomina a la parte proteica inactiva de una heteroproteína que carece de su grupo prostético?",
    opciones: ["Holoproteína", "Apoproteína", "Cromóforo", "Monomero alostérico"],
    correcta: 1,
    explicacion: "Una heteroproteína consta de la apoproteína (parte puramente peptídica) y el grupo prostético (componente no proteico)[cite: 41, 43]."
  },

  /* ==========================================================================
     TEMA 4: PROTEÍNAS TRANSPORTADORAS DE OXÍGENO
     ========================================================================== */
  {
    texto: "¿En qué estado de oxidación debe encontrarse el hierro en el grupo hemo para unir oxígeno de forma reversible?",
    opciones: ["Estado ferroso (Fe2+)", "Estado férrico (Fe3+)", "Estado ferrilo (Fe4+)", "Estado neutro (Fe0)"],
    correcta: 0,
    explicacion: "El hierro debe estar en estado ferroso (Fe2+) para transportar O₂ de manera reversible. Si se oxida a Fe3+, pasa a metahemoglobina y no puede transportar O₂[cite: 1, 6, 43]."
  },
  {
    texto: "¿Qué átomo y residuo de aminoácido se coordina con la quinta valencia del Fe2+ en el hemo?",
    opciones: ["Nitrógeno de la Histidina proximal (F8)", "Oxígeno de la Histidina distal (E7)", "Azufre de una Cisteína", "Nitrógeno de una Lisina"],
    correcta: 0,
    explicacion: "La 5ª valencia de coordinación del Fe2+ se une covalentemente al nitrógeno de la Histidina proximal (F8)[cite: 2, 43]."
  },
  {
    texto: "¿Qué función cumple la Histidina distal (E7) en la mioglobina y hemoglobina?",
    opciones: [
      "Unirse directamente a la quinta valencia del hierro",
      "Estabilizar la molécula de O₂ unida e impedir la salida abrupta o la oxidación",
      "Catalizar la oxidación de Fe2+ a Fe3+",
      "Sintetizar el anillo de protoporfirina IX"
    ],
    correcta: 1,
    explicacion: "La Histidina distal (E7) estabiliza la unión del $O_2$ y reduce la afinidad relativa por otros gases como el CO[cite: 3, 43]."
  },
  {
    texto: "¿Qué tipo de gráfica representa la curva de saturación por O₂ de la mioglobina?",
    opciones: ["Curva sigmoidea", "Curva hiperbólica", "Línea recta con pendiente positiva", "Curva parabólica descendente"],
    correcta: 1,
    explicacion: "Al ser un monómero con un único sitio de unión, la mioglobina presenta una curva de disociación hiperbólica[cite: 3, 7, 44]."
  },
  {
    texto: "¿Qué indica el valor de P50 en la curva de saturación de una proteína transportadora de O₂?",
    opciones: [
      "La presión total de nitrógeno en el eritrocito",
      "La presión parcial de O₂ a la cual la proteína está saturada al 50%",
      "La concentración máxima de dióxido de carbono disuelto",
      "El porcentaje de hierro en estado férrico"
    ],
    correcta: 1,
    explicacion: "La P50 es la presión parcial de $O_2$ necesaria para alcanzar el 50% de saturación de la proteína. A menor P50, mayor es la afinidad por el oxígeno[cite: 3, 4]."
  },
  {
    texto: "¿Cuál es el valor aproximado de P50 de la mioglobina humana?",
    opciones: ["~1-4 mm Hg (Torr)", "26 mm Hg", "100 mm Hg", "0.1 mm Hg"],
    correcta: 0,
    explicacion: "La mioglobina tiene una P50 muy baja (~1-4 mm Hg), lo que demuestra su altísima afinidad por el $O_2$[cite: 3]."
  },
  {
    texto: "¿Qué consecuencia funcional tiene la alta afinidad de la mioglobina por el oxígeno?",
    opciones: [
      "Libera O₂ fácilmente en las arterias",
      "Retiene el O₂ y solo lo cede en condiciones de hipoxia tisular severa",
      "Transporta CO₂ directamente desde los tejidos a los pulmones",
      "Evita el cambio conformacional de la hemoglobina"
    ],
    correcta: 1,
    explicacion: "La mioglobina almacena $O_2$ en el músculo y solo lo libera en condiciones de baja presión parcial de oxígeno o demanda metabólica alta (hipoxia)[cite: 7, 43]."
  },
  {
    texto: "¿Qué estructura cuaternaria presenta la Hemoglobina A (HbA) del adulto?",
    opciones: [
      "Tetrámero formado por dos cadenas alfa y dos cadenas beta (α2β2)",
      "Monómero aislado de 153 aminoácidos",
      "Dímero de cadenas gamma y delta",
      "Octámero de cadenas alfa"
    ],
    correcta: 0,
    explicacion: "La HbA adulta principal (95-98%) es un heterotetrámero formado por dos subunidades $\\alpha$ y dos $\\beta$ ($\\alpha_2\\beta_2$)[cite: 3, 44]."
  },
  {
    texto: "¿Por qué la curva de saturación de la hemoglobina es sigmoidea?",
    opciones: [
      "Por la presencia de puentes disulfuro entre subunidades",
      "Por el fenómeno de cooperatividad positiva en la unión del O₂",
      "Porque no contiene grupo hemo en sus cadenas beta",
      "Debido a la ausencia de reguladores alostéricos"
    ],
    correcta: 1,
    explicacion: "La cooperatividad positiva entre las cuatro subunidades genera una curva sigmoidea de saturación[cite: 4, 44]."
  },
  {
    texto: "¿Cómo se denominan las dos conformaciones estructurales principales de la hemoglobina?",
    opciones: [
      "Estado T (Tenso) y Estado R (Relajado)",
      "Estado Alfa y Estado Beta",
      "Forma Cúbica y Forma Cilíndrica",
      "Estado Férrico y Estado Ferroso"
    ],
    correcta: 0,
    explicacion: "La hemoglobina oscila entre el estado T (tenso, desoxihemoglobina de baja afinidad) y el estado R (relajado, oxihemoglobina de alta afinidad)[cite: 4, 5, 44]."
  },
  {
    texto: "¿En qué conformación (T o R) la hemoglobina presenta mayor afinidad por el oxígeno?",
    opciones: ["Estado T (Tenso)", "Estado R (Relajado)", "En ambas por igual", "En la conformación T desactivada"],
    correcta: 1,
    explicacion: "El estado R (relajado) posee alta afinidad por el $O_2$[cite: 5, 44]."
  },
  {
    texto: "¿Qué sustancia es un regulador alostérico negativo sintetizado en los eritrocitos que disminuye la afinidad de la Hb por el O₂?",
    opciones: ["2,3-Bisfosfoglicerato (2,3-BPG)", "Glucosa-6-fosfato", "Ácido láctico", "ATP desoxigenado"],
    correcta: 0,
    explicacion: "El 2,3-BPG se une al centro alostérico estabilizando el estado T (desoxi) y disminuyendo la afinidad por el oxígeno para favorecer su cesión en tejidos[cite: 5, 46]."
  },
  {
    texto: "¿Qué tipo de hemoglobina presente en fetos posee alta afinidad por el O2 facilitando el paso del oxígeno materno?",
    opciones: ["HbA1", "HbA2", "HbF (fetal, α2γ2)", "HbS"],
    correcta: 2,
    explicacion: "La HbF (compuesta por cadenas $\\alpha_2\\gamma_2$) tiene mayor afinidad por el $O_2$ que la HbA materna[cite: 44]."
  },

  /* ==========================================================================
     TEMA 5: PROTEÍNAS DEL PLASMA Y LIPOPROTEÍNAS
     ========================================================================== */
  {
    texto: "¿Cuál es la principal diferencia entre el plasma y el suero sanguíneo?",
    opciones: [
      "El suero contiene anticoagulante y el plasma no",
      "El plasma contiene fibrinógeno y factores de coagulación; el suero carece de ellos",
      "El suero es rico en eritrocitos y el plasma en plaquetas",
      "El plasma se obtiene tras dejar coagular la sangre espontáneamente"
    ],
    correcta: 1,
    explicacion: "El plasma conserva las proteínas de coagulación (como el fibrinógeno) porque se obtiene con anticoagulante. El suero es el líquido sobrante tras consumirse el fibrinógeno en la coagulación[cite: 8]."
  },
  {
    texto: "¿En qué órgano se sintetiza la mayoría de las proteínas plasmáticas (excepto las inmunoglobulinas)?",
    opciones: ["Riñón", "Hígado", "Bazo", "Médula ósea"],
    correcta: 1,
    explicacion: "La gran mayoría de proteínas plasmáticas son sintetizadas a nivel hepático por los hepatocitos[cite: 8]."
  },
  {
    texto: "¿Qué fracción proteica representa aproximadamente el 54% del total de proteínas plasmáticas?",
    opciones: ["Fibrinógeno", "Inmunoglobulina M", "Albúmina", "Transferrina"],
    correcta: 2,
    explicacion: "La albúmina es la proteína más abundante del plasma sanguíneo, representando alrededor del 54-60% del total[cite: 9, 10]."
  },
  {
    texto: "¿Qué función fisicoquímica crítica realiza la albúmina en el torrente circulatorio?",
    opciones: [
      "Mantenimiento de la presión oncótica (coloidosmótica) del plasma",
      "Catalizar la hidrólisis de triglicéridos",
      "Inducir la vasoconstricción arterial",
      "Transportar moléculas exclusivamente hidrofílicas"
    ],
    correcta: 0,
    explicacion: "La albúmina es la principal responsable del mantenimiento de la presión oncótica, evitando la salida masiva de líquido intravascular hacia los tejidos[cite: 8, 10]."
  },
  {
    texto: "¿Cuál de las siguientes sustancias es transportada en sangre unida a la albúmina?",
    opciones: ["Bilirrubina no conjugada y ácidos grasos libres", "Glucosa", "Sodio y Potasio libres", "ARN mensajero"],
    correcta: 0,
    explicacion: "La albúmina actúa como un transportador multiligando para sustancias liposolubles o apolares como la bilirrubina y los ácidos grasos libres[cite: 10]."
  },
  {
    texto: "¿Cuál es la función fisiológica fundamental de la α1-antitripsina?",
    opciones: [
      "Inhibir proteasas para proteger los tejidos (como los alvéolos pulmonares) de su degradación",
      "Sintetizar anticuerpos neutralizantes de virus",
      "Transportar hierro ferroso al músculo",
      "Degradar placas de ateroma"
    ],
    correcta: 0,
    explicacion: "La $\\alpha_1$-antitripsina inhibe proteasas tisulares evitando la destrucción de paredes alveolares[cite: 11]."
  },
  {
    texto: "¿Qué consecuencia clínica produce el déficit congénito de α1-antitripsina?",
    opciones: [
      "Desarrollo de enfisema pulmonar y cirrosis hepática",
      "Tetania muscular e hipocalcemia",
      "Síndrome hemorrágico por falta de coágulo",
      "Acumulación de glucógeno"
    ],
    correcta: 0,
    explicacion: "Su déficit deja desprotegido el tejido pulmonar frente a proteasas (causando enfisema) y acumula formas anómalas en hígado (causando cirrosis)[cite: 11]."
  },
  {
    texto: "¿Qué proteína plasmática une con alta afinidad la hemoglobina libre liberada tras una hemólisis intravascular?",
    opciones: ["Hemopexina", "Haptoglobina", "Ceruloplasmina", "Transferrina"],
    correcta: 1,
    explicacion: "La haptoglobina fija la hemoglobina libre circulante para transportarla al sistema reticuloendotelial y evitar la pérdida renal de hierro[cite: 12]."
  },
  {
    texto: "¿Qué función cumple la hemopexina en el plasma?",
    opciones: [
      "Unir el grupo hemo libre cuando la haptoglobina se satura",
      "Transportar hormonas tiroideas",
      "Coagular la sangre en heridas abiertas",
      "Inactivar la trombina"
    ],
    correcta: 0,
    explicacion: "La hemopexina se une específicamente a los grupos hemo libres no captados por la haptoglobina durante procesos hemolíticos[cite: 13]."
  },
  {
    texto: "¿Qué proteína plasmática transporta la mayor parte del cobre y posee actividad ferroxidasa?",
    opciones: ["Transferrina", "Ceruloplasmina", "Orosomucoide", "Albúmina"],
    correcta: 1,
    explicacion: "La ceruloplasmina es la proteína encargada de transportar cobre en sangre y catalizar la oxidación del hierro (actividad ferroxidasa)[cite: 12]."
  },
  {
    texto: "La acumulación patológica de cobre asociada a alteraciones en la ceruloplasmina es característica de:",
    opciones: ["Enfermedad de Wilson", "Escorbuto", "Anemia falciforme", "Enfermedad de Gaucher"],
    correcta: 0,
    explicacion: "El defecto metabólico en el transporte de cobre y ceruloplasmina produce la enfermedad de Wilson[cite: 12]."
  },
  {
    texto: "¿En qué estado de oxidación transporta el hierro la transferrina plasmática?",
    opciones: ["Estado férrico (Fe3+)", "Estado ferroso (Fe2+)", "Estado metálico (Fe0)", "Estado peróxido"],
    correcta: 0,
    explicacion: "La transferrina transporta hierro en el plasma en estado férrico ($Fe^{3+}$), mientras que la ferritina lo almacena[cite: 13]."
  },
  {
    texto: "¿Qué enzima convierte el fibrinógeno soluble en red de fibrina inalterable durante la coagulación?",
    opciones: ["Plasmina", "Trombina", "Elastasa", "Papaína"],
    correcta: 1,
    explicacion: "La trombina hidroliza el fibrinógeno convirtiéndolo en monómeros de fibrina que polimerizan formando el coágulo[cite: 13]."
  },
  {
    texto: "¿Qué clase de inmunoglobulina es monomérica y representa la inmunoglobulina más abundante en el plasma maduro (respuesta secundaria)?",
    opciones: ["IgA", "IgG", "IgM", "IgE"],
    correcta: 1,
    explicacion: "La IgG es la inmunoglobulina circulante más abundante y actúa predominantemente en la respuesta inmunitaria secundaria[cite: 17]."
  },
  {
    texto: "¿Qué fragmentos moleculares genera la digestión de una Inmunoglobulina por la enzima papaína?",
    opciones: [
      "2 fragmentos Fab (fijadores de antígeno) y 1 fragmento Fc (cristalizable)",
      "Un fragmento F(ab')2 exclusivo",
      "Cuatro cadenas pesadas libres",
      "Catorce oligopéptidos sin capacidad de unión"
    ],
    correcta: 0,
    explicacion: "La digestión por papaína corta la inmunoglobulina generando dos fragmentos Fab independientes (que reconocen el antígeno) y un fragmento Fc[cite: 16, 17]."
  },
  {
    texto: "¿Qué inmunoglobulina se organiza habitualmente como un pentámero y es la primera en actuar en la respuesta primaria?",
    opciones: ["IgG", "IgA", "IgM", "IgE"],
    correcta: 2,
    explicacion: "La IgM es un pentámero unido por una cadena J que se secreta durante la respuesta inmunitaria primaria[cite: 17]."
  },
  {
    texto: "¿Qué lipoproteína transporta los triglicéridos exógenos procedentes de la absorción intestinal?",
    opciones: ["Quilomicrones", "VLDL", "LDL", "HDL"],
    correcta: 0,
    explicacion: "Los quilomicrones se sintetizan en el intestino y transportan los lípidos y triglicéridos exógenos de la dieta[cite: 18]."
  },
  {
    texto: "¿Qué apolipoproteína es la principal componente estructural reconocida por los receptores de las partículas LDL?",
    opciones: ["Apo A-I", "Apo B-100", "Apo E", "Apo C-II"],
    correcta: 1,
    explicacion: "La Apo B-100 es la apolipoproteína característica de las LDL que permite la interacción con su receptor celular[cite: 18, 19]."
  },
  {
    texto: "¿Cuál es la función principal desempeñada por las HDL?",
    opciones: [
      "Transportar triglicéridos al tejido adiposo",
      "Realizar el transporte reverso del colesterol desde los tejidos periféricos hacia el hígado",
      "Sintetizar fibrinógeno en el endotelio",
      "Transportar hemoglobina libre"
    ],
    correcta: 1,
    explicacion: "Las HDL realizan el transporte inverso del colesterol retirando el exceso de colesterol de los tejidos periféricos y arterias para llevarlo al hígado[cite: 11, 18, 19]."
  },

  /* ==========================================================================
     TEMA 6: ESCLEROPROTEÍNAS (PROTEÍNAS FIBROSAS)
     ========================================================================== */
  {
    texto: "¿Cuál es la proteína estructural más abundante de la matriz extracelular en los vertebrados?",
    opciones: ["Elastina", "Colágeno", "Alfa-queratina", "Miosina"],
    correcta: 1,
    explicacion: "El colágeno es la proteína estructural más abundante en el organismo (representa aproximadamente el 25-30% de la proteína total)[cite: 20]."
  },
  {
    texto: "¿Qué tripéptido repetitivo compone la secuencia primaria de la hélice de tropocolágeno?",
    opciones: ["Gly - X - Y (donde X suele ser Prolina y Y Hidroxiprolina)", "Ala - Cys - Cys", "Glu - Asp - Lys", "His - Phe - Gly"],
    correcta: 0,
    explicacion: "La secuencia del tropocolágeno está constituida por la repetición del patrón Gly-X-Y[cite: 21]."
  },
  {
    texto: "¿Por qué el residuo de Glicina es indispensable en cada tercera posición de la cadena del colágeno?",
    opciones: [
      "Porque aporta un grupo carboxilo adicional",
      "Porque su pequeña cadena lateral (-H) es la única que cabe en el centro ajustado de la triple hélice",
      "Porque forma puentes disulfuro covalentes",
      "Porque absorbe radiación ultravioleta"
    ],
    correcta: 1,
    explicacion: "El pequeño tamaño de la cadena lateral de la glicina (un átomo de H) permite el empaquetamiento apretado en el centro del eje de la triple hélice[cite: 21]."
  },
  {
    texto: "¿Qué vitamina actúa como cofactor imprescindible en la hidroxilación postraduccional de residuos de Prolina y Lisina en el colágeno?",
    opciones: ["Vitamina C (Ácido ascórbico)", "Vitamina A", "Vitamina D", "Vitamina K"],
    correcta: 0,
    explicacion: "La vitamina C es el cofactor necesario para mantener el hierro enzimático reducido en la prolil y lisil hidroxilasas; su falta provoca escorbuto[cite: 21]."
  },
  {
    texto: "¿Qué tipo de colágeno es el más abundante en tendones, piel y matriz ósea?",
    opciones: ["Colágeno Tipo I", "Colágeno Tipo II", "Colágeno Tipo III", "Colágeno Tipo IV"],
    correcta: 0,
    explicacion: "El colágeno tipo I representa el 90% del colágeno total y predomina en huesos, piel y tendones[cite: 20]."
  },
  {
    texto: "¿Qué aminoácidos modificados de la elastina forman los entrecruzamientos elásticos en forma de red?",
    opciones: ["Desmosina e Isodesmosina", "Hidroxiprolina", "Cistina", "Carboxiglutamato"],
    correcta: 0,
    explicacion: "La desmosina e isodesmosina se sintetizan a partir de cadenas laterales de lisina y otorgan a la elastina su entramado reticular elástico[cite: 23]."
  },
  {
    texto: "¿Qué enlace químico aporta gran rigidez y resistencia mecánica a la α-queratina presente en uñas y cabello?",
    opciones: [
      "Puentes disulfuro entre residuos de Cisteína",
      "Enlaces iónicos entre Lisina y Glutamato",
      "Enlaces glucosídicos",
      "Puentes de hidrógeno temporales"
    ],
    correcta: 0,
    explicacion: "La $\\alpha$-queratina presenta abundantes residuos de cisteína que establecen enlaces covalentes de puentes disulfuro, otorgándole dureza e insolubilidad[cite: 22, 23]."
  },
  {
    texto: "¿Qué transformación química ocurre durante el proceso de ondulación permanente del cabello?",
    opciones: [
      "Ruptura de puentes disulfuro mediante agentes reductores, moldeo y posterior reformación por oxidación",
      "Hidrólisis irreversible del tropocolágeno",
      "Desnaturalización de la elastina capilar",
      "Solubilización de las hojas beta plegadas"
    ],
    correcta: 0,
    explicacion: "En la permanente se rompen los puentes disulfuro (-S-S-) con un agente reductor, se le da nueva forma al cabello y se fijan los enlaces en su nueva posición mediante oxidación[cite: 23]."
  }
];

const formulario = document.getElementById("cuestionario");
const resultado = document.getElementById("resultado");
const botonCorregir = document.getElementById("corregir");
const botonReiniciar = document.getElementById("reiniciar");
const ventana = document.getElementById("ventana");
const ventanaTexto = document.getElementById("ventana-texto");
const botonCerrar = document.getElementById("cerrar");

/* ---------- Construir el cuestionario ---------- */
function crearCuestionario() {
  preguntas.forEach((p, i) => {
    const tarjeta = document.createElement("article");
    tarjeta.className = "pregunta";

    const cabecera = document.createElement("div");
    cabecera.className = "pregunta-cabecera";

    const numero = document.createElement("span");
    numero.className = "pregunta-numero";
    numero.textContent = `Pregunta ${i + 1} de ${preguntas.length}`;

    const botonExplicacion = document.createElement("button");
    botonExplicacion.type = "button";
    botonExplicacion.className = "boton-explicacion";
    botonExplicacion.textContent = "Explicación";
    botonExplicacion.addEventListener("click", () => abrirExplicacion(p.explicacion));

    cabecera.append(numero, botonExplicacion);

    const texto = document.createElement("p");
    texto.className = "pregunta-texto";
    texto.textContent = p.texto;

    const grupo = document.createElement("fieldset");
    grupo.className = "opciones";

    p.opciones.forEach((opcion, j) => {
      const etiqueta = document.createElement("label");
      etiqueta.className = "opcion";

      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `pregunta-${i}`;
      radio.value = j;
      radio.addEventListener("change", () => marcarSeleccion(grupo));

      const marca = document.createElement("span");
      marca.className = "marca";
      marca.setAttribute("aria-hidden", "true");

      const contenido = document.createElement("span");
      contenido.textContent = opcion;

      etiqueta.append(radio, marca, contenido);
      grupo.append(etiqueta);
    });

    tarjeta.append(cabecera, texto, grupo);
    formulario.append(tarjeta);
  });
}

/* ---------- Selección (azul) ---------- */
function marcarSeleccion(grupo) {
  grupo.querySelectorAll(".opcion").forEach((etiqueta) => {
    const marcada = etiqueta.querySelector("input").checked;
    etiqueta.classList.toggle("seleccionada", marcada);
  });
}

/* ---------- Corregir (verde / rojo) ---------- */
function corregir() {
  let aciertos = 0;

  document.querySelectorAll(".opciones").forEach((grupo, i) => {
    const etiquetas = grupo.querySelectorAll(".opcion");

    etiquetas.forEach((etiqueta, j) => {
      const radio = etiqueta.querySelector("input");
      etiqueta.classList.remove("seleccionada", "correcta", "incorrecta");

      if (j === preguntas[i].correcta) {
        etiqueta.classList.add("correcta");
        if (radio.checked) aciertos++;
      } else if (radio.checked) {
        etiqueta.classList.add("incorrecta");
      }

      radio.disabled = true;
    });
  });

  formulario.classList.add("corregido");
  resultado.textContent = `Has acertado ${aciertos} de ${preguntas.length}`;
  botonCorregir.hidden = true;
  botonReiniciar.hidden = false;
}

/* ---------- Volver a intentar ---------- */
function reiniciar() {
  formulario.reset();
  formulario.classList.remove("corregido");

  document.querySelectorAll(".opcion").forEach((etiqueta) => {
    etiqueta.classList.remove("seleccionada", "correcta", "incorrecta");
    etiqueta.querySelector("input").disabled = false;
  });

  resultado.textContent = "";
  botonCorregir.hidden = false;
  botonReiniciar.hidden = true;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ---------- Ventana de explicación ---------- */
function abrirExplicacion(texto) {
  ventanaTexto.textContent = texto;
  ventana.showModal();
}

botonCerrar.addEventListener("click", () => ventana.close());

// Cerrar al hacer clic fuera de la ventana
ventana.addEventListener("click", (evento) => {
  if (evento.target === ventana) ventana.close();
});

botonCorregir.addEventListener("click", corregir);
botonReiniciar.addEventListener("click", reiniciar);

crearCuestionario();