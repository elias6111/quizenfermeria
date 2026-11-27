// Datos comunes a todos los tests: junta las preguntas de todos los cuestionarios,
// les da un identificador estable y guarda los fallos en este navegador.
// Necesita cargados antes: apuntes-datos.js, bioquimica*.js, los datos de los tests cortos y colecciones.js.

const bancosBioquimica = [bancoBioquimica1, bancoBioquimica2, bancoBioquimica3];

/* ---------- Identificador de cada pregunta ---------- */
// Se calcula a partir del texto, así no cambia aunque se reordenen las preguntas.
function idPregunta(asignatura, texto) {
  let h = 2166136261;
  const cadena = `${asignatura}|${texto}`;
  for (let i = 0; i < cadena.length; i++) {
    h ^= cadena.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0).toString(36);
}

// Copia la pregunta añadiéndole asignatura, tema e id
function prepararPregunta(p, asignatura, temaPorDefecto) {
  return { ...p, asignatura, tema: p.tema || temaPorDefecto || "", id: idPregunta(asignatura, p.texto) };
}

/* ---------- Todas las preguntas tipo test (sin repetir) ---------- */
const todasLasPreguntas = (() => {
  const vistas = new Map();
  const anadir = (p) => {
    if (p.tipo !== "desarrollo" && !vistas.has(p.id)) vistas.set(p.id, p);
  };
  bancosBioquimica.forEach((banco) =>
    banco.partes.forEach((parte) => parte.preguntas.forEach((p) => anadir(prepararPregunta(p, banco.asignatura))))
  );
  testsCortos.forEach((test) =>
    test.preguntas.forEach((p) => anadir(prepararPregunta(p, test.coleccion.asignatura, test.tema)))
  );
  return [...vistas.values()];
})();

const preguntaPorId = new Map(todasLasPreguntas.map((p) => [p.id, p]));

/* ---------- Nombres de asignaturas y temas (salen de los apuntes) ---------- */
function buscarAsignatura(idAsignatura) {
  return asignaturasApuntes.find((a) => a.id === idAsignatura);
}

function buscarTemaApuntes(idAsignatura, archivo) {
  const asignatura = buscarAsignatura(idAsignatura);
  if (!asignatura) return null;
  for (const bloque of asignatura.bloques) {
    const tema = bloque.temas.find((t) => t.archivo === archivo);
    if (tema) return { ...tema, bloque: bloque.titulo };
  }
  return null;
}

// "Tema 12 · Nucleósidos, nucleótidos…"
function nombreTema(idAsignatura, archivo) {
  const tema = buscarTemaApuntes(idAsignatura, archivo);
  if (!tema) return "Otros";
  return `Tema ${tema.numero} · ${tema.titulo}`;
}

function enlaceApuntes(idAsignatura, archivo) {
  return buscarTemaApuntes(idAsignatura, archivo) ? `apuntes.html#${idAsignatura}/${archivo}` : null;
}

// Orden de los temas tal como aparecen en los apuntes
function ordenTema(idAsignatura, archivo) {
  const asignatura = buscarAsignatura(idAsignatura);
  if (!asignatura) return 999;
  const archivos = asignatura.bloques.flatMap((b) => b.temas.map((t) => t.archivo));
  const posicion = archivos.indexOf(archivo);
  return posicion === -1 ? 999 : posicion;
}

/* ---------- Fallos guardados ---------- */
// { idPregunta: { asignatura, tema, fecha } }. Una pregunta sale de la lista en cuanto se acierta.
const CLAVE_FALLOS = "quiz-fallos";

function leerFallos() {
  try {
    const fallos = JSON.parse(localStorage.getItem(CLAVE_FALLOS)) || {};
    // Descartar preguntas que ya no existen (por ejemplo, si se cambió su texto)
    for (const id of Object.keys(fallos)) {
      if (!preguntaPorId.has(id)) delete fallos[id];
    }
    return fallos;
  } catch {
    return {};
  }
}

function guardarFallos(fallos) {
  try {
    localStorage.setItem(CLAVE_FALLOS, JSON.stringify(fallos));
  } catch {
    // Sin almacenamiento disponible (modo privado, etc.)
  }
}

// Apunta un fallo o lo quita según se haya acertado. Devuelve true si la pregunta estaba en la lista y sale de ella.
function registrarRespuesta(p, acertada) {
  const fallos = leerFallos();
  const estaba = Boolean(fallos[p.id]);
  if (acertada) {
    if (!estaba) return false;
    delete fallos[p.id];
  } else {
    fallos[p.id] = { asignatura: p.asignatura, tema: p.tema, fecha: Date.now() };
  }
  guardarFallos(fallos);
  return acertada && estaba;
}

// Fallos agrupados: { asignatura: { tema: [preguntas] } }
function fallosAgrupados() {
  const grupos = {};
  for (const id of Object.keys(leerFallos())) {
    const p = preguntaPorId.get(id);
    grupos[p.asignatura] ??= {};
    (grupos[p.asignatura][p.tema] ??= []).push(p);
  }
  return grupos;
}

function borrarFallos(asignatura, tema) {
  const fallos = leerFallos();
  for (const [id, f] of Object.entries(fallos)) {
    if (f.asignatura === asignatura && (!tema || f.tema === tema)) delete fallos[id];
  }
  guardarFallos(fallos);
}

/* ---------- Utilidades ---------- */
function barajar(lista) {
  const copia = [...lista];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

// Preguntas tipo test de una asignatura, opcionalmente solo de unos temas
function preguntasDe(asignatura, temas) {
  return todasLasPreguntas.filter((p) => p.asignatura === asignatura && (!temas || temas.includes(p.tema)));
}
