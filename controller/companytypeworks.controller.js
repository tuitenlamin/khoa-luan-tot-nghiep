const sequelize = require("sequelize");
const { companyTypeWork } = require("../models");

const CreateType = async (req, res) => {
    const { companyID,typeWorkID } = req.body;
    try {
      const newCompany = await companyTypeWork.create({
        companyID,typeWorkID
      });
      res.status(200).send(newCompany);
    } catch (err) {
      res.status(500).send(err);
      console.log(err);
    }
  };

  module.exports ={
    CreateType
  }