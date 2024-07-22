import express from "express";
import { validationResult } from "express-validator";
import {
  createOrder,
  deleteOrder,
  getOrders,
  getOrderById,
  getOrderByClientName,
  updateOrder,
} from "../models/Order.ts";

export const createOrderController = async (
  req: express.Request,
  res: express.Response
) => {
  const errors = validationResult(req);

  const { id } = req.params;

  try {
    const newRequest = await createOrder(req.body, id);

    res.status(201).json(newRequest);
  } catch (error) {
    console.log("Error", error);
  }
};

export const updateOrderController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;

    const userRequest = await getOrderById(id);

    const { items, totalAmount, isPaid, paidAt } = req.body;

    var paymentDate = new Date();

    if (userRequest) {
      (userRequest.items = items),
        (userRequest.totalAmount = totalAmount),
        (userRequest.isPaid = isPaid),
        (userRequest.paidAt = paymentDate);

      await updateOrder(id, userRequest);
    }

    return res.status(200).json(userRequest);
  } catch (error) {
    console.log("Error", error);
  }
};

export const getAllOrdersController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const requests = await getOrders();

    return res.status(200).json(requests);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getOrderByIdController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const userRequest = await getOrderById(id);

    if (!userRequest) {
      return res.status(404).json({ message: "Request does not exist" });
    }

    res.status(200).json(userRequest);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const getOrderByClientNameController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { user } = req.params;
    const userRequest = await getOrderByClientName(user);

    if (!user) {
      return res.status(404).json({ message: "User does not exist" });
    }

    if (!userRequest) {
      return res.status(404).json({ message: "Request does not exist" });
    }

    res.status(200).json(userRequest);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const deleteOrderController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;

    const deletedRequest = await deleteOrder(id);

    return res.json(deletedRequest);
  } catch (error) {
    console.log(error);
  }
};
