const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({include: [{
    model: Product
  }]}).then((category) => {
    res.status(200).json(category)
  }).catch((err) => {
    console.log(err);
    res.status(400).json(err);
  })
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  const id = req.params.id
  Tag.findByPk(id, {include: 
    [{model: Product}]}
  ).then((product) => {
    res.status(200).json(product)
  }).catch((err) => {
    console.log(err);
    res.status(400).json(err);
  })
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  Tag.create(req.body).then((tag) => {
    res.status(200).json(tag)
  }).catch((err) => {
    console.log(err);
    res.status(400).json(err);
  })
  // create a new tag
});

router.put('/:id', (req, res) => {
  const id = req.params.id
  Tag.update(req.body, {
    where: {
      id 
    }
  }).then((tag) => {
    res.status(200).json(tag)
  }).catch((err) => {
    console.log(err);
    res.status(400).json(err);
  })
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  const id = req.params.id
  Tag.destroy({
    where: {
      id
    }
  }).then((tag) => {
    res.status(200).json(tag)
  }).catch((err) => {
    console.log(err);
    res.status(400).json(err);
  })
  // delete on tag by its `id` value
});

module.exports = router;
