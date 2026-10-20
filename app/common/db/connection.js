const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("squelize_assignment", "root", "", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

module.exports = { sequelize };
