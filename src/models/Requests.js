const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  user: {
    type: String,
    required: false,
    ref: "Umser",
  },
  items: {
    type: Array,
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    price: { type: Number, required: true },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Product",
    },
  },

  attendant: {
    type: String,
    required: true,
  },
  addProduct: {
    type: [String],
    required: false,
    minLength: [1, "Please insert at least one"],
  },
  removeProduct: {
    type: Boolean,
    required: false,
    minLength: [1, "You need at least 1 item on the list."],
  },
  cancelRequest: {
    type: Boolean,
    required: false,
  },
  modifyItem: {
    type: Boolean,
    required: false,
  },
  hasTicket: {
    type: Boolean,
    required: false,
  },
  totalAmount: {
    type: Number,
    required: true,
    default: 0.0,
  },
  isPaid: {
    type: Boolean,
    required: true,
    default: false,
  },
  paidAt: {
    type: Date,
  },
});

const Request = mongoose.model("Request", requestSchema);

module.exports = { Request, requestSchema };
