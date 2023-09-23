const Router = require('express')
const  router = new Router()

const {User} = require("../models/models");


router.post('/registration', )
router.post('/login', )
router.post('/logout', )
router.get('/auth', (req, res) => {res.json({messege:'dgf'})})
router.delete('/delite')
router.put('/update')

module.exports = router