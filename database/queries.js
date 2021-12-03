const database = require('./db');
const modelUser = require('./models/modelUser/user')
const modelHospede = require('./models/modelHospede/hospede')
const modelReserva = require('./models/modelReserva/reserva')
const connetionVerify = async function (resquest, response) {
    try{
        await database.authenticate();
        await database.sync(); 
        response.json({'message': "Connection successful!!!"}); 
    }catch(err){
        console.error("Connetion database error", err);
        response.json({'message': "Connection Failed!!!"});
    }

}


module.exports = {
    connetionVerify,
}