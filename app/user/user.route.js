const { Router } = require("express");
const userRouter = Router();
const userController = require("./user.controller");

userRouter.post("/signup", userController.createUser);
userRouter.put("/:id", userController.updateUser);
userRouter.get("/by-email", userController.getUserByEmail);
userRouter.get("/:id", userController.getUserById);

module.exports = {
  userRouter,
};
