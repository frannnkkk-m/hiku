document.querySelector('.min-btn').addEventListener('click', async() => {
  window.electronAPI.minimizeWindow();
});

document.querySelector('.clse-btn').addEventListener('click', async() => {
  window.electronAPI.closeWindow();
});

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