// Requires Files to main app (Configs, Modules, etc.)
const config = require("./config/shellconfig.js");
const electron = require('electron');
const { app, BrowserWindow } = require('electron');
const path = require('path');

var fullscreen_app = config.fullscreen
var windowcontrols_app = config.windowcontrols
var developertools = config.developertools
var debug = config.debug

// Paste Stuff Bleh

// Paste Stuff Bleh

// Keep a global reference to the window object, so it doesn't get garbage collected
let mainWindow;

// Create a function to create the main window
function createWindow() {
  // Create a new BrowserWindow object ---> Controls The Creation of Electron App Window
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    fullscreen: fullscreen_app,
    frame: windowcontrols_app
  });

  // Load the index.html file
  mainWindow.loadFile('index.html');

  // Window Options
  if (debug == true) {
    console.log(this.error)
  }

  // When the window is closed, set mainWindow to null
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

// Call createWindow() when the app is ready
app.on('ready', createWindow);

// Quit the app when all windows are closed
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Create a new window when the app is activated and there are no windows open
app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});
