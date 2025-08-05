const Review = require('../models/review')

exports.reviews_getAll = async (res, req) => {
  try {
    const reviews = await Review.find({})
    res.status(200).send(reviews)
  } catch (error) {
    throw error
  }
}

exports.reviews_create_post = async (res, req) => {
  try {
    const review = await Review.create(req.body)
  } catch (error) {
    throw error
  }
}

exports.reviews_delete_delete = async (res, req) => {
  try {
    await Review.deleteOne({ _id: req.params.id })
    res.status(200).send({ msg: 'Post Deleted', id: req.params.id })
  } catch (error) {
    throw error
  }
}
