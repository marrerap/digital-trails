var express = require('express');
var router = express.Router();

const db = require('../models')

/* GET users listing. */
router.get('/', (req, res, next) => {

    res.render('hikerpage', {
        title: 'Digital Trails',
        


    });
})

module.exports = router;
//  db.Hiker_Trail.sync({ alter: true })