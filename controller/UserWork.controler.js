const { WorkUser,Users} = require("../models");

const createWorkUser = async (req, res) => {
    const {user} = req;
    const followAcc = user.account;
    const followId = user.id;
    const { nameWork,experience,education} = req.body;
    try { 
      const newWork = await WorkUser.create({
        nameWork,experience,education,UserWorkAccount:followId
      });
      console.log(newWork)
      res.status(201).send(newWork);
    } catch (err) {
      res.status(500).send(err);
      console.log(err);
    }
};
const getAllWorkUser = async ( req,res) => {
  const getAll =await WorkUser.findAll({
    include: [
      {
        model: Users,
        as: "userwork",
      },
    ],
  });
  try{
    if(getAll){
      res.send(getAll).status(200)
    }
  }
  catch(err)
  {
    res.send(500).status(err);
  }
}
const DetailAccount = async(req,res)=>{
    const {user} = req;
    const listUser = await Users.findOne({
      where:{
        account : user.account,
      }, 
      include: [
        {
          model: WorkUser,
          as: "userwork",
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
const DetailUserWork = async(req,res)=>{
  const {id} = req.params;
  const listUser = await WorkUser.findOne({
    where:{
     id
    }, 
  });
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
          model: WorkUser,
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
}
const DeleteUser = async (req, res) => {
  const { id } = req.params;
  await WorkUser.destroy({
    where: {
      id,
    },
  });
  try {
    res.status(201).send(`delete success ${id}`);
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
  }
};
const updateWorkUser = async (req, res) => {
  const { id } = req.params;
  const { nameWork,experience,education } = req.body;
  try {
    await WorkUser.update(
      { nameWork,experience,education },
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
module.exports = {DetailUserWork,createWorkUser,DetailAccount,getUserPostWork,DeleteUser,updateWorkUser,getAllWorkUser}