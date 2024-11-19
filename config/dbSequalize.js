const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("task", "root", "root", {
  host: "127.0.0.1",
  dialect: "mysql",
  logging: false,
});

(async () => {
  try {
    await sequelize.authenticate();
    // console.log("Database connection established successfully.");
  } catch (error) {
    // console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;
