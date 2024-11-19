const sequelize = require("../../config/dbSequalize");
const User = require("./user");

(async () => {
  try {
    await sequelize.sync({ alter: true });
    // console.log("Database synced successfully.");
  } catch (error) {
    console.error("Error syncing database:", error);
  }
})();

module.exports = {
  sequelize,
  User,
};
