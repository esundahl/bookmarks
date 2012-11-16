
// Dependencies
var model = require('model'),
    Emitter = require('emitter');

var Bookmark = model('Bookmark')
  .attr('title')
  .attr('description')
  .attr('location')
  .attr('tags')
  .attr('_id');
  
Bookmark.url('api.dev/bookmark');
  
module.exports = Bookmark;