const express = require("express");
const userController = require("./../controllers/user.controller");
const UserRouter = express.Router();

UserRouter.post("/signup", userController.UserSignUp);
UserRouter.post("/login", userController.UserLogin);

module.exports = UserRouter;
