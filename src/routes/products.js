const express = require("express");
const foods = require("../models/foodsModel");

const productsRouter = express.Router();

productsRouter.get("/getall", async (req, res) => {
  try {
    const foodsToGet = await foods.find();
    res.status(200).send({ data: foodss });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

productsRouter.get("/categories", async (req, res) => {
  try {
    const foods = await foods.aggregate([
      { $match: {} },
      {
        $group: {
          _id: "$category",
          foodss: { $push: "$$ROOT" },
        },
      },
      { $project: { name: "$_id", products: 1, _id: 0 } },
    ]);
    res.status(200).send({ data: products });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

// router.post("/foods/add", async(req, res) => {
//     try {
//         const addFoods =
//     }
// });

module.exports = productsRouter;
