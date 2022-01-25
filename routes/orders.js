const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController')
const { authentication, isAdmin} = require('../middlewares/authentication');

router.post('/', authentication, OrderController.create)
router.get('/', OrderController.getAll)
router.put('/:id', OrderController.update)
router.delete('/:id', OrderController.delete)

module.exports = router;