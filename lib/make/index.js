var exec = require('child_process').exec,
    child;

module.exports = function (req, res, next) {
   if (req.path === '/build.js') { 
     child = exec('make',
       function (error, stdout, stderr) {
         console.log('stdout: ' + stdout);
         console.log('stderr: ' + stderr);
         if (error !== null) {
           console.log('exec error: ' + error);
         }
         next();
     });
   }
   else {
     next();
   }
   
}
