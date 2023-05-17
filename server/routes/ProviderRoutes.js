const express = require("express");
const Auth = require("../middlewares/ShopAuth");
const P_Routes = express.Router();
const {SignUp, SignIn , DonateFood,SeeItems,Search} = require("../controllers/provider");
P_Routes.post("/SignUp",SignUp);
P_Routes.post("/SignIn",SignIn);
P_Routes.post("/AddItem",Auth,DonateFood);
P_Routes.get("/SeeItems",Auth,SeeItems);
P_Routes.get("/Search/:name",Auth,Search);


module.exports = P_Routes;