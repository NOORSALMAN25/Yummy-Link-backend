const storeCtrl = require('../controllers/storeController')
const reviewCtrl = require('../controllers/reviewController')
const router = require('express').Router()

router.get('/', storeCtrl.store_getAll)
router.get('/search', storeCtrl.store_search)
router.get('/:id', storeCtrl.store_getById)

//the  reviews routes
// GET /stores/:storeId/reviews
router.get('/:storeId/reviews', reviewCtrl.reviews_getAll)

// POST /stores/:storeId/reviews
router.post('/:storeId/reviews', reviewCtrl.reviews_create_post)

// DELETE /stores/:storeId/reviews/:reviewId
router.delete('/:storeId/reviews/:reviewId', reviewCtrl.reviews_delete_delete)

module.exports = router
