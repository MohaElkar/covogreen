var co = require('co');

var Car = require('./models/car');
var User = require('./models/user');
var Journey = require('./models/journey');
var Participation = require('./models/participation');

co(
    function * (){

        Car.sync({force: false});
        User.sync({force: false});
        Journey.sync({force: false});
        Participation.sync({force: false});
    }
);