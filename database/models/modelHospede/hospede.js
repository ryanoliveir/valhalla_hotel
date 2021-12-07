const Sequelize = require('sequelize')
const database = require('../../db')

const Hospede = database.define("hospedes", {
    id_hospede: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },  
    nome: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    nascimento: {
        type: Sequelize.DATE
    },
    numero_quarto: {
        type: Sequelize.INTEGER
    },
    cpf: {
        type: Sequelize.STRING(11)
    },
    quantidade_pessoas: {
        type: Sequelize.INTEGER
    },
    usuario: {
        type: Sequelize.INTEGER
    }
},  
{
    tableName: "hospedes",
})


module.exports = Hospede