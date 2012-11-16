// Module Dependencies
var View = require('view'),
    domify = require('domify'),
    tmpl = domify(require('./template'));
    
function BookmarkView (bookmark) {
  View.call(this, bookmark, tmpl.cloneNode(true));
  this.bind('click h1', 'clicked');
}

BookmarkView.prototype.__proto__ = View.prototype;

BookmarkView.prototype.clicked = function () {
  console.log(this.obj.title());
};

module.exports = BookmarkView;