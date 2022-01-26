const express = require('express');
const router = express.Router();
const ReviewController = require('../controllers/ReviewController')
const { authentication, isEmployee} = require('../middlewares/authentication');

router.post('/', authentication, isEmployee, ReviewController.create)
router.get('/', ReviewController.getAll)
router.put('/:id', authentication, isEmployee, ReviewController.update)
router.delete('/:id',authentication, isEmployee, ReviewController.delete)

module.exports = router;