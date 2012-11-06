// Connect to the database
var mongo = require('mongoskin'),
    bookmarks = mongo.db('localhost:27017/marks').collection('bookmarks');
    
module.exports = function (app) {
  
  // GET /bookmarks
  app.get('/api/bookmarks', function (req, res) {
    bookmarks.find().toArray(function (err, docs) {
      if (err) {
        throw err;
      }
      res.send(docs);
    });
  });
  
  // POST /bookmarks
  app.post('/api/bookmarks', function (req, res) {
    bookmarks.insert(req.body, function (err, docs) {
      if (err) {
        throw err;
      }
      res.send(docs);
    });
  });
  
  // GET /bookmarks/:id
  app.get('/api/bookmarks/:id', function (req, res) {
    bookmarks.findById(req.params.id, function (err, docs) {
      if (err) {
        throw err;
      }
      res.send(docs);
    });
  });
  
  // PUT /bookmarks/:id
  app.put('/api/bookmarks/:id', function (req, res) {
    delete(req.body._id);
    bookmarks.updateById(req.params.id, req.body, {}, function (err, docs) {
      if (err) {
        throw err;
      }
      res.send(docs);
    });
  });
  
  // DELETE /bookmarks/:id
  app.delete('/api/bookmarks/:id', function (req, res) {
    delete(req.body._id);
    bookmarks.removeById(req.params.id, {}, function (err, docs) {
      if (err) {
        throw err;
      }
      res.send(docs);
    });
  });
  
};