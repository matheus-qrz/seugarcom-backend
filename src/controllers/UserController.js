const { User } = require("../models/User");

const userController = {
  create: async (req, res) => {
    const existingUser = await User.findById({ user: req.id });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists!" });
    }

    const { firstName, lastName, email, password, phone } = req.body;

    if (!firstName || !lastName || !email || !password || !phone)
      return next(
        new ErrorHandler("Please, fill all the information required.")
      );

    try {
      const user = new User(req.body);
      const userResponse = await User.create(user);
      res.status(200).json(userResponse, {
        success: true,
        message: "User created successfuly",
      });
    } catch (error) {
      console.log("Erro: ", error);
      return res.status(500).json({ message: "Something went wrong" });
    }
  },

  getAll: async (req, res) => {
    try {
      const users = await User.find();
      res.send(users);
    } catch (error) {
      console.log("Nao conectado");
    }
  },

  getUserById: async (req, res) => {
    try {
      const user = await User.findOne(req.params.id);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      res.json(user);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Something went wrong" });
    }
  },

  update: async (req, res) => {
    try {
      const user = await User.findById(req.params.id, req.body, { new: true });

      user.firstName = firstName;
      user.lastName = lastName;
      user.email = email;
      user.phone = phone;

      await user.save();
      res.send(user);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Something went wrong" });
    }
  },

  delete: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(204).send("");
      res.redirect("/");

      console.log("User deleted successfuly");
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = userController;
