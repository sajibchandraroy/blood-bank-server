const requestService = require('../services/request.services');

module.exports.create = async (req, res, next) => { 
  try {
    const request = await requestService.create(req.body);
    return res.status(200).json(request)
  } catch (e) {
    return res.status(500).json({ message: 'Something went wrong!!!' });
  }
}

module.exports.getAll = async (req, res, next) => {
  const bearer = req.headers.authorization;
  if (bearer) {
    try {
      const request = await requestService.getAll();
      return res.status(200).json(request);
    } catch (e) {
      return res.status(500).json({ message: 'Something went wrong!!!' });
    }
  }
  else{
    return res.status(401).send('Un authorized access');
  }
}