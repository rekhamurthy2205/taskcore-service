const responseStructure = require("../../utils/responseStructure");
const db = require("../../src/models/index");
const { Sequelize, sequelize } = require("sequelize");
const { User } = require("../models");

// Create a new user
const createUser = async (req, res) => {
  try {
    const createData = req.body.insertObject;
    const user = await User.create(createData);
    if (Object.keys(createData).length > 0) {
      await User.create(createData).then((result, error) => {
        if (error) {
          responseMessage = responseStructure.errorResponse(
            "Error in create data"
          );
          res.send(responseMessage);
        } else {
          responseMessage = responseStructure.successResponse(
            "Successfully inserted value"
          );
          res.send(responseMessage);
        }
      });
    } else {
      responseMessage = responseStructure.errorResponse("entering null values");
      res.send(responseMessage);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get user by ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a user
const updateUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    await user.update(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a user
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    await user.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
