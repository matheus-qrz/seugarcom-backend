import mongoose from "mongoose";

const Schema = mongoose.Schema;

const foodSchema = new Schema({
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
});

export const foodModel = mongoose.model("food", foodSchema);

// METHODS
// Get All foods
export const getFoods = () => foodModel.find();
// Get food by Id
export const getFoodById = (id: string) => foodModel.findById(id);
// Get food by Email for Register Validation
export const getFoodByName = (name: string) => foodModel.findOne({ name });
// Create food
export const createFood = (values: Record<string, any>) =>
  new foodModel(values).save().then((food) => food.toObject());
// Delete food
export const deleteFood = (id: string) =>
  foodModel.findOneAndDelete({ _id: id });
// Update food
export const updateFood = (id: string, values: Record<string, any>) =>
  foodModel.findByIdAndUpdate(id, values);
