const Review = require('../models/review')

// reviews routes
exports.reviews_getAll = async (req, res) => {
  try {
    const { storeId } = req.params
    const reviews = await Review.find({ storeId: storeId })
    res.status(200).json(reviews)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.reviews_create_post = async (req, res) => {
  try {
    const storeId = parseInt(req.params.storeId, 10)
    console.log(storeId)
    if (isNaN(storeId)) {
      return res.status(400).json({ error: 'Invalid store ID' })
    }

    const { name, comment, rating } = req.body

    if (!name || !comment || rating === undefined) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    const ratingNum = Number(rating)
    if (isNaN(ratingNum) || ratingNum < 0 || ratingNum > 5) {
      return res.status(400).json({ error: 'Invalid rating value' })
    }

    const reviewData = { name, comment, rating: ratingNum, storeId }
    const review = await Review.create(reviewData)
    res.status(201).json(review)
  } catch (error) {
    console.error('Error creating review:', error)
    res.status(500).json({ error: error.message })
  }
}

exports.reviews_delete_delete = async (req, res) => {
  try {
    const { reviewId } = req.params

    const deleted = await Review.findByIdAndDelete(reviewId)
    if (!deleted) return res.status(404).json({ error: 'Review not found' })

    res.status(200).json({ msg: 'Review Deleted' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
