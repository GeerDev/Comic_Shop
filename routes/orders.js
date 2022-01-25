const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController')
const { authentication, isAdmin} = require('../middlewares/authentication');

router.post('/', authentication, OrderController.create)
router.get('/', OrderController.getAll)

module.exports = router;