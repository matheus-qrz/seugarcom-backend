const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");

const userSchema = Schema({
  id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
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
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["ADMIN", "MANAGER", "ATTENDANT", "CLIENT"],
    default: "CLIENT",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = { User, userSchema };
