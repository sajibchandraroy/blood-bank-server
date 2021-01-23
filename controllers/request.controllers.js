const requestService = require('../services/request.services');

module.exports.create = async (req, res, next) => {
  console.log(req.body)
  try {
    const request = await requestService.create(req.body);
    return res.status(200).json(request)
  } catch (e) {
    return res.status(500).json({ message: 'Something went wrong!!!' });
  }
}