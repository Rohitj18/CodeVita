const express = require("express")
const cors = require("cors");
const app = express()
require("dotenv").config();


const userRoutes = require("./routes/User");

const database = require("./config/database")
const PORT = process.env.PORT || 4000;


database.dbConnect();

//middleware
app.use(express.json());
app.use(
    cors({
        origin:"http://localhost:3000",
        credentials:true,
        methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
    })
);

app.use("/api/v1",userRoutes);

app.get("/",(req,res)=>{
    return res.json({
        success:true,
        message:"you server is up and running",
    })
});

app.listen(PORT,()=>{
    console.log(`app is running at port ${PORT}`);
})


