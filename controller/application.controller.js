const { Application,Work,Users } = require("../models");

const createApplication = async (req, res) => {
  const {user} = req;
  const userId=user.id;
  const jobId=req.body.jobId
    Application.create({userId,jobId}).then(data => {
      res.json({ data: data })
  }).catch(er => {
      throw er;
  })
};
const getApplication = async(req,res) => {
    const getApplyUser = await Application.findAll({
      include: [Work,Users],
    });
    console.log("dads",getApplyUser)
    try {
      if (getApplyUser) {
        res.status(201).send(getApplyUser);
      }
    } catch (err) {
      res.status(500).send(err);
    }
}
const getDetail = async(req,res) => {
  const {id} = req.params.Work;
  const getApplyUser = await Application.findAll({
    where:{
      id
    },
    include: [Work,Users],
  });
  console.log("dads",getApplyUser)
  try {
    if (getApplyUser) {
      res.status(201).send(getApplyUser);
    }
  } catch (err) {
    res.status(500).send(err);
  }
}
module.exports = {
    createApplication,
    getApplication,
    getDetail
}