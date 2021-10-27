const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "user" },
  Name: { type: String },
  Description: { type: String },
  Image: { type: String },
  Category: { type: String },
  Location: { type: String },
  Number:{type:String},
  isFree: { type: Boolean, default: false },
  Price: { type: String, default: "NaN" },
  Likes:   [{user:{type: mongoose.Schema.Types.ObjectId}}],
  Dislikes:[{user:{type: mongoose.Schema.Types.ObjectId}}],
  Review: [
    {
      User: mongoose.Schema.Types.ObjectId,
      Rating: Number,
      Comment: String,
    },
  ],
  CreationDate: { type: Date, default: new Date() },
  EventDate: { type: Date },
});

module.exports = EventUser = mongoose.model("Event", eventSchema);
