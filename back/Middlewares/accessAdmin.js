const accessAdmin=async(req,res,next)=>{
    console.log(req.user)
    if (req.user.Role !== "admin") {
    res.status(401).send("Not Allowed");
  } else { 
    console.log("Access Allowed");
    next();
  }
};


module.exports=accessAdmin