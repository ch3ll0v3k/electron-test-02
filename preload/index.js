const electron = require('electron');
const { ipcRenderer: ipc } = electron;

const APP_ROOT = `${__dirname}/..`;

window.api = {
  getAppRoot: ()=>APP_ROOT,
};

window.ipc = ipc;

// => contextIsolation: true => 
// const { contextBridge } = electron;
// contextBridge.exposeInMainWorld('api', {
//   getAppRoot: ()=>APP_ROOT,
// });
