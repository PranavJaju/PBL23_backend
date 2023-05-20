const express = require("express")
const {signup,signin,search} = require("../controllers/collector");
const Auth = require("../middlewares/CAuth");
const C_Routes = express.Router();
C_Routes.post("/registerR",signup);
C_Routes.post("/loginR",signin);
C_Routes.get("/find/:name",Auth,search)
module.exports = C_Routes;