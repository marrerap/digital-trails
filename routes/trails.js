var express = require('express');
var router = express.Router();
const db = require('../models')

/* GET home page. */
router.get('/', (req, res, next) => {
  db.Trail.findAll()
    .then((trails) => {
      res.render('trails', {
          title : 'Trails',
          trails : trails
      })
      
  });
})

// router.get('/', function(req, res, next) {
//   db.Trail.findAll()
//   .then((trails) => {
//     res.json(trails)
//   })
// });


module.exports = router;