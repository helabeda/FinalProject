const User = require("../Models/User");
const EventUser=require("../Models/EventUser");
const isAuthEvent = async (req, res, next) => {
  const acess = await User.findById(req.user._id);
  const eventUser = await EventUser.findOne({ _id: req.params.id });
 
  

  if (eventUser.user.toString() != req.user._id.toString()) {
    res.status(401).send("Not Allowed");
  } else {
    console.log("Access Allowed");

    next();
  }
  
};

module.exports = isAuthEvent;
