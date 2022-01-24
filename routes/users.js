const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController')
const { authentication } = require('../middlewares/authentication');

router.post('/', UserController.register)
router.post('/login',UserController.login)
router.delete('/logout',authentication, UserController.logout)
router.get('/', authentication, UserController.getUserById)

module.exports = router;