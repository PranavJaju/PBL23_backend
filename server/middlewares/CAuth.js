const Collector = require("../models/collector");
const jwt = require("jsonwebtoken");
const AuthCollector = async(req,res,next)=>{
   try{
    const token = req.cookie.jwt;
    const verifyUser = jwt.verify(token,process.env.JWT_KEY);
    req.user = await Collector.findOne({_id:verifyUser._id});
    next();
   }catch(err){
    res.send(err+"Authentication failed");
   }
}
module.exports = AuthCollector;