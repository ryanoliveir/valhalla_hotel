const express = require('express');
const router = require('express').Router();

const bcrypt = require('bcryptjs');



router.use(express.urlencoded({extended: true}))
router.use(express.json())


router.post('/', (req, res) =>{
    
})