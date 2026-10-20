const userService = require("./user.service");

// create user
async function createUser(req, res, next) {
  try {
    // extract data from body
    const { name, email, password, role } = req.body;
    // call create user service and pass the values to it
    const createdUser = await userService.createUser(
      name,
      email,
      password,
      role,
    );
    // send response
    res.status(201).json({
      message: "user Created Successfully",
      success: true,
      data: createdUser,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      success: false,
    });
  }
}

// update user by id
async function updateUser(req, res, next) {
  try {
    // catch id from params
    const id = req.params.id;
    // catch values from body
    const { name, email, password, role } = req.body;
    // call update user service
    await userService.updateUser(id, name, email, password, role);
    res.status(200).json({
      message: "user updated successfully",
      success: true,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
      success: false,
    });
  }
}

// get user by email
async function getUserByEmail(req, res, next) {
  try {
    // catch email from query
    const email = req.query.email;
    // call get user by email service
    const user = await userService.getUserByEmail(email);
    res.status(200).json({
      message: "user fetched successfully",
      success: true,
      data: user,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
      success: false,
    });
  }
}

// get user by id
async function getUserById(req, res, next) {
  try {
    // catch id from params
    const id = req.params.id;
    // call get user by id service
    const user = await userService.getUserById(id);
    res.status(200).json({
      message: "user fetched successfully",
      success: true,
      data: user,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
      success: false,
    });
  }
}

module.exports = {
  createUser,
  updateUser,
  getUserByEmail,
  getUserById,
};
