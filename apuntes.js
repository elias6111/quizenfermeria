// Sección de apuntes: asignaturas → temas → visor del PDF.
// La vista depende del hash de la URL:  ""  ·  "#bioquimica"  ·  "#bioquimica/tema-04"
const vista = document.getElementById("vista");
const migas = document.getElementById("migas");

const iconoCarpeta =
  '<svg class="carpeta" viewBox="0 0 64 52" aria-hidden="true">' +
  '<path d="M4 10a6 6 0 0 1 6-6h14l6 7h24a6 6 0 0 1 6 6v27a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6V10z" /></svg>';

const iconoDescarga =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19h14" /></svg>';

const iconoOjo =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />' +
  '<circle cx="12" cy="12" r="3" /></svg>';

function rutaPdf(asignatura, archivo) {
  return `apuntes/pdf/${asignatura.id}/${archivo}.pdf`;
}

function nombreDescarga(asignatura, tema) {
  return `${asignatura.nombre} - Tema ${tema.numero} - ${tema.titulo}.pdf`;
}

function buscarTema(asignatura, archivo) {
  return asignatura.bloques.flatMap((bloque) => bloque.temas).find((tema) => tema.archivo === archivo);
}

/* ---------- Migas de pan ---------- */
function pintarMigas(enlaces) {
  migas.innerHTML = "";
  enlaces.forEach(([texto, href], i) => {
    if (i > 0) {
      const separador = document.createElement("span");
      separador.className = "migas-separador";
      separador.textContent = "›";
      separador.setAttribute("aria-hidden", "true");
      migas.append(separador);
    }

    const elemento = document.createElement(href ? "a" : "span");
    elemento.textContent = texto;
    if (href) elemento.href = href;
    else elemento.setAttribute("aria-current", "page");
    migas.append(elemento);
  });
}

/* ---------- Vista 1: asignaturas ---------- */
function mostrarAsignaturas() {
  pintarMigas([["Inicio", "index.html"], ["Apuntes"]]);
  document.title = "Apuntes · Quiz de enfermería";

  const lista = asignaturasApuntes
    .map((asignatura) => {
      const numTemas = asignatura.bloques.reduce((total, bloque) => total + bloque.temas.length, 0);
      return `
        <li>
          <a class="asignatura" href="#${asignatura.id}">
            ${iconoCarpeta}
            <span class="asignatura-texto">
              <span>${asignatura.nombre}</span>
              <small>${numTemas} temas · ${asignatura.descripcion}</small>
            </span>
          </a>
        </li>`;
    })
    .join("");

  vista.innerHTML = `
    <h1>Apuntes</h1>
    <p class="subtitulo">Elige una asignatura para ver sus temas</p>
    <ul class="lista">${lista}</ul>`;
}

/* ---------- Vista 2: temas de una asignatura ---------- */
function mostrarTemas(asignatura) {
  pintarMigas([["Inicio", "index.html"], ["Apuntes", "#"], [asignatura.nombre]]);
  document.title = `${asignatura.nombre} · Apuntes`;

  const bloques = asignatura.bloques
    .map((bloque) => {
      const tarjetas = bloque.temas
        .map(
          (tema) => `
          <li class="tema">
            <a class="tema-enlace" href="#${asignatura.id}/${tema.archivo}">
              <span class="tema-numero">${tema.numero}</span>
              <span class="tema-texto">
                <span class="tema-titulo">${tema.titulo}</span>
                <span class="tema-esencial">${tema.esencial}</span>
              </span>
            </a>
            <div class="tema-acciones">
              <a class="accion" href="#${asignatura.id}/${tema.archivo}">${iconoOjo}Ver</a>
              <a class="accion accion-llena" href="${rutaPdf(asignatura, tema.archivo)}"
                 download="${nombreDescarga(asignatura, tema)}">${iconoDescarga}PDF</a>
            </div>
          </li>`
        )
        .join("");

      return `
        <section class="bloque">
          <h2>${bloque.titulo}</h2>
          <ul class="temas">${tarjetas}</ul>
        </section>`;
    })
    .join("");

  vista.innerHTML = `
    <h1>${asignatura.nombre}</h1>
    <p class="subtitulo">Apuntes por temas, con lo más importante destacado</p>
    <a class="boton boton-descarga" href="${rutaPdf(asignatura, asignatura.completo)}"
       download="${asignatura.nombre} - Apuntes completos.pdf">${iconoDescarga}Descargar todos los temas</a>
    ${bloques}`;
}

/* ---------- Vista 3: visor de un tema ---------- */
function mostrarVisor(asignatura, tema) {
  pintarMigas([["Inicio", "index.html"], ["Apuntes", "#"], [asignatura.nombre, `#${asignatura.id}`], [`Tema ${tema.numero}`]]);
  document.title = `Tema ${tema.numero} · ${asignatura.nombre}`;

  const temas = asignatura.bloques.flatMap((bloque) => bloque.temas);
  const posicion = temas.indexOf(tema);
  const anterior = temas[posicion - 1];
  const siguiente = temas[posicion + 1];
  const pdf = rutaPdf(asignatura, tema.archivo);

  vista.innerHTML = `
    <header class="visor-cabecera">
      <span class="tema-numero tema-numero-grande">${tema.numero}</span>
      <div>
        <p class="visor-asignatura">${asignatura.nombre} · Tema ${tema.numero}</p>
        <h1 class="visor-titulo">${tema.titulo}</h1>
      </div>
    </header>

    <div class="visor-acciones">
      <a class="boton boton-descarga" href="${pdf}" download="${nombreDescarga(asignatura, tema)}">${iconoDescarga}Descargar PDF</a>
      <a class="boton-secundario-enlace" href="${pdf}" target="_blank" rel="noopener">Abrir en otra pestaña</a>
    </div>

    <div class="visor-marco">
      <iframe class="visor" src="${pdf}#view=FitH" title="Apuntes del tema ${tema.numero}: ${tema.titulo}"></iframe>
    </div>
    <p class="visor-aviso">¿No se ve la vista previa? En algunos móviles el navegador no muestra PDF dentro de la página:
      usa «Abrir en otra pestaña» o descárgalo.</p>

    <nav class="visor-navegacion" aria-label="Otros temas">
      ${anterior ? `<a href="#${asignatura.id}/${anterior.archivo}">‹ Tema ${anterior.numero}</a>` : "<span></span>"}
      ${siguiente ? `<a href="#${asignatura.id}/${siguiente.archivo}">Tema ${siguiente.numero} ›</a>` : "<span></span>"}
    </nav>`;
}

/* ---------- Enrutado por hash ---------- */
function mostrarVista() {
  const [idAsignatura, archivo] = location.hash.slice(1).split("/");
  const asignatura = asignaturasApuntes.find((a) => a.id === idAsignatura);
  const tema = asignatura && archivo ? buscarTema(asignatura, archivo) : null;

  if (tema) mostrarVisor(asignatura, tema);
  else if (asignatura) mostrarTemas(asignatura);
  else mostrarAsignaturas();

  window.scrollTo(0, 0);
}

window.addEventListener("hashchange", mostrarVista);
mostrarVista();
