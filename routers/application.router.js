const express = require("express");
const applicationRouter = express.Router();
const {createApplication,getApplication,getDetail} = require('../controller/application.controller');
const { authenticate } = require ("../middlewares/Authen/authenticate");
const { authorize } = require ("../middlewares/Authen/authorize");

applicationRouter.get("/getall-application",getApplication);
applicationRouter.post("/create-application",authenticate,authorize(["UNGVIEN"]),createApplication);
applicationRouter.get("/getdetail-application/:id",getDetail);

module.exports ={
    applicationRouter
}
