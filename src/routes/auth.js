const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

/**
 * @swagger
 * /:
 *  post:
 *      description: Login endpoint
 */
router.post("/", async (req, res) => {
  const { email, password } = req.body;

  // validation!
  if (!email || !password) {
    return res.status(422).json({ msg: "Please, verify the data insert." });
  }

  // check if user exists!
  const user = await User.findOne({ email: email });
  if (!user) {
    return res
      .status(404)
      .json({ msg: "User not found. Please, create an account" });
  }

  // password matching check
  const checkPassword = await bcrypt.compare(password, user.password);
  if (!checkPassword) {
    return res.status(422).json({ msg: "Wrong password." });
  }

  try {
    const secret = process.env.SECRET;

    const token = jwt.sign(
      {
        id: user._id,
      },
      secret
    );

    res.status(200).send({ msg: "User succesfully authenticated.", token });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

/**
 * @swagger
 * /:
 *  post:
 *      description: Register endpoint
 */
router.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password);

    User.userSchema.add({
      id: Date.now().toString(),
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      password: hashedPassword,
      role: req.body.role,
    });

    if (!firstName || !lastName || !email || !phone || !email || !password) {
      return res.status(422).json({ msg: "Please, insert all necessary data" });
    }

    const userAlreadyExists = await User.findOne({ email: email });
    if (userAlreadyExists) {
      return res.status(422).json({ msg: "User already exists!" });
    }

    const user = new User({
      firstName,
      lastName,
      email,
      phone,
      password: hashedPassword,
      role,
    });

    try {
      await user.save();
      res.status(201).json({ msg: "User succesfully created!" });
    } catch {
      new ErrorHandler(
        "Could not register. Please, review all information provided."
      );
    }

    res.render("home");
  } catch {
    (err) => {
      res.status(500).json({
        msg: "Could not create user. Please, certify all data insert.",
      });
      console.log(err);
    };
  }
});
