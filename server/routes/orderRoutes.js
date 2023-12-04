const Router = require('express')
const  router = new Router()
const  orderController = require('../controller/orderController')

router.post('/', orderController.create)
router.get('/', )
router.get('/getTicket/:id',  orderController.getTicket)
router.get('/:id', )
router.delete('/',)

module.exports = router