var express = require('express');
var router = express.Router();
const db = require('../models');

router.get('/', (req, res, next) => {
  db.Hiker.findAll()
    .then((hikers) => {
      res.render('hikers', {
        title: 'Hikers',
        hikers: hikers
      })

    });
})


// hikers post statement
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
    firstName: req.body.firstName,
    birthdate: req.body.birthdate,
  })
    .then((hiker) => {
      res.status(201).json(hiker)
    })
})

router.get('/:id', (req, res) => {
  db.Hiker.findByPk(req.params.id, {
      include: [{
          model: db.Hiker_Trail,
          include: [db.Trail]
      },
      "Friend"
      ]
  })
      .then((hiker) => {
          db.Hiker_Trail.findAll({
              include: [db.Hiker, db.Trail],
              where: {
                  HikerId: req.session.hiker.id
              }
          })
              .then((trail) => {
                  const completedTrails = hiker.Hiker_Trails.filter(trail => trail.completed)
                  const plannedTrails = hiker.Hiker_Trails.filter(trail => !trail.completed)
                  const hikerFriends = hiker.Friend.filter(hiker => hiker.id)
                  console.log(hikerFriends)
                  res.render('profile', {
                      title: hiker.firstName +"'s Profile",
                      hiker: hiker.firstName,
                      bio: hiker.bio,
                      friends: hikerFriends,
                      completedTrails: completedTrails,
                      plannedTrails: plannedTrails
                  })
              })
      })
});

router.post('/:id', async function (req, res, next) {
  const hiker = await db.Hiker.findByPk(req.session.hiker.id)
  const friend = await db.Hiker.findByPk(req.params.id)
  const hasFriend = await hiker.hasFriend(friend)
  console.log(hasFriend)
  if (hasFriend) {
    res.redirect("/hikers")
    return
  }
  await hiker.addFriend(friend)

  //respond with success
  res.redirect('/hikers')

});

// set time to hike the trail and add it to the hiker_trail table
router.post('/:id/hiker_trail', (req, res) => {
  if (!req.body) {
    res.status(422).json({
      error: "Error."
    })
    return
  }

  db.Hiker.findByPk(req.params.id)
    .then((hiker) => {
      if (!hiker) {
        res.status(404).json({
          error: "No hiker Found"
        })
        return
      }
      hiker.createHiker_Trail({
        completed: req.body.completed,
        TrailId: req.body.id,
      })
        .then((hiker_trail) => {
          res.redirect('/hikers')
        })
    })
})

module.exports = router;