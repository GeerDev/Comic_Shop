const express = require('express');
const router = express.Router();
const ComicController = require('../controllers/ComicController')
const { authentication, isAdmin, isEmployee } = require('../middlewares/authentication');

router.post('/', authentication, isAdmin,  ComicController.create)
router.get('/', ComicController.getAll)
router.get('/order', ComicController.getAllOrder)
router.get('/:id', ComicController.getById)
router.get('/name/:name', ComicController.getOneByName)
router.get('/price/:price', ComicController.getAllByPrice)
router.put('/:id', authentication, isEmployee, ComicController.update)
router.delete('/:id', authentication, isAdmin, ComicController.delete)

module.exports = router;