// Página de test común (test.html). Lo que se carga depende de la URL:
//   test.html?banco=bioquimica3                         → un cuestionario de Bioquímica completo
//   test.html?test=t07                                  → un test corto (Fisiología o Fisiología · Parcial 2)
//   test.html?medida=bioquimica&temas=tema-01,tema-02&n=20 → test a medida (a-medida.html)
//   test.html?fallos=bioquimica[&tema=tema-12]          → repaso de fallos (fallos.html)
// Las preguntas y las opciones se barajan cada vez. Hay dos modos:
//   · Práctica: cada pregunta se corrige al contestarla y se ve la explicación.
//   · Examen: se corrige todo al final, con cronómetro y, si se quiere, tiempo límite.

const formulario = document.getElementById("cuestionario");
const resultado = document.getElementById("resultado");
const resumen = document.getElementById("resumen");
const aviso = document.getElementById("aviso");
const botonCorregir = document.getElementById("corregir");
const botonReiniciar = document.getElementById("reiniciar");
const enlaceSiguiente = document.getElementById("siguiente");
const enlaceOtro = document.getElementById("otro");
const barraEstado = document.getElementById("estado");
const textoProgreso = document.getElementById("progreso");
const textoReloj = document.getElementById("reloj");
const botonesModo = document.querySelectorAll("[data-modo]");
const ayudaModo = document.getElementById("modo-ayuda");
const opcionLimite = document.getElementById("opcion-limite");
const casillaLimite = document.getElementById("limite");
const ventana = document.getElementById("ventana");
const ventanaTexto = document.getElementById("ventana-texto");
const ventanaApuntes = document.getElementById("ventana-apuntes");
const botonCerrar = document.getElementById("cerrar");

const SEGUNDOS_POR_PREGUNTA = 60;

/* ==========================================================================
   Configuración según la URL
   ========================================================================== */
function leerConfiguracion() {
  const q = new URLSearchParams(location.search);
  const inicio = { texto: "Inicio", href: "index.html" };

  if (q.has("banco")) {
    const banco = bancosBioquimica.find((b) => b.id === q.get("banco"));
    if (!banco) return null;
    return {
      etiqueta: "Bioquímica",
      titulo: banco.titulo,
      migas: [inicio, { texto: "Asignaturas", href: "asignaturas.html" }, { texto: banco.titulo }],
      obtenerPartes: () =>
        banco.partes.map((parte) => ({
          titulo: parte.titulo,
          preguntas: parte.preguntas.map((p) => prepararPregunta(p, banco.asignatura))
        })),
      mostrarTema: true
    };
  }

  if (q.has("medida")) {
    const asignatura = q.get("medida");
    const temas = q.get("temas") ? q.get("temas").split(",") : null;
    const cantidad = Number(q.get("n")) || 0;
    const nombre = buscarAsignatura(asignatura)?.nombre || asignatura;
    const preguntas = elegirPreguntas(preguntasDe(asignatura, temas), cantidad);
    return {
      etiqueta: `Test a medida · ${nombre}`,
      titulo: `${preguntas.length} preguntas`,
      migas: [inicio, { texto: "Test a medida", href: "a-medida.html" }, { texto: nombre }],
      obtenerPartes: () => [{ titulo: "", preguntas }],
      mostrarTema: true,
      otro: { href: location.href, texto: "Otras preguntas" },
      vacio: "No hay preguntas para los temas elegidos."
    };
  }

  if (q.has("fallos")) {
    const asignatura = q.get("fallos");
    const tema = q.get("tema");
    const nombre = buscarAsignatura(asignatura)?.nombre || asignatura;
    return {
      etiqueta: `Mis fallos · ${nombre}`,
      titulo: tema ? nombreTema(asignatura, tema) : "Todos los temas",
      subtitulo: "Cada pregunta sale de tu lista en cuanto la aciertas.",
      migas: [inicio, { texto: "Mis fallos", href: "fallos.html" }, { texto: nombre }],
      // Se vuelve a leer al reiniciar: las preguntas acertadas ya no salen
      obtenerPartes: () => {
        const porTema = fallosAgrupados()[asignatura] || {};
        const temas = Object.keys(porTema)
          .filter((t) => !tema || t === tema)
          .sort((a, b) => ordenTema(asignatura, a) - ordenTema(asignatura, b));
        return temas.map((t) => ({ titulo: tema ? "" : nombreTema(asignatura, t), preguntas: porTema[t] }));
      },
      otro: { href: "fallos.html", texto: "Volver a mis fallos" },
      vacio: "¡No te queda ningún fallo aquí! 🎉"
    };
  }

  // Tests cortos (también es lo que se abre por defecto)
  const posicion = Math.max(0, testsCortos.findIndex((t) => t.id === q.get("test")));
  const test = testsCortos[posicion];
  const { coleccion } = test;
  const siguienteTest = testsCortos[posicion + 1]?.coleccion === coleccion ? testsCortos[posicion + 1] : null;
  const etiqueta =
    test.etiqueta || (test.numero === "R" ? "Repaso" : test.numero === "E" ? "Examen" : `Tema ${test.numero}`);
  return {
    etiqueta: `${test.bloque} · ${etiqueta}`,
    titulo: test.titulo,
    tituloPestana: `${etiqueta} · ${test.titulo} · ${coleccion.nombre}`,
    migas: [inicio, { texto: coleccion.nombre, href: coleccion.pagina }, { texto: etiqueta }],
    obtenerPartes: () => [
      { titulo: "", preguntas: test.preguntas.map((p) => prepararPregunta(p, coleccion.asignatura, test.tema)) }
    ],
    // En los repasos y exámenes cada pregunta lleva su tema, así que se enseña
    mostrarTema: !test.tema,
    claveResultado: { clave: coleccion.claveResultados, id: test.id },
    siguiente: siguienteTest
      ? { href: `test.html?test=${siguienteTest.id}`, texto: "Siguiente test ›" }
      : { href: coleccion.pagina, texto: "Volver a los tests" }
  };
}

// Reparte la cantidad pedida entre los temas (por turnos) para que salgan todos
function elegirPreguntas(conjunto, cantidad) {
  const porTema = {};
  conjunto.forEach((p) => (porTema[p.tema] ??= []).push(p));
  const colas = barajar(Object.values(porTema).map((lista) => barajar(lista)));
  const limite = cantidad > 0 ? Math.min(cantidad, conjunto.length) : conjunto.length;
  const elegidas = [];
  while (elegidas.length < limite) {
    for (const cola of colas) {
      if (cola.length && elegidas.length < limite) elegidas.push(cola.pop());
    }
  }
  return elegidas;
}

/* ==========================================================================
   Estado
   ========================================================================== */
const config = leerConfiguracion();
let modo = leerPreferencia("quiz-modo", "examen");
let items = []; // { p, tarjeta, numero, respondida, elegida, acertada }
let terminado = false;
let inicio = 0;
let intervalo = null;
let cambiosFallos = { anadidos: 0, quitados: 0 };

function leerPreferencia(clave, porDefecto) {
  try {
    return localStorage.getItem(clave) || porDefecto;
  } catch {
    return porDefecto;
  }
}

function guardarPreferencia(clave, valor) {
  try {
    localStorage.setItem(clave, valor);
  } catch {
    // Sin almacenamiento disponible
  }
}

const esTipoTest = (item) => item.p.tipo !== "desarrollo";

/* ==========================================================================
   Cabecera
   ========================================================================== */
function pintarCabecera() {
  document.title = config.tituloPestana || `${config.titulo} · ${config.etiqueta}`;
  document.getElementById("test-bloque").textContent = config.etiqueta;
  document.getElementById("test-titulo").textContent = config.titulo;
  const subtitulo = document.getElementById("test-subtitulo");
  subtitulo.textContent = config.subtitulo || "";
  subtitulo.hidden = !config.subtitulo;

  const migas = document.getElementById("migas");
  config.migas.forEach((miga, i) => {
    if (i > 0) {
      const separador = document.createElement("span");
      separador.className = "migas-separador";
      separador.setAttribute("aria-hidden", "true");
      separador.textContent = "›";
      migas.append(separador);
    }
    const elemento = document.createElement(miga.href ? "a" : "span");
    elemento.textContent = miga.texto;
    if (miga.href) elemento.href = miga.href;
    else elemento.setAttribute("aria-current", "page");
    migas.append(elemento);
  });

  if (config.siguiente) {
    enlaceSiguiente.href = config.siguiente.href;
    enlaceSiguiente.textContent = config.siguiente.texto;
  }
  if (config.otro) {
    enlaceOtro.href = config.otro.href;
    enlaceOtro.textContent = config.otro.texto;
  }
}

/* ==========================================================================
   Construir el cuestionario
   ========================================================================== */
function crearCuestionario() {
  formulario.replaceChildren();
  items = [];
  terminado = false;
  cambiosFallos = { anadidos: 0, quitados: 0 };

  const partes = config.obtenerPartes().filter((parte) => parte.preguntas.length);
  const total = partes.reduce((suma, parte) => suma + parte.preguntas.length, 0);

  if (!total) {
    aviso.textContent = config.vacio || "No hay preguntas.";
    aviso.hidden = false;
    document.querySelector(".barra-modo").hidden = true;
    barraEstado.hidden = true;
    botonCorregir.hidden = true;
    if (config.otro) enlaceOtro.hidden = false;
    return false;
  }

  partes.forEach((parte) => {
    if (parte.titulo) {
      const titulo = document.createElement("h2");
      titulo.className = "parte-titulo";
      titulo.textContent = parte.titulo;
      formulario.append(titulo);
    }
    barajar(parte.preguntas).forEach((p) => {
      const item = { p, numero: items.length + 1, respondida: false, elegida: null, acertada: false };
      item.tarjeta = crearPregunta(item, total);
      items.push(item);
      formulario.append(item.tarjeta);
    });
  });
  return true;
}

// Las opciones se barajan salvo cuando son etiquetas de un esquema ("A", "B"…) o valores muy cortos
// No se barajan las opciones de letras sueltas, las muy cortas ni las que dependen del orden ("todas las anteriores")
function mantenerOrden(p) {
  return (
    p.ordenFijo ||
    p.opciones.some((o) => /^[A-Z]$/.test(o.trim()) || /anteriores/i.test(o)) ||
    p.opciones.every((o) => o.length <= 4)
  );
}

function crearPregunta(item, total) {
  const { p } = item;
  const tarjeta = document.createElement("article");
  tarjeta.className = "pregunta";
  tarjeta.id = `pregunta-${item.numero}`;

  const cabecera = document.createElement("div");
  cabecera.className = "pregunta-cabecera";

  const numero = document.createElement("span");
  numero.className = "pregunta-numero";
  numero.textContent = `Pregunta ${item.numero} de ${total}`;
  cabecera.append(numero);

  if (config.mostrarTema && p.tema) {
    const chip = document.createElement("span");
    chip.className = "pregunta-tema";
    const tema = buscarTemaApuntes(p.asignatura, p.tema);
    chip.textContent = tema ? `Tema ${tema.numero}` : "";
    chip.title = nombreTema(p.asignatura, p.tema);
    if (tema) numero.after(chip);
  }

  // En examen, la explicación solo se puede abrir después de corregir
  if (p.explicacion && p.tipo !== "desarrollo") {
    const botonExplicacion = document.createElement("button");
    botonExplicacion.type = "button";
    botonExplicacion.className = "boton-explicacion";
    botonExplicacion.textContent = "Explicación";
    botonExplicacion.hidden = true;
    botonExplicacion.addEventListener("click", () => abrirExplicacion(p));
    cabecera.append(botonExplicacion);
  }

  const texto = document.createElement("p");
  texto.className = "pregunta-texto";
  texto.textContent = p.texto;
  tarjeta.append(cabecera, texto);

  if (p.imagen) {
    const imagen = document.createElement("img");
    imagen.className = "pregunta-imagen";
    imagen.src = p.imagen.src;
    imagen.alt = p.imagen.alt;
    imagen.loading = "lazy";
    tarjeta.append(imagen);
  }

  tarjeta.append(p.tipo === "desarrollo" ? crearDesarrollo(item) : crearOpciones(item));
  return tarjeta;
}

/* ---------- Pregunta tipo test ---------- */
function crearOpciones(item) {
  const { p } = item;
  const grupo = document.createElement("fieldset");
  grupo.className = "opciones";

  const indices = p.opciones.map((_, j) => j);
  const orden = mantenerOrden(p) ? indices : barajar(indices);

  orden.forEach((j) => {
    const etiqueta = document.createElement("label");
    etiqueta.className = "opcion";
    etiqueta.dataset.indice = j;

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = `pregunta-${item.numero}`;
    radio.value = j;
    radio.addEventListener("change", () => elegirOpcion(item, j));

    const marca = document.createElement("span");
    marca.className = "marca";
    marca.setAttribute("aria-hidden", "true");

    const contenido = document.createElement("span");
    contenido.textContent = p.opciones[j];

    etiqueta.append(radio, marca, contenido);
    grupo.append(etiqueta);
  });

  return grupo;
}

/* ---------- Pregunta de desarrollo (texto libre + autocorrección) ---------- */
function crearDesarrollo(item) {
  const { p } = item;
  const envoltorio = document.createElement("div");
  envoltorio.className = "desarrollo";

  const area = document.createElement("textarea");
  area.className = "desarrollo-texto";
  area.rows = 6;
  area.placeholder = "Escribe aquí tu respuesta…";
  envoltorio.append(area);

  // En práctica, cada pregunta de desarrollo se corrige con su propio botón
  const botonVer = document.createElement("button");
  botonVer.type = "button";
  botonVer.className = "boton-explicacion boton-ver-respuesta";
  botonVer.textContent = "Ver respuesta modelo";
  botonVer.hidden = modo !== "practica";
  botonVer.addEventListener("click", () => {
    corregirDesarrollo(item);
    actualizarEstado();
    comprobarFinPractica();
  });
  envoltorio.append(botonVer);

  const correccion = document.createElement("div");
  correccion.className = "correccion";
  correccion.hidden = true;

  const tituloModelo = document.createElement("h3");
  tituloModelo.className = "correccion-titulo";
  tituloModelo.textContent = "Respuesta modelo";
  const modelo = document.createElement("p");
  modelo.className = "correccion-modelo";
  modelo.textContent = p.respuestaModelo || "";
  correccion.append(tituloModelo, modelo);

  if (p.puntosClave && p.puntosClave.length) {
    const tituloPuntos = document.createElement("h3");
    tituloPuntos.className = "correccion-titulo";
    tituloPuntos.textContent = "Marca lo que hayas incluido:";
    correccion.append(tituloPuntos);

    const lista = document.createElement("ul");
    lista.className = "checklist";
    p.puntosClave.forEach((punto) => {
      const elemento = document.createElement("li");
      const etiqueta = document.createElement("label");
      etiqueta.className = "checklist-item";

      const check = document.createElement("input");
      check.type = "checkbox";
      check.className = "checklist-check";
      check.addEventListener("change", recalcular);

      const contenido = document.createElement("span");
      contenido.textContent = punto;

      etiqueta.append(check, contenido);
      elemento.append(etiqueta);
      lista.append(elemento);
    });
    correccion.append(lista);
  }

  const enlace = crearEnlaceApuntes(p);
  if (enlace) correccion.append(enlace);

  envoltorio.append(correccion);
  return envoltorio;
}

function crearEnlaceApuntes(p) {
  const href = enlaceApuntes(p.asignatura, p.tema);
  if (!href) return null;
  const enlace = document.createElement("a");
  enlace.className = "enlace-apuntes";
  enlace.href = href;
  enlace.target = "_blank";
  enlace.rel = "noopener";
  enlace.textContent = `Ver en apuntes · ${nombreTema(p.asignatura, p.tema)}`;
  return enlace;
}

/* ==========================================================================
   Responder y corregir
   ========================================================================== */
function elegirOpcion(item, j) {
  item.elegida = j;
  item.respondida = true;
  marcarSeleccion(item);

  if (modo === "practica") {
    corregirPregunta(item);
    comprobarFinPractica();
  }
  actualizarEstado();
}

// Selección (azul) mientras no se corrige
function marcarSeleccion(item) {
  item.tarjeta.querySelectorAll(".opcion").forEach((etiqueta) => {
    etiqueta.classList.toggle("seleccionada", etiqueta.querySelector("input").checked);
  });
}

// Corrección de una pregunta tipo test (verde / rojo) y registro en los fallos
function corregirPregunta(item) {
  const { p, tarjeta } = item;
  if (tarjeta.classList.contains("corregida")) return;
  tarjeta.classList.add("corregida");

  item.acertada = item.respondida && item.elegida === p.correcta;
  tarjeta.querySelectorAll(".opcion").forEach((etiqueta) => {
    const indice = Number(etiqueta.dataset.indice);
    const radio = etiqueta.querySelector("input");
    etiqueta.classList.remove("seleccionada", "correcta", "incorrecta");
    if (indice === p.correcta) etiqueta.classList.add("correcta");
    else if (radio.checked) etiqueta.classList.add("incorrecta");
    radio.disabled = true;
  });

  // Las preguntas sin contestar no cuentan como fallo guardado
  if (item.respondida) {
    const estaba = Boolean(leerFallos()[p.id]);
    const salio = registrarRespuesta(p, item.acertada);
    if (salio) cambiosFallos.quitados++;
    if (!item.acertada && !estaba) cambiosFallos.anadidos++;
  }

  if (modo === "practica") {
    tarjeta.append(crearExplicacionEnLinea(item));
  } else {
    const boton = tarjeta.querySelector(".boton-explicacion");
    if (boton) boton.hidden = false;
  }
}

function crearExplicacionEnLinea(item) {
  const { p } = item;
  const caja = document.createElement("div");
  caja.className = `explicacion-linea ${item.acertada ? "es-acierto" : "es-fallo"}`;

  const titulo = document.createElement("p");
  titulo.className = "explicacion-veredicto";
  const correcta = p.opciones[p.correcta];
  if (item.acertada) titulo.textContent = "¡Correcto!";
  else if (item.respondida) titulo.textContent = `Incorrecto. La respuesta es: ${correcta}`;
  else titulo.textContent = `Sin contestar. La respuesta es: ${correcta}`;
  caja.append(titulo);

  if (p.explicacion) {
    const texto = document.createElement("p");
    texto.textContent = p.explicacion;
    caja.append(texto);
  }

  const enlace = crearEnlaceApuntes(p);
  if (enlace) caja.append(enlace);
  return caja;
}

function corregirDesarrollo(item) {
  const area = item.tarjeta.querySelector(".desarrollo-texto");
  area.readOnly = true;
  item.tarjeta.querySelector(".correccion").hidden = false;
  item.tarjeta.querySelector(".boton-ver-respuesta").hidden = true;
  item.respondida = true;
  item.tarjeta.classList.add("corregida");
}

// En práctica, al responder la última pregunta se muestra el resumen
function comprobarFinPractica() {
  if (items.every((item) => item.tarjeta.classList.contains("corregida"))) terminar();
}

function terminar(porTiempo = false) {
  if (terminado) return;
  terminado = true;
  pararReloj();

  items.forEach((item) => (esTipoTest(item) ? corregirPregunta(item) : corregirDesarrollo(item)));

  formulario.classList.add("corregido");
  botonCorregir.hidden = true;
  botonReiniciar.hidden = false;
  if (config.siguiente) enlaceSiguiente.hidden = false;
  if (config.otro) enlaceOtro.hidden = false;
  recalcular();
  pintarResumen(porTiempo);
  actualizarEstado();
  resultado.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Nota total: las preguntas tipo test valen 1 punto; las de desarrollo, un punto por cada punto clave marcado
function recalcular() {
  let aciertos = 0;
  let total = 0;

  items.forEach((item) => {
    if (esTipoTest(item)) {
      total += 1;
      if (item.acertada) aciertos++;
    } else {
      const checks = item.tarjeta.querySelectorAll(".checklist-check");
      total += checks.length;
      checks.forEach((c) => {
        if (c.checked) aciertos++;
      });
    }
  });

  const porcentaje = total ? Math.round((aciertos / total) * 100) : 0;
  resultado.textContent = `Has acertado ${aciertos} de ${total} (${porcentaje} %)`;
  guardarResultado(aciertos, total);
}

// Guarda la mejor nota del test (solo en los tests cortos, que la enseñan en el listado)
function guardarResultado(aciertos, total) {
  if (!config.claveResultado) return;
  try {
    const { clave, id } = config.claveResultado;
    const resultados = JSON.parse(localStorage.getItem(clave)) || {};
    const anterior = resultados[id];
    if (!anterior || aciertos > anterior.aciertos) {
      resultados[id] = { aciertos, total };
      localStorage.setItem(clave, JSON.stringify(resultados));
    }
  } catch {
    // Sin almacenamiento disponible
  }
}

/* ==========================================================================
   Resumen al terminar
   ========================================================================== */
function pintarResumen(porTiempo) {
  const deTest = items.filter(esTipoTest);
  resumen.replaceChildren();
  if (!deTest.length) {
    resumen.hidden = true;
    return;
  }

  const aciertos = deTest.filter((item) => item.acertada).length;
  const sinContestar = deTest.filter((item) => !item.respondida).length;
  const porcentaje = Math.round((aciertos / deTest.length) * 100);

  /* Cifras principales */
  const cifras = document.createElement("div");
  cifras.className = "resumen-cifras";
  cifras.innerHTML = `
    <div class="resumen-nota ${porcentaje >= 50 ? "aprobado" : "suspenso"}" style="--porcentaje: ${porcentaje}">
      <span>${porcentaje}<small>%</small></span>
    </div>
    <ul class="resumen-datos">
      <li><strong>${aciertos}</strong> aciertos</li>
      <li><strong>${deTest.length - aciertos - sinContestar}</strong> fallos</li>
      <li><strong>${sinContestar}</strong> sin contestar</li>
      ${modo === "examen" ? `<li><strong>${formatearTiempo(segundosTranscurridos())}</strong> de tiempo</li>` : ""}
    </ul>`;
  resumen.append(cifras);

  if (porTiempo) resumen.append(crearParrafo("resumen-aviso", "⏰ Se acabó el tiempo: se ha corregido lo que llevabas."));

  /* Cambios en la lista de fallos */
  const mensajes = [];
  if (cambiosFallos.anadidos) mensajes.push(`${cambiosFallos.anadidos} ${cambiosFallos.anadidos === 1 ? "pregunta nueva va" : "preguntas nuevas van"} a tus fallos`);
  if (cambiosFallos.quitados) mensajes.push(`${cambiosFallos.quitados} ${cambiosFallos.quitados === 1 ? "sale" : "salen"} de tus fallos por acertarlas`);
  if (mensajes.length) {
    const p = crearParrafo("resumen-fallos", `${mensajes.join(" · ")}. `);
    const enlace = document.createElement("a");
    enlace.href = "fallos.html";
    enlace.textContent = "Ver mis fallos";
    p.append(enlace);
    resumen.append(p);
  }

  /* Aciertos por tema */
  const porTema = new Map();
  deTest.forEach((item) => {
    const clave = `${item.p.asignatura}|${item.p.tema}`;
    if (!porTema.has(clave)) porTema.set(clave, { asignatura: item.p.asignatura, tema: item.p.tema, aciertos: 0, total: 0 });
    const fila = porTema.get(clave);
    fila.total++;
    if (item.acertada) fila.aciertos++;
  });

  if (porTema.size > 1) {
    resumen.append(crearTitulo("Por tema"));
    const lista = document.createElement("ul");
    lista.className = "resumen-temas";
    [...porTema.values()]
      .sort((a, b) => ordenTema(a.asignatura, a.tema) - ordenTema(b.asignatura, b.tema))
      .forEach((fila) => {
        const pct = Math.round((fila.aciertos / fila.total) * 100);
        const href = enlaceApuntes(fila.asignatura, fila.tema);
        const elemento = document.createElement("li");
        elemento.className = "resumen-tema";
        elemento.innerHTML = `
          <span class="resumen-tema-nombre"></span>
          <span class="resumen-tema-cifra">${fila.aciertos}/${fila.total}</span>
          <span class="resumen-barra" aria-hidden="true"><span style="width: ${pct}%" class="${pct >= 50 ? "aprobado" : "suspenso"}"></span></span>`;
        elemento.querySelector(".resumen-tema-nombre").textContent = nombreTema(fila.asignatura, fila.tema);
        if (href) {
          const enlace = document.createElement("a");
          enlace.href = href;
          enlace.target = "_blank";
          enlace.rel = "noopener";
          enlace.className = "resumen-tema-apuntes";
          enlace.textContent = "Apuntes";
          elemento.append(enlace);
        }
        lista.append(elemento);
      });
    resumen.append(lista);
  }

  /* Preguntas falladas o sin contestar, con su explicación ya abierta */
  const falladas = deTest.filter((item) => !item.acertada);
  resumen.append(crearTitulo(falladas.length ? `Para repasar (${falladas.length})` : "Para repasar"));
  if (!falladas.length) {
    resumen.append(crearParrafo("resumen-perfecto", "¡No has fallado ninguna! 🎉"));
  } else {
    const lista = document.createElement("ol");
    lista.className = "resumen-falladas";
    falladas.forEach((item) => lista.append(crearFallada(item)));
    resumen.append(lista);
  }

  resumen.hidden = false;
}

function crearFallada(item) {
  const { p } = item;
  const elemento = document.createElement("li");
  elemento.className = "fallada";

  const enlacePregunta = document.createElement("a");
  enlacePregunta.className = "fallada-texto";
  enlacePregunta.href = `#pregunta-${item.numero}`;
  enlacePregunta.textContent = `${item.numero}. ${p.texto}`;
  elemento.append(enlacePregunta);

  const tuya = crearParrafo(
    "fallada-tuya",
    item.respondida ? `Tu respuesta: ${p.opciones[item.elegida]}` : "Sin contestar"
  );
  const buena = crearParrafo("fallada-buena", `Correcta: ${p.opciones[p.correcta]}`);
  elemento.append(tuya, buena);

  if (p.explicacion) elemento.append(crearParrafo("fallada-explicacion", p.explicacion));
  const enlace = crearEnlaceApuntes(p);
  if (enlace) elemento.append(enlace);
  return elemento;
}

function crearParrafo(clase, texto) {
  const p = document.createElement("p");
  p.className = clase;
  p.textContent = texto;
  return p;
}

function crearTitulo(texto) {
  const h = document.createElement("h2");
  h.className = "resumen-titulo";
  h.textContent = texto;
  return h;
}

/* ==========================================================================
   Barra de estado: progreso y cronómetro
   ========================================================================== */
function actualizarEstado() {
  const respondidas = items.filter((item) => item.respondida).length;
  let texto = `Respondidas ${respondidas}/${items.length}`;
  if (modo === "practica") {
    const aciertos = items.filter((item) => esTipoTest(item) && item.acertada).length;
    texto += ` · Aciertos ${aciertos}`;
  }
  textoProgreso.textContent = texto;
}

function segundosTranscurridos() {
  return Math.floor((Date.now() - inicio) / 1000);
}

function formatearTiempo(segundos) {
  const m = Math.floor(segundos / 60);
  const s = segundos % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function limiteActivo() {
  return modo === "examen" && casillaLimite.checked;
}

function arrancarReloj() {
  pararReloj();
  inicio = Date.now();
  textoReloj.hidden = modo !== "examen";
  textoReloj.classList.remove("reloj-apurado");
  if (modo !== "examen") return;
  pintarReloj();
  intervalo = setInterval(pintarReloj, 1000);
}

function pintarReloj() {
  const pasados = segundosTranscurridos();
  if (limiteActivo()) {
    const restantes = Math.max(0, items.length * SEGUNDOS_POR_PREGUNTA - pasados);
    textoReloj.textContent = `⏱ Quedan ${formatearTiempo(restantes)}`;
    textoReloj.classList.toggle("reloj-apurado", restantes <= 60);
    if (restantes === 0) terminar(true);
  } else {
    textoReloj.textContent = `⏱ ${formatearTiempo(pasados)}`;
  }
}

function pararReloj() {
  clearInterval(intervalo);
  intervalo = null;
}

/* ==========================================================================
   Modo práctica / examen
   ========================================================================== */
function pintarModo() {
  botonesModo.forEach((boton) => boton.setAttribute("aria-pressed", String(boton.dataset.modo === modo)));
  ayudaModo.textContent =
    modo === "practica"
      ? "Cada pregunta se corrige al contestarla y ves la explicación al momento."
      : "Contestas todo y se corrige al final, con cronómetro.";
  opcionLimite.hidden = modo !== "examen";
  botonCorregir.textContent = modo === "practica" ? "Terminar" : "Corregir";
}

function cambiarModo(nuevo) {
  if (nuevo === modo) return;
  modo = nuevo;
  guardarPreferencia("quiz-modo", modo);
  reiniciar();
}

/* ==========================================================================
   Empezar / volver a intentar
   ========================================================================== */
function empezar() {
  pintarModo();
  resultado.textContent = "";
  resumen.hidden = true;
  resumen.replaceChildren();
  formulario.classList.remove("corregido");
  botonCorregir.hidden = false;
  botonReiniciar.hidden = true;
  enlaceSiguiente.hidden = true;
  enlaceOtro.hidden = true;
  if (!crearCuestionario()) return;
  actualizarEstado();
  arrancarReloj();
}

function reiniciar() {
  empezar();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ---------- Ventana de explicación ---------- */
function abrirExplicacion(p) {
  ventanaTexto.textContent = p.explicacion;
  const href = enlaceApuntes(p.asignatura, p.tema);
  ventanaApuntes.hidden = !href;
  if (href) {
    ventanaApuntes.href = href;
    ventanaApuntes.textContent = `Ver en apuntes · ${nombreTema(p.asignatura, p.tema)}`;
  }
  ventana.showModal();
}

botonCerrar.addEventListener("click", () => ventana.close());
ventana.addEventListener("click", (evento) => {
  if (evento.target === ventana) ventana.close();
});

botonesModo.forEach((boton) => boton.addEventListener("click", () => cambiarModo(boton.dataset.modo)));
casillaLimite.checked = leerPreferencia("quiz-limite", "no") === "si";
casillaLimite.addEventListener("change", () => {
  guardarPreferencia("quiz-limite", casillaLimite.checked ? "si" : "no");
  if (!terminado) arrancarReloj();
});
botonCorregir.addEventListener("click", () => terminar());
botonReiniciar.addEventListener("click", reiniciar);

if (config) {
  pintarCabecera();
  empezar();
} else {
  aviso.textContent = "No se ha encontrado este test.";
  aviso.hidden = false;
  document.querySelector(".barra-modo").hidden = true;
  barraEstado.hidden = true;
  botonCorregir.hidden = true;
}
