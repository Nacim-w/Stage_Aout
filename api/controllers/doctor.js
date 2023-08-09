import Doctor from "../models/Doctor.js";
export const registerd = async (req,res,next)=>{
    try{
        const newDoctor = new Doctor(
            {
                username:req.body.username,
                password:req.body.password,
            }
        );
        await newDoctor.save();
        res.status(200).send('doctor has been created');
    }
    catch(error){
        next(error);
    }
}