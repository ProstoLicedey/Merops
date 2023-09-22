const Router = require('express')
const  router = new Router()
const ageRatingRouter = require('./ageRatingRoutes')
const entranceRouter = require('./entranceRoutes')
const eventRouter = require('./eventRoutes')
const hallRouter = require('./hallRoutes')
const orderRouter = require('./orderRoutes')
const seatRouter = require('./seatRoutes')
const ticketRouter = require('./ticketRoutes')
const typeRouter = require('./typeRoutes')
const userRouter = require('./userRoutes')

router.use('/ageRating', ageRatingRouter)
router.use('/entrance', entranceRouter)
router.use('/event', eventRouter)
router.use('/hall', hallRouter)
router.use('/order', orderRouter)
router.use('/seat', seatRouter )
router.use('/ticket', ticketRouter)
router.use('/type', typeRouter)
router.use('/user', userRouter)

module.exports = router