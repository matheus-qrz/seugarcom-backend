import mongoose from "mongoose";

const Schema = mongoose.Schema;

const requestSchema = new Schema(
  {
    user: {
      type: String,
      ref: "User",
    },
    items: {
      type: Array,
      name: { type: String, required: true },
      amount: { type: Number, required: true },
      imageUrl: { type: String, required: true },
      price: { type: Number, required: true },
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    },
    attendant: {
      type: String,
    },
    cancelRequest: {
      type: Boolean,
    },
    modifyItem: {
      type: Boolean,
    },
    hasTicket: {
      type: Boolean,
    },
    totalAmount: {
      type: Number,
      default: 0.0,
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

export const RequestModel = mongoose.model("Request", requestSchema);

// METHODS
// Get All User Requests
export const getRequests = () => RequestModel.find();
// Get Request by Id for updating purposes
export const getRequestById = (id: string) => RequestModel.findById(id);
// Get Request by Date
export const getRequestByDate = (paidAt: Date) =>
  RequestModel.findOne({ paidAt });
// Get Request by Email for Register Validation
export const getRequestByClientName = (name: string) =>
  RequestModel.findOne({ name });
// Create Request
export const createRequest = (values: Record<string, any>) =>
  new RequestModel(values).save().then((request) => request.toObject());
// Delete Request
export const deleteRequest = (id: string) =>
  RequestModel.findOneAndDelete({ _id: id });
// Update Request
export const updateRequest = (id: string, values: Record<string, any>) =>
  RequestModel.findByIdAndUpdate(id, values);
