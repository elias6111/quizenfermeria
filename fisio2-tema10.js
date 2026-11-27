// Fisiología · Parcial 2 · Tema 10: Metabolismo de lípidos.
// "correcta" es la posición de la respuesta correcta (0 = primera opción). "imagen" es opcional.
const fisio2Tema10 = {
  titulo: "Tema 10 · Metabolismo de lípidos",
  tests: [
    {
      id: "p2-t10-1",
      tema: "tema-10",
      numero: "1",
      etiqueta: "Test 1",
      titulo: "Digestión y absorción de lípidos",
      preguntas: [
        {
          texto: "¿Qué proporción de los lípidos de la dieta son triglicéridos?",
          opciones: ["Aproximadamente el 90 %", "Alrededor del 10 %", "La mitad", "Casi ninguno"],
          correcta: 0,
          explicacion: "Se ingieren unos 80-120 g de grasa al día, ≈ 90 % triglicéridos, sobre todo con ácidos grasos de cadena larga."
        },
        {
          texto: "¿Dónde se sintetiza la lipasa lingual?",
          opciones: ["En las glándulas de Von Ebner", "En las parótidas", "En las glándulas gástricas", "En el páncreas exocrino"],
          correcta: 0,
          explicacion: "Actúa sobre triglicéridos de cadena corta (C1 y C3) y es importante en el neonato, porque la leche materna es rica en ellos."
        },
        {
          texto: "¿Por qué las lipasas lingual y gástrica son tan importantes en el recién nacido?",
          opciones: [
            "La leche materna tiene triglicéridos de cadena corta y media y su páncreas aún no está maduro",
            "Porque el neonato no tiene bilis",
            "Porque digieren la lactosa",
            "Porque el estómago del neonato es muy ácido"
          ],
          correcta: 0,
          explicacion: "En el adulto digieren ≈ 30 % de los triglicéridos y preparan el terreno para el intestino."
        },
        {
          texto: "¿Cuál es el orden de los eventos de la digestión de lípidos en la luz intestinal?",
          opciones: [
            "Emulsificación → lipólisis → solubilización micelar",
            "Lipólisis → emulsificación → solubilización micelar",
            "Solubilización micelar → lipólisis → emulsificación",
            "Emulsificación → solubilización micelar → lipólisis"
          ],
          correcta: 0,
          explicacion: "Primero se dispersa la grasa en gotitas (peristaltismo, calor gástrico), luego las lipasas la hidrolizan y por último los productos se meten en micelas para absorberse."
        },
        {
          texto: "¿Cuál es la principal enzima de la digestión de los triglicéridos?",
          opciones: ["Lipasa pancreática", "Lipasa lingual", "Lipasa gástrica", "Fosfolipasa A2"],
          correcta: 0,
          explicacion: "La lipasa pancreática actúa en el intestino (casi completa en el yeyuno proximal), a pH 6-7, sobre los triglicéridos de cadena larga."
        },
        {
          texto: "¿Qué productos libera la lipasa pancreática al hidrolizar un triglicérido?",
          opciones: [
            "2-monoacilglicérido y 2 ácidos grasos libres",
            "Glicerol y 3 ácidos grasos",
            "1,2-diacilglicérido y 1 ácido graso",
            "Colesterol y ácidos grasos"
          ],
          correcta: 0,
          explicacion: "Corta los ésteres de C1 y C3; queda el ácido graso de C2 unido al glicerol (2-monoacilglicérido)."
        },
        {
          texto: "¿Para qué necesita la lipasa pancreática a la colipasa?",
          opciones: [
            "Para evitar el efecto inhibidor de las sales biliares y anclarse a la gota de grasa",
            "Para activarse por fosforilación",
            "Para digerir proteínas",
            "Para absorber el colesterol"
          ],
          correcta: 0,
          explicacion: "Las sales biliares recubren las gotas de grasa y la lipasa no llega; la colipasa (activada por la tripsina) las desplaza y estabiliza a la lipasa en la interfase."
        },
        {
          texto: "¿Qué activa la procolipasa y la fosfolipasa A2 en el intestino?",
          opciones: ["La tripsina", "La pepsina", "La bilis", "La insulina"],
          correcta: 0,
          explicacion: "La enteroquinasa activa el tripsinógeno a tripsina, y la tripsina activa la procolipasa y la fosfolipasa A2."
        },
        {
          texto: "¿Qué hormona intestinal estimula la secreción de bilis (vaciamiento de la vesícula)?",
          opciones: ["Colecistoquinina (CCK)", "Secretina", "Gastrina", "Insulina"],
          correcta: 0,
          explicacion: "La CCK induce la salida de ácidos biliares; la secretina hace que se secrete bicarbonato para neutralizar el ácido del quimo."
        },
        {
          texto: "Sobre las sales biliares, señala la INCORRECTA:",
          opciones: [
            "Se forman a partir de los ácidos grasos",
            "Actúan como detergentes biológicos",
            "Forman micelas que llevan los lípidos hasta el enterocito",
            "Ayudan a absorber las vitaminas A, D, E y K"
          ],
          correcta: 0,
          explicacion: "Las sales biliares derivan del colesterol (es su principal destino metabólico)."
        },
        {
          texto: "¿Cómo entran en el enterocito los ácidos grasos de cadena larga?",
          opciones: [
            "Con transportadores específicos como FATP4",
            "Por difusión pasiva libre",
            "Unidos a la albúmina",
            "Por la vena porta directamente"
          ],
          correcta: 0,
          explicacion: "Los de cadena corta y media y los monoacilglicéridos pasan por difusión; los de cadena larga necesitan transportadores (FATP4)."
        },
        {
          texto: "¿Por qué vía llegan a la sangre los triglicéridos resintetizados en el enterocito?",
          opciones: [
            "Por la linfa, empaquetados en quilomicrones (conducto torácico)",
            "Por la vena porta, libres",
            "Por la vía biliar",
            "Unidos a la hemoglobina"
          ],
          correcta: 0,
          explicacion: "Los ácidos grasos de cadena larga y el colesterol van por la linfa en quilomicrones (la linfa se ve lechosa). Los de cadena corta y media van por la vena porta."
        },
        {
          texto: "¿Qué porcentaje del colesterol ingerido se absorbe aproximadamente?",
          opciones: ["Alrededor del 45 %", "Casi el 100 %", "Menos del 5 %", "El 80 %"],
          correcta: 0,
          explicacion: "Un 45 % (hasta el 50 % con ingestas altas). Los esteroles vegetales compiten con él y reducen su absorción un 10-15 %."
        }
      ]
    },
    {
      id: "p2-t10-2",
      tema: "tema-10",
      numero: "2",
      etiqueta: "Test 2",
      titulo: "β-oxidación y oxidación de otros ácidos grasos",
      preguntas: [
        {
          texto: "¿Dónde ocurre la β-oxidación de los ácidos grasos?",
          opciones: ["En la matriz mitocondrial", "En el citoplasma", "En el retículo endoplásmico", "En el núcleo"],
          correcta: 0,
          explicacion: "Es aerobia y mitocondrial. La activación a acil-CoA ocurre antes, en el citoplasma, gastando ATP."
        },
        {
          texto: "¿Qué molécula necesitan los ácidos grasos de más de 10 carbonos para atravesar la membrana mitocondrial interna?",
          opciones: ["La carnitina", "La coenzima A", "La biotina", "La albúmina"],
          correcta: 0,
          explicacion: "La carnitina aciltransferasa I (fuera) pasa el acilo a la carnitina, la translocasa la mete y la carnitina aciltransferasa II (dentro) regenera el acil-CoA."
        },
        {
          texto: "¿Cuál es el orden de las cuatro reacciones de cada vuelta de β-oxidación?",
          imagen: { src: "img/fisiologia2/beta-oxidacion.svg", alt: "Esquema de las cuatro reacciones de la β-oxidación" },
          opciones: [
            "Oxidación (FAD) → hidratación → oxidación (NAD⁺) → tiólisis",
            "Hidratación → oxidación → tiólisis → oxidación",
            "Tiólisis → oxidación → hidratación → oxidación",
            "Oxidación (NAD⁺) → tiólisis → hidratación → oxidación (FAD)"
          ],
          correcta: 0,
          explicacion: "1) Acil-CoA DH (FADH₂) 2) Enoil-CoA hidratasa 3) 3-hidroxiacil-CoA DH (NADH) 4) Tiolasa: sale un acetil-CoA y el acil-CoA queda 2 C más corto."
        },
        {
          texto: "¿Por qué se llama β-oxidación?",
          opciones: [
            "Porque se oxida el carbono β (el segundo tras el COOH) y la ruptura ocurre ahí",
            "Porque la hacen las células β del páncreas",
            "Porque se forma un enlace β-glucosídico",
            "Porque usa vitamina B"
          ],
          correcta: 0,
          explicacion: "En cada vuelta el carbono β se oxida a cetona y la tiolasa corta entre α y β, liberando 2 C como acetil-CoA."
        },
        {
          texto: "¿Qué produce cada vuelta de β-oxidación?",
          opciones: ["1 acetil-CoA + 1 FADH₂ + 1 NADH", "2 acetil-CoA + 2 ATP", "1 acetil-CoA + 2 NADPH", "1 piruvato + 1 NADH"],
          correcta: 0,
          explicacion: "Cada vuelta acorta 2 C y da un acetil-CoA, un FADH₂ y un NADH."
        },
        {
          texto: "¿Cuántas vueltas de β-oxidación necesita el ácido palmítico (16 C) y cuántos acetil-CoA da?",
          opciones: ["7 vueltas y 8 acetil-CoA", "8 vueltas y 8 acetil-CoA", "16 vueltas y 8 acetil-CoA", "7 vueltas y 7 acetil-CoA"],
          correcta: 0,
          explicacion: "Vueltas = n/2 − 1 = 7; acetil-CoA = n/2 = 8 (la última vuelta libera dos)."
        },
        {
          texto: "Según el cálculo de los apuntes (acetil-CoA = 12 ATP, NADH = 3, FADH₂ = 2), ¿cuánto ATP neto da el palmítico?",
          opciones: ["129 ATP", "131 ATP", "96 ATP", "38 ATP"],
          correcta: 0,
          explicacion: "8 × 12 = 96 + 7 NADH × 3 = 21 + 7 FADH₂ × 2 = 14 → 131, menos 2 de la activación = 129. (Con los valores reales 2,5 y 1,5 salen 106.)"
        },
        {
          texto: "La última tiólisis de un ácido graso de cadena impar produce, además de acetil-CoA…",
          opciones: ["Propionil-CoA (3 C), que acaba como succinil-CoA", "Malonil-CoA", "Acetoacetato", "Piruvato"],
          correcta: 0,
          explicacion: "Propionil-CoA → D-metilmalonil-CoA (carboxilasa con biotina) → L-metilmalonil-CoA (racemasa) → succinil-CoA (mutasa con vitamina B12), que entra en el ciclo de Krebs."
        },
        {
          texto: "¿Qué vitamina necesita la metilmalonil-CoA mutasa?",
          opciones: ["B12 (cobalamina)", "B1 (tiamina)", "C (ascórbico)", "Vitamina K"],
          correcta: 0,
          explicacion: "Es el último paso del propionil-CoA a succinil-CoA y usa un derivado de la cobalamina."
        },
        {
          texto: "Para oxidar ácidos grasos insaturados hacen falta, además de las enzimas normales…",
          opciones: ["Una isomerasa y una reductasa", "Una carboxilasa y una sintasa", "Una fosfatasa y una quinasa", "Ninguna enzima extra"],
          correcta: 0,
          explicacion: "La enoil-CoA isomerasa mueve el doble enlace de 3-4 a 2-3; la 2,4-dienoil-CoA reductasa (NADPH) resuelve los dobles enlaces en posición par."
        },
        {
          texto: "Respecto a su equivalente saturado, un ácido graso insaturado rinde…",
          opciones: ["2 ATP menos por cada doble enlace", "2 ATP más por cada doble enlace", "Lo mismo", "La mitad"],
          correcta: 0,
          explicacion: "Al tener ya un doble enlace, se salta el paso de la acil-CoA deshidrogenasa y no se forma ese FADH₂."
        },
        {
          texto: "En la oxidación peroxisomal de ácidos grasos…",
          opciones: [
            "Los electrones pasan al O₂ formando H₂O₂ (que destruye la catalasa) y no se genera ATP",
            "Se forma más ATP que en la mitocondria",
            "Se oxidan solo ácidos grasos de cadena corta",
            "No interviene ninguna flavoproteína"
          ],
          correcta: 0,
          explicacion: "Los peroxisomas acortan las cadenas muy largas (hasta octanoil-CoA) para que luego las acabe la mitocondria. Su ausencia funcional causa el síndrome de Zellweger."
        },
        {
          texto: "El glicerol liberado por el tejido adiposo se incorpora a la glucólisis o a la gluconeogénesis como…",
          opciones: [
            "Dihidroxiacetona fosfato (tras glicerol quinasa y glicerol-3-P deshidrogenasa)",
            "Piruvato",
            "Acetil-CoA",
            "Glucosa-6-fosfato"
          ],
          correcta: 0,
          explicacion: "Glicerol → glicerol-3-P (glicerol quinasa, ATP, en el hígado) → DHAP (deshidrogenasa, NAD⁺) → gliceraldehído-3-P (triosa fosfato isomerasa)."
        }
      ]
    },
    {
      id: "p2-t10-3",
      tema: "tema-10",
      numero: "3",
      etiqueta: "Test 3",
      titulo: "Cuerpos cetónicos, síntesis de ácidos grasos y colesterol",
      preguntas: [
        {
          texto: "¿Cuáles son los cuerpos cetónicos?",
          opciones: [
            "Acetoacetato, β-hidroxibutirato y acetona",
            "Acetil-CoA, malonil-CoA y acetona",
            "Lactato, piruvato y acetoacetato",
            "Glicerol y ácidos grasos"
          ],
          correcta: 0,
          explicacion: "Se forman en las mitocondrias del hígado a partir del acetil-CoA. La acetona aparece de forma espontánea por descarboxilación del acetoacetato."
        },
        {
          texto: "¿En qué situaciones aumenta la cetogénesis?",
          opciones: [
            "Ayuno prolongado, diabetes mal controlada, dietas muy pobres en hidratos",
            "Tras una comida rica en hidratos de carbono",
            "Cuando la insulina está alta",
            "Durante la síntesis de glucógeno"
          ],
          correcta: 0,
          explicacion: "Cuando faltan glúcidos, la β-oxidación hepática se dispara y el exceso de acetil-CoA se desvía a cuerpos cetónicos."
        },
        {
          texto: "¿Qué tejido NO puede usar los cuerpos cetónicos como combustible?",
          opciones: ["El hígado, que los fabrica", "El corazón", "El músculo esquelético", "El cerebro en ayuno prolongado"],
          correcta: 0,
          explicacion: "El hígado los produce y los exporta; los usan tejidos extrahepáticos (corazón, músculo y, en ayuno largo, cerebro). Así se ahorra glucosa para el cerebro."
        },
        {
          texto: "¿Qué intermediario comparten la cetogénesis y la síntesis de colesterol?",
          opciones: ["HMG-CoA", "Malonil-CoA", "Mevalonato", "Escualeno"],
          correcta: 0,
          explicacion: "2 acetil-CoA → acetoacetil-CoA → + acetil-CoA → HMG-CoA. En la cetogénesis la HMG-CoA liasa da acetoacetato; en la síntesis de colesterol la HMG-CoA reductasa da mevalonato."
        },
        {
          texto: "¿Por qué es peligrosa la acumulación de cuerpos cetónicos?",
          opciones: [
            "Son ácidos (pKa ≈ 3,5) y bajan el pH de la sangre (cetoacidosis)",
            "Porque suben el pH (alcalosis)",
            "Porque bloquean la glucólisis del eritrocito",
            "Porque se transforman en colesterol"
          ],
          correcta: 0,
          explicacion: "La acidosis metabólica afecta, entre otras cosas, a la capacidad de la hemoglobina para unir oxígeno."
        },
        {
          texto: "¿Por qué el tejido adiposo usa DHAP (y no glicerol libre) para fabricar triglicéridos?",
          opciones: [
            "Porque los adipocitos no tienen glicerol quinasa",
            "Porque el glicerol es tóxico para el adipocito",
            "Porque la DHAP tiene más carbonos",
            "Porque no tienen ácidos grasos"
          ],
          correcta: 0,
          explicacion: "Por eso el adipocito necesita glucosa (glucólisis → DHAP) para almacenar ácidos grasos como triglicéridos."
        },
        {
          texto: "¿Dónde ocurre la síntesis de ácidos grasos?",
          opciones: ["En el citoplasma", "En la matriz mitocondrial", "En el peroxisoma", "En el lisosoma"],
          correcta: 0,
          explicacion: "Síntesis: citosol, con ACP, NADPH y malonil-CoA. β-oxidación: matriz mitocondrial, con CoA, NAD⁺/FAD y acetil-CoA."
        },
        {
          texto: "¿Cuál es la enzima reguladora (paso comprometido) de la síntesis de ácidos grasos?",
          opciones: [
            "Acetil-CoA carboxilasa, que forma malonil-CoA y necesita biotina",
            "Ácido graso sintasa",
            "HMG-CoA reductasa",
            "Carnitina aciltransferasa I"
          ],
          correcta: 0,
          explicacion: "Acetil-CoA + HCO₃⁻ + ATP → malonil-CoA, con biotina como cofactor. El malonil-CoA es el donador de 2 C en la elongación."
        },
        {
          texto: "¿Qué coenzima aporta el poder reductor en la síntesis de ácidos grasos?",
          opciones: ["NADPH", "NADH", "FADH₂", "Coenzima Q"],
          correcta: 0,
          explicacion: "El NADPH, procedente sobre todo de la ruta de las pentosas fosfato."
        },
        {
          texto: "¿Cuál es el producto principal de la ácido graso sintasa?",
          opciones: ["Palmitato (16 C)", "Estearato (18 C)", "Oleato (18:1)", "Araquidonato (20 C)"],
          correcta: 0,
          explicacion: "Para alargar más allá de 16 C (estearato…) actúan elongasas del retículo endoplásmico y la mitocondria."
        },
        {
          texto: "¿Por qué el ácido linoleico es esencial?",
          opciones: [
            "Porque no tenemos la desaturasa para pasar del oleico al linoleico",
            "Porque no podemos sintetizar ningún ácido graso",
            "Porque no podemos fabricar palmitato",
            "Porque es saturado"
          ],
          correcta: 0,
          explicacion: "Podemos introducir dobles enlaces (acil-CoA desaturasa) para formar el oleico, pero no los del linoleico y el linolénico."
        },
        {
          texto: "¿Qué enzima es el punto de control de la síntesis de colesterol?",
          opciones: ["HMG-CoA reductasa", "HMG-CoA liasa", "Escualeno sintasa", "Acetil-CoA carboxilasa"],
          correcta: 0,
          explicacion: "Reduce el HMG-CoA a mevalonato con NADPH en el retículo endoplásmico. La insulina la favorece y el glucagón la inhibe. (Es la diana de las estatinas.)"
        },
        {
          texto: "Ordena las etapas de la síntesis de colesterol:",
          opciones: [
            "Acetil-CoA → HMG-CoA → mevalonato → isoprenos activados → escualeno → lanosterol → colesterol",
            "Acetil-CoA → escualeno → mevalonato → colesterol",
            "Malonil-CoA → palmitato → colesterol",
            "Mevalonato → HMG-CoA → escualeno → colesterol"
          ],
          correcta: 0,
          explicacion: "El mevalonato da isopentenil pirofosfato (5 C); seis unidades forman el escualeno (30 C), que se cicla a lanosterol y de ahí a colesterol."
        }
      ]
    }
  ]
};
