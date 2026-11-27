// Fisiología · Parcial 2 · Tema 7: Enzimología.
// "correcta" es la posición de la respuesta correcta (0 = primera opción). "imagen" es opcional.
const fisio2Tema07 = {
  titulo: "Tema 7 · Enzimología",
  tests: [
    {
      id: "p2-t07-1",
      tema: "tema-07",
      numero: "1",
      etiqueta: "Test 1",
      titulo: "Concepto, clasificación y centro activo",
      preguntas: [
        {
          texto: "¿Qué hace una enzima con una reacción química?",
          opciones: [
            "Aumenta su velocidad disminuyendo la energía de activación",
            "Desplaza el equilibrio hacia los productos",
            "Aporta la energía que le falta a la reacción",
            "Se consume y se transforma en producto"
          ],
          correcta: 0,
          explicacion: "Las enzimas son catalizadores: aceleran la reacción porque bajan la energía de activación, pero no cambian el equilibrio ni se consumen (se recuperan intactas al final)."
        },
        {
          texto: "Fíjate en el perfil energético. ¿Qué cambia cuando actúa la enzima (línea discontinua)?",
          imagen: { src: "img/fisiologia2/energia-activacion.svg", alt: "Perfil energético de una reacción con y sin enzima" },
          opciones: [
            "La energía de los productos",
            "La energía de activación (la altura de la barrera)",
            "La energía del sustrato",
            "La diferencia de energía entre sustrato y producto"
          ],
          correcta: 1,
          explicacion: "Sustrato y producto tienen la misma energía con o sin enzima: el equilibrio no cambia. Solo baja la barrera (energía de activación), por eso la reacción va más rápido."
        },
        {
          texto: "¿Cómo se llaman las moléculas de ARN con actividad catalítica?",
          opciones: ["Ribozimas", "Zimógenos", "Isoenzimas", "Apoenzimas"],
          correcta: 0,
          explicacion: "Casi todas las enzimas son proteínas, pero hay catalizadores de ARN: las ribozimas."
        },
        {
          texto: "Una enzima que cataliza la unión de dos sustratos gastando ATP pertenece a la clase…",
          opciones: ["6 · Ligasas", "4 · Liasas", "2 · Transferasas", "5 · Isomerasas"],
          correcta: 0,
          explicacion: "Clases EC: 1 oxidorreductasas, 2 transferasas, 3 hidrolasas, 4 liasas, 5 isomerasas, 6 ligasas (unen dos sustratos con hidrólisis de ATP) y 7 translocasas."
        },
        {
          texto: "¿A qué clase pertenecen las enzimas que rompen enlaces añadiendo agua (transfieren grupos al agua)?",
          opciones: ["Hidrolasas (clase 3)", "Liasas (clase 4)", "Oxidorreductasas (clase 1)", "Translocasas (clase 7)"],
          correcta: 0,
          explicacion: "Las hidrolasas catalizan reacciones de hidrólisis. Las liasas añaden o quitan grupos formando dobles o triples enlaces, sin agua."
        },
        {
          texto: "En el código EC de una enzima (EC + 4 números), ¿qué indica el primer número?",
          opciones: [
            "La clase de reacción que cataliza",
            "El número de orden dentro de su grupo",
            "El número de sustratos",
            "El órgano donde actúa"
          ],
          correcta: 0,
          explicacion: "Los cuatro números son clase, subclase, sub-subclase y número de orden. El primero (la clase) es el que hay que saber."
        },
        {
          texto: "Sobre el centro activo de una enzima, señala la opción INCORRECTA:",
          opciones: [
            "Ocupa la mayor parte del volumen de la enzima",
            "Es una hendidura tridimensional de la que se excluye el agua",
            "Puede incluir aminoácidos que están lejos en la secuencia",
            "Una enzima puede tener uno o varios centros activos"
          ],
          correcta: 0,
          explicacion: "El centro activo es una porción pequeña (≈ 5 %) del volumen total de la enzima."
        },
        {
          texto: "¿Qué residuos del centro activo se encargan de anclar el sustrato mediante fuerzas débiles?",
          opciones: ["Los de unión", "Los de catálisis", "Los estructurales", "Los no esenciales"],
          correcta: 0,
          explicacion: "Residuos esenciales: estructurales (mantienen la forma), de unión (anclan el sustrato con puentes de H, fuerzas electrostáticas, Van der Waals e interacciones hidrofóbicas) y de catálisis (transforman el sustrato)."
        },
        {
          texto: "Una enzima que actúa solo sobre un estereoisómero de su sustrato y no sobre el otro muestra…",
          opciones: ["Estereoespecificidad", "Especificidad absoluta de grupo", "Especificidad de reacción", "Cooperatividad"],
          correcta: 0,
          explicacion: "La estereoespecificidad es un tipo de especificidad relativa: actúa sobre un estereoisómero (p. ej., el L) y no sobre su imagen especular."
        },
        {
          texto: "¿Qué modelo propuso Koshland (1958) para explicar la unión enzima-sustrato?",
          opciones: [
            "Ajuste inducido: enzima y sustrato se amoldan al unirse",
            "Llave-cerradura: encajan de forma rígida y perfecta",
            "Modelo de cooperatividad secuencial",
            "Modelo de la proximidad aleatoria"
          ],
          correcta: 0,
          explicacion: "Fischer (1890) propuso la llave-cerradura (encaje rígido). Koshland propuso el ajuste inducido: son compatibles pero no complementarios y se amoldan al interaccionar."
        },
        {
          texto: "¿Cuál de estas NO es una característica del poder catalítico de las enzimas?",
          opciones: [
            "Generan subproductos en cada reacción",
            "Tienen un rendimiento del 100 %",
            "No se alteran ni se consumen en la reacción global",
            "Favorecen la proximidad y orientación de los sustratos"
          ],
          correcta: 0,
          explicacion: "Las reacciones enzimáticas tienen rendimiento del 100 % y no dejan subproductos."
        },
        {
          texto: "¿Cuál de estas es una propiedad general de las enzimas?",
          opciones: [
            "Son regulables",
            "Tienen vida media ilimitada",
            "Funcionan igual a cualquier pH",
            "Cambian la constante de equilibrio"
          ],
          correcta: 0,
          explicacion: "Propiedades: poder catalítico, especificidad, reversibilidad y regulación. Tienen vida media limitada y un pH óptimo."
        }
      ]
    },
    {
      id: "p2-t07-2",
      tema: "tema-07",
      numero: "2",
      etiqueta: "Test 2",
      titulo: "Cinética, pH, temperatura e inhibición",
      preguntas: [
        {
          texto: "En la curva de Michaelis-Menten, ¿qué representan el punto 1 y el punto 2?",
          imagen: { src: "img/fisiologia2/michaelis-menten.svg", alt: "Curva hiperbólica de Michaelis-Menten con dos puntos señalados" },
          opciones: ["1 = Vmáx · 2 = Km", "1 = Km · 2 = Vmáx", "1 = kcat · 2 = Vmáx/2", "1 = Vmáx/2 · 2 = [E]"],
          correcta: 0,
          explicacion: "La meseta es la velocidad máxima (enzima saturada). La Km es la concentración de sustrato con la que se alcanza la mitad de la Vmáx."
        },
        {
          texto: "Si se mantiene constante la enzima y se aumenta la concentración de sustrato, la velocidad…",
          opciones: [
            "Aumenta de forma hiperbólica hasta estabilizarse",
            "Aumenta de forma lineal sin límite",
            "Disminuye progresivamente",
            "No cambia"
          ],
          correcta: 0,
          explicacion: "Segundo postulado de Michaelis-Menten: relación hiperbólica; al saturarse la enzima se alcanza la Vmáx. (Con sustrato constante, la velocidad es proporcional a la cantidad de enzima.)"
        },
        {
          texto: "La hexoquinasa tiene una Km para la glucosa menor que la de otra enzima. Eso significa que…",
          opciones: [
            "Tiene más afinidad por la glucosa",
            "Tiene menos afinidad por la glucosa",
            "Su velocidad máxima es mayor",
            "Necesita más glucosa para funcionar"
          ],
          correcta: 0,
          explicacion: "Km y afinidad van al revés: cuanto menor es la Km, mayor es la afinidad (basta menos sustrato para llegar a la mitad de la Vmáx)."
        },
        {
          texto: "¿Qué es la kcat o número de recambio?",
          opciones: [
            "Moléculas de sustrato que una molécula de enzima convierte en producto por unidad de tiempo en saturación",
            "La concentración de sustrato necesaria para alcanzar la Vmáx",
            "El número de centros activos de una enzima",
            "El tiempo que tarda una enzima en degradarse"
          ],
          correcta: 0,
          explicacion: "Parámetros cinéticos: Km (afinidad), Vmáx (eficacia) y kcat (número de recambio)."
        },
        {
          texto: "El método de Lineweaver-Burk linealiza la ecuación de Michaelis-Menten representando…",
          opciones: ["Los inversos: 1/V frente a 1/[S]", "V frente a [S]", "V frente a log [S]", "[S]/V frente a V"],
          correcta: 0,
          explicacion: "Lineweaver-Burk usa los dobles recíprocos (1/V y 1/[S]). Otros métodos: Hanes, Eadie-Hofstee y Woolf."
        },
        {
          texto: "¿Qué enzima trabaja mejor a pH ácido?",
          opciones: ["La pepsina", "La tripsina", "La lipasa pancreática", "La amilasa salival"],
          correcta: 0,
          explicacion: "Cada enzima tiene su pH óptimo: la pepsina (estómago) a pH ácido y la tripsina entre 6 y 8."
        },
        {
          texto: "Al subir mucho la temperatura, la actividad de una enzima acaba cayendo porque…",
          opciones: [
            "La proteína se desnaturaliza",
            "La reacción se hace más lenta según Arrhenius",
            "Aumenta la Km de forma reversible",
            "El sustrato se convierte en inhibidor"
          ],
          correcta: 0,
          explicacion: "Dos efectos: primero la reacción se acelera (Arrhenius), pero con temperaturas muy altas la enzima se desnaturaliza."
        },
        {
          texto: "En la gráfica de Lineweaver-Burk, las rectas con y sin inhibidor cortan el eje vertical en el mismo punto. ¿Qué tipo de inhibición es?",
          imagen: { src: "img/fisiologia2/lineweaver-competitiva.svg", alt: "Rectas de Lineweaver-Burk que cortan el eje 1/V en el mismo punto" },
          opciones: ["Competitiva", "No competitiva", "Acompetitiva", "Irreversible"],
          correcta: 0,
          explicacion: "Mismo corte en el eje 1/V = misma Vmáx. Cambia el corte con el eje x (−1/Km): la Km aumenta. Eso es la inhibición competitiva."
        },
        {
          texto: "En la inhibición competitiva…",
          opciones: [
            "Aumenta la Km y no cambia la Vmáx",
            "Disminuye la Vmáx y no cambia la Km",
            "Disminuyen la Km y la Vmáx",
            "No cambian ni la Km ni la Vmáx"
          ],
          correcta: 0,
          explicacion: "El inhibidor, parecido al sustrato, compite por el centro activo: baja la afinidad (sube Km) pero, con mucho sustrato, se alcanza la misma Vmáx."
        },
        {
          texto: "Un inhibidor que se une a un sitio distinto del centro activo, no impide la unión del sustrato pero reduce la catálisis, es…",
          opciones: ["No competitivo: baja la Vmáx y no cambia la Km", "Competitivo: sube la Km", "Suicida", "Un activador alostérico"],
          correcta: 0,
          explicacion: "En la no competitiva el sustrato sigue pudiendo unirse (Km igual), pero el cambio de conformación hace la catálisis menos eficaz (Vmáx menor)."
        },
        {
          texto: "¿Qué caracteriza a la inhibición acompetitiva?",
          opciones: [
            "El inhibidor solo se une al complejo enzima-sustrato",
            "El inhibidor se une a la enzima libre en el centro activo",
            "El inhibidor se une covalentemente",
            "El inhibidor aumenta la Vmáx"
          ],
          correcta: 0,
          explicacion: "En la acompetitiva el inhibidor solo puede unirse al complejo ES (tras el cambio conformacional que provoca el sustrato). Disminuye la Vmáx y varía la Km."
        },
        {
          texto: "La penicilina inhibe la transpeptidasa bacteriana de forma irreversible. Es un ejemplo de…",
          opciones: ["Sustrato o inhibidor suicida", "Inhibición competitiva reversible", "Regulación alostérica", "Proteólisis limitada"],
          correcta: 0,
          explicacion: "El inhibidor suicida se une covalentemente e inhibe la enzima para siempre. El gas sarín (acetilcolinesterasa) y el cianuro son ejemplos perjudiciales de inhibición irreversible."
        }
      ]
    },
    {
      id: "p2-t07-3",
      tema: "tema-07",
      numero: "3",
      etiqueta: "Test 3",
      titulo: "Regulación, isoenzimas, cofactores y vitaminas",
      preguntas: [
        {
          texto: "Cuando el producto final de una ruta inhibe la enzima del primer paso, hablamos de…",
          opciones: ["Retroinhibición", "Proteólisis limitada", "Inhibición suicida", "Cooperatividad positiva"],
          correcta: 0,
          explicacion: "La retroinhibición actúa sobre la etapa limitante (suele ser el primer paso o un punto de ramificación) y evita que se acumulen intermediarios."
        },
        {
          texto: "¿Qué curva de la gráfica corresponde a una enzima alostérica?",
          imagen: { src: "img/fisiologia2/cinetica-sigmoide.svg", alt: "Una curva hiperbólica (A) y una sigmoidea (B)" },
          opciones: [
            "B, porque tiene cinética sigmoidea",
            "A, porque es hiperbólica",
            "Las dos por igual",
            "Ninguna: las alostéricas no saturan"
          ],
          correcta: 0,
          explicacion: "Las enzimas alostéricas suelen ser oligoméricas con cooperatividad: la unión a un protómero facilita la del siguiente y la curva es sigmoidea. Las michaelianas son hiperbólicas."
        },
        {
          texto: "Sobre las enzimas alostéricas, señala la correcta:",
          opciones: [
            "Los efectores se unen a un sitio distinto del centro activo",
            "Son siempre monoméricas",
            "Solo pueden ser activadas, nunca inhibidas",
            "Sus efectores se unen de forma covalente"
          ],
          correcta: 0,
          explicacion: "«Alo» = el otro: el modulador (inhibidor o estimulador) se une en otro sitio y el cambio conformacional se transmite al centro activo. Suelen tener estructura cuaternaria."
        },
        {
          texto: "¿Qué son los zimógenos?",
          opciones: [
            "Precursores inactivos que se activan por proteólisis limitada (irreversible)",
            "Enzimas que se activan por fosforilación reversible",
            "Cofactores inorgánicos",
            "Isoenzimas del hígado"
          ],
          correcta: 0,
          explicacion: "La modificación covalente irreversible corta un fragmento de la cadena y activa la enzima. La reversible añade o quita grupos (fosforilación, metilación, adenilación…)."
        },
        {
          texto: "La fosforilación de una enzima para activarla o inactivarla es un ejemplo de…",
          opciones: ["Modificación covalente reversible", "Proteólisis limitada", "Inhibición competitiva", "Isoenzimas"],
          correcta: 0,
          explicacion: "Fosforilación, adenilación, uridililación, ADP-ribosilación o metilación modifican la actividad en los dos sentidos."
        },
        {
          texto: "¿Qué son las isoenzimas?",
          opciones: [
            "Formas estructurales distintas de una enzima que catalizan la misma reacción",
            "Enzimas que catalizan reacciones opuestas",
            "Enzimas inactivas que esperan un cofactor",
            "Enzimas formadas solo por ARN"
          ],
          correcta: 0,
          explicacion: "Ejemplo típico: la lactato deshidrogenasa (LDH), un tetrámero de subunidades H y M con 5 combinaciones."
        },
        {
          texto: "¿Qué isoenzima de la LDH predomina en el miocardio?",
          opciones: ["LDH-1 (H4)", "LDH-5 (M4)", "LDH-3 (H2M2)", "LDH-4 (HM3)"],
          correcta: 0,
          explicacion: "LDH-1 (H4): miocardio, riñón y eritrocitos. LDH-5 (M4): hígado y músculo esquelético. La subunidad H se inhibe por piruvato; la M no."
        },
        {
          texto: "Apoenzima + cofactor = …",
          opciones: ["Holoenzima (activa)", "Zimógeno (inactivo)", "Isoenzima", "Coenzima"],
          correcta: 0,
          explicacion: "La apoenzima es la parte proteica inactiva; al unirse el cofactor se forma la holoenzima activa."
        },
        {
          texto: "¿Qué diferencia a una coenzima de otros cofactores?",
          opciones: [
            "Es de naturaleza orgánica (muchas derivan de vitaminas hidrosolubles)",
            "Es siempre un ion metálico",
            "Es una proteína",
            "Es siempre un ARN"
          ],
          correcta: 0,
          explicacion: "Los cofactores pueden ser inorgánicos (iones metálicos) u orgánicos; estos últimos son las coenzimas."
        },
        {
          texto: "¿Qué vitaminas son liposolubles?",
          opciones: ["A, D, E y K", "B y C", "B1, B2 y B12", "C y K"],
          correcta: 0,
          explicacion: "Liposolubles: A, D, E, K. Se almacenan en hígado y grasa, se eliminan poco por orina y pueden alcanzar niveles tóxicos. Hidrosolubles: complejo B y C."
        },
        {
          texto: "El NAD⁺ y el NADP⁺ son coenzimas derivadas de la vitamina…",
          opciones: ["B3 (niacina)", "B2 (riboflavina)", "B5 (ácido pantoténico)", "B6 (piridoxina)"],
          correcta: 0,
          explicacion: "B2 → FMN y FAD · B3 → NAD y NADP · B5 → coenzima A · B6 → piridoxal fosfato · B8 → biocitina · B9 → THF · B12 → cobalamina."
        },
        {
          texto: "¿Qué coenzima, derivada de la vitamina B6, participa en las transaminaciones?",
          opciones: ["Piridoxal fosfato (PLP)", "Tetrahidrofolato", "Coenzima A", "FAD"],
          correcta: 0,
          explicacion: "El PLP interviene en reacciones de aminoácidos: transaminación, descarboxilación, deshidratación…"
        }
      ]
    }
  ]
};
