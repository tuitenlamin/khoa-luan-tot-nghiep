const express = require("express");
const typeWorkCompanyRouter = express.Router();
const {CreateType} = require("../controller/companytypeworks.controller");

typeWorkCompanyRouter.post("/create-type",CreateType);
module.exports = {typeWorkCompanyRouter}