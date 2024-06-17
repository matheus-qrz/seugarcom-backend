import express from "express";
import {
  createRequest,
  deleteRequest,
  getRequestByClientName,
  // getRequestByDate,
  // getRequests,
  getRequestById,
  updateRequest,
} from "../models/Requests.js";

export const createRequestController = async (
  req: express.Request,
  res: express.Response
) => {
  const { items, attendant, totalAmount, isPaid, paidAt } = req.body;

  try {
    const newRequest = await createRequest({
      items: [items.name, items.amount, items.prince],
      attendant,
      totalAmount,
      isPaid,
    });

    res.status(201).json(newRequest);
  } catch (error) {
    console.log("Error", error);
  }
};

export const updateRequestController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;

    const userRequest = await getRequestById(id);

    const { items, totalAmount, isPaid, paidAt } = req.body;

    var paymentDate = new Date();

    if (userRequest) {
      (userRequest.items = items),
        (userRequest.totalAmount = totalAmount),
        (userRequest.isPaid = isPaid),
        (userRequest.paidAt = paymentDate);

      await updateRequest(id, userRequest);
    }

    return res.status(200).json(userRequest);
  } catch (error) {
    console.log("Error", error);
  }
};

export const getRequestByIdController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const userRequest = await getRequestById(id);

    if (!userRequest) {
      return res.status(404).json({ message: "Request does not exist" });
    }

    res.status(200).json(userRequest);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const getRequestByClientNameController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { user } = req.params;
    const userRequest = await getRequestByClientName(user);

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

export const deleteRequestController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;

    const deletedRequest = await deleteRequest(id);

    return res.json(deletedRequest);
  } catch (error) {
    console.log(error);
  }
};
