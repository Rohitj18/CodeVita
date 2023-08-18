const mongoose = require('mongoose');
require("dotenv").config();

exports.dbConnect= ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log("connected successfully");
    }).catch((err)=>{
        console.log("DB connection failed");
        console.log(err);
        process.exit(1);
    });
    
};