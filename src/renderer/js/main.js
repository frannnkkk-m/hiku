const { app, BrowserWindow, ipcMain } = require("electron");
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 292,
    height: 350,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    frame: false,
    transparent: false,
    backgroundColor: "#453732",
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      preload: path.join(__dirname, 'preload.js') // ajustá la ruta según donde esté tu preload.js
    }
  });

  win.loadFile(path.join(__dirname, '..', 'index.html'));

  ipcMain.on('minimize-window', () => win.minimize());
  ipcMain.on('close-window', () => win.close());
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});