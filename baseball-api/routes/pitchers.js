var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

var Pitchers = function(){
  return knex('pitchers');
}

//get all pitchers
router.get('/', function(req, res, next) {
  Pitchers().select().then(function(payload) {
    res.json(payload);
  });
});

//get one pitcher
router.get('/:id', function(req, res, next) {
  Pitchers().where({id: req.params.id}).then(function(payload) {
    res.json(payload);
  });
});

module.exports = router;
