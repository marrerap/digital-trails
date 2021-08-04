var express = require('express');
var router = express.Router();
const db = require('../models');
const hiker_trail = require('../models/hiker_trail');




router.get('/', (req, res) => {
    db.Hiker.findByPk(req.session.hiker.id, {
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
                    console.log(completedTrails)
                    const loopedTrails = function (arr) {
                        let listOfTrails = []
                        for (let index = 0; index < arr.length; index++) {
                            listOfTrails.push(arr[index].dataValues.Trail.trailName)
                        }
                        return listOfTrails
                    }
                    res.render('profile', {
                        title: "Your Profile",
                        hiker: hiker.firstName,
                        bio: hiker.bio,
                        friends: hiker.Friend,
                        completedTrails: completedTrails,
                        plannedTrails: plannedTrails
                    })
                })
        })
});


router.patch("/:id", function (req, res, next) {
    db.Hiker_Trail.update(
        {completed: req.body.completed},
        {where: {HikerId: req.session.hiker.id, TrailId: req.params.id}}
    )
        .then(function (rowsUpdated) {
            res.redirect('/profile')
        })
        .catch(next)
})

module.exports = router;