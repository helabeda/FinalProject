const express = require("express");
const router = express.Router();
const User = require("../Models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {registerCheck,validator}=require('../Middlewares/userValidator');
const isAuth=require('../Middlewares/password')
const admin =require('../Middlewares/accessAdmin')
const authUser=require("../Middlewares/basicAuth")

// get all users / admin:
router.get("/users", isAuth(),admin, async (req, res) => {
  try {
    const userList = await User.find();
    res.send(userList);
  } catch (error) {
    console.log(error);
    res.status(400).send("cannot get users list");
  }
});
//SignUp
router.post("/signup",registerCheck(),validator, async (req, res) => {
  const { Email, Password } = req.body;
  try {
    const foundUser = await User.findOne({ Email });
    if (foundUser) {
      return res.status(400).send({ msg: "User Already Exists" });
    }

    const newUser = new User(req.body);
    const hashedPassword=await bcrypt.hash(Password, 8)
    newUser.Password=hashedPassword
    await newUser.save();
    res.send({ msg: "Successfully added", user: newUser });
  } catch (error) {
    res.status(400).send({ msg: "Nothing to Add" });
  }
});

//Login

router.post("/login",async (req,res)=>{
    const {Email,Password}=req.body
try {
  const existUser = await User.findOne({ Email });
  if (!existUser) {
    return res.status(400).send({ msg: "bad credential" });
  }
  const matched = await bcrypt.compare(Password, existUser.Password);
  if (!matched) {
    return res.status(400).send({ msg: "bad credential" });
  }
  const payload = {
    _id: existUser._id,
  };
  const token = await jwt.sign(payload, process.env.secretKey);
  const loginUser = await User.findOne({ Email }).select("-Password");
  res.cookie("token", token, {httpOnly: true,});
  res.send({
    user: loginUser,
    token: `Bearer ${token}`,
    msg: "successfully connected",
  });
} catch (error) {
  res.status(400).send({ msg: "not connected" });
}
})

router.get('/currentUser',isAuth(),(req,res)=>{
    res.send({user:req.user})
    
})


//Update User
router.put("/:id",isAuth(), authUser,  async (req, res) => {
  try {
    const updateUser = await User.findById(req.params.id);

    const hashedUpdate=Object.assign(updateUser, req.body);

    hashedUpdate.Password = await bcrypt.hash(hashedUpdate.Password, 8);
    await hashedUpdate.save();
    res
      .status(200)
      .send({ User: hashedUpdate, msg: "User updated successfully" });
  } catch (error) {
    res.status(400).send(error);
    console.log("error")
  }
});

//Delete User 
router.delete("/:id",isAuth(),authUser,async (req,res)=>{
    try {
      const deleteUser=await User.deleteOne({_id:req.params.id})
  
      res.status(200).send({User:true,msg:'User removed successfully'})
    } catch (error) {
      console.log(error)
      res.status(400).send({error:error})
    }
});

//Search
router.get("/username/:name", async(req,res)=>{
    try{
      const filterall = await User.find();
      console.log(filterall)
      console.log(req.params.name);
      const search = filterall.filter(
        (el) =>
          el.Nickname.toLowerCase().includes(req.params.name.toLowerCase()) 
      );

      res.send(search)
    }catch(error){
      res.status(400).send({ msg: "error" });
      console.log(error)
    }
})

// get user by id:
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    
    res.status(200).send(user);
  } catch (error) {
    
    res.status(400).send("cannot get user");
  }
});

module.exports = router;
