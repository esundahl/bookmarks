// Module Dependencies
var tmpl = require('./template'),
    domify = require('domify');
    
function AppHeader(){
  this.el = domify(tmpl);
  return this;
}

module.exports = AppHeader;