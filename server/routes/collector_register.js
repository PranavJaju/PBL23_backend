const express = require("express")
const AddCollector = require("../models/collector")
const C_register = express.Router();
C_register.post("/register",async(req,res)=>{
    try{
        const NewCollector = AddCollector({
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.number,
            password: req.body.pass,
            cpassword: req.body.cpass
        })
        console.log("hello")
        const CollectorCreated = await NewCollector.save();
       
        res.send(CollectorCreated);
    }
    catch(err){
        res.send(err);
    }
})
module.exports = C_register;