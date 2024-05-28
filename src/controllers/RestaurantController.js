const { Restaurant } = require("../models/Restaurant");

const restaurantController = {
  create: async (req, res) => {
    const existingRestaurant = Restaurant.findById({
      restaurant: req.restaurantId,
    });

    if (existingRestaurant) {
      return res.status(409).json({ message: "Restaurant already exists!" });
    }

    const { name, cnpj, address, logo, units } = req.body;

    if (!name || !cnpj || !address || !logo || !units)
      return next(
        new ErrorHandler("Please, fill all the information required.")
      );

    try {
      const restaurant = new Restaurant(req.body);
      const restaurantResponse = await Restaurant.create(restaurant);

      res.status(201).json({ restaurantResponse, msg: "restaurant created!" });
    } catch (error) {
      console.log("Erro: ", error);
    }
  },

  getAll: async (req, res) => {
    try {
      const restaurants = await Restaurant.find();

      res.send(restaurants);
    } catch (error) {
      console.log(error);
    }
  },

  getRestaurantById: async (req, res) => {
    try {
      const restaurant = await Restaurant.findById(req.params.id);

      if (!restaurant) {
        return res.status(404).json({ message: "Restaurant not found" });
      }

      res.json(restaurant);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Something went wrong" });
    }
  },

  update: async (req, res) => {
    try {
      const restaurant = await Restaurant.findById(req.params.id, req.body, {
        new: true,
      });

      restaurant.name = name;
      restaurant.address = address;
      restaurant.cnpj = cnpj;
      restaurant.logo = logo;
      restaurant.units = [units];

      await restaurant.save();
      res.send(restaurant);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Something went wrong" });
    }
  },

  delete: async (req, res) => {
    try {
      await Restaurant.findByIdAndDelete(req.params.id);
      res.status(204).send("");
      res.redirect("/");
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Something went wrong" });
    }
  },
};

module.exports = restaurantController;
