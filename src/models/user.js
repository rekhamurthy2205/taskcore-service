const { DataTypes } = require("sequelize");
const sequelize = require("../../config/dbSequalize");
const uuid = require("uuid");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      defaultValue: uuid.v4(),
      onDelete: "CASCADE",
      validate: {
        notEmpty: true,
      },
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      onDelete: "CASCADE",
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      onDelete: "CASCADE",
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });
  return User;
};
