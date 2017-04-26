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
    .then((result) => res.status(201).json(result))
    .catch((err) => res.status(500).json(err))
})

// Sign in
router.post('/signin', function (req, res) {
  let statusCode
  User.findOne({email: req.body.email})
    .then((userFound) => new Promise((resolve, reject) => {
      let token
      if (
        !userFound ||
        !bcrypt.compareSync(req.body.password, userFound.password)
      ) {
        statusCode = 401
        return reject('Login Failed')
      }
      token = jwt.sign({user: userFound}, process.env.JWT_SECRET, {expiresIn: '30d'})
      resolve({token, userId: userFound._id})
    }))
    .then((objToBeSent) => {
      res.status(200).json(objToBeSent)
    })
    .catch((err) => {
      res.status(statusCode || 500).json(err)
    })
})

module.exports = router
