const express = require("express");
const {getUserApplied,Register,login,getAllUser,DeleteUser,updateUser,UploadAvatar,getAccountUser,getDetailUser,Email} = require("../controller/users.controller");
const { authenticate } = require ("../middlewares/Authen/authenticate");
const { authorize } = require ("../middlewares/Authen/authorize");
const {uploadImage} = require("../middlewares/upload/upload-image");
const {videoUpload} = require("../middlewares/upload/upload-video");
const userRouter = express.Router();

userRouter.post("/send-email",authenticate,Email);
userRouter.post("/register",uploadImage("avatar"),Register);
userRouter.get("/user-applied",authenticate,getUserApplied);
userRouter.get("/user-detail/:id",getDetailUser);
userRouter.post("/login",login);
userRouter.get("/getAllUsers",getAllUser);
userRouter.delete("/deleUsers/:id",authenticate,authorize(["ADMIN"]),DeleteUser);
userRouter.put("/updateUsers/:id",authenticate,authorize(["ADMIN", "UNGVIEN"]),updateUser);
userRouter.post("/upload-avatar",authenticate,authorize(["ADMIN", "NHATUYENDUNG", "UNGVIEN"]), uploadImage("avatar"), UploadAvatar);
userRouter.get("/get-information-user",authenticate,getAccountUser);
userRouter.post('/uploadVideo', videoUpload.single('video'), (req, res) => {
    res.send(req.file)
 }, (error, req, res, next) => {
     res.status(400).send({ error: error.message })
 })
module.exports = {userRouter}
