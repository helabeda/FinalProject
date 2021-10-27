const express = require("express");
const router = express.Router();
const Event = require("../Models/EventUser");
const Booking = require("../Models/Booking");
const isAuth = require("../Middlewares/password");


//Bookings List

router.get("/bookingslist",isAuth(),async (req,res)=>{
        try {
            const eventbooked= await Booking.find({Owner:req.user._id})
            res.status(200).send(eventbooked)
        } catch (error) {
            res.status(400).send(error);
            console.log(error)
        }
})

//Bookings history
router.get("/history",isAuth(),async (req,res)=>{
    
        try {
            const history= await Booking.find({Booker:req.user._id})
            res.status(200).send(history)
        } catch (error) {
            res.status(400).send(error);
            console.log(error)
        }
})


//Book Event
router.post("/:id",isAuth(),async(req,res)=>{
   
        try { 
            const event = await Event.findById({_id:req.params.id})
          let booking = new Booking({
            Booker: req.user._id,
            Owner: event.user,
            Event: event._id,
            First_name: req.body.First_name,
            Last_name: req.body.Last_name,
            Email: req.body.Email,
            Tel_Number: req.body.Tel_Number,
            Person: req.body.Person,
          });
          await booking.save();
          res.status(200).send("Event booked Successfully")
        } catch (error) {
            res.status(400).send(error);
            
        }
})

//Delete Booking
router.delete("/:id",isAuth(),async(req,res)=>{
    try {
         Booking.findByIdAndDelete({_id:req.params._id})
         res.status(200).send({msg:"Booking deleted"})
    } catch (error) {
        res.status(200).send({msg:"Failed to delete booking"})
    }
   
})

//GET BY ID
router.get("/bookinglist/:id", isAuth(), async (req, res) => {
  try {
    const eventbooked = await Booking.findOne({_id:req.params.id});
    res.status(200).send(eventbooked);
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
});

//GET BOOKINGS HISTORY BY ID 
router.get("/history/:id", isAuth(), async (req, res) => {
  try {
    const eventbooked = await Booking.find({ _id: req.params.id });
    res.status(200).send(eventbooked);
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
});
module.exports = router;
