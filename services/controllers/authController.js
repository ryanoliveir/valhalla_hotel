const express = require('express')
const router = require('express').Router()
const User = require('../../database/models/modelUser/user')
const bcrypt = require('bcryptjs')

const path = process.cwd()

router.use(express.urlencoded({extended: true}))
router.use(express.static(path))
router.use(express.json())

router.post('/authenticate', async (req, res) => {
    const {email, password} = req.body

    const user = await User.findOne({where: {email: email}})

    if(!user){
        req.session.userid = null
        return res.json({code: 401, error: "user"})
        
    }


    if(!await bcrypt.compare(password, user.pass)){
        return res.json({code: 401, error: "password"})
    }

    
    req.session.userid = user.id_usuario
    res.json({code: 200})
})


router.get('/logout', async (req, res) => {
    req.session.destroy()
    res.redirect('/login')
})



module.exports = router





