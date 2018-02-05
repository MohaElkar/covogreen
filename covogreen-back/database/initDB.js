var car = require('./models/car.js');
var user = require('./models/user.js');
var journey = require('./models/journey.js');
var participation = require('./models/participation.js');
var co = require('co');

co(
    function *(){
        yield car.sync({force: false});
        user.belongsTo(car, {foreignKey: 'id_car'});
        yield user.sync({force: false});
        journey.belongsTo(user, {foreignKey: 'id_user'});
        yield journey.sync({force: false});
        participation.belongsTo(user, {foreignKey: 'id_user'});
        participation.belongsTo(journey, {foreignKey: 'id_journey'});
        yield participation.sync({force: false});
    }
);
