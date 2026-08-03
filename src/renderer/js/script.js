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
  
    if(!result.canceled) {
      console.log('Archivos Seleccionados: ', result.filePaths);
    }

    else {console.log('Cancelaste la selección')

    }

  } catch (error) {
    console.error('Error al abrir dialogo', error)
  }
});

/* ---------------------Botón para seleccionar canción------------------------------- */

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

function handleFiles(files) {
  for (const file of files) {
    if (!file || !file.type.startsWith("audio/")) continue;

    const url = URL.createObjectURL(file);
    const fileName = file.name.replace(/\.[^/.]+$/, "");

    const song = {
      name: fileName,
      url: url,
      cover: "disco.gif",
    };

    playlist.push(song);
  }

  if (currentIndex === -1 && playlist.length > 0) {
    currentIndex = 0;
    loadSong(currentIndex);
  }
}