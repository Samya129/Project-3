const mongoose = require("mongodb");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");

db.ROLES = ["user", "admin"];

module.exports = db;

/* OLD CODE
module.exports = {
  Book: require("./book")
};
*/