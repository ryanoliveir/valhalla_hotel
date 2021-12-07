const sessions = require('express-session')
const config = require('./auth')


module.exports = sessions({
    secret: config.secret,
    saveUninitialized: true,
    cookie: {maxAge: config.cookie},
    resave: false
})