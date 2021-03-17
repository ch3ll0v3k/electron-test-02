const electron = require('electron');
const { dialog } = electron.remote;

const openFile = async()=>{

  return new Promise(async(resolve)=>{

    try {
      // const result = await dialog.showOpenDialog(mainWindow, { properties: ['openDirectory'] });
      const result = await dialog.showOpenDialog({ properties: [
        'openFile', 
        // 'multiSelections'
      ]});

      if ( !result )
        return resolve({success: false, message: 'Failed to select', data: {} });

      if ( result.canceled )
        return resolve({success: false, message: 'Caceled', data: {} });

      resolve({success: true, message: 'OK', data: result.filePaths });

      // const date = format(new Date(), 'MM-DD-YYYY HH[:]mm');
      // let config = JSON.stringify(ElectronStore.store);
      // let configPath = path.join(result.filePaths[0], `jsui-config (${date}).json`);
      // fs.writeFileSync(configPath, config);

    } catch (e) {
      return resolve({success: false, message: e.message, data: {} });
    }

  });

}


module.exports = {
  openFile,

};
