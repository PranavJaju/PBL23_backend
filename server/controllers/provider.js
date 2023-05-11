const Provider = require("../models/provider");
const SignUp = async(req,res)=>{
    try{
        const {name,email,password,mobile,address} = req.body;
        if(!name || !email || !password || !mobile || !address){
            res.send("Enter all fields");
        }
        const NewProvider = new Provider({
            name,email,mobile,address,password,
            location:{
                type:"Point",
                coordinates: [parseFloat(req.body.lat),parseFloat(req.body.long)],
            }
        })
        const SaveProvider = await NewProvider.save();
        const token = await SaveProvider.generateAuthToken();
        console.log(token);
        res.send(SaveProvider);
    }catch(err){res.status(500).send(err)}
}

const SignIn = async(req,res)=>{
    try{
        const email = req.body.email;
        const password = req.body.password;
        if(!email || !password){
            res.send("Enter All the fields");
        }
        else{
            const UserFound = await Provider.findOne({email});
            if(UserFound == null){
                res.send("User Doesn't Exists");
            }
            else{
                if(password===UserFound.password){
                    const token = await UserFound.generateAuthToken();
                    console.log(token);
                    res.send(UserFound);
                }
                else{
                    res.send("Invalid Details");
                }
            }
        }
    }catch(err){res.send(err)}
}
const DonateFood = async(req,res)=>{
    try{}catch(err){res.send(err)};
}
module.exports = {SignUp,SignIn};