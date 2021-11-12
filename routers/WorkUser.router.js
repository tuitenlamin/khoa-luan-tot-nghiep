const express = require("express");
const workUserRouter = express.Router();
const { authenticate } = require ("../middlewares/Authen/authenticate");
const {createWorkUser,DetailUserWork,DetailAccount,getUserPostWork,DeleteUser,updateWorkUser,getAllWorkUser} = require("../controller/UserWork.controler")

workUserRouter.post("/createWork-user",authenticate,createWorkUser);
workUserRouter.get("/get-Work-user",authenticate,DetailAccount);
workUserRouter.get("/get-all-admin",getAllWorkUser);
workUserRouter.get("/get-detail-user-work/:id",DetailUserWork);
workUserRouter.get("/get-all-Work-user",getUserPostWork);
workUserRouter.delete("/delete-work-user/:id",authenticate,DeleteUser);
workUserRouter.put("/update-work-user/:id",authenticate,updateWorkUser);
module.exports = {
    workUserRouter
}