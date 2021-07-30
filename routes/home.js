var express = require('express');
var router = express.Router();
const db = require('../models');

router.get('/', (req, res, next) => {

    res.render('home', {
        title: 'Digital Trails',
        


    });
})

module.exports = router;