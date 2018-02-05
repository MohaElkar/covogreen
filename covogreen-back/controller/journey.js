var Journey = require("../database/models/journey");
var co = require('co');
var jwt = require('jsonwebtoken');
var fs = require("fs");
var path = require('path');

var skey_path = path.join(__dirname, '../skey.txt');
var skey = fs.readFileSync(skey_path, 'utf-8');

var JourneyController = {

    /**
     * Cration of a journey
     * @param req
     * @param res
     */
    create: function (req, res) {

        req.accepts('application/json');

        Journey.create({
            origin: req.body.origin,
            destination: req.body.destination,
            date_journey: req.body.date_journey,
            id_driver: req.body.id_driver
        })
            .then(function (response) {
               res.send('Trajet ajouté');
            })
            .catch(function (error) {
                res.status(500).json(error);
            });
    }
};


module.exports = JourneyController;