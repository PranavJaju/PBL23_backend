const { error } = require("console");
const mongoose = require("mongoose")
const validator = require("validator")
const providerSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email already exists"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new error("Invalid E-mail id");
            }
        }

    },
    mobile:{
        type:Number,
        required:true,
        unique:[true,"User with this Number already exists"],
        min:1000000000,
        max:9999999999
    },
    password:{
        type: String,
        required: true,
        minlength: 4,
        maxlength: 16
    },
    cpassword:{
        type: String,
        required: true,
        minlength: 4,
        maxlength: 16
    },
    location:{
        type:{type:String},
        Coordinates:[]
    } 
})
providerSchema.index({location:"2dsphere"});
const Provider = new mongoose.model("Provider",providerSchema);
module.exports = Provider;