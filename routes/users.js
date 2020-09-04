const express = require('express')
const { body, validationResult } = require('express-validator');
const router = express.Router()

const User = require('../models/User')
// @route        POST api/users
// @desc         Register a user
// @ access      Public
router.post('/', [
    check('name', 'Plase add name').not().isEmpty(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 }),
    check('email', 'Please include a valid email').isEmail()
], (req, res) => { res.send(req.body) })

module.exports = router