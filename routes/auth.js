const express = require('express')
const { check, validationResult } = require('express-validator');
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config');
const User = require('../models/User');
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
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body

    try {
        let user = await User.findOne({ emial })
        if (!user) {
            return res.status(400).json({ msg: 'Invaild Credentials' })
        }
    }
    catch (err) { }
})

module.exports = router