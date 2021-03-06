const electron = require('electron');
const ffmpeg = require('fluent-ffmpeg');

const {app,BrowserWindow,ipcMain} = electron;
let mainWindow;

app.on('ready', () => {
  console.log('App is now ready');
  mainWindow = new BrowserWindow({
    width: 800, 
    height: 600, 
    resizable: false,
    webPreferences: {
      nodeIntegration: true
    }
  });
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});

ipcMain.on('video:submit', (event, path) => {
  // receive info into Electron
  ffmpeg.ffprobe(path, (err, metadata) => {
    // send info from electron to main window
    mainWindow.webContents.send(
      'video:metadata',
      metadata.format.duration
    );
  });
});