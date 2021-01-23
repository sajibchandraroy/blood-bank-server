const Donor = require('../models/donor.models');

module.exports.create = donor => {
    return Donor.create(donor);
}
module.exports.getAll = () => {
    return Donor.find();
}


module.exports.getByMobile = (mobileNumber) => {
    return Donor.find(mobileNumber);
}

module.exports.updateById = (id, updateFromBody, runValidators) => {
    return Donor.findOneAndUpdate(id, updateFromBody, runValidators);
}

// module.exports.deleteById = (id) => {
//     return Area.findOneAndDelete(id);
// }