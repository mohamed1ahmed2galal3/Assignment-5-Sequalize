const { DataTypes } = require("sequelize");
const { sequelize } = require("./connection");

function checkNameLength(user) {
  if (user.name.length <= 2) {
    throw new Error("Name must be greater than 2 characters");
  }
}

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(150),
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING(50),
      validate: {
        checkPasswordLength(value) {
          if (typeof value !== "string" || value.length <= 6) {
            throw new Error("password must be greater than 6 characters");
          }
        },
      },
    },
    role: {
      type: DataTypes.ENUM("user", "admin"),
    },
  },
  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    hooks: {
      beforeCreate: checkNameLength,
    },
  },
);

module.exports = { User };
