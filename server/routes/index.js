module.exports = function(app) {
  
  require('./bookmarks')(app);
  
  // Import Bookmarks Resource
  app.get('*', function (req, res){
    res.render('layout');
  });
  
}



