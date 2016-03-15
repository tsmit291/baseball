var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

var LeagueAvg = function(){
  return knex('leagueAvg');
}

//get all league averages
router.get('/', function(req, res, next) {
  LeagueAvg().select().then(function(payload) {
    res.json(payload);
  });
});

//get one league average
router.get('/:id', function(req, res, next) {
  LeagueAvg().where({id: req.params.id}).then(function(payload) {
    res.json(payload);
  });
});

module.exports = router;
