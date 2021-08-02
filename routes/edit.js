var express = require('express');
var router = express.Router();
const db = require('../models')

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('edit', {
        title: 'Edit'
    })
});


module.exports = router;