const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  Booker: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "user" },
  Owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "user" },
  Event: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "event" },
  Nickname: { type: String },
  First_name: { type: String },
  Last_name: { type: String },
  Email: { type: String },
  Tel_Number: { type: String },
  Person:{type:Number},
  Status:{type:Boolean,default:false}
},{timestamps:true});


module.exports = Booking = mongoose.model("Booking", eventSchema);
