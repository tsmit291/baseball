var express = require('express');
var router = express.Router();
var knex = require("../db/knex");

var Batters = function(){
  return knex('batters');
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
