/*

When a client sends request for an endpoint using HTTP request (GET, POST, PUT, DELETE), 
we need to determine how the server will response by setting up the routes.

We can separate our routes into 2 part: for Authentication and for Authorization 
(accessing protected resources).

*/

// Authentication 
const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      });
      
    app.post(
        "/api/auth/signup",
        [
            verifySignUp.checkDuplicateUsernameOrEmail
        ],
        controller.signup
    );
    app.post("/api/auth/signin", controller.signin);
};