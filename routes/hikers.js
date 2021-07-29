var express = require('express');
var router = express.Router();
const db = require('../models');




router.get('/', (req, res, next) => {
    db.Hiker.findAll()
      .then((hikers) => {
        res.render('hikers', {
            title : 'Hikers',
            hikers : hikers
        })
        
    });
  })
  

// patients post statement
router.post('/', (req, res) => {
  if (!req.body || !req.body.name) {
    // respond with an error
    res.status(422).json({
      error: "Must include Hiker Name "
    })
    return
  }
  // insert new todo into DB with text, and return newly created row
  db.Hiker.create({
    name: req.body.name,
    birthday: req.body.birthday,
    })
    .then((hiker) => {
      res.status(201).json(hiker)
    })
})

// set time to hike the trail and add it to the hiker_trail table
router.post('/:id/hiker_trail', (req, res) => {
  if (!req.body || !req.body.time) {
    res.status(422).json({
      error: "Please include time."
    })
    return
  }

  db.Hiker.findByPk(req.params.id)
  .then((hiker) => {
    if (!patient) {
      res.status(404).json({
        error: "No hiker Found"        
      })
      return
    }
    hiker.createHiker_Trail({
      time: req.body.time
    })
    .then((hiker_trail) => {
      res.status(201).json(hiker_trail)
    })
  })
})

module.exports = router;