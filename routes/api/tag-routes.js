const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint


// find all tags
router.get("/", (req, res) => {
  Tag.findAll({
    include: [
      {
        model: Product,
      },
    ],
  })
    .then((category) => {
      res.status(200).json(category);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send('Server Error');
    });
});

// find a single tag by its `id`
router.get("/:id", (req, res) => {
  const id = req.params.id;
  Tag.findByPk(id, { include: [{ model: Product }] })
    .then((product) => {
      res.status(200).json(product);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send('Server Error');
    });
});

// create a new tag
router.post("/", (req, res) => {
  Tag.create(req.body)
    .then((tag) => {
      res.status(200).json(tag);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send('Server Error');
    });
});

// update a tag's name by its `id` value
router.put("/:id", (req, res) => {
  const id = req.params.id;
  Tag.update(req.body, {
    where: {
      id,
    },
  })
    .then((tag) => {
      res.status(200).json(tag);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send('Server Error');
    });
});

// delete on tag by its `id` value
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Tag.destroy({
    where: {
      id,
    },
  })
    .then((tag) => {
      res.status(200).json(tag);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send('Server Error');
    });
});

module.exports = router;
