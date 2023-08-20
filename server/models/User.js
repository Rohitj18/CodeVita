const mongoose = require("mongoose")

const User = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        college:{
            type:String,
            required:true,
        },
        degree:{
            type:String,
            required:true,
        },
        semester:{
            type:Number,
            required:true,
            default:0,
        },
        email:{
            type:String,
            required:true,
        },
        phoneno:{
            type:Number,
            require:true,
        },
        date:{
            type:Date,
            default:Date.now()
        }
        
    }
);




module.exports = mongoose.model('User',User);