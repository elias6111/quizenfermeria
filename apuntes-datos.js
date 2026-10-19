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
  }
];

// Permite reutilizar los datos desde el script que genera los PDF (Node).
if (typeof module !== "undefined") module.exports = asignaturasApuntes;
