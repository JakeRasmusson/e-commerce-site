const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({include: [{
    model: Product
  }]}).then((category) => {
    res.status(200).json(category)
  }).catch((err) => {
    console.log(err);
    res.status(400).json(err);
  })
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  const id = req.params.id
  Category.findByPk(id).then((category) => {
    res.status(200).json(category)
  }).catch((err) => {
    console.log(err);
    res.status(400).json(err);
  })
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  Category.create(req.body).then((category) => {
    res.status(200).json(category)
  }).catch((err) => {
    console.log(err);
    res.status(400).json(err);
  })
  // create a new category
});

router.put('/:id', (req, res) => {
  const id = req.params.id
  Category.update(req.body, {
    where: {
      id: id 
    }
  })
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  const id = req.params.id
  Category.destroy({
    where: {
      id
    }
  })
  // delete a category by its `id` value
});

module.exports = router;
