const mongoose = require ('mongoose')
const schema = new mongoose.Schema({
    title: {
        type : String,
        required : true,
    },

    description : {
        type : String,
        required : true,
    },
    isCompleted: {
        type : Boolean,
        default : false,
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "users",
        required : true,

    },

    createdAt :{
        type : Date,
        default : Date.now,
    }
})

const  task = new mongoose.model('Task', schema)
module.exports = task;