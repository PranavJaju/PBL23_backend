const express = require("express")
const {signup,signin} = require("../controllers/collector");
const C_Routes = express.Router();
C_Routes.post("/register",signup);
C_Routes.post("/login",signin);
module.exports = C_Routes;