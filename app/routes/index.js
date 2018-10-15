var express = require('express');
var router = express.Router();

var mongoose = require('mongoose')

// Mongoose Schema definition
var Schema = mongoose.Schema;
var JsonSchema = new Schema({
    name: String,
    id:String
});

// Mongoose Model definition
var Json = mongoose.model('JString', JsonSchema, 'cards');


// Mongoose connection to MongoDB
mongoose.connect('mongodb://mongo/dbCards', { useNewUrlParser: true }, function (error) {
    if (error) {
        console.log(error)
    }else{
      console.log('Connected to MongoDB')
    }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET search call */
router.get('/search/:name', function(req, res, next) {
  if(req.params.name){
    console.log(req.params.name)
    Json.find({$and : [{'name' : new RegExp(req.params.name, 'i')},{'id':{$regex:"(?<!e)$"}}]},{name:1,_id:0,id:1}).limit(5).exec((err, docs) =>{
      res.json(docs)
    })
  }
});

module.exports = router;
