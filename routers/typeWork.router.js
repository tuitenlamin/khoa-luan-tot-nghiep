const express = require("express");
const typeWorkRouter = express.Router();
const {CreateTypeWork,getALlTypeWork,getUpdateTypeWork,DeleTypeWork,getAllTypeCompany,getDetailFlKeyWork,getDetailTypeWork} = require("../controller/typeWork.controller");
const { authenticate } = require ("../middlewares/Authen/authenticate");
const { authorize } = require ("../middlewares/Authen/authorize");

typeWorkRouter.post("/create-type-work",authenticate,authorize(["ADMIN"]),CreateTypeWork);
typeWorkRouter.get("/get-all-type-work",getALlTypeWork);
typeWorkRouter.get("/get-detail-type-work/:id",getDetailTypeWork);
typeWorkRouter.get("/get-all-type-work-company",getAllTypeCompany);
typeWorkRouter.put("/update-type-work/:id",getUpdateTypeWork);
typeWorkRouter.delete("/delete-type-work/:id",authenticate,authorize(["ADMIN"]),DeleTypeWork);
typeWorkRouter.get("/get-detail-key-work",getDetailFlKeyWork);
module.exports = {
    typeWorkRouter
}
