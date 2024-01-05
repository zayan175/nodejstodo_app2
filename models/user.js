const mongoose = require ('mongoose')
const schema = new mongoose.Schema({
    name : {
        type : String,
        unique : true,
        required : true,
    },

    email : {
        type : String,
        unique : true,
        required : true,
    },
    password : {
        type : String,
        select : false,
    },
    createdAt :{
        type : Date,
        default : Date.now,
    }
})

const  user = new mongoose.model('users', schema)
module.exports = user;