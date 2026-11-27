// Colecciones de tests cortos: cada una tiene su página de listado (con la mejor nota de cada test)
// y sus bloques de tests. Necesita cargados antes los fisiologia-bloque*.js y bioquimica-p2-*.js y fisiologia-p2-*.js.
const coleccionesTests = [
  {
    asignatura: "fisiologia",
    nombre: "Fisiología",
    pagina: "Fisiologia.html",
    claveResultados: "fisiologia-resultados",
    bloques: [fisiologiaBloque1, fisiologiaBloque2, fisiologiaBloque3, fisiologiaBloque4, fisiologiaBloque5]
  },
  {
    asignatura: "bioquimica-p2",
    nombre: "Bioquímica · Parcial 2",
    pagina: "BioquimicaP2.html",
    claveResultados: "bioquimica-p2-resultados",
    bloques: [
      bioqP2Tema07,
      bioqP2Tema08Estructura,
      bioqP2Tema08Metabolismo,
      bioqP2Tema09,
      bioqP2Tema10,
      bioqP2Tema11,
      bioqP2Tema12Nucleotidos,
      bioqP2Tema12Hemoglobina,
      bioqP2Examen
    ]
  },
  {
    asignatura: "fisiologia-p2",
    nombre: "Fisiología · Parcial 2",
    pagina: "FisiologiaP2.html",
    claveResultados: "fisiologia-p2-resultados",
    bloques: [fisioP2Nervioso, fisioP2Endocrino, fisioP2Digestivo]
  }
];

// Todos los tests cortos en una lista plana, en orden (para saber cuál es el siguiente)
const testsCortos = coleccionesTests.flatMap((coleccion) =>
  coleccion.bloques.flatMap((bloque) => bloque.tests.map((test) => ({ ...test, bloque: bloque.titulo, coleccion })))
);
