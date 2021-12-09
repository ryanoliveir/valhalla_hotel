const express = require('express');
const router = require('express').Router();

const autMiddleware = require('../middlewares/auth_autorization')
const path = process.cwd()


router.use(express.urlencoded({extended: true}))
router.use(express.static(path))
router.use(autMiddleware)
router.use(express.json())


router.get('/', (req, res) => {
    res.sendFile(path + '/public/pages/home_page/hotel.html')
})


module.exports = router