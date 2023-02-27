const express = require('express');
const app = express()
const port = process.env.PORT || 3000;
require("../db/connection");
const Collector = require("../models/collector");
const C_register = require("../routes/collector_register")
app.use(express.json())
app.use(C_register)
app.listen(port,()=>{
    console.log(`Connected to port : ${port}`);
})