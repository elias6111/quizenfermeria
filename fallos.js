// Mis fallos: preguntas falladas agrupadas por asignatura y tema.
// Cada tema enlaza a test.html?fallos=<asignatura>&tema=<tema>; también se pueden repasar todos los de una asignatura.
const contenedor = document.getElementById("fallos");

function pintarFallos() {
  const grupos = fallosAgrupados();
  contenedor.replaceChildren();

  const asignaturas = asignaturasApuntes.filter((a) => grupos[a.id]);
  if (!asignaturas.length) {
    const vacio = document.createElement("p");
    vacio.className = "fallos-vacio";
    vacio.innerHTML = 'No tienes fallos guardados. ¡Haz algún test y aquí aparecerán las preguntas que falles! <br><a class="enlace-apuntes" href="asignaturas.html">Ir a los tests</a>';
    contenedor.append(vacio);
    return;
  }

  asignaturas.forEach((asignatura) => {
    const porTema = grupos[asignatura.id];
    const temas = Object.keys(porTema).sort((a, b) => ordenTema(asignatura.id, a) - ordenTema(asignatura.id, b));
    const total = temas.reduce((suma, t) => suma + porTema[t].length, 0);

    const seccion = document.createElement("section");
    seccion.className = "bloque";
    seccion.innerHTML = `
      <div class="fallos-cabecera-asignatura">
        <h2></h2>
        <a class="boton boton-descarga" href="test.html?fallos=${asignatura.id}">Repasar los ${total}</a>
      </div>
      <ul class="temas"></ul>`;
    seccion.querySelector("h2").textContent = `${asignatura.nombre} · ${total} ${total === 1 ? "fallo" : "fallos"}`;

    const lista = seccion.querySelector(".temas");
    temas.forEach((archivo) => {
      const tema = buscarTemaApuntes(asignatura.id, archivo);
      const cuantos = porTema[archivo].length;
      const enlaceTest = `test.html?fallos=${asignatura.id}&tema=${encodeURIComponent(archivo)}`;
      const elemento = document.createElement("li");
      elemento.className = "tema fallos-tema";
      elemento.innerHTML = `
        <a class="tema-enlace" href="${enlaceTest}">
          <span class="tema-numero fallos-contador">${cuantos}</span>
          <span class="tema-texto">
            <span class="tema-titulo"></span>
            <span class="tema-esencial">${cuantos} ${cuantos === 1 ? "pregunta fallada" : "preguntas falladas"}</span>
          </span>
        </a>
        <div class="tema-acciones">
          <a class="accion accion-llena" href="${enlaceTest}">Repasar</a>
          ${tema ? `<a class="accion" href="apuntes.html#${asignatura.id}/${archivo}">Apuntes</a>` : ""}
          <button type="button" class="enlace-boton">Borrar</button>
        </div>`;
      elemento.querySelector(".tema-titulo").textContent = tema ? `Tema ${tema.numero} · ${tema.titulo}` : "Otros";
      elemento.querySelector("button").addEventListener("click", () => {
        borrarFallos(asignatura.id, archivo);
        pintarFallos();
      });
      lista.append(elemento);
    });

    contenedor.append(seccion);
  });
}

pintarFallos();
