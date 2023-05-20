
const Provider = require("../models/provider");
const jwt = require("jsonwebtoken");
const AuthProvider = async(req,res,next)=>{
   try{
    const token = req.cookie.jwt;
    const verifyUser = jwt.verify(token,process.env.JWT_KEY);
    req.user = await Provider.findOne({_id:verifyUser._id});
    next();
   }catch(err){
    res.send(err+"Authentication failed");
   }
}
module.exports = AuthProvider;