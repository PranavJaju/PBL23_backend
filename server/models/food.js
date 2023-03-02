const { error } = require("console");
const mongoose = require("mongoose")
const validator = require("validator")
const foodSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
})
