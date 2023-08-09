import mongoose from "mongoose";
const DoctorSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        unique:true,
        minLength:4,
    },
})
export default mongoose.model("Doctor", DoctorSchema);