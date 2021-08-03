var express = require('express');
var router = express.Router();
const db = require('../models');
const hiker_trail = require('../models/hiker_trail');
const bcrypt = require('bcrypt')

router.get('/', (req, res, next) => {

    res.render('home', {
        title: 'Digital Trails',
        


    });
})

router.post('/register', function(req, res, next) {
    //check for email and password
    if(!req.body || !req.body.regEmail || !req.body.regPassword || !req.body.regName) {
      //respond with error if not included
      res.status(422).json({error: 'must include email, password'})
      return
    }
    //hash password
      bcrypt.hash(req.body.regPassword, 10)
        .then((hash) => {
          //store user details
          //db.User.create
          db.Hiker.create({
            email: req.body.regEmail,
            password: hash,
            bio : req.body.bio,
            firstName : req.body.regName,
            birthday: req.body.regBirthday
          })
            .then((hiker) => {
                //respond with success
                res.redirect('/trails')
  
            })
  
        })
  
  });
  //POST users/login
  router.post('/login', (req, res) => {
    if(!req.body || !req.body.email || !req.body.password) {
      //respond with error if not included
      res.status(422).json({error: 'must include email and password'})
      return
    }
    //find user
    db.Hiker.findOne({
      where: {
        email: req.body.email
      }
    })
    //check user password
      .then((hiker) => {
        bcrypt.compare(req.body.password, hiker.password)
          .then((success) => {
            if(success) {
              //login hiker
              req.session.hiker = hiker;
              res.redirect('/profile')
            } else {
              //incorrect password
              res.status(401).json({error: 'incorrect password'})
            }
          })
      })
  })
  
  router.get('/logout', (req, res)=> {
    //tell express that the user logged out
    req.session.hiker = null;
    //send response: success
    res.redirect("/")
  })
  
  module.exports = router;