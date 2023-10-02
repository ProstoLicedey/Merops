const Router = require('express')
const  router = new Router()
const  userController = require('../controller/userController')


router.post('/registration', userController.registration )
router.post('/login', userController.login )
router.post('/logout', userController.logout )
//router.get('/auth', userController.)
router.delete('/delite', userController.delite)
router.put('/update', userController.update)
router.get('/activate/:link', userController.activate )
router.get('/refresh',  userController.refresh)
router.post('/receiveCode',  userController.receiveCode)
router.post('/inputCode',  userController.inputCode)
router.post('/updatePass',  userController.updatePass)


module.exports = router