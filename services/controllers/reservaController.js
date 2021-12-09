const express = require('express')
const router = require('express').Router()
const database = require('../../database/db')
const User = require('../../database/models/modelUser/user')
const Hospede = require('../../database/models/modelHospede/hospede')
const Reserva = require('../../database/models/modelReserva/reserva')



router.use(express.urlencoded({extended: true}))
router.use(express.json())



router.post('/insert', async (req, res) => {
    const {numero_pessoas, quarto, data} = req.body
    const session = req.session;
    console.log(session.userid)
    const registerReserva = async () => {
        await database.sync()
        const user =  await User.findByPk(session.userid)

        if(!user) {
            return res.json({code: 401, error: "user"})
        }

        Reserva.create({
            tipo_quarto: quarto,
            data_reserva: data,
            hospede: user.id_user
        })


        await database.sync()

        const hospedeUpdate = await Hospede.findOne({where: {usuario: session.userid}})
        hospedeUpdate.quantidade_pessoas = numero_pessoas
        hospedeUpdate.save()

        await database.sync()
    }

    await registerReserva()

    res.status(200).end()
})


router.get('/remove', async (req, res) => {
    const session = req.session

    const reserva = await Reserva.findOne({where: {hospede: session.userid}})
    await reserva.destroy()
    await database.sync()

    res.json({status:200}).end()
})



module.exports = router