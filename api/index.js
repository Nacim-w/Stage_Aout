import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import doctorRoute from "./routes/doctor.js";
import cookieParser from "cookie-parser";



const app = express();
dotenv.config();
const connect = async ()=>{
try{
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongoDB");
}
catch(error){
    throw error;
}
}

//middlewares
app.use(cookieParser());
app.use(express.json())
app.use("/api/auth",authRoute);
app.use("/api/user",userRoute);
app.use("/api/doctor",doctorRoute);




app.listen(8800,()=>
{
    connect();
    console.log("Connected to backend");
});
