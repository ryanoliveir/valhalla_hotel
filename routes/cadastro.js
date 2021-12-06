const express = require('express')
const { route } = require('./login')
const router = require('express').Router()

const path = process.cwd()



router.use(express.urlencoded({extended: true}))
router.use(express.static(path))
router.use(express.json())


router.get('/', (req, res) => {
    res.sendFile(path + '/public/pages/cadastro_page/cadastro.html')
})

module.exports = router