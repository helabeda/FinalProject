const express = require("express");
const router = express.Router();
const Event =require("../Models/EventUser")
const isAuthEvent=require("../Middlewares/isAuth");
const admin = require("../Middlewares/accessAdmin");
const authUser = require("../Middlewares/basicAuth");
const isAuth=require('../Middlewares/password');

//GET all events
router.get("/", async (req, res) => {
  try {
    const eventsList = await Event.find().sort({updatedAt:-1});

    res.status(200).send(eventsList);
  } catch (error) {
    res.status(400).send({ msg: "did not get events" });
    console.log(error)
  }
});
//GET by ID

router.get("/:id", async (req, res) => {
  try {
    const event = await Event.findById({_id:req.params.id})
    res.status(200).send(event);
  } catch (error) {
    res.status(400).send({ msg: "did not get events" });
    console.log(error)
  }
});
//Search
router.get("/eventname/:name", async(req,res)=>{
    try{
      const filterall = await Event.find()
      const search= filterall.filter(el=>el.Name.toLowerCase().includes(req.params.name.toLowerCase()))
      res.send(search)
    }catch(error){
      res.status(400).send({ msg: "error" });
      console.log(error)

    }0
})

//Create an Event

router.post("/createEvent",isAuth(), async (req,res)=>{
try {
    
    const newEvent = new Event(req.body);
    newEvent.user=req.user._id
    await newEvent.save();
    console.log(req.body)
    res.status(200).send({ msg: "Event Successfully added", Event: newEvent });
} catch (error) {
    res.status(400).send({ msg: "Nothing to Add" });
    console.log(error)
    console.log(req.user);
}
})

//Update Event

router.put("/:id", isAuth(),isAuthEvent  ,async (req, res) => {
  try {
    const updateEvent = await Event.findById(req.params.id);

    Object.assign(updateEvent, req.body);

    await updateEvent.save();
    res
      .status(200)
      .send({ Event: updateEvent, msg: "User updated successfully" });
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
});

//Delete Event
router.delete("/:id", isAuth(), isAuthEvent,  async (req, res) => {
  try {
    const deleteEvent = await Event.deleteOne({_id:req.params.id});
    res.status(200).send({ Event: true, msg: "Event removed successfully" });
  } catch (error) {
    res.status(400).send({ error: error });
  }
});

//Like Event
router.put("/like/:id",isAuth(),async(req,res)=>{
  //console.log(req.user._id)
         try {
           const event = await Event.findById({ _id: req.params.id });
           //console.log(event.Likes.some((like) => like.user.toString() == req.user.id))
           if (
             event.Likes.some((like) => like.user.toString() == req.user.id)
           ) {
             event.Likes = event.Likes.filter(like => like.user.toString() != req.user.id);
             console.log(event.Likes);
              await event.save();
             return res.status(200).send({msg:'Event unliked',event:event})
           }

           event.Likes.unshift({ user: req.user.id });
           // remove the dislike
           event.Dislikes = event.Dislikes.filter(
             ({ user }) => user.toString() !== req.user.id
           );
           await event.save();

           return res.send(event.Likes);
         } catch (error) {
           console.log(error)
          
           res.status(400).send({msg:"error"})
         }
})
 

//Disike Event
router.put("/dislike/:id",isAuth(),async(req,res)=>{
  //console.log(req.user._id)
         try {
           const event = await Event.findById({ _id: req.params.id });
           //console.log(event.Likes.some((like) => like.user.toString() == req.user.id))
           if (
             event.Dislikes.some((dislike) => dislike.user.toString() == req.user.id)
           ) {
             event.Dislikes = event.Dislikes.filter(dislike => dislike.user.toString() != req.user.id);
             console.log(event.Dislikes);
              await event.save();
             return res.status(200).send({msg:'Event unliked',event:event})
           }

           event.Dislikes.unshift({ user: req.user.id });
           // remove the like
           event.Likes = event.Likes.filter(
             ({ user }) => user.toString() !== req.user.id
           );
           await event.save();

           return res.send(event.Dislikes);
         } catch (error) {
           console.log(error)
          
           res.status(400).send({msg:"error"})
         }
})


//Create Review
router.put("/review/:id",isAuth(),async(req,res)=>{
  try {
    const event = await Event.findById({ _id: req.params.id });
    
    const review= event.Review;
    
    
    
    review.push({User:req.user._id,Rating:req.body.Rating,Comment:req.body.Comment})
     
    await event.save()
   
    res.status(200).send({msg:"review added"})
  } catch (error) {
    res.status(400).send({ error: error });
    console.log(error)
  }
})
// Update Review
router.put("/reviewupdate/:id",isAuth(),async(req,res)=>{
  
    
    try {
      const event = await Event.findById({ _id: req.params.id });
    const review=event.Review
     
       for ( var i in review) {
     if (review[i].User.toString() == req.user._id.toString()) {
       
        Object.assign(review[i],{
          User:req.user._id,
          Rating: req.body.Rating,
          Comment: req.body.Comment,
        });  
  }
}
      await event.save();
      res.status(200).send({ msg: "review updated" });
    } catch (error) {
      res.status(400).send({ error: error });
      console.log(error)
    }
      
 } )

 //Delete Review
 router.delete("/reviewdelete/:id", isAuth(), async (req, res) => {
   try {
     const event = await Event.findById({ _id: req.params.id });
     const review = event.Review;

     for (var i in review) {
       if (review[i].User.toString() == req.user._id.toString()) {
         review.splice(i, 1);
       }
     }
     await event.save();
     res.status(200).send({ msg: "review deleted" });
   } catch (error) {
     res.status(400).send({ error: error });
     console.log(error);
   }
 });

module.exports = router;
