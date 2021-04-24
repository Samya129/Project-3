const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Events collection and inserts the events below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/sourpatchDB"
);

const eventSeed = [
  {
    name: "Protest civil rights",
    date: new Date(Date.now()),
    location: "Atlanta City Hall",
    link: "",
    description: "",
    eventId: 0
    // createdAt:    
  },
  {
    name: "2",
    date: new Date(Date.now()),
    location: "Georgia City Hall",
    link: "",
    description: "",
    eventId: 0
    // createdAt:
  },
  {
    name: "3",
    date: new Date(Date.now()),
    location: "East Point City Hall",
    link: "",
    description: "",
    eventId: 0
    // createdAt:
  },
  {
    name: "4",
    date: new Date(Date.now()),
    location: "Atlanta City Hall",
    link: "",
    description: "",
    eventId: 0
    // createdAt:
  },
  {
    name: "5",
    date: new Date(Date.now()),
    location: "Atlanta City Hall",
    link: "",
    description: "",
    eventId: 0
    // createdAt:
  },
  {
    name: "",
    date: new Date(Date.now()),
    location: "Atlanta City Hall",
    link: "",
    description: "",
    eventId: 0
    // createdAt:
  },
];

db.Event
  .remove({})
  .then(() => db.Event.collection.insertMany(eventSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
