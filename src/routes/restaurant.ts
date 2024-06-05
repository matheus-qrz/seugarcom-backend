import express from "express";
import {
  createRestaurantController,
  deleteRestaurantController,
  getAllRestaurantsController,
  getRestaurantByIdController,
  updateRestaurantController,
} from "../controllers/RestaurantController.js";
import { isAdmin, isAuthenticated } from "../middlewares/index.js";

export default (restaurantRouter: express.Router) => {
  restaurantRouter.post(
    "/restaurant/create",
    isAuthenticated,
    isAdmin,
    createRestaurantController
  );
  restaurantRouter.get(
    "/restaurants/list",
    isAuthenticated,
    isAdmin,
    getAllRestaurantsController
  );
  restaurantRouter.get(
    "/restaurants/:id",
    isAuthenticated,
    isAdmin,
    getRestaurantByIdController
  );
};
