const { dbConnection } = require("./db/conn.js");
const mongoose = require("mongoose");
const requestRouter = require("./routes/requests.js");
const restaurantRouter = require("./routes/restaurant.js");
const userRouter = require("./routes/user.js");
const authRouter = require("./routes/auth.js");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const swaggerJSDoc = require("./swagger.json");
const swaggerUI = require("swagger-ui-express");

const app = express();
dotenv.config({ path: "./config/config.env" });

// app.use("/api-docs/", swaggerdocs.serve, swaggerdocs.setup(swaggerui));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve Swagger Documentation
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJSDoc));

// app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/request", requestRouter);
app.use("/restaurant", restaurantRouter);
// app.use("/api/v1/products", productsRouter);

dbConnection();

app.listen(3333, async () => {
  console.log(`Is running`);
  dbConnection();
});

module.exports = { app };
