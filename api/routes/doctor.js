import express from "express";
import { registerd } from "../controllers/doctor.js";

const router = express.Router();
router.get("/",(req,res)=>{
    res.send("hello this is doctors endpoint");
})
router.post("/registerd",registerd)

export default router;


