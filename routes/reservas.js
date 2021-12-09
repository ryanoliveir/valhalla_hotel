const express = require('express')
const router = require('express').Router()

const autMiddleware = require('../middlewares/auth_autorization')

const path = process.cwd()

router.use(express.urlencoded({extended: true}))
router.use(express.static(path))
router.use(autMiddleware)
router.use(express.json())


router.get('/nova', (req, res) => {
    res.sendFile(path + '/public/pages/inserir_page/inserir.html')
})


module.exports = router


