const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

// find all categories
router.get("/", (req, res) => {
  Category.findAll({
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
// find one category by its `id` value
router.get("/:id", (req, res) => {
  const id = req.params.id;
  Category.findByPk(id, { include: [{ model: Product }] })
    .then((category) => {
      res.status(200).json(category);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send('Server Error');
    });
});
// create a new category
router.post("/", (req, res) => {
  Category.create(req.body)
    .then((category) => {
      res.status(200).json(category);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send('Server Error');
    });
});
// update a category by its `id` value
router.put("/:id", (req, res) => {
  const id = req.params.id;
  Category.update(req.body, {
    where: {
      id,
    },
  })
    .then((category) => {
      res.status(200).json(category);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send('Server Error');
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Category.destroy({
    where: {
      id,
    },
  })
    .then((category) => {
      res.status(200).json(category);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send('Server Error');
    });
  // delete a category by its `id` value
});

module.exports = router;
