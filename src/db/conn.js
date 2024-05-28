const mongoose = require("mongoose");

let uri =
  "mongodb+srv://matheusqo1:9mjl6BkwgI0J6nmz@seugarcom1.ywmykl2.mongodb.net/?retryWrites=true&w=majority";

const dbConnection = () => {
  mongoose
    .connect(uri, {
      dbName: "SeuGarcom",
    })
    .then(() => {
      console.log("Connection established correctly.");
    })
    .catch((err) => {
      console.log(`Could connect to database. ${err}`);
    });
};

module.exports = { dbConnection };
