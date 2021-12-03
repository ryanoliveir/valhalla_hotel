const Sequelize = require('sequelize')
const database = require('../../db')

const Reserva = database.define("reservas",{
    id_reserva: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true,
    },
    tipo_quarto: {
        type: Sequelize.STRING(50)
    },
    data_reserva: {
        type: Sequelize.DATE,
    },
    hospede: {
        type: Sequelize.INTEGER,
    }
},
{
    tableName: 'reservas'
})

module.exports = Reserva