const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = function (req, res, next) {
    //Get token from header
    const token = req.header('x-auth-token')

    //Chcek if not toekn

    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' })
    }

}