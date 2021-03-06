var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

var Batters = function(){
  return knex('batters');
}

//get all batters
router.get('/', function(req, res, next) {
  Batters().select().then(function(payload) {
    res.json(payload);
  });
});

//get one batter
router.get('/:id', function(req, res, next) {
  Batters().where({id: req.params.id}).then(function(payload) {
    res.json(payload);
  });
});

module.exports = router;
