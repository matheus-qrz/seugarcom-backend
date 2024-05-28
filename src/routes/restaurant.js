const express = require("express");
const restaurantController = require("../controllers/RestaurantController.js");

const restaurantRouter = express.Router();
/**
 * @swagger
 * /:
 *  post:
 *      description: Register Restaurant endpoint
 */
restaurantRouter.post("/create", function (req, res) {
  restaurantController.create;
});

/**
 * @swagger
 * /:
 *  get:
 *      description: Get All registered Restaurants
 */
restaurantRouter.get("/getall", function (req, res) {
  restaurantController.getAll;
});

/**
 * @swagger
 * /:
 *  get:
 *      description: Get registered Restaurant by Id endpoint
 */
restaurantRouter.get("/:id", function (req, res) {
  restaurantController.getRestaurantById;
});

/**
 * @swagger
 * /:
 *  patch:
 *      description: Update registered restaurant endpoint
 */
restaurantRouter.patch("/:id/details", function (req, res) {
  restaurantController.update;
});

/**
 * @swagger
 * /:
 *  delete:
 *      description: Delete registered restaurant endpoint
 */
restaurantRouter.delete("/:id/delete", function (req, res) {
  restaurantController.delete;
});

module.exports = restaurantRouter;
