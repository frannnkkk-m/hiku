const infoBtn = document.getElementById('infoBtn');
const closeInfoBtn = document.getElementById('closeInfoBtn');
const infoPanel = document.getElementById('infoPanel');

infoBtn.addEventListener('click', () => {
  infoPanel.classList.add('open');
});

closeInfoBtn.addEventListener('click', () => {
  infoPanel.classList.remove('open');
});

/* -----------------------------Abrir, Mostrar y Cerrar Info-Slide------------------------------------------- */

document.querySelector('.min-btn').addEventListener('click', async() => {
  window.electronAPI.minimizeWindow();
});

document.querySelector('.clse-btn').addEventListener('click', async() => {
  window.electronAPI.closeWindow();
});

/* ----------------------------Botones Minimizar y Cerrar Ventana-------------------------------------------- */

document.getElementById('btnUp').addEventListener('click', async () => {
  try {
    const result = await window.electronAPI.openFileDialog();

    if (!result.canceled && result.filePaths.length > 0) {
      handleFiles(result.filePaths);
    } else {
      console.log('Cancelaste la selección');
    }
  } catch (error) {
    console.error('Error al abrir dialogo', error);
  }

  forwardBtn.addEventListener("click", () => {
  if (playlist.length === 0) return;

  if (currentIndex < playlist.length - 1) {
    currentIndex++;
    loadSong(currentIndex);
  } else {
    // No hay más canciones después → termina la reproducción
    audio.pause();
    audio.currentTime = 0;
    isPlaying = false;
    playPauseIcon.src = "../../assets/images/Group 3.png"; // ícono de play
    progressBar.style.width = "0%";
  }
});

backBtn.addEventListener("click", () => {
  if (playlist.length === 0) return;
  currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
  loadSong(currentIndex);
});

});

/* ---------------------Botón para seleccionar canción (full IA)------------------------------- */

const audio = document.getElementById("audio");
const pauseBtn = document.getElementById("pauseBtn");
const progressBar = document.getElementById("progressBar");
const fileInput = document.getElementById("fileInput");
const dropArea = document.getElementById("dropArea");
const backBtn = document.getElementById("backBtn");
const forwardBtn = document.getElementById("forwardBtn");

let playlist = [];
let currentIndex = -1;

const coverImage = [
  "disco.gif"
];

function handleFiles(filePaths) {
  for (const filePath of filePaths) {
    const fileName = filePath.split(/[\\/]/).pop().replace(/\.[^/.]+$/, "");

    const song = {
      name: fileName,
      url: `file://${filePath.replace(/\\/g, '/')}`,
      cover: "disco.gif",
    };

    playlist.push(song);
  }

  currentIndex = playlist.length -1;
  loadSong(currentIndex);
}

let isPlaying = false;
const playPauseIcon = document.getElementById("playPauseIcon");

function loadSong(index) {
  const song = playlist[index];
  if (!song) return;
  audio.src = song.url;
  audio.play();
  isPlaying = true;
  playPauseIcon.src = "../../assets/images/Group 4.png"; // ícono de pausa
}

pauseBtn.addEventListener("click", () => {
  if (!audio.src) return;
  if (isPlaying) {
    audio.pause();
    playPauseIcon.src = "../../assets/images/Group 3.png"; // play
  } else {
    audio.play();
    playPauseIcon.src = "../../assets/images/Group 4.png"; // pause
  }
  isPlaying = !isPlaying;
});

audio.addEventListener("timeupdate", () => {
  if (!audio.duration) return;
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = `${progress}%`;
});

/*-------------ESTA PARTE FUE HECHA CON IA, NO SÉ SI LA DEJE--------------- */

const volumenBtn = document.getElementById('volumenBtn');
const volumenPanel = document.getElementById('volumenPanel');
const volumenContainer = document.getElementById('volumenContainer')


volumenBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  volumenContainer.classList.toggle('open');
});

document.addEventListener('click', (e) => {
  if(!volumenContainer.contains(e.target) && !volumenBtn.contains(e.target)) {
    volumenContainer.classList.remove('open')
  }
})

/* ----------------------------------------Botón de Volumen (IA pa hacer que se oculte..) ------------------------------------------ */