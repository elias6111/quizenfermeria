// Preguntas del cuestionario de prueba.
// "correcta" es la posición de la respuesta correcta (0 = primera opción).
const preguntas = [
  {
    texto: "¿Cuál es el rango normal de la frecuencia cardíaca en un adulto en reposo?",
    opciones: ["30-50 lpm", "60-100 lpm", "100-140 lpm", "120-160 lpm"],
    correcta: 1,
    explicacion:
      "En un adulto sano en reposo, la frecuencia cardíaca normal está entre 60 y 100 latidos por minuto. Por debajo de 60 hablamos de bradicardia y por encima de 100, de taquicardia."
  },
  {
    texto: "¿Qué parámetro se mide con un pulsioxímetro?",
    opciones: [
      "La presión arterial",
      "La temperatura corporal",
      "La saturación de oxígeno",
      "La glucosa en sangre"
    ],
    correcta: 2,
    explicacion:
      "El pulsioxímetro mide de forma no invasiva el porcentaje de hemoglobina saturada de oxígeno (SpO₂) y también la frecuencia del pulso. Un valor normal suele ser igual o superior al 95 %."
  },
  {
    texto: "¿Cuál es el primer paso antes de realizar un procedimiento a un paciente?",
    opciones: [
      "La higiene de manos",
      "Registrar el procedimiento",
      "Retirar el material usado",
      "Avisar al siguiente paciente"
    ],
    correcta: 0,
    explicacion:
      "La higiene de manos es la medida más eficaz para prevenir infecciones asociadas a la atención sanitaria. Se realiza antes de tocar al paciente y antes de cualquier procedimiento."
  }
];

const formulario = document.getElementById("cuestionario");
const resultado = document.getElementById("resultado");
const botonCorregir = document.getElementById("corregir");
const botonReiniciar = document.getElementById("reiniciar");
const ventana = document.getElementById("ventana");
const ventanaTexto = document.getElementById("ventana-texto");
const botonCerrar = document.getElementById("cerrar");

/* ---------- Construir el cuestionario ---------- */
function crearCuestionario() {
  preguntas.forEach((p, i) => {
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
    formulario.append(tarjeta);
  });
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
  botonCorregir.hidden = true;
  botonReiniciar.hidden = false;
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

crearCuestionario();