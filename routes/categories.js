const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/CategoryController')
const { authentication, isAdmin} = require('../middlewares/authentication');

router.post('/', authentication, isAdmin, CategoryController.create)
router.get('/', CategoryController.getAll)
router.get('/:id', CategoryController.getById)
router.get('/name/:name', CategoryController.getOneByName)
router.put('/:id', authentication, isAdmin, CategoryController.update)
router.delete('/:id', authentication, isAdmin, CategoryController.delete)

module.exports = router;