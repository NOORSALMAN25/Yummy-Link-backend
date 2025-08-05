const storeCtrl = require('../controllers/storeController')
const reviewCtrl = require('../controllers/reviewController')
const router = require('express').Router()

router.get('/', storeCtrl.store_getAll)
router.get('/search', storeCtrl.store_search)
router.get('/:id', storeCtrl.store_getById)

//the  reviews routes
router.get('/:id', reviewCtrl.reviews_getAll)
router.post('/:id', reviewCtrl.reviews_create_post)
router.delete('/:id', reviewCtrl.reviews_delete_delete)

module.exports = router
