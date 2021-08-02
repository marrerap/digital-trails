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

router.post('/:id', function(req, res, next) {
    db.Hiker_Trail.upsert({
      HikerId: req.session.hiker.id,
      TrailId: req.params.id
    })
      .then((hiker_trail) => {
          //respond with success
          res.redirect('/trails')

      })

  });


module.exports = router;