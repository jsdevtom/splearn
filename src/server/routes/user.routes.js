const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// Models
const User = require('../models/user.model')

// Sign up
router.post('/', function (req, res) {
  let user = new User({
    firstName: req.body.firstName,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10)
  })
  user.save()
    .then((savedUser) => {
      let signedJWT = jwt.sign({user: savedUser}, process.env.JWT_SECRET, {expiresIn: '30d'})
      res.status(201).json({jwt: signedJWT, userId: savedUser._id, firstName: savedUser.firstName})
    })
    .catch((err) => res.status(500).json({title: 'An error occured', error: err}))
})

// Sign in
router.post('/signin', function (req, res) {
  let statusCode
  User.findOne({email: req.body.email})
    .then((userFound) => new Promise((resolve, reject) => {
      let signedJWT
      if (
        !userFound ||
        !bcrypt.compareSync(req.body.password, userFound.password)
      ) {
        statusCode = 401
        return reject('Login Failed')
      }
      signedJWT = jwt.sign({user: userFound}, process.env.JWT_SECRET, {expiresIn: '30d'})
      resolve({jwt: signedJWT, userId: userFound._id, firstName: userFound.firstName})
    }))
    .then((objToBeSent) => {
      res.status(200).json(objToBeSent)
    })
    .catch((err) => {
      res.status(statusCode || 500).json({title: 'An error occured', error: err})
    })
})

module.exports = router
