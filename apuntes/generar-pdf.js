// Genera los PDF de los apuntes a partir de los fragmentos HTML de apuntes/fuentes.
// Uso (desde la carpeta del proyecto):  node apuntes/generar-pdf.js [asignatura] [tema-XX]
// Necesita Microsoft Edge o Google Chrome instalado (se usa en modo headless para imprimir).
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");
const { pathToFileURL } = require("url");

const asignaturas = require("../apuntes-datos.js");

const carpetaFuentes = path.join(__dirname, "fuentes");
const carpetaPdf = path.join(__dirname, "pdf");

const navegadores = [
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium"
];
const navegador = navegadores.find((ruta) => fs.existsSync(ruta));

if (!navegador) {
  console.error("No se ha encontrado Edge ni Chrome para generar los PDF.");
  process.exit(1);
}

const latido =
  '<svg class="cabecera-latido" viewBox="0 0 600 40" preserveAspectRatio="none" aria-hidden="true">' +
  '<path d="M0 20 H230 L246 20 L258 4 L274 36 L288 12 L298 20 H600" /></svg>';

const leyenda = `
  <div class="leyenda">
    <span><i class="l-clave"></i>Clave de examen</span>
    <span><i class="l-clinica"></i>En la clínica</span>
    <span><i class="l-truco"></i>Truco para recordar</span>
    <span><i class="l-ampliacion"></i>Ampliación (menos prioritario)</span>
  </div>`;

function plantilla(titulo, cuerpo) {
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>${titulo}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600&family=Nunito:wght@400;700;800&display=block" rel="stylesheet">
  <link rel="stylesheet" href="../estilo-pdf.css">
</head>
<body>
${cuerpo}
</body>
</html>`;
}

function htmlTema(asignatura, tema) {
  const fragmento = fs.readFileSync(path.join(carpetaFuentes, asignatura.id, `${tema.archivo}.html`), "utf8");
  return `
<article class="tema">
  <header class="cabecera">
    <div class="cabecera-numero">${tema.numero}</div>
    <div>
      <p class="cabecera-asignatura">${asignatura.nombre} · Tema ${tema.numero}</p>
      <h1>${tema.titulo}</h1>
    </div>
    ${latido}
  </header>
  ${leyenda}
  ${fragmento}
</article>`;
}

function imprimir(html, destino) {
  // El HTML temporal se guarda junto a los fragmentos para que funcionen las rutas relativas.
  const temporal = path.join(carpetaFuentes, "_temporal", `${path.basename(destino, ".pdf")}.html`);
  fs.mkdirSync(path.dirname(temporal), { recursive: true });
  fs.writeFileSync(temporal, html);

  execFileSync(navegador, [
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",
    "--virtual-time-budget=8000",
    `--print-to-pdf=${destino}`,
    pathToFileURL(temporal).href
  ], { stdio: "ignore" });

  console.log("✓", path.relative(process.cwd(), destino));
}

// Opcional: limitar a una asignatura y/o a un tema, p. ej. "fisiologia", "tema-04" o "fisiologia tema-04"
const argumentos = process.argv.slice(2);
const soloAsignatura = asignaturas.some((a) => a.id === argumentos[0]) ? argumentos.shift() : null;
const soloArchivo = argumentos[0];

asignaturas.forEach((asignatura) => {
  if (soloAsignatura && asignatura.id !== soloAsignatura) return;

  const salida = path.join(carpetaPdf, asignatura.id);
  fs.mkdirSync(salida, { recursive: true });

  const temas = asignatura.bloques.flatMap((bloque) => bloque.temas);

  temas
    .filter((tema) => !soloArchivo || tema.archivo === soloArchivo)
    .forEach((tema) => {
      const html = plantilla(`${asignatura.nombre} · Tema ${tema.numero}`, htmlTema(asignatura, tema));
      imprimir(html, path.join(salida, `${tema.archivo}.pdf`));
    });

  if (soloArchivo) return;

  // Documento con todos los temas de la asignatura y una portada con el índice
  const indice = temas.map((tema) => `<li><b>${tema.numero}</b>${tema.titulo}</li>`).join("");
  const portada = `
<section class="portada-completa">
  <p>Apuntes de enfermería</p>
  <h1>${asignatura.nombre}</h1>
  ${latido.replace("cabecera-latido", "cabecera-latido portada-latido")}
  <ol>${indice}</ol>
</section>`;
  const cuerpo = portada + temas.map((tema) => htmlTema(asignatura, tema)).join("");
  imprimir(plantilla(`${asignatura.nombre} · Apuntes completos`, cuerpo), path.join(salida, `${asignatura.completo}.pdf`));
});

fs.rmSync(path.join(carpetaFuentes, "_temporal"), { recursive: true, force: true });
