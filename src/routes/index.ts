import express from "express";
import auth from "./auth";
import user from "./user";
import restaurant from "./restaurant";
import requests from "./order";

const router = express.Router();

export default (): express.Router => {
  auth(router);
  user(router);
  restaurant(router);
  requests(router);

  return router;
};
