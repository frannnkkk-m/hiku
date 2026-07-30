const { app, BrowserWindow, ipcMain  } = require("electron");

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
      contextIsolation: true
    }
  });

  win.loadFile("index.html");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});