module.exports = function(app) {
  
  // Root Route
  app.get('/', function (req, res){
    res.render('layout');
  });
  
  // Import Bookmarks Resource
  require('./bookmarks')(app);
  
}



