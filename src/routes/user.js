const express = require("express");
const userController = require("../controllers/UserController");

const userRouter = express.Router();

/**
 * @swagger
 * /user/create
 *  post:
 *      tags:
 *        - User
 *      description: Register User endpoint
 *      products:
 *        - application/json
 *      parameters:
 *        - name: user
 *          description: Objeto usuario
 *          in: body
 *          required: true
 *          schema:
 *            $ref = "#/models/User"
 *      responses:
 *        200: OK,
 *        409: User already exists
 *        500: Something went wrong
 */
userRouter.post("/user/create", function (req, res) {
  userController.create;
});

/**
 * @swagger
 * /user/users
 *  get:
 *      tags:
 *        - User
 *      description: Register User endpoint
 *      products:
 *        - application/json
 *      parameters:
 *        - name: user
 *          description: Objeto usuario
 *          in: body
 *          required: true
 *          schema:
 *            $ref = "#/models/User"
 *      responses:
 *        200: OK,
 *        401: Unauthorized
 *        500: Something went wrong
 */
userRouter.get("/user/get", function (req, res) {
  userController.getAll;
});

/**
 * @swagger
 * /user/:id
 *  get:
 *      tags:
 *        - User
 *      description: Get User by Id endpoint
 *      products:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            $ref = "#/models/User"
 *      responses:
 *        200: OK,
 *        401: Unauthorized
 *        404: User not found
 *        500: Something went wrong
 */
userRouter.get("/user/:id", function (req, res) {
  userController.getUserById;
});

/**
 * @swagger
 * /user/:id/update
 *  post:
 *      tags:
 *        - User
 *      description: Register User endpoint
 *      products:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            $ref = "#/models/User"
 *      responses:
 *        200: OK,
 *        401: Unauthorized
 *        500: Something went wrong
 */
userRouter.patch("user/:id/update", function (req, res) {
  userController.update;
});

/**
 * @swagger
 * /user/:id/delete
 *  post:
 *      tags:
 *        - User
 *      description: Register User endpoint
 *      products:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            $ref = "#/models/User"
 *      responses:
 *        200: OK,
 *        401: Unauthorized
 *        500: Something went wrong
 */
userRouter.delete("user/:id/delete", function (req, res) {
  userController.delete;
});

module.exports = userRouter;
