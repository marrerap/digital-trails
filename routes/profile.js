var express = require('express');
var router = express.Router();
const db = require('../models');
const hiker_trail = require('../models/hiker_trail');




router.get('/', (req, res) => {
    db.Hiker.findByPk(req.session.hiker.id, {
        include: [{
            model: db.Hiker_Trail,
            include: [db.Trail]
        }, {
            model: db.Friends
        }]
    })
      .then((hiker) => {
        db.Hiker_Trail.findAll({
            include: [db.Hiker, db.Trail], 
            where: {
                HikerId: req.session.hiker.id
            }
        })
        .then((friend) => {
            db.Friend.findAll( {
                include: [db.Hiker],
                where: {
                    HikerId: req.session.hiker.id
                }
            })
            console.log(friend, "friend")
        })
        .then((trail) => {
            const completedTrails = hiker.Hiker_Trails.filter(trail => trail.completed)
            const plannedTrails = hiker.Hiker_Trails.filter(trail => !trail.completed)
            const loopedTrails = function(arr) {
                let listOfTrails = []
                for (let index = 0; index < arr.length; index++) {
                    listOfTrails.push( arr[index].dataValues.Trail.trailName) 
                }
                return listOfTrails
            }
            console.log(plannedTrails)
            res.render('profile', {
                title: "Your Profile",
                hiker : hiker.firstName,
                bio : hiker.bio,
                completedTrails: completedTrails,
                plannedTrails: loopedTrails(plannedTrails)
            })
        })
    });
  })

  module.exports = router;