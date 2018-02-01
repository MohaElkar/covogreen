var User = require("../database/models/user");
var co = require('co');
var jwt = require('jsonwebtoken');
var fs = require("fs");
var path = require('path');

var skey_path = path.join(__dirname, '../skey.txt');
var skey = fs.readFileSync(skey_path, 'utf-8');

var LoginController = {

    /**
     * For testing sending from backend.
     * @param req
     * @param res
     */
    test: function (req, res) {
        res.send("TEST");
    },

    /**
     * For checking username/password, if OK, an user is connected.
     * @param req
     * @param res
     */
    login: function (req, res) {

        req.accepts('application/json');

        User.findOne({
            where: {
                username: req.body.username,
                password: req.body.password
            }
        })
        .then(function (response) {
            var user = JSON.stringify({id: response.id, username: response.username, privilege: response.privilege});
            var token = jwt.sign(user, skey);
            res.status(200).send(token);
        })
        .catch(function (error) {
            res.status(500).json(error);
        });
    },


    /**
     * For creating an new user.
     * @param req
     * @param res
     */
    create: function  (req, res) {

        User.create(req.body)
            .then(function (response) {
                res.status(200).send("Ajout de l'utilisateur OK");
            })
            .catch(function (error) {
                res.status(500).send("Echec de l'ajout de l'utilisateur");
            });
    },
};


module.exports = LoginController;