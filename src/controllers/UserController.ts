import express from "express";
import {
  UserModel,
  getUsers,
  getUserById,
  createUser,
  deleteUser,
  getUserByEmail,
  getUserBySessionToken,
  updateUser,
} from "../models/User";

export const getAllUsersController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const users = await getUsers();

    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getUserByIdController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const user = await getUserById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const updateUserController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, phone, email, password } = req.body;

    const user = await getUserById(id);

    if (user) {
      user.firstName = firstName;
      user.lastName = lastName;
      user.phone = phone;
      user.email = email;
      user.authentication.password = password;

      await user.save();
    }

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const deleteUserController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;

    const deletedUser = await deleteUser(id);

    return res.json(deletedUser);
  } catch (error) {
    console.log(error);
  }
};
