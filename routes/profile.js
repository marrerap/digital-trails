var express = require('express');
var router = express.Router();
const db = require('../models');
const hiker_trail = require('../models/hiker_trail');




router.get('/', (req, res, next) => {
    db.Hiker.findByPk(req.session.hiker.id)
      .then((hiker) => {
        res.render('profile', {
            title: "Your Profile",
            hiker : hiker.firstName,
            bio : hiker.bio
        })
        
    });
  })

  module.exports = router;