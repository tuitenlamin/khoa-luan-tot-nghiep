const sequelize = require("sequelize");
const { Company, TypeWork } = require("../models");
const { Users,Work } = require("../models");
var gravatar = require('gravatar');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const CreateCompany = async (req, res) => {
  const { account, password,typeCompanyWork,name, address, nation, webstie, email, numberPhone } = req.body;
  try {
    const avatarUrl = gravatar.url(email);
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);
    const {file} = req; 
    const urlImage = `http://localhost:5000/${file.path}`;
    const newCompany = await Company.create({
      account,
      password,
      typeCompanyWork,
      name, 
      address,
      nation,
      webstie,
      email,
      numberPhone,
      avatar: urlImage,avatarUrl
    });
    res.status(200).send(newCompany);
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
  }
};
const loginCompany =  async (req,res) =>{
  const { account, password } = req.body;
  const user = await Company.findOne({
    where: {
      account
    },
  });
  // console.log("user",user)
  if (user) {
    // const isAuth = bcrypt.compareSync(password, user.password);
    if (user) {
      const token = jwt.sign(
        { account: user.account, type: user.type, id: user.id, email: user.email, },"tan-phat-99",{ expiresIn: 60 * 60 }
      );
      res.status(200).send({ message: "Đăng nhập thành công", token ,user});
      
    } 
    else {
      res.status(500).send({ message: "Tài khoản hoặc mật khẩu không đúng1" });
      console.log(err)
    }
  } 
  else{
    res.status(400).send({ message: "Tài khoản hoặc mật khẩu không đúng" });
    
  }
};
const getAllCompany = async (req, res) => {
  const getAll = await Company.findAll({
    include: [
      {
        model: TypeWork,
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
const getDetailCompany = async (req, res) => {
  const {id} = req.params;
  const DetailCompany = await Company.findOne({
    where:{
      id
    }
  });
  try {
    if (DetailCompany) {
      res.status(201).send(DetailCompany);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
const getOneCompnay=async(req,res)=>{
  // const {user} = req;
  // const get = 
  Company.findOne({ where: { id: req.params.id },include:["fromcompany"] }).then(data => {
    res.json({ data: data })
}).catch(er => {
    throw er;
})
}
const updateCompany = async (req, res) => {
  const { id } = req.params;
  const {  account, password,typeCompanyWork,name, address, nation, webstie, email, numberPhone } = req.body;
  try {
    await Company.update(
      {  account, password,typeCompanyWork,name, address, nation, webstie, email, numberPhone },
      { where: { id } }
    );
    res.status(201).send(`Update thành công ${id}`);
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
  }
};
const DeleCompany = async (req, res) => {
  const { id } = req.params;
  
  try {
    await Company.destroy({
      where: { id },
    });
    res.status(200).send(`Xóa thành công ${id}`);
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
  }
};
const UploadAvatar = async(req,res)=>{
  // const file = req.file;
  const {file} = req; 
  const urlImage = `http://localhost:5000/${file.path}`;
  const {user} = req;
  const userFound = await Company.create({});
    userFound.avatar = urlImage;
    await userFound.save();
    res.send(userFound);
};
const getDetailAccountCompany = async(req,res)=>{
  const {user} = req;
  try{
  const DetailCompany =  await Company.findOne({
    where:{
      account : user.account,
      id:user.id,
      }, 
    });
    res.status(200).send(DetailCompany);
  }
  catch (error) {
    res.status(500).send(error);
  }
};
const geCompanyUserApply=async(req,res)=>{
  const {user} = req;
  Company.findAll(
    { where: { id: user.id },
    include:[{model: Work, as: "fromcompany",include:[{model:Users,as:"userapply"}]}] })
    .then(data => {

    res.json({ data: data })
}).catch(er => {
    throw er;
})
};

module.exports = {
  CreateCompany,
  getAllCompany,
  updateCompany,
  DeleCompany,
  UploadAvatar,
  getDetailAccountCompany,
  getDetailCompany,
  loginCompany,
  getOneCompnay,
  geCompanyUserApply
};
