const express = require('express');
const router = express.Router();
const ReviewController = require('../controllers/ReviewController')
const { authentication, isAdmin} = require('../middlewares/authentication');

router.post('/', authentication, ReviewController.create)
router.get('/', ReviewController.getAll)
router.put('/:id', ReviewController.update)
router.delete('/:id', ReviewController.delete)

module.exports = router;