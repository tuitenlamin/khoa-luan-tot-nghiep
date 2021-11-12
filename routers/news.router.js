const express = require("express");
const newsRouter = express.Router();
const {createNews,getALlNews,updateNews,deleNews,Uploadimage,getDetailNews} = require("../controller/news.controller");
const { authenticate } = require("../middlewares/Authen/authenticate");
const { authorize } = require ("../middlewares/Authen/authorize");
const {uploadImage} = require("../middlewares/upload/upload-image");
// ,authorize(["ADMIN"])
newsRouter.post("/createNews",authenticate,authorize(["ADMIN"]),uploadImage("news"),createNews);
newsRouter.get("/load-list",getALlNews);
newsRouter.get("/load-list/:id",getDetailNews);
newsRouter.put("/update/:id",authenticate,authorize(["ADMIN"]),updateNews);
newsRouter.delete("/delete/:id",authenticate,authorize(["ADMIN"]),deleNews);
newsRouter.post("/upload-news/:id",authenticate,authorize(["ADMIN"]), uploadImage("news"), Uploadimage);


module.exports ={
    newsRouter
}