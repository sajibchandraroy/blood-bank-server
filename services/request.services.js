const Request = require('../models/Request.models');

module.exports.create = req => {
    return Request.create(req);
}