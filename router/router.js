const Router = require('express')
const router = new Router()
const controller = require('../controller/controller')

router.post('/put', controller.insertValue)
router.get('/ss', controller.getValues)




module.exports = router