const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const LoginSchema = new Schema({
  cpf: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Login = mongoose.model("Login", LoginSchema);

module.exports = { Login, LoginSchema };
