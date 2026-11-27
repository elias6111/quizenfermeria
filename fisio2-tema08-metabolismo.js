// Fisiología · Parcial 2 · Tema 8 (II): Metabolismo de glúcidos.
// "correcta" es la posición de la respuesta correcta (0 = primera opción). "imagen" es opcional.
const fisio2Tema08Metabolismo = {
  titulo: "Tema 8 (II) · Metabolismo de glúcidos",
  tests: [
    {
      id: "p2-t08b-1",
      tema: "tema-08-2",
      numero: "1",
      etiqueta: "Test 1",
      titulo: "Absorción, transportadores y glucólisis",
      preguntas: [
        {
          texto: "Señala la definición correcta:",
          opciones: [
            "Anabolismo: reacciones de síntesis que consumen energía",
            "Catabolismo: reacciones de síntesis que consumen energía",
            "Anabolismo: reacciones de degradación que liberan energía",
            "Catabolismo: reacciones que no necesitan enzimas"
          ],
          correcta: 0,
          explicacion: "Anabolismo = síntesis con gasto de energía; catabolismo = degradación con liberación de energía."
        },
        {
          texto: "Si tenemos suficiente glucosa de la dieta no se activa la gluconeogénesis. Esto ilustra el principio de…",
          opciones: ["Máxima economía", "Simultaneidad", "Interconexión", "Cooperatividad"],
          correcta: 0,
          explicacion: "Solo se ponen en marcha las rutas necesarias en cada momento, gracias a su regulación."
        },
        {
          texto: "¿Cómo entra la glucosa en el enterocito desde la luz intestinal?",
          opciones: [
            "Por SGLT1, cotransporte activo secundario con 2 Na⁺",
            "Por GLUT4, dependiente de insulina",
            "Por difusión simple a través de la bicapa",
            "Por la bomba Na⁺/K⁺ directamente"
          ],
          correcta: 0,
          explicacion: "El Na⁺ entra a favor de gradiente y arrastra la glucosa (o galactosa) contra gradiente. Luego la ATPasa Na⁺/K⁺ saca el sodio gastando ATP."
        },
        {
          texto: "¿Dónde actúa el SGLT2?",
          opciones: [
            "En el riñón, reabsorbiendo glucosa y sodio",
            "En el músculo, dependiente de insulina",
            "En el cerebro",
            "En el páncreas, regulando la insulina"
          ],
          correcta: 0,
          explicacion: "SGLT1 en el enterocito; SGLT2 en las células del túbulo renal."
        },
        {
          texto: "¿Qué transportador de glucosa depende de la insulina y está en músculo y tejido adiposo?",
          opciones: ["GLUT4", "GLUT2", "GLUT1", "GLUT5"],
          correcta: 0,
          explicacion: "GLUT4 (Km 5 mM): insulinodependiente, aumenta en la membrana con el entrenamiento. GLUT1 y 3: entrada basal. GLUT2: hígado y células β. GLUT5: fructosa."
        },
        {
          texto: "¿Por qué el GLUT2 del hígado y del páncreas tiene una Km alta (15-20 mM)?",
          opciones: [
            "Para captar glucosa solo cuando la glucemia está alta (retirar el exceso y detectar la glucemia)",
            "Para captar glucosa aunque la glucemia sea muy baja",
            "Porque transporta sobre todo fructosa",
            "Porque depende de la insulina"
          ],
          correcta: 0,
          explicacion: "Con Km alta solo trabaja a fondo tras las comidas: el hígado retira el exceso de glucosa y la célula β regula la secreción de insulina."
        },
        {
          texto: "¿Qué células dependen exclusivamente de la glucosa como fuente de energía?",
          opciones: ["Los eritrocitos maduros", "Los hepatocitos", "Los adipocitos", "Las células del músculo cardíaco"],
          correcta: 0,
          explicacion: "El eritrocito no tiene mitocondrias y solo usa glucosa (glucólisis anaerobia). El cerebro también depende mucho de ella; el hígado prefiere aminoácidos y ácidos grasos."
        },
        {
          texto: "¿Dónde ocurre la glucólisis?",
          opciones: ["En el citoplasma", "En la matriz mitocondrial", "En la membrana mitocondrial interna", "En el retículo endoplásmico"],
          correcta: 0,
          explicacion: "La glucólisis (vía de Embden-Meyerhof) es citoplasmática y casi universal: 10 reacciones de glucosa a 2 piruvatos."
        },
        {
          texto: "¿Qué enzimas catalizan los pasos irreversibles 1, 2 y 3 del esquema?",
          imagen: { src: "img/fisiologia2/glucolisis.svg", alt: "Esquema de la glucólisis con tres pasos irreversibles numerados" },
          opciones: [
            "Hexoquinasa · fosfofructoquinasa-1 · piruvato quinasa",
            "Glucoquinasa · aldolasa · enolasa",
            "Hexoquinasa · gliceraldehído-3-P deshidrogenasa · piruvato quinasa",
            "Fosfoglucomutasa · fosfofructoquinasa-1 · lactato deshidrogenasa"
          ],
          correcta: 0,
          explicacion: "Solo hay que saber los tres pasos irreversibles: glucosa → G6P (hexoquinasa), F6P → F1,6BP (PFK-1) y PEP → piruvato (piruvato quinasa). Son los puntos de regulación."
        },
        {
          texto: "¿Qué ventaja tiene fosforilar la glucosa a glucosa-6-fosfato al entrar en la célula?",
          opciones: [
            "Queda atrapada (los ésteres fosfóricos no atraviesan membranas) y es más reactiva",
            "Se hace más estable y menos reactiva",
            "Puede salir de la célula más fácilmente",
            "Se produce ATP"
          ],
          correcta: 0,
          explicacion: "Los ésteres fosfóricos son más reactivos y no cruzan membranas. La G6P es un cruce de rutas: glucólisis, pentosas o síntesis de glucógeno."
        },
        {
          texto: "¿Qué tiene de especial la hexoquinasa IV (glucoquinasa)?",
          opciones: [
            "Está en el hígado y solo actúa sobre la glucosa",
            "Está en todos los tejidos y fosforila también fructosa y manosa",
            "Es la enzima de la fosforilación de la fructosa-6-P",
            "Solo actúa en el músculo"
          ],
          correcta: 0,
          explicacion: "Las hexoquinasas I-III están en muchos tejidos y fosforilan otras hexosas; la IV es hepática y específica de la glucosa."
        },
        {
          texto: "¿Qué efecto tiene un exceso de ATP sobre la fosfofructoquinasa-1?",
          opciones: [
            "La inhibe",
            "La activa",
            "No le afecta",
            "La convierte en fructosa-1,6-bisfosfatasa"
          ],
          correcta: 0,
          explicacion: "Mucho ATP = la célula tiene energía: se frena la glucólisis. ADP/AMP y la fructosa-2,6-bisfosfato la activan."
        },
        {
          texto: "Balance neto de la glucólisis por cada glucosa:",
          opciones: ["2 piruvato + 2 ATP + 2 NADH", "2 piruvato + 4 ATP + 2 FADH₂", "1 piruvato + 2 ATP", "2 lactato + 36 ATP"],
          correcta: 0,
          explicacion: "Se gastan 2 ATP en la fase I y se forman 4 en la fase II: neto 2 ATP, además de 2 NADH y 2 piruvatos."
        },
        {
          texto: "¿Qué hormonas favorecen e inhiben la glucólisis, respectivamente?",
          opciones: ["Insulina la favorece y glucagón la inhibe", "Glucagón la favorece e insulina la inhibe", "Las dos la favorecen", "Las dos la inhiben"],
          correcta: 0,
          explicacion: "La insulina (abundancia de glucosa) activa la glucólisis; el glucagón (ayuno) la inhibe."
        }
      ]
    },
    {
      id: "p2-t08b-2",
      tema: "tema-08-2",
      numero: "2",
      etiqueta: "Test 2",
      titulo: "Fructosa, galactosa, lactato y respiración celular",
      preguntas: [
        {
          texto: "¿Por dónde entra la fructosa en la glucólisis por la vía mayoritaria (hígado)?",
          opciones: [
            "Fructosa-1-P se rompe por la aldolasa en DHAP y gliceraldehído",
            "Se convierte directamente en glucosa-6-P",
            "Entra como piruvato",
            "Entra como fructosa-6-P por la hexoquinasa"
          ],
          correcta: 0,
          explicacion: "Vía mayoritaria (hígado): fructoquinasa → F1P → aldolasa → DHAP + gliceraldehído (este se fosforila a GAP). La vía minoritaria (fuera del hígado) usa la hexoquinasa y da F6P."
        },
        {
          texto: "La galactosemia más común se debe al déficit de…",
          opciones: ["La primera transferasa de la ruta de la galactosa", "La lactasa", "La galactoquinasa", "La fosfoglucomutasa"],
          correcta: 0,
          explicacion: "La galactosa se convierte en glucosa-1-P (galactoquinasa, transferasa, epimerasa…). El déficit de la transferasa causa la galactosemia, con daño hepático y ocular."
        },
        {
          texto: "En condiciones anaerobias, el piruvato se transforma en…",
          opciones: ["Lactato, por la lactato deshidrogenasa", "Acetil-CoA, por la piruvato deshidrogenasa", "Oxalacetato, por la piruvato carboxilasa", "Etanol"],
          correcta: 0,
          explicacion: "El piruvato se reduce a lactato con el NADH de la glucólisis, y así se regenera el NAD⁺ que la glucólisis necesita para seguir."
        },
        {
          texto: "¿Por qué es imprescindible la reducción de piruvato a lactato en anaerobiosis?",
          opciones: [
            "Porque regenera el NAD⁺ que necesita la glucólisis",
            "Porque produce mucho ATP",
            "Porque elimina CO₂",
            "Porque produce NADPH"
          ],
          correcta: 0,
          explicacion: "Sin regenerar NAD⁺, la glucólisis se pararía. La glucólisis anaerobia solo da 2 ATP por glucosa."
        },
        {
          texto: "¿Qué tejidos dependen especialmente de la glucólisis anaerobia?",
          opciones: [
            "Músculo esquelético en esfuerzo, eritrocitos y tejidos del ojo (cristalino, córnea)",
            "Hígado y riñón",
            "Corazón y cerebro",
            "Tejido adiposo"
          ],
          correcta: 0,
          explicacion: "El eritrocito no tiene mitocondrias; el cristalino y la córnea tienen poco riego y pocas mitocondrias; el músculo sigue trabajando con poco oxígeno."
        },
        {
          texto: "¿Qué destinos tiene el lactato que pasa a la sangre?",
          opciones: [
            "Corazón (lo usa como combustible) e hígado (gluconeogénesis)",
            "Se elimina sin cambios por la orina",
            "Se almacena en el tejido adiposo",
            "Vuelve al eritrocito"
          ],
          correcta: 0,
          explicacion: "En el corazón, la LDH-H4 lo pasa a piruvato para la respiración celular. En el hígado sirve para fabricar glucosa. Si se acumula: acidosis láctica."
        },
        {
          texto: "¿Qué complejo transforma el piruvato en acetil-CoA (fase I de la respiración celular)?",
          opciones: ["Piruvato deshidrogenasa", "Piruvato carboxilasa", "Citrato sintasa", "Piruvato quinasa"],
          correcta: 0,
          explicacion: "Es una descarboxilación oxidativa irreversible en la mitocondria. El complejo tiene 3 enzimas y 5 coenzimas: CoA (B5), NAD⁺ (B3), FAD (B2), TPP (B1) y ácido lipoico."
        },
        {
          texto: "¿Qué coenzima del complejo piruvato deshidrogenasa deriva de la vitamina B1 (tiamina)?",
          opciones: ["Tiamina pirofosfato (TPP)", "FAD", "Coenzima A", "Ácido lipoico"],
          correcta: 0,
          explicacion: "TPP ← B1 · FAD ← B2 · NAD⁺ ← B3 · CoA ← B5. El ácido lipoico no es vitamina."
        },
        {
          texto: "¿Qué lanzadera usan el hígado y el corazón para meter en la mitocondria el NADH del citoplasma?",
          opciones: [
            "Malato-aspartato: el NADH aparece como NADH",
            "Glicerol-fosfato: el NADH aparece como FADH₂",
            "Carnitina",
            "El NADH cruza la membrana directamente"
          ],
          correcta: 0,
          explicacion: "El NADH no atraviesa la membrana mitocondrial. Malato-aspartato (hígado, corazón) → NADH; glicerol-fosfato (músculo, cerebro) → FADH₂, que da menos ATP."
        },
        {
          texto: "En el ciclo de Krebs del esquema, ¿qué enzima cataliza la reacción 1?",
          imagen: { src: "img/fisiologia2/krebs.svg", alt: "Ciclo de Krebs con ocho reacciones numeradas" },
          opciones: ["Citrato sintasa", "Aconitasa", "Isocitrato deshidrogenasa", "Malato deshidrogenasa"],
          correcta: 0,
          explicacion: "Reacción 1: oxalacetato (4 C) + acetil-CoA (2 C) → citrato (6 C), por la citrato sintasa. Es irreversible."
        },
        {
          texto: "En el mismo esquema, la reacción 6 (succinato → fumarato) la cataliza la succinato deshidrogenasa. ¿Qué coenzima recoge los hidrógenos?",
          imagen: { src: "img/fisiologia2/krebs.svg", alt: "Ciclo de Krebs con ocho reacciones numeradas" },
          opciones: ["FAD → FADH₂", "NAD⁺ → NADH", "NADP⁺ → NADPH", "Coenzima A"],
          correcta: 0,
          explicacion: "Es el único paso del ciclo que usa FAD. Las deshidrogenasas de isocitrato, α-cetoglutarato y malato usan NAD⁺."
        },
        {
          texto: "¿Qué se obtiene en una vuelta del ciclo de Krebs (por cada acetil-CoA)?",
          opciones: ["3 NADH + 1 FADH₂ + 1 GTP (o ATP) + 2 CO₂", "2 NADH + 2 FADH₂ + 2 ATP", "1 NADH + 1 FADH₂ + 36 ATP", "4 NADH + 1 GTP"],
          correcta: 0,
          explicacion: "3 NADH (isocitrato DH, α-cetoglutarato DH y malato DH), 1 FADH₂ (succinato DH), 1 GTP/ATP (succinil-CoA sintetasa) y 2 CO₂."
        },
        {
          texto: "Se dice que el ciclo de Krebs es anfibólico porque…",
          opciones: [
            "Algunos intermediarios se usan para biosíntesis (hemo, glutamato, aspartato)",
            "Funciona sin oxígeno",
            "Se produce en el citoplasma y en la mitocondria",
            "Solo es catabólico"
          ],
          correcta: 0,
          explicacion: "Succinil-CoA → hemo; α-cetoglutarato → glutamato; OAA → aspartato. Las reacciones anapleróticas (p. ej., piruvato → OAA) reponen esos intermediarios."
        },
        {
          texto: "¿Cuál es el aceptor final de electrones de la cadena respiratoria?",
          imagen: { src: "img/fisiologia2/cadena-respiratoria.svg", alt: "Cadena de transporte de electrones en la membrana mitocondrial interna" },
          opciones: ["El oxígeno, que se reduce a agua en el complejo IV", "El NAD⁺ en el complejo I", "La coenzima Q", "El ATP en el complejo V"],
          correcta: 0,
          explicacion: "NADH → complejo I → Q → complejo III → citocromo c → complejo IV (citocromo oxidasa) → O₂ → H₂O. El FADH₂ entra por el complejo II."
        }
      ]
    },
    {
      id: "p2-t08b-3",
      tema: "tema-08-2",
      numero: "3",
      etiqueta: "Test 3",
      titulo: "Balance energético, ROS, pentosas, gluconeogénesis y glucógeno",
      preguntas: [
        {
          texto: "¿Cómo se forma el ATP en la fosforilación oxidativa?",
          opciones: [
            "Los H⁺ bombeados al espacio intermembrana vuelven por la ATP sintasa (complejo V)",
            "Por fosforilación a nivel de sustrato en el citoplasma",
            "El oxígeno se une directamente al ADP",
            "Lo forma el complejo II con el FADH₂"
          ],
          correcta: 0,
          explicacion: "El transporte de electrones crea un gradiente de protones; su regreso por el complejo V (ATP sintasa) da la energía para sintetizar ATP."
        },
        {
          texto: "Con el acoplamiento real, ¿cuánto ATP da cada NADH y cada FADH₂ en la cadena respiratoria?",
          opciones: ["2,5 y 1,5", "3 y 2", "2 y 1", "1,5 y 2,5"],
          correcta: 0,
          explicacion: "Teóricamente 3 y 2 (por eso salen 36-38 ATP), pero el acoplamiento no es del 100 %: 2,5 y 1,5 (30-32 ATP)."
        },
        {
          texto: "Con 2,5 ATP/NADH y 1,5 ATP/FADH₂, ¿cuánto ATP da una glucosa si se usa la lanzadera malato-aspartato?",
          opciones: ["32 ATP", "30 ATP", "36 ATP", "38 ATP"],
          correcta: 0,
          explicacion: "Glucólisis 2 + fase I 5 + Krebs (15 + 3 + 2) = 27, más 5 por la lanzadera malato-aspartato = 32. Con glicerol-fosfato: 27 + 3 = 30."
        },
        {
          texto: "¿Qué enzima transforma el radical superóxido (·O₂⁻) en O₂ y H₂O₂?",
          opciones: ["Superóxido dismutasa (SOD)", "Catalasa", "Glutatión", "Haptoglobina"],
          correcta: 0,
          explicacion: "La SOD convierte el superóxido en O₂ + H₂O₂ y la catalasa rompe el H₂O₂ en agua y oxígeno. Glutatión y haptoglobina son antioxidantes endógenos no enzimáticos."
        },
        {
          texto: "¿Cuál es un antioxidante exógeno?",
          opciones: ["Vitamina E", "Catalasa", "Superóxido dismutasa", "Glutatión"],
          correcta: 0,
          explicacion: "Exógenos: vitamina E, selenio, flavonoides. El estrés oxidativo se relaciona con Alzheimer, cáncer y enfermedad cardiovascular."
        },
        {
          texto: "¿Cuál es la finalidad principal de la ruta de las pentosas fosfato?",
          opciones: [
            "Obtener NADPH y ribosa-5-P (no produce ATP)",
            "Obtener mucho ATP",
            "Sintetizar glucógeno",
            "Eliminar amoníaco"
          ],
          correcta: 0,
          explicacion: "Es la principal fuente de NADPH (síntesis de ácidos grasos, esteroides…) y aporta ribosa-5-P para los nucleótidos. Ocurre en el citoplasma y empieza con glucosa-6-P."
        },
        {
          texto: "¿En qué tejido es poco activa la ruta de las pentosas?",
          opciones: ["Músculo esquelético", "Hígado", "Tejido adiposo", "Eritrocito"],
          correcta: 0,
          explicacion: "Es muy activa en hígado, tejido adiposo, riñón y eritrocito; en el músculo faltan enzimas de la fase oxidativa."
        },
        {
          texto: "¿En qué fase de la ruta de las pentosas se produce el NADPH?",
          opciones: [
            "En la fase oxidativa (irreversible), que da 2 NADPH",
            "En la fase no oxidativa (reversible)",
            "En las dos fases por igual",
            "En ninguna: produce NADH"
          ],
          correcta: 0,
          explicacion: "Fase oxidativa: glucosa-6-P → ribulosa-5-P + CO₂ + 2 NADPH. Fase no oxidativa: interconversión de azúcares (transcetolasas pasan 2 C y transaldolasas 3 C)."
        },
        {
          texto: "¿Cuál es el órgano gluconeogénico más importante en condiciones normales?",
          opciones: ["El hígado", "El músculo", "El cerebro", "El intestino"],
          correcta: 0,
          explicacion: "Sobre todo el hígado y, en menor medida, el riñón (cuyo papel aumenta en el ayuno). El músculo no puede liberar glucosa."
        },
        {
          texto: "¿Cuál es el sustrato gluconeogénico cuantitativamente más importante?",
          opciones: ["El lactato", "La alanina", "El glicerol", "Los ácidos grasos"],
          correcta: 0,
          explicacion: "El lactato viene sobre todo del músculo y de los eritrocitos. Los ácidos grasos de cadena par no sirven para fabricar glucosa."
        },
        {
          texto: "¿Qué enzima mitocondrial con biotina inicia la gluconeogénesis desde piruvato?",
          opciones: ["Piruvato carboxilasa (piruvato → oxalacetato)", "Piruvato quinasa", "Piruvato deshidrogenasa", "PEP carboxiquinasa"],
          correcta: 0,
          explicacion: "Piruvato carboxilasa (biotina, ATP) → OAA; el OAA sale como malato y en el citoplasma la PEP carboxiquinasa (GTP) da fosfoenolpiruvato."
        },
        {
          texto: "¿Por qué el glucógeno muscular no sirve para mantener la glucemia?",
          opciones: [
            "Porque el músculo no tiene glucosa-6-fosfatasa",
            "Porque el músculo no tiene glucógeno fosforilasa",
            "Porque el glucógeno muscular no tiene ramificaciones",
            "Porque el músculo no tiene GLUT"
          ],
          correcta: 0,
          explicacion: "Sin glucosa-6-fosfatasa (enzima del retículo endoplásmico) la G6P no puede pasar a glucosa libre: el músculo la usa como combustible propio. El hígado sí la tiene."
        },
        {
          texto: "En la glucogenólisis, la glucógeno fosforilasa rompe los enlaces α(1→4) y libera sobre todo…",
          opciones: ["Glucosa-1-fosfato", "Glucosa libre", "Glucosa-6-fosfato", "Maltosa"],
          correcta: 0,
          explicacion: "Por fosforólisis desde los extremos no reductores sale glucosa-1-P (mayoritaria). La enzima desramificante libera la glucosa del enlace α(1→6) como glucosa libre (minoritaria)."
        },
        {
          texto: "¿Qué proteína inicia la síntesis de glucógeno sirviendo de cebador?",
          opciones: ["Glucogenina", "Glucógeno fosforilasa", "Enzima desramificante", "Glucoquinasa"],
          correcta: 0,
          explicacion: "La glucogenina es el iniciador; después actúan la pirofosforilasa, la glucógeno sintasa y la enzima ramificante."
        }
      ]
    }
  ]
};
