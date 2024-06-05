import mongoose from "mongoose";
import validator from "validator";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Please, provide a valid email."],
  },
  phone: {
    type: String,
    required: true,
    minLength: [11, "Please insert an valid phone number."],
    maxLength: [13, "Please insert an valid phone number."],
  },
  authentication: {
    required: true,
    password: {
      type: String,
      required: true,
      select: false,
    },
    salt: { type: String, required: true, select: false },
    sessionToken: { type: String, required: true, select: false },
  },
  role: {
    type: String,
    enum: ["ADMIN", "MANAGER", "ATTENDANT", "CLIENT"],
    default: "CLIENT",
  },
});

export const UserModel = mongoose.model("User", userSchema);

// METHODS
// Get All Users
export const getUsers = () => UserModel.find();
// Get User by Id
export const getUserById = (id: string) => UserModel.findById(id);
// Get User by Email for Register Validation
export const getUserByEmail = (email: string) => UserModel.findOne({ email });
// Get User by SessionToken for Middleware
export const getUserBySessionToken = (sessionToken: string) =>
  UserModel.findOne({ "authentication.sessionToken": sessionToken });
// Create User
export const createUser = (values: Record<string, any>) =>
  new UserModel(values).save().then((user) => user.toObject());
// Delete User
export const deleteUser = (id: string) =>
  UserModel.findOneAndDelete({ _id: id });
// Update User
export const updateUser = (id: string, values: Record<string, any>) =>
  UserModel.findByIdAndUpdate(id, values);
