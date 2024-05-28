const mongoose = require("mongoose");

let dbConnection;

module.exports = {
  connectToDb: (cb) => {
    mongoose
      .connect(process.env.MONGODB_URI, {
        dbName: "Seu Garcom v0",
      })
      .then((client) => {
        dbConnection = client.db();
        return cb();
      })
      .catch((err) => {
        console.log(err);
        return cb(err);
      });
  },
  getDb: () => dbConnection,
};
