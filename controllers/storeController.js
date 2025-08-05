const stores = require('../data/stores.json')
const Review = require('../models/review')

exports.store_getAll = async (req, res) => {
  console.log("hello")
  res.json(stores)
}

exports.store_getById = async (req, res) => {
  const storeId = parseInt(req.params.id)

  const store = stores.find((store) => store.storeId === storeId)
  if (!store) res.status(401).send({ status: 'Error', msg: 'no store found' })

  const review = await Review.find({ storeId: id })
  res.json({ ...store, review })
}
