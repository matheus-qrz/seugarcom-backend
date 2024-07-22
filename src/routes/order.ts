import express from "express";
import {
  createOrderController,
  deleteOrderController,
  getAllOrdersController,
  getOrderByClientNameController,
  getOrderByIdController,
  updateOrderController,
} from "../controllers/OrderController.ts";
import { isAuthenticated } from "../middlewares/index.ts";

export default (orderRouter: express.Router) => {
  orderRouter.post(
    "/user/restaurant/request",
    isAuthenticated,
    createOrderController
  );
  orderRouter.patch(
    "/user/restaurant/request/:id/update",
    isAuthenticated,
    updateOrderController
  );
  orderRouter.get(
    "/user/requests/list",
    isAuthenticated,
    getAllOrdersController
  );
  orderRouter.get(
    "/user/restaurant/request/:id",
    isAuthenticated,
    getOrderByIdController
  );
  orderRouter.get(
    "/restaurant/user/requests",
    isAuthenticated,
    getOrderByClientNameController
  );
  orderRouter.delete(
    "/user/restaurant/request/delete",
    isAuthenticated,
    deleteOrderController
  );
};
