const express = require("express");
const requestController = require("../controllers/RequestsController");

const requestRouter = express.Router();

// SERVICES
requestRouter.post("/user/:id/request", function (req, res) {
  requestController.Create;
});

requestRouter.get("user/:id/request", function (req, res) {
  requestController.update;
});

module.exports = requestRouter;
