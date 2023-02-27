const mongoose = require("mongoose");
mongoose.set('strictQuery', false)
mongoose.connect("mongodb://localhost:27017/PBL_DB").then(()=>{
    console.log("connection with DataBase")
}).catch((err)=>{
    console.log(err)
});
