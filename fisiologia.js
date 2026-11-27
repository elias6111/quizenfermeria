// Listado de los tests cortos de una colección (Fisiología o Bioquímica · Parcial 2) agrupados por bloques.
// La colección se elige con <body data-coleccion="...">; por defecto, Fisiología.
// Cada tarjeta enlaza a test.html?test=<id> y muestra la mejor nota guardada en este navegador.
const coleccion =
  coleccionesTests.find((c) => c.asignatura === document.body.dataset.coleccion) || coleccionesTests[0];
const contenedor = document.getElementById("bloques");

// La mejor nota de cada test se guarda solo en este navegador (si no se puede leer, no se muestra)
function leerResultados() {
  try {
    return JSON.parse(localStorage.getItem(coleccion.claveResultados)) || {};
  } catch {
    return {};
  }
}

function crearTarjeta(test, resultados) {
  const mejor = resultados[test.id];
  const nota = mejor
    ? `<span class="test-nota">Mejor nota: ${mejor.aciertos}/${mejor.total}</span>`
    : `<span class="test-nota test-nota-vacia">Sin hacer</span>`;
  const destacada = test.numero === "R" || test.numero === "E";

  return `
    <li class="tema${destacada ? " tema-repaso" : ""}">
      <a class="tema-enlace" href="test.html?test=${test.id}">
        <span class="tema-numero">${test.numero}</span>
        <span class="tema-texto">
          <span class="tema-titulo">${test.titulo}</span>
          <span class="tema-esencial">${test.preguntas.length} preguntas</span>
          ${nota}
        </span>
      </a>
    </li>`;
}

function mostrarBloques() {
  const resultados = leerResultados();

  contenedor.innerHTML = coleccion.bloques
    .map(
      (bloque) => `
      <section class="bloque">
        <h2>${bloque.titulo}</h2>
        <ul class="temas">${bloque.tests.map((test) => crearTarjeta(test, resultados)).join("")}</ul>
      </section>`
    )
    .join("");
}

mostrarBloques();
