const express = require('express');
const router = require('express').Router();


const path = process.cwd()


router.use(express.urlencoded({extended: true}))
router.use(express.static(path))
router.use(express.json())


router.get('/', (req, res) => {
    res.sendFile(path + '/public/pages/home_page/hotel.html')
})


module.exports = router