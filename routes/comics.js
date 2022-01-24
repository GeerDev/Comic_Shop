const express = require('express');
const router = express.Router();
const ComicController = require('../controllers/ComicController')
const { authentication, isAdmin} = require('../middlewares/authentication');
const { uploadProductsImages } = require('../middlewares/multer');

router.post('/', authentication, isAdmin, uploadProductsImages.single('imageProduct'), ComicController.create)
router.get('/', ComicController.getAll)
router.get('/order', ComicController.getAllOrder)
router.get('/:id', ComicController.getById)
router.get('/name/:name', ComicController.getOneByName)
router.get('/price/:price', ComicController.getAllByPrice)
router.put('/:id', authentication, isAdmin, uploadProductsImages.single('imageProduct'), ComicController.update)
router.delete('/:id', authentication, isAdmin, ComicController.delete)

module.exports = router;