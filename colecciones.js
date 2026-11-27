// Colecciones de tests cortos: cada una tiene su página de listado (con la mejor nota de cada test)
// y sus bloques de tests. Necesita cargados antes los fisiologia-bloque*.js y fisio2-*.js.
const coleccionesTests = [
  {
    asignatura: "fisiologia",
    nombre: "Fisiología",
    pagina: "Fisiologia.html",
    claveResultados: "fisiologia-resultados",
    bloques: [fisiologiaBloque1, fisiologiaBloque2, fisiologiaBloque3, fisiologiaBloque4, fisiologiaBloque5]
  },
  {
    asignatura: "fisiologia2",
    nombre: "Fisiología · Parcial 2",
    pagina: "Fisiologia2.html",
    claveResultados: "fisiologia2-resultados",
    bloques: [
      fisio2Tema07,
      fisio2Tema08Estructura,
      fisio2Tema08Metabolismo,
      fisio2Tema09,
      fisio2Tema10,
      fisio2Tema11,
      fisio2Tema12Nucleotidos,
      fisio2Tema12Hemoglobina,
      fisio2Examen
    ]
  }
];

// Todos los tests cortos en una lista plana, en orden (para saber cuál es el siguiente)
const testsCortos = coleccionesTests.flatMap((coleccion) =>
  coleccion.bloques.flatMap((bloque) => bloque.tests.map((test) => ({ ...test, bloque: bloque.titulo, coleccion })))
);
