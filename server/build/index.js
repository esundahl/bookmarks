var exec = require('child_process').exec;

module.exports = function (req, res, next) {
  if (req.path === '/build.js') { 
   exec('make', next);
  }
  else {
    next();
  }
}
