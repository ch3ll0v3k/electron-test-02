const exec = require('child_process').exec;

module.exports = async( cmd )=>{

  return new Promise( async(resolve)=>{

    const child = exec( cmd );

    let result = '';
    child.stdout.on('data', function(data) {
      result += data;
    });

    child.on('close', function() {
      // console.log('done');
      // console.log(result);
      resolve({success: true, message: 'OK', data: result.split('\n')});
    });

  });

}
