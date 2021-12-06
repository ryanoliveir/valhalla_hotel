const express = require('express')
const { route } = require('./login')
const router = require('express').Router()


const path = process.cwd()

router.use(express.urlencoded({extended: true}))
router.use(express.static(path))
router.use(express.json())

router.get('/nova', (req, res) => {
    res.sendFile(path + '/public/pages/inserir_page/inserir.html')
})

router.get('/nova', (req, res) => {
    res.sendFile(path + '/public/pages/inserir_page/inserir.html')
})




router.get('/remover', (req, res) => {
    res.sendFile(path + '/public/pages/excluir_page/excluir.html')
})

module.exports = router


