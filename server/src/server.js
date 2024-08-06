const express = require("express");
require("./helpers/Db");
const UserRouter = require("./routes/user.router");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use("/user", UserRouter);

app.listen(process.env.PORT, () => {
  console.log(`server listening on port ${process.env.PORT}`);
});
