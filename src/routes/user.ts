import express from "express";
import {
  getAllUsersController,
  deleteUserController,
  getUserByIdController,
  updateUserController,
} from "../controllers/UserController";
import { isAuthenticated, isAdmin } from "../middlewares";

export default (userRouter: express.Router) => {
  userRouter.get("/users", isAuthenticated, isAdmin, getAllUsersController);
  userRouter.get("/users/:id", isAuthenticated, isAdmin, getUserByIdController);
  userRouter.patch("/users/:id", isAuthenticated, updateUserController);
  userRouter.delete(
    "/users/:id",
    isAuthenticated,
    isAdmin,
    deleteUserController
  );
};
