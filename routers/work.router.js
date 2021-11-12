const express = require("express");
const workRouter = express.Router();
const { authenticate } = require ("../middlewares/Authen/authenticate");
const { authorize } = require ("../middlewares/Authen/authorize");
const {createWork,getAll,updateWork,deleWork,getAlla,getInforWork,DetailAccount,getAccountWork,UserApply,getUserPostWork, getWorkCompany} = require('../controller/work.controller');

workRouter.post("/createWork",authenticate,authorize(["ADMIN", "NHATUYENDUNG"]),createWork);
workRouter.put("/user-apply/:id",authenticate,UserApply);
workRouter.get("/list-work",getAll);
workRouter.put("/update-work/:id",authenticate,authorize(["ADMIN", "NHATUYENDUNG"]),updateWork);
workRouter.delete("/delete-work/:id",authenticate,authorize(["ADMIN", "NHATUYENDUNG"]),deleWork);
workRouter.get("/get-information-work/:id",getInforWork);
workRouter.get("/get-detail-infor-user/:id",authenticate,DetailAccount);
workRouter.get("/get-detail-work-account",authenticate,getAccountWork);
workRouter.get("/get-all-user-work",getUserPostWork);
workRouter.get("/getalla",getAlla);
workRouter.get("/get-work-company",authenticate,authorize(["NHATUYENDUNG"]),getWorkCompany);
module.exports = {
    workRouter
}


