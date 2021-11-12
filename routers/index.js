const express = require('express');

const {userRouter} = require('./user.router');
const {companyRouter} = require('./company.router');
const {newsRouter} = require('./news.router');
const {filecvRouter} = require('./fileCV.router');
const {workRouter} = require('./work.router');
const {typeWorkRouter} = require('./typeWork.router');
const {typeWorkCompanyRouter} = require('./typeWorkCompany.router');
const {applicationRouter} = require('./application.router');
const {mailRouter} = require('./mail.router');
const {workUserRouter} = require('./WorkUser.router')

const rootRouter = express.Router();
rootRouter.use("/work-user",workUserRouter);
rootRouter.use("/mail",mailRouter);
rootRouter.use("/users",userRouter);
rootRouter.use("/company",companyRouter);
rootRouter.use("/news",newsRouter);
rootRouter.use("/filecv",filecvRouter);
rootRouter.use("/work",workRouter);
rootRouter.use("/type-work",typeWorkRouter);
rootRouter.use("/type-work-company",typeWorkCompanyRouter);
rootRouter.use("/application",applicationRouter);
module.exports={
    rootRouter,
}