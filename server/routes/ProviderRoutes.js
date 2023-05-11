const express = require("express");
const P_Routes = express.Router();
const {SignUp, SignIn} = require("../controllers/provider");
P_Routes.post("/SignUp",SignUp);
P_Routes.post("/SignIn",SignIn);

module.exports = P_Routes;