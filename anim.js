// Sincronizar las letras con la canción (opcional)
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Si quieres que la canción empiece en cierto minuto (en vez de 0:00),
// descomenta esto y pon el segundo donde quieres que arranque:
audio.addEventListener("loadedmetadata", function () {
audio.currentTime = 45; // ejemplo: empieza en el segundo 45 (0:45)
 });

// Array de objetos con cada línea y el segundo en el que aparece.
// Vacío por defecto: agrega tus propias líneas sincronizadas con tu canción nueva,
// con el formato { text: "tu frase", time: segundos }.
var lyricsData = [
  // { text: "Ejemplo de línea", time: 10 },
];

function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 5
  );

  if (currentLine) {
    var opacity = 1;
    if (time === currentLine.time || time === currentLine.time + 4) {
      opacity = 0.5;
    }
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);
