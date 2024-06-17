import express from "express";
import {
  createRequestController,
  deleteRequestController,
  getAllRequestsController,
  getRequestByClientNameController,
  getRequestByIdController,
  updateRequestController,
} from "../controllers/RequestsController";
import { isAuthenticated } from "../middlewares";

export default (requestRouter: express.Router) => {
  requestRouter.post(
    "/user/restaurant/request",
    isAuthenticated,
    createRequestController
  );
  requestRouter.patch(
    "/user/restaurant/request/:id/update",
    isAuthenticated,
    updateRequestController
  );
  requestRouter.get(
    "/user/requests/list",
    isAuthenticated,
    getAllRequestsController
  );
  requestRouter.get(
    "/user/restaurant/request/:id",
    isAuthenticated,
    getRequestByIdController
  );
  requestRouter.get(
    "/restaurant/user/requests",
    isAuthenticated,
    getRequestByClientNameController
  );
  requestRouter.delete(
    "/user/restaurant/request/delete",
    isAuthenticated,
    deleteRequestController
  );
};
