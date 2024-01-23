const Router = require('express')
const  router = new Router()
const  ticketController = require('../controller/ticketController')


router.post('/',)
router.get('/', )
router.get('/:id', ticketController.getTicket )
router.put('/',)
router.delete('/',)

module.exports = router