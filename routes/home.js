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
    if(!req.body || !req.body.email || !req.body.password || !req.body.username) {
      //respond with error if not included
      res.status(422).json({error: 'must include email,password and username'})
      return
    }
    //hash password
      bcrypt.hash(req.body.password, 10)
        .then((hash) => {
          //store user details
          //db.User.create
          db.User.create({
            email: req.body.email,
            password: hash,
            bio : req.body.bio,
            firstName : req.body.firstName,
            username : req.body.username,
            birthday: req.body.birthday
          })
            .then((user) => {
                //respond with success
                res.status(201).json(user)
  
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
              res.redirect('/hikers')
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
    res.json({message: 'successfully logged out'})
  })
  
  module.exports = router;