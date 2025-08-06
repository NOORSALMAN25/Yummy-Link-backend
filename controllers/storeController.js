const stores = require('../data/stores.json')
const Review = require('../models/review')

exports.store_getAll = async (req, res) => {
  console.log('here')
  res.json(stores)
}

exports.store_search = (req, res) => {
  const search = (req.query.search || '').toLowerCase()
  if (!search) return res.json(stores)

  const result = stores.filter((store) =>
    (store.name || '').toLowerCase().includes(search)
  )
  res.json(result)
}

exports.store_getById = async (req, res) => {
  const storeId = parseInt(req.params.id)

  const store = stores.find((store) => store.id === storeId)
  if (!store) res.status(404).send({ status: 'Error', msg: 'no store found' })

  const review = await Review.find({ storeId })
  res.json({ ...store, review })
}
