const Collector = require("../models/collector")
const signup = async(req,res)=>{
    try{
        const NewCollector = new Collector({
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.number,
            password: req.body.pass
            
        })
        const CollectorCreated = await NewCollector.save();
       const token = await CollectorCreated.generateAuthToken();
       console.log(token);
        res.send(CollectorCreated);
    }
    catch(err){
        res.send(err);
    }
}
const signin = async(req,res)=>{
    try{const {email,password} = req.body;
    if(!email || !password){
        res.send("Enter all the fields");
    }
    else{
        const emailfind = await Collector.findOne({email});
        if(emailfind == null){
            res.send("User Doesn't Exist");
        }else{
        if(password===emailfind.password){
            const token = await emailfind.generateAuthToken();
             console.log(token);
            res.send(emailfind);
        }else{
            res.send("Invalid Details");
        }
    }
    }}
    catch(err){
        res.send(err);
    }
}
const search = async(req,res)=>{
    try {
        const name = req.params.name;
        const tag = req.params.name;
        // const find = await  
    } catch (error) {
        res.send(error);
    }
}
module.exports = {signup,signin};