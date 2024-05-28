const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = Schema({
  id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  adress: {
    type: String,
    required: true,
  },
  attendants: [
    {
      type: String,
      required: true,
    },
  ],
  manager: {
    type: String,
    required: true,
  },
  tables: [
    {
      type: Number,
      required: true,
    },
  ],
  logo: {
    type: String,
    required: true,
  },
});
// 3. Create a Model.
const Restaurant = model < iRestaurantUnit > ("restaurant", restaurantSchema);

module.exports = { Restaurant, restaurantSchema };
