import mongoose from "mongoose";

const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
    },
    items: [
      {
        name: { type: String },
        quantity: { type: Number },
        price: { type: Number },
        ref: "Foods",
      },
    ],
    status: {
      type: String,
      enum: ["Pedido enviado", "Aguardando resposta", "Em preparo", "Recebido"],
    },
    attendant: {
      type: String,
    },
    totalAmount: {
      type: Number,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
    paidAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

export const OrderModel = mongoose.model("Request", orderSchema);

// METHODS
// Get All User Requests
export const getOrders = () => OrderModel.find();
// Get Request by Id for updating purposes
export const getOrderById = (id: string) => OrderModel.findById(id);
// Get Request by Date
export const getOrderByClientName = (name: string) =>
  OrderModel.findOne({ name });
// Create Request
export const createOrder = (values: Record<string, any>, userId: string) =>
  new OrderModel(values, userId).save().then((request) => request.toObject());
// Delete Request
export const deleteOrder = (id: string) =>
  OrderModel.findOneAndDelete({ _id: id });
// Update Request
export const updateOrder = (id: string, values: Record<string, any>) =>
  OrderModel.findByIdAndUpdate(id, values);
