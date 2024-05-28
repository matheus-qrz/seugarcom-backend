const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const { requestSchema } = require("./Requests");

const restaurantSchema = Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
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
      manager: String,
      address: String,
    },
  ],
  // restaurantManager: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  //   required: true,
  //   validate: {
  //     validator: async function (id) {
  //       const user = await User.findById(id);
  //       return ["ADMIN", "Restaurant Manager"].includes(user.role);
  //     },
  //     message: (props) =>
  //       `User role must be either 'Admin' or 'Restaurant Manager'`,
  //   },
  // },
  // restaurantStaff: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "User",
  //   },
  // ],
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = { Restaurant, restaurantSchema };
