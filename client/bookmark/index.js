// Dependencies
var model = require('model');

var Bookmark = model('Bookmark')
  .attr('title')
  .attr('url')
  .attr('description')
  .attr('_id');

module.exports = Bookmark;