var express = require('express');
var router = express.Router();
const requestController = require('../controllers/request.controllers');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
router.post('/', requestController.create);
router.get('/', requestController.getAll);




module.exports = router;

