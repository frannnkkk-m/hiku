const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const path = require('path');

console.log('Hiku Iniciado👋')

const createWindow = () => {
  const win = new BrowserWindow({ 
    show: false,
    width: 350,
    height: 450,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    frame: false,
    transparent: false,
    backgroundColor: "#453732",
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      preload: path.join(__dirname, 'preload.js')
    }
  })
  win.loadFile(path.join(__dirname, '..', 'index.html'));
  ipcMain.on('minimize-window', () => win.minimize());
  ipcMain.on('close-window', () => win.close());
  win.once('ready-to-show', () => {win.show()});

  
}

ipcMain.handle('dialog:openFile', async (event, args) => {
  const result = await dialog.showOpenDialog({
    properties: ['openFile', 'multiSelections']
  });

  return result; 
});



app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});