// Página de un test de Fisiología. El test se elige con la URL: fisiologia-test.html?test=t07
// Las preguntas están en fisiologia-bloque1.js … fisiologia-bloque5.js.
const bloques = [fisiologiaBloque1, fisiologiaBloque2, fisiologiaBloque3, fisiologiaBloque4, fisiologiaBloque5];

// Lista plana de tests, en orden, para saber cuál es el siguiente
const tests = bloques.flatMap((bloque) => bloque.tests.map((test) => ({ ...test, bloque: bloque.titulo })));
const idPedido = new URLSearchParams(location.search).get("test");
const posicion = Math.max(0, tests.findIndex((test) => test.id === idPedido));
const test = tests[posicion];
const siguienteTest = tests[posicion + 1];
const preguntas = test.preguntas;

const formulario = document.getElementById("cuestionario");
const resultado = document.getElementById("resultado");
const botonCorregir = document.getElementById("corregir");
const botonReiniciar = document.getElementById("reiniciar");
const enlaceSiguiente = document.getElementById("siguiente");
const ventana = document.getElementById("ventana");
const ventanaTexto = document.getElementById("ventana-texto");
const botonCerrar = document.getElementById("cerrar");

/* ---------- Cabecera ---------- */
function pintarCabecera() {
  const etiqueta = test.numero === "R" ? "Repaso" : `Tema ${test.numero}`;
  document.title = test.numero === "R" ? `${test.titulo} · Fisiología` : `${etiqueta} · ${test.titulo} · Fisiología`;
  document.getElementById("migas-test").textContent = etiqueta;
  document.getElementById("test-bloque").textContent = `${test.bloque} · ${etiqueta}`;
  document.getElementById("test-titulo").textContent = test.titulo;

  if (siguienteTest) {
    enlaceSiguiente.href = `fisiologia-test.html?test=${siguienteTest.id}`;
    enlaceSiguiente.textContent = "Siguiente test ›";
  } else {
    enlaceSiguiente.textContent = "Volver a los tests";
  }
}

/* ---------- Construir el cuestionario ---------- */
function crearCuestionario() {
  preguntas.forEach((p, i) => formulario.append(crearPregunta(p, i)));
}

function crearPregunta(p, i) {
  const tarjeta = document.createElement("article");
  tarjeta.className = "pregunta";

  const cabecera = document.createElement("div");
  cabecera.className = "pregunta-cabecera";

  const numero = document.createElement("span");
  numero.className = "pregunta-numero";
  numero.textContent = `Pregunta ${i + 1} de ${preguntas.length}`;

  const botonExplicacion = document.createElement("button");
  botonExplicacion.type = "button";
  botonExplicacion.className = "boton-explicacion";
  botonExplicacion.textContent = "Explicación";
  botonExplicacion.addEventListener("click", () => abrirExplicacion(p.explicacion));

  cabecera.append(numero, botonExplicacion);

  const texto = document.createElement("p");
  texto.className = "pregunta-texto";
  texto.textContent = p.texto;

  const grupo = document.createElement("fieldset");
  grupo.className = "opciones";

  p.opciones.forEach((opcion, j) => {
    const etiqueta = document.createElement("label");
    etiqueta.className = "opcion";

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = `pregunta-${i}`;
    radio.value = j;
    radio.addEventListener("change", () => marcarSeleccion(grupo));

    const marca = document.createElement("span");
    marca.className = "marca";
    marca.setAttribute("aria-hidden", "true");

    const contenido = document.createElement("span");
    contenido.textContent = opcion;

    etiqueta.append(radio, marca, contenido);
    grupo.append(etiqueta);
  });

  tarjeta.append(cabecera, texto, grupo);
  return tarjeta;
}

/* ---------- Selección (azul) ---------- */
function marcarSeleccion(grupo) {
  grupo.querySelectorAll(".opcion").forEach((etiqueta) => {
    const marcada = etiqueta.querySelector("input").checked;
    etiqueta.classList.toggle("seleccionada", marcada);
  });
}

/* ---------- Corregir (verde / rojo) ---------- */
function corregir() {
  let aciertos = 0;

  document.querySelectorAll(".opciones").forEach((grupo, i) => {
    const etiquetas = grupo.querySelectorAll(".opcion");

    etiquetas.forEach((etiqueta, j) => {
      const radio = etiqueta.querySelector("input");
      etiqueta.classList.remove("seleccionada", "correcta", "incorrecta");

      if (j === preguntas[i].correcta) {
        etiqueta.classList.add("correcta");
        if (radio.checked) aciertos++;
      } else if (radio.checked) {
        etiqueta.classList.add("incorrecta");
      }

      radio.disabled = true;
    });
  });

  formulario.classList.add("corregido");
  resultado.textContent = `Has acertado ${aciertos} de ${preguntas.length}`;
  guardarResultado(aciertos);
  botonCorregir.hidden = true;
  botonReiniciar.hidden = false;
  enlaceSiguiente.hidden = false;
}

// Guarda la mejor nota de este test en el navegador; si no se puede, el test funciona igual
function guardarResultado(aciertos) {
  try {
    const resultados = JSON.parse(localStorage.getItem("fisiologia-resultados")) || {};
    const anterior = resultados[test.id];
    if (!anterior || aciertos > anterior.aciertos) {
      resultados[test.id] = { aciertos, total: preguntas.length };
      localStorage.setItem("fisiologia-resultados", JSON.stringify(resultados));
    }
  } catch {
    // Sin almacenamiento disponible (modo privado, etc.)
  }
}

/* ---------- Volver a intentar ---------- */
function reiniciar() {
  formulario.reset();
  formulario.classList.remove("corregido");

  document.querySelectorAll(".opcion").forEach((etiqueta) => {
    etiqueta.classList.remove("seleccionada", "correcta", "incorrecta");
    etiqueta.querySelector("input").disabled = false;
  });

  resultado.textContent = "";
  botonCorregir.hidden = false;
  botonReiniciar.hidden = true;
  enlaceSiguiente.hidden = true;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ---------- Ventana de explicación ---------- */
function abrirExplicacion(texto) {
  ventanaTexto.textContent = texto;
  ventana.showModal();
}

botonCerrar.addEventListener("click", () => ventana.close());

// Cerrar al hacer clic fuera de la ventana
ventana.addEventListener("click", (evento) => {
  if (evento.target === ventana) ventana.close();
});

botonCorregir.addEventListener("click", corregir);
botonReiniciar.addEventListener("click", reiniciar);

pintarCabecera();
crearCuestionario();
