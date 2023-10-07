const Router = require('express')
const  router = new Router()
const  entanceController = require('../controller/entranceController')

router.post('/',)
router.get('/',  )
router.get('/option/:id', entanceController.getFromEvent )
router.put('/',)
router.delete('/',)

module.exports = router