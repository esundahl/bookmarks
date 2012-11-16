
var Emitter = require('emitter');

function AppView (obj) {
  var AppHeader = require('app-header'),
      BookmarkListView = require('bookmark-list-view');
  
  this.el = document.createElement('div');
  this.el.className = 'application';
  Emitter(this);
  
  this.el.appendChild(new AppHeader().el);
  this.on('reset', function (bookmarks) {
    this.el.appendChild(new BookmarkListView(bookmarks).el);
    console.log(bookmarks);
  });

  document.body.appendChild(this.el);
  return this;
}

module.exports = new AppView();