const express = require('express');
const app = express()
const port = process.env.PORT || 3000;
require("../db/connection");
const Collector = require("../models/collector");

app.listen(port,()=>{
    console.log(`Connected to port : ${port}`);
})