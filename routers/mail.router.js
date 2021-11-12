const express = require("express");
const mailRouter = express.Router();
const {email,SendEmail} = require("../controller/mail.controller");
const { authenticate } = require ("../middlewares/Authen/authenticate");
const { authorize } = require ("../middlewares/Authen/authorize");

mailRouter.post("/send-mail",authenticate,email);
mailRouter.post("/send1-mail",authenticate,SendEmail);
module.exports = {
    mailRouter
}
