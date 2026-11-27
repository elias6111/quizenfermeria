// Bioquímica · Parcial 2 · Tema 11: Metabolismo de aminoácidos.
// "correcta" es la posición de la respuesta correcta (0 = primera opción). "imagen" es opcional.
const bioqP2Tema11 = {
  titulo: "Tema 11 · Metabolismo de aminoácidos",
  tests: [
    {
      id: "p2-t11-1",
      tema: "tema-11",
      numero: "1",
      etiqueta: "Test 1",
      titulo: "Fuentes, destinos, transaminación y desaminación",
      preguntas: [
        {
          texto: "¿Cuál es la fuente de aminoácidos que más aporta cada día desde el punto de vista cuantitativo?",
          opciones: [
            "La proteólisis de las proteínas corporales",
            "La dieta",
            "La síntesis de aminoácidos no esenciales",
            "La gluconeogénesis"
          ],
          correcta: 0,
          explicacion: "La dieta es la principal fuente de nitrógeno y de aminoácidos esenciales, pero el recambio de nuestras propias proteínas es lo que más aminoácidos aporta al día."
        },
        {
          texto: "¿Cuál de estos aminoácidos es esencial?",
          opciones: ["Valina", "Alanina", "Glutamato", "Serina"],
          correcta: 0,
          explicacion: "Esenciales: isoleucina, leucina, lisina, metionina, fenilalanina, treonina, triptófano y valina (y la histidina en la infancia). Ojo: la lista de los apuntes repite la metionina y se olvida de la valina."
        },
        {
          texto: "¿Qué ocurre con los aminoácidos que sobran?",
          opciones: [
            "No se almacenan: se catabolizan para obtener energía o glucosa",
            "Se almacenan en el músculo como reserva",
            "Se guardan en el hígado como proteínas de reserva",
            "Se eliminan intactos por la orina"
          ],
          correcta: 0,
          explicacion: "No hay depósito de aminoácidos. Su esqueleto carbonado pasa a intermediarios de la respiración celular o a la gluconeogénesis, y el grupo amino se elimina."
        },
        {
          texto: "¿Dónde se catabolizan los aminoácidos ramificados (leucina, isoleucina, valina)?",
          opciones: ["En el músculo esquelético", "En el hígado", "En el cerebro", "En el eritrocito"],
          correcta: 0,
          explicacion: "La mayoría de los aminoácidos se degradan en el hígado (y riñón); los ramificados, en el músculo."
        },
        {
          texto: "¿Qué coenzima necesitan las transaminasas?",
          opciones: ["Piridoxal fosfato (vitamina B6)", "Tiamina pirofosfato", "Biotina", "Coenzima A"],
          correcta: 0,
          explicacion: "La transaminación pasa el grupo amino de un aminoácido a un α-cetoácido (normalmente α-cetoglutarato, que se convierte en glutamato)."
        },
        {
          texto: "La alanina transaminasa (ALT o GPT) convierte la alanina en…",
          opciones: ["Piruvato", "Oxalacetato", "α-cetoglutarato", "Fumarato"],
          correcta: 0,
          explicacion: "ALT: alanina → piruvato. AST (GOT): aspartato → oxalacetato. En los dos casos el α-cetoglutarato recibe el amino y pasa a glutamato."
        },
        {
          texto: "¿Para qué sirven en clínica las transaminasas ALT y AST?",
          opciones: [
            "Son marcadores de daño celular, sobre todo hepático (también corazón y músculo)",
            "Miden la función renal",
            "Indican el nivel de glucosa",
            "Miden la cantidad de vitamina B12"
          ],
          correcta: 0,
          explicacion: "Si las células se rompen, estas enzimas salen a la sangre y suben en la analítica."
        },
        {
          texto: "¿Qué enzima realiza la desaminación oxidativa del glutamato?",
          opciones: ["Glutamato deshidrogenasa (en la mitocondria)", "Glutamina sintetasa", "ALT", "Carbamoil fosfato sintetasa II"],
          correcta: 0,
          explicacion: "Glutamato → α-cetoglutarato + NH₃ (reacción reversible). El amoníaco irá a biosíntesis o al ciclo de la urea."
        },
        {
          texto: "Las descarboxilasas convierten los aminoácidos en…",
          opciones: ["Aminas", "α-cetoácidos", "Urea", "Ácidos grasos"],
          correcta: 0,
          explicacion: "La descarboxilación da aminas (muchas son neurotransmisores). Los aminoácidos también son precursores de purinas, pirimidinas, hemo, hormonas tiroideas, carnitina…"
        },
        {
          texto: "En el sistema nervioso, el papel más destacado de los aminoácidos es…",
          opciones: ["Ser precursores de neurotransmisores", "Almacenar energía", "Formar glucógeno", "Producir urea"],
          correcta: 0,
          explicacion: "El hígado los usa para proteínas de secreción, el músculo para sus proteínas y el sistema nervioso para fabricar neurotransmisores."
        }
      ]
    },
    {
      id: "p2-t11-2",
      tema: "tema-11",
      numero: "2",
      etiqueta: "Test 2",
      titulo: "Ciclo de la urea y aminoacidopatías",
      preguntas: [
        {
          texto: "¿Dónde ocurre el ciclo de la urea?",
          opciones: ["En el hígado (mitocondria y citoplasma)", "En el riñón", "En el músculo", "En el intestino"],
          correcta: 0,
          explicacion: "El hígado convierte el amoníaco, tóxico, en urea, que se elimina por la orina. Es la forma de eliminar la mayor parte del amoníaco."
        },
        {
          texto: "¿Con qué otros nombres se conoce el ciclo de la urea?",
          opciones: ["Ciclo de la ornitina o de Krebs-Henseleit", "Ciclo de Cori", "Ciclo de Lynen", "Ciclo del glioxilato"],
          correcta: 0,
          explicacion: "Lo describieron Krebs y Henseleit. (La hélice de Lynen es la β-oxidación.)"
        },
        {
          texto: "¿Cuál es el primer intermediario del ciclo de la urea y qué enzima lo forma?",
          imagen: { src: "img/bioquimica-p2/ciclo-urea.svg", alt: "Esquema del ciclo de la urea entre mitocondria y citoplasma" },
          opciones: [
            "Carbamoil fosfato, por la carbamoil fosfato sintetasa I (mitocondrial)",
            "Carbamoil fosfato, por la carbamoil fosfato sintetasa II (citosólica)",
            "Citrulina, por la arginasa",
            "Ornitina, por la glutamato deshidrogenasa"
          ],
          correcta: 0,
          explicacion: "La CPS I es mitocondrial y es del ciclo de la urea. La CPS II es citosólica y es de la síntesis de pirimidinas (tema 12)."
        },
        {
          texto: "En el esquema, ¿qué aminoácido entra en el punto 1 y aporta el segundo nitrógeno de la urea?",
          imagen: { src: "img/bioquimica-p2/ciclo-urea.svg", alt: "Esquema del ciclo de la urea con el punto 1 señalado" },
          opciones: ["Aspartato", "Glutamato", "Alanina", "Glicina"],
          correcta: 0,
          explicacion: "La urea tiene dos grupos amino: uno del amoníaco que inicia el ciclo y otro del aspartato."
        },
        {
          texto: "Excepto el primero y el último, ¿qué tienen en común los intermediarios del ciclo de la urea?",
          opciones: ["Son aminoácidos", "Son azúcares fosfato", "Son ácidos grasos", "Son nucleótidos"],
          correcta: 0,
          explicacion: "Ornitina, citrulina, argininosuccinato y arginina son aminoácidos (no proteicos, salvo la arginina). El carbamoil fosfato y la urea no lo son."
        },
        {
          texto: "¿Qué tienen en común las aminoacidopatías?",
          opciones: [
            "Son enfermedades hereditarias raras, casi siempre autosómicas recesivas, por fallos enzimáticos",
            "Son infecciosas",
            "Solo afectan a adultos",
            "Se deben a una dieta pobre en proteínas"
          ],
          correcta: 0,
          explicacion: "Se acumulan aminoácidos o derivados tóxicos, con síntomas neurológicos y sistémicos. Se detectan con la prueba del talón y se tratan quitando ese aminoácido de la dieta."
        },
        {
          texto: "En la fenilcetonuria se acumula…",
          opciones: [
            "Fenilalanina, y secundariamente falta tirosina",
            "Tirosina",
            "Homocisteína",
            "Leucina, isoleucina y valina"
          ],
          correcta: 0,
          explicacion: "La tirosina se obtiene a partir de la fenilalanina: si esta no se transforma, se acumula y falta tirosina."
        },
        {
          texto: "La enfermedad de la orina con olor a jarabe de arce afecta al metabolismo de…",
          opciones: ["Los aminoácidos ramificados (leucina, isoleucina, valina)", "La fenilalanina", "La metionina", "La tirosina"],
          correcta: 0,
          explicacion: "Fenilcetonuria → fenilalanina; jarabe de arce → ramificados; homocistinuria → homocisteína (de la metionina); tirosinemia → tirosina (daño hepático y renal)."
        },
        {
          texto: "¿Qué aminoacidopatía produce un exceso de homocisteína?",
          opciones: ["Homocistinuria", "Tirosinemia", "Fenilcetonuria", "Galactosemia"],
          correcta: 0,
          explicacion: "La homocisteína procede del metabolismo de la metionina."
        },
        {
          texto: "¿Con qué prueba se detectan precozmente muchas aminoacidopatías?",
          opciones: ["La prueba del talón del recién nacido", "Una radiografía", "La prueba de Fehling", "Una curva de glucemia"],
          correcta: 0,
          explicacion: "El cribado neonatal permite empezar pronto la dieta sin el aminoácido implicado y evitar el daño neurológico."
        }
      ]
    }
  ]
};
