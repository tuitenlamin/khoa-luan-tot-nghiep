const express = require("express");
const filecvRouter = express.Router();
const {createFileCv,getAllCV,updateCV,deleCV,detailCV} = require("../controller/fileCV.controller");
const { authenticate } = require ("../middlewares/Authen/authenticate");
const { authorize } = require ("../middlewares/Authen/authorize");

filecvRouter.post("/createCV",authenticate,authorize(["UNGVIEN"]),createFileCv);
filecvRouter.get("/list-FileCV",authenticate,getAllCV);
filecvRouter.get("/detail-FileCV/:id",detailCV);
filecvRouter.put("/update-FileCV/:id",authenticate,authorize(["UNGVIEN", "NHATUYENDUNG"]),updateCV);
filecvRouter.delete("/delete-FileCV/:id",authenticate,authorize(["UNGVIEN", "NHATUYENDUNG"]),deleCV);
module.exports = {
    filecvRouter
}
