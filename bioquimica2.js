// Preguntas del cuestionario Bioquimica 2, agrupadas en partes por dificultad.
// "correcta" es la posición de la respuesta correcta (0 = primera opción).
const partes = [
  /* ==========================================================================
     PARTE 1: FÁCIL
     ========================================================================== */
  {
    titulo: "Parte 1 · Fácil",
    preguntas: [
      /* ---------- Tema 1: biomoléculas inorgánicas y agua ---------- */
      {
        texto: "¿Cuáles son los bioelementos primarios, que constituyen más del 95% en peso de la materia viva?",
        opciones: ["Na, K, Ca, Mg y Cl", "Fe, Mn, Cu, Co y Zn", "C, H, O, N, P y S", "C, H, O, Na, K y Fe"],
        correcta: 2,
        explicacion: "Los bioelementos primarios son C, H, O, N, P y S. Los secundarios (Na, K, Ca, Mg, Cl) rondan el 1% y los oligoelementos (Fe, Mn, Cu, Co, Zn) están en cantidades mínimas pero son esenciales."
      },
      {
        texto: "¿Qué porcentaje aproximado del organismo es agua?",
        opciones: ["10-20%", "30-40%", "60-70%", "90-95%"],
        correcta: 2,
        explicacion: "El agua es el componente mayoritario del organismo (60-70%), tanto en el medio intracelular como en el extracelular. Prácticamente todas las reacciones bioquímicas ocurren en medio acuoso."
      },

      /* ---------- Tema 2: aminoácidos y enlace peptídico ---------- */
      {
        texto: "¿Cuántos aminoácidos proteicos diferentes forman las proteínas?",
        opciones: ["4", "10", "20", "64"],
        correcta: 2,
        explicacion: "Las proteínas son polímeros lineales formados por 20 aminoácidos proteicos distintos, todos ellos α-aminoácidos."
      },
      {
        texto: "¿Qué molécula se libera cuando se forma un enlace peptídico entre dos aminoácidos?",
        opciones: ["Una molécula de agua (H₂O)", "Una molécula de CO₂", "Una molécula de amoniaco (NH₃)", "Una molécula de oxígeno (O₂)"],
        correcta: 0,
        explicacion: "El enlace peptídico se forma entre el grupo carboxilo de un aminoácido y el grupo amino del siguiente, liberándose una molécula de agua."
      },
      {
        texto: "¿Cuál de estas parejas corresponde a aminoácidos con cadena lateral ácida?",
        opciones: ["Lisina y Arginina", "Aspártico y Glutámico", "Fenilalanina y Triptófano", "Serina y Treonina"],
        correcta: 1,
        explicacion: "El ácido aspártico (Asp) y el ácido glutámico (Glu) tienen cadenas laterales ácidas. Sus amidas, asparagina y glutamina, son polares pero sin carga."
      },

      /* ---------- Tema 3: estructura y clasificación de proteínas ---------- */
      {
        texto: "¿Qué describe la estructura primaria de una proteína?",
        opciones: [
          "El plegamiento global tridimensional",
          "La asociación de varias cadenas polipeptídicas",
          "Los patrones repetitivos de plegamiento local",
          "La secuencia de aminoácidos: cuáles son, cuántos y en qué orden"
        ],
        correcta: 3,
        explicacion: "La estructura primaria es la secuencia de aminoácidos de la proteína: indica qué aminoácidos la componen, su número y el orden en que se encuentran."
      },
      {
        texto: "¿Qué nivel estructural corresponde a la asociación de dos o más cadenas polipeptídicas?",
        opciones: ["Estructura primaria", "Estructura secundaria", "Estructura terciaria", "Estructura cuaternaria"],
        correcta: 3,
        explicacion: "La estructura cuaternaria es la asociación de varias cadenas polipeptídicas (subunidades o protómeros). No todas las proteínas la tienen; la hemoglobina es un ejemplo."
      },

      /* ---------- Tema 4: proteínas transportadoras de oxígeno ---------- */
      {
        texto: "¿Cuál es la función principal de la hemoglobina?",
        opciones: [
          "Almacenar oxígeno dentro del músculo",
          "Transportar O₂ desde los pulmones al resto de los tejidos",
          "Mantener la presión oncótica del plasma",
          "Transportar hierro en estado férrico por el plasma"
        ],
        correcta: 1,
        explicacion: "La hemoglobina, contenida en los eritrocitos, transporta el oxígeno desde los pulmones hasta los tejidos del organismo a través de la sangre."
      },
      {
        texto: "¿Cuántas moléculas de O₂ puede transportar como máximo una molécula de hemoglobina?",
        opciones: ["1", "2", "4", "8"],
        correcta: 2,
        explicacion: "La hemoglobina tiene 4 grupos hemo (uno por cadena), cada uno con un Fe²⁺ capaz de unir una molécula de O₂: en total, 4 moléculas de O₂."
      },
      {
        texto: "¿En qué tejido se encuentra la mioglobina?",
        opciones: ["En el plasma sanguíneo", "En el interior de los eritrocitos", "En el músculo esquelético y cardíaco", "En el tejido adiposo"],
        correcta: 2,
        explicacion: "La mioglobina almacena oxígeno en el músculo esquelético y cardíaco, actuando como reserva y facilitando su difusión dentro de la célula."
      },
      {
        texto: "¿Qué caracteriza a la metahemoglobina?",
        opciones: [
          "Tiene el hierro oxidado a Fe³⁺ y no une O₂ de forma normal",
          "Es la hemoglobina unida a glucosa",
          "Es la hemoglobina propia del feto",
          "Tiene cadenas β mutadas que deforman el eritrocito"
        ],
        correcta: 0,
        explicacion: "Cuando el hierro del hemo pasa de ferroso (Fe²⁺) a férrico (Fe³⁺) se forma metahemoglobina, que no puede unir el O₂ de forma normal."
      },
      {
        texto: "¿Con qué enfermedad se relaciona la hemoglobina S (HbS)?",
        opciones: ["Enfermedad de Wilson", "Diabetes mellitus", "Escorbuto", "Anemia falciforme"],
        correcta: 3,
        explicacion: "La HbS aparece por una mutación en la cadena β y cambia el comportamiento del eritrocito: es la hemoglobina de la anemia falciforme."
      },

      /* ---------- Tema 5: proteínas del plasma y lipoproteínas ---------- */
      {
        texto: "¿Qué porcentaje aproximado del plasma corresponde a proteínas?",
        opciones: ["1%", "7%", "25%", "54%"],
        correcta: 1,
        explicacion: "Las proteínas constituyen alrededor del 7% del plasma. El 54% es la proporción de albúmina dentro del total de proteínas plasmáticas, no del plasma."
      },
      {
        texto: "¿Qué técnica separa las proteínas plasmáticas en bandas según su carga eléctrica para obtener un proteinograma?",
        opciones: ["Centrifugación", "Electroforesis", "Reacción de Edman", "Paracentesis"],
        correcta: 1,
        explicacion: "La electroforesis separa las proteínas del suero en bandas (albúmina, α1, α2, β y γ-globulinas) según su carga eléctrica; el resultado es el proteinograma."
      },
      {
        texto: "¿Qué células sintetizan las inmunoglobulinas?",
        opciones: ["Los hepatocitos", "Los fibroblastos", "Los linfocitos B", "Los eritrocitos"],
        correcta: 2,
        explicacion: "Las inmunoglobulinas son sintetizadas por los linfocitos B y participan en la respuesta inmunitaria. Por eso son la excepción a la síntesis hepática de las proteínas plasmáticas."
      },
      {
        texto: "¿Qué inmunoglobulina se eleva en las alergias y en las infecciones por parásitos?",
        opciones: ["IgE", "IgD", "IgG", "IgM"],
        correcta: 0,
        explicacion: "La IgE es un monómero que interviene en las reacciones alérgicas y aumenta su concentración en caso de parásitos."
      },
      {
        texto: "¿Según qué criterio se clasifican habitualmente las lipoproteínas (quilomicrones, VLDL, IDL, LDL y HDL)?",
        opciones: ["Según su color", "Según su carga eléctrica", "Según el órgano que las degrada", "Según su densidad"],
        correcta: 3,
        explicacion: "Las lipoproteínas se clasifican según su densidad (o su contenido en apolipoproteínas). De ahí sus siglas: very low, intermediate, low y high density lipoprotein."
      },

      /* ---------- Tema 6: escleroproteínas ---------- */
      {
        texto: "¿Qué células sintetizan el colágeno?",
        opciones: ["Los fibroblastos", "Los hepatocitos", "Los linfocitos B", "Los eritrocitos"],
        correcta: 0,
        explicacion: "El colágeno es sintetizado por los fibroblastos y forma parte de la matriz extracelular del tejido conectivo."
      },
      {
        texto: "¿Cuál es la propiedad característica que la elastina aporta a los tejidos?",
        opciones: [
          "Dureza e impermeabilidad, como en las uñas",
          "Elasticidad: el tejido recupera su forma después de deformarse",
          "Capacidad de transportar oxígeno",
          "Capacidad de coagular la sangre"
        ],
        correcta: 1,
        explicacion: "La elastina tiene función estructural y da elasticidad: permite que tejidos como pulmones, arterias y ligamentos recuperen su forma inicial tras deformarse."
      },
      {
        texto: "¿Dónde se encuentra la α-queratina en el ser humano?",
        opciones: ["En tendones y huesos", "En el plasma sanguíneo", "En el cartílago y el humor vítreo", "En la epidermis, las uñas y el pelo"],
        correcta: 3,
        explicacion: "Las α-queratinas, con estructura de hélice alfa y muy ricas en azufre, se encuentran en la epidermis, las uñas y el pelo."
      }
    ]
  },

  /* ==========================================================================
     PARTE 2: MEDIA
     ========================================================================== */
  {
    titulo: "Parte 2 · Media",
    preguntas: [
      /* ---------- Tema 1: biomoléculas inorgánicas y agua ---------- */
      {
        texto: "Una alteración del pH debida a una variación en el contenido de bicarbonato se considera una situación:",
        opciones: ["Respiratoria", "Metabólica", "Oncótica", "Hemolítica"],
        correcta: 1,
        explicacion: "Las variaciones en el contenido de bicarbonato dan situaciones metabólicas (acidosis o alcalosis metabólica); las variaciones en el contenido de CO₂ dan situaciones respiratorias."
      },
      {
        texto: "¿Qué propiedad del agua tiende a estabilizar la temperatura del organismo porque hace falta mucho calor para elevar 1 °C la temperatura de 1 g?",
        opciones: ["Elevada tensión superficial", "Alta constante dieléctrica", "Elevada viscosidad", "Elevado calor específico"],
        correcta: 3,
        explicacion: "El calor específico es la cantidad de calor necesaria para elevar 1 °C la temperatura de 1 g de líquido. Al ser muy elevado en el agua, amortigua los cambios de temperatura del organismo."
      },

      /* ---------- Tema 2: aminoácidos y enlace peptídico ---------- */
      {
        texto: "¿Qué dos aminoácidos proteicos tienen dos carbonos asimétricos?",
        opciones: ["Glicina y Alanina", "Isoleucina y Treonina", "Lisina y Arginina", "Cisteína y Metionina"],
        correcta: 1,
        explicacion: "La isoleucina (Ile) y la treonina (Thr) tienen 2 carbonos asimétricos, por lo que su número de isómeros se multiplica. La otra excepción es la glicina, que no tiene ninguno."
      },
      {
        texto: "A pH fisiológico, ¿cómo se encuentran los grupos amino y carboxilo de un aminoácido sin cadena lateral ionizable?",
        opciones: [
          "Ionizados (NH₃⁺ y COO⁻), con carga neta 0",
          "Sin ionizar (NH₂ y COOH), con carga neta 0",
          "Como NH₃⁺ y COOH, con carga neta +1",
          "Como NH₂ y COO⁻, con carga neta −1"
        ],
        correcta: 0,
        explicacion: "A pH fisiológico los aminoácidos están en forma ionizada: el grupo amino protonado (NH₃⁺) y el carboxilo desprotonado (COO⁻). Las cargas se compensan y la carga neta es 0."
      },
      {
        texto: "¿En qué conformación se presenta normalmente el enlace peptídico?",
        opciones: [
          "En cis en todos los casos",
          "En cis, salvo delante de la glicina",
          "Alterna cis y trans en cada enlace",
          "En trans; la conformación cis solo aparece en proporción significativa en los enlaces X-Pro"
        ],
        correcta: 3,
        explicacion: "El enlace peptídico se presenta normalmente en conformación trans. Solo en los enlaces X-Pro (anteriores a una prolina) aparece la conformación cis en una proporción significativa."
      },

      /* ---------- Tema 3: estructura y clasificación de proteínas ---------- */
      {
        texto: "¿Qué reactivo se emplea en la reacción de Sanger y qué ocurre con el resto de la cadena?",
        opciones: [
          "Fenilisotiocianato; la cadena queda intacta",
          "Carboxipeptidasa; se identifica el extremo C-terminal",
          "Dinitroclorobenceno; se identifica solo el primer aminoácido y el resto de la cadena se rompe",
          "Ninhidrina; se identifican todos los aminoácidos a la vez"
        ],
        correcta: 2,
        explicacion: "La reacción de Sanger usa dinitroclorobenceno e identifica únicamente el primer aminoácido, rompiendo el resto de la cadena. La de Edman (fenilisotiocianato) no rompe la proteína."
      },
      {
        texto: "¿Cómo se denomina la pérdida de la estructura cuaternaria de una proteína?",
        opciones: ["Desnaturalización", "Disociación", "Renaturalización", "Hidrólisis"],
        correcta: 1,
        explicacion: "La disociación es la pérdida de la estructura cuaternaria (se separan las subunidades). La desnaturalización es la pérdida de la estructura terciaria y, con ella, de la función biológica."
      },

      /* ---------- Tema 4: proteínas transportadoras de oxígeno ---------- */
      {
        texto: "¿A qué posición de coordinación del Fe²⁺ del grupo hemo se une la molécula de O₂?",
        opciones: ["A las cuatro primeras", "A la quinta", "A la sexta", "A ninguna: se une a la globina"],
        correcta: 2,
        explicacion: "Las 4 primeras valencias del Fe²⁺ se unen a los N de los anillos pirrólicos, la 5ª al N de la histidina proximal (F8) y la 6ª es el lugar de unión del O₂."
      },
      {
        texto: "¿Cuál es la parte orgánica del grupo hemo, formada por cuatro anillos pirrólicos?",
        opciones: ["La globina", "La protoporfirina IX", "La bilirrubina", "La apomioglobina"],
        correcta: 1,
        explicacion: "El grupo hemo está formado por una parte orgánica, la protoporfirina IX (cuatro anillos pirrólicos), y una parte inorgánica, el ion ferroso (Fe²⁺) central. Es el responsable del color de la sangre."
      },
      {
        texto: "¿Para qué se utiliza en clínica la determinación de la HbA1c (hemoglobina glicosilada)?",
        opciones: [
          "Para diagnosticar la anemia falciforme",
          "Para valorar la oxigenación del feto",
          "Para detectar una intoxicación por monóxido de carbono",
          "Como indicador del control de la diabetes"
        ],
        correcta: 3,
        explicacion: "La HbA1c es HbA con glucosa unida. Su proporción depende de los valores de glucemia, por lo que se usa como indicador del control de la diabetes."
      },
      {
        texto: "¿Cuál de los siguientes cambios NO disminuye la afinidad de la hemoglobina por el O₂?",
        opciones: [
          "El aumento de la concentración de H⁺",
          "El aumento del CO₂",
          "El aumento de la temperatura",
          "La disminución del 2,3-BPG"
        ],
        correcta: 3,
        explicacion: "El CO₂, los H⁺, el 2,3-BPG y la temperatura reducen la afinidad de la Hb por el O₂ cuando aumentan. Si el 2,3-BPG disminuye, ocurre lo contrario: la afinidad aumenta."
      },
      {
        texto: "¿Por qué es peligroso el monóxido de carbono (CO) para el transporte de oxígeno?",
        opciones: [
          "Porque compite con el O₂ por la hemoglobina y altera la entrega de O₂ a los tejidos",
          "Porque oxida el hierro del hemo a Fe³⁺",
          "Porque destruye las cadenas de globina",
          "Porque impide la síntesis de 2,3-BPG"
        ],
        correcta: 0,
        explicacion: "El CO compite con el O₂ en la hemoglobina y altera la entrega de oxígeno a los tejidos. La histidina distal (E7) reduce la afinidad del hemo por el CO, pero no la elimina."
      },

      /* ---------- Tema 5: proteínas del plasma y lipoproteínas ---------- */
      {
        texto: "¿Cuál es una consecuencia frecuente de la hipoalbuminemia?",
        opciones: [
          "Hemorragias por falta de coágulo",
          "Edemas y ascitis, al disminuir la presión oncótica",
          "Acumulación de cobre en los tejidos",
          "Anemia por falta de hierro"
        ],
        correcta: 1,
        explicacion: "Al bajar la albúmina disminuye la presión oncótica y el líquido sale de los vasos: aparecen edemas y ascitis (acumulación de líquido en el abdomen), típica de la cirrosis hepática."
      },
      {
        texto: "¿Qué transporta la transcortina, una α1-globulina?",
        opciones: ["Cobre", "Hemoglobina libre", "Glucocorticoides, como el cortisol", "Triglicéridos exógenos"],
        correcta: 2,
        explicacion: "La transcortina es una glucoproteína de síntesis hepática que fija corticoides y transporta los glucocorticoides (cortisol, corticosterona...) por el plasma hasta los tejidos diana."
      },
      {
        texto: "¿Qué afirmación sobre la proteína C reactiva (PCR) es correcta?",
        opciones: [
          "Es específica: indica la causa exacta de la inflamación",
          "Disminuye intensamente tras un daño celular",
          "Transporta hierro en estado férrico",
          "Es una proteína de fase aguda útil pero inespecífica: indica que hay inflamación, pero no su causa"
        ],
        correcta: 3,
        explicacion: "La PCR es una proteína de fase aguda que participa en la opsonización, fagocitosis y lisis de bacterias. Aumenta mucho tras un daño celular, pero es inespecífica: indica la respuesta inflamatoria, no la causa."
      },
      {
        texto: "¿Cuál es el origen de las VLDL y qué lípido transportan principalmente?",
        opciones: [
          "Se forman en el hígado a partir de triglicéridos endógenos",
          "Se forman en el intestino a partir de triglicéridos de la dieta",
          "Se forman en el tejido adiposo a partir de colesterol",
          "Se forman en el plasma a partir de las HDL"
        ],
        correcta: 0,
        explicacion: "Las VLDL se originan en el hígado a partir de triglicéridos endógenos. Los triglicéridos exógenos (de la dieta) los transportan los quilomicrones desde el intestino."
      },

      /* ---------- Tema 6: escleroproteínas ---------- */
      {
        texto: "¿Dónde predomina el colágeno tipo II?",
        opciones: ["En huesos y tendones", "En las membranas basales", "En el cartílago y el humor vítreo", "En uñas y pelo"],
        correcta: 2,
        explicacion: "El colágeno tipo II se encuentra sobre todo en el cartílago y en el humor vítreo del ojo. Es resistente, aunque menos que el tipo I."
      },
      {
        texto: "¿Qué tipo de colágeno está asociado a las membranas basales?",
        opciones: ["Tipo I", "Tipo II", "Tipo III", "Tipo IV"],
        correcta: 3,
        explicacion: "El colágeno tipo IV es el que se asocia a las membranas basales. El tipo I predomina en hueso, piel y tendones; el II en cartílago; el III en tejidos elásticos como pulmones y vasos."
      },
      {
        texto: "¿Qué afirmación sobre las β-queratinas es correcta?",
        opciones: [
          "Son las queratinas del pelo y las uñas humanas",
          "No están presentes en los humanos; aparecen en plumas, escamas, garras y picos",
          "Tienen estructura de hélice alfa",
          "Carecen por completo de azufre"
        ],
        correcta: 1,
        explicacion: "Las β-queratinas tienen estructura secundaria de lámina β y se encuentran en sedas, escamas, plumas, garras y picos. En los humanos solo hay α-queratinas."
      },
      {
        texto: "¿Por qué el alisado con plancha a 150-180 °C es temporal y el pelo vuelve a su forma con el agua?",
        opciones: [
          "Porque solo se rompen puentes de hidrógeno, que se restablecen con el agua",
          "Porque se rompen puentes disulfuro, que se vuelven a formar al mojarse",
          "Porque se hidrolizan los enlaces peptídicos de la queratina",
          "Porque la queratina se transforma en colágeno"
        ],
        correcta: 0,
        explicacion: "A 150-180 °C solo se rompen los enlaces de hidrógeno, y con agua el cabello recupera su forma original. Los puentes disulfuro no se rompen a esa temperatura."
      }
    ]
  },

  /* ==========================================================================
     PARTE 3: DIFÍCIL
     ========================================================================== */
  {
    titulo: "Parte 3 · Difícil",
    preguntas: [
      /* ---------- Tema 1: biomoléculas inorgánicas y agua ---------- */
      {
        texto: "¿Cuál es la expresión de la ecuación de Henderson-Hasselbalch para un ácido débil [HA] y su base conjugada [A⁻]?",
        opciones: [
          "pH = −log [H⁺] + [HA]",
          "pH = pKa − log ([A⁻] / [HA])",
          "pH = pKa + log ([A⁻] / [HA])",
          "pH = pKa × ([HA] / [A⁻])"
        ],
        correcta: 2,
        explicacion: "La ecuación de Henderson-Hasselbalch, pH = pKa + log ([A⁻]/[HA]), permite calcular el pH de un tampón a partir del pKa y de las concentraciones del ácido y de su base conjugada."
      },
      {
        texto: "Un paciente hipoventila y retiene CO₂. ¿Qué alteración presenta y cómo la compensa el riñón?",
        opciones: [
          "Alcalosis respiratoria; excretando bicarbonato",
          "Acidosis metabólica; hiperventilando",
          "Alcalosis metabólica; reteniendo H⁺",
          "Acidosis respiratoria; reteniendo bicarbonato y excretando H⁺"
        ],
        correcta: 3,
        explicacion: "La retención de CO₂ es una variación respiratoria que aumenta los H⁺: acidosis respiratoria. El riñón compensa reteniendo bicarbonato y excretando hidrogeniones."
      },

      /* ---------- Tema 2: aminoácidos y enlace peptídico ---------- */
      {
        texto: "¿Cómo se comporta un aminoácido cuando el pH del medio baja (medio ácido)?",
        opciones: [
          "Capta protones, actuando como base débil, y su carga neta pasa a ser +1",
          "Cede protones, actuando como ácido débil, y su carga neta pasa a ser −1",
          "No se modifica: su carga neta siempre es 0",
          "Pierde el grupo amino y deja de ser un aminoácido"
        ],
        correcta: 0,
        explicacion: "En medio ácido aumenta la [H⁺] y el aminoácido capta protones, actuando como base débil (carga neta +1). En medio básico cede protones, actuando como ácido débil (carga neta −1). Es reversible."
      },
      {
        texto: "¿Cuál de los siguientes es un aminoácido NO proteico?",
        opciones: ["L-Treonina", "L-Ornitina", "L-Isoleucina", "L-Glutamina"],
        correcta: 1,
        explicacion: "La L-ornitina, igual que la L-citrulina, la L-homocisteína, la β-alanina o el γ-aminobutírico, es un aminoácido no proteico: no forma parte de las proteínas."
      },

      /* ---------- Tema 3: estructura y clasificación de proteínas ---------- */
      {
        texto: "En la hélice α, con n = 3,6 residuos por vuelta y un paso p = 5,4 Å, ¿cuánto avanza la hélice por cada residuo (d)?",
        opciones: ["0,54 Å", "3,6 Å", "1,5 Å", "19,4 Å"],
        correcta: 2,
        explicacion: "El paso de hélice cumple p = n × d. Despejando, d = p / n = 5,4 / 3,6 = 1,5 Å por residuo."
      },
      {
        texto: "¿Cómo está formado un giro β?",
        opciones: [
          "Por 2 aminoácidos unidos por un puente disulfuro",
          "Por 4 aminoácidos, estabilizados por un puente de hidrógeno entre el 1º y el 4º",
          "Por 8 aminoácidos sin ningún tipo de enlace entre ellos",
          "Por 3,6 aminoácidos por vuelta, como la hélice α"
        ],
        correcta: 1,
        explicacion: "El giro β está formado por 4 aminoácidos colocados en giro, y un puente de hidrógeno entre el 1º y el 4º estabiliza la estructura."
      },

      /* ---------- Tema 4: proteínas transportadoras de oxígeno ---------- */
      {
        texto: "¿Qué movimiento a nivel del hemo desencadena el cambio conformacional de la hemoglobina al unirse el O₂?",
        opciones: [
          "El Fe²⁺ se oxida a Fe³⁺ y se separa de la globina",
          "La histidina distal (E7) se une covalentemente al hierro",
          "El anillo de protoporfirina IX se abre",
          "El Fe²⁺ se desplaza al interior del plano del hemo y tira de la histidina proximal (F8)"
        ],
        correcta: 3,
        explicacion: "Al unirse el O₂, el ion ferroso se desplaza hacia el interior del plano del hemo y arrastra a la histidina proximal. Ese movimiento se transmite a toda la molécula (paso de T a R) y es la base de la cooperatividad positiva."
      },
      {
        texto: "En una situación de hipoxia mantenida, ¿qué adaptación se produce en el eritrocito y con qué efecto?",
        opciones: [
          "Aumenta el 2,3-BPG, que estabiliza el estado T y favorece la entrega de O₂ a los tejidos",
          "Disminuye el 2,3-BPG, lo que aumenta la afinidad de la Hb por el O₂",
          "Aumenta la metahemoglobina, que cede mejor el O₂",
          "La HbA se sustituye por mioglobina"
        ],
        correcta: 0,
        explicacion: "El 2,3-BPG puede aumentar en casos de hipoxia mantenida. Se une a la forma desoxi, estabiliza el estado T y disminuye la afinidad por el O₂, lo que favorece su cesión a los tejidos."
      },
      {
        texto: "En la nomenclatura «His F8» de la histidina proximal, ¿qué indican la letra y el número?",
        opciones: [
          "La F indica fenilalanina y el 8 el número de hemos",
          "Que la histidina se une a 8 átomos de hierro",
          "Que es el residuo número 8 de la hélice F de la globina",
          "Que es la octava histidina de la cadena polipeptídica"
        ],
        correcta: 2,
        explicacion: "La globina está formada por 8 hélices α nombradas de la A a la H. F8 es el octavo residuo de la hélice F (histidina proximal) y E7 el séptimo de la hélice E (histidina distal)."
      },
      {
        texto: "¿Por qué la mioglobina no puede presentar cooperatividad en la unión del O₂?",
        opciones: [
          "Porque su hierro está en estado férrico",
          "Porque es un monómero con un único sitio de unión, y la cooperatividad requiere estructura cuaternaria",
          "Porque carece de histidina proximal",
          "Porque el 2,3-BPG bloquea su grupo hemo"
        ],
        correcta: 1,
        explicacion: "La cooperatividad se debe a la estructura cuaternaria: la unión de O₂ a una subunidad modifica las demás. La mioglobina es un monómero (estructura terciaria) con un solo hemo, por eso su curva es hiperbólica."
      },

      /* ---------- Tema 5: proteínas del plasma y lipoproteínas ---------- */
      {
        texto: "¿En qué fracción del proteinograma migran la haptoglobina, la ceruloplasmina y la α2-macroglobulina?",
        opciones: ["Albúmina", "α1-globulinas", "β-globulinas", "α2-globulinas"],
        correcta: 3,
        explicacion: "Las tres pertenecen a las α2-globulinas. En las α1 están la α1-antitripsina y el orosomucoide; en las β, la transferrina y la hemopexina; en las γ, las inmunoglobulinas."
      },
      {
        texto: "¿Cómo se comportan la haptoglobina y la hemopexina en la hemólisis intravascular y en la inflamación?",
        opciones: [
          "Ambas disminuyen en la hemólisis; en la inflamación la haptoglobina aumenta y la hemopexina no varía",
          "Ambas aumentan en la hemólisis y disminuyen en la inflamación",
          "La haptoglobina no varía nunca; la hemopexina aumenta en la hemólisis",
          "Ambas aumentan en las dos situaciones"
        ],
        correcta: 0,
        explicacion: "En la hemólisis intravascular ambas se consumen y su concentración baja. En los procesos inflamatorios la haptoglobina aumenta, mientras que la hemopexina, a diferencia de ella, no varía."
      },
      {
        texto: "¿Por qué la transferrina refleja mejor que la albúmina el aporte nutricional reciente?",
        opciones: [
          "Porque no se sintetiza en el hígado",
          "Porque es la proteína más abundante del plasma",
          "Porque su vida media es de solo 8-10 días y su síntesis depende mucho del suministro de aminoácidos",
          "Porque se elimina por la orina cuando hay desnutrición"
        ],
        correcta: 2,
        explicacion: "La transferrina tiene una vida media corta (8-10 días) y su síntesis hepática está muy afectada por el suministro de aminoácidos. La albúmina perdura unos 21 días, así que tarda más en reflejar los cambios."
      },
      {
        texto: "¿Cuál de las siguientes afirmaciones sobre la albúmina es FALSA?",
        opciones: [
          "Es una proteína de carácter ácido con carga negativa",
          "Es una glucoproteína con alto contenido en carbohidratos",
          "Tiene un elevado número de puentes disulfuro que la hacen muy estable",
          "Es multiligando: tiene distintos sitios de unión"
        ],
        correcta: 1,
        explicacion: "La albúmina carece de carbohidratos. Es una cadena polipeptídica de carácter ácido y carga negativa (muy soluble), multiligando y muy estable gracias a sus 17 puentes disulfuro."
      },
      {
        texto: "¿Cuántos dominios tienen las cadenas pesadas y ligeras de una inmunoglobulina?",
        opciones: [
          "Pesada: 2 (1 constante y 1 variable); ligera: 4 (3 constantes y 1 variable)",
          "Pesada: 4 variables; ligera: 2 constantes",
          "Ambas tienen 3 dominios: 2 constantes y 1 variable",
          "Pesada: 4 (3 constantes y 1 variable); ligera: 2 (1 constante y 1 variable)"
        ],
        correcta: 3,
        explicacion: "La cadena pesada consta de 4 dominios (tres constantes y uno variable) y la ligera de 2 (uno constante y uno variable). Las regiones variables forman el paratopo, que reconoce el epítopo del antígeno."
      },
      {
        texto: "¿Cuál es el orden correcto de las lipoproteínas de menor a mayor densidad (y, por tanto, de mayor a menor tamaño)?",
        opciones: [
          "Quilomicrones < VLDL < IDL < LDL < HDL",
          "HDL < LDL < IDL < VLDL < Quilomicrones",
          "VLDL < Quilomicrones < LDL < IDL < HDL",
          "Quilomicrones < LDL < VLDL < HDL < IDL"
        ],
        correcta: 0,
        explicacion: "Los quilomicrones son los más grandes y menos densos, y las HDL las más pequeñas y densas. A medida que aumenta la densidad disminuyen el tamaño y el contenido en triglicéridos."
      },

      /* ---------- Tema 6: escleroproteínas ---------- */
      {
        texto: "¿Cómo se organiza la triple hélice del colágeno?",
        opciones: [
          "Tres hélices dextrógiras enrolladas en una superhélice levógira",
          "Dos hélices α dextrógiras unidas por puentes disulfuro",
          "Tres hélices levógiras enrolladas entre sí en una superhélice dextrógira",
          "Tres láminas β antiparalelas apiladas"
        ],
        correcta: 2,
        explicacion: "La hélice de colágeno consiste en el enrollamiento dextrógiro de tres hélices levógiras. La estructura se estabiliza por puentes de hidrógeno y enlaces covalentes cruzados entre las cadenas."
      },
      {
        texto: "Durante la cicatrización de una herida, ¿en qué orden aparecen los tipos de colágeno?",
        opciones: [
          "Primero el tipo I y después es sustituido por el tipo III",
          "Primero el tipo III y después es sustituido por el tipo I, de mayor fuerza de tensión",
          "Solo se deposita colágeno tipo IV",
          "Primero el tipo II y después el tipo V"
        ],
        correcta: 1,
        explicacion: "En la cicatrización (inflamación, proliferación y maduración) primero se deposita colágeno tipo III, que después es retirado y sustituido por el tipo I, el que aporta mayor fuerza de tensión."
      },
      {
        texto: "Una alteración genética que cursa con extrema elasticidad de los ligamentos e hipermovilidad de las articulaciones corresponde a:",
        opciones: ["Osteogénesis imperfecta", "Escorbuto", "Esclerodermia", "Síndrome de Ehlers-Danlos"],
        correcta: 3,
        explicacion: "El síndrome de Ehlers-Danlos se debe al déficit de componentes necesarios para la síntesis, maduración y organización del colágeno. En la osteogénesis imperfecta la triple hélice es inestable y predominan las fracturas."
      },
      {
        texto: "¿Qué ocurre en la queratina del cabello cuando se aplica calor por encima de 200 °C?",
        opciones: [
          "Se rompen puentes disulfuro: el daño es permanente y el pelo queda quebradizo, con las puntas abiertas",
          "Se rompen solo puentes de hidrógeno, y el pelo se recupera con agua",
          "Se forman nuevos puentes disulfuro que lo refuerzan",
          "La α-queratina se transforma en β-queratina"
        ],
        correcta: 0,
        explicacion: "Por encima de 200 °C se rompen los enlaces disulfuro: el efecto es permanente, el cabello pierde elasticidad y fuerza y queda quebradizo con puntas abiertas. A 150-180 °C solo se rompen enlaces de hidrógeno."
      }
    ]
  }
];

const preguntas = partes.flatMap((parte) => parte.preguntas);

const formulario = document.getElementById("cuestionario");
const resultado = document.getElementById("resultado");
const botonCorregir = document.getElementById("corregir");
const botonReiniciar = document.getElementById("reiniciar");
const ventana = document.getElementById("ventana");
const ventanaTexto = document.getElementById("ventana-texto");
const botonCerrar = document.getElementById("cerrar");

/* ---------- Construir el cuestionario ---------- */
function crearCuestionario() {
  let i = 0;

  partes.forEach((parte) => {
    const titulo = document.createElement("h2");
    titulo.className = "parte-titulo";
    titulo.textContent = parte.titulo;
    formulario.append(titulo);

    parte.preguntas.forEach((p) => {
      formulario.append(crearPregunta(p, i));
      i++;
    });
  });
}

function crearPregunta(p, i) {
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
  return tarjeta;
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
