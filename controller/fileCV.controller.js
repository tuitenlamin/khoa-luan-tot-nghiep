const sequelize = require("sequelize");
const { FileCV, Users } = require("../models");

const createFileCv = async (req, res) => {
  const {user} = req;
  console.log("user" , user)
  // tìm user theo account
  const userAcc = user.account;
  // lấy id từ user tìm thấy
  console.log("DASDAS",userAcc);
  const followAcc = user.id;
  console.log("followAcc",followAcc)
  const {
    name,
    numberPhone,
    address,
    experience,
    email,
    nation,
    description,
    skill,
    foreiginLanguage,
    education,
    sex,
    careerGoals,
    DateofBirth,
    Certificate,
  } = req.body;
  try {
    const createCV = await FileCV.create({
      name,
      UserFileCV:followAcc,
      numberPhone,
      address,
      experience,
      email,
      nation,
      description,
      skill,
      foreiginLanguage,
      education,
      sex,
      careerGoals,
      DateofBirth,
      Certificate,
    });
    res.status(201).send(createCV);
    console.log(createCV);
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
  }
};
const getAllCV = async (req, res) => {
  const getALl = await FileCV.findAll({
    include: [
      {
        model: Users,
        as: "CvFileUser",
      },
    ],
  });
  try {
    if (getALl) {
      res.status(201).send(getALl);
    }
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
  }
};
const updateCV = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    numberPhone,
    address,
    experience,
    email,
    nation,
    description,
    skill,
    foreiginLanguage,
    education,
    sex,
    careerGoals,
    DateofBirth,
    Certificate,
  } = req.body;
  try {
    await FileCV.update(
      {
        name,
        numberPhone,
        address,
        experience,
        email,
        nation,
        description,
        skill,
        foreiginLanguage,
        education,
        sex,
        careerGoals,
        DateofBirth,
        Certificate,
      },
      { where: { id } }
    );
    res.status(201).send(`Update thành công ${id}`);
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
  }
};
const deleCV = async (req, res) => {
  const { id } = req.params;

  try {
    await FileCV.destroy({ where: { id } });
    res.status(200).send(`Xóa  thành công ${id}`);
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
  }
};
const detailCV = async (req, res) => {
  const { id } = req.params;
  try {
    await FileCV.findOne({ where: { id } });
    res.status(200).send(`${id}`);
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
  }
};
module.exports = {
  createFileCv,
  getAllCV,
  updateCV,
  deleCV,
  detailCV
};
