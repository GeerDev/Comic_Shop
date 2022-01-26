const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController')
const { authentication, isAdmin} = require('../middlewares/authentication');

router.post('/', authentication, isAdmin, OrderController.create)
router.get('/', authentication, OrderController.getAll)
router.put('/:id', authentication, isAdmin, OrderController.update)
router.delete('/:id', authentication, isAdmin, OrderController.delete)

module.exports = router;