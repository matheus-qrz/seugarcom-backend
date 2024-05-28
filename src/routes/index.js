const express = require("express");

const appRouter = express.Router();

const authRouter = require("./auth");
const userRouter = require("./user");
const restaurantRouter = require("./restaurant");
// const productsRouter = require("./products");

module.exports = {
  appRouter,
  authRouter,
  userRouter,
  serviceRouter,
  restaurantRouter,
};
