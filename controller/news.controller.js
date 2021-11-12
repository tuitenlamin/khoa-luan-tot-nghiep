const { News } = require("../models");
const createNews = async (req, res) => {
  const { name, title, content } = req.body;
  const {file} = req; 
  const urlImage = `http://localhost:5000/${file.path}`;
  try {
    const addNews = await News.create({ name, title, content,avatar:urlImage});
    res.status(201).send(addNews);
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
  }
};
const getALlNews = async (req,res) =>{
    const getAll = await News.findAll();
    try{
        if(getAll)
        {
            res.status(201).send(getAll);
            console.log(getAll);
        }
    }
    catch(err)
    {
        res.status(500).send(err);
    }
};
const getDetailNews = async (req,res) =>{
    const {id} = req.params;
    const getAll = await News.findOne({
        where:{id}
    });
    try{
        if(getAll)
        {
            res.status(201).send(getAll);
            console.log(getAll);
        }
    }
    catch(err)
    {
        res.status(500).send(err);
    }
};
const updateNews = async (req,res) =>{
    const {id} = req.params;
    const { name, title, content } = req.body;
    try{
        await News.update(
            { name, title, content },
            {where:{id}}
        );
        res.status(201).send(`Update thành công ${id}`);
    }
    catch(err)
    {
        res.status(500).send(err);
        console.log(err);
    }
};
const deleNews = async (req,res) =>{
    const {id} = req.params;
    await News.destroy({where:{id}});
    try
    {
        
        res.status(200).send(`Xóa thành công ${id}`);
    }
    catch(err)
    {
        res.status(500).send(err);
        console.log(err);
    }
};
const Uploadimage = async(req,res)=>{
   
    const {file} = req; 
    const urlImage = `http://localhost:5000/${file.path}`;
    const {user} = req;
    const userFound = await News.findOne({
        id: user.id,
      });
      userFound.avatar = urlImage;
      await userFound.save();
      res.send(userFound);
};
module.exports = {
    createNews,
    getALlNews,
    updateNews,
    deleNews,
    Uploadimage,
    getDetailNews
}