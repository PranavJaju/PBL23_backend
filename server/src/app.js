const express = require('express');
const app = express();
const cors = require("cors")
const port = process.env.PORT || 5000;
const dotenv = require("dotenv")
dotenv.config()
require("../db/connection");
const PRoutes = require("../routes/ProviderRoutes");
const CRoutes = require("../routes/CollectorRoutes");
const MailRoute = require("../routes/Mail");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(CRoutes);
app.use(cors());
app.use(PRoutes);
app.use(MailRoute);
app.listen(port,()=>{
    console.log(`Connected to port : ${port}`);
})
