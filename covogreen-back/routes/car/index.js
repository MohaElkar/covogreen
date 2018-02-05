var controller = require("../../controller/car");
var co = require('co');

module.exports = function (router) {

    var create = co.wrap(controller.create);
    router.post('/', create);
};
