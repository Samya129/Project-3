const mongoose = require("mongoose");
const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const eventSchema = new Schema({
  
  name: { type: String, required: true },
  date: { type: String, required: true },
  location: { type: String, required: false },
  link: { type: String, required: false },
  description: { type: String, required: true },
  eventId: { ObjectId },
  createdAt: { type: Date, default: Date.now }
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
