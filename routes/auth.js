const express = require('express')
const { check, validationResult } = require('express-validator');
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const router = express.Router()

// @route        GET api/auth
// @desc         Get logged in user
// @ access      Private
router.get('/', (req, res) => { res.send('Get logged in user') })

// @route        POST api/auth
// @desc         Auth user and get token
// @ access      Public
router.post('/', [check('password', 'Password is required').exists(),
check('email', 'Please include a valid email').isEmail()
], (req, res) => { res.send('Log in user') })

module.exports = router