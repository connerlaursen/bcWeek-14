const router = require('express').Router();
const Dish = require('../models/Dish');

// get one dish without serializing data
router.get('/dish/:id', async (req, res) => {
  try {
    const dishData = await Dish.findByPk(req.params.id);
    const serializedDishDataForHandlebars = {
      dish_name: dishData.dataValues.dish_name,
      description: dishData.dataValues.description,
      guest_name: dishData.dataValues.guest_name,
      has_nuts: dishData.dataValues.has_nuts
    }
    console.log(dishData)
    res.render('dish', serializedDishDataForHandlebars);
  } catch (err) {
    res.status(500).json(err);
  }
});

// // get one dish with serialized data
router.get('/dish/:id', async (req, res) => {
  try {
    // Search the database for a dish with an id that matches params
    const dishData = await Dish.findByPk(req.params.id);
    console.log(dishData)
    // We use .get({ plain: true }) on the object to serialize it so that it only includes the data that we need. 
    const dish = dishData.get({ plain: true });
    // Then, the 'dish' template is rendered and dish is passed into the template.
    res.render('dish', dish);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

