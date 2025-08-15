import { app } from 'electron';
import { BrowserWindow } from 'electron';


function createWindow() { //our method we made
  const win = new BrowserWindow({ //making a new instance(a specific window) of the browserwindow class 
    width: 550,        // Window width
    height: 550,       // Window height
    resizable: false,  // User cannot resize
    autoHideMenuBar: true // Hide the top menu bar
  });
  //height, width, etc..These are options that the BrowserWindow constructor understands.
  // Why put new BrowserWindow inside createWindow() because
  // We wrap it inside createWindow() because we only want to create the window when the app is ready.
  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
