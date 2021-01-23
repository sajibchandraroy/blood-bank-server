const Request = require('../models/request.models');

module.exports.create = req => {
    return Request.create(req);
}

module.exports.getAll = () => {
    return Request.find();
}