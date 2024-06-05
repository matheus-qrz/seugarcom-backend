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
});

export const foodModel = mongoose.model("food", foodSchema);

// METHODS
// Get All foods
export const getfoods = () => foodModel.find();
// Get food by Id
export const getfoodById = (id: string) => foodModel.findById(id);
// Get food by Email for Register Validation
export const getfoodByName = (name: string) => foodModel.findOne({ name });
// Create food
export const createfood = (values: Record<string, any>) =>
  new foodModel(values).save().then((food) => food.toObject());
// Delete food
export const deletefood = (id: string) =>
  foodModel.findOneAndDelete({ _id: id });
// Update food
export const updatefood = (id: string, values: Record<string, any>) =>
  foodModel.findByIdAndUpdate(id, values);
