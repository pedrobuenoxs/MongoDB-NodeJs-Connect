const mongoose = require("mongoose");

//Configurando mongoose

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/db1").then(() => {
    console.log("Conectado com sucesso!")
}).catch((erro) =>{
    console.log("Problema ao se conectar..." + erro)
})

//Model - Usuários
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    nome: {
        type: String,
        require: true
    },
    sobrenome: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true
    }

})

//Colection
const User = mongoose.model('usuarios',UserSchema)


//Add registo na collection

new User({
    nome: "Pedro",
    sobrenome: "Bueno",
    idade: 23,
    email: "pedro.bueno@gmail.com"    
}).save().then(() => {
    console.log("usuário criado com sucesso")
}).catch((err) => {
    console.log("erro ao cadastrar usuário" + err)
})

