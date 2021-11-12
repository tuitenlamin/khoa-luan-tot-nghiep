const sequelize = require("sequelize");
const { TypeWork, Company,Work } = require("../models");
const { Op } = require("sequelize");
const CreateTypeWork = async (req, res) => {
  const { titleWork,addressWork, levelWork } = req.body;
  try {
    const newType = await TypeWork.create({
      titleWork,addressWork, levelWork
    });
    res.status(200).send(newType);
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
  }
};
const getALlTypeWork = async(req,res)=>{
  const getAll = await TypeWork.findAll();
  try {
    if (getAll) {
      res.status(201).send(getAll);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
const getDetailTypeWork = async(req,res)=>{
  const {id} = req.params;
  const getAll = await TypeWork.findOne({
    where:{
      id
    }
  });
  try {
    if (getAll) {
      res.status(201).send(getAll);
      console.log(getAll);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
const getUpdateTypeWork = async(req,res)=>{
  const {id} = req.params;
  const { titleWork,addressWork, levelWork } = req.body;
  try {
    await TypeWork.update(
      { titleWork,addressWork, levelWork },
      {where:{id}},
    );
    res.status(201).send(`Thành công${id}`);
  } catch (err) {
    res.status(500).send(err);
  }
};
const DeleTypeWork = async (req, res) => {
  const { id } = req.params;
  try {
    await TypeWork.destroy({
      where: { id },
    });
    res.status(200).send(`Xóa thành công ${id}`);
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
  }
};
const getAllTypeCompany = async (req, res) => {
  const getAll = await TypeWork.findAll({
    include: [
      {
        model: Company,
        as: "workType",
      },
    ],
  });
  try {
    if (getAll) {
      res.status(201).send(getAll);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
const getDetailFlKeyWork = async(req,res) => {
  const {titleWork} = req.query; 
  try {
    if (titleWork) {
      const getAll = await TypeWork.findAll({
        where:{
          titleWork:{
            [Op.like]: `%${titleWork}%`,
          }
        },
        include: [
          {
            model: Work,
            as: "worktype",
          },
          
        ],
      });
      res.status(200).send(getAll);
    }
    else {
      const getAll = await TypeWork.findAll();
      res.status(200).send(getAll);
    }
  } catch (err) {
    res.status(500).send(err);
  }
}
module.exports = {
  CreateTypeWork,
  getALlTypeWork,
  DeleTypeWork,
  getAllTypeCompany,
  getDetailFlKeyWork,
  getDetailTypeWork,
  getUpdateTypeWork
};
