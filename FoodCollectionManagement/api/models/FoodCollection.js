const mongoose = require('mongoose');

const FoodCollectionSchema = new mongoose.Schema(
  {
    delivery_id: {
      type: String,
      required: true,
      unique: true,
    },
    deliver_name: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    deliver_email: {
      type: String,
      required: true,
    },
    donor_name: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    orphanage_name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    code: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('FoodCollection', FoodCollectionSchema);
