const router = require("express").Router();
const bookRoutes = require("./books");

// Book routes
router.use("/books", bookRoutes); //calls the first api file above.Books.js

module.exports = router;
