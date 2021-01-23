var express = require('express');
var router = express.Router();
const donorController = require('../controllers/donor.controllers');


/* GET home page. */
router.post('/', donorController.create);
router.put('/:id', donorController.updateById);
router.get('/', donorController.getAll);
router.get('/:mobile', donorController.getByMobile);

module.exports = router;