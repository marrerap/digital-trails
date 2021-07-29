var express = require('express');
var router = express.Router();

const db = require('../models')

/* GET users listing. */
router.get('/', function(req, res, next) {
 
  res.json({message: "Test"})
});

module.exports = router;
//  db.Hiker_Trail.sync({ alter: true })