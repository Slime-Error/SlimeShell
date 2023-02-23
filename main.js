// Main Electron Appilcation
const { app, BrowserWindow, ipcMain } = require("electron");
// Get User Configuration Files
const config = require("./config/shellconfig.js");
// User & Application Config Variables
var appFullscreen = config.fullscreen
var appFrameDock = config.appFrameDock
var webDevTools = config.webDevTools

// Electron Window Creation
let win = null;
const createWindow = () => {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: true,
    fullscreen: appFullscreen,
    frame: appFrameDock,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
      nativeWindowOpen: true,
      webSecurity: true
    },
  });
  if (webDevTools == true) {
    win.webContents.openDevTools();
  }
  win.loadFile("index.html");
};
app.whenReady().then(createWindow);
