const express = require('express');
const app = express()
const port = process.env.PORT || 3000;
require("../db/connection");

const PRoutes = require("../routes/ProviderRoutes");
const CRoutes = require("../routes/CollectorRoutes");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(CRoutes);
app.use(PRoutes);
app.listen(port,()=>{
    console.log(`Connected to port : ${port}`);
})