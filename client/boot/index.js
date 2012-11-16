
// Module Dependencies
var page = require('page'),
    Bookmark = require('bookmark'),
    appView = require('app-view'),
    domify = require('component-domify'),
    view = require('component/view');

// Routes
page('/', show);
page('/bookmarks', show);
page('/bookmarks/:id', show);
page('/bookmarks/:id/edit', edit);
page();

function show (ctx) {
  loadBookmarks(function (bookmarks) {
    appView.emit('reset', bookmarks);
  });
}

function edit (ctx) {
  var el = domify('<h1>title</h1>'),
      model = new Bookmark({title: 'This is my title'});
}

function loadBookmarks (cb) {
  Bookmark.all(function (err, res) {
    if (err) { throw err; }
    if (cb) {
      cb(res);
      console.log(res);
    }
  });
}