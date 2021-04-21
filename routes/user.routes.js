/*

When a client sends request for an endpoint using HTTP request (GET, POST, PUT, DELETE), 
we need to determine how the server will response by setting up the routes.

We can separate our routes into 2 part: for Authentication and for Authorization 
(accessing protected resources).

*/

// Authorization

const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api/test/all", controller.allAccess);

    app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

    app.get(
        "/api/test/admin",
        [authJwt.verifyToken], controller.adminBoard
    );
};