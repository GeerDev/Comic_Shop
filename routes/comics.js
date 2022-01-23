const express = require('express');
const router = express.Router();
const ComicController = require('../controllers/ComicController')

router.post('/', ComicController.create)
router.get('/', ComicController.getAll)
router.get('/order', ComicController.getAllOrder)
router.get('/:id', ComicController.getById)
router.get('/name/:name', ComicController.getOneByName)
router.get('/price/:price', ComicController.getAllByPrice)
router.put('/:id', ComicController.update)
router.delete('/:id', ComicController.delete)

module.exports = router;