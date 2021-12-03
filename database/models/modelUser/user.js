const Sequelize = require('sequelize');
const database = require('../../db')

const User = database.define("usuarios",{
    id_user: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    email: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    pass: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    
},
{
    tableName: 'usuarios'
}    
)

module.exports = User;