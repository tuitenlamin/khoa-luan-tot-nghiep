const { Users,Application, FileCV, sequelize } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var gravatar = require('gravatar');
var nodemailer =  require('nodemailer'); 
const Register = async (req, res) => {
  const {
    name,
    email,
    account,
    password,
    phone,
    sex,
    birthday,
    type,
    nation,
    experience,
    skill,
    description,
    foreiginLanguage,
    education,
    careerGoals,
  } = req.body;
  try {
    const { file } = req;
    const urlImage = `http://localhost:5000/${file.path}`;
    const urlVideo = `http://localhost:5000/${file.path}`;
    const avatarUrl = gravatar.url(email);
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);
    const newUser = await Users.create({
      name,
      email,
      account,
      password,
      phone,
      sex,
      birthday,
      experience,
      skill,
      description,
      foreiginLanguage,
      education,
      careerGoals,
      nation,
      Certificate:urlVideo,
      type,
      avatar: urlImage,
    });
    res.status(201).send(newUser);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
const login = async (req, res) => {
  const { account, password } = req.body;
  const user = await Users.findOne({
    where: {
      account
    },
  });
  if (user) {
    // const isAuth = bcrypt.compareSync(password, user.password);
    if (user) {
      const token = jwt.sign(
        { account: user.account, type: user.type, id: user.id, email: user.email,name:user.name},"tan-phat-99",{ expiresIn: 120 * 60 }
      );
      console.log(token,"token")
      res.status(200).send({ message: "Đăng nhập thành công", token ,user});
    } else {
      res.status(500).send({ message: "Tài khoản hoặc mật khẩu không đúng 1" });
    }
  } else {
    res.status(400).send({ message: "Tài khoản hoặc mật khẩu không đúng" });
  }
};
const UploadAvatar = async(req,res)=>{
  // const file = req.file;
  const {file} = req; 
  const urlImage = `http://localhost:5000/${file.path}`;
  const {user} = req;
  const userFound = await Users.findOne({
      account: user.account,
    });
    userFound.avatar = urlImage;
    await userFound.save();
    res.send(userFound);
};
const getAllUser = async (req, res) => {
  const listUser = await Users.findAll();
  try {
    if (listUser) {
      res.status(201).send(listUser);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
const DeleteUser = async (req, res) => {
  const { id } = req.params;
  try {
   const dele= await Users.destroy({
      where: {
        id,
      },
    });
    res.status(201).send("dele");
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
  }
};
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name,
    email,
    account,
    password,
    phone,
    sex,
    birthday,
    type,
    nation,
    experience,
    skill,
    description,
    foreiginLanguage,
    education,
    careerGoals,
    Certificate,} = req.body;
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);
    await Users.update(
      { name,
        email,
        account,
        password,
        phone,
        sex,
        birthday,
        type,
        nation,
        experience,
        skill,
        description,
        foreiginLanguage,
        education,
        careerGoals,
        Certificate, },
      {
        where: { id },
      }
    );
    res.status(201).send(`Update thành công ${id}`);
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
  }
};
const getAccountUser = async (req, res) => {
  const {user} = req;
  const listUser = await Users.findOne({
    where:{
      account : user.account,
      id:user.id,
    }, 
    include: [
      {
        model: FileCV,
        as: "CvFileUser",
      },
    ],
  });
  try {
    if (listUser) {
      res.status(200).send(listUser);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
const getUserApplied = async (req, res) => {
  const {user} = req;
  const listUser = await Users.findAll({
    where:{
      account : user.account,
      id:user.id,
    }, 
    include: [
      {
        model: Application,
        as: "appliactionuser",
      },
    ],
  });
  try {
    if (listUser) {
      res.status(200).send(listUser);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
const getDetailUser = async(req,res)=>{
  const {id} = req.params;
  const getDetail = await Users.findOne({
    where: {id},
    include: [
      {
        model: FileCV,
        as: "CvFileUser",
      },
    ],
  });
  try {
    if (getDetail) {
      res.status(201).send(getDetail);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
const Email = async (req, res, next) => {
    const { email, password } = req.body;
    const Email = await Users.findOne({
      where: {
        email
      },
    });
    if (Email) {
      const isAuth = bcrypt.compareSync(password, user.password);
      if (isAuth) {
        res.status(200).send({ message: "Đăng nhập thành công"});
      } else {
        res.status(500).send({ message: "Tài khoản hoặc mật khẩu không đúng 1" });
      }
    } else {
      res.status(400).send({ message: "Tài khoản hoặc mật khẩu không đúng" });
    };
    var transporter =  nodemailer.createTransport({ // config mail server
        service: 'Gmail',
        auth: {
          Email
        }
    });
    var mainOptions = { // thiết lập đối tượng, nội dung gửi mail
        from: `${user.email}`,
        to: 'hotanphat.htp99@gmail.com',
        subject: `${user.name}`,
        text: `Xin chào tôi tên là  ${user.name} tôi đã ứng tuyển công việc của công ty trên website TimKiemViecLam.com`,  
    }
    transporter.sendMail(mainOptions, function(err, info){
        if (err) {
            console.log(err);
            res.redirect('/');
        } else {
            console.log('Message sent: ' +  info.response);
            res.redirect('/');
        }
    });
};
module.exports = {
  Register,
  login,
  getAllUser,
  DeleteUser,
  updateUser,
  UploadAvatar,
  getAccountUser,
  Email,
  getUserApplied,
  getDetailUser
};
