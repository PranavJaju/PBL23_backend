const express = require("express");
const CAuth = require("../middlewares/CAuth");
const router = express.Router();
const { sendMail } = require("../controllers/mail");

router.route("/mail/name/email/food").post(CAuth,sendMail);

module.exports = router;
