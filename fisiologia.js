// Listado de los tests de Fisiología agrupados por bloques.
// Cada tarjeta enlaza a fisiologia-test.html?test=<id> y muestra la mejor nota guardada en este navegador.
const bloques = [fisiologiaBloque1, fisiologiaBloque2, fisiologiaBloque3, fisiologiaBloque4, fisiologiaBloque5];
const contenedor = document.getElementById("bloques");

// La mejor nota de cada test se guarda solo en este navegador (si no se puede leer, no se muestra)
function leerResultados() {
  try {
    return JSON.parse(localStorage.getItem("fisiologia-resultados")) || {};
  } catch {
    return {};
  }
}

function crearTarjeta(test, resultados) {
  const mejor = resultados[test.id];
  const nota = mejor
    ? `<span class="test-nota">Mejor nota: ${mejor.aciertos}/${mejor.total}</span>`
    : `<span class="test-nota test-nota-vacia">Sin hacer</span>`;

  return `
    <li class="tema${test.numero === "R" ? " tema-repaso" : ""}">
      <a class="tema-enlace" href="fisiologia-test.html?test=${test.id}">
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

  contenedor.innerHTML = bloques
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
