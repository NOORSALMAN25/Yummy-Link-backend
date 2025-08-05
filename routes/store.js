const storeCtrl = require('../controllers/storeController')
const router = require('express').Router()

router.get('/', storeCtrl.store_getAll)
router.get('/search', storeCtrl.store_getById)

module.exports = router