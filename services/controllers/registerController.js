const express = require('express');
const router = require('express').Router();
const database = require('../../database/db')
const User = require('../../database/models/modelUser/user')
const Hospede = require('../../database/models/modelHospede/hospede')
const bcrypt = require('bcryptjs');

const path = process.cwd()

router.use(express.urlencoded({extended: true}))
router.use(express.static(path))
router.use(express.json())


router.post('/', async (req, res) => {
    const {nome, email, password} = req.body

    const registerUser = async () => {  
        let passHash = await bcrypt.hash(String(password),10)


        User.create({
            email: email,
            pass: passHash,
        })

        await database.sync()
        const user = await User.findOne({where: { email: email}})

        Hospede.create({
            nome: nome,
            nascimento: null,
            numero_quarto: null,
            cpf: null,
            quantidade_pessoas: null,
            usuario: user.id_user
        })

        await database.sync(); 

        req.session.userid = user.id_user

    }
    
    await registerUser()
    
    res.status(200).end()
})



module.exports = router
