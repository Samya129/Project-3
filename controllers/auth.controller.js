/*

There are 2 main functions for Authentication:
- signup: create new User in database (role is user if not specifying role)
- signin:
    find username of the request in database, if it exists
    compare password with password in database using bcrypt, if it is correct
    generate a token using jsonwebtoken
    return user information & access Token

*/

const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;


var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    });
    user.save((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        if (req.body.roles) {
            Role.find(
                {
                    name: { $in: req.body.roles }
                },

                (err, roles) => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }

                user.roles = roles.map(role => role._id);
                user.save(err => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }
                    res.send({ message: "User was registered successfully!" });
            });
        }
    );
    } else {
        user.save(err => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        res.send({ message: "User was registered successfully!" });
        
        });
    }
    });
};

exports.signin = (req, res) => {
    console.log("You found Signin!")
    User.findOne({
        username: req.body.username
    })
    .exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        if (!user) {
            return res.status(404).send({ message: "User Not found." });
        }
        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );
        if (!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: "Invalid Password!"
            });
        }
        var token = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: 86400 // 24 hours
        });
        res.status(200).send({
            id: user._id,
            username: user.username,
            email: user.email,
            accessToken: token
      });
    });
};