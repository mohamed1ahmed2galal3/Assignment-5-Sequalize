const { where } = require("sequelize");
const { User } = require("../common/db/user.model");
async function findUserById(id) {
  // implementation for finding user by ID
  const user = await User.findOne({ where: { id } });
  return user;
}
async function findUserByEmail(email) {
  // implementation for finding user by ID
  const user = await User.findOne({ where: { email } });
  return user;
}

async function createUser(name, email, password, role) {
  const user = User.build({ name, email, password, role });
  await user.save();
  return user;
}

async function updateUser(id, name, email, password, role) {
  const result = await User.update(
    { name, email, password, role },
    {
      where: { id },
      validate: false, // to skip the validation
    },
  );
  return result;
}

module.exports = {
  findUserById,
  findUserByEmail,
  createUser,
  updateUser,
};
