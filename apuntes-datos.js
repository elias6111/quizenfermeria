// Apuntes en PDF de cada asignatura, agrupados en bloques de temas.
// "archivo" es el nombre del fragmento en apuntes/fuentes/<asignatura>/ y del PDF en apuntes/pdf/<asignatura>/.
// "esencial" resume en pocas palabras lo más importante del tema.
const asignaturasApuntes = [
  {
    id: "bioquimica",
    nombre: "Bioquímica",
    descripcion: "Proteínas, ácidos nucleicos, genética e inmunogenética",
    completo: "bioquimica-completo",
    bloques: [
      {
        titulo: "Bloque I · Agua, proteínas y enzimas",
        temas: [
          {
            numero: "1",
            titulo: "Biomoléculas inorgánicas y agua",
            esencial: "Bioelementos, propiedades del agua, tampón bicarbonato y alteraciones ácido-base",
            archivo: "tema-01"
          },
          {
            numero: "2",
            titulo: "Aminoácidos y enlace peptídico",
            esencial: "Serie L, clasificación por cadena lateral, carga a pH fisiológico y enlace peptídico",
            archivo: "tema-02"
          },
          {
            numero: "3",
            titulo: "Estructura y clasificación de proteínas",
            esencial: "Niveles estructurales, hélice α, desnaturalización y heteroproteínas",
            archivo: "tema-03"
          },
          {
            numero: "4",
            titulo: "Proteínas transportadoras de oxígeno",
            esencial: "Grupo hemo, mioglobina frente a hemoglobina, cooperatividad, 2,3-BPG y tipos de Hb",
            archivo: "tema-04"
          },
          {
            numero: "5",
            titulo: "Proteínas del plasma y lipoproteínas",
            esencial: "Proteinograma, albúmina, transportadoras, inmunoglobulinas y lipoproteínas",
            archivo: "tema-05"
          },
          {
            numero: "6",
            titulo: "Escleroproteínas",
            esencial: "Colágeno (Gly-X-Y, vitamina C, tipos), elastina y queratinas",
            archivo: "tema-06"
          },
          {
            numero: "7",
            titulo: "Enzimología",
            esencial: "Propiedades, clases EC, centro activo, especificidad y cinética de Michaelis-Menten",
            archivo: "tema-07"
          }
        ]
      },
      {
        titulo: "Bloque II · Ácidos nucleicos y genética",
        temas: [
          {
            numero: "12",
            titulo: "Nucleósidos, nucleótidos y su metabolismo",
            esencial: "Bases púricas y pirimidínicas, vía de novo y de recuperación, ácido úrico",
            archivo: "tema-12"
          },
          {
            numero: "13",
            titulo: "Ácidos nucleicos",
            esencial: "Doble hélice, Chargaff, desnaturalización, nucleosoma y tipos de ARN",
            archivo: "tema-13"
          },
          {
            numero: "14",
            titulo: "Biosíntesis de proteínas",
            esencial: "Replicación, transcripción, maduración del ARNm, código genético y traducción",
            archivo: "tema-14"
          },
          {
            numero: "15",
            titulo: "Introducción a la genética médica",
            esencial: "Cromosomas, ADN mitocondrial, tipos de mutación, aneuploidías y farmacogenética",
            archivo: "tema-15"
          },
          {
            numero: "16",
            titulo: "Mutaciones y modelos de herencia",
            esencial: "Herencia autosómica y ligada al X, árboles genealógicos, penetrancia y multifactorial",
            archivo: "tema-16"
          },
          {
            numero: "17",
            titulo: "Técnicas genéticas de laboratorio",
            esencial: "PCR, RT-qPCR, Sanger, NGS, cariotipo, FISH y array CGH",
            archivo: "tema-17"
          }
        ]
      },
      {
        titulo: "Bloque III · Inmunogenética",
        temas: [
          {
            numero: "18–19",
            titulo: "Inmunogenética",
            esencial: "Inmunidad innata y adaptativa, diversidad de anticuerpos, MHC/HLA, inmunodeficiencias e inmunoterapia",
            archivo: "tema-18-19"
          }
        ]
      }
    ]
  },
  {
    id: "fisiologia",
    nombre: "Fisiología",
    descripcion: "Fisiología general, hematología y sistemas circulatorio, renal y respiratorio",
    completo: "fisiologia-completo",
    bloques: [
      {
        titulo: "Bloque I · Fisiología general",
        temas: [
          {
            numero: "1",
            titulo: "Introducción a la fisiología",
            esencial: "Medio interno, homeostasis, membrana celular, transporte y receptores",
            archivo: "tema-01"
          },
          {
            numero: "2",
            titulo: "Líquidos corporales",
            esencial: "Agua corporal total, LIC y LEC, ósmosis, osmolaridad y tonicidad",
            archivo: "tema-02"
          },
          {
            numero: "3–4",
            titulo: "Potenciales eléctricos",
            esencial: "Potencial de reposo, canales iónicos, potencial de acción, periodo refractario y conducción saltatoria",
            archivo: "tema-03-04"
          },
          {
            numero: "5",
            titulo: "Transmisión sináptica",
            esencial: "Sinapsis eléctrica y química, etapas, receptores ionotrópicos y metabotrópicos, glutamato y GABA",
            archivo: "tema-05"
          },
          {
            numero: "6",
            titulo: "Sistema nervioso autónomo",
            esencial: "Simpático frente a parasimpático, neurotransmisores, receptores, médula adrenal y doble inervación",
            archivo: "tema-06"
          }
        ]
      },
      {
        titulo: "Bloque II · Hematología",
        temas: [
          {
            numero: "7",
            titulo: "Propiedades de la sangre y hematíes",
            esencial: "Plasma y suero, hematocrito, hematopoyesis, eritropoyesis, hemocatéresis y anemias",
            archivo: "tema-07"
          },
          {
            numero: "8",
            titulo: "Leucocitos e inmunidad",
            esencial: "Tipos de leucocitos, fagocitosis, anticuerpos, inmunidad innata y adquirida, grupos AB0 y Rh",
            archivo: "tema-08"
          },
          {
            numero: "9",
            titulo: "Plaquetas y hemostasia",
            esencial: "Trombopoyesis, hemostasia primaria, cascada de coagulación, vitamina K y fibrinólisis",
            archivo: "tema-09"
          }
        ]
      },
      {
        titulo: "Bloque III · Sistema circulatorio",
        temas: [
          {
            numero: "10",
            titulo: "Introducción al sistema cardiovascular",
            esencial: "Circulación mayor y menor, válvulas, sístole y diástole, gasto cardiaco y ley de Ohm",
            archivo: "tema-10"
          },
          {
            numero: "11",
            titulo: "Actividad eléctrica cardíaca",
            esencial: "Células contráctiles y marcapasos, fases del potencial, sistema de conducción y electrocardiograma",
            archivo: "tema-11"
          },
          {
            numero: "12",
            titulo: "Ciclo cardíaco",
            esencial: "Fases del ciclo, volúmenes, fracción de eyección, ruidos cardiacos y ley de Frank-Starling",
            archivo: "tema-12"
          },
          {
            numero: "13",
            titulo: "Sistema arterial",
            esencial: "Distensibilidad y elasticidad, presión arterial, PAM, resistencia (radio⁴) y barorreceptores",
            archivo: "tema-13"
          },
          {
            numero: "14",
            titulo: "Circulación venosa",
            esencial: "Venas como reservorio, retorno venoso, bomba muscular y respiratoria, varices y bipedestación",
            archivo: "tema-14"
          },
          {
            numero: "15",
            titulo: "Capilares y sistema linfático",
            esencial: "Microcirculación, regulación local del flujo, intercambio capilar, sistema linfático y edema",
            archivo: "tema-15"
          }
        ]
      },
      {
        titulo: "Bloque IV · Sistema renal",
        temas: [
          {
            numero: "16",
            titulo: "Principios básicos de la función renal",
            esencial: "Funciones del riñón, nefrona, aparato yuxtaglomerular, circulación renal y formación de orina",
            archivo: "tema-16"
          },
          {
            numero: "17",
            titulo: "Procesos renales básicos",
            esencial: "Barrera de filtración, TFG, presión neta de filtración, autorregulación, aclaramiento y transporte tubular",
            archivo: "tema-17"
          },
          {
            numero: "18",
            titulo: "Funciones reguladoras del riñón",
            esencial: "Balance de agua, ADH, orina diluida y concentrada, SRAA, péptidos natriuréticos y equilibrio ácido-base",
            archivo: "tema-18"
          },
          {
            numero: "19",
            titulo: "Micción",
            esencial: "Vejiga y esfínteres, reflejo de micción, fases de llenado y vaciamiento, alteraciones",
            archivo: "tema-19"
          }
        ]
      },
      {
        titulo: "Bloque V · Sistema respiratorio",
        temas: [
          {
            numero: "20",
            titulo: "Introducción al sistema respiratorio",
            esencial: "Funciones, vías aéreas, zonas de conducción y respiratoria, neumocitos, pleura y circulación pulmonar",
            archivo: "tema-20"
          },
          {
            numero: "21",
            titulo: "Volúmenes y capacidades pulmonares",
            esencial: "Volúmenes, capacidades, espirometría, índice de Tiffeneau, patrones y tipos de respiración",
            archivo: "tema-21"
          },
          {
            numero: "22",
            titulo: "Mecánica y ventilación pulmonar",
            esencial: "Surfactante y ley de Laplace, músculos, presiones, ley de Boyle, espacio muerto y presiones parciales",
            archivo: "tema-22"
          },
          {
            numero: "23",
            titulo: "Circulación pulmonar e intercambio de gases",
            esencial: "Difusión, relación V/Q, leyes de Dalton, Henry y Fick, presiones parciales y enfermedades",
            archivo: "tema-23"
          },
          {
            numero: "24",
            titulo: "Transporte de gases",
            esencial: "Transporte de CO₂ y O₂, anhidrasa carbónica, saturación y curva de disociación de la hemoglobina",
            archivo: "tema-24"
          },
          {
            numero: "25",
            titulo: "Regulación de la respiración",
            esencial: "Centros respiratorios del tronco del encéfalo, quimiorreceptores y mecanorreceptores",
            archivo: "tema-25"
          }
        ]
      }
    ]
  }
];

// Permite reutilizar los datos desde el script que genera los PDF (Node).
if (typeof module !== "undefined") module.exports = asignaturasApuntes;
