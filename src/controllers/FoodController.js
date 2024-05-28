const { Foods } = require("../models/Foods");

const foodsController = {
  create: async (req, res) => {
    const existingFood = await Foods.findById({ id: req.id });

    if (existingFood) {
      return res.status(409).json({ message: "Already registered" });
    }
  },
};
