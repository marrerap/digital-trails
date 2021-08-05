var express = require('express');
const app = require('../app');
var router = express.Router();
const db = require('../models')

/* GET home page. */
router.get('/', (req, res, next) => {
    let hiker = db.Hiker
    res.render('edit', {
        title: 'Edit',
        hiker: hiker
    })
});

router.patch("/", function (req, res, next) {
  db.Hiker.update(
      {bio: req.body.bio},
      {where: {id: req.session.hiker.id}}
      )
  .then(function (rowsUpdated) {
          res.redirect('/profile')
          console.log(bio)
      })
      .catch(next)
})


module.exports = router;