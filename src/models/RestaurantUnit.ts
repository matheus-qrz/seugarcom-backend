import mongoose from "mongoose";
const Schema = mongoose.Schema;

const restaurantUnitSchema = new Schema({
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
});
// 3. Create a Model.
export const RestaurantUnitModel = mongoose.model(
  "RestaurantUnit",
  restaurantUnitSchema
);
