import mongoose from "mongoose";
const Schema = mongoose.Schema;

const restaurantUnitSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
  },
  adress: {
    type: String,
  },
  attendants: [
    {
      type: String,
    },
  ],
  manager: {
    type: String,
  },
  tables: [
    {
      type: Number,
    },
  ],
});
// 3. Create a Model.
export const RestaurantUnitModel = mongoose.model(
  "RestaurantUnit",
  restaurantUnitSchema
);
