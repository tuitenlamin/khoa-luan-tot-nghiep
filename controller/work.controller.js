const { Work, Company,Users,TypeWork,sequelize } = require("../models");
const { Op } = require("sequelize");
const createWork = async (req, res) => {
  const {user} = req;
  const followAcc = user.account;
  const followId = user.id;
  const { typeWorkPost,levelWork,nameWork, experience, education, description, request, salary,addr } = req.body;
  try { 
    const newWork = await Work.create({
      typeWorkPost,
      companyFrom:followId,
      levelWork,
      nameWork,
      experience,
      education,
      description,
      request,
      salary,
      addr
    });
    console.log(newWork)
    res.status(201).send(newWork);
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
  }
};
const getAll = async (req,res) => {
  let {search} = req.query;  
    try{
      if(search){
        search = decodeURIComponent(search);
        const getall = await Work.findAll({
          where: {
            [Op.or]: [
              {
                nameWork:{
                  [Op.like]: `%${search}%`,
                },
              },
              { 
                "$worktype.titleWork$": {
                  [Op.like]: `%${search}%`,
                } 
              },
              {
                levelWork:{
                  [Op.like]: `%${search}%`,
                },
              },
              { 
                "$worktype.levelWork$": {
                  [Op.like]: `%${search}%`,
                } 
              },
              {
                addr:{
                  [Op.like]: `%${search}%`,
                },
              },
              { 
                "$worktype.addressWork$": {
                  [Op.like]: `%${search}%`,
                } 
              }
            ],
          },
          include: [
            {
              model: Company,
              as: "fromcompany",
            },
            {
              model: TypeWork,
              as: "worktype",
            },
          ],
        });
        res.status(201).send(getall);
      }  
      else{
          const getAll = await Work.findAll({
            include: [
              {
                model: Company,
                as: "fromcompany",
              },
              {
                model: TypeWork,
                as: "worktype",
              },
            ],
          });
          res.status(200).send(getAll);
      }
    }   
    catch(err)
    {
        res.status(500).send(err);
        console.log(err);
    }
};
const getAlla = async(req,res)=>{
  Work.findAll({ include: ["userapply"] }).then(data => {
    res.json({ data: data })
}).catch(er => {
  console.log(er); 
})
};
const getAccountWork = async(req,res)=>{
  const {user} = req;
  const getall = await Company.findOne({
    where:{
      account : user.account,
      id:user.id,
    }, 
    include: [
      {
        model: Work,
        as: "fromcompany",
      },
    ],
  });
  console.log('gellal',getall)
  try{
      if(getall) {
          res.status(201).send(getall);
          console.log(getall);
      }
  }   
  catch(err)
  {
      res.status(500).send(err);
      console.log(err);
  }
};
const updateWork = async(req,res)=>{
    const {id} = req.params;
    const { nameWork, experience, education, description, request, salary } =  req.body;
    try{
        await Work.update(
            {nameWork, experience, education, description, request, salary},
            {where:{id}},
        );
        res.status(201).send(`Update thành công ${id}`);
    }
    catch(err)
    {
        res.status(500).send(err);
        console.log(err);
    }
};
const deleWork = async(req,res)=>{
    const {id} = req.params;
    try
    {
        await Work.destroy({where:{id}});
        res.status(200).send(`Xóa thành công ${id}`);
    }
    catch(err)
    {
        res.status(500).send(err);
        console.log(err);
    }
};
const getInforWork = async(req,res)=>{
  const { id } = req.params;
  const listUser = await Work.findOne({
    where:{
      id 
    }, 
    include: [
      {
        model: Company,
        as: "fromcompany",
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
const DetailAccount = async(req,res)=>{
  const {id} = req.params;
  const listUser = await Work.findOne({
      where:{id},
    });
  try {
    if (listUser) {
      res.status(200).send(listUser);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
const UserApply = async(req,res) => {
  const {user} = req;
  const followAcc = user.id;
  const {userApply} = req.body;
  const {id} = req.params;
  const listUser = await Users.create({  
    where:{
      id:user.id,
      id
    }, 
    userApply:followAcc,
    include: [
      {
        model: Users,
        as: "userapply",
      },
    ],
  });
  console.log(listUser)
  try {
    if (listUser) {
      res.status(200).send(listUser);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
const getUserPostWork = async(req,res) => {
  const getalluser = await Users.findAll({
    where:{
      type: 'UNGVIEN'
    }, 
    include: [
      {
        model: Work,
        as: "userwork",
      },
    ],
  });
  try{
      if(getalluser) {
          res.status(201).send(getalluser);
          console.log(getalluser);
      }
  }   
  catch(err)
  {
      res.status(500).send(err);
      console.log(err);
  }
};
const getWorkCompany=async(req,res)=>{
  const {user} = req;

  Work.findAll({ where: { companyFrom: user.id },include:["userapply"] }).then(data => {
    res.json({ data: data })
}).catch(er => {
    throw er;
})
};

module.exports = {
  createWork,
  getAll,
  updateWork,
  deleWork,
  getInforWork,
  DetailAccount,
  getAccountWork,
  UserApply,
  getUserPostWork,
  getAlla,
  getWorkCompany
};
