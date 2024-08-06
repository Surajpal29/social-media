const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/social-media")
  .then(() => {
    console.log("DataBase connected succesfully");
  })
  .catch((err) => console.log("Error connecting to Database", err));
