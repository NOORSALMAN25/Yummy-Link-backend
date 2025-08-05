const storeCtrl = require('../controllers/storeController')
const router = require('express').Router()

router.get('/', storeCtrl.store_getAll)
router.get('/:id', storeCtrl.store_getById)
