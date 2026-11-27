// Test a medida: se elige asignatura, temas y número de preguntas,
// y se abre test.html?medida=<asignatura>&temas=<tema,tema>&n=<número>
const formulario = document.getElementById("medida");
const contenedorAsignaturas = document.getElementById("asignaturas");
const contenedorTemas = document.getElementById("temas");
const contenedorCantidades = document.getElementById("cantidades");
const textoResumen = document.getElementById("medida-resumen");
const botonEmpezar = document.getElementById("empezar");

const CANTIDADES = [10, 20, 40, 0]; // 0 = todas

// Solo las asignaturas que tienen preguntas
const asignaturas = asignaturasApuntes.filter((a) => preguntasDe(a.id).length);

function crearPastilla(nombre, valor, texto, marcada) {
  const etiqueta = document.createElement("label");
  etiqueta.className = "pastilla";
  const entrada = document.createElement("input");
  entrada.type = "radio";
  entrada.name = nombre;
  entrada.value = valor;
  entrada.checked = marcada;
  const contenido = document.createElement("span");
  contenido.textContent = texto;
  etiqueta.append(entrada, contenido);
  return etiqueta;
}

function asignaturaElegida() {
  return formulario.elements.asignatura.value;
}

function temasElegidos() {
  return [...contenedorTemas.querySelectorAll("input:checked")].map((c) => c.value);
}

/* ---------- Temas de la asignatura, por bloques (solo los que tienen preguntas) ---------- */
function pintarTemas() {
  const asignatura = buscarAsignatura(asignaturaElegida());
  contenedorTemas.replaceChildren();

  asignatura.bloques.forEach((bloque) => {
    const temas = bloque.temas.filter((t) => preguntasDe(asignatura.id, [t.archivo]).length);
    if (!temas.length) return;

    const seccion = document.createElement("div");
    seccion.className = "medida-bloque";
    const titulo = document.createElement("h3");
    titulo.textContent = bloque.titulo;
    const lista = document.createElement("ul");
    lista.className = "medida-temas";

    temas.forEach((tema) => {
      const elemento = document.createElement("li");
      const etiqueta = document.createElement("label");
      etiqueta.className = "medida-tema";
      const casilla = document.createElement("input");
      casilla.type = "checkbox";
      casilla.value = tema.archivo;
      casilla.checked = true;
      const texto = document.createElement("span");
      texto.textContent = `Tema ${tema.numero} · ${tema.titulo}`;
      const cuantas = document.createElement("small");
      cuantas.textContent = `${preguntasDe(asignatura.id, [tema.archivo]).length} preguntas`;
      texto.append(cuantas);
      etiqueta.append(casilla, texto);
      elemento.append(etiqueta);
      lista.append(elemento);
    });

    seccion.append(titulo, lista);
    contenedorTemas.append(seccion);
  });
  actualizarResumen();
}

function actualizarResumen() {
  const disponibles = preguntasDe(asignaturaElegida(), temasElegidos()).length;
  const pedidas = Number(formulario.elements.cantidad.value);
  const saldran = pedidas ? Math.min(pedidas, disponibles) : disponibles;
  const temas = temasElegidos().length;
  botonEmpezar.disabled = !disponibles;
  textoResumen.textContent = disponibles
    ? `Saldrán ${saldran} preguntas de ${temas} ${temas === 1 ? "tema" : "temas"}, mezcladas.`
    : "Marca al menos un tema.";
}

/* ---------- Inicio ---------- */
asignaturas.forEach((a, i) => contenedorAsignaturas.append(crearPastilla("asignatura", a.id, a.nombre, i === 0)));
CANTIDADES.forEach((n, i) => contenedorCantidades.append(crearPastilla("cantidad", n, n ? String(n) : "Todas", i === 1)));

contenedorAsignaturas.addEventListener("change", pintarTemas);
contenedorTemas.addEventListener("change", actualizarResumen);
contenedorCantidades.addEventListener("change", actualizarResumen);

document.getElementById("todos").addEventListener("click", () => {
  contenedorTemas.querySelectorAll("input").forEach((c) => (c.checked = true));
  actualizarResumen();
});
document.getElementById("ninguno").addEventListener("click", () => {
  contenedorTemas.querySelectorAll("input").forEach((c) => (c.checked = false));
  actualizarResumen();
});

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const parametros = new URLSearchParams({
    medida: asignaturaElegida(),
    temas: temasElegidos().join(","),
    n: formulario.elements.cantidad.value
  });
  location.href = `test.html?${parametros}`;
});

pintarTemas();
