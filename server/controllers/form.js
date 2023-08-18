const User = require("../models/User");

exports.createUser = async(req,res)=>{
    try {
        const {name,degree,email,semester,phoneno,college,date} = req.body;
        if(!name && !degree && !email && !semester && !phoneno && !college && !date ){
            res.status(401).json({
                success:false,
                message:"All fields required",
            })
        }
        const data = await User.create({name,degree,email,semester,phoneno,college,date});
        console.log(data);
        if(!data){
            res.status(403).json({
                success:false,
                message:"Something went wrong while creating data",
            })
        }
        res.status(200).json({
            success:true,
            data:data,
            message:"User created successfully"
        })
    } catch (error) {
        console.log(error);
        console.log(error.message);
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

exports.getUser = async(req,res) =>{
    try {
        const {email} = req.body;
        const data = await User.findOne({email:email});
        if(!data){
            res.status(403).json({
                success:false,
                message:"User not found",
            })
        }
        res.status(200).json({
            success:true,
            data:data,
            message:"User details fetched successfullt"
        })
    } catch (error) {
        console.log(error);
        console.log(error.message);
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}