const userRepository = require("./user.repository");

async function createUser(name, email, password, role) {
  // check if user already exists
  const existingUser = await userRepository.findUserByEmail(email);
  // if exist throw an error
  if (existingUser) throw new Error("user already exist");
  // if no add it to db
  const user = await userRepository.createUser(name, email, password, role);
  // delete password from the user object
  delete user.dataValues.password;
  return user;
}

async function updateUser(id, name, email, password, role) {
  // check if user exist
  const existingUser = await userRepository.findUserById(id);
  // if not exist throw an error
  if (!existingUser) throw new Error("user does not exist");
  // if exist update it
  const result = userRepository.updateUser(id, name, email, password, role);
  if (result[0] === 0) {
    throw new Error("user not Updated ");
  }
}

async function getUserByEmail(email) {
  // check if user exist
  const existingUser = await userRepository.findUserByEmail(email);
  if (!existingUser) throw new Error("user does not exist");
  // delete password from the user object
  delete existingUser.dataValues.password;
  // if exist return it
  return existingUser;
}

// retrieve user by id without role
async function getUserById(id) {
  // check if user exist
  const existingUser = await userRepository.findUserById(id);
  // if not exist throw an error
  if (!existingUser) throw new Error("user does not exist");
  // delete password and role from the user object
  delete existingUser.dataValues.password;
  delete existingUser.dataValues.role;
  return existingUser;
}

module.exports = {
  createUser,
  updateUser,
  getUserByEmail,
  getUserById,
};
