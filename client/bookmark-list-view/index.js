// Module Dependencies
var BookmarkView = require('bookmark-view');

function BookmarkListView (bookmarks) {
  this.el = document.createElement('ul');
  var el = this.el;
  
  bookmarks.each(function (bookmark) {
    var bookmarkView = new BookmarkView(bookmark);
    el.appendChild(bookmarkView.el);
    console.log(bookmarkView);
    bookmark.emit('change', 'title', bookmark.title());
  });
}

module.exports = BookmarkListView;