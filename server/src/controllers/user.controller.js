const express = require("express");
const app_constant = require("./../constant/app.json");
const userService = require("./../services/user.service");
const validationHelper = require("./../helpers/validation");

exports.UserSignUp = async (request, response) => {
  try {
    // checking all the filled are given by the user or not
    const required_fields = ["username", "email", "password"];
    const validation = validationHelper.validation(
      required_fields,
      request.body
    );
    if (Object.keys(validation).length) {
      return response.json({
        success: 0,
        status_code: app_constant.BAD_REQUEST,
        message: validation,
        result: {},
      });
    }
    // if all the filleds are filled then..
    const addUser = await userService.userSignUp(request.body);

    return response.json(addUser);
  } catch (error) {
    console.log(error);
    response.json({
      success: 0,
      status_code: app_constant.INTERNAL_SERVER_ERROR,
      message: error.message,
      result: {},
    });
  }
};

exports.UserLogin = async (request, response) => {
  try {
    // checking all the filled are given by the user or not
    const required_fields = ["email", "password"];
    const validation = validationHelper.validation(
      required_fields,
      request.body
    );

    if (Object.keys(validation).length) {
      return response.json({
        success: 0,
        status_code: app_constant.BAD_REQUEST,
        message: validation,
        result: {},
      });
    }
    // if all the filleds are filled then..
    const addUser = await userService.userLogin(request.body);

    return response.json(addUser);
  } catch (error) {
    console.log(error);
    response.json({
      success: 0,
      status_code: app_constant.INTERNAL_SERVER_ERROR,
      message: error.message,
      result: {},
    });
  }
};
