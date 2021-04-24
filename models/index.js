<<<<<<< HEAD
const mongoose = require("mongodb");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");

module.exports = db;
=======
module.exports = {
  Event: require("./event"),
  User: require("./user"),
};
>>>>>>> main
