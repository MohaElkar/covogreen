var controller = require("../../controller/user");
var co = require('co');

module.exports = function (router) {

    var test = co.wrap(controller.test);
    router.get('/test', test);

    var login = co.wrap(controller.login);
    router.post('/login', login);

    var create = co.wrap(controller.create);
    router.post('/', create);
};
