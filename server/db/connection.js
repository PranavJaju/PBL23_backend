const mongoose = require("mongoose");
mongoose.set('strictQuery', false)
mongoose.connect("mongodb://PBL2023:PBL2023@ac-iuzwt1e-shard-00-00.1qkhhfz.mongodb.net:27017,ac-iuzwt1e-shard-00-01.1qkhhfz.mongodb.net:27017,ac-iuzwt1e-shard-00-02.1qkhhfz.mongodb.net:27017/PBL-Database?ssl=true&replicaSet=atlas-k649no-shard-0&authSource=admin&retryWrites=true&w=majority").then(()=>{
    console.log(`connection with DataBase `)
}).catch((err)=>{
    console.log(err)
});
