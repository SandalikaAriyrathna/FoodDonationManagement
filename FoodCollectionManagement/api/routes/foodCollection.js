const router = require('express').Router();
const FoodCollection = require('../models/FoodCollection');

//CREATE FoodCollection
router.post('/', async (req, res) => {
  const newFoodCollection = new FoodCollection(req.body);

  let code = 1;
  try {
    const foodCollection = await FoodCollection.find()
      .sort({ _id: -1 })
      .limit(1);
    if (foodCollection.length > 0) code += foodCollection[0].code;
    newFoodCollection.delivery_id = 'DID00' + code;
    newFoodCollection.code = code;

    try {
      const savedFoodCollection = await newFoodCollection.save();
      res.status(200).json(savedFoodCollection);
    } catch (err) {
      res.status(500).json(err);
    }
  } catch (error) {
    console.log(error);
  }
});

//UPDATE FoodCollection
router.put('/update/:delivery_id', async (req, res) => {
  try {
    const updatedFoodCollection = await FoodCollection.findOneAndUpdate(
      { delivery_id: req.params.delivery_id },
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedFoodCollection);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE FoodCollection
router.delete('/delete/:delivery_id', async (req, res) => {
  try {
    const foodCollection = await FoodCollection.findOneAndDelete({
      delivery_id: req.params.delivery_id,
    });
    if (!foodCollection) {
      return res.status(404).json({ error: 'Food collection not found' });
    }
    res.status(200).json('FoodCollection has been deleted...');
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET FoodCollection
router.get('/:delivery_id', async (req, res) => {
  try {
    const foodCollection = await FoodCollection.findOne({
      delivery_id: req.params.delivery_id,
    });
    res.status(200).json(foodCollection);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL FoodCollection
router.get('/', async (req, res) => {
  try {
    const foodCollection = await FoodCollection.find();
    res.status(200).json(foodCollection);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
