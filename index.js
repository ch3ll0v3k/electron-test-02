const { app, BrowserWindow, ipcMain: ipc } = require('electron');

function createWindow () {

  // https://www.electronjs.org/docs/api/browser-window
  const win = new BrowserWindow({
    // parent: 'top', 
    // modal: true, 
    // show: false
    // devTools: false,


    width: 1200,
    height: 700,
    webPreferences: {
      preload: `${__dirname}/preload/`,
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
      // sandbox: false,
      // nodeIntegrationInWorker: true,
      // nodeIntegrationInSubFrames: true,
    }
  })

  win.loadFile(`${__dirname}/pages/home/index.html`);
  win.webContents.openDevTools();

  ipc.on('my-method', (event, args) => {
    console.log({ 'my-method': {args} });
    event.sender.send('my-event', {hello: 'world'});
  });

}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});
