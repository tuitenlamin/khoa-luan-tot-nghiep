const express = require("express");
const companyRouter = express.Router();
const {CreateCompany,getDetailAccountCompany,getAllCompany,updateCompany,DeleCompany,UploadAvatar,loginCompany,getOneCompnay, geCompanyUserApply,getDetailCompany} = require("../controller/company.controller");
const { authenticate } = require ("../middlewares/Authen/authenticate");
const { authorize } = require ("../middlewares/Authen/authorize");
const {uploadImage} = require("../middlewares/upload/upload-image");


companyRouter.get("/get-one-company",authenticate,getOneCompnay);
companyRouter.get("/get-detail-company/:id",getDetailCompany);
companyRouter.post("/login-company",loginCompany);
companyRouter.post("/createCompany",uploadImage("company"),CreateCompany);
companyRouter.get("/getAllCompany",getAllCompany);
companyRouter.get("/getCompanyUserApply",authenticate,geCompanyUserApply);
companyRouter.get("/get-detail-account-company",authenticate,getDetailAccountCompany);
companyRouter.put("/updateCompany/:id",authenticate,authorize(["ADMIN", "NHATUYENDUNG"]),updateCompany);
companyRouter.delete("/deleCompany/:id",authenticate,authorize(["ADMIN"]),DeleCompany);
companyRouter.post("/image-company",authenticate,uploadImage("company"), UploadAvatar);
module.exports = {
    companyRouter
}