document.querySelector('.min-btn').addEventListener('click', () => {
  window.electronAPI.minimizeWindow();
});

document.querySelector('.clse-btn').addEventListener('click', () => {
  window.electronAPI.closeWindow();
});