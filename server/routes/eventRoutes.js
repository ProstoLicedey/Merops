const Router = require('express')
const  router = new Router()
const  eventController = require('../controller/eventControler')

router.post('/', eventController.create)
router.get('/', eventController.getAll )
router.get('/:id', )
router.put('/',)
router.delete('/',)

module.exports = router