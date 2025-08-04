const { Schema } = require('mongoose')

const reviewSchema = new Schema(
  {
    name: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
    storeId: { type: Number, required: true }
  },
  { timestamps: true }
)

module.exports = reviewSchema
