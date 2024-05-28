const validator = require("validator");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodSchema = new mongoose.Schema({
  id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  name: {
    type: String,
    require: true,
    minLength: [1, "Please, insert the product name."],
  },
  description: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: [
    {
      type: Number,
      value: Number,
      minLength: [2, "Price cannot be under 2 digits"],
    },
  ],
  quantity: {
    type: Number,
    required: true,
  },
  observation: {
    type: String,
    required: false,
  },
});

const Foods = mongoose.model("Foods", foodSchema);

module.exports = { Foods, foodSchema };
