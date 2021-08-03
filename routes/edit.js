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

router.post("/", function (req, res, next) {
    const input = document.getElementById('bioForm')
    db.Hiker.update(
      {bio: input.value},
    )
    .then(function(rowsUpdated) {
        console.log(input.value)
      res.redirect('/profile')
    })
    .catch(next)
   })


module.exports = router;