const Review = require('../models/review')

// reviews routes
exports.reviews_getAll = async (req, res) => {
  try {
    const reviews = await Review.find({})
    res.status(200).json(reviews)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.reviews_create_post = async (req, res) => {
  try {
    const storeId = parseInt(req.params.id, 10)
    if (isNaN(storeId)) {
      return res.status(400).json({ error: 'Invalid store ID' })
    }

    // تأكد من وجود الحقول المطلوبة
    const { name, comment, rating } = req.body
    if (!name || !comment || rating === undefined) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    // تحقق من صحة نوع التقييم
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
    await Review.deleteOne({ _id: req.params.id })
    res.status(200).send({ msg: 'Post Deleted', id: req.params.id })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
