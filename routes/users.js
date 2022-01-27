const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController')
const { authentication, isAdmin } = require('../middlewares/authentication');

router.post('/', UserController.register)
router.post('/login',UserController.login)
router.delete('/logout',authentication, UserController.logout)
router.get('/', authentication, UserController.getUserByIdAuth)
router.put('/:id', authentication, UserController.update)
router.delete('/user/:id', authentication, isAdmin, UserController.delete)
router.delete('/deletemyself', authentication, UserController.deletemyself)
router.get('/confirm/:emailToken',UserController.confirm)

module.exports = router;