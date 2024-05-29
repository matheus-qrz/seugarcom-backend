import mongoose from "mongoose";
import http from "http";
import requestRouter from "./routes/requests.js";
import restaurantRouter from "./routes/restaurant.js";
import authRouter from "./routes/auth.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";
import swaggerJSDoc from "./swagger.json";
import swaggerUI from "swagger-ui-express";
import cookieParser from "cookie-parser";
import router from "./routes/index.js";

const app = express();
dotenv.config({ path: "./config/config.env" });

app.use(
  cors({
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve Swagger Documentation
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJSDoc));

const server = http.createServer(app);

server.listen(3333, () => {
  console.log("Is running on http://localhost:3333");
});

const MONGO_URL =
  "mongodb+srv://matheusqo1:9mjl6BkwgI0J6nmz@seugarcom1.ywmykl2.mongodb.net/?retryWrites=true&w=majority";

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("error", (error: Error) => console.log(error));

app.use("/", router());
