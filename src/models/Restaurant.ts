import mongoose from "mongoose";
import { RestaurantUnitModel } from "./RestaurantUnit";
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  cnpj: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  units: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RestaurantUnit",
    },
  ],
});

export const RestaurantModel = mongoose.model("Restaurant", restaurantSchema);

// METHODS
// Get All Restaurants
export const getRestaurants = () => RestaurantModel.find();
// Get Restaurant by Id
export const getRestaurantById = (id: string) => RestaurantModel.findById(id);
// Get Restaurant by Name (also for register validation)
export const getRestaurantByName = (name: string) =>
  RestaurantModel.findOne({ name });
// Create Restaurant
export const createRestaurant = (values: Record<string, any>) =>
  new RestaurantModel(values).save().then((user) => user.toObject());
// Delete Restaurant
export const deleteRestaurant = (id: string) =>
  RestaurantModel.findOneAndDelete({ _id: id });
// Update Restaurant
export const updateRestaurant = (id: string, values: Record<string, any>) =>
  RestaurantModel.findByIdAndUpdate(id, values);
// Create Restaurant Unit
// export const createRestaurantUnit = (id: string, values: Record<string, any>) =>
//   RestaurantModel.findOne({ _id: id })
//     .populate("restaurantUnit")
//     .exec(
//       new RestaurantUnitModel(values).save().then((unit) => unit.toObject());
//     );
