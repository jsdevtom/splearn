const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
// Models
const User = require('../models/user.model')

// select all
router.post('/', function (req, res) {
  let user = new User({
    firstName: req.body.firstName,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10)
  })
  res.json('hi')
  user.save()
    .then((result) => res.send(201).json(result))
    .catch((err) => res.status(500).json(err))
})

module.exports = router
