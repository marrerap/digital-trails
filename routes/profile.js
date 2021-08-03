var express = require('express');
var router = express.Router();
const db = require('../models');
const hiker_trail = require('../models/hiker_trail');




router.get('/', (req, res) => {
    db.Hiker.findByPk(req.session.hiker.id, {
        include: [{
            model:db.Hiker_Trail,
            include: [db.Trail]
        }]
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
            const loopedTrails = function(arr) {
                let listOfTrails = []
                for (let index = 0; index < arr.length; index++) {
                    listOfTrails.push( `
                    <p>${arr[index].dataValues.Trail.trailName}</p>
                    `)
                    
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