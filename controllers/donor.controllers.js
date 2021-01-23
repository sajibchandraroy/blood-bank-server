const donorService = require('../services/donor.services');

module.exports.create = async (req, res, next) => {
  try {
    const donor = await donorService.create(req.body);
    return res.status(200).json(donor)
  } catch (e) {
    return res.status(500).json({ message: 'Something went wrong!!!' });
  }
}

module.exports.getAll = async (req, res, next) => {
  const bearer = req.headers.authorization;
  if (bearer) {
    try {
      const donor = await donorService.getAll();
      return res.status(200).json(donor);
    } catch (e) {
      return res.status(500).json({ message: 'Something went wrong!!!' });
    }
  }
  else{
    return res.status(401).send('Un authorized access');
  }
}

module.exports.getByMobile = async (req, res, next) => {
    const mobile = req.params.mobile;
    console.log(mobile)
    try {
      const donor = await donorService.getByMobile({ mobileNumber: mobile });
      return res.status(200).send(donor);
    } catch (e) {
      console.error(e);
      return res.status(500).json({ message: "Something went wrong" });
    }
  };

module.exports.updateById = async (req, res, next) => {
  const id = req.params.id;
  const updateFromBody = req.body;
  console.log(updateFromBody)
  try {
    const donor = await donorService.updateById({ _id: id }, updateFromBody, {
      new: true,
      runValidators: true,
    });
    console.log(donor); 
    return res.status(200).send(donor);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Something went wrong" });
  }
};


//   module.exports.deleteById = async (req, res, next) => {
//     const id = req.params.id;
//     try {
//       const area = await areaService.deleteById({ _id: id });
//       return res.status(200).send({data : true});
//     } catch (e) {
//       console.error(e);
//       return res.status(500).json({ message: "Something went wrong" });
//     }
//   };


