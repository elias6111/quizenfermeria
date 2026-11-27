// Bioquímica · Parcial 2 · Tema 12 (I): Nucleósidos, nucleótidos, polinucleótidos y su metabolismo.
// "correcta" es la posición de la respuesta correcta (0 = primera opción). "imagen" es opcional.
const bioqP2Tema12Nucleotidos = {
  titulo: "Tema 12 (I) · Nucleótidos y su metabolismo",
  tests: [
    {
      id: "p2-t12a-1",
      tema: "tema-12-1",
      numero: "1",
      etiqueta: "Test 1",
      titulo: "Bases, nucleósidos, nucleótidos y polinucleótidos",
      preguntas: [
        {
          texto: "¿Cuál de las dos estructuras del esquema es una purina?",
          imagen: { src: "img/bioquimica-p2/purina-pirimidina.svg", alt: "Dos bases nitrogenadas: A con un anillo y B con dos anillos fusionados" },
          opciones: [
            "B: dos anillos fusionados (pirimidina + imidazol)",
            "A: un solo anillo de seis átomos",
            "Las dos son purinas",
            "Ninguna: las dos son pirimidinas"
          ],
          correcta: 0,
          explicacion: "Purinas (adenina y guanina): doble anillo. Pirimidinas (citosina, timina y uracilo): un solo anillo."
        },
        {
          texto: "¿Qué base nitrogenada está solo en el ARN?",
          opciones: ["Uracilo", "Timina", "Citosina", "Adenina"],
          correcta: 0,
          explicacion: "Uracilo solo en ARN; timina solo en ADN; citosina, adenina y guanina en ambos."
        },
        {
          texto: "La adenina es la…",
          opciones: ["6-aminopurina", "2-amino-6-oxopurina", "2,4-dioxopirimidina", "2-oxo-4-aminopirimidina"],
          correcta: 0,
          explicacion: "Adenina: 6-aminopurina. Guanina: 2-amino-6-oxopurina. Uracilo: 2,4-dioxopirimidina. Citosina: 2-oxo-4-aminopirimidina. Timina: uracilo con un metilo en el C5."
        },
        {
          texto: "En el nucleósido, ¿por qué nitrógeno se une una base pirimidínica a la pentosa?",
          imagen: { src: "img/bioquimica-p2/purina-pirimidina.svg", alt: "Pirimidina (A) y purina (B) con sus nitrógenos numerados" },
          opciones: ["N1 (y las púricas por el N9)", "N3 (y las púricas por el N7)", "N9 (y las púricas por el N1)", "N7 (y las púricas por el N3)"],
          correcta: 0,
          explicacion: "Enlace β-N-glucosídico entre el C1' del azúcar y el N1 de las pirimidinas o el N9 de las purinas."
        },
        {
          texto: "Un nucleósido está formado por…",
          opciones: ["Base nitrogenada + pentosa", "Base + pentosa + fosfato", "Pentosa + fosfato", "Base + fosfato"],
          correcta: 0,
          explicacion: "Nucleósido = base + azúcar. Nucleótido = nucleósido + ácido fosfórico (en el C5')."
        },
        {
          texto: "¿Qué diferencia la ribosa de la 2-desoxirribosa?",
          opciones: [
            "La ribosa tiene un OH en el C2'; la desoxirribosa, solo un H",
            "La ribosa tiene seis carbonos",
            "La desoxirribosa tiene un grupo amino",
            "No hay diferencia"
          ],
          correcta: 0,
          explicacion: "Por eso la desoxirribosa solo puede unir fosfato en 3' y 5', y la ribosa en 2', 3' y 5'."
        },
        {
          texto: "¿Cómo se llama el nucleósido formado por guanina y ribosa?",
          opciones: ["Guanosina", "Guanilato", "Desoxiguanosina", "Guanina ribósido 5'-fosfato"],
          correcta: 0,
          explicacion: "Adenosina, guanosina, citidina y uridina (ribonucleósidos). Con fosfato: AMP (adenilato), GMP (guanilato)…"
        },
        {
          texto: "¿Qué enlace une los nucleótidos en un polinucleótido?",
          opciones: [
            "Fosfodiéster entre el C3' de un nucleótido y el C5' del siguiente",
            "N-glucosídico entre bases",
            "Puentes de hidrógeno entre fosfatos",
            "Peptídico"
          ],
          correcta: 0,
          explicacion: "El fosfato hace dos enlaces éster (con 5' y con 3'). La cadena tiene dirección: un extremo 5'-fosfato y otro 3'-OH libres."
        },
        {
          texto: "¿Qué forma el esqueleto (armazón) de una cadena de ácido nucleico?",
          opciones: ["Azúcares y fosfatos alternados", "Las bases nitrogenadas", "Aminoácidos", "Puentes de hidrógeno"],
          correcta: 0,
          explicacion: "Azúcar y fosfato son la parte constante; las bases quedan hacia dentro y son las que cambian la secuencia."
        },
        {
          texto: "¿Por qué los nucleótidos absorben la luz ultravioleta?",
          opciones: [
            "Por los dobles enlaces conjugados de los anillos de las bases",
            "Por el grupo fosfato",
            "Por la ribosa",
            "No la absorben"
          ],
          correcta: 0,
          explicacion: "Los anillos aromáticos de purinas y pirimidinas absorben UV, lo que permite cuantificarlos por espectrometría."
        },
        {
          texto: "El AMP cíclico (AMPc) es…",
          opciones: [
            "Un segundo mensajero de hormonas y neurotransmisores hidrosolubles",
            "El principal nucleótido del ADN",
            "Un transportador de electrones",
            "Una reserva de energía"
          ],
          correcta: 0,
          explicacion: "El fosfato forma un anillo esterificando a la vez el C3' y el C5'. Otros nucleótidos no nucleicos: ATP, NAD⁺, FAD, coenzima A."
        },
        {
          texto: "En condiciones fisiológicas, las bases nitrogenadas predominan en su forma…",
          opciones: ["Ceto (lactámica)", "Enol (lactímica)", "Imino siempre", "Ionizada positiva"],
          correcta: 0,
          explicacion: "Las bases presentan tautomería (amino-imino, ceto-enol), pero a pH fisiológico predominan las formas ceto o lactámicas."
        },
        {
          texto: "¿Qué pentosa llevan los nucleótidos del ADN?",
          opciones: ["2-desoxi-D-ribosa", "D-ribosa", "D-ribulosa", "D-glucosa"],
          correcta: 0,
          explicacion: "ADN: desoxirribonucleótidos. ARN: ribonucleótidos con D-ribosa."
        }
      ]
    },
    {
      id: "p2-t12a-2",
      tema: "tema-12-1",
      numero: "2",
      etiqueta: "Test 2",
      titulo: "Síntesis y degradación de nucleótidos",
      preguntas: [
        {
          texto: "Comparada con la vía de novo, la vía de recuperación (salvamento) de bases es…",
          opciones: [
            "Más rápida y con menor gasto energético",
            "Más lenta y más cara",
            "Exclusiva del hígado",
            "La única forma de sintetizar pirimidinas"
          ],
          correcta: 0,
          explicacion: "Recicla bases ya existentes (≈ 90 % de las purinas libres se recuperan). La de novo construye el anillo desde cero: más lenta y cara, pero da autonomía."
        },
        {
          texto: "¿Qué molécula es el precursor común de la vía de recuperación y de la vía de novo de las purinas?",
          opciones: ["PRPP (5-fosforribosil-1-pirofosfato)", "Carbamoil fosfato", "Orotato", "Inosina"],
          correcta: 0,
          explicacion: "El PRPP se forma desde ribosa-5-P + ATP (PRPP sintetasa). En las pirimidinas aparece a mitad de ruta, no como precursor."
        },
        {
          texto: "¿Qué enzima recupera la hipoxantina y la guanina uniéndolas al PRPP?",
          opciones: ["HGPRT", "APRT", "Xantina oxidasa", "Ribonucleótido reductasa"],
          correcta: 0,
          explicacion: "HGPRT: hipoxantina → IMP y guanina → GMP. APRT: adenina → AMP. (El déficit total de HGPRT causa el síndrome de Lesch-Nyhan.)"
        },
        {
          texto: "¿Cuál es el primer paso, regulador, de la síntesis de novo de purinas?",
          opciones: [
            "PRPP → fosforribosilamina, por la glutamina-PRPP amidotransferasa",
            "Carbamoil fosfato + aspartato, por la aspartato carbamoil transferasa",
            "IMP → AMP",
            "Ribosa-5-P → PRPP"
          ],
          correcta: 0,
          explicacion: "La glutamina aporta un grupo amino al C1' del PRPP. Las enzimas de la ruta se agrupan en el purinosoma."
        },
        {
          texto: "¿Qué nucleótido intermedio es el punto de ramificación hacia AMP y GMP?",
          opciones: ["IMP (inosinato)", "OMP (orotidilato)", "UMP", "XMP"],
          correcta: 0,
          explicacion: "Del IMP: adenilosuccinato sintetasa (con aspartato y GTP) → AMP; IMP deshidrogenasa (NAD⁺) → XMP → GMP (con ATP)."
        },
        {
          texto: "¿Qué efecto tiene un exceso de GMP en la síntesis de purinas?",
          opciones: [
            "Inhibe la conversión del IMP en XMP (su propia rama)",
            "Inhibe la conversión del IMP en adenilosuccinato",
            "Activa la glutamina-PRPP amidotransferasa",
            "No tiene ningún efecto"
          ],
          correcta: 0,
          explicacion: "Cada producto final frena el primer paso de su rama, y AMP, GMP e IMP frenan juntos el primer paso de la ruta (retroinhibición)."
        },
        {
          texto: "¿Cuál es el precursor de la síntesis de novo de pirimidinas?",
          opciones: ["Carbamoil fosfato, formado por la CPS II citosólica", "PRPP", "IMP", "Carbamoil fosfato de la CPS I mitocondrial"],
          correcta: 0,
          explicacion: "CO₂ + glutamina + fosfato → carbamoil fosfato (CPS II, citosol). La CPS I es mitocondrial y pertenece al ciclo de la urea."
        },
        {
          texto: "En la síntesis de pirimidinas, ¿cuál es el orden correcto?",
          opciones: [
            "Carbamoil-aspartato → orotato → OMP (con PRPP) → UMP → UTP → CTP",
            "PRPP → IMP → UMP → CMP",
            "Orotato → carbamoil fosfato → UMP",
            "CMP → UMP → orotato"
          ],
          correcta: 0,
          explicacion: "Primero se construye la base (orotato) y después se une al PRPP. Del UMP sale el CTP: sin UMP no hay CMP."
        },
        {
          texto: "¿Qué inhibe la aspartato carbamoil transferasa?",
          opciones: ["Un exceso de CTP", "Un exceso de PRPP", "Un exceso de ATP solo", "Un exceso de IMP"],
          correcta: 0,
          explicacion: "El UTP inhibe la CPS II, el CTP inhibe la aspartato carbamoil transferasa y el PRPP estimula la ruta."
        },
        {
          texto: "¿Qué enzima convierte los ribonucleótidos en desoxirribonucleótidos?",
          opciones: ["Ribonucleótido reductasa (con tiorredoxina)", "Timidilato sintasa", "Ribonucleasa", "PRPP sintetasa"],
          correcta: 0,
          explicacion: "Cambia el OH del C2' por un H. Después, la timidilato sintasa añade un metilo al dUMP para obtener dTMP."
        },
        {
          texto: "¿Cuál es el producto final de la degradación de las purinas en el ser humano?",
          opciones: ["Ácido úrico", "Urea", "β-alanina", "Amoníaco"],
          correcta: 0,
          explicacion: "AMP → … → hipoxantina; GMP → guanina → xantina; hipoxantina y xantina → ácido úrico, que se excreta. Su exceso causa la gota."
        },
        {
          texto: "La degradación de la citosina (vía CMP → UMP) acaba en…",
          opciones: ["β-alanina, NH₃ y CO₂", "Ácido úrico", "Hipoxantina", "Xantina"],
          correcta: 0,
          explicacion: "Las pirimidinas dan productos sencillos y solubles: β-alanina (aminoácido no proteico), NH₃ y CO₂; la timina acaba en succinil-CoA."
        },
        {
          texto: "¿Qué trastorno es un ejemplo de alteración del metabolismo de las pirimidinas?",
          opciones: ["Aciduria orótica", "Gota", "Síndrome de Lesch-Nyhan", "Fenilcetonuria"],
          correcta: 0,
          explicacion: "La aciduria orótica se debe a un fallo en el paso de orotato a UMP. Gota y Lesch-Nyhan son de las purinas; la fenilcetonuria, de los aminoácidos."
        }
      ]
    }
  ]
};
