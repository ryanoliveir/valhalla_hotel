const sessions = require('express-session')
const config = require('./auth')


module.exports = sessions({
    secret: config.secret,
    saveUninitialized: true,
    cookie: {maxAge: 1800000},
    resave: false
})